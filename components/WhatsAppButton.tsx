import React from 'react';
import { MessageCircle } from 'lucide-react';

/**
 * Enlaces de WhatsApp con mensajes predefinidos para el Centro de Acupuntura QI
 * Número: 525552520615
 */
export const WHATSAPP_LINKS = {
  FERTILIDAD: "https://wa.me/525552520615?text=Hola%20Centro%20QI%2C%20le%C3%AD%20sobre%20el%20equilibrio%20del%20eje%20hormonal%20y%20me%20gustar%C3%ADa%20agendar%20una%20valoraci%C3%B3n%20para%20fertilidad.",
  PARALISIS_FACIAL: "https://wa.me/525552520615?text=Hola%2C%20necesito%20una%20cita%20urgente%20por%20un%20tema%20de%20Par%C3%A1lisis%20Facial.%20Vi%20su%20especialidad%20en%20el%20blog.",
  ANSIEDAD: "https://wa.me/525552520615?text=Hola%2C%20me%20interesa%20el%20tratamiento%20de%20acupuntura%20para%20regular%20el%20estr%C3%A9s%20y%20la%20ansiedad.",
  DOLOR_CRONICO: "https://wa.me/525552520615?text=Hola%2C%20busco%20alivio%20para%20un%20dolor%20cr%C3%B3nico%20(ci%C3%A1tica%2Fmigra%C3%B1a).%20Vi%20su%20art%C3%ADculo%20en%20el%20blog.",
  SALUD_METABOLICA: "https://wa.me/525552520615?text=Hola%2C%20me%20interesa%20la%20evaluaci%C3%B3n%20metab%C3%B3lica%20y%20endocrina%20con%20acupuntura."
};

/**
 * Componente de Botón Estilizado (Verde Oliva #5A5A40)
 * Incluye seguridad rel="noopener noreferrer"
 */
interface WhatsAppButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export const WhatsAppButton = ({ href, label = "Agendar Cita", className = "" }: WhatsAppButtonProps) => {
  return (
    <a
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-[#5A5A40] text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#4A4A30] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {label}
    </a>
  );
};
