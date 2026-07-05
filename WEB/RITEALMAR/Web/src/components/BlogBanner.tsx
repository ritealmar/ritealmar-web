import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function BlogBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-[#030712] via-slate-900 to-[#030712] border-y border-cyan-500/10 relative z-20 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <a 
          href="/blog/automatizar-captacion-clientes-ia-pyme" 
          onClick={(e) => {
            e.preventDefault();
            trackEvent('blog_banner_click', { link: 'automatizar_captacion_pyme' });
            window.history.pushState({}, '', '/blog/automatizar-captacion-clientes-ia-pyme');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left group cursor-pointer no-underline"
        >
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all">
              <BookOpen size={16} />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400">Guía recomendada</span>
          </div>
          
          <p className="text-sm md:text-base font-medium text-slate-300 group-hover:text-white transition-colors m-0 flex items-center gap-2">
            Cómo automatizar la captación de clientes con IA en una PYME
            <ArrowRight size={16} className="text-cyan-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </p>
        </a>
      </div>
    </div>
  );
}
