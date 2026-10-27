import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { clinicData } from "@/data/clinic-data";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  BookOpen, 
  Clock, 
  Award, 
  CreditCard, 
  Building2, 
  Copy, 
  MessageCircle, 
  Video, 
  FileCheck,
  Zap,
  Heart,
  ExternalLink,
  ShieldAlert
} from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { TallerCheckoutCard } from "@/components/TallerCheckoutCard";

export const metadata: Metadata = {
  title: "Taller Exprés en Vivo: Botiquín de Digitopuntura en Casa | $780 MXN",
  description: "Aprende a aliviar dolor de cabeza, tensión de cuello, estrés e insomnio con tus propias manos. Clase en vivo con la Lic. Elizabeth Gamiño + Guía ilustrada en PDF lista para imprimir. Pago seguro con Mercado Pago por $780 MXN.",
  alternates: {
    canonical: "https://www.acupunturacdmx.com/taller-digitopuntura",
  },
  openGraph: {
    title: "Taller Exprés de Digitopuntura en Casa | Lic. Elizabeth Gamiño",
    description: "Clase práctica en vivo + Guía PDF imprimible. Alivio natural sin agujas por $780 MXN.",
    url: "https://www.acupunturacdmx.com/taller-digitopuntura",
  },
};

const POINTS = [
  {
    code: "IG4",
    name: "Hegu (Fondo del Valle)",
    location: "En el dorso de la mano, entre el pulgar y el índice.",
    benefit: "Resonador estrella para dolor de cabeza tensional, migrañas leves, dolor dental y tensión acumulada.",
    warning: "Contraindicado durante el embarazo."
  },
  {
    code: "PC6",
    name: "Neiguan (Barrera Interna)",
    location: "A 3 dedos por encima del pliegue interno de la muñeca, entre los dos tendones centrales.",
    benefit: "Calma inmediata ante opresión en el pecho, ansiedad por estrés, mareos y náuseas digestivas.",
    warning: null
  },
  {
    code: "H3",
    name: "Taichong (Gran Asalto)",
    location: "En el empeine del pie, en la depresión entre el dedo gordo y el segundo dedo.",
    benefit: "Libera el estancamiento de Qi del Hígado: ideal para frustración, irritabilidad y dolor en sienes.",
    warning: null
  },
  {
    code: "C7",
    name: "Shenmen (Puerta del Espíritu)",
    location: "En el pliegue de la muñeca, en el borde interno del tendón del lado del meñique.",
    benefit: "Calma el Shen (la mente): induce un sueño profundo y reconfortante ante el insomnio tensional.",
    warning: null
  },
  {
    code: "E36",
    name: "Zusanli (Tres Distancias)",
    location: "A cuatro dedos por debajo de la rótula, un dedo hacia la parte externa de la tibia.",
    benefit: "El punto de la longevidad y vitalidad: reactiva la energía digestiva y combate la fatiga post-comida.",
    warning: null
  },
  {
    code: "B6",
    name: "Sanyinjiao (Cruce de los Tres Yin)",
    location: "A cuatro dedos por encima del hueso interno del tobillo (maléolo interno).",
    benefit: "Armoniza la salud femenina, alivia la pesadez en piernas y reconforta el vientre bajo.",
    warning: "Contraindicado con presión profunda en el embarazo."
  },
  {
    code: "Du20",
    name: "Baihui (Cien Reuniones)",
    location: "En la coronilla, trazando una línea imaginaria desde la punta de ambas orejas al centro de la cabeza.",
    benefit: "Despeja la mente embotada, mejora la concentración y alivia el cansancio por sobrecarga laboral.",
    warning: null
  }
];

export default function TallerDigitopunturaPage() {
  const paymentLink = "https://mpago.li/1cPuzZr";

  return (
    <div className="pt-24 min-h-screen bg-[#faf8f5]">
      
      {/* HERO SECTION DE VENTA RÁPIDA */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-[#fdfcf9] via-[#f7f4ed] to-[#faf8f5] border-b border-[#e8e1d5] overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#b86d36]">
                <span className="bg-amber-100/80 px-3 py-1 rounded-full">Taller Exprés en Vivo · Cupo Limitado</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#18313a] leading-[1.15] tracking-tight text-balance">
                Botiquín de <span className="text-[#3e685f] italic">Digitopuntura</span> en Casa
              </h1>

              <p className="text-base sm:text-lg text-[#4a5e66] font-light leading-relaxed">
                Aprende a ubicar y masajear con tus propios dedos los <strong>7 puntos maestros</strong> de la Medicina Tradicional China para aliviar dolor de cabeza, tensión de cuello, estrés e insomnio sin medicamentos.
              </p>

              {/* Lo que incluye */}
              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#18313a]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#3e685f] flex-shrink-0" />
                  <span><strong>Clase Práctica en Vivo (90 a 120 min)</strong> con la Lic. Elizabeth Gamiño.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#3e685f] flex-shrink-0" />
                  <span><strong>Guía Visual Ilustrada en PDF</strong> lista para imprimir y tener en casa.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#3e685f] flex-shrink-0" />
                  <span><strong>Sesión de Preguntas en Directo</strong> para corregir tu técnica al momento.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#3e685f] flex-shrink-0" />
                  <span><strong>Acceso a tu Tutor Virtual 24/7</strong> para resolver dudas posteriores.</span>
                </div>
              </div>

              {/* Acreditación Oficial */}
              <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#5a6e75]">
                <div className="flex items-center gap-1.5 font-medium text-[#18313a]">
                  <ShieldCheck size={16} className="text-[#3e685f] flex-shrink-0" />
                  <span>Imparte: Lic. Elizabeth Gamiño (UNEVE)</span>
                </div>
                <span className="text-[#cfbfab]" aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5 font-medium text-[#18313a]">
                  <FileText size={16} className="text-[#b86d36] flex-shrink-0" />
                  <span>Cédula Profesional: 15289838</span>
                </div>
              </div>
            </div>

            {/* TARJETA DE PAGO COMPLETA: MERCADO PAGO + TRANSFERENCIA SPEI / DIMO */}
            <div className="lg:col-span-5">
              <TallerCheckoutCard
                paymentLink={paymentLink}
                price="$780"
                clabe="722969020307771486"
                beneficiary="Elizabeth Gamiño Calderon"
                bank="Mercado Pago W"
                dimoPhone="525552520615"
              />
            </div>

          </div>
        </div>
      </section>

      {/* LOS 7 PUNTOS MAESTROS QUE APRENDERÁS A DOMINAR */}
      <section className="py-20 px-4 bg-white border-b border-[#e8e1d5]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3e685f] block">
              Contenido Práctico del Taller
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#18313a] italic">
              Los 7 Resonadores de Oro del Botiquín
            </h2>
            <div className="w-16 h-0.5 bg-[#b86d36]/40 mx-auto my-3" />
            <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
              En la clase en vivo aprenderás la técnica exacta de presión, círculos y respiración para cada uno:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {POINTS.map((pt, idx) => (
              <div 
                key={idx}
                className="bg-[#faf8f5] p-6 rounded-3xl border border-[#e5dbcb] space-y-2.5 transition-all hover:border-[#cfbfab] hover:shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-xl text-[#b86d36]">
                    {pt.code} · {pt.name}
                  </span>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-white text-[#3e685f] rounded-md border border-[#e5dbcb]">
                    Punto Maestro
                  </span>
                </div>
                
                <p className="text-xs text-[#18313a] font-medium">
                  📍 <strong>Ubicación:</strong> {pt.location}
                </p>

                <p className="text-xs sm:text-sm text-[#4a5e66] font-light leading-relaxed">
                  ✨ <strong>Beneficio principal:</strong> {pt.benefit}
                </p>

                {pt.warning && (
                  <div className="bg-amber-50/80 border border-amber-200/60 text-amber-900 text-[11px] p-2 rounded-xl flex items-center gap-1.5 font-medium">
                    <ShieldAlert size={14} className="text-amber-600 flex-shrink-0" />
                    <span>{pt.warning}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIAL IMPRIMIBLE Y FORMATO */}
      <section className="py-16 px-4 bg-[#faf8f5] border-b border-[#e8e1d5]">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b86d36] block">
              Material Diseñado para la Práctica
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#18313a] italic">
              Recibe tu Guía Visual en PDF Lista para Imprimir
            </h2>
            <div className="w-16 h-0.5 bg-[#3e685f]/40 mx-auto my-3" />
            <p className="text-sm sm:text-base text-[#4a5e66] font-light max-w-xl mx-auto leading-relaxed">
              Un compendio claro con fotos y esquemas de cada punto para que lo pegues en el refrigerador o en tu espacio de trabajo y lo consultes cada vez que lo necesites.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-[#e5dbcb] shadow-lg max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-left">
            <div className="w-20 h-20 rounded-2xl bg-amber-50 text-[#b86d36] flex items-center justify-center flex-shrink-0">
              <FileCheck size={40} />
            </div>
            <div className="space-y-1.5 flex-1">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#18313a]">
                Manual de Digitopuntura de Rescate
              </h3>
              <p className="text-xs text-[#5a6e75] font-light leading-relaxed">
                Incluye mapas corporales, tiempos de presión sugeridos, indicaciones por síntoma y contraindicaciones de seguridad.
              </p>
              <span className="text-xs font-semibold text-[#3e685f] block pt-1">
                ✓ Se envía a tu correo y WhatsApp al confirmar tu inscripción.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* LLAMADO A LA ACCIÓN FINAL */}
      <section className="py-20 px-4 bg-[#18313a] text-white text-center">
        <div className="container mx-auto max-w-3xl space-y-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#f4e1cb]">
            Inversión Accesible · Alivio Inmediato
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white text-balance">
            Asegura tu lugar en el Taller por solo $780 MXN
          </h2>
          <p className="text-sm sm:text-base text-[#e5dbcb] font-light max-w-xl mx-auto leading-relaxed">
            Aprende una herramienta que te servirá a ti y a tu familia para toda la vida. Cupo limitado para atender las preguntas de todos los participantes.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#009ee3] hover:bg-[#0086c3] text-white px-9 py-4 rounded-full font-bold text-base transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ingresar al Link de Pago ($780 MXN)</span>
              <ExternalLink size={18} />
            </a>

            <WhatsAppButton
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-4 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              showIcon={false}
              message="Hola Lic. Elizabeth, acabo de ver el Taller de Digitopuntura de $780 MXN y quiero apartar mi lugar."
            >
              <MessageCircle size={18} className="text-[#25D366]" />
              <span>Apartar por WhatsApp</span>
            </WhatsAppButton>
          </div>

          <p className="text-[11px] text-[#cfbfab]/60 pt-4 border-t border-[#2c4955] max-w-xl mx-auto font-light">
            Programa de autocuidado preventivo Yang Sheng · Lic. Elizabeth Gamiño (UNEVE · Cédula 15289838 · Aviso COFEPRIS: 2609142002A00342).
          </p>
        </div>
      </section>

    </div>
  );
}
