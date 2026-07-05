import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, ArrowUpRight, ArrowDownRight, LayoutDashboard, Cpu, ShieldCheck } from 'lucide-react';
import { ModalController } from '../components/ModalController';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  heroImage: string;
  screenshots: string[];
  challenge: string;
  solution: string;
  features: { title: string; desc: string }[];
  stats: { label: string; before: string; after: string }[];
}

export default function GenericProjectPage({ data }: { data: ProjectData }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goBack = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-[#0A1628] text-slate-100 font-sans selection:bg-[#00D4FF]/30">
      
      {/* Navbar Minimalista */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/80 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button 
            onClick={goBack}
            className="flex items-center gap-2 text-slate-400 hover:text-[#00D4FF] transition-colors font-medium"
          >
            <ArrowLeft size={20} /> Volver al Inicio
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-tr from-[#00D4FF] to-[#FF006E] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm font-mono">R</span>
            </div>
            <span className="font-bold tracking-widest text-lg hidden sm:block">RITEALMAR</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D4FF]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#0F172A] border border-[#00D4FF]/30 text-[#00D4FF] font-mono text-sm font-bold mb-6 shadow-[0_0_15px_rgba(0,212,255,0.2)]"
          >
            {data.category}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white"
          >
            {data.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <img 
              src={data.heroImage} 
              alt={`Vista principal del proyecto ${data.title}`} 
              loading="eager" 
              fetchpriority="high"
              decoding="async"
              width="1920"
              height="1080"
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-80"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          
          {/* Left Column (Text) */}
          <div className="lg:col-span-7 space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white border-b border-white/10 pb-4">El Reto</h2>
              <p className="text-lg font-medium text-slate-300 leading-relaxed">
                {data.challenge}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white border-b border-white/10 pb-4">Nuestra Solución</h2>
              <p className="text-lg font-medium text-slate-300 leading-relaxed mb-8">
                {data.solution}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.features.map((feature, i) => (
                  <div key={i} className="bg-[#0F172A] p-6 rounded-xl border border-white/5 shadow-lg">
                    <CheckCircle2 className="text-[#00D4FF] mb-4 w-8 h-8" />
                    <h3 className="font-bold text-lg mb-2 text-white">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column (Stats) */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#0F172A] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF006E]/10 rounded-bl-full pointer-events-none"></div>
                <h3 className="text-2xl font-bold mb-8 text-white">Resultados Clave</h3>
                
                <div className="space-y-8">
                  {data.stats.map((stat, i) => (
                    <div key={i} className="space-y-3">
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
                      <div className="flex items-center justify-between p-4 bg-[#0A1628] rounded-xl border border-white/5">
                        <div className="space-y-1">
                          <span className="text-xs text-slate-500 font-bold uppercase block">Antes</span>
                          <span className="text-sm font-mono text-[#FF006E] flex items-center gap-1">
                            <ArrowDownRight size={14} /> {stat.before}
                          </span>
                        </div>
                        <ArrowRight size={20} className="text-slate-600" />
                        <div className="space-y-1 text-right">
                          <span className="text-xs text-slate-500 font-bold uppercase block">Después</span>
                          <span className="text-lg font-mono text-[#00D4FF] flex items-center gap-1 font-bold text-glow-blue">
                            <ArrowUpRight size={18} /> {stat.after}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1a0a2e] to-[#0A1628] border border-[#FF006E]/30 rounded-2xl p-8 text-center shadow-[0_0_30px_rgba(255,0,110,0.15)]"
              >
                <h3 className="text-xl font-bold text-white mb-4">¿Quieres resultados similares?</h3>
                <p className="text-sm font-medium text-slate-300 mb-6">Podemos replicar el éxito de este proyecto adaptado a las necesidades exactas de tu empresa.</p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-4 bg-[#FF006E] hover:bg-[#ff1a7f] text-white rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(255,0,110,0.3)] hover:shadow-[0_0_25px_rgba(255,0,110,0.5)]"
                >
                  Solicitar Auditoría
                </button>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-20 bg-[#0F172A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Interfaz del Proyecto</h2>
            <p className="text-lg font-medium text-slate-400">Capturas reales del sistema en funcionamiento.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.screenshots.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden border border-white/10 shadow-xl group"
              >
                <img 
                  src={img} 
                  alt={`Captura de interfaz ${i + 1} de ${data.title}`} 
                  loading="lazy" 
                  decoding="async"
                  width="1200" 
                  height="800"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ModalController 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
