import React, { useState } from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';

interface CopyBoxProps {
  title?: string;
  text: string;
  buttonLabel?: string;
}

export default function CopyBox({ title, text, buttonLabel = "Copiar texto" }: CopyBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
        } catch (error) {
          console.error("Fallback copy failed", error);
        }
        
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-[#030712] border border-white/10 rounded-xl overflow-hidden shadow-lg">
      {title && (
        <div className="bg-white/5 px-4 py-3 border-b border-white/5">
          <h4 className="text-sm font-semibold text-slate-300">{title}</h4>
        </div>
      )}
      <div className="p-4 bg-[#0A1628]/30">
        <pre className="text-slate-400 text-sm whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto">
          {text}
        </pre>
      </div>
      <div className="bg-white/5 px-4 py-3 border-t border-white/5 flex flex-col sm:flex-row justify-end">
        <button
          onClick={handleCopy}
          className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
            copied 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20'
          }`}
        >
          {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
          {copied ? "Copiado correctamente" : buttonLabel}
        </button>
      </div>
    </div>
  );
}
