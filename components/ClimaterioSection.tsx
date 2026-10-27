"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sun,
  Moon,
  Activity, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Heart,
  Clock, 
  FileText,
  MessageCircle,
  TrendingUp,
  CircleDot,
  BookOpen,
  ExternalLink,
  Quote,
  GraduationCap,
  Layers,
  ThermometerSun,
  Smile,
  Feather
} from "lucide-react";
import { clinicData } from "@/data/clinic-data";
import { WhatsAppButton } from "./WhatsAppButton";

interface TabData {
  id: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  scientificNote: string;
  points: { title: string; desc: string }[];
}

export interface ScientificCitation {
  id: string;
  authors: string;
  year: number;
  title: string;
  journal: string;
  volume: string;
  doiOrPmid: string;
  pubmedUrl: string;
  keyFinding: string;
  clinicalImpact: string;
  category: "Sofocos y Bochornos" | "Sueño e Insomnio" | "Calidad de Vida" | "Metaanálisis" | "Eje Neuroendocrino";
}

const scientificCitations: ScientificCitation[] = [
  {
    id: "chiu-2015",
    authors: "Chiu HY, Pan CH, Shyu YK, Han BC, Tsai PS.",
    year: 2015,
    title: "Effects of acupuncture on menopause-related symptoms and quality of life in women in natural menopause: a meta-analysis of randomized controlled trials",
    journal: "Menopause (The North American Menopause Society - NAMS)",
    volume: "Vol. 22, No. 2, págs. 234-244",
    doiOrPmid: "PMID: 25003620 · DOI: 10.1097/GME.0000000000000260",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/25003620/",
    keyFinding: "Metaanálisis que demostró que la acupuntura reduce significativamente la frecuencia y severidad de los sofocos y sudoraciones nocturnas, mejorando sustancialmente las puntuaciones en la escala de calidad de vida específica para menopausia (MENQOL).",
    clinicalImpact: "Valida la acupuntura clínica como una intervención no hormonal de primera línea para el manejo de síntomas vasomotores del climaterio sin efectos secundarios.",
    category: "Sofocos y Bochornos"
  },
  {
    id: "avis-2016",
    authors: "Avis NE, Coeytaux RR, Isom S, Prevette K, Morgan T.",
    year: 2016,
    title: "Acupuncture in Menopause (AIM) study: a pragmatic, randomized controlled trial",
    journal: "Menopause (The North American Menopause Society - NAMS)",
    volume: "Vol. 23, No. 6, págs. 626-637",
    doiOrPmid: "PMID: 27023860 · DOI: 10.1097/GME.0000000000000597",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/27023860/",
    keyFinding: "Ensayo clínico pragmático en más de 200 mujeres: el grupo de acupuntura experimentó una reducción del 36.7% en la frecuencia de síntomas vasomotores a los 6 meses, con beneficios prolongados en insomnio, fatiga y bienestar emocional.",
    clinicalImpact: "Comprueba que los beneficios de un ciclo de sesiones regulares se mantienen de forma acumulativa y duradera durante meses tras finalizar el tratamiento.",
    category: "Calidad de Vida"
  },
  {
    id: "lund-2019",
    authors: "Lund KS, Siersma V, Brodersen J, Waldorff FB.",
    year: 2019,
    title: "Efficacy of a standardised acupuncture approach for women with bothersome menopausal symptoms: a pragmatic randomised study in primary care (the ACOM study)",
    journal: "BMJ Open",
    volume: "Vol. 9, No. 1, e023637",
    doiOrPmid: "PMID: 30782712 · DOI: 10.1136/bmjopen-2018-023637",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/30782712/",
    keyFinding: "El estudio ACOM publicado en BMJ Open evidenció una reducción rápida y clínicamente relevante en sofocos, sudoración nocturna, insomnio y labilidad emocional a partir de las primeras semanas de tratamiento.",
    clinicalImpact: "Respaldo en atención primaria europea sobre la rapidez y seguridad de la acupuntura para restablecer la estabilidad física y anímica de la mujer.",
    category: "Sofocos y Bochornos"
  },
  {
    id: "chiu-2016-sleep",
    authors: "Chiu HY, Hsieh YJ, Tsai PS.",
    year: 2016,
    title: "Acupuncture for menopausal sleep disturbances: a systematic review and meta-analysis of randomized controlled trials",
    journal: "Sleep Medicine Reviews",
    volume: "Vol. 30, págs. 45-54",
    doiOrPmid: "PMID: 27072522 · DOI: 10.1016/j.smrv.2015.11.002",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/27072522/",
    keyFinding: "Metaanálisis riguroso en revista líder de medicina del sueño: la acupuntura demostró una mejoría estadísticamente significativa en el índice de calidad de sueño de Pittsburgh (PSQI) y reducción del despertar nocturno.",
    clinicalImpact: "Fundamental para pacientes que sufren insomnio de mantenimiento y microdespertares por calor nocturno, promoviendo el descanso fisiológico sin sedantes.",
    category: "Sueño e Insomnio"
  },
  {
    id: "dodin-2013",
    authors: "Dodin S, Blanchet C, Marc I, Ernst E, Fønhus MS, Vandal S, Vergnes MC.",
    year: 2013,
    title: "Acupuncture for menopausal hot flushes",
    journal: "Cochrane Database of Systematic Reviews",
    volume: "Issue 7, Art. No.: CD007410",
    doiOrPmid: "PMID: 23897451 · DOI: 10.1002/14651858.CD007410.pub2",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/23897451/",
    keyFinding: "Revisión sistemática Cochrane que confirmó que la acupuntura es significativamente superior a la ausencia de tratamiento para mitigar la frecuencia y gravedad de los sofocos en el climaterio.",
    clinicalImpact: "El máximo estándar de síntesis de evidencia científica respalda la utilidad clínica de la acupuntura frente al manejo pasivo o expectante de los síntomas vasomotores.",
    category: "Metaanálisis"
  },
  {
    id: "befus-2018",
    authors: "Befus D, Coeytaux RR, Goldstein KM, McDuffie JR, Shepherd-Banigan M, Goode AP, Kosinski A, Van Noord MG, Adam SS, Masilamani V, Schwida-McGraw S, Gierisch JM.",
    year: 2018,
    title: "Management of Menopausal Symptoms with Acupuncture: An Umbrella Systematic Review and Meta-Analysis",
    journal: "The Journal of Alternative and Complementary Medicine",
    volume: "Vol. 24, No. 4, págs. 314-323",
    doiOrPmid: "PMID: 29293368 · DOI: 10.1089/acm.2017.0252",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/29293368/",
    keyFinding: "Umbrella review que integró múltiples revisiones sistemáticas concluyendo mejoras estadísticamente significativas en la severidad de sofocos, bienestar psicológico y modulación del sistema neurovegetativo.",
    clinicalImpact: "Confirma el rol holístico de la acupuntura: equilibra la reactividad del sistema nervioso autónomo y la esfera psicoemocional de la mujer en perimenopausia y postmenopausia.",
    category: "Eje Neuroendocrino"
  }
];

export const ClimaterioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("vasomotores");
  const [selectedCitationCategory, setSelectedCitationCategory] = useState<string>("all");

  const tabs: TabData[] = [
    {
      id: "vasomotores",
      label: "Sofocos y Bochornos",
      badge: "Termorregulación y Calma",
      title: "Control Natural de Sofocos y Sudoración Nocturna",
      description: "Los cambios bruscos de temperatura, golpes de calor en rostro y pecho, y las sudoraciones nocturnas se deben a la hipersensibilidad del centro termorregulador del hipotálamo ante la fluctuación de estrógenos. La acupuntura modula este centro de forma natural.",
      highlights: [
        "Disminución progresiva en la frecuencia, duración e intensidad de los bochornos",
        "Alivio de las sudoraciones nocturnas que interrumpen el descanso",
        "Alternativa eficaz, segura y libre de hormonas sintéticas",
        "Restablecimiento de la estabilidad térmica corporal diurna y nocturna"
      ],
      scientificNote: "Evidencia de Chiu et al. (NAMS) y Lund et al. (BMJ Open) confirma la reducción sostenida de síntomas vasomotores con acupuntura.",
      points: [
        {
          title: "Estabilidad Hipotalámica",
          desc: "Modula neurotransmisores (serotonina y noradrenalina) que regulan la ventana de temperatura corporal."
        },
        {
          title: "Armonía Yin y Yang",
          desc: "En MTC nutre el Yin de Riñón y aclara el calor por insuficiencia que detona los accesos súbitos de calor."
        }
      ]
    },
    {
      id: "sueno",
      label: "Insomnio y Sueño",
      badge: "Descanso Profundo",
      title: "Recuperación del Sueño Reparador y Ritmo Circadiano",
      description: "El insomnio de mantenimiento, los despertares a medianoche con sensación de calor o taquicardia y la dificultad para conciliar el sueño son frecuentes en la transición menopáusica. La acupuntura induce un estado alfa de relajación profunda.",
      highlights: [
        "Disminución notable de los microdespertares y el despertar precoz",
        "Estimulación natural de melatonina y neurotransmisores inhibidores (GABA)",
        "Sueño más continuo, profundo y energizante",
        "Sensación de vitalidad y claridad mental al iniciar la mañana"
      ],
      scientificNote: "Metaanálisis en Sleep Medicine Reviews corrobora mejoras significativas en los índices de calidad del sueño (PSQI).",
      points: [
        {
          title: "Sedación del Sistema Nervioso",
          desc: "Frena la hiperactivación simpática nocturna, permitiendo una transición suave hacia el sueño profundo."
        },
        {
          title: "Apaciguar el Shen (Mente)",
          desc: "Alivia la inquietud mental, palpitaciones nocturnas y la sensación de cansancio al despertar."
        }
      ]
    },
    {
      id: "emocional",
      label: "Ánimo y Claridad Mental",
      badge: "Serenidad Emocional",
      title: "Equilibrio Emocional, Ansiedad y Niebla Mental",
      description: "Las fluctuaciones hormonales impactan directamente los receptores cerebrales de serotonina y dopamina, provocando irritabilidad, labilidad emocional, sensación de sobrecarga o 'niebla mental'. La acupuntura promueve la liberación de endorfinas.",
      highlights: [
        "Alivio de la irritabilidad repentina, ansiedad y cambios bruscos de humor",
        "Mayor concentración, agudeza cognitiva y disminución de la fatiga mental",
        "Reducción de los niveles de cortisol y amortiguación de la tensión física",
        "Espacio terapéutico de contención, escucha clínica y reconexión interna"
      ],
      scientificNote: "Estudios clínicos demuestran modulación del eje hipotálamo-hipófisis-adrenal (HHA) y liberación de endorfinas.",
      points: [
        {
          title: "Liberación de Endorfinas",
          desc: "Induce una sensación sostenida de sosiego corporal, templanza y confort emocional."
        },
        {
          title: "Desbloqueo de Qi de Hígado",
          desc: "En MTC descongestiona la tensión emocional acumulada y suaviza la respuesta ante el estrés cotidiano."
        }
      ]
    },
    {
      id: "osteomuscular",
      label: "Articulaciones y Vitalidad",
      badge: "Sostén y Flexibilidad",
      title: "Molestias Articulares, Rigidez y Bienestar Integral",
      description: "La disminución estrogénica puede manifestarse con rigidez matutina en manos, dolores articulares difusos, pesadez pélvica y sequedad de mucosas. La acupuntura optimiza la microcirculación local y combate la inflamación tisular.",
      highlights: [
        "Alivio de la rigidez articular en manos, rodillas y columna vertebral",
        "Efecto antiinflamatorio y analgésico neuromodulador sin efectos gastrolesivos",
        "Mejora en la microcirculación de tejidos pélvicos y suelo muscular",
        "Aumento en la energía vital y resistencia física frente al agotamiento"
      ],
      scientificNote: "Modulación de citocinas proinflamatorias y vasodilatación periférica que protege la función articular.",
      points: [
        {
          title: "Microcirculación Profunda",
          desc: "Favorece la nutrición sanguínea del cartílago, tendones y estructuras periarticulares."
        },
        {
          title: "Tonificación de Riñón (Huesos)",
          desc: "Refuerza la raíz energética del organismo para preservar la fortaleza ósea y la vitalidad general."
        }
      ]
    }
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="climaterio-section" className="py-24 bg-gradient-to-b from-white via-primary-50/40 to-white border-b border-primary-100/80">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-primary-700 tracking-widest uppercase">
            <Sun size={16} className="text-accent-500" />
            <span>Medicina Integrativa Femenina</span>
            <span aria-hidden="true">·</span>
            <span>Benito Juárez, CDMX</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-950 tracking-tight italic">
            Acupuntura para Climaterio y Menopausia
          </h2>

          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full" />

          <p className="text-lg md:text-xl text-brand-text font-light leading-relaxed">
            Acompañamiento clínico integral respaldado por ensayos clínicos internacionales. Aliviamos sofocos, sudores nocturnos, insomnio y cambios de humor, restaurando la armonía y la serenidad en esta etapa natural de tu vida.
          </p>
        </div>

        {/* Interactive Segmented Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 bg-primary-100/70 rounded-2xl border border-primary-200/80 gap-1.5 max-w-full">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                  className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-white text-primary-950 shadow-md border border-primary-200/60 font-semibold scale-[1.02]"
                      : "text-primary-800 hover:text-primary-950 hover:bg-white/50"
                  }`}
                >
                  {tab.id === "vasomotores" && <ThermometerSun size={16} className={isActive ? "text-accent-600" : "text-primary-600"} />}
                  {tab.id === "sueno" && <Moon size={16} className={isActive ? "text-accent-600" : "text-primary-600"} />}
                  {tab.id === "emocional" && <Smile size={16} className={isActive ? "text-accent-600" : "text-primary-600"} />}
                  {tab.id === "osteomuscular" && <Feather size={16} className={isActive ? "text-accent-600" : "text-primary-600"} />}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display Card */}
        <div className="bg-white rounded-3xl border border-primary-150 p-6 md:p-12 shadow-xl mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Column: Clinical Description & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-semibold text-accent-700 tracking-widest uppercase">
                <span>{currentTab.badge}</span>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary-950 italic">
                {currentTab.title}
              </h3>

              <p className="text-brand-text leading-relaxed font-light text-base md:text-lg">
                {currentTab.description}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold text-primary-900 uppercase tracking-wider block">
                  Beneficios y Objetivos Terapéuticos:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentTab.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-brand-text">
                      <CheckCircle2 size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
                      <span className="font-light leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scientific Note Box */}
              <div className="p-4 rounded-2xl bg-primary-50/80 border border-primary-200/80 text-xs text-brand-text">
                <strong className="text-primary-900 font-semibold block mb-1">
                  Respaldo Clínico y Mecanismo Fisiológico:
                </strong>
                <p className="font-light leading-relaxed">
                  {currentTab.scientificNote}
                </p>
              </div>
            </div>

            {/* Right Column: Key Action Pillars & Quick Booking */}
            <div className="lg:col-span-5 bg-gradient-to-b from-primary-50/70 to-primary-100/40 p-6 md:p-8 rounded-3xl border border-primary-200/60 space-y-6">
              <div>
                <span className="text-xs font-bold text-primary-700 uppercase tracking-widest block mb-2">
                  Enfoque en Consulta
                </span>
                <h4 className="text-xl font-serif font-bold text-primary-950 italic">
                  Abordaje Integrativo Personalizado
                </h4>
              </div>

              <div className="space-y-4">
                {currentTab.points.map((pt, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-primary-150 shadow-2xs space-y-1">
                    <span className="font-bold text-primary-900 text-sm block flex items-center gap-2">
                      <CircleDot size={14} className="text-accent-500" />
                      {pt.title}
                    </span>
                    <p className="text-xs text-brand-text font-light leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <WhatsAppButton
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3.5 px-6 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
                  message={`Hola, me gustaría agendar una valoración sobre acupuntura para climaterio y menopausia (${currentTab.label})`}
                >
                  <MessageCircle size={18} />
                  Agendar Valoración
                </WhatsAppButton>

                <Link
                  href="/climaterio"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white hover:bg-primary-50 text-primary-900 font-medium text-sm transition-all border border-primary-200 active:scale-95 shadow-xs"
                >
                  Ver Detalles Clínicos
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ACOMPAÑAMIENTO INTEGRAL: EL VALOR DE LA ACUPUNTURA EN EL CLIMATERIO        */}
        {/* ========================================================================= */}
        <div id="enfoque-climaterio" className="mb-20 scroll-mt-28">
          {/* Module Header */}
          <div className="bg-gradient-to-br from-primary-900 via-primary-950 to-primary-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden mb-8 border border-primary-800">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-accent-300 uppercase tracking-widest mb-3">
                <span>Salud Femenina y Transición Menopáusica</span>
                <span aria-hidden="true">·</span>
                <span>Enfoque Neurovegetativo</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif font-bold italic tracking-tight mb-3 text-white">
                El Valor del Acompañamiento en el Climaterio
              </h3>

              <p className="text-primary-150 text-base md:text-lg font-light leading-relaxed mb-6">
                El climaterio no es una enfermedad, sino una transición neurohormonal natural. Nuestro objetivo con la acupuntura es acompañarte con un tratamiento suave y regular para que tu organismo regule su termostato interno, recupere el descanso nocturno y transites esta etapa con serenidad y bienestar.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-primary-800/80 text-xs md:text-sm text-primary-200">
                <div className="flex items-center gap-2">
                  <TrendingUp size={16} className="text-accent-400" />
                  <span><strong>-36.7% a -50%</strong> de reducción en frecuencia de sofocos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-accent-400" />
                  <span><strong>8 a 12 Semanas</strong> para consolidar el equilibrio</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-accent-400" />
                  <span><strong>100% Libre de hormonas</strong> sintéticas o sedantes</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2-Column Overview of Treatment Pillars */}
          <div className="bg-white rounded-[2.5rem] border border-primary-150 p-6 md:p-10 shadow-xl relative">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold text-accent-600 uppercase tracking-wider block mb-1">
                Estructura del Tratamiento
              </span>
              <h4 className="text-2xl md:text-3xl font-serif font-bold text-primary-950 italic">
                ¿Cómo equilibramos tu organismo sesión a sesión?
              </h4>
              <p className="text-brand-text text-sm font-light mt-2">
                Trabajamos de forma simultánea sobre los dos centros más afectados por las fluctuaciones estrogénicas:
              </p>
            </div>

            {/* 2 Clean Cards Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
              {/* Card 1: Termorregulación */}
              <div className="p-6 md:p-8 rounded-3xl bg-primary-50/70 border border-primary-150 flex flex-col justify-between hover:border-primary-300 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-accent-100 text-accent-800 text-xs font-semibold tracking-wide uppercase">
                      Pilar 1
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-primary-600 font-medium">
                      <ThermometerSun size={14} />
                      <span>Termorregulación Hipotalámica</span>
                    </div>
                  </div>

                  <h5 className="text-xl md:text-2xl font-serif font-bold text-primary-950 italic mb-2">
                    Regulación Térmica y Vasomotora
                  </h5>

                  <p className="text-brand-text text-sm font-light leading-relaxed mb-6">
                    Estabilización de las vías neuroquímicas que envían señales falsas de sobrecalentamiento corporal, modulando la vasodilatación capilar periférica.
                  </p>

                  <div className="space-y-3 border-t border-primary-200/60 pt-4">
                    <div className="flex items-start gap-2.5 text-xs md:text-sm text-brand-text">
                      <CheckCircle2 size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Menos picos de calor:</strong> Amplía la zona termoneutra para evitar sofocos súbitos.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs md:text-sm text-brand-text">
                      <CheckCircle2 size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Control de sudoración:</strong> Reduce la transpiración nocturna que obliga a cambiar ropa o sábanas.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs md:text-sm text-brand-text">
                      <CheckCircle2 size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Nutrición del Yin:</strong> En MTC, refresca el organismo y aplaca el fuego por vacío.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Sueño y Eje Neurovegetativo */}
              <div className="p-6 md:p-8 rounded-3xl bg-primary-50/70 border border-primary-150 flex flex-col justify-between hover:border-primary-300 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary-200 text-primary-800 text-xs font-semibold tracking-wide uppercase">
                      Pilar 2
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-primary-600 font-medium">
                      <Moon size={14} />
                      <span>Eje Neurovegetativo y Sueño</span>
                    </div>
                  </div>

                  <h5 className="text-xl md:text-2xl font-serif font-bold text-primary-950 italic mb-2">
                    Sueño Profundo y Estabilidad Anímica
                  </h5>

                  <p className="text-brand-text text-sm font-light leading-relaxed mb-6">
                    Reducción de la respuesta de estrés simpático y reactivación del sistema parasimpático para permitir un reposo reparador y estabilidad emocional.
                  </p>

                  <div className="space-y-3 border-t border-primary-200/60 pt-4">
                    <div className="flex items-start gap-2.5 text-xs md:text-sm text-brand-text">
                      <CheckCircle2 size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Inducción al descanso:</strong> Facilita conciliar el sueño y reduce despertares ansiosos.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs md:text-sm text-brand-text">
                      <CheckCircle2 size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Amortiguación del cortisol:</strong> Mitiga la sensación de agobio, irritabilidad o taquicardias leves.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs md:text-sm text-brand-text">
                      <CheckCircle2 size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Claridad mental:</strong> Alivia la fatiga diurna provocada por el mal descanso acumulado.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Patient Guidance */}
            <div className="pt-6 border-t border-primary-150 grid grid-cols-1 md:grid-cols-3 gap-5 text-xs md:text-sm">
              <div className="p-4 rounded-2xl bg-primary-50/50 border border-primary-100">
                <span className="font-bold text-primary-950 block mb-1 flex items-center gap-1.5">
                  <Layers size={16} className="text-accent-500" />
                  Todas las Etapas
                </span>
                <p className="text-brand-text font-light leading-relaxed">
                  Adecuado en <strong>perimenopausia</strong> (primeras irregularidades y cambios de humor), <strong>menopausia</strong> y <strong>postmenopausia</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-primary-50/50 border border-primary-100">
                <span className="font-bold text-primary-950 block mb-1 flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-primary-700" />
                  Ideal si no deseas Hormonas
                </span>
                <p className="text-brand-text font-light leading-relaxed">
                  Tratamiento de elección para mujeres con contraindicaciones para TRH o que prefieren una vía natural y respetuosa con su cuerpo.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-primary-50/50 border border-primary-100">
                <span className="font-bold text-primary-950 block mb-1 flex items-center gap-1.5">
                  <Clock size={16} className="text-accent-500" />
                  Atención en Benito Juárez, CDMX
                </span>
                <p className="text-brand-text font-light leading-relaxed">
                  Sesiones semanales de 45 a 50 minutos en un consultorio cómodo, tranquilo y privado para garantizar tu máxima relajación.
                </p>
              </div>
            </div>

            {/* Direct Climaterio CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-primary-950 text-white">
              <div className="text-left">
                <span className="font-serif font-bold text-base block text-white italic">
                  ¿Experimentas sofocos o insomnio en tu día a día?
                </span>
                <span className="text-xs text-primary-200 font-light">
                  Agenda una consulta de valoración y comienza a recuperar tu bienestar y descanso natural.
                </span>
              </div>
              <WhatsAppButton
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-full font-bold text-xs transition-all shadow-md flex items-center gap-2 active:scale-95 flex-shrink-0"
                message="Hola, me gustaría agendar una cita de acupuntura para el alivio de síntomas de climaterio y menopausia"
              >
                <MessageCircle size={16} />
                Agendar Consulta
              </WhatsAppButton>
            </div>
          </div>
        </div>

        {/* 4-Step Clinical Process Roadmap */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-widest block mb-2">
              Proceso Terapéutico Acompañado
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-950 italic">
              Cómo Trabajamos Contigo Paso a Paso
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Valoración Clínica y Diferenciación MTC",
                desc: "Analizamos tu historial ginecológico, patrón de sofocos, calidad de sueño y diferenciamos tu patrón bioenergético (Yin, Yang, Qi y Xue)."
              },
              {
                step: "02",
                title: "Plan Terapéutico Adaptado",
                desc: "Diseñamos un protocolo semanal enfocado en tus síntomas predominantes: termorregulación, descanso nocturno o equilibrio emocional."
              },
              {
                step: "03",
                title: "Sesiones de Neuromodulación Suave",
                desc: "Colocación suave de agujas estériles en puntos clave distales y auriculares en un espacio tranquilo para inducir relajación profunda."
              },
              {
                step: "04",
                title: "Consolidación y Mantenimiento",
                desc: "Tras las semanas iniciales de estabilización, espaciamos las sesiones para sostener el bienestar y la vitalidad a largo plazo."
              }
            ].map((st, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl border border-primary-150 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group"
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
        {/* ARTÍCULOS CIENTÍFICOS DE REFERENCIA: ACUPUNTURA Y CLIMATERIO               */}
        {/* ========================================================================= */}
        <div id="evidencia-cientifica-climaterio" className="mb-16 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-primary-700 tracking-widest uppercase">
              <BookOpen size={16} className="text-accent-500" />
              <span>Acupuntura y Menopausia Basada en Evidencia</span>
              <span aria-hidden="true">·</span>
              <span>Literatura Científica Indexada en PubMed</span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-950 tracking-tight italic">
              Artículos Científicos de Acupuntura y Climaterio
            </h3>

            <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full" />

            <p className="text-base md:text-lg text-brand-text font-light leading-relaxed">
              Ensayos clínicos aleatorizados, revisiones sistemáticas y metaanálisis publicados en revistas de alto impacto que demuestran la eficacia de la acupuntura para sofocos, insomnio y calidad de vida en el climaterio.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white p-5 rounded-2xl border border-primary-100 shadow-xs text-center">
              <span className="text-2xl md:text-3xl font-serif font-black text-accent-600 block mb-1">
                -50%
              </span>
              <span className="text-xs font-semibold text-primary-900 block mb-0.5">
                Frecuencia de Sofocos
              </span>
              <span className="text-[11px] text-brand-text/80 font-light">
                Chiu et al. · Menopause (NAMS)
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-primary-100 shadow-xs text-center">
              <span className="text-2xl md:text-3xl font-serif font-black text-primary-700 block mb-1">
                36.7%
              </span>
              <span className="text-xs font-semibold text-primary-900 block mb-0.5">
                Alivio a 6 Meses
              </span>
              <span className="text-[11px] text-brand-text/80 font-light">
                Avis et al. · AIM Study
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-primary-100 shadow-xs text-center">
              <span className="text-2xl md:text-3xl font-serif font-black text-accent-600 block mb-1">
                PSQI
              </span>
              <span className="text-xs font-semibold text-primary-900 block mb-0.5">
                Mejora del Sueño
              </span>
              <span className="text-[11px] text-brand-text/80 font-light">
                Chiu et al. · Sleep Med Rev
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-primary-100 shadow-xs text-center">
              <span className="text-2xl md:text-3xl font-serif font-black text-primary-700 block mb-1">
                BMJ
              </span>
              <span className="text-xs font-semibold text-primary-900 block mb-0.5">
                Estudio ACOM
              </span>
              <span className="text-[11px] text-brand-text/80 font-light">
                Lund et al. · BMJ Open
              </span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex flex-wrap items-center justify-center p-1 bg-primary-100/60 rounded-xl border border-primary-200/60 gap-1 text-xs font-medium">
              {[
                { id: "all", label: "Todos los Artículos (6)" },
                { id: "Sofocos y Bochornos", label: "Sofocos y Bochornos" },
                { id: "Sueño e Insomnio", label: "Sueño e Insomnio" },
                { id: "Calidad de Vida", label: "Calidad de Vida (AIM)" },
                { id: "Metaanálisis", label: "Cochrane / Metaanálisis" },
                { id: "Eje Neuroendocrino", label: "Eje Neuroendocrino" }
              ].map((category) => {
                const isSelected = selectedCitationCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCitationCategory(category.id)}
                    type="button"
                    className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white text-primary-950 font-bold shadow-xs border border-primary-200/70 scale-[1.02]"
                        : "text-primary-700 hover:text-primary-950 hover:bg-white/40"
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Citations List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scientificCitations
              .filter((c) => selectedCitationCategory === "all" || c.category === selectedCitationCategory)
              .map((citation, index) => (
                <article
                  key={citation.id}
                  className="bg-white p-6 md:p-7 rounded-3xl border border-primary-150 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {/* Header: Badge & Year */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-800 text-[11px] font-semibold tracking-wide">
                        {citation.category}
                      </span>
                      <span className="text-xs font-bold text-accent-600 bg-accent-50 px-2 py-0.5 rounded-md border border-accent-100">
                        Año {citation.year}
                      </span>
                    </div>

                    {/* Journal & Citation */}
                    <div className="text-xs text-primary-900 font-medium">
                      <span className="italic font-serif">{citation.journal}</span>
                      <span className="mx-1.5 opacity-40">·</span>
                      <span className="text-brand-text/70">{citation.volume}</span>
                      <span className="mx-1.5 opacity-40" aria-hidden="true">·</span>
                      <span className="text-brand-text/70">{citation.doiOrPmid}</span>
                    </div>

                    <h4 className="text-xl md:text-2xl font-serif font-bold text-primary-950 italic leading-snug">
                      {citation.title}
                    </h4>

                    <p className="text-xs text-brand-text font-light">
                      <strong>Autores:</strong> {citation.authors}
                    </p>
                  </div>

                  {/* Findings & Clinical Impact Box */}
                  <div className="space-y-3 pt-3 border-t border-primary-100">
                    <div className="bg-primary-50/70 p-4 rounded-2xl border border-primary-150/70">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-primary-900 mb-1.5">
                        <CheckCircle2 size={15} className="text-accent-600" />
                        <span>Hallazgo Clínico Principal:</span>
                      </div>
                      <p className="text-xs text-brand-text leading-relaxed font-light">
                        {citation.keyFinding}
                      </p>
                    </div>

                    <div className="bg-primary-50/40 p-4 rounded-2xl border border-primary-150/50">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-primary-900 mb-1.5">
                        <ShieldCheck size={15} className="text-primary-700" />
                        <span>Aplicación en Consulta:</span>
                      </div>
                      <p className="text-xs text-brand-text leading-relaxed font-light">
                        {citation.clinicalImpact}
                      </p>
                    </div>
                  </div>

                  {/* Official PubMed Link Button */}
                  <div className="pt-2">
                    <a
                      href={citation.pubmedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary-50 hover:bg-primary-100 text-primary-800 hover:text-primary-950 font-semibold text-xs border border-primary-200 transition-colors flex-shrink-0 active:scale-95"
                    >
                      <FileText size={14} className="text-accent-500" />
                      <span>Ver en PubMed</span>
                      <ExternalLink size={12} className="opacity-70" />
                    </a>
                  </div>
                </article>
              ))}
          </div>

          {/* Academic Transparency Note */}
          <div className="mt-8 p-4 rounded-2xl bg-primary-50/80 border border-primary-200/60 text-center">
            <p className="text-xs text-brand-text leading-relaxed font-light">
              <strong className="font-semibold text-primary-900">Enfoque integrativo y armónico:</strong> En Centro de Acupuntura QI en Benito Juárez, CDMX, acompañamos los cambios de la perimenopausia y postmenopausia en estrecha armonía con tus controles habituales, brindando una alternativa natural, segura y basada en evidencia científica.
            </p>
          </div>
        </div>

        {/* Trust & Transparency Banner */}
        <div className="bg-primary-900 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-accent-300 text-xs font-semibold tracking-wider uppercase">
              <Sun size={16} />
              <span>Acompañamiento Femenino Respetuoso</span>
            </div>
            <h4 className="text-2xl md:text-3xl font-serif italic font-bold">
              ¿Deseas saber si la acupuntura es adecuada para tu caso?
            </h4>
            <p className="text-primary-100 font-light text-sm max-w-2xl leading-relaxed">
              Cada mujer vive el climaterio de forma diferente. Te brindaré una orientación honesta, cálida y personalizada para recuperar tu descanso y bienestar.
            </p>
          </div>

          <div className="flex-shrink-0">
            <WhatsAppButton
              className="bg-white text-primary-950 hover:bg-primary-50 py-4 px-8 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 active:scale-95"
              message="Hola, quisiera consultar sobre el tratamiento de acupuntura para climaterio y menopausia"
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
