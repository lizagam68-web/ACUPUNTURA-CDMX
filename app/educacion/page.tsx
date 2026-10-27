import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { clinicData } from "@/data/clinic-data";
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Video, 
  Bot, 
  Calendar, 
  Sparkles,
  Users,
  MessageCircle,
  HelpCircle,
  Clock,
  Compass,
  ExternalLink,
  Share2
} from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AutodiagnosticoCincoElementos } from "@/components/AutodiagnosticoCincoElementos";
import { FormularioCaptacionCursoGratis } from "@/components/FormularioCaptacionCursoGratis";

export const metadata: Metadata = {
  title: "Cursos, Talleres y Diplomados de Medicina Tradicional China | Educación y Autocuidado",
  description: "Aprende los principios milenarios de la Medicina Tradicional China para tu vida diaria. Realiza gratis tu autodiagnóstico de los 5 Elementos y obtén tu Prescripción Personalizada de Autocuidado con la Lic. Elizabeth Gamiño.",
  alternates: {
    canonical: "https://www.acupunturacdmx.com/educacion",
  },
  openGraph: {
    title: "Educación en Medicina Tradicional China | Lic. Elizabeth Gamiño",
    description: "Programas educativos y formativos en autocuidado, digitopuntura y salud natural para la vida moderna.",
    url: "https://www.acupunturacdmx.com/educacion",
  },
};

const COURSES = [
  {
    id: "mini-curso-gratis",
    badge: "100% Gratis · Acceso Libre",
    badgeColor: "bg-emerald-600 text-white",
    title: "Mini-Curso: 5 Elementos & Digitopuntura en Casa",
    duration: "Videoclase (15 min) + Prescripción PDF",
    desc: "Aprende a identificar qué elemento de tu organismo está agotado y estimula los puntos maestros para restaurar tu paz mental (Shen) y vitalidad. Incluye formulario de acceso inmediato.",
    highlights: [
      "Clase magistral en video exclusiva de 15 minutos",
      "Guía descargable con localización de puntos en Cun",
      "Acceso directo y tips por canal de WhatsApp"
    ],
    price: "100% GRATIS",
    link: "/curso-gratis",
    cta: "Acceder al Curso Gratis Ahora",
    featured: false
  },
  {
    id: "diplomado-mtc",
    badge: "Programa Insignia · Inscripciones Abiertas",
    badgeColor: "bg-[#3e685f] text-white",
    title: "Diplomado de Principios de MTCh para la Vida Cotidiana",
    duration: "6 Módulos · A tu propio ritmo + Sesiones en vivo",
    desc: "El programa formativo más completo para comprender el Tao, Yin-Yang, los 5 Elementos, el reloj biológico, los 10 resonadores de digitopuntura, lectura de lengua y botiquín casero Yang Sheng. Incluye Tutor Virtual 24/7 y diploma oficial.",
    highlights: [
      "6 Módulos completos con lecciones en video HD",
      "Asistente Académico y Tutor Virtual 24/7",
      "Manuales descargables e imprimibles en PDF",
      "Diploma con valor curricular de acreditación"
    ],
    price: "Desde $3,490 MXN (Preventa)",
    link: "/diplomado",
    cta: "Ver Plan de Estudios e Inscribirme",
    featured: true
  },
  {
    id: "taller-digitopuntura",
    badge: "Taller en Vivo · Inscripciones Abiertas",
    badgeColor: "bg-[#3e685f] text-white",
    title: "Taller Exprés: Botiquín de Digitopuntura en Casa",
    duration: "Clase en Vivo (2 hrs) + Guía PDF Imprimible",
    desc: "Aprende a ubicar y masajear con tus propios dedos los 7 puntos maestros para aliviar el dolor de cabeza, tensión de cuello, estrés e insomnio sin medicamentos.",
    highlights: [
      "Clase práctica en directo con la Lic. Elizabeth Gamiño",
      "Manual ilustrado en PDF listo para imprimir en casa",
      "Pago seguro en línea por $780 MXN con Mercado Pago"
    ],
    price: "$780 MXN",
    link: "/taller-digitopuntura",
    cta: "Inscribirme por $780 MXN",
    featured: false
  },
  {
    id: "dietoterapia-energetica",
    badge: "Salud Digestiva · Próxima Apertura",
    badgeColor: "bg-emerald-100 text-[#3e685f]",
    title: "Curso de Dietoterapia China y Nutrición de las 5 Estaciones",
    duration: "3 Módulos Temáticos",
    desc: "Descubre cómo armonizar el Bazo y Estómago según la naturaleza térmica de los alimentos (fríos, neutros, tibios y calientes) y cómo nutrirte en cada época del año según los 5 sabores.",
    highlights: [
      "Tablas térmicas de alimentos cotidianos",
      "Recetas medicinales y caldos reconfortantes",
      "Evita el frío interno y la inflamación digestiva"
    ],
    price: "Próximamente",
    link: "/diplomado#temario",
    cta: "Ver Temas en el Diplomado",
    featured: false
  }
];

export default function EducacionPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#faf8f5]">
      
      {/* HERO SECTION DE EDUCACIÓN */}
      <section className="relative py-14 md:py-20 px-4 bg-gradient-to-b from-[#fdfcf9] via-[#f7f4ed] to-[#faf8f5] border-b border-[#e8e1d5] overflow-hidden">
        <div className="container mx-auto max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#b86d36]">
            <span>Academia de Medicina Tradicional China &amp; Bienestar</span>
            <span className="text-[#cfbfab]" aria-hidden="true">·</span>
            <span>Estilo de Vida Yang Sheng</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#18313a] leading-[1.15] tracking-tight text-balance max-w-4xl mx-auto">
            Aprende el Arte del <span className="text-[#3e685f] italic">Autocuidado Milenario</span> para tu Vida Moderna
          </h1>

          <p className="text-base sm:text-lg text-[#4a5e66] font-light leading-relaxed max-w-2xl mx-auto">
            Programas formativos, diplomados y talleres prácticos diseñados para público general, terapeutas y amantes de la salud natural. Impartidos por la <strong>Lic. Elizabeth Gamiño</strong> (UNEVE · Cédula 15289838).
          </p>

          {/* Botones de navegación interna en la página de Cursos */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 text-xs">
            <a
              href="#autodiagnostico"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              <Sparkles size={13} />
              <span>Autodiagnóstico 100% Gratis</span>
            </a>
            <a
              href="#mini-curso-gratis"
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              <Video size={13} />
              <span>Mini-Curso Gratuito</span>
            </a>
            <a
              href="#catalogo-cursos"
              className="bg-[#18313a] hover:bg-[#12242b] text-white px-4 py-2 rounded-full font-semibold transition-all shadow-sm flex items-center gap-1.5"
            >
              <BookOpen size={13} />
              <span>Ver Catálogo de Cursos</span>
            </a>
            <Link
              href="/test-5-elementos"
              className="bg-white hover:bg-amber-50 text-[#18313a] px-4 py-2 rounded-full font-semibold transition-all border border-[#cfbfab] shadow-2xs flex items-center gap-1.5"
            >
              <Share2 size={13} className="text-[#b86d36]" />
              <span>Página para Redes Sociales</span>
              <ExternalLink size={12} className="text-[#5a6e75]" />
            </Link>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#5a6e75]">
            <div className="flex items-center gap-1.5 font-medium text-[#18313a]">
              <ShieldCheck size={16} className="text-[#3e685f]" />
              <span>Rigor Universitario (UNEVE)</span>
            </div>
            <span className="text-[#cfbfab]" aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5 font-medium text-[#18313a]">
              <Video size={16} className="text-[#b86d36]" />
              <span>Clases en Línea + Sesiones en Vivo</span>
            </div>
            <span className="text-[#cfbfab]" aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5 font-medium text-[#18313a]">
              <Bot size={16} className="text-[#3e685f]" />
              <span>Acompañamiento con Tutor Virtual 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN EMBEBIDA: ARQUITECTURA DEL AUTODIAGNÓSTICO EN EL APARTADO DE CURSOS */}
      {/* ========================================================================= */}
      <section id="autodiagnostico" className="py-14 md:py-20 px-4 bg-[#fbf9f5] border-b border-[#e8e1d5] scroll-mt-20">
        <div className="container mx-auto max-w-4xl space-y-8">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#b86d36]">
              <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-1 rounded-full flex items-center gap-1">
                🎁 100% GRATIS · PUERTA DE ENTRADA AL APRENDIZAJE
              </span>
              <span className="text-[#cfbfab]" aria-hidden="true">·</span>
              <span>Yin-Yang &amp; 5 Elementos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#18313a]">
              Autodiagnóstico Bioenergético: ¿Por Dónde Empezar?
            </h2>

            <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
              Antes de inscribirte a un taller o diplomado, responde este test de 10 preguntas. Conocerás qué órgano Zang-Fu pide equilibrio y obtendrás gratis <strong>TU PRESCRIPCIÓN PERSONALIZADA DE AUTOCUIDADO</strong> con la localización anatómica exacta de los puntos de digitopuntura que debes activar hoy mismo.
            </p>
          </div>

          {/* COMPONENTE INTERACTIVO COMPLETO EMBEBIDO */}
          <div className="relative">
            <AutodiagnosticoCincoElementos isEmbedded={true} />
          </div>

          {/* Enlace a versión independiente para redes sociales */}
          <div className="text-center pt-2">
            <Link
              href="/test-5-elementos"
              className="inline-flex items-center gap-1.5 text-xs text-[#5a6e75] hover:text-[#18313a] font-semibold underline"
            >
              <span>¿Quieres compartir este test con tu comunidad o bio de Instagram? Abre la versión independiente para redes sociales →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN CAPTACIÓN DE AUDIENCIA: MINI-CURSO GRATUITO EN VIDEO Y PDF */}
      {/* ========================================================================= */}
      <section id="mini-curso-gratis" className="py-14 md:py-20 px-4 bg-gradient-to-b from-[#fbf9f5] via-white to-[#fbf9f5] border-b border-[#e8e1d5] scroll-mt-20">
        <div className="container mx-auto max-w-4xl space-y-8">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
              🎁 ACCESO INMEDIATO SIN COSTO
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#18313a]">
              Mini-Curso: Los 5 Elementos y Digitopuntura en Casa
            </h2>
            <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
              Completa el formulario para enviarte de inmediato la <strong>videoclase de 15 minutos</strong> con la Lic. Elizabeth Gamiño y la <strong>guía oficial en PDF</strong> para ubicar tus resonadores maestros.
            </p>
          </div>

          <FormularioCaptacionCursoGratis
            source="educacion_seccion_destacada"
            titleOverride="Desbloquea tu Mini-Curso y Prescripción en PDF"
            subtitleOverride="Regístrate con tus datos para recibir tu acceso directo a la videoclase y la guía anatómica imprimible."
          />

        </div>
      </section>

      {/* ========================================================================= */}
      {/* CATÁLOGO DE PROGRAMAS Y CURSOS */}
      {/* ========================================================================= */}
      <section id="catalogo-cursos" className="py-20 px-4 bg-white border-b border-[#e8e1d5] scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3e685f] block">
              Oferta Académica Activa
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#18313a] italic">
              Nuestros Cursos y Diplomados
            </h2>
            <div className="w-16 h-0.5 bg-[#b86d36]/40 mx-auto my-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* CURSO DESTACADO: DIPLOMADO (Ocupa 12 columnas) */}
            <div className="lg:col-span-12 bg-[#faf8f5] rounded-[2.5rem] p-8 sm:p-12 border-2 border-[#3e685f] shadow-xl relative overflow-hidden flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="space-y-4 max-w-2xl text-left">
                <div className="inline-block bg-[#3e685f] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Inscripciones Abiertas · Cupo Limitado
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#18313a] leading-tight">
                  Diplomado de Principios de Medicina Tradicional China para la Vida Cotidiana
                </h3>
                <p className="text-xs sm:text-sm text-[#3e685f] font-semibold">
                  6 Módulos Completos · Tutor Virtual 24/7 · Diploma con Valor Curricular
                </p>
                <p className="text-sm text-[#4a5e66] font-light leading-relaxed">
                  El programa madre de nuestra academia. Aprende desde los orígenes del Qi, Yin-Yang y los 5 Elementos, hasta los 10 resonadores de digitopuntura sin agujas, lectura de lengua y dietoterapia energética.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#18313a] pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#3e685f] flex-shrink-0" />
                    <span>Sin necesidad de formación médica previa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#3e685f] flex-shrink-0" />
                    <span>Acceso de por vida a grabaciones y manuales PDF</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#3e685f] flex-shrink-0" />
                    <span>Resolución de dudas 24/7 con el Tutor Virtual</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#3e685f] flex-shrink-0" />
                    <span>Planes de pago flexibles en 1, 2 o 3 cuotas</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-[#e5dbcb] text-center space-y-4 w-full md:w-80 flex-shrink-0 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#b86d36] block">
                  Precio Promocional Preventa
                </span>
                <div>
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#18313a]">$3,490</span>
                  <span className="text-xs text-[#5a6e75]"> MXN</span>
                  <span className="text-xs text-stone-400 line-through block mt-0.5">Normal: $4,800 MXN</span>
                </div>
                <Link
                  href="/diplomado"
                  className="w-full bg-[#18313a] hover:bg-[#12242b] text-white py-3.5 px-6 rounded-full font-bold text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 text-center group"
                >
                  <span>Inscribirme Ahora</span>
                  <ArrowRight size={16} className="text-[#f4e1cb] transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/diplomado#temario"
                  className="text-xs text-[#3e685f] font-semibold hover:underline block"
                >
                  Ver temario de los 6 módulos
                </Link>
              </div>
            </div>

            {/* CURSOS Y TALLERES ADICIONALES */}
            {COURSES.slice(1).map((c) => (
              <div
                key={c.id}
                className="lg:col-span-6 bg-white rounded-3xl p-8 border border-[#e5dbcb] shadow-sm flex flex-col justify-between text-left"
              >
                <div>
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4 ${c.badgeColor}`}>
                    {c.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#18313a] mb-2">
                    {c.title}
                  </h3>
                  <span className="text-xs text-[#5a6e75] block mb-3 font-medium">
                    {c.duration}
                  </span>
                  <p className="text-xs sm:text-sm text-[#4a5e66] font-light leading-relaxed mb-6">
                    {c.desc}
                  </p>

                  <ul className="space-y-2 text-xs text-[#18313a] border-t border-[#f2ece2] pt-4 mb-6">
                    {c.highlights.map((h, hidx) => (
                      <li key={hidx} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-[#3e685f]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href={c.link}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#faf8f5] hover:bg-[#f2ece2] text-[#18313a] py-3 rounded-full text-xs font-bold transition-all border border-[#e5dbcb]"
                  >
                    <span>{c.cta}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}

            {/* BANNER DISTINTIVO: ASESORÍA PARA PROFESIONALES */}
            <div className="lg:col-span-12 bg-[#18313a] text-white rounded-[2.5rem] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#2c4955]">
              <div className="space-y-2 text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#f4e1cb] bg-[#2c4955] px-3 py-1 rounded-full inline-block">
                  Para Acupunturistas Titulados &amp; Dueños de Clínicas
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                  ¿Buscas Asesoría Normativa COFEPRIS y NOM-017 para tu Consultorio?
                </h3>
                <p className="text-xs sm:text-sm text-[#d6ccbe] font-light max-w-xl leading-relaxed">
                  Conoce nuestro programa independiente de <strong>Blindaje Legal 360°</strong> con plantillas de consentimiento informado, trámite de Aviso de Funcionamiento y gestión de RPBI.
                </p>
              </div>
              <Link
                href="/blindaje-legal-360"
                className="bg-[#faf8f5] hover:bg-white text-[#18313a] px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm transition-all whitespace-nowrap shadow-md active:scale-95 flex items-center gap-2 cursor-pointer flex-shrink-0"
              >
                <span>Ir a Asesoría Profesional</span>
                <ArrowRight size={16} className="text-[#3e685f]" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* METODOLOGÍA PEDAGÓGICA */}
      <section className="py-20 px-4 bg-[#faf8f5] border-b border-[#e8e1d5]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b86d36] block">
              Aprende Sin Miedo a la Complejidad
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#18313a] italic">
              Nuestra Filosofía de Enseñanza
            </h2>
            <div className="w-16 h-0.5 bg-[#3e685f]/40 mx-auto my-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-[#e5dbcb] space-y-3">
              <span className="font-serif text-3xl font-bold text-[#b86d36] block">01</span>
              <h3 className="font-serif font-bold text-lg text-[#18313a]">Analogías Cotidianas</h3>
              <p className="text-xs sm:text-sm text-[#4a5e66] font-light leading-relaxed">
                Explicamos conceptos milenarios como el Qi o los 5 Elementos con metáforas sencillas de tu vida diaria, evitando el lenguaje críptico o confuso.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#e5dbcb] space-y-3">
              <span className="font-serif text-3xl font-bold text-[#3e685f] block">02</span>
              <h3 className="font-serif font-bold text-lg text-[#18313a]">Práctica Inmediata</h3>
              <p className="text-xs sm:text-sm text-[#4a5e66] font-light leading-relaxed">
                Desde la primera semana aprendes a ubicar puntos de digitopuntura en tu propio cuerpo y a aplicar cambios sencillos en tu alimentación y descanso.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#e5dbcb] space-y-3">
              <span className="font-serif text-3xl font-bold text-[#18313a] block">03</span>
              <h3 className="font-serif font-bold text-lg text-[#18313a]">Acompañamiento Real</h3>
              <p className="text-xs sm:text-sm text-[#4a5e66] font-light leading-relaxed">
                Cuentas con la guía directa de la Lic. Elizabeth Gamiño y la asistencia de tu Tutor Virtual 24/7 para resolver cualquier duda que surja en tus lecturas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER FINAL DE ATENCIÓN Y CONTACTO EDUCATIVO */}
      <section className="py-16 px-4 bg-[#18313a] text-white text-center">
        <div className="container mx-auto max-w-3xl space-y-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#f4e1cb]">
            Comienza tu Camino en la Medicina Tradicional China
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white text-balance">
            ¿Tienes dudas sobre qué programa o taller es el indicado para ti?
          </h2>
          <p className="text-sm sm:text-base text-[#e5dbcb] font-light max-w-xl mx-auto leading-relaxed">
            Escríbenos directamente por WhatsApp y te orientamos con gusto sobre los contenidos, fechas y modalidades de inscripción.
          </p>
          <div className="pt-2">
            <WhatsAppButton
              className="inline-flex items-center justify-center gap-2.5 bg-[#fdfcf9] text-[#18313a] hover:bg-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-lg active:scale-95 cursor-pointer"
              showIcon={false}
              message="Hola Lic. Elizabeth, me gustaría recibir orientación sobre los cursos y diplomados de Medicina Tradicional China."
            >
              <MessageCircle size={18} className="text-[#25D366]" />
              <span>Consultar por WhatsApp</span>
            </WhatsAppButton>
          </div>
        </div>
      </section>

    </div>
  );
}
