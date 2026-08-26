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
             return new Response(JSON.stringify({ success: true, hostname: 'ritealmar.es' }));
         }
         
         if (response === 'invalid_hostname') {
             return new Response(JSON.stringify({ success: true, hostname: 'evil.com' }));
         }

         if (response === 'siteverify_down') {
             throw new Error("API Down");
         }

         return new Response(JSON.stringify({ success: false, 'error-codes': ['invalid-input-response'] }));
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

  it('deniega orígenes no autorizados', async () => {
    const req = createRequest({ cf_turnstile_response: 'valid_token' }, 'https://evil.com', 'OPTIONS');
    const res = await worker.fetch(req, mockEnv, {});
    // Should fallback to https://ritealmar.es
    expect(res.headers.get('Access-Control-Allow-Origin')).toBe('https://ritealmar.es');
  });

  it('rechaza solicitudes sin token', async () => {
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

  it('valida el origin del token', async () => {
    const req = createRequest({ nombre: 'Test', email: 'test@test.com', cf_turnstile_response: 'invalid_hostname' });
    const res = await worker.fetch(req, mockEnv, {});
    const json = await res.json();
    expect(res.status).toBe(400);
    expect(json.error).toMatch(/Origen de token/i);
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
    expect(json.email_sent).toBe(true);
    
    // Verifica que fetch fue llamado a google sheets y formsubmit
    const urls = vi.mocked(global.fetch).mock.calls.map(c => c[0]);
    expect(urls.some(u => String(u).includes('formsubmit.co'))).toBe(true);
    expect(urls.some(u => String(u).includes('google.sheets'))).toBe(true);
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
    expect(res.status).toBe(200);
    expect(json.success).toBe(true);
    expect(json.email_sent).toBe(false); // Porque dimos error 500 en formsubmit
  });
});
