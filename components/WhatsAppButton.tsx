import React from 'react';

// 1. Exportamos WHATSAPP_LINKS para que el Blog lo encuentre
export const WHATSAPP_LINKS = {
  general: "https://wa.me/525552520615?text=Hola%20Liz,%20busco%20información%20sobre%20acupuntura.",
  dolorCronico: "https://wa.me/525552520615?text=Hola%20Liz,%20leí%20tu%20artículo%20sobre%20Dolor%20Crónico%20y%20quiero%20agendar%20cita.",
  // Enlaces específicos para el Blog
  FERTILIDAD: "https://wa.me/525552520615?text=Hola%20Liz,%20leí%20sobre%20el%20equilibrio%20del%20eje%20hormonal%20y%20me%20gustaría%20agendar%20una%20valoración%20para%20fertilidad.",
  PARALISIS_FACIAL: "https://wa.me/525552520615?text=Hola%20Liz,%20necesito%20una%20cita%20urgente%20por%20un%20tema%20de%20Parálisis%20Facial.%20Vi%20tu%20artículo.",
  ANSIEDAD: "https://wa.me/525552520615?text=Hola%20Liz,%20me%20interesa%20el%20tratamiento%20de%20acupuntura%20para%20regular%20el%20estrés%20y%20la%20ansiedad.",
  DOLOR_CRONICO: "https://wa.me/525552520615?text=Hola%20Liz,%20busco%20alivio%20para%20un%20dolor%20crónico.%20Vi%20tu%20artículo.",
  SALUD_METABOLICA: "https://wa.me/525552520615?text=Hola%20Liz,%20me%20interesa%20la%20evaluación%20metabólica%20y%20endocrina%20con%20acupuntura."
};

interface WhatsAppButtonProps {
  label?: string;
  link?: string;
  className?: string;
}

// 2. Componente principal
export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  label = "Agendar Cita", 
  link = WHATSAPP_LINKS.general,
  className 
}) => {
  
  const handleTracking = () => {
    // Rastreo de Google Ads (Para mantener tu punto verde 🟢)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-985455568/4Y21CM2X24YcENC389UD',
      });
    }
    window.open(link, "_blank");
  };

  return (
    <button 
      onClick={handleTracking}
      className={`bg-[#1B3A4B] text-white px-6 py-3 rounded-full font-bold hover:bg-[#2ABFBF] transition-all ${className}`}
    >
      {label}
    </button>
  );
};
