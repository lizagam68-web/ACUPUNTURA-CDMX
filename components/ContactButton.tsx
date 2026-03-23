'use client';

import { handleGlobalCTA } from '@/utils/analytics';

export const ContactButton = () => {
  const handleWhatsAppClick = () => {
    handleGlobalCTA("sesión de valoración");
  };

  return (
    <button onClick={handleWhatsAppClick} className="btn-aqua">
      Agendar mi sesión
    </button>
  );
};
