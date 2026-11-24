import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { clinicData } from "@/data/clinic-data";
import {
  ArrowDown,
  Award,
  Check,
  Clock,
  FileCheck2,
  Heart,
  MapPin,
  MessageCircle,
  Scale,
  Sparkles,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FertilidadTriaje } from "@/components/FertilidadTriaje";

export const metadata: Metadata = {
  title:
    "Acupuntura para Fertilidad y Equilibrio Hormonal en CDMX | Centro de Acupuntura QI",
  description:
    "Acompañamiento clínico con Medicina Tradicional China para fertilidad natural, regulación hormonal, SOP y apoyo en FIV / Inseminación en CDMX. Realiza tu test inicial.",
  keywords: [
    "acupuntura para fertilidad cdmx",
    "acupuntura fertilidad fiv cdmx",
    "acupuntura equilibrio hormonal benito juarez",
    "acupuntura ovario poliquistico sop cdmx",
    "acupuntura receptividad endometrial",
    "centro de acupuntura qi fertilidad",
    "acupuntura embarazo natural cdmx",
  ],
  alternates: {
    canonical: "https://www.acupunturacdmx.com/fertilidad",
  },
  openGraph: {
    title:
      "Prepara tu cuerpo y equilibra tu ciclo para lograr un embarazo saludable | Centro de Acupuntura QI",
    description:
      "Acupuntura integrativa y salud reproductiva en Benito Juárez / Coyoacán, CDMX. Fertilidad natural y acompañamiento en FIV / Inseminación.",
    url: "https://www.acupunturacdmx.com/fertilidad",
    type: "website",
    locale: "es_MX",
  },
};

export default function FertilidadPage() {
  const treatmentSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: "Acupuntura Integrativa para Fertilidad y Equilibrio Hormonal en CDMX",
    description:
      "Acompañamiento clínico con Medicina Tradicional China para fertilidad natural, regulación hormonal y apoyo complementario en tratamientos de reproducción asistida (FIV / Inseminación).",
    url: "https://www.acupunturacdmx.com/fertilidad",
    relevantSpecialty: {
      "@type": "MedicalSpecialty",
      name: "Acupuncture",
    },
    indication: [
      {
        "@type": "MedicalIndication",
        name: "Fertilidad natural y regulación del ciclo menstrual",
      },
      {
        "@type": "MedicalIndication",
        name: "Acompañamiento complementario en FIV e Inseminación Artificial",
      },
      {
        "@type": "MedicalIndication",
        name: "Síndrome de Ovario Poliquístico (SOP) y endometriosis",
      },
    ],
    provider: {
      "@type": "MedicalBusiness",
      name: clinicData.name,
      alternateName: clinicData.alternateNames,
      telephone: clinicData.phoneFormatted,
      url: "https://www.acupunturacdmx.com",
      hasMap: clinicData.googleMapsUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${clinicData.address.streetAddress}, ${clinicData.address.neighborhood}`,
        addressLocality: clinicData.address.addressLocality,
        addressRegion: clinicData.address.addressRegion,
        postalCode: clinicData.address.postalCode,
        addressCountry: clinicData.address.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: clinicData.geo.latitude,
        longitude: clinicData.geo.longitude,
      },
    },
  };

  return (
    <div className="pt-20 min-h-screen bg-[#faf8f5] text-[#142329]">
      <JsonLd schema={treatmentSchema} />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center bg-gradient-to-b from-[#fdfcf9] via-[#f4efe6] to-[#faf8f5] py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-b border-[#e5dbcb]">
        <div className="max-w-4xl mx-auto w-full text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-[#3e685f] mb-4 sm:mb-5">
            Acupuntura Integrativa y Salud Reproductiva en CDMX
          </p>

          <h1 className="text-[2rem] sm:text-5xl lg:text-[3.5rem] font-serif font-bold text-[#12242b] leading-[1.14] tracking-tight text-balance mb-5 sm:mb-6">
            Prepara tu cuerpo y equilibra tu ciclo para lograr un embarazo
            saludable
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#4a5e66] font-light leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
            Acompañamiento clínico con Medicina Tradicional China para
            fertilidad natural, regulación hormonal y apoyo complementario en
            tratamientos de reproducción asistida (FIV / Inseminación).
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-xl sm:max-w-none mx-auto">
            <a
              href="#test-fertilidad"
              className="min-h-[54px] bg-[#18313a] hover:bg-[#12242b] text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-md shadow-[#18313a]/15 active:scale-98 flex items-center justify-center gap-2.5 whitespace-nowrap"
            >
              <span>Hacer Test de Fertilidad y Ciclo</span>
              <ArrowDown size={18} className="text-[#f4e1cb] flex-shrink-0" />
            </a>

            <WhatsAppButton
              className="min-h-[54px] bg-white hover:bg-[#f2ece2] text-[#18313a] border border-[#cfbfab] px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-2xs active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
              message="Hola, me gustaría consultar sobre el acompañamiento con acupuntura para fertilidad y equilibrio hormonal en CDMX."
              showIcon={false}
            >
              <MessageCircle
                size={18}
                className="text-[#3e685f] flex-shrink-0"
              />
              <span>Consultar por WhatsApp</span>
            </WhatsAppButton>
          </div>

          <div className="mt-8 sm:mt-10 pt-6 border-t border-[#e5dbcb]/80 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#4a5e66]">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#18313a]">
              <MapPin size={14} className="text-[#b86d36] flex-shrink-0" />
              Centro de Acupuntura QI · Benito Juárez / Coyoacán, CDMX
            </span>
            <span className="hidden sm:inline text-[#cfbfab]" aria-hidden="true">
              ·
            </span>
            <span>Lic. Elizabeth Gamiño · Céd. Prof. 15289838</span>
          </div>
        </div>
      </section>

      {/* 2. TEST INTERACTIVO DE TRIAJE EN FERTILIDAD (3 preguntas) */}
      <section
        id="test-fertilidad"
        className="scroll-mt-24 py-14 sm:py-20 px-4 sm:px-6 bg-[#faf8f5] border-b border-[#e5dbcb]"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b86d36] mb-2">
              Evaluación de Etapa y Ciclo
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#12242b] tracking-tight leading-snug text-balance mb-3">
              Test de Fertilidad y Ciclo (3 preguntas)
            </h2>
            <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
              Cuéntanos brevemente en qué momento te encuentras para orientarte
              sobre cómo acompaña la acupuntura clínica tu proceso reproductivo.
            </p>
          </div>

          <FertilidadTriaje />
        </div>
      </section>

      {/* 3. ¿CÓMO ES EL PROCESO CLÍNICO Y QUÉ INCLUYE CADA CONSULTA? */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-b border-[#e5dbcb]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3e685f] mb-2">
              Método Diagnóstico Japonés Ryodoraku &amp; Seguimiento Por Fases
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#12242b] tracking-tight leading-snug text-balance mb-3">
              ¿Cómo funciona nuestro protocolo y qué incluye cada consulta?
            </h2>
            <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
              Atendemos exclusivamente{" "}
              <strong className="text-[#18313a] font-semibold">
                1 paciente por hora
              </strong>{" "}
              (sin cubículos simultáneos) los días{" "}
              <strong className="text-[#18313a] font-semibold">
                Lunes, Martes, Jueves y Viernes
              </strong>{" "}
              (cerrado miércoles, sábado y domingo).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Bloque 1: Primera Consulta + Ryodoraku */}
            <div className="bg-[#faf8f5] p-6 sm:p-7 rounded-3xl border border-[#e5dbcb]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#f2ece2] text-[#b86d36] flex items-center justify-center flex-shrink-0">
                  <Heart size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#12242b]">
                  Primera Cita + 1.ª Sesión (
                  <span className="tabular-nums">$900 MXN · 1 hora</span>)
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
                Incluye historia clínica detallada, análisis de tu ciclo o
                protocolo médico y una evaluación objetiva mediante el{" "}
                <strong className="text-[#18313a] font-semibold">
                  método diagnóstico japonés Ryodoraku
                </strong>
                , que mide el estado energético y neurovegetativo de los
                meridianos para diseñar un protocolo{" "}
                <strong className="text-[#18313a] font-semibold">
                  100% personalizado desde el inicio
                </strong>{" "}
                (en lugar de aplicar puntos genéricos), más tu primera sesión.
              </p>
            </div>

            {/* Bloque 2: Duración y Exclusividad */}
            <div className="bg-[#faf8f5] p-6 sm:p-7 rounded-3xl border border-[#e5dbcb]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#f2ece2] text-[#18313a] flex items-center justify-center flex-shrink-0">
                  <Clock size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#12242b]">
                  1 Paciente por Hora · Sin Cubículos Simultáneos
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
                Cada consulta tiene una duración de{" "}
                <strong className="text-[#18313a] font-semibold tabular-nums">
                  60 minutos (1 hora)
                </strong>{" "}
                en un consultorio privado y sereno en horarios de{" "}
                <strong className="text-[#18313a] font-semibold">
                  Lunes, Martes, Jueves y Viernes
                </strong>{" "}
                (cerrado miércoles, sábado y domingo), con material 100% estéril
                y desechable.
              </p>
            </div>

            {/* Bloque 3: Sesión Subsecuente */}
            <div className="bg-[#faf8f5] p-6 sm:p-7 rounded-3xl border border-[#e5dbcb]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#f2ece2] text-[#3e685f] flex items-center justify-center flex-shrink-0">
                  <Sparkles size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#12242b]">
                  Sesión Subsecuente Individual (
                  <span className="tabular-nums">$850 MXN</span>)
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
                Seguimiento de{" "}
                <strong className="text-[#18313a] font-semibold tabular-nums">
                  60 minutos
                </strong>{" "}
                acorde a la fase de tu ciclo menstrual (folicular, ovulatoria o
                lútea) o al calendario de transferencia embrionaria de tu
                clínica de fertilidad.
              </p>
            </div>

            {/* Bloque 4: Base Normativa */}
            <div className="bg-[#faf8f5] p-6 sm:p-7 rounded-3xl border border-[#e5dbcb]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#f2ece2] text-[#18313a] flex items-center justify-center flex-shrink-0">
                  <FileCheck2 size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#12242b]">
                  Base Normativa (NOM-017-SSA3-2012)
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
                De acuerdo con la Norma Oficial Mexicana de Acupuntura
                (NOM-017-SSA3-2012), se sugiere un mínimo de{" "}
                <strong className="text-[#18313a] font-semibold">
                  5 sesiones
                </strong>{" "}
                para conformar un ciclo completo de tratamiento y valorar la
                respuesta clínica del organismo. En fertilidad recomendamos{" "}
                <strong className="text-[#18313a] font-semibold">
                  10 sesiones
                </strong>{" "}
                para acompañar al menos dos ciclos ovulatorios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TARIFAS Y PLANES TRANSPARENTES */}
      <section
        id="tarifas"
        className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#f4efe6]/70 to-[#faf8f5] border-b border-[#e5dbcb]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b86d36] mb-2">
              Inversión Transparente
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#12242b] tracking-tight leading-snug text-balance mb-3">
              Tarifas y Planes de Acompañamiento
            </h2>
            <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
              Precios finales netos en pesos mexicanos (MXN) con consultas de{" "}
              <span className="tabular-nums font-medium text-[#18313a]">
                60 minutos
              </span>
              . Si inicias con tu valoración de{" "}
              <span className="tabular-nums font-medium text-[#18313a]">
                $900 MXN
              </span>{" "}
              y decides adquirir un paquete ese mismo día, se toma a cuenta.
            </p>
          </div>

          {/* Consultas Individuales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-6">
            <div className="bg-white rounded-3xl border border-[#e5dbcb] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-2xs">
              <div className="space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#3e685f]">
                  Duración: 60 minutos · Inicio de acompañamiento
                </p>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#12242b]">
                  Primera Valoración con Diagnóstico Ryodoraku + 1.ª Sesión
                </h3>
                <p className="text-xs sm:text-sm text-[#4a5e66] font-light">
                  Historia clínica reproductiva, evaluación japonesa Ryodoraku,
                  protocolo a medida y 1.ª sesión. Se toma a cuenta si eliges
                  paquete ese día.
                </p>
              </div>
              <div className="flex sm:flex-col items-baseline sm:items-end justify-between gap-3 flex-shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-[#f2ece2]">
                <div className="text-right">
                  <span className="text-3xl font-serif font-bold text-[#18313a] tabular-nums">
                    $900
                  </span>{" "}
                  <span className="text-xs font-semibold text-[#4a5e66]">
                    MXN
                  </span>
                </div>
                <WhatsAppButton
                  className="min-h-[44px] bg-[#faf8f5] hover:bg-[#f2ece2] text-[#18313a] border border-[#cfbfab] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  message="Hola, quiero agendar mi Primera Valoración con Diagnóstico Ryodoraku + 1.ª Sesión ($900 MXN) para fertilidad."
                  showIcon={false}
                >
                  <MessageCircle size={16} className="text-[#3e685f]" />
                  <span>Agendar Valoración</span>
                </WhatsAppButton>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-[#e5dbcb] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-2xs">
              <div className="space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#4a5e66]">
                  Duración: 60 minutos · Seguimiento por fase
                </p>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#12242b]">
                  Sesión Subsecuente Individual
                </h3>
                <p className="text-xs sm:text-sm text-[#4a5e66] font-light">
                  Sesión privada (1 paciente por hora) adaptada a tu fase
                  folicular, ovulatoria, lútea o calendario de FIV /
                  Inseminación.
                </p>
              </div>
              <div className="flex sm:flex-col items-baseline sm:items-end justify-between gap-3 flex-shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-[#f2ece2]">
                <div className="text-right">
                  <span className="text-3xl font-serif font-bold text-[#18313a] tabular-nums">
                    $850
                  </span>{" "}
                  <span className="text-xs font-semibold text-[#4a5e66]">
                    MXN
                  </span>
                </div>
                <WhatsAppButton
                  className="min-h-[44px] bg-[#faf8f5] hover:bg-[#f2ece2] text-[#18313a] border border-[#cfbfab] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  message="Hola, quiero agendar una Sesión Subsecuente Individual ($850 MXN) de seguimiento en fertilidad."
                  showIcon={false}
                >
                  <MessageCircle size={16} className="text-[#3e685f]" />
                  <span>Agendar Sesión</span>
                </WhatsAppButton>
              </div>
            </div>
          </div>

          {/* Paquetes de Tratamiento (3 tarjetas comparativas) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Tarjeta 1 (Destacada - Recomendado en Fertilidad): Tratamiento Completo General / Fertilidad */}
            <div className="bg-[#18313a] text-white rounded-3xl border-2 border-[#b86d36] p-6 sm:p-8 flex flex-col justify-between shadow-warm relative">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#f4e1cb]">
                    Recomendado en Fertilidad · 10 sesiones
                  </p>
                  <Award size={18} className="text-[#f4e1cb] flex-shrink-0" />
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4">
                  Tratamiento Completo General / Fertilidad
                </h3>

                <div className="pb-5 mb-5 border-b border-[#2c4955]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-white tabular-nums">
                      $6,900
                    </span>
                    <span className="text-sm font-semibold text-[#d6ccbe]">
                      MXN
                    </span>
                  </div>
                  <p className="text-sm text-[#f4e1cb] font-semibold mt-1.5 tabular-nums">
                    $690 MXN por sesión — Ahorras $1,650 MXN
                  </p>
                  <p className="text-xs text-[#d6ccbe] mt-1">
                    Calculado sobre inicio de tratamiento ($900 + 9 × $850)
                  </p>
                </div>

                <ul className="space-y-3 text-sm text-[#e5dbcb] mb-6">
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#f4e1cb] mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Acompañamiento integral de{" "}
                      <strong className="text-white">10 sesiones</strong> de 60
                      minutos (al menos dos ciclos ovulatorios)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#f4e1cb] mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Diagnóstico Ryodoraku + seguimiento folicular, ovulatorio,
                      lúteo o calendario FIV / IA
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#f4e1cb] mt-0.5 flex-shrink-0"
                    />
                    <span>Vigencia de 90 días a partir de la 1.ª sesión</span>
                  </li>
                </ul>

                <div className="rounded-2xl bg-[#12242b] border border-[#2c4955] p-3.5 mb-7 text-xs sm:text-sm text-[#f4e1cb] leading-relaxed">
                  Si inicias con tu valoración de{" "}
                  <strong className="text-white tabular-nums">$900 MXN</strong>{" "}
                  y decides adquirir el paquete ese día,{" "}
                  <strong className="text-white">se toma a cuenta</strong>.
                </div>
              </div>

              <WhatsAppButton
                className="w-full min-h-[50px] bg-[#15803d] hover:bg-[#166534] text-white font-bold text-sm sm:text-base px-5 py-3.5 rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                message="Hola, me interesa agendar mi valoración para el Tratamiento Completo General / Fertilidad (10 sesiones por $6,900 MXN)."
                showIcon={false}
              >
                <MessageCircle size={18} />
                <span>Elegir Tratamiento de 10 Sesiones</span>
              </WhatsAppButton>
            </div>

            {/* Tarjeta 2: Paquete Acupuntura General (5 sesiones) */}
            <div className="bg-white rounded-3xl border border-[#e5dbcb] p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#b86d36] mb-2">
                  Ciclo mínimo sugerido · 5 sesiones
                </p>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#12242b] mb-4">
                  Paquete Acupuntura General
                </h3>

                <div className="pb-5 mb-5 border-b border-[#f2ece2]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-[#18313a] tabular-nums">
                      $3,900
                    </span>
                    <span className="text-sm font-semibold text-[#4a5e66]">
                      MXN
                    </span>
                  </div>
                  <p className="text-sm text-[#3e685f] font-semibold mt-1.5 tabular-nums">
                    $780 MXN por sesión — Ahorras $400 MXN
                  </p>
                  <p className="text-xs text-[#4a5e66] mt-1">
                    Calculado sobre inicio de tratamiento ($900 + 4 × $850)
                  </p>
                </div>

                <ul className="space-y-3 text-sm text-[#4a5e66] mb-8">
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>
                      <strong className="text-[#18313a]">5 sesiones</strong>{" "}
                      individuales de 60 minutos (1 paciente por hora)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Ideal para preparación inicial o regulación menstrual
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>Vigencia de 60 días a partir de la 1.ª sesión</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Tu consulta inicial de{" "}
                      <span className="tabular-nums">$900 MXN</span> se toma a
                      cuenta
                    </span>
                  </li>
                </ul>
              </div>

              <WhatsAppButton
                className="w-full min-h-[48px] bg-[#18313a] hover:bg-[#12242b] text-white font-bold text-sm px-5 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
                message="Hola, me interesa agendar mi valoración y tomar el Paquete Acupuntura General (5 sesiones por $3,900 MXN)."
                showIcon={false}
              >
                <MessageCircle size={17} className="text-[#f4e1cb]" />
                <span>Elegir Paquete de 5 Sesiones</span>
              </WhatsAppButton>
            </div>

            {/* Tarjeta 3: Protocolo Intensivo Parálisis Facial (10 sesiones) */}
            <div className="bg-white rounded-3xl border border-[#e5dbcb] p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#3e685f] mb-2">
                  Protocolo especializado · 10 sesiones
                </p>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#12242b] mb-4">
                  Protocolo Intensivo Parálisis Facial
                </h3>

                <div className="pb-5 mb-5 border-b border-[#f2ece2]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-[#18313a] tabular-nums">
                      $4,900
                    </span>
                    <span className="text-sm font-semibold text-[#4a5e66]">
                      MXN
                    </span>
                  </div>
                  <p className="text-sm text-[#3e685f] font-semibold mt-1.5 tabular-nums">
                    $490 MXN por sesión — Ahorras $3,650 MXN
                  </p>
                  <p className="text-xs text-[#4a5e66] mt-1">
                    Exclusivo para rehabilitación facial (Bell / periférica)
                  </p>
                </div>

                <ul className="space-y-3 text-sm text-[#4a5e66] mb-8">
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>
                      <strong className="text-[#18313a]">10 sesiones</strong> de
                      60 minutos con electroacupuntura clínica
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>Valoración inicial con método Ryodoraku</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>Vigencia de 90 días a partir de la 1.ª sesión</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Consulta inicial de{" "}
                      <span className="tabular-nums">$900 MXN</span> tomable a
                      cuenta
                    </span>
                  </li>
                </ul>
              </div>

              <Link
                href="/paralisis-facial"
                className="w-full min-h-[48px] bg-[#faf8f5] hover:bg-[#f2ece2] text-[#18313a] border border-[#cfbfab] font-bold text-sm px-5 py-3.5 rounded-full transition-all flex items-center justify-center gap-2"
              >
                <span>Ver Protocolo Parálisis Facial</span>
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center text-xs sm:text-sm text-[#4a5e66] max-w-3xl mx-auto leading-relaxed">
            De acuerdo con la Norma Oficial Mexicana de Acupuntura
            (NOM-017-SSA3-2012), se sugiere un mínimo de 5 sesiones para
            conformar un ciclo completo de tratamiento y valorar la respuesta
            clínica del organismo.
          </p>
        </div>
      </section>

      {/* 5. NOTA LEGAL, COMERCIAL Y SANITARIA */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 bg-[#f4efe6] text-[#4a5e66]">
        <div className="max-w-5xl mx-auto space-y-5">
          <div className="bg-white/80 rounded-2xl border border-[#e5dbcb] p-5 sm:p-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#18313a]">
              <Scale size={15} className="text-[#b86d36] flex-shrink-0" />
              <span>Nota Legal, Comercial y Sanitaria</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs leading-relaxed">
              <p>
                <strong className="text-[#18313a]">
                  Transparencia comercial (PROFECO):
                </strong>{" "}
                Precios finales netos expresados en pesos mexicanos (MXN). Cada
                consulta tiene una duración de 60 minutos. Los paquetes de 5 y
                10 sesiones son prepagados, personales e intransferibles, con
                vigencia de 60 días (paquete de 5) y 90 días (paquete de 10) a
                partir de la primera sesión. Si inicias con tu valoración de
                $900 MXN y decides adquirir un paquete ese mismo día, se toma a
                cuenta.
              </p>

              <p>
                <strong className="text-[#18313a]">Aviso sanitario:</strong>{" "}
                Práctica terapéutica regulada conforme a la NOM-017-SSA3-2012.
                Los resultados y tiempos de evolución varían según el estado
                clínico y apego de cada paciente, sin prometer curas
                garantizadas.
              </p>
            </div>

            <div className="pt-3 border-t border-[#e5dbcb] flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#5a6e75]">
              <span>
                Centro de Acupuntura QI ·{" "}
                <strong className="text-[#18313a]">
                  {clinicData.practitioner.formalName}
                </strong>{" "}
                ({clinicData.practitioner.university}) ·{" "}
                {clinicData.practitioner.license} ·{" "}
                {clinicData.practitioner.advertisingPermit}
              </span>

              <nav
                aria-label="Navegación rápida de especialidades"
                className="flex flex-wrap items-center gap-3 font-medium text-[#18313a]"
              >
                <Link
                  href="/"
                  className="hover:text-[#3e685f] underline underline-offset-4"
                >
                  Inicio
                </Link>
                <span aria-hidden="true" className="text-[#cfbfab]">
                  ·
                </span>
                <Link
                  href="/paralisis-facial"
                  className="hover:text-[#3e685f] underline underline-offset-4"
                >
                  Parálisis Facial
                </Link>
                <span aria-hidden="true" className="text-[#cfbfab]">
                  ·
                </span>
                <Link
                  href="/fertilidad"
                  className="text-[#3e685f] underline underline-offset-4"
                >
                  Fertilidad
                </Link>
                <span aria-hidden="true" className="text-[#cfbfab]">
                  ·
                </span>
                <Link
                  href="/aviso-de-privacidad"
                  className="hover:text-[#3e685f] underline underline-offset-4"
                >
                  Aviso de Privacidad
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
