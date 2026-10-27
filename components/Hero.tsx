"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { clinicData } from "@/data/clinic-data";
import { 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  MapPin,
  Activity,
  Zap,
  CheckCircle2
} from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { motion } from "motion/react";
import { usePractitionerPhoto } from "@/lib/usePractitionerPhoto";

export const Hero = () => {
  const { practitioner } = clinicData;
  const photoSrc = usePractitionerPhoto();

  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-[#fdfcf9] via-[#f7f4ed] to-[#faf8f5] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#e8e1d5]">
      {/* Calm Ambient Atmospheric Auras */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[34rem] h-[34rem] bg-[#e5dbcb]/40 rounded-full blur-[110px]" />
        <div className="absolute top-1/3 -right-28 w-[32rem] h-[32rem] bg-[#f4e1cb]/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] bg-[#e5dbcb]/40 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#18313a_0.6px,transparent_0.6px)] [background-size:28px_28px] opacity-[0.035]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Espacio, Serenidad & Fundamento de la Acupuntura */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.12] tracking-tight font-serif text-[#18313a] text-balance">
                Acupuntura Humana &amp; Rehabilitación Integral
              </h1>
              <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#3e685f]">
                Medicina Tradicional China &amp; Enfoque Clínico
              </p>
            </motion.div>

            {/* Acreditaciones Oficiales Altamente Visibles (Cédula & COFEPRIS) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-2.5 bg-white rounded-2xl border-2 border-[#3e685f]/30 shadow-xs"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#18313a]">
                <ShieldCheck size={18} className="text-[#3e685f] flex-shrink-0" />
                <span>Cédula Profesional: <strong className="text-[#3e685f]">15289838</strong> <span className="font-normal text-[#5a6e75]">(UNEVE)</span></span>
              </div>
              <span className="text-[#cfbfab] hidden sm:inline" aria-hidden="true">•</span>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#18313a]">
                <FileText size={18} className="text-[#b86d36] flex-shrink-0" />
                <span>Aviso COFEPRIS: <strong className="text-[#b86d36]">2609142002A00342</strong></span>
              </div>
            </motion.div>

            {/* Narrative Description: Qué es y cómo actúa la Acupuntura */}
            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg text-[#4a5e66] font-light leading-relaxed max-w-xl"
            >
              La acupuntura estimula puntos bioeléctricos precisos a lo largo de canales y meridianos para desbloquear la circulación de <em>Qi</em> y sangre, liberar endorfinas analgésicas y desinflamar tejidos profundos. Una terapia médica milenaria respaldada por la ciencia moderna que reactiva los mecanismos de autorrecuperación de tu cuerpo sin fármacos agresivos ni dolor.
            </motion.p>

            {/* 3 Mecanismos Terapéuticos de la Acupuntura */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs text-[#18313a]"
            >
              <div className="bg-white/85 p-3.5 rounded-2xl border border-[#e5dbcb] shadow-2xs">
                <span className="font-bold text-[#3e685f] block mb-1 flex items-center gap-1.5">
                  <Activity size={14} />
                  Canales &amp; Meridianos
                </span>
                <span className="text-[#4a5e66] font-light leading-snug block">
                  Desbloquea estancamientos energéticos y alivia contracturas musculares.
                </span>
              </div>

              <div className="bg-white/85 p-3.5 rounded-2xl border border-[#e5dbcb] shadow-2xs">
                <span className="font-bold text-[#b86d36] block mb-1 flex items-center gap-1.5">
                  <Zap size={14} />
                  Respuesta Nerviosa
                </span>
                <span className="text-[#4a5e66] font-light leading-snug block">
                  Estimula endorfinas analgésicas naturales y reduce el estrés crónico.
                </span>
              </div>

              <div className="bg-white/85 p-3.5 rounded-2xl border border-[#e5dbcb] shadow-2xs">
                <span className="font-bold text-[#18313a] block mb-1 flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#3e685f]" />
                  Diagnóstico Ryodoraku
                </span>
                <span className="text-[#4a5e66] font-light leading-snug block">
                  Medición bioeléctrica exacta del balance energético de tus órganos.
                </span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <WhatsAppButton
                className="bg-[#18313a] hover:bg-[#12242b] text-white min-h-[52px] px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-md hover:shadow-lg shadow-[#18313a]/15 flex items-center justify-center gap-2.5 active:scale-98 cursor-pointer group"
                showIcon={false}
                message="Hola, me gustaría agendar una consulta de valoración de acupuntura."
              >
                <span>Agendar Consulta de Valoración</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 text-[#f4e1cb]" />
              </WhatsAppButton>

              <Link
                href="/#specialties"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[52px] rounded-full text-[#18313a] hover:text-[#12242b] font-semibold text-base bg-white hover:bg-[#faf8f5] border border-[#e5dbcb] shadow-2xs transition-all"
              >
                <span>Ver Especialidades</span>
              </Link>
            </motion.div>

            {/* Ubicación y Garantía Sanitaria */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="pt-6 border-t border-[#e8e1d5] flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#5a6e75]"
            >
              <div className="flex items-center gap-1.5 font-medium text-[#18313a]">
                <MapPin size={15} className="text-[#3e685f] flex-shrink-0" />
                <span>Av. Insurgentes Sur 1409, Despacho 5 · Benito Juárez, CDMX</span>
              </div>
              <span className="hidden sm:inline text-[#cfbfab]" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5 font-medium text-[#18313a]">
                <CheckCircle2 size={15} className="text-[#3e685f] flex-shrink-0" />
                <span>Material 100% Estéril y Desechable</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Fotografía Editorial Integrada de Forma Sutil y Elegante */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border border-[#e5dbcb] shadow-xl shadow-stone-300/30 bg-white group max-w-md mx-auto lg:max-w-none">
              {/* Fotografía Cálida y Luminosa */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden bg-[#f4efe7]">
                <Image
                  src={photoSrc}
                  alt="Lic. Elizabeth Gamiño en Centro de Acupuntura QI en Benito Juárez, CDMX"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-102"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  referrerPolicy="no-referrer"
                  unoptimized={photoSrc.startsWith("data:")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18313a]/40 via-transparent to-transparent pointer-events-none" />

                {/* Sutil insignia flotante de calma y confianza */}
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#e5dbcb] shadow-lg flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3e685f] flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-[#18313a] leading-tight">Atención Personalizada</p>
                    <p className="text-[11px] text-[#4a5e66] font-light">Consultorio privado con previa cita</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
