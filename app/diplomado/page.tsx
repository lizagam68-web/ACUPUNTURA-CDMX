"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { clinicData } from "@/data/clinic-data";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  BookOpen, 
  Calendar, 
  Clock, 
  Award, 
  HelpCircle, 
  CreditCard, 
  Building2, 
  Copy, 
  Check, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Bot,
  Users,
  Video,
  FileCheck
} from "lucide-react";
import { DiplomadoTutorWidget } from "@/components/DiplomadoTutorWidget";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// Los 6 Módulos Oficiales del Diplomado
const MODULES = [
  {
    num: "01",
    title: "Cosmovisión y Fundamentos de la MTCh",
    desc: "Comprende la filosofía oriental que rige la salud y el equilibrio.",
    topics: [
      "El concepto del Tao y la relación del ser humano con la naturaleza.",
      "La dualidad complementaria del Yin y el Yang en el cuerpo y la mente.",
      "El Qi (energía vital): Origen hereditario (Yuan Qi), respiratorio (Zong Qi) y alimenticio (Gu Qi).",
      "Factores cotidianos que fortalecen o debilitan tu nivel de energía vital."
    ]
  },
  {
    num: "02",
    title: "Los Cinco Elementos (Wu Xing) y sus Ciclos",
    desc: "Aprende a reconocer qué elemento predomina en tu personalidad y salud.",
    topics: [
      "Madera, Fuego, Tierra, Metal y Agua: correspondencias de órganos y vísceras.",
      "Los ciclos Sheng (generación) y Ke (control o dominancia).",
      "Correspondencia de los elementos con las emociones, colores, sabores y estaciones del año.",
      "Identificación práctica de desequilibrios por exceso o deficiencia en cada elemento."
    ]
  },
  {
    num: "03",
    title: "Sustancias Vitales y Fisiología de los Órganos Zang-Fu",
    desc: "Descubre cómo tus órganos internos gestionan tus emociones y tu vitalidad física.",
    topics: [
      "Las 5 Sustancias Vitales: Qi (energía), Xue (sangre), Jinye (líquidos orgánicos), Jing (esencia) y Shen (mente/espíritu).",
      "Funciones energéticas de los órganos Zang (Hígado, Corazón, Bazo, Pulmón, Riñón).",
      "Funciones de las vísceras Fu (Vesícula, Intestino Delgado, Estómago, Intestino Grueso, Vejiga).",
      "La profunda conexión mente-cuerpo en la salud preventiva."
    ]
  },
  {
    num: "04",
    title: "Red de Canales (Jing Luo) y Digitopuntura sin Agujas",
    desc: "Aprende a ubicar y activar los puntos maestros con tus propias manos.",
    topics: [
      "Estructura básica de los 12 canales principales y los 2 canales extraordinarios (Ren Mai y Du Mai).",
      "El Reloj Biológico de los órganos y cómo sincronizar tus horas de comida y descanso.",
      "Localización anatómica sencilla y pautas de presión para los 10 Resonadores Maestros:",
      "IG4 Hegu (dolor de cabeza y tensión), E36 Zusanli (energía e inmunidad), B6 Sanyinjiao (balance femenino y digestión), H3 Taichong (irritabilidad y estrés), PC6 Neiguan (ansiedad y náuseas), R1 Yongquan (insomnio y arraigo), Du20 Baihui (claridad mental).",
      "Precauciones esenciales de seguridad (puntos contraindicados en el embarazo)."
    ]
  },
  {
    num: "05",
    title: "Reconocimiento del Desequilibrio y Lectura Corporal",
    desc: "Aprende a escuchar las señales tempranas de tu organismo antes de que se conviertan en enfermedad.",
    topics: [
      "Factores patógenos externos (Los Seis Excesos climáticos: Viento, Frío, Calor, Humedad, Sequedad y Fuego).",
      "Factores internos (Las Siete Emociones y su impacto específico en cada órgano).",
      "Observación básica de la lengua (color del cuerpo lingual, forma y saburra como espejo digestivo).",
      "Revisión de hábitos diarios: digestión, apetito, sed, calidad del sudor y calidad del sueño."
    ]
  },
  {
    num: "06",
    title: "Botiquín Energético y Estilo de Vida (Yang Sheng)",
    desc: "Crea tu propio botiquín casero de bienestar natural y rutinas estacionales.",
    topics: [
      "Dietoterapia energética: clasificación de alimentos por su naturaleza térmica (fríos, tibios, neutros, calientes) y sus 5 sabores.",
      "Técnicas seguras de automasaje Tui Na para aliviar tensiones comunes de oficina y fatiga.",
      "Pautas de moxibustión indirecta casera (técnica de calor suave para reconfortar articulaciones frías y digestión lenta).",
      "Rutinas estacionales Yang Sheng: cómo adaptar tus actividades, alimentación y descanso según la época del año."
    ]
  }
];

export default function DiplomadoPage() {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [selectedPlan, setSelectedPlan] = useState<"contado" | "quincenal" | "mensual">("contado");
  const [paymentMethod, setPaymentMethod] = useState<"spei" | "tarjeta" | "whatsapp">("spei");
  const [copiedClabe, setCopiedClabe] = useState(false);

  // Formulario de inscripción
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [orderFolio, setOrderFolio] = useState("");

  const handleCopyClabe = () => {
    navigator.clipboard.writeText("722969020307771486");
    setCopiedClabe(true);
    setTimeout(() => setCopiedClabe(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.whatsapp) {
      alert("Por favor completa tu nombre, correo y número de WhatsApp.");
      return;
    }

    const folio = "DIP-" + Math.floor(100000 + Math.random() * 900000);
    setOrderFolio(folio);
    setSubmitted(true);
  };

  const getPlanPrice = () => {
    if (selectedPlan === "contado") return { total: "$3,490 MXN", label: "Pago Único con Descuento", original: "$4,800 MXN", desc: "Ahorras $1,310 MXN" };
    if (selectedPlan === "quincenal") return { total: "2 pagos de $1,850 MXN", label: "Plan Quincenal", original: "$4,800 MXN", desc: "1er pago hoy, 2do a los 15 días" };
    return { total: "3 mensualidades de $1,250 MXN", label: "Plan en 3 Mensualidades", original: "$4,800 MXN", desc: "Pagos mensuales sin estrés" };
  };

  const planInfo = getPlanPrice();

  return (
    <div className="pt-24 min-h-screen bg-[#faf8f5]">
      
      {/* HERO SECTION DE ALTO IMPACTO */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-[#fdfcf9] via-[#f7f4ed] to-[#faf8f5] border-b border-[#e8e1d5] overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#b86d36]">
                <span>Formación en Bienestar &amp; Autocuidado Yang Sheng</span>
                <span className="text-[#cfbfab]" aria-hidden="true">·</span>
                <span>En Línea &amp; En Vivo</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#18313a] leading-[1.12] tracking-tight text-balance">
                Diplomado de Principios de <span className="text-[#3e685f] italic">Medicina Tradicional China</span> para la Vida Cotidiana
              </h1>

              <p className="text-base sm:text-lg text-[#4a5e66] font-light leading-relaxed max-w-xl">
                Aprende a comprender las señales de tu cuerpo, equilibrar tus emociones y aplicar digitopuntura, dietoterapia y autocuidado milenario en tu rutina diaria. <strong>100% didáctico, sin necesidad de formación médica previa.</strong>
              </p>

              {/* Beneficios Clave del Programa */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-[#18313a]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#3e685f] flex-shrink-0" />
                  <span><strong>6 Módulos Prácticos</strong> paso a paso.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#3e685f] flex-shrink-0" />
                  <span><strong>Tutor Virtual 24/7</strong> para resolver dudas.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#3e685f] flex-shrink-0" />
                  <span><strong>10 Resonadores Maestros</strong> para digitopuntura.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#3e685f] flex-shrink-0" />
                  <span><strong>Diploma de Participación</strong> avalado.</span>
                </div>
              </div>

              {/* Acreditación de la Titular */}
              <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#5a6e75]">
                <div className="flex items-center gap-1.5 font-medium text-[#18313a]">
                  <ShieldCheck size={16} className="text-[#3e685f] flex-shrink-0" />
                  <span>Impartido por: Lic. Elizabeth Gamiño (UNEVE)</span>
                </div>
                <span className="hidden sm:inline text-[#cfbfab]" aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5 font-medium text-[#18313a]">
                  <FileText size={16} className="text-[#b86d36] flex-shrink-0" />
                  <span>Cédula Profesional: 15289838</span>
                </div>
              </div>

              {/* Botón de Salto a Inscripción */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#inscripcion"
                  className="bg-[#18313a] hover:bg-[#12242b] text-white min-h-[52px] px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-md hover:shadow-lg shadow-[#18313a]/15 flex items-center justify-center gap-2.5 active:scale-98 cursor-pointer group text-center"
                >
                  <span>Inscribirme al Diplomado</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 text-[#f4e1cb]" />
                </a>

                <a
                  href="#temario"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[52px] rounded-full text-[#18313a] hover:text-[#12242b] font-semibold text-base bg-white hover:bg-[#faf8f5] border border-[#e5dbcb] shadow-2xs transition-all text-center"
                >
                  <span>Ver los 6 Módulos</span>
                </a>
              </div>
            </div>

            {/* Imagen Editorial del Diplomado */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[2.5rem] overflow-hidden border border-[#e5dbcb] shadow-xl shadow-stone-300/30 bg-white group">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden bg-[#f4efe7]">
                  <Image
                    src="/images/lic-elizabeth-gamino-real.jpg"
                    alt="Lic. Elizabeth Gamiño impartiendo el Diplomado de Medicina Tradicional China"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18313a]/70 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-5 inset-x-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#e5dbcb] shadow-lg text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#b86d36] block mb-0.5">
                      Docente Universitaria Titulada
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#18313a]">
                      Lic. Elizabeth Gamiño
                    </h3>
                    <p className="text-xs text-[#5a6e75] font-light leading-snug">
                      Licenciada en Acupuntura Humana y Rehabilitación (UNEVE · Cédula 15289838).
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DETALLES DE MODALIDAD Y QUÉ INCLUYE */}
      <section className="py-16 px-4 bg-white border-b border-[#e8e1d5]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3e685f] block">
              Formato Diseñado para Personas Ocupadas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#18313a] italic">
              ¿Cómo se estudia el Diplomado?
            </h2>
            <div className="w-16 h-0.5 bg-[#b86d36]/40 mx-auto my-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#faf8f5] p-6 rounded-3xl border border-[#e5dbcb] text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#b86d36] flex items-center justify-center mx-auto">
                <Video size={24} />
              </div>
              <h3 className="font-serif font-bold text-base text-[#18313a]">Clases en Video</h3>
              <p className="text-xs text-[#5a6e75] font-light leading-relaxed">
                Lecciones grabadas en alta definición con acceso ilimitado para verlas a tu propio ritmo.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-6 rounded-3xl border border-[#e5dbcb] text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#3e685f] flex items-center justify-center mx-auto">
                <Bot size={24} />
              </div>
              <h3 className="font-serif font-bold text-base text-[#18313a]">Tutor Virtual 24/7</h3>
              <p className="text-xs text-[#5a6e75] font-light leading-relaxed">
                Asistente académico inteligente entrenado en los 6 módulos para resolver tus dudas a cualquier hora.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-6 rounded-3xl border border-[#e5dbcb] text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-stone-100 text-[#18313a] flex items-center justify-center mx-auto">
                <FileCheck size={24} />
              </div>
              <h3 className="font-serif font-bold text-base text-[#18313a]">Guías y Mapas PDF</h3>
              <p className="text-xs text-[#5a6e75] font-light leading-relaxed">
                Manuales descargables e imprimibles con mapas de puntos de digitopuntura y tablas de alimentos.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-6 rounded-3xl border border-[#e5dbcb] text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#b86d36] flex items-center justify-center mx-auto">
                <Award size={24} />
              </div>
              <h3 className="font-serif font-bold text-base text-[#18313a]">Diploma Oficial</h3>
              <p className="text-xs text-[#5a6e75] font-light leading-relaxed">
                Constancia y diploma de participación con valor curricular al completar las actividades del curso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLAN DE ESTUDIOS: LOS 6 MÓDULOS DESPLEGABLES */}
      <section id="temario" className="py-20 px-4 bg-[#faf8f5] border-b border-[#e8e1d5]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14 space-y-3">
            <span className="text-[#b86d36] font-bold uppercase tracking-widest text-xs block">
              Estructura Académica Completa
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[#18313a] tracking-tight italic">
              Mapa de Contenidos del Diplomado
            </h2>
            <div className="w-16 h-0.5 bg-[#3e685f]/40 mx-auto my-3" />
            <p className="text-base text-[#4a5e66] font-light max-w-xl mx-auto leading-relaxed">
              Diseñado progresivamente para que pases de no saber nada de medicina oriental a aplicar herramientas precisas de salud cada día.
            </p>
          </div>

          <div className="space-y-4">
            {MODULES.map((m, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-[#e5dbcb] overflow-hidden shadow-2xs transition-all hover:border-[#cfbfab]"
              >
                <button
                  type="button"
                  onClick={() => setOpenModule(openModule === idx ? null : idx)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between text-left cursor-pointer focus:outline-hidden"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#b86d36] opacity-80 flex-shrink-0">
                      {m.num}
                    </span>
                    <div>
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-[#18313a]">
                        {m.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5a6e75] font-light mt-0.5">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#faf8f5] text-[#3e685f] flex items-center justify-center flex-shrink-0 border border-[#e5dbcb] ml-2">
                    {openModule === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {openModule === idx && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-[#f2ece2] bg-[#faf8f5]/50">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#3e685f] block mb-3">
                      Temas que dominarás en este módulo:
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#18313a]">
                      {m.topics.map((t, tidx) => (
                        <li key={tidx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-[#3e685f] flex-shrink-0 mt-0.5" />
                          <span className="font-light">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EL ASISTENTE ACADÉMICO / TUTOR VIRTUAL (DEMO INTERACTIVA) */}
      <section className="py-20 px-4 bg-white border-b border-[#e8e1d5]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <span className="text-[#3e685f] font-bold uppercase tracking-widest text-xs block">
              Innovación Pedagógica Exclusiva
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[#18313a] tracking-tight italic">
              Tu Tutor Virtual Académico 24/7
            </h2>
            <div className="w-16 h-0.5 bg-[#b86d36]/40 mx-auto my-3" />
            <p className="text-base text-[#4a5e66] font-light max-w-xl mx-auto leading-relaxed">
              Durante todo el diplomado nunca estarás a solas con tus dudas. Tienes a tu disposición un tutor inteligente entrenado para explicarte la ubicación de puntos, dietoterapia y filosofía oriental sin tecnicismos.
            </p>
          </div>

          <DiplomadoTutorWidget />
        </div>
      </section>

      {/* SECCIÓN DE PRECIOS, INSCRIPCIÓN Y PAGOS */}
      <section id="inscripcion" className="py-20 px-4 bg-[#faf8f5] border-b border-[#e8e1d5]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-[#b86d36] font-bold uppercase tracking-widest text-xs block">
              Inscripciones Abiertas · Cupo Limitado
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[#18313a] tracking-tight italic">
              Inscripción y Planes de Pago
            </h2>
            <div className="w-16 h-0.5 bg-[#3e685f]/40 mx-auto my-3" />
            <p className="text-base text-[#4a5e66] font-light leading-relaxed">
              Elige el plan que mejor se adapte a ti y asegura tu lugar hoy mismo.
            </p>
          </div>

          {/* Selector de Planes de Pago */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Opción 1: Contado Promoción */}
            <div 
              onClick={() => setSelectedPlan("contado")}
              className={`p-7 rounded-3xl border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                selectedPlan === "contado"
                  ? "bg-white border-[#3e685f] shadow-xl shadow-stone-300/40 ring-2 ring-[#3e685f]/20"
                  : "bg-white/80 border-[#e5dbcb] hover:border-[#cfbfab]"
              }`}
            >
              <div className="absolute -top-3.5 right-6 bg-[#3e685f] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Mejor Opción
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#b86d36] block mb-2">
                  Pago Único de Contado
                </span>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#18313a]">$3,490</span>
                  <span className="text-xs text-[#5a6e75]">MXN</span>
                </div>
                <span className="text-xs text-stone-400 line-through block mb-4">Precio regular: $4,800 MXN</span>
                <p className="text-xs text-[#4a5e66] font-light leading-relaxed">
                  Ahorras $1,310 MXN al liquidar en una sola exhibición. Acceso completo a los 6 módulos y diploma.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f2ece2] flex items-center justify-between text-xs font-semibold">
                <span className={selectedPlan === "contado" ? "text-[#3e685f]" : "text-[#5a6e75]"}>
                  {selectedPlan === "contado" ? "✓ Seleccionado" : "Seleccionar"}
                </span>
              </div>
            </div>

            {/* Opción 2: Plan Quincenal */}
            <div 
              onClick={() => setSelectedPlan("quincenal")}
              className={`p-7 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                selectedPlan === "quincenal"
                  ? "bg-white border-[#3e685f] shadow-xl shadow-stone-300/40 ring-2 ring-[#3e685f]/20"
                  : "bg-white/80 border-[#e5dbcb] hover:border-[#cfbfab]"
              }`}
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5a6e75] block mb-2">
                  Plan en 2 Pagos
                </span>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#18313a]">2x $1,850</span>
                  <span className="text-xs text-[#5a6e75]">MXN</span>
                </div>
                <span className="text-xs text-[#5a6e75] block mb-4">Total: $3,700 MXN</span>
                <p className="text-xs text-[#4a5e66] font-light leading-relaxed">
                  Primer pago de $1,850 MXN hoy para iniciar, y el segundo a los 15 días.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f2ece2] flex items-center justify-between text-xs font-semibold">
                <span className={selectedPlan === "quincenal" ? "text-[#3e685f]" : "text-[#5a6e75]"}>
                  {selectedPlan === "quincenal" ? "✓ Seleccionado" : "Seleccionar"}
                </span>
              </div>
            </div>

            {/* Opción 3: Plan Mensual */}
            <div 
              onClick={() => setSelectedPlan("mensual")}
              className={`p-7 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                selectedPlan === "mensual"
                  ? "bg-white border-[#3e685f] shadow-xl shadow-stone-300/40 ring-2 ring-[#3e685f]/20"
                  : "bg-white/80 border-[#e5dbcb] hover:border-[#cfbfab]"
              }`}
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5a6e75] block mb-2">
                  Plan en 3 Mensualidades
                </span>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#18313a]">3x $1,250</span>
                  <span className="text-xs text-[#5a6e75]">MXN</span>
                </div>
                <span className="text-xs text-[#5a6e75] block mb-4">Total: $3,750 MXN</span>
                <p className="text-xs text-[#4a5e66] font-light leading-relaxed">
                  Ideal para distribuir la inversión en 3 cuotas mensuales cómodas.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f2ece2] flex items-center justify-between text-xs font-semibold">
                <span className={selectedPlan === "mensual" ? "text-[#3e685f]" : "text-[#5a6e75]"}>
                  {selectedPlan === "mensual" ? "✓ Seleccionado" : "Seleccionar"}
                </span>
              </div>
            </div>

          </div>

          {/* FORMULARIO DE REGISTRO Y DETALLES DE PAGO */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-[#e5dbcb] shadow-xl max-w-3xl mx-auto">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="border-b border-[#f2ece2] pb-6">
                  <h3 className="font-serif font-bold text-2xl text-[#18313a]">
                    Paso 1: Datos para tu Diploma y Accesos
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5a6e75] font-light mt-1">
                    Escribe tu nombre tal como deseas que aparezca en tu diploma de acreditación.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#18313a]">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. María Elena Pérez Gómez"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#faf8f5] border border-[#e5dbcb] rounded-2xl px-4 py-3.5 text-sm text-[#18313a] focus:outline-hidden focus:border-[#3e685f]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#18313a]">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="correo@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#faf8f5] border border-[#e5dbcb] rounded-2xl px-4 py-3.5 text-sm text-[#18313a] focus:outline-hidden focus:border-[#3e685f]"
                    />
                    <span className="text-[11px] text-[#5a6e75] block">Aquí recibirás tus claves del campus.</span>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#18313a]">
                      WhatsApp de Contacto *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="55 1234 5678"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-[#faf8f5] border border-[#e5dbcb] rounded-2xl px-4 py-3.5 text-sm text-[#18313a] focus:outline-hidden focus:border-[#3e685f]"
                    />
                    <span className="text-[11px] text-[#5a6e75] block">Para el grupo de dudas y soporte.</span>
                  </div>
                </div>

                {/* Paso 2: Selección de Método de Pago */}
                <div className="border-t border-[#f2ece2] pt-6 space-y-4">
                  <div>
                    <h3 className="font-serif font-bold text-2xl text-[#18313a]">
                      Paso 2: Método de Pago
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5a6e75] font-light mt-1">
                      Plan seleccionado: <strong>{planInfo.label} ({planInfo.total})</strong>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("spei")}
                      className={`p-4 rounded-2xl border text-left flex flex-col gap-2 transition-all cursor-pointer ${
                        paymentMethod === "spei"
                          ? "bg-emerald-50/50 border-[#3e685f] text-[#18313a] ring-2 ring-[#3e685f]/20 font-semibold"
                          : "bg-[#faf8f5] border-[#e5dbcb] text-[#5a6e75]"
                      }`}
                    >
                      <Building2 size={20} className="text-[#3e685f]" />
                      <span className="text-xs font-bold">Transferencia SPEI</span>
                      <span className="text-[10px] text-[#5a6e75]">Banca móvil / app</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("tarjeta")}
                      className={`p-4 rounded-2xl border text-left flex flex-col gap-2 transition-all cursor-pointer ${
                        paymentMethod === "tarjeta"
                          ? "bg-amber-50/50 border-[#b86d36] text-[#18313a] ring-2 ring-[#b86d36]/20 font-semibold"
                          : "bg-[#faf8f5] border-[#e5dbcb] text-[#5a6e75]"
                      }`}
                    >
                      <CreditCard size={20} className="text-[#b86d36]" />
                      <span className="text-xs font-bold">Tarjeta Débito/Crédito</span>
                      <span className="text-[10px] text-[#5a6e75]">Pago en línea seguro</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("whatsapp")}
                      className={`p-4 rounded-2xl border text-left flex flex-col gap-2 transition-all cursor-pointer ${
                        paymentMethod === "whatsapp"
                          ? "bg-emerald-50/50 border-[#25D366] text-[#18313a] ring-2 ring-[#25D366]/20 font-semibold"
                          : "bg-[#faf8f5] border-[#e5dbcb] text-[#5a6e75]"
                      }`}
                    >
                      <MessageCircle size={20} className="text-[#25D366]" />
                      <span className="text-xs font-bold">Inscripción WhatsApp</span>
                      <span className="text-[10px] text-[#5a6e75]">Atención con Liz</span>
                    </button>
                  </div>

                  {/* Detalle si elige SPEI */}
                  {paymentMethod === "spei" && (
                    <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e5dbcb] space-y-3 text-xs sm:text-sm">
                      <div className="flex items-center justify-between pb-2 border-b border-[#e8e1d5]">
                        <span className="font-semibold text-[#18313a]">Datos de Transferencia Bancaria (SPEI):</span>
                        <span className="text-[11px] text-[#3e685f] font-bold">Sin comisiones</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-[#5a6e75] block">Institución / Banco:</span>
                          <strong className="text-[#18313a]">Mercado Pago W</strong>
                        </div>
                        <div>
                          <span className="text-[#5a6e75] block">Beneficiario:</span>
                          <strong className="text-[#18313a]">Elizabeth Gamiño Calderon</strong>
                        </div>
                        <div className="sm:col-span-2 bg-white p-3 rounded-xl border border-[#e5dbcb] flex items-center justify-between">
                          <div>
                            <span className="text-[#5a6e75] text-[10px] block">CLABE Interbancaria (18 dígitos):</span>
                            <span className="font-mono font-bold text-sm text-[#18313a]">722969020307771486</span>
                          </div>
                          <button
                            type="button"
                            onClick={handleCopyClabe}
                            className="bg-[#faf8f5] hover:bg-[#18313a] hover:text-white text-[#18313a] px-3 py-1.5 rounded-lg border border-[#e5dbcb] text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer"
                          >
                            {copiedClabe ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                            <span>{copiedClabe ? "Copiada" : "Copiar"}</span>
                          </button>
                        </div>
                        <div className="sm:col-span-2 bg-white px-3 py-2 rounded-xl border border-[#e5dbcb] flex items-center justify-between text-[11px]">
                          <span className="text-[#5a6e75]">Celular vinculado a Dimo®:</span>
                          <strong className="font-mono text-[#18313a] font-bold text-xs">525552520615</strong>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#18313a] hover:bg-[#12242b] text-white py-4 px-8 rounded-full font-bold text-base transition-all shadow-lg active:scale-98 cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>Confirmar Mi Registro ({planInfo.total})</span>
                  <ArrowRight size={18} className="text-[#f4e1cb] transition-transform group-hover:translate-x-1" />
                </button>

              </form>
            ) : (
              /* PANTALLA DE PRE-REGISTRO EXITOSO Y ENVÍO DE COMPROBANTE */
              <div className="text-center space-y-6 py-4">
                <div className="w-20 h-20 bg-emerald-50 text-[#3e685f] rounded-full flex items-center justify-center mx-auto border-4 border-emerald-100">
                  <CheckCircle2 size={44} />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#3e685f] block mb-1">
                    ¡Pre-registro Exitoso!
                  </span>
                  <h3 className="font-serif font-bold text-3xl text-[#18313a]">
                    Bienvenida/o al Diplomado, {formData.fullName.split(" ")[0]}
                  </h3>
                  <p className="text-sm text-[#4a5e66] font-light max-w-md mx-auto mt-2">
                    Tu folio de registro es: <strong className="font-mono text-[#b86d36] font-bold text-base">{orderFolio}</strong>
                  </p>
                </div>

                {/* Resumen de Pago */}
                <div className="bg-[#faf8f5] p-6 rounded-3xl border border-[#e5dbcb] text-left space-y-3 max-w-md mx-auto text-xs sm:text-sm">
                  <div className="flex justify-between border-b border-[#e8e1d5] pb-2">
                    <span className="text-[#5a6e75]">Plan Seleccionado:</span>
                    <strong className="text-[#18313a]">{planInfo.label}</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#e8e1d5] pb-2">
                    <span className="text-[#5a6e75]">Monto a Transferir:</span>
                    <strong className="text-base text-[#3e685f] font-serif">{planInfo.total}</strong>
                  </div>
                  <div>
                    <span className="text-[#5a6e75] block mb-1">CLABE Interbancaria (Mercado Pago W):</span>
                    <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-[#e5dbcb]">
                      <span className="font-mono font-bold text-[#18313a]">722969020307771486</span>
                      <button
                        type="button"
                        onClick={handleCopyClabe}
                        className="text-xs text-[#3e685f] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedClabe ? "✓ Copiada" : "Copiar"}
                      </button>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#5a6e75] pt-1">
                      <span>Beneficiario: <strong>Elizabeth Gamiño Calderon</strong></span>
                      <span>Dimo®: <strong>525552520615</strong></span>
                    </div>
                  </div>
                </div>

                {/* Botón para enviar comprobante por WhatsApp */}
                <div className="pt-2">
                  <WhatsAppButton
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-md active:scale-95 cursor-pointer"
                    showIcon={false}
                    message={`Hola Lic. Elizabeth, acabo de registrarme al Diplomado MTCh con el folio ${orderFolio} a nombre de ${formData.fullName}. Envío mi comprobante de pago para activar mis accesos.`}
                  >
                    <MessageCircle size={20} />
                    <span>Enviar Comprobante por WhatsApp</span>
                  </WhatsAppButton>
                  <span className="text-[11px] text-[#5a6e75] block mt-2">
                    Te responderemos en menos de 1 hora con tus accesos al campus y grupo de bienvenida.
                  </span>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* AVISO REGULATORIO COFEPRIS & YANG SHENG */}
      <section className="py-12 px-4 bg-[#18313a] text-white text-center">
        <div className="container mx-auto max-w-4xl space-y-3 text-xs sm:text-sm text-[#d6ccbe]/80 font-light leading-relaxed">
          <p className="font-bold text-white uppercase tracking-wider text-[11px]">
            Aviso de Formación y Salud Preventiva (Yang Sheng)
          </p>
          <p>
            El «Diplomado de Principios de Medicina Tradicional China para la Vida Cotidiana» es un programa educativo enfocado en la autogestión, prevención y hábitos de vida saludables. La digitopuntura y las pautas alimentarias impartidas son herramientas de bienestar complementarias que no confieren grado de médico cirujano ni sustituyen el diagnóstico, prescripción médica o tratamiento de un profesional de la salud debidamente colegiado.
          </p>
          <p className="text-[10px] text-[#cfbfab]/60 pt-2 border-t border-[#2c4955]">
            Lic. Elizabeth Gamiño · Cédula Profesional: 15289838 (UNEVE) · Aviso de Publicidad COFEPRIS: 2609142002A00342
          </p>
        </div>
      </section>

    </div>
  );
}
