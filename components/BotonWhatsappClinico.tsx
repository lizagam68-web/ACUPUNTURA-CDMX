'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react'; // Icono limpio
import { trackConversion } from '@/utils/analytics';

interface BotonWhatsappClinicoProps {
  label?: string;
  message?: string;
  className?: string;
}

const BotonWhatsappClinico = ({ 
  label = "Agendar Consulta Técnica", 
  message = "Hola, busco información sobre Acupuntura de Especialidad.",
  className = ""
}: BotonWhatsappClinicoProps) => {
  
  const registrarConversionYContactar = () => {
    // 1. EL SENSOR: Enviamos la señal a Google Ads
    trackConversion();

    // 2. LA ACCIÓN: Abrimos el chat con el paciente
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "525552520615";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={registrarConversionYContactar}
      className={`flex items-center justify-center gap-2 bg-[#00CED1] hover:bg-[#008B8B] text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-xl hover:shadow-[#00CED1]/20 hover:-translate-y-1 ${className}`}
    >
      <MessageCircle size={20} />
      <span>{label}</span>
    </button>
  );
};

export default BotonWhatsappClinico;
