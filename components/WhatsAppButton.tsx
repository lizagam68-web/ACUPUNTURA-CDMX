"use client";

import React from "react";
import { clinicData } from "@/data/clinic-data";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  children?: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  message?: string;
}

export const WhatsAppButton = ({
  children,
  className,
  showIcon = true,
  message,
}: WhatsAppButtonProps) => {
  const cleanPhone = clinicData.phone.replace(/\D/g, "");
  const targetUrl = message
    ? `https://wa.me/52${cleanPhone}?text=${encodeURIComponent(message)}`
    : clinicData.whatsapp;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Disparar evento de conversión de Google Ads y GA4 de forma inmediata
    if (typeof window !== "undefined") {
      if (typeof (window as any).gtag_report_conversion === "function") {
        try {
          (window as any).gtag_report_conversion();
        } catch (err) {
          console.error("Error reporting conversion:", err);
        }
      }
      if ((window as any).dataLayer) {
        try {
          (window as any).dataLayer.push({
            event: "conversion",
            send_to: "AW-985455568/xY8HCKXSrLUcENC389UD",
            event_category: "WhatsApp",
            event_action: "Click",
            event_label: message || "Agendar Cita WhatsApp",
            value: 1.0,
            currency: "MXN",
          });
        } catch (err) {
          console.error("Error pushing to dataLayer:", err);
        }
      }
    }
  };

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
      aria-label="Contactar por WhatsApp para agendar cita de acupuntura"
    >
      {showIcon && <MessageCircle size={20} className="inline-block mr-2" />}
      {children || "Agendar en WhatsApp"}
    </a>
  );
};

