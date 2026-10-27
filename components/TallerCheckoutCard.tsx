"use client";

import React, { useState } from "react";
import { 
  Building2, 
  CreditCard, 
  Copy, 
  Check, 
  MessageCircle, 
  ExternalLink,
  Smartphone,
  ShieldCheck
} from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

interface TallerCheckoutCardProps {
  paymentLink: string;
  price: string;
  clabe: string;
  beneficiary: string;
  bank: string;
  dimoPhone: string;
}

export const TallerCheckoutCard = ({
  paymentLink,
  price,
  clabe,
  beneficiary,
  bank,
  dimoPhone
}: TallerCheckoutCardProps) => {
  const [tab, setTab] = useState<"mercadopago" | "spei">("mercadopago");
  const [copied, setCopied] = useState(false);

  const handleCopyClabe = () => {
    navigator.clipboard.writeText(clabe);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-7 sm:p-9 border-2 border-[#3e685f] shadow-2xl relative text-center space-y-6">
      
      <div className="space-y-1">
        <span className="bg-[#3e685f] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
          Inscripción Inmediata
        </span>
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#18313a] pt-2">
          Acceso Total al Taller
        </h3>
        <p className="text-xs text-[#5a6e75] font-light">
          Clase en vivo + Manual PDF imprimible + Acompañamiento
        </p>
      </div>

      {/* Precio Destacado */}
      <div className="py-2 border-y border-[#f2ece2]">
        <div className="flex items-baseline justify-center gap-1.5">
          <span className="text-4xl sm:text-5xl font-serif font-bold text-[#18313a]">{price}</span>
          <span className="text-sm font-semibold text-[#5a6e75]">MXN</span>
        </div>
        <span className="text-xs text-[#3e685f] font-semibold block mt-1">
          Pago único de $780 · Sin cargos adicionales
        </span>
      </div>

      {/* Selector de Método de Pago */}
      <div className="grid grid-cols-2 gap-2 bg-[#faf8f5] p-1.5 rounded-2xl border border-[#e5dbcb]">
        <button
          type="button"
          onClick={() => setTab("mercadopago")}
          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            tab === "mercadopago"
              ? "bg-[#009ee3] text-white shadow-xs"
              : "text-[#5a6e75] hover:text-[#18313a]"
          }`}
        >
          <CreditCard size={14} />
          <span>Mercado Pago</span>
        </button>

        <button
          type="button"
          onClick={() => setTab("spei")}
          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            tab === "spei"
              ? "bg-[#18313a] text-white shadow-xs"
              : "text-[#5a6e75] hover:text-[#18313a]"
          }`}
        >
          <Building2 size={14} />
          <span>SPEI / Dimo®</span>
        </button>
      </div>

      {/* Contenido Pestaña 1: Mercado Pago */}
      {tab === "mercadopago" && (
        <div className="space-y-3 animate-fade-in text-left">
          <a
            href={paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#009ee3] hover:bg-[#0086c3] text-white py-4 px-6 rounded-full font-bold text-base transition-all shadow-md hover:shadow-lg active:scale-98 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Pagar $780 con Mercado Pago</span>
            <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
          </a>

          <div className="bg-[#faf8f5] p-3.5 rounded-2xl border border-[#e5dbcb] text-[11px] text-[#4a5e66] space-y-1">
            <p className="font-semibold text-[#18313a]">Beneficios con Mercado Pago:</p>
            <p>✓ Tarjetas de crédito o débito (Visa, Mastercard, Amex).</p>
            <p>✓ Dinero en cuenta Mercado Pago.</p>
            <p>✓ Efectivo en OXXO, 7-Eleven y farmacias.</p>
          </div>
        </div>
      )}

      {/* Contenido Pestaña 2: SPEI y Dimo® */}
      {tab === "spei" && (
        <div className="space-y-3 animate-fade-in text-left bg-[#faf8f5] p-4 sm:p-5 rounded-2xl border border-[#e5dbcb] text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-[#e8e1d5]">
            <span className="font-bold text-[#18313a]">Datos de Transferencia Bancaria:</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
              Sin comisión
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div>
              <span className="text-[#5a6e75] text-[11px] block">Beneficiario:</span>
              <strong className="text-[#18313a] text-sm">{beneficiary}</strong>
            </div>

            <div>
              <span className="text-[#5a6e75] text-[11px] block">Institución / Banco:</span>
              <strong className="text-[#18313a]">{bank}</strong>
            </div>

            {/* Tarjeta de CLABE para copiar */}
            <div className="bg-white p-3 rounded-xl border border-[#e5dbcb] flex items-center justify-between gap-2">
              <div>
                <span className="text-[10px] text-[#5a6e75] block">CLABE Interbancaria (18 dígitos):</span>
                <span className="font-mono font-bold text-sm text-[#18313a] tracking-tight">{clabe}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyClabe}
                className="bg-[#faf8f5] hover:bg-[#18313a] hover:text-white text-[#18313a] px-3 py-1.5 rounded-lg border border-[#e5dbcb] text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer flex-shrink-0"
              >
                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                <span>{copied ? "Copiada" : "Copiar"}</span>
              </button>
            </div>

            {/* Dimo */}
            <div className="bg-white p-2.5 rounded-xl border border-[#e5dbcb] flex items-center justify-between text-[11px]">
              <span className="text-[#5a6e75]">Celular vinculado a Dimo®:</span>
              <strong className="font-mono text-[#18313a] font-bold text-xs">{dimoPhone}</strong>
            </div>
          </div>
        </div>
      )}

      {/* Botón WhatsApp para enviar comprobante */}
      <div className="pt-2 border-t border-[#f2ece2]">
        <WhatsAppButton
          className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-[#18313a] hover:text-[#3e685f] bg-[#faf8f5] hover:bg-[#f2ece2] py-3 px-4 rounded-full border border-[#e5dbcb] transition-colors"
          showIcon={false}
          message="Hola Lic. Elizabeth, te comparto mi comprobante de pago de $780 MXN para el Taller de Digitopuntura."
        >
          <MessageCircle size={15} className="text-[#25D366]" />
          <span>Enviar comprobante de pago por WhatsApp</span>
        </WhatsAppButton>
      </div>

    </div>
  );
};
