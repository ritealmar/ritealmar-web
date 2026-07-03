import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, Bot } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: '¡Hola! Soy el asistente inteligente de Ritealmar. ¿En qué área de tu negocio te gustaría aplicar IA hoy? (Ventas, Procesos, Chatbots...)' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const getResponse = (userInput: string) => {
    const text = userInput.toLowerCase();
    if (text.includes('hola') || text.includes('buenos días')) return '¡Hola! Encantado de saludarte. ¿Cómo puedo ayudarte a escalar tu empresa con IA?';
    if (text.includes('precio') || text.includes('coste') || text.includes('cuánto')) return 'Nuestros proyectos son a medida. Lo ideal es agendar una llamada de 15 min para darte un presupuesto exacto basado en tu retorno de inversión.';
    if (text.includes('chatbot')) return 'Los chatbots son nuestra especialidad. Entrenamos modelos con tus propios documentos para que respondan como un experto de tu equipo.';
    if (text.includes('automatización')) return 'La automatización puede ahorrarte hasta un 70% del tiempo en tareas repetitivas. ¿Qué proceso manual es el que más te frena ahora?';
    if (text.includes('web')) return 'Desarrollamos webs de alto impacto integradas con agentes de IA que captan leads mientras duermes.';
    return 'Entiendo. Esa es una gran oportunidad para implementar IA estratégica. ¿Te gustaría agendar una breve videollamada para que un consultor te explique cómo lo haríamos?';
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = { role: 'assistant', text: getResponse(input) };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 3, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#AF5AE1] text-white shadow-[0_10px_30px_rgba(175,90,225,0.4)] flex items-center justify-center hover:scale-110 transition-all z-50 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare size={28} />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#00FF66] border-4 border-black rounded-full"></span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[360px] sm:w-[420px] bg-[#0A0A0A] rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden z-[60] border border-white/10 flex flex-col"
            style={{ height: '600px' }}
          >
            <div className="bg-gradient-to-r from-[#AF5AE1] to-[#8a42b5] p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-md">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wide">Ritealmar Assistant</h3>
                  <p className="text-white/70 text-[10px] uppercase tracking-widest flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse"></span> Sistema Activo
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-all">
                <X size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-[#050505]">
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed font-medium shadow-lg ${
                    msg.role === 'user' 
                      ? 'bg-white text-black rounded-tr-none' 
                      : 'bg-[#1A1A1A] text-white border border-white/5 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#1A1A1A] p-4 rounded-2xl rounded-tl-none flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-[#0A0A0A] border-t border-white/5">
              <form onSubmit={handleSend} className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Pregunta lo que quieras..."
                  className="flex-1 bg-[#1A1A1A] border border-white/5 rounded-full px-6 py-4 text-xs text-white focus:outline-none focus:border-[#AF5AE1] transition-all placeholder:text-gray-600"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-12 h-12 bg-[#AF5AE1] text-white rounded-full flex items-center justify-center disabled:opacity-30 hover:scale-105 transition-all shadow-[0_5px_15px_rgba(175,90,225,0.3)]"
                >
                  <Send size={18} className="ml-1" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
