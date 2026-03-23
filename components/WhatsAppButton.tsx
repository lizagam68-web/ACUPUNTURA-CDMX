import React from 'react';
import { MessageCircle } from 'lucide-react';
import { handleGlobalCTA } from '@/utils/analytics';

/**
 * Componente de Botón Estilizado (Aqua/Turquesa #00CED1)
 */
interface WhatsAppButtonProps {
  servicio?: string;
  label?: string;
  className?: string;
}

export const WhatsAppButton = ({ servicio = "valoración", label = "Agendar Cita", className = "" }: WhatsAppButtonProps) => {
  return (
    <button
      onClick={() => handleGlobalCTA(servicio)}
      className={`inline-flex items-center gap-3 bg-[#00CED1] text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#20B2AA] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {label}
    </button>
  );
};
