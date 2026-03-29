'use client';

import React from 'react';
import { trackConversion } from '@/utils/analytics';

// 1. Aquí definimos que el botón puede recibir 'message'
interface BotonWhatsappClinicoProps {
  label: string;
  message?: string; // El signo '?' significa que es opcional
  className?: string;
}

const BotonWhatsappClinico: React.FC<BotonWhatsappClinicoProps> = ({ 
  label, 
  message = "Hola, deseo agendar una cita", // Mensaje por defecto
  className 
}) => {
  
  const handleWhatsAppClick = () => {
    // Tu número centralizado: 525552520615
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "525552520615";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    // Rastreo de Google Ads con callback
    trackConversion(() => {
      window.open(url, "_blank");
    });
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      className={`bg-[#1B3A4B] text-white rounded-full font-bold transition-all hover:bg-[#2ABFBF] ${className}`}
    >
      {label}
    </button>
  );
};

export default BotonWhatsappClinico;
