import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import worker from '../worker';

describe('Worker Edge API', () => {
  let mockEnv: any;
  
  beforeEach(() => {
    mockEnv = {
      TURNSTILE_SECRET_KEY: 'mock_secret_key',
      GOOGLE_SHEETS_URL: 'https://mock.google.sheets.url'
    };
    
    global.fetch = vi.fn().mockImplementation(async (url, init) => {
      if (url.includes('siteverify')) {
         const body = init.body as FormData;
         const response = body.get('response');
         
         if (response === 'valid_token') {
             return new Response(JSON.stringify({ success: true, hostname: 'ritealmar.es', action: 'contact' }));
         }
         
         if (response === 'invalid_hostname') {
             return new Response(JSON.stringify({ success: true, hostname: 'evil.com', action: 'contact' }));
         }

         if (response === 'invalid_action') {
             return new Response(JSON.stringify({ success: true, hostname: 'ritealmar.es', action: 'login' }));
         }

         if (response === 'siteverify_down') {
             throw new Error("API Down");
         }

         return new Response(JSON.stringify({ success: false, 'error-codes': ['invalid-input-response'] }));
      }
      
      if (url.includes('api.resend.com')) {
          if (init.body.includes('simular_error_resend')) {
              return new Response("Resend Error", { status: 500 });
          }
          return new Response(JSON.stringify({ id: 'resend_mock_id' }), { status: 200 });
      }

      if (url.includes('formsubmit.co')) {
          if (init.body.includes('simular_error_correo')) {
              return new Response("Error", { status: 500 });
          }
          return new Response(JSON.stringify({ success: true }), { status: 200 });
      }

      if (url.includes('google.sheets')) {
          return new Response("OK", { status: 200 });
      }
      
      return new Response("Not found", { status: 404 });
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const createRequest = (body: any, origin = 'https://ritealmar.es', method = 'POST') => {
     return new Request('https://ritealmar.es/api/contact', {
       method,
       headers: {
         'Origin': origin,
         'Content-Type': 'application/json'
       },
       body: method === 'POST' ? JSON.stringify(body) : undefined
     });
  };

  it('rechaza solicitudes OPTIONS correctamente (Preflight)', async () => {
    const req = createRequest(null, 'https://ritealmar.es', 'OPTIONS');
    const res = await worker.fetch(req, mockEnv, {});
    expect(res.status).toBe(200);
    expect(res.headers.get('Access-Control-Allow-Origin')).toBe('https://ritealmar.es');
  });

  it('deniega orígenes maliciosos similares pero no exactos', async () => {
    // Should fallback to https://ritealmar.es (fail closed)
    const origins = [
      'https://ritealmar.es.attacker.example',
      'https://fake-ritealmar.pages.dev.attacker.example',
      'https://ritealmar.pages.dev.attacker.example',
      'http://localhost.attacker.com',
      'https://ritealmar.es' // This one is valid, just checking logic
    ];

    for (const badOrigin of origins.slice(0, 4)) {
        const req = createRequest({ cf_turnstile_response: 'valid_token' }, badOrigin, 'OPTIONS');
        const res = await worker.fetch(req, mockEnv, {});
        expect(res.headers.get('Access-Control-Allow-Origin')).toBe('https://ritealmar.es');
    }
  });

  it('rechaza solicitudes sin token con 400', async () => {
    const req = createRequest({ nombre: 'Test', email: 'test@test.com' });
    const res = await worker.fetch(req, mockEnv, {});
    const json = await res.json();
    expect(res.status).toBe(400);
    expect(json.success).toBe(false);
    expect(json.error).toMatch(/anti-spam/i);
  });

  it('rechaza token inválido', async () => {
    const req = createRequest({ nombre: 'Test', email: 'test@test.com', cf_turnstile_response: 'bad_token' });
    const res = await worker.fetch(req, mockEnv, {});
    const json = await res.json();
    expect(res.status).toBe(400);
    expect(json.error).toMatch(/humano/i);
  });
  
  it('falla seguro si Siteverify no está disponible', async () => {
    const req = createRequest({ nombre: 'Test', email: 'test@test.com', cf_turnstile_response: 'siteverify_down' });
    const res = await worker.fetch(req, mockEnv, {});
    const json = await res.json();
    // Nuestro worker maneja excepciones y tira 502 temporal
    expect(res.status).toBe(502);
    expect(json.success).toBe(false);
  });

  it('valida el origin del token de forma estricta (403)', async () => {
    const req = createRequest({ nombre: 'Test', email: 'test@test.com', cf_turnstile_response: 'invalid_hostname' });
    const res = await worker.fetch(req, mockEnv, {});
    const json = await res.json();
    expect(res.status).toBe(403);
    expect(json.error).toMatch(/Origen del token/i);
  });

  it('rechaza tokens emitidos para otra acción', async () => {
    const req = createRequest({ nombre: 'Test', email: 'test@test.com', cf_turnstile_response: 'invalid_action' });
    const res = await worker.fetch(req, mockEnv, {});
    const json = await res.json();
    expect(res.status).toBe(403);
    expect(json.error).toMatch(/acción/i);
  });

  it('rechaza payload demasiado grande (campos muy largos)', async () => {
    const req = createRequest({ 
      nombre: 'a'.repeat(200), // Max is 100
      email: 'test@test.com', 
      cf_turnstile_response: 'valid_token' 
    });
    const res = await worker.fetch(req, mockEnv, {});
    const json = await res.json();
    expect(res.status).toBe(400);
    expect(json.details.some((d: string) => d.includes('menos de 100 caracteres'))).toBe(true);
  });

  it('rechaza campos inválidos (email malo)', async () => {
    const req = createRequest({ 
      nombre: 'Valido',
      email: 'no_es_email', 
      privacidad: true,
      cf_turnstile_response: 'valid_token' 
    });
    const res = await worker.fetch(req, mockEnv, {});
    const json = await res.json();
    expect(res.status).toBe(400);
    expect(json.details.some((d: string) => d.includes('formato válido'))).toBe(true);
  });

  it('procesa un envío exitoso simulado y proxy a formsubmit', async () => {
    const req = createRequest({ 
      nombre: 'Lead Real',
      email: 'lead@test.com',
      mensaje: 'Prueba de envio',
      privacidad: true,
      cf_turnstile_response: 'valid_token' 
    });
    const res = await worker.fetch(req, mockEnv, {});
    const json = await res.json();
    expect(res.status).toBe(200);
    expect(json.success).toBe(true);
    expect(json.message).toMatch(/recibida correctamente/);
    expect(json.ai).toBeUndefined();
    
    // Verifica que fetch fue llamado a google sheets y formsubmit
    const urls = vi.mocked(global.fetch).mock.calls.map(c => c[0]);
    expect(urls.some(u => String(u).includes('formsubmit.co'))).toBe(true);
    expect(urls.some(u => String(u).includes('google.sheets'))).toBe(true);
  });

  it('procesa un envío exitoso a través de Resend cuando RESEND_API_KEY está configurada', async () => {
    const envWithResend = {
      ...mockEnv,
      RESEND_API_KEY: 're_test_key_123'
    };
    const req = createRequest({ 
      nombre: 'Lead Resend',
      email: 'lead@test.com',
      mensaje: 'Prueba de envio con Resend',
      privacidad: true,
      cf_turnstile_response: 'valid_token' 
    });
    const res = await worker.fetch(req, envWithResend, {});
    const json = await res.json();
    expect(res.status).toBe(200);
    expect(json.success).toBe(true);
    
    const urls = vi.mocked(global.fetch).mock.calls.map(c => c[0]);
    expect(urls.some(u => String(u).includes('api.resend.com'))).toBe(true);
    expect(urls.some(u => String(u).includes('formsubmit.co'))).toBe(false);
  });

  it('activa fallback a Formsubmit si Resend falla', async () => {
    const envWithResend = {
      ...mockEnv,
      RESEND_API_KEY: 're_test_key_123'
    };
    const req = createRequest({ 
      nombre: 'simular_error_resend',
      email: 'lead@test.com',
      mensaje: 'Prueba fallback a formsubmit',
      privacidad: true,
      cf_turnstile_response: 'valid_token' 
    });
    const res = await worker.fetch(req, envWithResend, {});
    const json = await res.json();
    expect(res.status).toBe(200);
    expect(json.success).toBe(true);
    
    const urls = vi.mocked(global.fetch).mock.calls.map(c => c[0]);
    expect(urls.some(u => String(u).includes('api.resend.com'))).toBe(true);
    expect(urls.some(u => String(u).includes('formsubmit.co'))).toBe(true);
  });

  it('maneja fallo del proveedor de correo gracefully', async () => {
    const req = createRequest({ 
      nombre: 'simular_error_correo',
      email: 'lead@test.com',
      privacidad: true,
      cf_turnstile_response: 'valid_token' 
    });
    const res = await worker.fetch(req, mockEnv, {});
    const json = await res.json();
    expect(res.status).toBe(502);
    expect(json.success).toBe(false);
    expect(json.error).toMatch(/correo no está disponible/i);
  });
});
