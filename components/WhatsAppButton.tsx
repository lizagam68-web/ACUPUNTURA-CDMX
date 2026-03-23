import React from 'react';

interface WhatsAppButtonProps {
  label?: string;
  link?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  label = "Agendar Cita", 
  link = "https://wa.me/525552520615", // Tu número centralizado
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
