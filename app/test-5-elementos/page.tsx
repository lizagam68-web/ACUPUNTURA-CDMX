"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  Share2, 
  Copy, 
  Check, 
  ArrowRight,
  BookOpen,
  GraduationCap
} from "lucide-react";
import { AutodiagnosticoCincoElementos } from "@/components/AutodiagnosticoCincoElementos";

export default function TestCincoElementosPage() {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyShareLink = () => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/test-5-elementos`;
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const shareTextWhatsApp = encodeURIComponent(
    `¡Hola! Hice el Test Gratis de los 5 Elementos y Polaridad Yin-Yang de la Lic. Elizabeth Gamiño. Te da una prescripción de autocuidado personalizada con la localización anatómica exacta de tus puntos de digitopuntura. Es 100% gratuito, pruébalo aquí: https://www.acupunturacdmx.com/test-5-elementos`
  );

  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-[#faf8f5]">
      
      {/* BARRA SUPERIOR PROMINENTE: HERRAMIENTA 100% GRATUITA PARA REDES */}
      <div className="bg-[#18313a] text-white py-2.5 px-4 text-center border-b border-[#2a4550]">
        <div className="container mx-auto max-w-4xl flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="bg-emerald-500 text-stone-950 font-black px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-xs">
              <Sparkles size={11} className="fill-stone-950" />
              100% GRATIS
            </span>
            <span className="text-[#f4e1cb] font-medium hidden sm:inline">
              Guía de Autocuidado y Diagnóstico Bioenergético Libre
            </span>
          </div>

          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <button
              type="button"
              onClick={handleCopyShareLink}
              className="bg-white/10 hover:bg-white/20 text-[#f4e1cb] hover:text-white px-3 py-1 rounded-full text-[11px] font-semibold transition-all flex items-center gap-1 cursor-pointer border border-white/15"
              title="Copiar enlace para bio de Instagram o TikTok"
            >
              {copiedLink ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              <span>{copiedLink ? "¡Enlace Copiado!" : "Copiar Enlace para Redes"}</span>
            </button>

            <a
              href={`https://wa.me/?text=${shareTextWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-3 py-1 rounded-full text-[11px] font-bold transition-all flex items-center gap-1 cursor-pointer"
            >
              <Share2 size={11} />
              <span>Compartir en WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* CABECERA EDITORIAL Y TARJETA DE ESPECIALISTA (PERFECTA PARA BIO LINKS DE REDES) */}
      <section className="relative py-8 md:py-14 px-4 bg-gradient-to-b from-[#fdfcf9] via-[#f7f4ed] to-[#faf8f5] border-b border-[#e8e1d5]">
        <div className="container mx-auto max-w-3xl space-y-5 text-center">
          
          {/* Tarjeta de Especialista de Confianza */}
          <div className="inline-flex items-center gap-3 bg-white p-2 sm:p-2.5 pr-4 rounded-full border border-[#e5dbcb] shadow-sm max-w-full">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#3e685f] flex-shrink-0">
              <Image
                src="/images/lic-elizabeth-gamino-real.jpg"
                alt="Lic. Elizabeth Gamiño - Acupuntura Humana"
                fill
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left leading-tight">
              <div className="flex items-center gap-1">
                <span className="font-serif font-bold text-xs sm:text-sm text-[#18313a]">
                  Lic. Elizabeth Gamiño
                </span>
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-bold" title="Especialista Certificada">
                  ✓
                </span>
              </div>
              <span className="text-[10px] text-[#5a6e75] font-light block">
                Acupuntura Humana UNEVE · Cédula: 15289838 · Benito Juárez, CDMX
              </span>
            </div>
          </div>

          {/* Insignia y Título */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
              <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-1 rounded-full flex items-center gap-1">
                🎁 RECURSO 100% GRATUITO
              </span>
              <span className="text-[#cfbfab]" aria-hidden="true">·</span>
              <span className="text-[#b86d36] hidden sm:inline">Medicina Tradicional China (Wu Xing)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#18313a] leading-[1.16] tracking-tight text-balance">
              Test Gratuito de los 5 Elementos &amp; Polaridad <span className="text-[#3e685f] italic">Yin - Yang</span>
            </h1>

            <p className="text-sm sm:text-base text-[#4a5e66] font-light max-w-xl mx-auto leading-relaxed">
              En solo 3 minutos descubre qué órgano Zang-Fu pide auxilio y recibe de forma inmediata tu <strong>Prescripción Personalizada de Autocuidado (100% Gratis)</strong> con la localización anatómica exacta de tus puntos de digitopuntura.
            </p>
          </div>

          {/* Mini-Badges de Confianza */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs text-[#5a6e75]">
            <span className="flex items-center gap-1 bg-[#f2ece2] px-2.5 py-1 rounded-lg font-medium">
              ⚡ 10 Preguntas Rápidas
            </span>
            <span className="flex items-center gap-1 bg-[#f2ece2] px-2.5 py-1 rounded-lg font-medium">
              📍 Localización Anatómica Paso a Paso
            </span>
            <span className="flex items-center gap-1 bg-[#f2ece2] px-2.5 py-1 rounded-lg font-medium">
              🔒 Sin Registro ni Costos Ocultos
            </span>
            <Link
              href="/educacion"
              className="flex items-center gap-1 bg-amber-50 text-[#b86d36] border border-amber-200 px-2.5 py-1 rounded-lg font-semibold hover:bg-amber-100 transition-colors"
            >
              <GraduationCap size={13} />
              <span>Ver Cursos &amp; Diplomados</span>
            </Link>
          </div>

        </div>
      </section>

      {/* CONTENEDOR PRINCIPAL INTERACTIVO CON EL COMPONENTE COMPLETO */}
      <section className="py-8 md:py-14 px-4">
        <AutodiagnosticoCincoElementos isEmbedded={false} />
      </section>

      {/* BANNER PROMO BIO LINK PARA REDES SOCIALES */}
      <section className="py-10 px-4 bg-[#f2ece2] border-t border-[#e5dbcb]">
        <div className="container mx-auto max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b86d36] uppercase tracking-wider">
            <Share2 size={14} />
            <span>¿Tienes un perfil de bienestar o pacientes?</span>
          </div>

          <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#18313a]">
            Comparte esta Herramienta Gratuita en tu Biografía
          </h3>
          <p className="text-xs sm:text-sm text-[#5a6e75] font-light max-w-lg mx-auto">
            Puedes colocar el enlace directo en tu bio de Instagram, TikTok, Facebook o enviarlo a tus grupos de WhatsApp como regalo de autocuidado.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleCopyShareLink}
              className="bg-[#18313a] hover:bg-[#12242b] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              {copiedLink ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copiedLink ? "¡Enlace Copiado al Portapapeles!" : "Copiar Enlace para tu Bio"}</span>
            </button>

            <Link
              href="/educacion"
              className="bg-white hover:bg-[#faf8f5] text-[#18313a] px-5 py-2.5 rounded-full text-xs font-bold transition-all border border-[#cfbfab] shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>Ver Oferta Educativa Completa</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER DESCARGO SANITARIO Y LEGAL COFEPRIS */}
      <section className="py-10 px-4 bg-[#18313a] text-white text-center">
        <div className="container mx-auto max-w-3xl space-y-3 text-xs text-[#d6ccbe]/80 font-light leading-relaxed">
          <p className="font-bold text-white uppercase tracking-wider text-[11px]">
            Aviso de Autocuidado y Salud Preventiva (Yang Sheng)
          </p>
          <p>
            Este test interactivo es una herramienta didáctica y educativa basada en los principios bioenergéticos tradicionales de la Medicina Tradicional China. No constituye un diagnóstico médico alopático formal ni sustituye la consulta médica especializada.
          </p>
          <p className="text-[10px] text-[#cfbfab]/60 pt-2 border-t border-[#2c4955]">
            Lic. Elizabeth Gamiño · Acupuntura Humana UNEVE · Cédula Profesional: 15289838 · Aviso de Publicidad COFEPRIS: 2609142002A00342 · Consultorio Privado en Benito Juárez, CDMX
          </p>
        </div>
      </section>

    </div>
  );
}
