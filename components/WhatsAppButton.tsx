import React, { useCallback } from 'react';
import { trackConversion } from '@/utils/analytics';

interface WhatsAppButtonProps {
  label?: string;
  link?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  label = "Agendar Cita", 
  link = "https://wa.me/525552520615", 
  className 
}) => {
  const handleTracking = useCallback(() => {
    // Usamos la función centralizada que maneja el callback de Google Ads
    trackConversion(() => {
      window.open(link, "_blank");
    });
  }, [link]);

  return (
    <button 
      onClick={handleTracking} 
      className={`bg-[#1B3A4B] text-white rounded-full font-bold hover:bg-[#2ABFBF] transition-all ${className}`}
    >
      {label}
    </button>
  );
};
