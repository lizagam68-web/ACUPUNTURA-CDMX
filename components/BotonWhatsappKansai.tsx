'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { handleGlobalCTA } from '@/utils/analytics';

const BotonWhatsappKansai = () => {
  
  const registrarVentaYContactar = () => {
    handleGlobalCTA("Acupuntura de Especialidad en la Benito Juárez");
  };

  return (
    <button
      onClick={registrarVentaYContactar}
      className="flex items-center justify-center gap-2 bg-[#5A726C] text-white px-8 py-4 rounded-full hover:bg-[#4A5D58] transition-all shadow-lg font-semibold tracking-wide w-full sm:w-auto"
    >
      <MessageCircle size={22} />
      <span>Agenda tu cita para primer consulta</span>
    </button>
  );
};

export default BotonWhatsappKansai;
