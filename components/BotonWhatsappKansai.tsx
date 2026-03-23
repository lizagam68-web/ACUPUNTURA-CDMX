'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

import { trackConversion } from '@/utils/analytics';

const BotonWhatsappKansai = () => {
  
  const registrarVentaYContactar = () => {
    // 1. EL SENSOR: Enviamos la señal de éxito a Google Ads y GA4
    trackConversion();
    console.log("Señal de éxito enviada: Paciente de especialidad detectado.");

    // 2. LA ACCIÓN: Abrimos el chat con mensaje de alta precisión
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "525552520615";
    const mensaje = encodeURIComponent("Hola, vi tu anuncio de Acupuntura de Especialidad en la Benito Juárez y busco agendar una cita.");
    window.open(`https://wa.me/${phoneNumber}?text=${mensaje}`, '_blank');
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
