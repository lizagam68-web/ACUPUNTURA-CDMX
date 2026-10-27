"use client";

import React from "react";
import { MessageSquareText, ExternalLink } from "lucide-react";

interface PhoneLinkProps {
  phone: string;
}

export const PhoneLink: React.FC<PhoneLinkProps> = ({ phone }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
      try {
        (window as any).gtag_report_conversion();
      } catch (err) {
        console.error("Error reporting conversion:", err);
      }
    }
  };

  const whatsappUrl = `https://wa.me/52${phone.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hola, deseo información y agendar cita por mensaje de WhatsApp."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group p-8 rounded-3xl bg-white border border-primary-100 hover:border-green-300 hover:shadow-xl transition-all duration-300 block"
    >
      <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
        <MessageSquareText size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-2 text-primary-600 font-serif italic">Solo Mensajes</h3>
      <p className="text-brand-text font-light mb-1 text-base">Atención 100% por WhatsApp:</p>
      <p className="text-primary-700 font-semibold mb-3 text-lg">{phone}</p>
      <p className="text-xs text-brand-text/70 mb-4 italic">No recibimos llamadas telefónicas para no interrumpir a pacientes en consulta activa.</p>
      <span className="text-green-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
        Enviar mensaje WhatsApp <ExternalLink size={18} />
      </span>
    </a>
  );
};

