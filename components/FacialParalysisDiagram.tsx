"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  Eye, 
  Smile, 
  Activity, 
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  HelpCircle
} from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

interface FacialArea {
  id: string;
  name: string;
  branch: string;
  symptom: string;
  description: string;
  initialScore: number;
  finalScore: number;
  transformation: string;
  points: string[];
  icon: typeof Eye;
  indicatorLeft: string; // percentage for pointer dot
  indicatorTop: string;
}

const facialAreas: FacialArea[] = [
  {
    id: "parpado",
    name: "Párpado y Ojo",
    branch: "Rama temporal del nervio facial",
    symptom: "Cierre palpebral incompleto (Signo de Bell)",
    description: "Incapacidad para cerrar el párpado al dormir o parpadear, acompañada de resequedad, ardor e irritación constante.",
    initialScore: 35,
    finalScore: 96,
    transformation: "De la molestia de parches y ardor, a la tranquilidad de cerrar el ojo por completo y descansar sin irritación.",
    points: ["Punto Sien (Taiyang)", "Punto Ceja Exterior (Sizhukong)", "Punto Lagrimal (Zanzhu)"],
    icon: Eye,
    indicatorLeft: "62%",
    indicatorTop: "34%"
  },
  {
    id: "sonrisa",
    name: "Comisura y Mejilla",
    branch: "Ramas cigomática y bucal",
    symptom: "Desviación bucal y caída de la comisura",
    description: "La boca se desvía hacia el lado sano al intentar sonreír; dificultad para hablar y escape involuntario de líquidos al beber.",
    initialScore: 40,
    finalScore: 95,
    transformation: "De la incomodidad al hablar o comer, a recuperar tu sonrisa auténtica, simétrica y con sellado hermético.",
    points: ["Punto Comisura (Dicang)", "Punto Mandíbula (Jiache)", "Punto Surco Labial (Renzhong)"],
    icon: Smile,
    indicatorLeft: "58%",
    indicatorTop: "68%"
  },
  {
    id: "frente",
    name: "Frente y Ceja",
    branch: "Rama frontal motora",
    symptom: "Borramiento de pliegues y ceja caída",
    description: "Aplanamiento total de las líneas de expresión en la frente e imposibilidad de elevar la ceja voluntariamente.",
    initialScore: 45,
    finalScore: 92,
    transformation: "De sentir tu frente inerte o pesada, a la reactivación simétrica de la movilidad y la expresividad natural.",
    points: ["Punto Frente (Yangbai)", "Punto Nacimiento del Cabello", "Punto Maestro (Hegu)"],
    icon: Activity,
    indicatorLeft: "64%",
    indicatorTop: "24%"
  },
  {
    id: "secuelas",
    name: "Salida del Nervio y Tronco",
    branch: "Tronco principal (Foramen estilomastoideo)",
    symptom: "Tensión miofascial y prevención de sincinesias",
    description: "Rigidez muscular detrás de la oreja o movimientos involuntarios asociados (como cerrar el ojo al masticar o hablar).",
    initialScore: 52,
    finalScore: 90,
    transformation: "De la rigidez dolorosa y espasmos, a la coordinación muscular relajada y movimientos faciales independientes.",
    points: ["Punto Salida del Nervio (Yifeng)", "Punto Mandibular (Xiaguan)", "Punto Nuca (Fengchi)"],
    icon: ShieldCheck,
    indicatorLeft: "76%",
    indicatorTop: "52%"
  }
];

export const FacialParalysisDiagram: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"sintomas" | "evolucion">("sintomas");

  const currentArea = facialAreas[selectedIndex];

  return (
    <section className="py-12 md:py-16 bg-white border-b border-[#e8e1d5] relative">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* Encabezado sin textos repetidos */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-semibold text-[#3e685f] tracking-widest uppercase mb-2">
            Valoración Clínica y Evolución Facial
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#142329] tracking-tight leading-snug mb-2.5">
            Identificación de Síntomas y Recuperación de Simetría Facial
          </h2>
          <div className="w-16 h-1 bg-[#b86d36] mx-auto rounded-full mb-3" />
          
          <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
            Identifica con claridad anatómica y clínica las diferencias entre el lado con función muscular normal y el lado con parálisis facial, así como el porcentaje de recuperación alcanzable con electroacupuntura.
          </p>
        </div>

        {/* Tarjeta Principal Unificada */}
        <div className="bg-[#fefdfb] rounded-3xl border border-[#e8dfcf] shadow-lg shadow-stone-200/50 p-5 sm:p-8 lg:p-10 overflow-hidden">
          
          {/* Selector de Modo: Síntomas vs Evolución */}
          <div className="flex items-center justify-between flex-wrap gap-3 pb-5 border-b border-[#e8e1d5] mb-6">
            <div className="flex items-center gap-2 bg-[#faf8f5] p-1 rounded-2xl border border-[#e8dfcf]">
              <button
                onClick={() => setActiveTab("sintomas")}
                className={`text-xs px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                  activeTab === "sintomas" 
                    ? "bg-[#18313a] text-white shadow-xs" 
                    : "text-[#3e685f] hover:text-[#18313a]"
                }`}
              >
                1. Síntomas y Signos Clínicos
              </button>
              <button
                onClick={() => setActiveTab("evolucion")}
                className={`text-xs px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                  activeTab === "evolucion" 
                    ? "bg-[#18313a] text-white shadow-xs" 
                    : "text-[#3e685f] hover:text-[#18313a]"
                }`}
              >
                2. Evolución y Simetría Lograda
              </button>
            </div>

            <div className="text-xs text-[#3e685f] font-medium hidden sm:block">
              Área seleccionada: <strong className="text-[#18313a]">{currentArea.name}</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Columna Izquierda: Imagen del Rostro Dividido Limpia con Etiquetas en Español */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full relative aspect-4/3 rounded-2xl overflow-hidden border border-[#e5dbcb] shadow-md bg-[#faf8f5] group">
                <Image
                  src="/images/rostro-dividido-clinico.jpg"
                  alt="Diagrama anatómico y funcional de rostro dividido en lado normal y lado con parálisis facial"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 550px"
                  referrerPolicy="no-referrer"
                  priority
                />

                {/* Etiquetas de cabecera en Español */}
                <div className="absolute top-3 left-3 bg-[#142329]/90 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/20 shadow-xs">
                  Lado Sano (Tono Normal)
                </div>
                <div className="absolute top-3 right-3 bg-[#b86d36]/95 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/20 shadow-xs">
                  Lado Afectado (Paresia)
                </div>

                {/* Línea Central Indicadora */}
                <div className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-white/70 pointer-events-none" />

                {/* Puntero Activo Animado sobre la Zona Seleccionada */}
                <div 
                  className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500"
                  style={{ left: currentArea.indicatorLeft, top: currentArea.indicatorTop }}
                >
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.9, 0.2, 0.9] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-6 h-6 -left-1 -top-1 absolute rounded-full bg-[#b86d36]/40"
                  />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#b86d36] border-2 border-white shadow-md" />
                </div>

                {/* Leyenda Inferior en Español */}
                <div className="absolute bottom-2.5 inset-x-2.5 bg-[#142329]/85 backdrop-blur-xs text-white text-[11px] px-3 py-1.5 rounded-xl border border-white/15 flex items-center justify-between">
                  <span className="font-serif">Línea de Eje Simétrico Facial</span>
                  <span className="text-[#f1d5c2] font-semibold text-[10px]">{currentArea.branch}</span>
                </div>
              </div>

              {/* Nota de Referencia Anatómica Limpia (Sin Duplicación de Textos) */}
              <div className="w-full mt-3 p-2.5 rounded-xl bg-[#faf8f5] border border-[#e8e1d5] text-[11px] text-center text-[#3e685f]">
                <span className="font-semibold text-[#18313a]">Evaluación Anatómica:</span> El lado izquierdo conserva el tono basal, mientras que el lado derecho muestra la afectación motora específica.
              </div>
            </div>

            {/* Columna Derecha: Selector de Zonas y Detalles (Síntomas o Evolución) */}
            <div className="lg:col-span-6">
              
              {/* Botones de Navegación por Zonas */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-4">
                {facialAreas.map((area, idx) => {
                  const Icon = area.icon;
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={area.id}
                      onClick={() => setSelectedIndex(idx)}
                      className={`p-2 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                        isSelected 
                          ? "bg-[#18313a] text-white border-[#18313a] shadow-xs" 
                          : "bg-[#faf8f5] text-[#4a5e66] border-[#e8e1d5] hover:border-[#18313a]"
                      }`}
                    >
                      <Icon size={14} className={isSelected ? "text-[#f1d5c2]" : "text-[#b86d36]"} />
                      <span className="text-[11px] font-semibold leading-tight">{area.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Panel de Contenido Dinámico */}
              <div className="bg-[#fcfbfa] rounded-2xl p-5 border border-[#e8e1d5] mb-4">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-serif font-bold text-lg text-[#142329]">
                    {currentArea.symptom}
                  </h3>
                  <span className="text-[10px] uppercase font-bold text-[#b86d36] bg-white px-2.5 py-1 rounded-full border border-[#f3e3d3]">
                    {currentArea.name}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#4a5e66] font-light leading-relaxed mb-3">
                  {currentArea.description}
                </p>

                {/* Vista 1: Síntomas y Puntos de Acupuntura */}
                {activeTab === "sintomas" && (
                  <div>
                    <div className="bg-white p-3 rounded-xl border border-[#e8e1d5] mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#142329] block mb-1 flex items-center gap-1">
                        <Zap size={12} className="text-[#b86d36]" />
                        Puntos Motores Estimulados con Electroacupuntura:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {currentArea.points.map((pt, pIdx) => (
                          <span key={pIdx} className="text-[11px] bg-[#faf8f5] text-[#18313a] px-2 py-0.5 rounded-md border border-[#e5dbcb] font-medium">
                            {pt}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#18313a]/5 border border-[#18313a]/15">
                      <p className="text-xs text-[#18313a] leading-relaxed">
                        <strong>Efecto clínico:</strong> Reactivación axónica selectiva para devolver el tono y evitar contracturas musculares.
                      </p>
                    </div>
                  </div>
                )}

                {/* Vista 2: Evolución de Simetría y Transformación */}
                {activeTab === "evolucion" && (
                  <div className="space-y-3">
                    <div className="bg-white p-3.5 rounded-xl border border-[#e8e1d5]">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="text-[#aa5833] font-semibold">Simetría Inicial: {currentArea.initialScore}%</span>
                        <span className="text-[#18313a] font-bold">Simetría Tras Tratamiento: {currentArea.finalScore}%</span>
                      </div>
                      
                      {/* Barra de progreso de simetría */}
                      <div className="w-full bg-[#f0e8dc] h-2.5 rounded-full overflow-hidden flex">
                        <div 
                          className="bg-[#b86d36] h-full transition-all duration-500" 
                          style={{ width: `${currentArea.initialScore}%` }} 
                          title="Estado Inicial"
                        />
                        <div 
                          className="bg-[#18313a] h-full transition-all duration-700" 
                          style={{ width: `${currentArea.finalScore - currentArea.initialScore}%` }} 
                          title="Ganancia con Tratamiento"
                        />
                      </div>
                      <div className="flex justify-between text-[10px] text-[#3e685f] mt-1">
                        <span>Fase aguda con debilidad</span>
                        <span>Recuperación simétrica funcional</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#f6f9f7] border border-[#cbe1d4]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#18313a] block mb-0.5 flex items-center gap-1">
                        <TrendingUp size={12} className="text-[#18313a]" />
                        Transformación del Paciente:
                      </span>
                      <p className="text-xs text-[#284937] leading-relaxed">
                        {currentArea.transformation}
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* Botón de Acción Directo */}
              <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#e8dfcf] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-[#18313a] text-center sm:text-left">
                  <span className="font-bold block">¿Presentas debilidad en esta zona?</span>
                  <span className="text-[#3e685f] text-[11px]">Inicia tu valoración prioritaria en Benito Juárez, CDMX.</span>
                </div>
                <WhatsAppButton
                  className="bg-[#18313a] text-white px-5 py-2.5 rounded-full font-bold text-xs hover:bg-[#142329] transition-all whitespace-nowrap flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                  message={`Hola, revisé el diagrama de parálisis facial (${currentArea.name} - ${currentArea.symptom}) y deseo agendar una valoración.`}
                  showIcon={false}
                >
                  <span>Valorar esta zona</span>
                  <ArrowRight size={13} />
                </WhatsAppButton>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
