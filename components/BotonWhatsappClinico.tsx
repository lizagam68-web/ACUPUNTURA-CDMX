'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react'; // Icono limpio
import { handleGlobalCTA } from '@/utils/analytics';

interface BotonWhatsappClinicoProps {
  label?: string;
  servicio?: string;
  className?: string;
}

const BotonWhatsappClinico = ({ 
  label = "Agenda tu cita para primer consulta", 
  servicio = "Acupuntura de Especialidad",
  className = ""
}: BotonWhatsappClinicoProps) => {
  
  const registrarConversionYContactar = () => {
    handleGlobalCTA(servicio);
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
