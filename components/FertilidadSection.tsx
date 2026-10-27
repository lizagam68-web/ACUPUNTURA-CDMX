"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Flower2, 
  Heart, 
  Activity, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Baby, 
  Clock, 
  FileText,
  MessageCircle,
  TrendingUp,
  CircleDot,
  BookOpen,
  ExternalLink,
  Quote,
  GraduationCap,
  Layers
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
  category: "Ciclos Previos y FIV" | "Flujo Uterino" | "Receptividad Endometrial" | "Metaanálisis" | "Tasas de Embarazo" | "Estrés y Fertilidad";
}

const scientificCitations: ScientificCitation[] = [
  {
    id: "qian-2017",
    authors: "Qian Y, Xia XR, Zheng H, Zhou Y, Huang GY.",
    year: 2017,
    title: "Therapeutic effect of acupuncture on the outcomes of in vitro fertilization: a systematic review and meta-analysis",
    journal: "Archives of Gynecology and Obstetrics",
    volume: "Vol. 295, No. 3, págs. 543-558",
    doiOrPmid: "PMID: 28004245 · DOI: 10.1007/s00404-016-4255-y",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/28004245/",
    keyFinding: "Demostró que la administración de acupuntura programada a lo largo de ciclos preparatorios previos y durante la estimulación ovárica incrementa significativamente la tasa de embarazo clínico (RR 1.32) y la receptividad del endometrio en FIV.",
    clinicalImpact: "Sustenta con rigor estadístico el beneficio de realizar sesiones de acupuntura en ciclos previos (8 a 12 semanas antes) para acondicionar el microambiente vascular de ovarios y útero.",
    category: "Ciclos Previos y FIV"
  },
  {
    id: "stener-victorin-1996",
    authors: "Stener-Victorin E, Waldenström U, Andersson PO, Wikland M.",
    year: 1996,
    title: "Reduction of blood flow impedance in the uterine arteries of infertile women by electro-acupuncture",
    journal: "Human Reproduction (ESHRE)",
    volume: "Vol. 11, No. 6, págs. 1314-1317",
    doiOrPmid: "PMID: 8671478 · DOI: 10.1093/oxfordjournals.humrep.a019379",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/8671478/",
    keyFinding: "Reducción significativa del índice de pulsatilidad (PI) en las arterias uterinas en mujeres con problemas de fertilidad, documentada por ecografía Doppler tras un ciclo de acupuntura.",
    clinicalImpact: "Evidencia biológica sobre la disminución del tono simpático vascular, favoreciendo la irrigación profunda y la receptividad del lecho endometrial antes de la concepción.",
    category: "Flujo Uterino"
  },
  {
    id: "gu-2019",
    authors: "Gu F, Zhong Y, Xiao C, Zhou W, Chen M, Liu Z.",
    year: 2019,
    title: "Effects of Acupuncture on Endometrial Receptivity in Patients with Infertility: A Systematic Review and Meta-Analysis",
    journal: "Evidence-Based Complementary and Alternative Medicine",
    volume: "Vol. 2019, Article ID 9590621",
    doiOrPmid: "PMID: 31447035 · DOI: 10.1155/2019/9590621",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/31447035/",
    keyFinding: "Metaanálisis enfocado exclusivamente en infertilidad que comprobó que la acupuntura en ciclos menstruales previos incrementa el grosor endometrial, el patrón trilaminar tipo A y reduce la resistencia arterial subendometrial.",
    clinicalImpact: "Respaldo científico para pacientes con endometrio delgado o fallos de implantación previos que buscan optimizar el terreno endometrial antes de una transferencia o concepción natural.",
    category: "Receptividad Endometrial"
  },
  {
    id: "manheimer-2008",
    authors: "Manheimer E, Zhang G, Udoff L, Haramati A, Langenberg P, Berman BM, Bouter LM.",
    year: 2008,
    title: "Effects of acupuncture on rates of pregnancy and live birth among women undergoing in vitro fertilisation: systematic review and meta-analysis",
    journal: "British Medical Journal (The BMJ)",
    volume: "Vol. 336, No. 7643, págs. 545-549",
    doiOrPmid: "PMID: 18258932 · DOI: 10.1136/bmj.39471.430451.BE",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/18258932/",
    keyFinding: "Metaanálisis publicado en The BMJ que evaluó ensayos clínicos y reportó un incremento significativo en las tasas de embarazo clínico (OR 1.65), embarazo en curso y nacidos vivos en mujeres que complementaron su tratamiento con acupuntura.",
    clinicalImpact: "Hito en la literatura científica internacional que aportó validación estadística y reconocimiento a la acupuntura en el ámbito de la fertilidad.",
    category: "Metaanálisis"
  },
  {
    id: "zheng-2012",
    authors: "Zheng CH, Huang GY, Zhang MM, Wang W.",
    year: 2012,
    title: "Effects of acupuncture on pregnancy rates in women undergoing in vitro fertilization: a systematic review and meta-analysis",
    journal: "Fertility and Sterility (ASRM)",
    volume: "Vol. 97, No. 3, págs. 599-606",
    doiOrPmid: "PMID: 22243605 · DOI: 10.1016/j.fertnstert.2011.12.007",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/22243605/",
    keyFinding: "Revisión sistemática y metaanálisis en la revista oficial de la Sociedad Americana de Medicina Reproductiva (ASRM) que concluyó que la acupuntura mejora significativamente las tasas de embarazo clínico en pacientes sometidas a FIV.",
    clinicalImpact: "Aceptación de la acupuntura dentro de los principales foros ginecológicos y reproductivos de Estados Unidos y Europa como terapia coadyuvante válida.",
    category: "Tasas de Embarazo"
  },
  {
    id: "balk-2010",
    authors: "Balk J, Catov J, Horn B, Gecsi K, Wakim A.",
    year: 2010,
    title: "The relationship between perceived stress, acupuncture, and pregnancy rates among IVF patients: a pilot study",
    journal: "Complementary Therapies in Clinical Practice",
    volume: "Vol. 16, No. 3, págs. 154-157",
    doiOrPmid: "PMID: 20621276 · DOI: 10.1016/j.ctcp.2009.11.004",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/20621276/",
    keyFinding: "Evaluación clínica que vinculó la reducción significativa del estrés percibido y la ansiedad mediante acupuntura con un incremento en las tasas de embarazo en pacientes de fertilidad.",
    clinicalImpact: "Confirma el rol neuroendocrino de la acupuntura: mitigar el exceso de cortisol y catecolaminas para evitar la vasoconstricción de los vasos sanguíneos reproductivos.",
    category: "Estrés y Fertilidad"
  }
];

export const FertilidadSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("fiv");
  const [selectedCitationCategory, setSelectedCitationCategory] = useState<string>("all");

  const tabs: TabData[] = [
    {
      id: "fiv",
      label: "Preparación Pre-FIV / IA",
      badge: "Acompañamiento en Ciclos Previos",
      title: "Optimización en Ciclos Previos a Reproducción Asistida",
      description: "Acompañamiento clínico integral durante los 2 a 3 meses previos a un ciclo de FIV, ICSI, Ovodonación o Inseminación Artificial. Trabajamos con antelación para optimizar la calidad folicular, nutrir el grosor endometrial y regular el sistema nervioso.",
      highlights: [
        "Acondicionamiento pélvico durante las 8 a 12 semanas previas a la estimulación",
        "Mejora de la microcirculación y oxigenación folicular ovárica",
        "Optimización del grosor y patrón trilaminar endometrial para la futura transferencia",
        "Tratamiento coordinado con tu clínica y ginecólogo especialista en fertilidad"
      ],
      scientificNote: "Evidencia de Qian et al., Stener-Victorin y Zheng et al. sobre acupuntura y fertilidad en ciclos previos para maximizar el éxito reproductivo.",
      points: [
        {
          title: "Acondicionamiento Vascular",
          desc: "Disminuye la resistencia vascular periférica en arterias uterinas y ováricas mes con mes."
        },
        {
          title: "Ventana de Receptividad",
          desc: "Promueve un entorno endometrial nutrido y libre de inflamación para cuando llegue el momento decisivo."
        }
      ]
    },
    {
      id: "natural",
      label: "Fertilidad Natural",
      badge: "Armonización Integral",
      title: "Potenciación de la Fertilidad Natural",
      description: "Tratamiento personalizado enfocado en restaurar los ritmos biológicos de ovulación, la calidad ovocitaria y la salud integral del aparato reproductor, creando las mejores condiciones para concebir de forma natural.",
      highlights: [
        "Regulación de ciclos irregulares, anovulatorios o fase lútea corta",
        "Manejo coadyuvante de Síndrome de Ovario Poliquístico (SOP) y endometriosis",
        "Estimulación de la calidad del moco cervical fértil y oxigenación folicular",
        "Soporte tanto femenino como masculino (concentración y motilidad espermática)"
      ],
      scientificNote: "Estimulación de puntos neurovasculares que modulan el eje hipotálamo-hipófisis-ovario (HHO).",
      points: [
        {
          title: "Calidad Ovocitaria",
          desc: "La microcirculación ovárica optimizada durante los 90 días de maduración folicular nutre el ovocito."
        },
        {
          title: "Balance Hormonal",
          desc: "Promueve la producción equilibrada de estradiol y progesterona en la fase lútea crítica."
        }
      ]
    },
    {
      id: "estres",
      label: "Reducción de Estrés Reproductivo",
      badge: "Regulación Neurovegetativa",
      title: "Calma y Regulación del Sistema Nervioso",
      description: "El estrés crónico y los niveles elevados de cortisol constriñen los vasos sanguíneos del sistema reproductivo y alteran la señalización ovárica. La acupuntura induce una relajación neuromuscular profunda y restaura el equilibrio simpático-parasimpático.",
      highlights: [
        "Descenso comprobado de cortisol y adrenalina plasmáticos",
        "Alivio de la ansiedad anticipatoria durante la 'betaespera'",
        "Mejora sustancial en la calidad del sueño y descanso reparador",
        "Espacio de contención cálido, humano y libre de presiones"
      ],
      scientificNote: "Induce liberación de endorfinas y serotonina que amortiguan la respuesta de estrés sistémico.",
      points: [
        {
          title: "Paz en la Betaespera",
          desc: "Alivia el impacto emocional de las semanas de espera tras la inseminación o transferencia."
        },
        {
          title: "Vasodilatación Pélvica",
          desc: "Al salir del estado de alerta (lucha o huida), el flujo vascular se redirige a órganos reproductivos."
        }
      ]
    },
    {
      id: "ciclo",
      label: "Salud Hormonal Femenina",
      badge: "Equilibrio Fisiológico",
      title: "Bienestar Femenino y Regulación del Ciclo",
      description: "Más allá del deseo de concebir, acompañamos a la mujer en todas sus etapas reproductivas para resolver dolores menstruales incapacitantes, desajustes hormonales, inflamación pélvica crónica y transición perimenopáusica.",
      highlights: [
        "Alivio del dolor menstrual severo (dismenorrea) sin depender exclusivamente de analgésicos",
        "Disminución de sintomatología inflamatoria en endometriosis y adenomiosis",
        "Modulación del Síndrome Premenstrual (SPM) y estabilidad del estado de ánimo",
        "Reconexión con el propio cuerpo mediante la visión milenaria de la Medicina Tradicional China"
      ],
      scientificNote: "Modulación de prostaglandinas proinflamatorias y normalización de la tensión miometrial.",
      points: [
        {
          title: "Alivio Antiinflamatorio",
          desc: "Efecto neuromodulador que reduce la hipersensibilidad al dolor pélvico menstrual."
        },
        {
          title: "Vitalidad y Sangre (Xue)",
          desc: "Fortalece la nutrición orgánica general y el descanso profundo mes con mes."
        }
      ]
    }
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="fertilidad-section" className="py-24 bg-gradient-to-b from-primary-50/60 via-white to-primary-50/30 border-y border-primary-100/80">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-primary-700 tracking-widest uppercase">
            <Flower2 size={16} className="text-accent-500 animate-spin-slow" />
            <span>Medicina Integrativa y Salud Femenina</span>
            <span aria-hidden="true">·</span>
            <span>Benito Juárez, CDMX</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-950 tracking-tight italic">
            Acupuntura para Fertilidad y Salud Femenina
          </h2>

          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full" />

          <p className="text-lg md:text-xl text-brand-text font-light leading-relaxed">
            Acompañamiento clínico integral con protocolos respaldados por evidencia científica internacional. Potenciamos la fertilidad natural, aumentamos las tasas de éxito en tratamientos de FIV y devolvemos la armonía hormonal a tu cuerpo.
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
                  <Flower2 size={15} className={isActive ? "text-accent-500" : "text-primary-400"} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Showcase */}
        <div className="bg-white rounded-[2.5rem] border border-primary-150 p-8 md:p-14 shadow-xl mb-16 relative overflow-hidden">
          {/* Subtle decorative background watermarks */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-70 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-50 rounded-full blur-3xl -ml-28 -mb-28 opacity-40 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Descriptive info & highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-semibold text-accent-600 uppercase tracking-widest">
                <span>{currentTab.badge}</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-950 italic tracking-tight">
                {currentTab.title}
              </h3>

              <p className="text-brand-text text-lg leading-relaxed font-light">
                {currentTab.description}
              </p>

              {/* Highlights List with Zen Oriental / Lotus Bullets */}
              <div className="space-y-3.5 pt-2">
                {currentTab.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary-100 text-primary-700 flex-shrink-0 mt-0.5">
                      <Flower2 size={13} className="text-accent-600" />
                    </div>
                    <span className="text-base text-brand-text font-normal leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Scientific Note Box */}
              <div className="p-4 rounded-2xl bg-primary-50/80 border border-primary-150 flex items-start gap-3 mt-4">
                <ShieldCheck size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-primary-800 font-light leading-relaxed">
                  <strong className="font-semibold text-primary-900">Evidencia clínica:</strong> {currentTab.scientificNote}
                </p>
              </div>
            </div>

            {/* Right Column: Visual Feature Cards & Action */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-primary-50/90 rounded-3xl p-6 border border-primary-150 space-y-5">
                <h4 className="text-lg font-serif font-bold text-primary-950 italic flex items-center gap-2">
                  <Activity size={18} className="text-accent-500" />
                  Beneficios Fisiológicos Clave
                </h4>

                <div className="space-y-4">
                  {currentTab.points.map((pt, i) => (
                    <div key={i} className="bg-white p-4 rounded-2xl border border-primary-100 shadow-xs">
                      <div className="font-semibold text-primary-900 text-sm mb-1 flex items-center gap-2">
                        <CircleDot size={14} className="text-accent-500" />
                        {pt.title}
                      </div>
                      <p className="text-xs text-brand-text font-light leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-primary-200/60 flex items-center justify-between text-xs text-primary-700">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock size={14} /> Sesiones de 50-60 min
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 size={14} className="text-accent-600" /> Agujas 100% estériles
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <WhatsAppButton
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3.5 px-6 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
                  message={`Hola, me gustaría agendar una valoración sobre fertilidad y bienestar femenino (${currentTab.label})`}
                >
                  <MessageCircle size={18} />
                  Agendar Valoración
                </WhatsAppButton>

                <Link
                  href="/fertilidad"
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
        {/* ACOMPAÑAMIENTO EN CICLOS PREVIOS: PREPARACIÓN PRECONCEPCIONAL Y PRE-FIV  */}
        {/* ========================================================================= */}
        <div id="ciclos-previos" className="mb-20 scroll-mt-28">
          {/* Module Header */}
          <div className="bg-gradient-to-br from-primary-900 via-primary-950 to-primary-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden mb-8 border border-primary-800">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-accent-300 uppercase tracking-widest mb-3">
                <span>Medicina Reproductiva Integrativa</span>
                <span aria-hidden="true">·</span>
                <span>Preparación en Ciclos Previos</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif font-bold italic tracking-tight mb-3 text-white">
                El Valor del Trabajo en Ciclos Previos
              </h3>

              <p className="text-primary-150 text-base md:text-lg font-light leading-relaxed mb-6">
                El desarrollo y maduración folicular humana toma aproximadamente 90 días (foliculogénesis). Nuestro enfoque clínico se centra en acompañarte durante <strong>2 a 3 ciclos previos</strong> a la búsqueda natural o al inicio de un tratamiento de reproducción asistida (FIV / IA), preparando el terreno biológico con tiempo y cuidado.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-primary-800/80 text-xs md:text-sm text-primary-200">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-accent-400" />
                  <span><strong>8 a 12 Semanas</strong> de acondicionamiento continuo</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp size={16} className="text-accent-400" />
                  <span><strong>Mayor microcirculación</strong> ovárica y endometrial</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-accent-400" />
                  <span><strong>Regulación hormonal</strong> y reducción del cortisol</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2-Column Overview of Preparatory Cycle Focus */}
          <div className="bg-white rounded-[2.5rem] border border-primary-150 p-6 md:p-10 shadow-xl relative">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold text-accent-600 uppercase tracking-wider block mb-1">
                Enfoque Terapéutico en Ciclos Previos
              </span>
              <h4 className="text-2xl md:text-3xl font-serif font-bold text-primary-950 italic">
                ¿Cómo preparamos tu cuerpo mes con mes?
              </h4>
              <p className="text-brand-text text-sm font-light mt-2">
                Adaptamos las sesiones a las fases biológicas de tus ciclos previos para crear las condiciones fisiológicas óptimas:
              </p>
            </div>

            {/* 2 Clean Cards Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
              {/* Card 1: Fase Folicular y Reclutamiento */}
              <div className="p-6 md:p-8 rounded-3xl bg-primary-50/70 border border-primary-150 flex flex-col justify-between hover:border-primary-300 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-accent-100 text-accent-800 text-xs font-semibold tracking-wide uppercase">
                      Pilar 1
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-primary-600 font-medium">
                      <Activity size={14} />
                      <span>Fase Folicular y Ovárica</span>
                    </div>
                  </div>

                  <h5 className="text-xl md:text-2xl font-serif font-bold text-primary-950 italic mb-2">
                    Oxigenación y Calidad Folicular
                  </h5>

                  <p className="text-brand-text text-sm font-light leading-relaxed mb-6">
                    Estimulación orientada a mejorar la perfusión sanguínea hacia los ovarios durante los meses de maduración ovocitaria previa a cualquier procedimiento o intento de concepción.
                  </p>

                  <div className="space-y-3 border-t border-primary-200/60 pt-4">
                    <div className="flex items-start gap-2.5 text-xs md:text-sm text-brand-text">
                      <CheckCircle2 size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Aporte de nutrientes:</strong> Mayor flujo vascular hacia los folículos en desarrollo.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs md:text-sm text-brand-text">
                      <CheckCircle2 size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Eje hormonal (HHO):</strong> Favorece respuestas foliculares más equilibradas y predecibles.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs md:text-sm text-brand-text">
                      <CheckCircle2 size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Menor estrés oxidativo:</strong> Mitiga los efectos del cansancio crónico sobre el tejido ovárico.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Receptividad Endometrial y Fase Lútea */}
              <div className="p-6 md:p-8 rounded-3xl bg-primary-50/70 border border-primary-150 flex flex-col justify-between hover:border-primary-300 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary-200 text-primary-800 text-xs font-semibold tracking-wide uppercase">
                      Pilar 2
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-primary-600 font-medium">
                      <Heart size={14} />
                      <span>Fase Endometrial y Lútea</span>
                    </div>
                  </div>

                  <h5 className="text-xl md:text-2xl font-serif font-bold text-primary-950 italic mb-2">
                    Acondicionamiento Endometrial
                  </h5>

                  <p className="text-brand-text text-sm font-light leading-relaxed mb-6">
                    Acondicionamiento del lecho uterino ciclo a ciclo para promover un grosor adecuado, estructura trilaminar y vasodilatación de las arterias espirales.
                  </p>

                  <div className="space-y-3 border-t border-primary-200/60 pt-4">
                    <div className="flex items-start gap-2.5 text-xs md:text-sm text-brand-text">
                      <CheckCircle2 size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Patrón trilaminar:</strong> Estimula el desarrollo y la irrigación del tejido endometrial.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs md:text-sm text-brand-text">
                      <CheckCircle2 size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Calma muscular:</strong> Modula la tonicidad pélvica y reduce espasmos uterinos dolorosos o inflamatorios.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs md:text-sm text-brand-text">
                      <CheckCircle2 size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Soporte en fase lútea:</strong> Apoya el equilibrio de progesterona y el sosiego del sistema nervioso.</span>
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
                  Ventana de 2 a 3 Meses
                </span>
                <p className="text-brand-text font-light leading-relaxed">
                  Recomendamos iniciar el acompañamiento de 8 a 12 semanas antes de buscar embarazo o de comenzar la estimulación ovárica.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-primary-50/50 border border-primary-100">
                <span className="font-bold text-primary-950 block mb-1 flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-primary-700" />
                  Casos de Aplicación
                </span>
                <p className="text-brand-text font-light leading-relaxed">
                  Preparación para FIV/IA, búsqueda de fertilidad natural, ciclos irregulares o anovulatorios, SOP y endometriosis.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-primary-50/50 border border-primary-100">
                <span className="font-bold text-primary-950 block mb-1 flex items-center gap-1.5">
                  <Clock size={16} className="text-accent-500" />
                  Frecuencia en Consulta
                </span>
                <p className="text-brand-text font-light leading-relaxed">
                  Sesiones regulares (habitualmente 1 semanal) en mi consultorio en Benito Juárez, CDMX, sin prisas y en un ambiente sereno.
                </p>
              </div>
            </div>

            {/* Direct Ciclos Previos CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-primary-950 text-white">
              <div className="text-left">
                <span className="font-serif font-bold text-base block text-white italic">
                  ¿Planeas un embarazo natural o un tratamiento de fertilidad en los próximos meses?
                </span>
                <span className="text-xs text-primary-200 font-light">
                  Inicia tu preparación con tiempo para acondicionar tu cuerpo y tu salud reproductiva.
                </span>
              </div>
              <WhatsAppButton
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-full font-bold text-xs transition-all shadow-md flex items-center gap-2 active:scale-95 flex-shrink-0"
                message="Hola, me gustaría agendar una valoración para iniciar la preparación de acupuntura en ciclos previos a mi búsqueda de embarazo / FIV"
              >
                <MessageCircle size={16} />
                Iniciar Preparación Previa
              </WhatsAppButton>
            </div>
          </div>
        </div>

        {/* 4-Step Clinical Protocol Roadmap */}
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
                title: "Diagnóstico Clínico y MTC",
                desc: "Evaluamos antecedentes de salud, análisis hormonales, ecografías y el estado del Qi y Xue según la Acupuntura Tradicional."
              },
              {
                step: "02",
                title: "Optimización Endometrial",
                desc: "Acupuntura enfocada en mejorar la irrigación sanguínea pélvica, nutriendo el lecho vascular ovárico y uterino."
              },
              {
                step: "03",
                title: "Soporte Periconcepcional",
                desc: "Protocolos adaptados al momento exacto de la ovulación o a las horas clave pre y post transferencia embrionaria en FIV."
              },
              {
                step: "04",
                title: "Contención y Primer Trimestre",
                desc: "Continuidad terapéutica para modular la ansiedad materna, reducir náuseas y apoyar el arraigo gestacional seguro."
              }
            ].map((st) => (
              <div 
                key={st.step} 
                className="bg-white p-6 rounded-3xl border border-primary-100 shadow-xs hover:shadow-md transition-shadow relative group"
              >
                <div className="text-3xl font-serif font-bold text-accent-500/50 mb-3 group-hover:text-accent-600 transition-colors">
                  {st.step}
                </div>
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

        {/* Scientific Evidence & Citations Section */}
        <div id="citas-cientificas" className="mb-16 scroll-mt-28">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-primary-700 tracking-widest uppercase">
              <BookOpen size={16} className="text-accent-500" />
              <span>Acupuntura y Fertilidad Basada en Evidencia</span>
              <span aria-hidden="true">·</span>
              <span>Literatura Científica Indexada en PubMed</span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-950 tracking-tight italic">
              Artículos Científicos de Acupuntura y Fertilidad
            </h3>

            <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full" />

            <p className="text-base md:text-lg text-brand-text font-light leading-relaxed">
              Ensayos clínicos controlados, revisiones sistemáticas y metaanálisis publicados en revistas científicas de alto impacto dedicados exclusivamente a la investigación de la acupuntura en fertilidad femenina, salud ovárica y reproducción asistida.
            </p>
          </div>

          {/* Quick Scientific Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white p-5 rounded-2xl border border-primary-100 shadow-xs text-center">
              <span className="text-2xl md:text-3xl font-serif font-black text-accent-600 block mb-1">
                RR 1.32
              </span>
              <span className="text-xs font-semibold text-primary-900 block mb-0.5">
                Ciclos Previos y FIV
              </span>
              <span className="text-[11px] text-brand-text/80 font-light">
                Qian et al. · Arch Gynecol Obstet
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-primary-100 shadow-xs text-center">
              <span className="text-2xl md:text-3xl font-serif font-black text-primary-700 block mb-1">
                Doppler Uterino
              </span>
              <span className="text-xs font-semibold text-primary-900 block mb-0.5">
                Flujo Vascular en Infertilidad
              </span>
              <span className="text-[11px] text-brand-text/80 font-light">
                Stener-Victorin · Hum Reprod
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-primary-100 shadow-xs text-center">
              <span className="text-2xl md:text-3xl font-serif font-black text-accent-600 block mb-1">
                OR 1.65
              </span>
              <span className="text-xs font-semibold text-primary-900 block mb-0.5">
                Metaanálisis Global en FIV
              </span>
              <span className="text-[11px] text-brand-text/80 font-light">
                Manheimer et al. · The BMJ
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-primary-100 shadow-xs text-center">
              <span className="text-2xl md:text-3xl font-serif font-black text-primary-700 block mb-1">
                ASRM
              </span>
              <span className="text-xs font-semibold text-primary-900 block mb-0.5">
                Embarazo Clínico en FIV
              </span>
              <span className="text-[11px] text-brand-text/80 font-light">
                Zheng et al. · Fert & Steril
              </span>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex flex-wrap items-center justify-center p-1 bg-primary-100/60 rounded-xl border border-primary-200/60 gap-1 text-xs font-medium">
              {[
                { id: "all", label: "Todos los Artículos (6)" },
                { id: "Ciclos Previos y FIV", label: "Ciclos Previos y FIV" },
                { id: "Flujo Uterino", label: "Flujo Uterino e Infertilidad" },
                { id: "Receptividad Endometrial", label: "Receptividad Endometrial" },
                { id: "Metaanálisis", label: "Metaanálisis (The BMJ)" },
                { id: "Tasas de Embarazo", label: "Tasas de Embarazo (ASRM)" },
                { id: "Estrés y Fertilidad", label: "Estrés y Fertilidad" }
              ].map((category) => {
                const isSelected = selectedCitationCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCitationCategory(category.id)}
                    className={`px-3.5 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-white text-primary-950 font-bold shadow-xs border border-primary-200/80"
                        : "text-primary-700 hover:text-primary-950 hover:bg-white/40"
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Citations Grid */}
          <div className="space-y-6">
            {scientificCitations
              .filter(
                (c) =>
                  selectedCitationCategory === "all" ||
                  c.category === selectedCitationCategory
              )
              .map((citation, index) => (
                <article
                  key={citation.id}
                  className="bg-white rounded-3xl p-6 md:p-8 border border-primary-150 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div className="space-y-1.5 flex-grow">
                      {/* Clean Unboxed Metadata Separators */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-primary-800 font-medium">
                        <span className="italic font-serif font-bold text-accent-600">
                          {citation.journal}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{citation.volume}</span>
                        <span aria-hidden="true">·</span>
                        <span>Año {citation.year}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-brand-text/70">{citation.doiOrPmid}</span>
                      </div>

                      <h4 className="text-xl md:text-2xl font-serif font-bold text-primary-950 italic leading-snug">
                        {citation.title}
                      </h4>

                      <p className="text-xs text-brand-text font-light">
                        <strong>Autores:</strong> {citation.authors}
                      </p>
                    </div>

                    {/* Official PubMed Link Button */}
                    <a
                      href={citation.pubmedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary-50 hover:bg-primary-100 text-primary-800 hover:text-primary-950 font-semibold text-xs border border-primary-200 transition-colors flex-shrink-0 self-start active:scale-95"
                    >
                      <FileText size={14} className="text-accent-500" />
                      <span>Ver en PubMed</span>
                      <ExternalLink size={12} className="opacity-70" />
                    </a>
                  </div>

                  {/* Findings & Clinical Impact Box */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-primary-100">
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
                </article>
              ))}
          </div>

          {/* Academic Transparency Note */}
          <div className="mt-8 p-4 rounded-2xl bg-primary-50/80 border border-primary-200/60 text-center">
            <p className="text-xs text-brand-text leading-relaxed font-light">
              <strong className="font-semibold text-primary-900">Compromiso ético e investigativo:</strong> En mi consulta de Acupuntura en Benito Juárez, CDMX, diseño cada protocolo alineada con los consensos internacionales de salud reproductiva para trabajar de manera armónica y complementaria con tus especialistas de confianza.
            </p>
          </div>
        </div>

        {/* Trust & Transparency Banner */}
        <div className="bg-primary-900 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-accent-300 text-xs font-semibold tracking-wider uppercase">
              <Baby size={16} />
              <span>Acompañamiento Ético y Respetuoso</span>
            </div>
            <h4 className="text-2xl md:text-3xl font-serif italic font-bold">
              ¿Deseas saber si la acupuntura es adecuada para tu caso?
            </h4>
            <p className="text-primary-100 font-light text-sm max-w-2xl leading-relaxed">
              Cada historia y cuerpo son únicos. Te brindaré una orientación honesta, cálida y personalizada sobre cómo la acupuntura clínica puede sumarse a tu plan reproductivo.
            </p>
          </div>

          <div className="flex-shrink-0">
            <WhatsAppButton
              className="bg-white text-primary-950 hover:bg-primary-50 py-4 px-8 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 active:scale-95"
              message="Hola, quisiera consultar sobre el tratamiento de acupuntura para fertilidad y bienestar femenino"
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
