import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function CalendlyModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  // Nota: De momento usamos una URL genérica de Calendly en el iframe.
  // Cuando tengas el link de Calendly real de Ritealmar, puedes sustituirlo aquí.
  const calendlyUrl = "https://calendly.com/ritealmar/30min";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-[#060913]/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white w-full max-w-5xl h-[85vh] md:h-[800px] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(15,98,254,0.3)] relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div className="bg-[#0A0F24] p-4 flex justify-between items-center shrink-0">
              <h3 className="text-white font-bold ml-2">Agendar Diagnóstico Gratuito</h3>
              <button 
                onClick={onClose}
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Contenedor del Iframe de Calendly */}
            <div className="flex-1 w-full h-full bg-[#f8f8f8]">
              {/* Fallback visual temporal si el enlace no existe, en producción se usaría el iframe real */}
              <iframe
                src={calendlyUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Calendly Ritealmar"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
