'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

const BotonWhatsappKansai = () => {
  
  const registrarVentaYContactar = () => {
    // 1. EL SENSOR: Enviamos la señal de éxito a Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-11004313271/NfInCOvXyIkYEPfNq_4p',
      });
      console.log("Señal de éxito enviada: Paciente de especialidad detectado.");
    }

    // 2. LA ACCIÓN: Abrimos el chat con mensaje de alta precisión
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "525552520615";
    const mensaje = encodeURIComponent("Hola Liz, vi tu anuncio de Acupuntura de Especialidad en la Benito Juárez y busco agendar una cita.");
    window.open(`https://wa.me/${phoneNumber}?text=${mensaje}`, '_blank');
  };

  return (
    <button
      onClick={registrarVentaYContactar}
      className="flex items-center justify-center gap-2 bg-[#5A726C] text-white px-8 py-4 rounded-full hover:bg-[#4A5D58] transition-all shadow-lg font-semibold tracking-wide w-full sm:w-auto"
    >
      <MessageCircle size={22} />
      <span>Agendar Consulta Técnica</span>
    </button>
  );
};

export default BotonWhatsappKansai;
