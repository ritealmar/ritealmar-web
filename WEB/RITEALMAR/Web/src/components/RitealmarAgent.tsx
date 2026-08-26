import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, RefreshCw } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

type Step =
  | 'closed'
  | 'initial'
  | 'captacion_tipo'
  | 'captacion_problema'
  | 'captacion_result'
  | 'automatizar_tipo'
  | 'automatizar_result'
  | 'mejorar_tipo'
  | 'mejorar_result'
  | 'chatbot_tipo'
  | 'chatbot_result'
  | 'otro_input'
  | 'otro_result';

const SESSION_OPEN_KEY = 'ritealmar_agent_opened_v1';
const SESSION_STEP_KEY = 'ritealmar_agent_step_v1';

export default function RitealmarAgent(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [step, setStep] = useState<Step>('closed');
  const [otherText, setOtherText] = useState('');
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const opened = sessionStorage.getItem(SESSION_OPEN_KEY) === '1';
    if (opened) {
      setIsOpen(true);
      const s = (sessionStorage.getItem(SESSION_STEP_KEY) as Step) || 'initial';
      setStep(s);
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (isOpen) {
      sessionStorage.setItem(SESSION_OPEN_KEY, '1');
      sessionStorage.setItem(SESSION_STEP_KEY, step);
    } else {
      sessionStorage.removeItem(SESSION_OPEN_KEY);
    }
  }, [isOpen, step]);

  const openWithInitial = () => {
    setIsOpen(true);
    setStep('initial');
    trackEvent('agent_open', { option: 'open_button', page_path: window.location.pathname });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const restart = () => {
    setStep('initial');
    setOtherText('');
    trackEvent('agent_option_selected', { option: 'restart', page_path: window.location.pathname });
  };

  const selectOption = (opt: string) => {
    trackEvent('agent_option_selected', { option: opt, page_path: window.location.pathname });
    switch (opt) {
      case 'captar':
        setStep('captacion_tipo');
        break;
      case 'automatizar':
        setStep('automatizar_tipo');
        break;
      case 'mejorar':
        setStep('mejorar_tipo');
        break;
      case 'chatbot':
        setStep('chatbot_tipo');
        break;
      case 'otro':
        setStep('otro_input');
        break;
      default:
        setStep('initial');
    }
  };

  // Flujos: captación
  const selectCaptacionTipo = (t: string) => {
    trackEvent('agent_option_selected', { option: 'captacion_tipo', step: t, page_path: window.location.pathname });
    setStep('captacion_problema');
  };

  const selectCaptacionProblema = (p: string) => {
    trackEvent('agent_option_selected', { option: 'captacion_problema', step: p, page_path: window.location.pathname });
    setStep('captacion_result');
  };

  // Automatizar
  const selectAutomatizarTipo = (t: string) => {
    trackEvent('agent_option_selected', { option: 'automatizar_tipo', step: t, page_path: window.location.pathname });
    setStep('automatizar_result');
  };

  // Mejorar web
  const selectMejorarTipo = (t: string) => {
    trackEvent('agent_option_selected', { option: 'mejorar_tipo', step: t, page_path: window.location.pathname });
    setStep('mejorar_result');
  };

  // Chatbot
  const selectChatbotTipo = (t: string) => {
    trackEvent('agent_option_selected', { option: 'chatbot_tipo', step: t, page_path: window.location.pathname });
    setStep('chatbot_result');
  };

  const submitOther = () => {
    trackEvent('agent_option_selected', { option: 'other_submitted', page_path: window.location.pathname });
    setStep('otro_result');
  };

  const handleAuditoriaClick = () => {
    trackEvent('agent_auditoria_click', { page_path: window.location.pathname });
    handleClose();
    window.open('/auditoria-ia-gratis', '_self');
  };

  const handleWhatsappClick = () => {
    trackEvent('agent_whatsapp_click', { page_path: window.location.pathname });
    window.open('https://wa.me/34611155415', '_blank');
  };

  return (
    <div>
      {/* Botón flotante */}
      <button
        aria-label="Abrir Asistente RITEALMAR"
        onClick={openWithInitial}
        className="fixed right-4 bottom-[90px] z-[81] lg:bottom-[90px] flex items-center justify-center gap-3 bg-[#071029] border border-cyan-400/40 text-[#00D4FF] rounded-full w-12 h-12 lg:w-auto lg:h-auto lg:px-4 lg:py-3 shadow-[0_6px_24px_rgba(0,212,255,0.08)] hover:shadow-[0_8px_36px_rgba(0,212,255,0.12)] transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        <MessageSquare size={20} className="" />
        <span className="hidden lg:inline font-semibold text-sm">Preguntar a la IA</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 30 }}
            transition={{ duration: 0.18 }}
            className="fixed right-4 bottom-[140px] z-[90] lg:bottom-[140px] w-[92vw] sm:w-[420px] max-w-[420px] h-[64vh] lg:h-[560px] bg-[#071320] border border-cyan-500/20 rounded-xl shadow-[0_20px_60px_rgba(0,17,32,0.6)] overflow-hidden"
            role="dialog"
            aria-label="Asistente RITEALMAR"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">Asistente RITEALMAR</span>
                    <span className="text-xs text-slate-400">IA para empresas</span>
                  </div>
                  <div className="text-xs text-green-400 mt-1 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-400 inline-block" aria-hidden />
                    <span>Disponible</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    aria-label="Reiniciar conversación"
                    onClick={restart}
                    className="p-2 rounded-md hover:bg-white/5"
                  >
                    <RefreshCw size={16} />
                  </button>
                  <button aria-label="Cerrar" onClick={handleClose} className="p-2 rounded-md hover:bg-white/5">
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-auto p-4 text-sm" tabIndex={0}>
                {/* Mensajes / Flujos */}
                {step === 'initial' && (
                  <div className="space-y-4">
                    <div className="bg-[#071a25] p-3 rounded-lg">
                      <p>Hola 👋 Soy el asistente de RITEALMAR.</p>
                      <p className="mt-2">Puedo ayudarte a detectar oportunidades para captar más clientes, automatizar tareas, mejorar tu web o incorporar inteligencia artificial a tu empresa.</p>
                      <p className="mt-2 font-semibold">¿Qué quieres mejorar ahora mismo?</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button onClick={() => selectOption('captar')} className="px-3 py-2 rounded-lg bg-[#001a2b] hover:bg-[#002433]">Captar más clientes</button>
                      <button onClick={() => selectOption('automatizar')} className="px-3 py-2 rounded-lg bg-[#001a2b] hover:bg-[#002433]">Automatizar tareas</button>
                      <button onClick={() => selectOption('mejorar')} className="px-3 py-2 rounded-lg bg-[#001a2b] hover:bg-[#002433]">Mejorar mi web</button>
                      <button onClick={() => selectOption('chatbot')} className="px-3 py-2 rounded-lg bg-[#001a2b] hover:bg-[#002433]">Chatbot o agente IA</button>
                      <button onClick={() => selectOption('otro')} className="col-span-2 px-3 py-2 rounded-lg bg-[#001a2b] hover:bg-[#002433]">Otro</button>
                    </div>
                  </div>
                )}

                {step === 'captacion_tipo' && (
                  <div className="space-y-4">
                    <div className="bg-[#071a25] p-3 rounded-lg">
                      <p>Perfecto. Para orientarte mejor, ¿qué tipo de negocio tienes?</p>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {['Clínica','Inmobiliaria','Comercio / Ecommerce','Empresa de servicios','Asesoría / despacho','Otro'].map((t) => (
                        <button key={t} onClick={() => selectCaptacionTipo(t)} className="w-full text-left px-3 py-2 rounded-lg bg-[#001a2b] hover:bg-[#002433]">{t}</button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 'captacion_problema' && (
                  <div className="space-y-4">
                    <div className="bg-[#071a25] p-3 rounded-lg">
                      <p>¿Cuál es ahora mismo vuestro principal problema?</p>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {['Recibimos pocas consultas','La web recibe visitas pero no convierte','Perdemos leads o tardamos en responder','Dependemos demasiado del trabajo manual','No lo tengo claro'].map((t) => (
                        <button key={t} onClick={() => selectCaptacionProblema(t)} className="w-full text-left px-3 py-2 rounded-lg bg-[#001a2b] hover:bg-[#002433]">{t}</button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 'captacion_result' && (
                  <div className="space-y-4">
                    <div className="bg-[#071a25] p-3 rounded-lg">
                      <p>Por lo que me cuentas, una auditoría inicial puede ayudarnos a detectar dónde se están perdiendo oportunidades y qué acciones tendrían más sentido para tu negocio.</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={handleAuditoriaClick} className="flex-1 px-3 py-2 rounded-lg bg-[#00D4FF] text-black font-semibold">Solicitar auditoría gratuita</button>
                      <button onClick={handleWhatsappClick} className="px-3 py-2 rounded-lg bg-[#25D366] text-white">Hablar por WhatsApp</button>
                    </div>
                  </div>
                )}

                {step === 'automatizar_tipo' && (
                  <div className="space-y-4">
                    <div className="bg-[#071a25] p-3 rounded-lg">
                      <p>¿Qué tipo de tareas quieres reducir o automatizar?</p>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {['Responder clientes','Seguimiento de leads','Formularios y CRM','Emails','Documentos / facturas','Tareas administrativas','No lo sé todavía'].map((t) => (
                        <button key={t} onClick={() => selectAutomatizarTipo(t)} className="w-full text-left px-3 py-2 rounded-lg bg-[#001a2b] hover:bg-[#002433]">{t}</button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 'automatizar_result' && (
                  <div className="space-y-4">
                    <div className="bg-[#071a25] p-3 rounded-lg">
                      <p>Este tipo de procesos suele ser buen candidato para una automatización. Antes de recomendar herramientas, en RITEALMAR analizamos el proceso actual para detectar qué merece realmente la pena automatizar.</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={handleAuditoriaClick} className="flex-1 px-3 py-2 rounded-lg bg-[#00D4FF] text-black font-semibold">Solicitar auditoría gratuita</button>
                      <button onClick={handleWhatsappClick} className="px-3 py-2 rounded-lg bg-[#25D366] text-white">Hablar por WhatsApp</button>
                    </div>
                  </div>
                )}

                {step === 'mejorar_tipo' && (
                  <div className="space-y-4">
                    <div className="bg-[#071a25] p-3 rounded-lg">
                      <p>¿Qué quieres mejorar principalmente?</p>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {['Conseguir más contactos','Renovar el diseño','Crear una web nueva','Mejorar SEO','Añadir automatizaciones','No estoy seguro'].map((t) => (
                        <button key={t} onClick={() => selectMejorarTipo(t)} className="w-full text-left px-3 py-2 rounded-lg bg-[#001a2b] hover:bg-[#002433]">{t}</button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 'mejorar_result' && (
                  <div className="space-y-4">
                    <div className="bg-[#071a25] p-3 rounded-lg">
                      <p>Podemos revisar la web desde el punto de vista de captación, conversión, SEO y automatización antes de proponerte cambios.</p>
                    </div>
                    <div className="relative z-30 flex flex-col gap-2">
                      <button type="button" onClick={handleAuditoriaClick} className="relative z-30 pointer-events-auto w-full px-3 py-2 rounded-lg bg-[#00D4FF] text-black font-semibold">Solicitar auditoría gratuita</button>
                      <a href="/diseno-web" className="relative z-30 pointer-events-auto w-full px-3 py-2 rounded-lg bg-[#0B1220] border border-cyan-500 text-cyan-300">Ver servicio de diseño web</a>
                    </div>
                  </div>
                )}

                {step === 'chatbot_tipo' && (
                  <div className="space-y-4">
                    <div className="bg-[#071a25] p-3 rounded-lg">
                      <p>¿Qué debería hacer el agente en tu empresa?</p>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {['Responder preguntas frecuentes','Captar y cualificar leads','Reservar citas','Atención comercial','Soporte inicial','Varias de las anteriores'].map((t) => (
                        <button key={t} onClick={() => selectChatbotTipo(t)} className="w-full text-left px-3 py-2 rounded-lg bg-[#001a2b] hover:bg-[#002433]">{t}</button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 'chatbot_result' && (
                  <div className="space-y-4">
                    <div className="bg-[#071a25] p-3 rounded-lg">
                      <p>Podemos diseñar un agente adaptado a la información y procesos de tu empresa, conectado posteriormente con formularios, CRM o sistemas internos cuando tenga sentido.</p>
                    </div>
                    <div className="flex gap-2">
                      <a href="/auditoria-ia-gratis" onClick={(e) => { trackEvent('agent_option_selected', { option: 'solicitar_demo', page_path: window.location.pathname }); handleClose(); }} className="flex-1 px-3 py-2 rounded-lg bg-[#00D4FF] text-black font-semibold">Solicitar demo</a>
                      <button onClick={handleWhatsappClick} className="px-3 py-2 rounded-lg bg-[#25D366] text-white">Hablar por WhatsApp</button>
                    </div>
                  </div>
                )}

                {step === 'otro_input' && (
                  <div className="space-y-4">
                    <div className="bg-[#071a25] p-3 rounded-lg">
                      <p>Cuéntame brevemente qué quieres mejorar en tu empresa.</p>
                    </div>
                    <textarea value={otherText} onChange={(e) => setOtherText(e.target.value)} className="w-full p-3 rounded-lg bg-[#00121a] h-24 resize-none" placeholder="Escribe aquí... (no se enviará)" />
                    <div className="flex gap-2">
                      <button onClick={submitOther} className="flex-1 px-3 py-2 rounded-lg bg-[#00D4FF] text-black font-semibold">Enviar</button>
                      <button onClick={handleWhatsappClick} className="px-3 py-2 rounded-lg bg-[#25D366] text-white">Hablar por WhatsApp</button>
                    </div>
                  </div>
                )}

                {step === 'otro_result' && (
                  <div className="space-y-4">
                    <div className="bg-[#071a25] p-3 rounded-lg">
                      <p>Gracias. Para poder darte una recomendación personalizada necesitamos revisar un poco más tu caso.</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={handleAuditoriaClick} className="flex-1 px-3 py-2 rounded-lg bg-[#00D4FF] text-black font-semibold">Solicitar auditoría gratuita</button>
                      <button onClick={handleWhatsappClick} className="px-3 py-2 rounded-lg bg-[#25D366] text-white">Hablar por WhatsApp</button>
                    </div>
                  </div>
                )}
              </div>

              <div className="px-4 py-3 border-t border-white/5 text-xs text-slate-400">
                <div className="flex items-center justify-between">
                  <div>Privacidad: No pedimos ni guardamos datos personales en esta versión.</div>
                  <div className="ml-4">v1</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
