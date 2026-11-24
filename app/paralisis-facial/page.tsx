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
  MapPin,
  MessageCircle,
  Scale,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ParalisisFacialTriaje } from "@/components/ParalisisFacialTriaje";

export const metadata: Metadata = {
  title:
    "Parálisis Facial y Parálisis de Bell con Acupuntura Clínica en CDMX | Centro de Acupuntura QI",
  description:
    "Recupera la movilidad y simetría de tu rostro con Acupuntura Clínica en Benito Juárez / Coyoacán, CDMX. Realiza nuestro test rápido de valoración y agenda tu consulta.",
  keywords: [
    "acupuntura para parálisis facial cdmx",
    "tratamiento parálisis de bell cdmx",
    "parálisis facial periférica acupuntura",
    "electroacupuntura parálisis facial benito juárez",
    "clínica parálisis facial coyoacán",
    "centro de acupuntura qi",
    "tratamiento parálisis facial precio cdmx",
  ],
  alternates: {
    canonical: "https://www.acupunturacdmx.com/paralisis-facial",
  },
  openGraph: {
    title:
      "Recupera la movilidad y simetría de tu rostro con Acupuntura Clínica | Centro de Acupuntura QI",
    description:
      "Atención oportuna y personalizada para Parálisis de Bell y parálisis facial periférica en Benito Juárez / Coyoacán, CDMX.",
    url: "https://www.acupunturacdmx.com/paralisis-facial",
    type: "website",
    locale: "es_MX",
  },
};

export default function ParalisisFacialPage() {
  const treatmentSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: "Protocolo Clínico para Parálisis Facial con Acupuntura en CDMX",
    description:
      "Atención oportuna y personalizada para Parálisis de Bell y parálisis facial periférica con acupuntura clínica y electroacupuntura bajo enfoque de Medicina Tradicional China.",
    url: "https://www.acupunturacdmx.com/paralisis-facial",
    relevantSpecialty: {
      "@type": "MedicalSpecialty",
      name: "Acupuncture",
    },
    indication: [
      {
        "@type": "MedicalIndication",
        name: "Parálisis de Bell",
      },
      {
        "@type": "MedicalIndication",
        name: "Parálisis facial periférica",
      },
      {
        "@type": "MedicalIndication",
        name: "Secuelas de parálisis facial y sincinesias",
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

      {/* 1. HERO SECTION (Primera pantalla sin distracciones) */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center bg-gradient-to-b from-[#fdfcf9] via-[#f4efe6] to-[#faf8f5] py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-b border-[#e5dbcb]">
        <div className="max-w-4xl mx-auto w-full text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-[#3e685f] mb-4 sm:mb-5">
            Protocolo Clínico Especializado en CDMX
          </p>

          <h1 className="text-[2rem] sm:text-5xl lg:text-[3.5rem] font-serif font-bold text-[#12242b] leading-[1.14] tracking-tight text-balance mb-5 sm:mb-6">
            Recupera la movilidad y simetría de tu rostro con Acupuntura Clínica
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#4a5e66] font-light leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
            Atención oportuna y personalizada para Parálisis de Bell y parálisis
            facial periférica. Estimulación neural segura bajo enfoque de
            Medicina Tradicional China.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-xl sm:max-w-none mx-auto">
            <a
              href="#test-triaje"
              className="min-h-[54px] bg-[#18313a] hover:bg-[#12242b] text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-md shadow-[#18313a]/15 active:scale-98 flex items-center justify-center gap-2.5 whitespace-nowrap"
            >
              <span>Realizar Test de Valoración Rápida</span>
              <ArrowDown size={18} className="text-[#f4e1cb] flex-shrink-0" />
            </a>

            <WhatsAppButton
              className="min-h-[54px] bg-white hover:bg-[#f2ece2] text-[#18313a] border border-[#cfbfab] px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-2xs active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
              message="Hola, necesito información y quiero agendar una cita para tratamiento de parálisis facial en CDMX."
              showIcon={false}
            >
              <MessageCircle size={18} className="text-[#3e685f] flex-shrink-0" />
              <span>Agendar Cita por WhatsApp</span>
            </WhatsAppButton>
          </div>

          <div className="mt-8 sm:mt-10 pt-6 border-t border-[#e5dbcb]/80 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#4a5e66]">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#18313a]">
              <MapPin size={14} className="text-[#b86d36] flex-shrink-0" />
              Centro de Acupuntura QI · Zona Benito Juárez / Coyoacán, CDMX
            </span>
            <span className="hidden sm:inline text-[#cfbfab]" aria-hidden="true">
              ·
            </span>
            <span>Lic. Elizabeth Gamiño · Céd. Prof. 15289838</span>
          </div>
        </div>
      </section>

      {/* 2. TEST INTERACTIVO DE TRIAJE (Evaluación de Ventana Terapéutica - 3 preguntas) */}
      <section
        id="test-triaje"
        className="scroll-mt-24 py-14 sm:py-20 px-4 sm:px-6 bg-[#faf8f5] border-b border-[#e5dbcb]"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b86d36] mb-2">
              Evaluación de Ventana Terapéutica
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#12242b] tracking-tight leading-snug text-balance mb-3">
              Test de Valoración Rápida (3 preguntas)
            </h2>
            <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
              Responde en menos de 1 minuto para recibir una orientación inicial
              acorde a tu tiempo de evolución y enviar tus datos directamente por
              WhatsApp.
            </p>
          </div>

          <ParalisisFacialTriaje />
        </div>
      </section>

      {/* 3. ¿CÓMO FUNCIONA NUESTRO PROTOCOLO Y QUÉ INCLUYE CADA CITA? */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-b border-[#e5dbcb]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3e685f] mb-2">
              Atención Clínica Estructurada
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#12242b] tracking-tight leading-snug text-balance mb-3">
              ¿Cómo funciona nuestro protocolo y qué incluye cada cita?
            </h2>
            <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
              Cada consulta está diseñada para darte claridad clínica, trato
              humano y un seguimiento ordenado de tu recuperación facial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Bloque 1: Duración */}
            <div className="bg-[#faf8f5] p-6 sm:p-7 rounded-3xl border border-[#e5dbcb]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#f2ece2] text-[#18313a] flex items-center justify-center flex-shrink-0">
                  <Clock size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#12242b]">
                  Duración: 60 minutos (1 hora)
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
                Cada consulta tiene una duración de{" "}
                <strong className="text-[#18313a] font-semibold tabular-nums">
                  60 minutos (1 hora)
                </strong>{" "}
                de atención individualizada, en consultorio privado y con
                material 100% estéril y desechable.
              </p>
            </div>

            {/* Bloque 2: Primera Cita */}
            <div className="bg-[#faf8f5] p-6 sm:p-7 rounded-3xl border border-[#e5dbcb]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#f2ece2] text-[#b86d36] flex items-center justify-center flex-shrink-0">
                  <Stethoscope size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#12242b]">
                  Primera Cita + 1.ª Sesión (
                  <span className="tabular-nums">$900 MXN</span>)
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
                Historia clínica completa, evaluación del grado de afectación
                neural bajo Medicina Tradicional China y tu primera sesión
                terapéutica aplicada en la misma visita.
              </p>
            </div>

            {/* Bloque 3: Sesión Subsecuente */}
            <div className="bg-[#faf8f5] p-6 sm:p-7 rounded-3xl border border-[#e5dbcb]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#f2ece2] text-[#3e685f] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#12242b]">
                  Sesión Subsecuente (
                  <span className="tabular-nums">$850 MXN</span>)
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
                Seguimiento evolutivo de movilidad facial y ajuste de puntos de
                electroacupuntura / acupuntura clínica según los avances de
                parpadeo, tono y sonrisa.
              </p>
            </div>

            {/* Bloque 4: Criterio Normativo */}
            <div className="bg-[#faf8f5] p-6 sm:p-7 rounded-3xl border border-[#e5dbcb]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#f2ece2] text-[#18313a] flex items-center justify-center flex-shrink-0">
                  <FileCheck2 size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#12242b]">
                  Criterio Normativo (NOM-017-SSA3-2012)
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
                De acuerdo con la Norma Oficial Mexicana de Acupuntura, se
                sugiere un mínimo de{" "}
                <strong className="text-[#18313a] font-semibold">
                  5 sesiones
                </strong>{" "}
                para conformar un ciclo de tratamiento; en parálisis facial, por
                la demanda de regeneración neural, recomendamos nuestro protocolo
                intensivo de{" "}
                <strong className="text-[#18313a] font-semibold">
                  10 sesiones
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TARIFAS Y PLANES TRANSPARENTES (Tarjetas comparativas) */}
      <section
        id="tarifas"
        className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#f4efe6]/70 to-[#faf8f5] border-b border-[#e5dbcb]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b86d36] mb-2">
              Inversión Clara Desde el Inicio
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#12242b] tracking-tight leading-snug text-balance mb-3">
              Tarifas y Planes Transparentes
            </h2>
            <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
              Precios finales en pesos mexicanos, sin cargos ocultos. Si inicias
              con tu consulta de valoración y decides tomar un paquete, tu pago
              inicial se toma a cuenta.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Tarjeta 1: Primera Valoración + 1.ª Sesión */}
            <div className="bg-white rounded-3xl border border-[#e5dbcb] p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#3e685f] mb-2">
                  Inicio de tratamiento · 1 hora
                </p>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#12242b] mb-4">
                  Primera Valoración + 1.ª Sesión
                </h3>

                <div className="pb-5 mb-5 border-b border-[#f2ece2]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-[#18313a] tabular-nums">
                      $900
                    </span>
                    <span className="text-sm font-semibold text-[#4a5e66]">
                      MXN
                    </span>
                  </div>
                  <p className="text-xs text-[#4a5e66] mt-1">
                    Consulta de 60 minutos · Sesión subsecuente individual{" "}
                    <span className="tabular-nums font-medium">$850 MXN</span>
                  </p>
                </div>

                <ul className="space-y-3 text-sm text-[#4a5e66] mb-8">
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>Historia clínica completa y valoración integral</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>Diagnóstico bajo Medicina Tradicional China</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>Primera sesión terapéutica incluida</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Tomable a cuenta si decides adquirir un paquete ese día
                    </span>
                  </li>
                </ul>
              </div>

              <WhatsAppButton
                className="w-full min-h-[48px] bg-[#faf8f5] hover:bg-[#f2ece2] text-[#18313a] border border-[#cfbfab] font-bold text-sm px-5 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
                message="Hola, quiero agendar mi Primera Valoración + 1.ª Sesión ($900 MXN) para parálisis facial."
                showIcon={false}
              >
                <MessageCircle size={17} className="text-[#3e685f]" />
                <span>Agendar Valoración ($900)</span>
              </WhatsAppButton>
            </div>

            {/* Tarjeta 2 (Destacada - Más elegida): Protocolo Intensivo Parálisis Facial */}
            <div className="bg-[#18313a] text-white rounded-3xl border-2 border-[#b86d36] p-6 sm:p-8 flex flex-col justify-between shadow-warm relative">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#f4e1cb]">
                    Más elegida · 10 sesiones
                  </p>
                  <Award size={18} className="text-[#f4e1cb] flex-shrink-0" />
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4">
                  Protocolo Intensivo Parálisis Facial
                </h3>

                <div className="pb-5 mb-5 border-b border-[#2c4955]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-white tabular-nums">
                      $4,900
                    </span>
                    <span className="text-sm font-semibold text-[#d6ccbe]">
                      MXN
                    </span>
                  </div>
                  <p className="text-sm text-[#f4e1cb] font-semibold mt-1.5 tabular-nums">
                    $490 MXN por sesión — Ahorras $3,650 MXN
                  </p>
                  <p className="text-xs text-[#d6ccbe] mt-1">
                    Respecto a iniciar pagando 10 sesiones individuales
                  </p>
                </div>

                <ul className="space-y-3 text-sm text-[#e5dbcb] mb-6">
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#f4e1cb] mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Ciclo completo de{" "}
                      <strong className="text-white">10 sesiones</strong> de 1
                      hora c/u
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#f4e1cb] mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Acupuntura clínica y electroacupuntura adaptada a tu
                      evolución
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#f4e1cb] mt-0.5 flex-shrink-0"
                    />
                    <span>Vigencia de 90 días para completar tu protocolo</span>
                  </li>
                </ul>

                <div className="rounded-2xl bg-[#12242b] border border-[#2c4955] p-3.5 mb-7 text-xs sm:text-sm text-[#f4e1cb] leading-relaxed">
                  Si inicias con tu consulta de{" "}
                  <strong className="text-white tabular-nums">$900 MXN</strong>{" "}
                  y decides tomar el protocolo,{" "}
                  <strong className="text-white">se te toma a cuenta</strong>.
                </div>
              </div>

              <WhatsAppButton
                className="w-full min-h-[50px] bg-[#15803d] hover:bg-[#166534] text-white font-bold text-sm sm:text-base px-5 py-3.5 rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                message="Hola, me interesa agendar mi valoración para el Protocolo Intensivo de Parálisis Facial (10 sesiones por $4,900 MXN)."
                showIcon={false}
              >
                <MessageCircle size={18} />
                <span>Elegir Protocolo de 10 Sesiones</span>
              </WhatsAppButton>
            </div>

            {/* Tarjeta 3: Paquete Acupuntura General */}
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
                    Ciclo base sugerido conforme a la NOM-017-SSA3-2012
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
                      individuales de 60 minutos
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>Seguimiento clínico en cada consulta</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>Vigencia de 60 días para utilizar tus sesiones</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check
                      size={17}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Tu consulta inicial de{" "}
                      <span className="tabular-nums">$900 MXN</span> también se
                      toma a cuenta
                    </span>
                  </li>
                </ul>
              </div>

              <WhatsAppButton
                className="w-full min-h-[48px] bg-[#18313a] hover:bg-[#12242b] text-white font-bold text-sm px-5 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
                message="Hola, me interesa agendar mi valoración y tomar el Paquete de Acupuntura General (5 sesiones por $3,900 MXN)."
                showIcon={false}
              >
                <MessageCircle size={17} className="text-[#f4e1cb]" />
                <span>Elegir Paquete de 5 Sesiones</span>
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NOTA LEGAL, COMERCIAL Y SANITARIA */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 bg-[#f4efe6] text-[#4a5e66]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 rounded-2xl border border-[#e5dbcb] p-5 sm:p-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#18313a]">
              <Scale size={15} className="text-[#b86d36] flex-shrink-0" />
              <span>Información Comercial y Sanitaria</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs leading-relaxed">
              <p>
                <strong className="text-[#18313a]">
                  Transparencia comercial (PROFECO):
                </strong>{" "}
                Todos los precios están expresados en pesos mexicanos (MXN) y
                son precios finales netos al paciente. Los paquetes prepagados
                son personales e intransferibles (vigencia de 90 días para
                protocolos de 10 sesiones y 60 días para paquetes de 5
                sesiones). El ahorro calculado toma como base el costo de inicio
                de tratamiento ($900 MXN primera vez + $850 MXN subsecuentes).
              </p>

              <p>
                <strong className="text-[#18313a]">Aviso sanitario:</strong> La
                acupuntura es una práctica terapéutica regulada conforme a la
                NOM-017-SSA3-2012. Los tiempos de evolución dependen del estado
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
                className="flex items-center gap-3 font-medium text-[#18313a]"
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
                  className="text-[#3e685f] underline underline-offset-4"
                >
                  Parálisis Facial
                </Link>
                <span aria-hidden="true" className="text-[#cfbfab]">
                  ·
                </span>
                <Link
                  href="/fertilidad"
                  className="hover:text-[#3e685f] underline underline-offset-4"
                >
                  Fertilidad
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
