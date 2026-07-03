import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';
import app from '../firebase';

const functions = getFunctions(app);
const chatWithGemini = httpsCallable(functions, 'chatWithGemini');

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: '¡Hola! Soy el consultor IA de Ritealmar. ¿Qué proceso de tu empresa te gustaría optimizar hoy?' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      // Llamada al backend seguro (Firebase Function)
      const result: any = await chatWithGemini({
        message: input,
        history: messages.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.text }]
        }))
      });

      const botResponse = { role: 'assistant', text: result.data.text };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: 'Lo siento, he tenido un pequeño lapsus técnico. ¿Podrías repetirlo o contactarnos por el formulario?' 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#AF5AE1] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-all z-50 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Bot size={30} />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#00FF66] border-4 border-black rounded-full"></span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[360px] sm:w-[420px] bg-[#0A0A0A] rounded-[30px] shadow-2xl overflow-hidden z-[60] border border-white/10 flex flex-col"
            style={{ height: '600px' }}
          >
            {/* Header */}
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
              <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-70">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#050505]">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-lg ${
                    msg.role === 'user' 
                      ? 'bg-white text-black rounded-tr-none' 
                      : 'bg-[#1A1A1A] text-white border border-white/5 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start items-center gap-2 text-gray-500 text-xs ml-2">
                  <Loader2 className="animate-spin" size={14} /> El consultor está redactando...
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-[#0A0A0A] border-t border-white/5">
              <form onSubmit={handleSend} className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Pregunta sobre tu negocio..."
                  className="flex-1 bg-[#1A1A1A] border border-white/5 rounded-full px-6 py-4 text-xs text-white focus:outline-none focus:border-[#AF5AE1] transition-all"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-12 h-12 bg-[#AF5AE1] text-white rounded-full flex items-center justify-center disabled:opacity-30 hover:scale-105 transition-all"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
