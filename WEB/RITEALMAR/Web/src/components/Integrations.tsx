import React from 'react';
import { motion } from 'motion/react';
import { Database, MessageSquare, CreditCard, ShoppingCart, Globe, Zap, Cpu } from 'lucide-react';

export default function Integrations() {
  const tools = [
    { name: 'WhatsApp API', icon: MessageSquare, color: '#25D366' },
    { name: 'Stripe', icon: CreditCard, color: '#6366F1' },
    { name: 'OpenAI', icon: Cpu, color: '#10B981' },
    { name: 'Make / Zapier', icon: Zap, color: '#F59E0B' },
    { name: 'Shopify', icon: ShoppingCart, color: '#93C5FD' },
    { name: 'Holded', icon: Database, color: '#8B5CF6' },
    { name: 'WordPress', icon: Globe, color: '#3B82F6' },
    { name: 'WhatsApp API', icon: MessageSquare, color: '#25D366' }, // Duplicated for infinite scroll
    { name: 'Stripe', icon: CreditCard, color: '#6366F1' },
    { name: 'OpenAI', icon: Cpu, color: '#10B981' },
    { name: 'Make / Zapier', icon: Zap, color: '#F59E0B' },
  ];

  return (
    <section className="py-12 bg-[#020617] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-sm font-medium tracking-widest text-gray-500 uppercase">
          Se integra perfectamente con tus herramientas actuales
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex whitespace-nowrap gap-8 px-4"
        >
          {tools.map((tool, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:bg-white/[0.05] transition-all duration-300 cursor-default"
            >
              <tool.icon size={20} style={{ color: tool.color }} />
              <span className="font-bold text-gray-300">{tool.name}</span>
            </div>
          ))}
        </motion.div>
        
        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
