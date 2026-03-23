import React from 'react';

// ESTA ES LA PARTE CRÍTICA QUE EL BLOG ESTÁ BUSCANDO
export const WHATSAPP_LINKS = {
  general: "https://wa.me/525552520615?text=Hola%20Liz,%20busco%20información%20sobre%20acupuntura.",
  dolorCronico: "https://wa.me/525552520615?text=Hola%20Liz,%20leí%20tu%20artículo%20sobre%20Dolor%20Crónico%20y%20quiero%20agendar%20cita."
};

interface WhatsAppButtonProps {
  label?: string;
  link?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  label = "Agendar Cita", 
  link = WHATSAPP_LINKS.general,
  className 
}) => {
  
  const handleTracking = () => {
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
