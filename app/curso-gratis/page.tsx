import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Video, 
  FileText, 
  Heart, 
  HelpCircle,
  Activity,
  Flame,
  Award
} from "lucide-react";
import { FormularioCaptacionCursoGratis } from "@/components/FormularioCaptacionCursoGratis";
import { clinicData } from "@/data/clinic-data";

export const metadata: Metadata = {
  title: "Curso Gratis de Autocuidado y 5 Elementos | Medicina Tradicional China",
  description: "Regístrate gratis al Mini-Curso con la Lic. Elizabeth Gamiño. Videoclase de 10 min sobre desbalance de los 5 elementos, estrés de la vida moderna y ejercicios de tapping guiado.",
  alternates: {
    canonical: "https://www.acupunturacdmx.com/curso-gratis",
  },
  openGraph: {
    title: "Mini-Curso Gratuito: 5 Elementos, Estrés Emocional & Tapping | Lic. Elizabeth Gamiño",
    description: "Aprende a regular el cortisol, la ansiedad y el desbalance bioenergético. Incluye videoclase interactiva de 10 min y guía de digitopuntura descargable en PDF.",
    url: "https://www.acupunturacdmx.com/curso-gratis",
    images: [
      {
        url: "/images/holistic_therapy_elements_1790409106771.jpg",
        width: 1200,
        height: 896,
        alt: "Curso Gratis de Autocuidado y 5 Elementos"
      }
    ]
  }
};

export default function CursoGratisPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#faf8f5]">
      
      {/* BARRA SUPERIOR DE PROMOCIÓN */}
      <div className="bg-gradient-to-r from-emerald-800 via-[#3e685f] to-[#18313a] text-white py-2.5 px-4 text-center text-xs font-semibold tracking-wide">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles size={14} className="text-amber-300" />
          <span>🎁 ACCESO 100% LIBRE · Videoclase de 10 Minutos (Estrés Emocional &amp; Tapping) + Prescripción en PDF</span>
        </span>
      </div>

      {/* HERO SECTION */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-[#fdfcf9] via-[#f7f4ed] to-[#faf8f5] border-b border-[#e8e1d5]">
        <div className="container mx-auto max-w-5xl space-y-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 border border-emerald-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>Recurso Gratuito de la Academia</span>
              <span className="text-[#cfbfab]" aria-hidden="true">·</span>
              <span>Medicina Tradicional China</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[#18313a] leading-[1.18] tracking-tight">
              Aprende a <span className="text-[#3e685f] italic">Equilibrar tu Energía</span> frente al Estrés de la Vida Moderna
            </h1>

            <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed max-w-2xl mx-auto">
              Descubre cómo las 7 emociones (ira, ansiedad, sobrepensamiento, tristeza y miedo) estancan tus órganos, y aprende un <strong>protocolo guiado de tapping y digitopuntura</strong> para regular el sistema nervioso en minutos. Impartido por la <strong>Lic. Elizabeth Gamiño</strong> (Acupuntura Humana UNEVE · Cédula 15289838).
            </p>
          </div>

          {/* FORMULARIO DE CAPTACIÓN DESTACADO */}
          <div className="max-w-4xl mx-auto">
            <FormularioCaptacionCursoGratis 
              source="landing_curso_gratis"
              titleOverride="Desbloquea tu Videoclase de 10 Minutos y Prescripción en PDF"
              subtitleOverride="Ingresa tus datos para acceder de inmediato al reproductor con la clase de los 5 Elementos, la guía de tapping para el estrés y tu mapa anatómico."
            />
          </div>

        </div>
      </section>

      {/* DETALLES DE LO QUE APRENDERÁS EN EL CURSO */}
      <section className="py-14 px-4 bg-white border-b border-[#e8e1d5]">
        <div className="container mx-auto max-w-4xl space-y-10">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3e685f] block">
              Contenido del Programa Gratuito (10 Minutos)
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#18313a]">
              ¿Qué aprenderás en esta Clase de Autocuidado?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e8e1d5] space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h3 className="text-sm font-bold text-[#18313a]">
                La Matriz Emocional de los 5 Elementos
              </h3>
              <p className="text-xs text-[#5a6e75] font-light leading-relaxed">
                Cómo la ira estanca la Madera (Hígado), la rumiación inflama la Tierra (Bazo) y el miedo agota el Agua (Riñón).
              </p>
            </div>

            <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e8e1d5] space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h3 className="text-sm font-bold text-[#18313a]">
                El Impacto del Estrés Urbano
              </h3>
              <p className="text-xs text-[#5a6e75] font-light leading-relaxed">
                Por qué las pantallas, la prisa y el cortisol crónico encienden fuego patológico que dispersa el Shen e impide dormir.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e8e1d5] space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-100 text-[#3e685f] flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h3 className="text-sm font-bold text-[#18313a]">
                Protocolo Rítmico de Tapping
              </h3>
              <p className="text-xs text-[#5a6e75] font-light leading-relaxed">
                Secuencia guiada en 8 resonadores maestros con respiración 4-2-6 para calmar la agitación del sistema nervioso en 2 minutos.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e8e1d5] space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs">
                04
              </div>
              <h3 className="text-sm font-bold text-[#18313a]">
                Localización en Medidas Cun
              </h3>
              <p className="text-xs text-[#5a6e75] font-light leading-relaxed">
                Aprende la técnica de medición anatómica tradicional con tus dedos para estimular con precisión milimétrica.
              </p>
            </div>

          </div>

          {/* Banner para tomar el test interactivo si aún no lo han hecho */}
          <div className="bg-gradient-to-r from-emerald-50 via-amber-50 to-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center justify-center sm:justify-start gap-1">
                <Activity size={14} />
                <span>¿Aún no conoces tu desequilibrio?</span>
              </span>
              <h4 className="text-lg font-bold font-serif text-[#18313a]">
                Haz el Autodiagnóstico de 10 Preguntas en 3 Minutos
              </h4>
              <p className="text-xs text-[#5a6e75] font-light">
                Descubre si predomina en ti el Fuego, la Madera, la Tierra, el Metal o el Agua con nuestro test interactivo.
              </p>
            </div>

            <Link
              href="/test-5-elementos"
              className="bg-[#18313a] hover:bg-[#12242b] text-white px-6 py-3 rounded-full text-xs font-bold transition-all shadow-md shrink-0 flex items-center gap-2"
            >
              <span>Hacer el Test Gratis</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* FOOTER MINIMALISTA */}
      <footer className="py-8 px-4 text-center text-xs text-[#5a6e75] bg-[#faf8f5]">
        <p suppressHydrationWarning>© {new Date().getFullYear()} Lic. Elizabeth Gamiño Calderón · Acupuntura Humana (UNEVE · Cédula Profesional 15289838) · CDMX</p>
        <div className="pt-2 flex justify-center gap-4 text-[11px] underline">
          <Link href="/educacion">Ver Catálogo Completo de Cursos</Link>
          <Link href="/contacto">Contacto &amp; Ubicación de Consultorio</Link>
        </div>
      </footer>

    </div>
  );
}
