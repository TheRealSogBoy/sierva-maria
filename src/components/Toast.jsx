import React from 'react';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

export const Toast = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in flex items-center gap-3 bg-[#1A1A2E] text-[#FDF6EE] px-5 py-3.5 rounded-xl shadow-2xl border border-[#C4A882]/40 backdrop-blur-md">
      <div className="p-1 rounded-full bg-[#C4A882]/20 text-[#C4A882]">
        <Sparkles className="w-4 h-4 animate-pulse" />
      </div>
      <div className="text-sm font-medium tracking-wide">
        {message}
      </div>
      <button 
        onClick={onClose}
        className="ml-2 text-white/50 hover:text-white transition-colors p-1"
        aria-label="Cerrar notificación"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
