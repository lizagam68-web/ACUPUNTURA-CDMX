"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Heart,
  Flower2, 
  Sun, 
  Moon, 
  Activity, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  FileText,
  MessageCircle,
  TrendingUp,
  CircleDot,
  BookOpen,
  ExternalLink,
  Layers,
  ThermometerSun,
  Smile,
  Feather
} from "lucide-react";
import { clinicData } from "@/data/clinic-data";
import { WhatsAppButton } from "./WhatsAppButton";

export interface StageData {
  id: "ciclo" | "fertilidad" | "climaterio";
  label: string;
  badge: string;
  tagline: string;
  title: string;
  description: string;
  symptoms: string[];
  clinicalHighlights: string[];
  physiologicalBasis: string;
  destinationUrl: string;
  destinationLabel: string;
  whatsappPrompt: string;
  keyStats: { value: string; label: string; detail: string }[];
}

export const BienestarFemeninoSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<"ciclo" | "fertilidad" | "climaterio">("ciclo");

  const stages: Record<"ciclo" | "fertilidad" | "climaterio", StageData> = {
    ciclo: {
      id: "ciclo",
      label: "Ciclo Menstrual y Cólicos",
      badge: "Armonía Hormonal y Alivio",
      tagline: "Regulación natural, alivio de cólicos y confort pélvico",
      title: "Salud del Ciclo Menstrual, Cólicos y Tensión Femenina",
      description: "El dolor menstrual (dismenorrea), los cólicos punzantes, la pesadez lumbar y la tensión premenstrual no tienen por qué normalizarse. Mediante la acupuntura clínica equilibramos la contractilidad uterina, desinflamamos los tejidos pélvicos y restauramos un flujo hormonal libre de dolor.",
      symptoms: [
        "Cólicos menstruales agudos e incapacitantes (dismenorrea)",
        "Dolor lumbar, inflamación abdominal y pesadez pélvica",
        "Tensión premenstrual (SPM), dolor mamario y cambios de humor",
        "Ciclos irregulares, sangrados dolorosos o acompañamiento en SOP y endometriosis"
      ],
      clinicalHighlights: [
        "Disminución drástica de los cólicos desde las primeras sesiones",
        "Regulación de la síntesis local de prostaglandinas proinflamatorias",
        "Relajación del músculo liso miometrial y mejora de la irrigación pélvica",
        "Menor dependencia de antiinflamatorios y analgésicos de rescate"
      ],
      physiologicalBasis: "Estudios Cochrane confirman que la acupuntura estimula la liberación de beta-endorfinas y modula los receptores de dolor uterino, promoviendo una menstruación fluida y sin espasmos.",
      destinationUrl: "/fertilidad",
      destinationLabel: "Conocer Detalles del Ciclo",
      whatsappPrompt: "Hola, me gustaría consultar sobre acupuntura para el alivio de cólicos y regulación del ciclo menstrual",
      keyStats: [
        { value: "Cochrane", label: "Evidencia de Alto Nivel", detail: "Alivio significativo del dolor" },
        { value: "-70%", label: "Alivio de Cólicos", detail: "Menor intensidad en escala EVA" },
        { value: "100%", label: "Enfoque Natural", detail: "Sin efectos secundarios gástricos" }
      ]
    },
    fertilidad: {
      id: "fertilidad",
      label: "Fertilidad y Reproducción",
      badge: "Ciclos Previos y Concepción",
      tagline: "Acondicionamiento ovárico y preparación para FIV / IA",
      title: "Acupuntura para Fertilidad Natural y Reproducción Asistida",
      description: "La fertilidad no se construye el día de la ovulación o transferencia, sino en los 80 a 90 días previos (ciclo de foliculogénesis). Acompañamos tanto la búsqueda de embarazo natural como procesos de FIV, IA y ovodonación, optimizando el flujo sanguíneo uterino y la calidad receptiva del endometrio.",
      symptoms: [
        "Preparación integral en ciclos previos a FIV, ICSI o inseminación",
        "Búsqueda de embarazo natural con ciclos irregulares o anovulatorios",
        "Baja reserva ovárica, grosor endometrial delgado o fallos de implantación",
        "Estrés, ansiedad y sobrecarga emocional vinculada a la búsqueda reproductiva"
      ],
      clinicalHighlights: [
        "Optimización de la microcirculación en arterias ováricas y uterinas (Doppler)",
        "Mejora del grosor y patrón trilaminar óptimo del endometrio",
        "Aumento comprobado en tasas de embarazo clínico (RR 1.32 en metaanálisis)",
        "Reducción del cortisol y las catecolaminas que provocan espasmos vasculares"
      ],
      physiologicalBasis: "Protocolos validados en The BMJ y Fertility and Sterility demuestran que trabajar en ciclos previos acondiciona el lecho endometrial y el microambiente folicular.",
      destinationUrl: "/fertilidad",
      destinationLabel: "Ver Programa Completo de Fertilidad",
      whatsappPrompt: "Hola, me interesa agendar una consulta de preparación en fertilidad y ciclos previos con acupuntura",
      keyStats: [
        { value: "+32%", label: "Tasa de Embarazo Clínico", detail: "Metaanálisis Qian et al." },
        { value: "8-12 Sem", label: "Trabajo en Ciclos Previos", detail: "Ventana de foliculogénesis" },
        { value: "Doppler", label: "Flujo Uterino Optimizado", detail: "Stener-Victorin Hum Reprod" }
      ]
    },
    climaterio: {
      id: "climaterio",
      label: "Climaterio y Menopausia",
      badge: "Transición Serena y Plena",
      tagline: "Alivio de sofocos, sudor nocturno y descanso reparador",
      title: "Acupuntura para Climaterio, Perimenopausia y Menopausia",
      description: "El climaterio es una transición biológica natural, no una enfermedad. Nuestro protocolo actúa directamente sobre el centro termorregulador del hipotálamo y el sistema neuroendocrino, aliviando bochornos, sudores nocturnos, insomnio y cambios anímicos sin recurrir a hormonas sintéticas.",
      symptoms: [
        "Sofocos repentinos y golpes de calor en rostro y pecho",
        "Sudoración nocturna que fragmenta el sueño y produce agotamiento",
        "Insomnio de mantenimiento, despertares precoces o con taquicardia",
        "Irritabilidad, niebla mental, rigidez articular y resequedad de mucosas"
      ],
      clinicalHighlights: [
        "Reducción de entre 36.7% y 50% en la frecuencia e intensidad de los sofocos",
        "Recuperación del sueño fisiológico profundo sin somníferos (escala PSQI)",
        "Estabilización anímica y modulación del sistema nervioso autónomo",
        "Alternativa segura de primera línea si no puedes o no deseas tomar TRH"
      ],
      physiologicalBasis: "Ensayos clínicos como el estudio AIM (Avis et al., NAMS) y el estudio ACOM (BMJ Open) demuestran beneficios acumulativos y duraderos durante meses.",
      destinationUrl: "/climaterio",
      destinationLabel: "Ver Programa de Climaterio y Menopausia",
      whatsappPrompt: "Hola, quisiera consultar sobre acupuntura para el alivio de sofocos, insomnio y síntomas del climaterio",
      keyStats: [
        { value: "-50%", label: "Frecuencia de Sofocos", detail: "Metaanálisis Chiu et al." },
        { value: "6 Meses", label: "Alivio Sostenido", detail: "Estudio AIM NAMS" },
        { value: "PSQI", label: "Sueño Reparador", detail: "Sleep Medicine Reviews" }
      ]
    }
  };

  const current = stages[activeStage];

  return (
    <section id="bienestar-femenino" className="py-24 bg-gradient-to-b from-white via-primary-50/40 to-white border-b border-primary-100/80 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* ========================================================================= */}
        {/* CABECERA SOMBRILLA: SALUD Y BIENESTAR FEMENINO                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-100 text-accent-800 text-xs font-semibold tracking-widest uppercase border border-accent-200 shadow-2xs">
            <Heart size={14} className="text-accent-600 fill-accent-600" />
            <span>Cuidado Femenino Integral</span>
            <span aria-hidden="true">·</span>
            <span>Benito Juárez, CDMX</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-950 tracking-tight italic">
            Salud y Bienestar Femenino con Acupuntura
          </h2>

          <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full" />

          <p className="text-lg md:text-xl text-brand-text font-light leading-relaxed">
            Un acompañamiento con acupuntura diseñado para las tres etapas clave del bienestar femenino: alivio del dolor y armonización del ciclo menstrual, nutrición del Jing y preparación para la fertilidad, y una transición serena y libre de sofocos en el climaterio.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SELECTOR SOMBRILLA INTERACTIVO (3 ETAPAS)                                */}
        {/* ========================================================================= */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center p-2 bg-primary-100/80 rounded-[2rem] border border-primary-200/90 gap-2 max-w-full shadow-inner">
            <button
              onClick={() => setActiveStage("ciclo")}
              type="button"
              className={`px-5 md:px-7 py-3.5 rounded-2xl text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                activeStage === "ciclo"
                  ? "bg-white text-primary-950 shadow-md border border-primary-200/70 font-bold scale-[1.02]"
                  : "text-primary-800 hover:text-primary-950 hover:bg-white/50"
              }`}
            >
              <Flower2 size={18} className={activeStage === "ciclo" ? "text-accent-600" : "text-primary-600"} />
              <span>1. Ciclo y Cólicos</span>
            </button>

            <button
              onClick={() => setActiveStage("fertilidad")}
              type="button"
              className={`px-5 md:px-7 py-3.5 rounded-2xl text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                activeStage === "fertilidad"
                  ? "bg-white text-primary-950 shadow-md border border-primary-200/70 font-bold scale-[1.02]"
                  : "text-primary-800 hover:text-primary-950 hover:bg-white/50"
              }`}
            >
              <Activity size={18} className={activeStage === "fertilidad" ? "text-accent-600" : "text-primary-600"} />
              <span>2. Fertilidad y FIV</span>
            </button>

            <button
              onClick={() => setActiveStage("climaterio")}
              type="button"
              className={`px-5 md:px-7 py-3.5 rounded-2xl text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                activeStage === "climaterio"
                  ? "bg-white text-primary-950 shadow-md border border-primary-200/70 font-bold scale-[1.02]"
                  : "text-primary-800 hover:text-primary-950 hover:bg-white/50"
              }`}
            >
              <Sun size={18} className={activeStage === "climaterio" ? "text-accent-600" : "text-primary-600"} />
              <span>3. Climaterio y Menopausia</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TARJETA DINÁMICA DE LA ETAPA ACTIVA                                       */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-[2.5rem] border border-primary-150 p-6 md:p-12 shadow-xl mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl pointer-events-none" />

          {/* Quick Metrics of the Stage */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 relative z-10">
            {current.keyStats.map((stat, idx) => (
              <div key={idx} className="bg-primary-50/70 p-4 rounded-2xl border border-primary-150 text-center">
                <span className="text-2xl md:text-3xl font-serif font-black text-accent-700 block mb-0.5">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-primary-950 block">
                  {stat.label}
                </span>
                <span className="text-[11px] text-brand-text font-light">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left: Detailed Clinical Description & Symptoms */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-accent-700 block">
                — {current.badge} —
              </span>

              <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-950 italic">
                {current.title}
              </h3>

              <p className="text-brand-text leading-relaxed font-light text-base md:text-lg">
                {current.description}
              </p>

              {/* Symptoms Checklist */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-primary-900 uppercase tracking-wider block">
                  Motivos Frecuentes de Consulta y Acompañamiento:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.symptoms.map((symptom, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-brand-text">
                      <CheckCircle2 size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
                      <span className="font-light leading-snug">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scientific Note Box */}
              <div className="p-4 rounded-2xl bg-primary-50/80 border border-primary-200/80 text-xs text-brand-text">
                <strong className="text-primary-900 font-semibold block mb-1">
                  Mecanismo Fisiológico y Respaldo Indexado:
                </strong>
                <p className="font-light leading-relaxed">
                  {current.physiologicalBasis}
                </p>
              </div>
            </div>

            {/* Right: Key Objectives & Direct Actions */}
            <div className="lg:col-span-5 bg-gradient-to-b from-primary-50/70 to-primary-100/40 p-6 md:p-8 rounded-3xl border border-primary-200/60 space-y-6">
              <div>
                <span className="text-xs font-bold text-primary-700 uppercase tracking-widest block mb-2">
                  Objetivos Terapéuticos
                </span>
                <h4 className="text-xl font-serif font-bold text-primary-950 italic">
                  Efectos Comprobados en Consulta
                </h4>
              </div>

              <div className="space-y-3">
                {current.clinicalHighlights.map((hl, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-2xl border border-primary-150 shadow-2xs flex items-start gap-2.5">
                    <CircleDot size={14} className="text-accent-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-brand-text font-medium leading-relaxed">
                      {hl}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <WhatsAppButton
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3.5 px-6 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
                  message={current.whatsappPrompt}
                >
                  <MessageCircle size={18} />
                  Agendar Cita
                </WhatsAppButton>

                <Link
                  href={current.destinationUrl}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white hover:bg-primary-50 text-primary-900 font-medium text-sm transition-all border border-primary-200 active:scale-95 shadow-xs text-center"
                >
                  {current.destinationLabel}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PILARES DEL ACOMPAÑAMIENTO INTEGRAL: CUIDADO FEMENINO EN 3 NIVELES       */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-primary-900 via-primary-950 to-primary-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden mb-8 border border-primary-800">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-accent-300 uppercase tracking-widest mb-3">
                <Heart size={15} className="fill-accent-300" />
                <span>Evidencia Científica y Tradición Milenaria</span>
                <span aria-hidden="true">·</span>
                <span>Enfoque Femenino Integral</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif font-bold italic tracking-tight mb-3 text-white">
                ¿Por qué la Acupuntura Transforma la Salud de la Mujer?
              </h3>

              <p className="text-primary-150 text-base md:text-lg font-light leading-relaxed mb-6">
                A diferencia de los analgésicos que solo anestesian el cólico temporalmente o las terapias hormonales que conllevan efectos secundarios, la acupuntura clínica actúa sobre la raíz neurovascular y endocrina, restableciendo la autorregulación natural de tu cuerpo en cada etapa vital.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-primary-800/80 text-xs md:text-sm text-primary-200">
                <div className="flex items-start gap-2.5">
                  <TrendingUp size={18} className="text-accent-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Microcirculación Pélvica:</strong> Oxigena el endometrio, ovarios y tejidos uterinos profundos.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck size={18} className="text-accent-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Modulación del Cortisol:</strong> Frena el estrés simpático que contractura el útero y bloquea hormonas.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock size={18} className="text-accent-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Atención Serena:</strong> Sesiones personalizadas de 50 minutos en un consultorio privado y cómodo en CDMX.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ROADMAP CLÍNICO DE 4 PASOS: CÓMO TE ACOMPAÑAMOS                           */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-widest block mb-2">
              Protocolo de Atención Personalizado
            </span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-950 italic">
              Tu Ruta de Cuidado Femenino Paso a Paso
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Diferenciación Clínica y MTC",
                desc: "Evaluamos tu ciclo menstrual, síntomas de dolor, patrones de sueño, estrés y antecedentes ginecológicos para identificar tu patrón bioenergético."
              },
              {
                step: "02",
                title: "Protocolo Adaptado a tu Etapa",
                desc: "Seleccionamos puntos clave distales y auriculares según tu objetivo: alivio de cólicos, acondicionamiento pre-FIV o control de sofocos."
              },
              {
                step: "03",
                title: "Sesiones de Relajación Profunda",
                desc: "Inserción suave y precisa de agujas estériles en un entorno cálido que estimula la respuesta parasimpática de autorreparación celular."
              },
              {
                step: "04",
                title: "Consolidación y Mantenimiento",
                desc: "A medida que los síntomas ceden y el equilibrio se afianza, espaciamos las sesiones para sostener tu bienestar a largo plazo."
              }
            ].map((st, index) => (
              <div
                key={index}
                className="bg-white p-7 rounded-3xl border border-primary-150 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <span className="text-4xl font-serif font-bold text-primary-200 group-hover:text-accent-300 transition-colors block mb-3">
                  {st.step}
                </span>
                <h4 className="font-serif font-bold text-lg text-primary-950 mb-2 italic">
                  {st.title}
                </h4>
                <p className="text-xs text-brand-text font-light leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ENLACE DIRECTO A LA EVIDENCIA CIENTÍFICA EN EL BLOG                       */}
        {/* ========================================================================= */}
        <div className="mb-16 p-6 md:p-8 bg-white/95 rounded-3xl border border-primary-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:border-primary-300 hover:shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold text-primary-700 tracking-wider uppercase">
              <BookOpen size={16} className="text-accent-500" />
              <span>Acupuntura Basada en Evidencia</span>
              <span aria-hidden="true" className="opacity-40">·</span>
              <span>Literatura Indexada en PubMed</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-950 italic">
              Artículos Científicos de Salud Femenina
            </h3>
            <p className="text-sm text-brand-text font-light max-w-2xl leading-relaxed">
              Ensayos clínicos controlados aleatorizados, revisiones sistemáticas Cochrane y metaanálisis en ginecología, fertilidad y climaterio transferidos a nuestra sección de Blog para consulta detallada.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/blog#evidencia-cientifica-femenina"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary-700 hover:bg-primary-800 text-white font-semibold text-xs transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              <BookOpen size={15} className="text-accent-300" />
              <span>Explorar Artículos en el Blog</span>
              <ArrowRight size={14} className="opacity-80" />
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BANNER DE CONFIANZA Y CONTACTO DIRECTO                                    */}
        {/* ========================================================================= */}
        <div className="bg-primary-900 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-accent-300 text-xs font-semibold tracking-wider uppercase">
              <Heart size={16} className="fill-accent-300" />
              <span>Atención Femenina Respetuosa y Confidencial</span>
            </div>
            <h4 className="text-2xl md:text-3xl font-serif italic font-bold">
              ¿Deseas una valoración de acupuntura sobre tu bienestar y armonía femenina?
            </h4>
            <p className="text-primary-100 font-light text-sm max-w-2xl leading-relaxed">
              Ya sea que busques aliviar cólicos, preparar tu cuerpo y flujo energético para la concepción o transitar la menopausia con serenidad, en Benito Juárez, CDMX te oriento personalmente con calidez, rigor profesional y sabiduría tradicional.
            </p>
          </div>

          <div className="flex-shrink-0">
            <WhatsAppButton
              className="bg-white text-primary-950 hover:bg-primary-50 py-4 px-8 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 active:scale-95"
              message="Hola, me gustaría agendar una consulta de valoración sobre salud y bienestar femenino"
            >
              <MessageCircle size={18} className="text-accent-600" />
              Consultar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};
