import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle2, Copy, ExternalLink, ShieldAlert, CheckSquare, Settings2, FileText, Save } from 'lucide-react';
// Asumiendo que utils/analytics.ts existe y exporta trackEvent
import { trackEvent } from '../utils/analytics';

export default function LeadEmailGenerator() {
  const [formData, setFormData] = useState({
    empresa: '',
    sector: '',
    email: '',
    ciudad: '',
    servicio: 'Auditoría gratuita',
    observacion: '',
    contacto: '',
    web: '',
    telefono: '',
    notas: ''
  });

  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [copiedSubject, setCopiedSubject] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const sectorLower = formData.sector.toLowerCase();
    
    // Generar Asunto
    let newSubject = 'Auditoría gratuita para mejorar captación de clientes';
    if (sectorLower.includes('clínica') || sectorLower.includes('clinica') || sectorLower.includes('dental')) {
      newSubject = 'Auditoría gratuita para mejorar captación de pacientes';
    } else if (sectorLower.includes('inmobiliaria')) {
      newSubject = 'Auditoría gratuita para mejorar captación de propietarios y compradores';
    }
    setSubject(newSubject);

    // Generar Cuerpo
    const greeting = formData.contacto ? `Hola ${formData.contacto},` : 'Hola,';
    const empresaText = formData.empresa ? formData.empresa : 'vuestra empresa';
    const observacionLine = formData.observacion 
      ? `Como primera observación, he visto que ${formData.observacion}.\n\n`
      : '';

    let clientType = 'clientes';
    if (sectorLower.includes('clínica') || sectorLower.includes('clinica') || sectorLower.includes('dental')) {
      clientType = 'pacientes';
    } else if (sectorLower.includes('inmobiliaria')) {
      clientType = 'propietarios y compradores';
    }

    const newBody = `${greeting}

Soy Ricardo, de RITEALMAR.

He estado revisando la presencia online de ${empresaText} y creo que podríamos ayudaros a mejorar la captación de ${clientType} y automatizar parte de la atención o el seguimiento comercial.

${observacionLine}Estamos ofreciendo una auditoría gratuita donde revisamos web, formularios, WhatsApp, procesos manuales y oportunidades de IA.

La podéis solicitar aquí:
https://ritealmar.es/auditoria-ia-gratis

Si no os encaja ahora, no hay problema. La auditoría es simplemente una primera revisión gratuita.

Un saludo,
Ricardo
RITEALMAR
https://ritealmar.es`;

    setBody(newBody);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = async (text: string, type: 'subject' | 'body') => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      
      if (type === 'subject') {
        setCopiedSubject(true);
        setTimeout(() => setCopiedSubject(false), 2000);
      } else {
        setCopiedBody(true);
        setTimeout(() => setCopiedBody(false), 2000);
      }
      
      try {
        if (typeof trackEvent === 'function') {
          trackEvent('email_generator_used', { copy_type: type });
        }
      } catch (e) {
        // Ignorar si trackEvent falla
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const openIonosWebmail = () => {
    try {
      if (typeof trackEvent === 'function') {
        trackEvent('ionos_webmail_click', { sector: formData.sector });
      }
    } catch (e) {
       // Ignorar si trackEvent falla
    }
    window.open('https://email.ionos.es/', '_blank', 'noopener noreferrer');
  };

  const handleSaveToSheets = async () => {
    const endpoint = '/api/save-to-sheets';

    setIsSaving(true);
    setSaveStatus('idle');

    try {
      const payload = {
        fecha: new Date().toLocaleDateString('es-ES'),
        empresa: formData.empresa,
        sector: formData.sector,
        web: formData.web,
        telefono: formData.telefono,
        email: formData.email,
        ciudad: formData.ciudad,
        contactado: "No",
        respuesta: "Sin respuesta",
        notas: formData.notas,
        servicioRecomendado: formData.servicio,
        observacion: formData.observacion
      };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSaveStatus('success');
        setTimeout(() => setSaveStatus('idle'), 3000);
        try {
          if (typeof trackEvent === 'function') {
            trackEvent('lead_saved_to_sheets');
          }
        } catch(e) {}
      } else {
        throw new Error('Error en la respuesta del servidor');
      }
    } catch (error) {
      console.error("Error saving to sheets:", error);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-[#0A1628]/50 border border-white/5 rounded-2xl p-6 md:p-8">
      
      {/* Aviso de Uso Seguro */}
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-8 flex items-start gap-3">
        <ShieldAlert className="text-yellow-500 shrink-0 mt-0.5" size={20} />
        <div>
          <h4 className="text-yellow-500 font-bold text-sm mb-1">Uso responsable</h4>
          <p className="text-yellow-500/80 text-sm leading-relaxed mb-2">
            Uso recomendado: contactar de forma individual, revisar cada mensaje y evitar envíos masivos no solicitados. Esta herramienta no envía emails automáticamente.
          </p>
          <p className="text-yellow-500/80 text-sm leading-relaxed font-bold">
            Nota: Esta integración solo guarda datos introducidos manualmente por el usuario. No realiza scraping ni envíos automáticos.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8">
        {/* Formulario */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Settings2 className="text-cyan-400" size={18} />
            <h3 className="font-bold text-lg text-white">1. Datos del prospecto</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="gen_empresa" className="block text-xs font-bold text-slate-400 mb-1">Empresa</label>
              <input id="gen_empresa" type="text" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Ej: Clínica Dental San José" className="w-full bg-[#030712] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors" />
            </div>
            <div>
              <label htmlFor="gen_contacto" className="block text-xs font-bold text-slate-400 mb-1">Nombre Contacto</label>
              <input id="gen_contacto" type="text" name="contacto" value={formData.contacto} onChange={handleChange} placeholder="Ej: Dra. María" className="w-full bg-[#030712] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="gen_sector" className="block text-xs font-bold text-slate-400 mb-1">Sector</label>
              <input id="gen_sector" type="text" name="sector" value={formData.sector} onChange={handleChange} placeholder="Ej: Clínica dental" className="w-full bg-[#030712] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors" />
            </div>
            <div>
              <label htmlFor="gen_ciudad" className="block text-xs font-bold text-slate-400 mb-1">Ciudad</label>
              <input id="gen_ciudad" type="text" name="ciudad" value={formData.ciudad} onChange={handleChange} placeholder="Ej: Madrid" className="w-full bg-[#030712] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="gen_email" className="block text-xs font-bold text-slate-400 mb-1">Email Destino</label>
              <input id="gen_email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="info@empresa.com" className="w-full bg-[#030712] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors" />
            </div>
            <div>
              <label htmlFor="gen_telefono" className="block text-xs font-bold text-slate-400 mb-1">Teléfono</label>
              <input id="gen_telefono" type="text" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Ej: 600 00 00 00" className="w-full bg-[#030712] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors" />
            </div>
          </div>

          <div>
            <label htmlFor="gen_web" className="block text-xs font-bold text-slate-400 mb-1">Página Web</label>
            <input id="gen_web" type="text" name="web" value={formData.web} onChange={handleChange} placeholder="Ej: www.empresa.com" className="w-full bg-[#030712] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors" />
          </div>

          <div>
            <label htmlFor="gen_servicio" className="block text-xs font-bold text-slate-400 mb-1">Servicio recomendado</label>
            <select id="gen_servicio" name="servicio" value={formData.servicio} onChange={handleChange} className="w-full bg-[#030712] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none">
              <option>Auditoría gratuita</option>
              <option>Web profesional</option>
              <option>Automatización IA</option>
              <option>Chatbot / Agente IA</option>
              <option>SEO local</option>
              <option>Captación de leads</option>
              <option>No lo tengo claro</option>
            </select>
          </div>

          <div>
            <label htmlFor="gen_observacion" className="block text-xs font-bold text-slate-400 mb-1">Observación detectada (Opcional)</label>
            <textarea id="gen_observacion" name="observacion" value={formData.observacion} onChange={handleChange} placeholder="Ej: la web tarda mucho en cargar o el formulario no funciona" rows={3} className="w-full bg-[#030712] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors resize-none" />
          </div>
          
          <div>
            <label htmlFor="gen_notas" className="block text-xs font-bold text-slate-400 mb-1">Notas internas (Solo para Google Sheets)</label>
            <textarea id="gen_notas" name="notas" value={formData.notas} onChange={handleChange} placeholder="Ej: Parece que invierten en Google Ads" rows={2} className="w-full bg-[#030712] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors resize-none" />
          </div>

          <div className="pt-2">
            <button
              onClick={handleSaveToSheets}
              disabled={isSaving || !formData.empresa}
              className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold transition-all ${
                saveStatus === 'success' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : saveStatus === 'error'
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                  : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed'
              }`}
            >
              {saveStatus === 'success' ? (
                <><CheckCircle2 size={16} /> Guardado correctamente</>
              ) : isSaving ? (
                <><div className="w-4 h-4 border-2 border-slate-300 border-t-transparent rounded-full animate-spin" /> Guardando...</>
              ) : (
                <><Save size={16} /> Guardar negocio en Google Sheets</>
              )}
            </button>
            {saveStatus === 'error' && (
              <p className="text-red-400 text-xs mt-2 text-center">Error al guardar. Revisa la conexión y la configuración.</p>
            )}
          </div>
        </div>

        {/* Vista Previa */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="text-cyan-400" size={18} />
            <h3 className="font-bold text-lg text-white">2. Email generado</h3>
          </div>

          <div className="bg-[#030712] border border-white/10 rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
            <div className="p-4 border-b border-white/5 flex flex-col gap-2">
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Asunto:</div>
              <div className="text-sm text-white font-medium break-words">{subject}</div>
              <button 
                onClick={() => handleCopy(subject, 'subject')}
                className="self-start text-xs flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 mt-1 transition-colors"
              >
                {copiedSubject ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                {copiedSubject ? "Copiado" : "Copiar asunto"}
              </button>
            </div>
            
            <div className="p-4 flex-grow bg-white/[0.01]">
              <pre className="text-slate-300 text-sm whitespace-pre-wrap break-words w-full font-mono leading-relaxed font-sans">{body}</pre>
            </div>

            <div className="p-4 border-t border-white/5 bg-white/5 flex flex-col sm:flex-row gap-3 justify-end mt-auto">
              <button
                onClick={() => handleCopy(body, 'body')}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all flex-1 sm:flex-none ${
                  copiedBody 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20'
                }`}
              >
                {copiedBody ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                {copiedBody ? "Copiado correctamente" : "Copiar cuerpo"}
              </button>
              
              <button
                onClick={openIonosWebmail}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white rounded-lg text-sm font-bold transition-all flex-1 sm:flex-none shadow-lg shadow-purple-500/25"
              >
                <ExternalLink size={16} />
                Abrir IONOS Webmail
              </button>
            </div>
            <div className="px-4 py-3 bg-black/40 border-t border-white/5 text-center">
              <p className="text-xs text-slate-400">
                Recomendado: envía los emails comerciales desde <span className="text-white font-bold">info@ritealmar.es</span> para mantener imagen profesional y mejorar confianza.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Manual de Uso y Buenas Prácticas */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
        <div>
          <h4 className="font-bold text-white mb-4 flex items-center gap-2">
            <CheckSquare className="text-cyan-400" size={18} />
            Checklist de uso responsable
          </h4>
          <ul className="space-y-3">
            {[
              "Revisar el mensaje antes de enviarlo.",
              "Contactar negocios uno a uno.",
              "Evitar envíos masivos.",
              "Registrar el contacto en la hoja Leads RITEALMAR.",
              "Si piden no recibir más mensajes, no volver a contactar.",
              "Priorizar formularios web o contactos profesionales publicados por la empresa."
            ].map((rule, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-4 flex items-center gap-2">
            <Settings2 className="text-purple-400" size={18} />
            Cómo usarlo paso a paso
          </h4>
          <div className="bg-[#030712] border border-white/5 rounded-xl p-4">
            <ol className="space-y-3 text-sm text-slate-300 list-decimal list-inside">
              <li>Copia asunto.</li>
              <li>Copia cuerpo.</li>
              <li>Abre IONOS Webmail.</li>
              <li>Redacta desde info@ritealmar.es.</li>
              <li>Pega destinatario, asunto y mensaje.</li>
              <li>Revisa y envía manualmente.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
