'use client';

import React from 'react';

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
    const phone = "525552520615";
    const encodedMessage = encodeURIComponent(message);
    
    // Rastreo de Google Ads (Para mantener tu punto verde 🟢)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-985455568/4Y21CM2X24YcENC389UD',
      });
    }

    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
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
