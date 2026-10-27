"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Activity, 
  ArrowRight,
  ShieldCheck,
  Eye,
  Smile,
  Zap,
  Play,
  Pause
} from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

interface AcupunctureNode {
  name: string;
  locationSpanish: string;
  x: number; // percentage
  y: number; // percentage
}

interface CaseStudy {
  id: string;
  region: string;
  nerveBranch: string;
  icon: typeof Eye;
  title: string;
  sessions: string;
  image: string;
  nodes: AcupunctureNode[];
  initialScale: string;
  finalScale: string;
  emotionalTransformation: string;
  before: {
    title: string;
    description: string;
    symptoms: string[];
    symmetryScore: number;
  };
  after: {
    title: string;
    description: string;
    improvements: string[];
    symmetryScore: number;
  };
  pointsApplied: string[];
  clinicalNote: string;
}

const cases: CaseStudy[] = [
  {
    id: "ojo-parpado",
    region: "Párpado y Contorno Ocular",
    nerveBranch: "Rama Temporal del Nervio Facial",
    icon: Eye,
    title: "Reactivación del Músculo Orbicular del Ojo",
    sessions: "12 Sesiones",
    image: "/images/semireal-eye-symmetry.jpg",
    emotionalTransformation: "Del ardor constante y parches molestos, a la paz de dormir con tus ojos completamente cerrados.",
    nodes: [
      { name: "Punto Sien (Taiyang)", locationSpanish: "Depresión temporal", x: 74, y: 38 },
      { name: "Punto Ceja Exterior (Sizhukong)", locationSpanish: "Cola de la ceja", x: 65, y: 32 },
      { name: "Punto Centro de Ceja (Yuyao)", locationSpanish: "Sobre la pupila", x: 53, y: 28 },
    ],
    initialScale: "Disfunción Ocular Marcada (Signo de Bell positivo)",
    finalScale: "Oclusión Palpebral Completa al 100%",
    before: {
      title: "Fase Inicial (Día 3)",
      description: "Incapacidad para cerrar el párpado (separación de 4 mm), irritación de la córnea y lagrimeo constante por pérdida del tono muscular.",
      symptoms: [
        "Cierre ocular incompleto al dormir y parpadear",
        "Resequedad corneal y riesgo de inflamación",
        "Pérdida del reflejo de parpadeo natural"
      ],
      symmetryScore: 35
    },
    after: {
      title: "Tras el Tratamiento (Semana 6)",
      description: "Cierre palpebral total sin esfuerzo, recuperación del parpadeo automático y protección natural de la superficie del ojo.",
      improvements: [
        "Cierre palpebral al 100% en reposo y sueño",
        "Parpadeo espontáneo y simétrico recuperado",
        "Cero irritación o necesidad de parches"
      ],
      symmetryScore: 96
    },
    pointsApplied: [
      "Punto Sien (Taiyang)",
      "Punto Cola de Ceja (Sizhukong)",
      "Punto Centro de Ceja (Yuyao)",
      "Punto Lagrimal (Zanzhu)"
    ],
    clinicalNote: "Electroacupuntura con microcorriente continua suave para despertar las fibras del nervio temporal sin provocar espasmos involuntarios."
  },
  {
    id: "sonrisa-labio",
    region: "Comisura Labial y Mejilla",
    nerveBranch: "Ramas Cigomática y Bucal",
    icon: Smile,
    title: "Reactivación de Músculos de la Sonrisa y Labios",
    sessions: "14 Sesiones",
    image: "/images/semireal-smile-contour.jpg",
    emotionalTransformation: "De la inseguridad al hablar y comer, a la alegría de volver a sonreír con total soltura y confianza.",
    nodes: [
      { name: "Punto Comisura (Dicang)", locationSpanish: "Comisura de los labios", x: 60, y: 64 },
      { name: "Punto Mandíbula (Jiache)", locationSpanish: "Ángulo del masetero", x: 76, y: 72 },
      { name: "Punto Pómulo (Sibai)", locationSpanish: "Debajo del ojo", x: 57, y: 48 },
    ],
    initialScale: "Desviación Labial Visible y Pérdida de Tono",
    finalScale: "Sonrisa Simétrica y Sellado Labial Hermético",
    before: {
      title: "Fase Inicial (Día 5)",
      description: "Desviación de la boca hacia el lado sano, escape involuntario de líquidos al beber y dificultad para articular ciertas palabras.",
      symptoms: [
        "Caída notoria de la comisura de la boca",
        "Escape de agua y dificultad para deglutir",
        "Imposibilidad de silbar o mostrar los dientes"
      ],
      symmetryScore: 40
    },
    after: {
      title: "Tras el Tratamiento (Semana 7)",
      description: "Elevación simétrica de ambos lados de la boca, sellado completo al comer y beber, y sonrisa natural sin desviación.",
      improvements: [
        "Sonrisa armónica y equilibrada bilateralmente",
        "Retención total de líquidos al beber",
        "Pronunciación clara y fluida sin esfuerzo"
      ],
      symmetryScore: 95
    },
    pointsApplied: [
      "Punto Comisura (Dicang)",
      "Punto Mandíbula (Jiache)",
      "Punto Surco Nasolabial (Renzhong)",
      "Punto Mentón (Chengjiang)"
    ],
    clinicalNote: "Estimulación combinada entre comisura y mandíbula para reactivar el músculo buccinador y los elevadores del labio."
  },
  {
    id: "frente-cejas",
    region: "Frente y Líneas de Expresión",
    nerveBranch: "Rama Frontal del Nervio",
    icon: Activity,
    title: "Movilidad del Músculo Frontal y Elevación de Ceja",
    sessions: "10 Sesiones",
    image: "/images/semireal-brow-balance.jpg",
    emotionalTransformation: "De sentir tu expresión paralizada, a recuperar la viveza de tu mirada y la expresividad de tu frente.",
    nodes: [
      { name: "Punto Frente (Yangbai)", locationSpanish: "Sobre el arco superciliar", x: 55, y: 22 },
      { name: "Punto Nacimiento del Cabello", locationSpanish: "Línea frontal superior", x: 59, y: 15 },
      { name: "Punto Entrecejo (Yingtang)", locationSpanish: "Centro entre las cejas", x: 47, y: 30 },
    ],
    initialScale: "Borramiento Total de Pliegues Frontales",
    finalScale: "Elevación Activa y Pliegues Simétricos",
    before: {
      title: "Fase Inicial (Día 7)",
      description: "Pérdida de fuerza en el músculo de la frente, ceja caída y aplanamiento de las líneas de expresión en el lado afectado.",
      symptoms: [
        "Imposibilidad de levantar la ceja afectada",
        "Borramiento total de arrugas en la frente",
        "Sensación de pesadez y adormecimiento"
      ],
      symmetryScore: 45
    },
    after: {
      title: "Tras el Tratamiento (Semana 5)",
      description: "Reactivación de la contracción muscular voluntaria, elevación simétrica de ambas cejas y tono firme en la piel.",
      improvements: [
        "Elevación voluntaria y simétrica de la ceja",
        "Reaparición de los pliegues frontales normales",
        "Desaparición del adormecimiento y pesadez"
      ],
      symmetryScore: 92
    },
    pointsApplied: [
      "Punto Frente (Yangbai)",
      "Punto Cuero Cabelludo (Toulinqi)",
      "Punto Mano Regulador (Hegu)",
      "Punto Nuca (Fengchi)"
    ],
    clinicalNote: "Uso del punto maestro en la mano junto con puntos locales en la frente para desbloquear el canal y reactivar la movilidad."
  },
  {
    id: "secuelas-sincinesias",
    region: "Tronco Nervioso y Rehabilitación",
    nerveBranch: "Tronco Principal del Nervio Facial",
    icon: ShieldCheck,
    title: "Descompresión del Nervio y Prevención de Secuelas",
    sessions: "18 Sesiones",
    image: "/images/semireal-neural-harmony.jpg",
    emotionalTransformation: "De la frustración por movimientos involuntarios o rigidez, a la fluidez motora y la armonía facial.",
    nodes: [
      { name: "Punto Salida del Nervio (Yifeng)", locationSpanish: "Detrás del lóbulo de la oreja", x: 80, y: 48 },
      { name: "Punto Mandibular Superior (Xiaguan)", locationSpanish: "Frente a la oreja", x: 68, y: 52 },
      { name: "Punto Nuca Mastoidea (Fengchi)", locationSpanish: "Base del cráneo", x: 86, y: 58 },
    ],
    initialScale: "Tensión Muscular y Movimientos Involuntarios",
    finalScale: "Movilidad Independiente y Relajación Fascial",
    before: {
      title: "Fase con Secuelas",
      description: "Presencia de movimientos asociados no deseados (cerrar el ojo al mover la boca), tensión y rigidez en la mandíbula y cuello.",
      symptoms: [
        "Cierre involuntario de ojo al masticar o sonreír",
        "Rigidez y dolor detrás de la oreja y cuello",
        "Tensión muscular asimétrica prolongada"
      ],
      symmetryScore: 52
    },
    after: {
      title: "Tras el Tratamiento",
      description: "Desinflamación del canal óseo del nervio, relajación de contracturas y recuperación de movimientos faciales independientes.",
      improvements: [
        "El ojo y la boca se mueven de forma independiente",
        "Alivio completo de la tensión en cuello y mandíbula",
        "Movilidad facial fluida sin dolor ni rigidez"
      ],
      symmetryScore: 90
    },
    pointsApplied: [
      "Punto Salida del Nervio (Yifeng)",
      "Punto Delante de Oreja (Xiaguan)",
      "Punto Pie Desintoxicante (Taichong)",
      "Punto Entrecejo (Yingtang)"
    ],
    clinicalNote: "Frecuencia eléctrica dispersa y suave para desinflamar la salida del nervio en la base del cráneo y calmar la tensión muscular."
  }
];

export const FacialSymmetryComparison: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"comparison" | "after" | "before">("comparison");
  const [isAnimationActive, setIsAnimationActive] = useState(true);

  const currentCase = cases[activeIndex];
  const IconComponent = currentCase.icon;

  const nextCase = () => setActiveIndex((prev) => (prev + 1) % cases.length);
  const prevCase = () => setActiveIndex((prev) => (prev - 1 + cases.length) % cases.length);

  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-[#faf8f5] via-[#faf8f5] to-[#f5efe6] border-b border-[#e8e1d5] relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        
        {/* Encabezado compacto en español */}
        <div className="text-center max-w-2xl mx-auto mb-7">
          <div className="text-xs font-semibold text-[#3e685f] tracking-widest uppercase mb-2">
            Casos Clínicos · Simetría Facial Lograda
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#142329] tracking-tight leading-snug mb-2">
            Evolución de Simetría y Recuperación Clínica
          </h2>
          <div className="w-16 h-1 bg-[#b86d36] mx-auto rounded-full mb-2.5" />
          
          <p className="text-xs sm:text-sm text-[#4a5e66] font-light leading-relaxed">
            Visualiza el avance de la simetría facial y la reactivación neuromuscular en cada zona afectada mediante acupuntura clínica y electroestimulación suave.
          </p>
        </div>

        {/* Pestañas de Navegación por Área */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-2.5 mb-5 no-scrollbar">
          {cases.map((item, idx) => {
            const TabIcon = item.icon;
            const isSelected = idx === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer border ${
                  isSelected
                    ? "bg-[#18313a] text-white border-[#18313a] shadow-sm shadow-[#18313a]/15"
                    : "bg-white text-[#4a5e66] border-[#e8dfcf] hover:border-[#18313a] hover:bg-[#faf8f5]"
                }`}
              >
                <TabIcon size={14} className={isSelected ? "text-[#f1d5c2]" : "text-[#b86d36]"} />
                <span>{item.region}</span>
              </button>
            );
          })}
        </div>

        {/* Tarjeta Principal Compacta */}
        <div className="bg-[#fefdfb] rounded-3xl border border-[#e8dfcf] shadow-md shadow-stone-200/50 p-4 sm:p-6 lg:p-7 mb-5">
          
          {/* Barra Superior con Controles */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-[#e8e1d5] mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#18313a] to-[#284937] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <IconComponent size={17} className="text-[#f1d5c2]" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#b86d36] block">
                  {currentCase.nerveBranch}
                </span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#142329]">
                  {currentCase.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              {/* Botón para Pausar/Activar Animación */}
              <button
                onClick={() => setIsAnimationActive(!isAnimationActive)}
                className="flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white border border-[#e5dbcb] text-[#18313a] hover:bg-[#faf8f5] transition-colors cursor-pointer"
                title={isAnimationActive ? "Pausar pulso animado" : "Activar pulso animado"}
              >
                {isAnimationActive ? <Pause size={12} className="text-[#b86d36]" /> : <Play size={12} className="text-[#18313a]" />}
                <span className="hidden sm:inline">{isAnimationActive ? "Animación Activa" : "Pausada"}</span>
              </button>

              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#faf8f5] border border-[#e5dbcb] text-[#18313a]">
                {currentCase.sessions}
              </span>
              
              <div className="flex items-center gap-1">
                <button
                  onClick={prevCase}
                  aria-label="Anterior"
                  className="w-7 h-7 rounded-full bg-white border border-[#e5dbcb] flex items-center justify-center text-[#18313a] hover:bg-[#18313a] hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft size={15} />
                </button>
                <span className="text-[11px] font-medium text-[#3e685f] px-1">
                  {activeIndex + 1}/{cases.length}
                </span>
                <button
                  onClick={nextCase}
                  aria-label="Siguiente"
                  className="w-7 h-7 rounded-full bg-white border border-[#e5dbcb] flex items-center justify-center text-[#18313a] hover:bg-[#18313a] hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Área de Visualización Animada & Comparativa */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center mb-5">
            
            {/* Izquierda: Imagen del Esquema Limpia y Animada */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full relative aspect-4/3 rounded-2xl overflow-hidden border border-[#e5dbcb] shadow-sm bg-[#faf8f5]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCase.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentCase.image}
                      alt={`Modelo anatómico de parálisis facial: ${currentCase.title}`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 420px"
                      referrerPolicy="no-referrer"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Pulso de Onda Bioeléctrica Animada (Sin textos dentro de la foto) */}
                {isAnimationActive && (
                  <motion.div
                    key={`wave-${activeIndex}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ 
                      opacity: [0, 0.45, 0],
                      y: [0, 80] 
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-[#f1d5c2]/35 to-transparent pointer-events-none"
                  />
                )}

                {/* Puntos Motores Pulsantes Animados sobre el Rostro */}
                {currentCase.nodes.map((node, nodeIdx) => (
                  <div
                    key={nodeIdx}
                    className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group cursor-help z-20"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  >
                    {/* Anillos de pulsación animada */}
                    {isAnimationActive && (
                      <motion.div
                        animate={{
                          scale: [1, 2.2, 1],
                          opacity: [0.85, 0, 0.85],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2.2,
                          delay: nodeIdx * 0.35,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 w-4 h-4 -left-1 -top-1 rounded-full bg-[#b86d36]/40 pointer-events-none"
                      />
                    )}

                    {/* Nodo central dorado/terracota */}
                    <div className="w-2.5 h-2.5 rounded-full bg-[#b86d36] border border-white shadow-xs group-hover:scale-125 transition-transform" />

                    {/* Mini Tooltip en Español */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#142329]/95 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md border border-white/20">
                      {node.name}
                      <span className="block text-[9px] text-[#f1d5c2]">{node.locationSpanish}</span>
                    </div>
                  </div>
                ))}

                {/* Etiqueta inferior sutil y en español */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white/95 text-[10px] bg-[#142329]/75 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/15">
                  <span className="font-semibold">{currentCase.nerveBranch}</span>
                  <span className="text-[#f1d5c2] text-[9px] font-mono">Puntos Motores Activos</span>
                </div>
              </div>

              {/* Lista de Puntos en Español Debajo de la Imagen */}
              <div className="w-full mt-2.5 bg-[#faf8f5] p-2.5 rounded-xl border border-[#e8e1d5]">
                <div className="flex items-center gap-1.5 mb-1">
                  <Zap size={11} className="text-[#b86d36]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#142329]">
                    Puntos Estimulados en esta Zona:
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {currentCase.pointsApplied.map((point, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] bg-white text-[#4a5e66] px-2 py-0.5 rounded-md border border-[#e5dbcb] font-medium"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Derecha: Comparativa Antes vs Después */}
            <div className="lg:col-span-7 space-y-3">
              
              {/* Filtro de Vistas en Español */}
              <div className="flex items-center gap-1 bg-[#faf8f5] p-1 rounded-xl border border-[#e8dfcf] w-fit">
                <button
                  onClick={() => setViewMode("comparison")}
                  className={`text-[11px] px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                    viewMode === "comparison" ? "bg-white text-[#18313a] shadow-2xs" : "text-[#3e685f] hover:text-[#18313a]"
                  }`}
                >
                  Comparativa
                </button>
                <button
                  onClick={() => setViewMode("before")}
                  className={`text-[11px] px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                    viewMode === "before" ? "bg-white text-[#aa5833] shadow-2xs" : "text-[#3e685f] hover:text-[#18313a]"
                  }`}
                >
                  Estado Inicial
                </button>
                <button
                  onClick={() => setViewMode("after")}
                  className={`text-[11px] px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                    viewMode === "after" ? "bg-white text-[#18313a] shadow-2xs" : "text-[#3e685f] hover:text-[#18313a]"
                  }`}
                >
                  Tras Tratamiento
                </button>
              </div>

              {/* Mensaje Persuasivo de Transformación Emocional */}
              <div className="bg-[#18313a]/5 border border-[#18313a]/15 rounded-xl p-2.5 flex items-start gap-2 shadow-2xs">
                <Smile size={14} className="text-[#3e685f] flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#18313a] font-medium leading-snug">
                  <strong>Transformación:</strong> {currentCase.emotionalTransformation}
                </p>
              </div>

              {/* Tarjeta de Estado Inicial */}
              {(viewMode === "comparison" || viewMode === "before") && (
                <div className="bg-[#fdfaf7] rounded-xl p-3.5 sm:p-4 border border-[#f3e3d3] relative">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#b86d36]" />
                      <h4 className="font-bold text-xs sm:text-sm text-[#aa5833] font-serif">
                        {currentCase.before.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold text-[#b86d36] bg-white px-2 py-0.5 rounded-full border border-[#f3e3d3]">
                      Simetría: {currentCase.before.symmetryScore}%
                    </span>
                  </div>

                  <div className="w-full bg-[#ecd8c8] h-1.5 rounded-full mb-1.5 overflow-hidden">
                    <motion.div 
                      className="bg-[#b86d36] h-full rounded-full" 
                      initial={{ width: 0 }}
                      animate={{ width: `${currentCase.before.symmetryScore}%` }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>

                  <p className="text-xs text-[#4a5e66] font-light leading-relaxed mb-1.5">
                    {currentCase.before.description}
                  </p>

                  <ul className="space-y-0.5">
                    {currentCase.before.symptoms.map((symptom, idx) => (
                      <li key={idx} className="text-[11px] text-[#6e4635] flex items-start gap-1.5">
                        <span className="text-[#b86d36] font-bold">•</span>
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tarjeta de Tras Tratamiento */}
              {(viewMode === "comparison" || viewMode === "after") && (
                <div className="bg-[#f6f9f7] rounded-xl p-3.5 sm:p-4 border border-[#cbe1d4] relative">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#18313a]" />
                      <h4 className="font-bold text-xs sm:text-sm text-[#18313a] font-serif">
                        {currentCase.after.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold text-[#18313a] bg-white px-2 py-0.5 rounded-full border border-[#cbe1d4]">
                      Simetría: {currentCase.after.symmetryScore}%
                    </span>
                  </div>

                  <div className="w-full bg-[#dbe8e0] h-1.5 rounded-full mb-1.5 overflow-hidden">
                    <motion.div 
                      className="bg-[#18313a] h-full rounded-full" 
                      initial={{ width: 0 }}
                      animate={{ width: `${currentCase.after.symmetryScore}%` }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>

                  <p className="text-xs text-[#4a5e66] font-light leading-relaxed mb-1.5">
                    {currentCase.after.description}
                  </p>

                  <ul className="space-y-0.5">
                    {currentCase.after.improvements.map((improvement, idx) => (
                      <li key={idx} className="text-[11px] text-[#284937] flex items-start gap-1.5">
                        <CheckCircle2 size={11} className="text-[#18313a] flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

          </div>

          {/* Nota Clínica en Español */}
          <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#faf8f5] border border-[#e8e1d5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
            <div className="text-[11px] text-[#4a5e66] leading-relaxed">
              <span className="font-bold text-[#142329] inline-block mr-1">Enfoque Terapéutico:</span>
              <span>{currentCase.clinicalNote}</span>
            </div>
            <div className="flex-shrink-0">
              <WhatsAppButton
                className="bg-[#18313a] text-white px-4 py-2 rounded-full font-bold text-[11px] hover:bg-[#142329] transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                message={`Hola, revisé el modelo clínico de ${currentCase.region} (${currentCase.nerveBranch}) y deseo agendar una valoración para recuperar mi simetría.`}
                showIcon={false}
              >
                <span>Quiero recuperar mi simetría</span>
                <ArrowRight size={12} />
              </WhatsAppButton>
            </div>
          </div>

        </div>

        {/* Paginación de Puntos */}
        <div className="flex justify-center items-center gap-1.5">
          {cases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Caso ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === activeIndex ? "w-6 bg-[#18313a]" : "w-1.5 bg-[#d8cfbe] hover:bg-[#b0a490]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
