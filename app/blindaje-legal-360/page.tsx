import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { clinicData } from "@/data/clinic-data";
import { 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Scale, 
  AlertTriangle, 
  Building2, 
  FileCheck, 
  MessageCircle, 
  Video, 
  Copy, 
  Calendar, 
  ExternalLink,
  HelpCircle,
  Award,
  BookOpen,
  Briefcase
} from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Blindaje Legal 360 para Acupunturistas en México | Consultoría Normativa COFEPRIS & NOM-017",
  description: "Asesoría y consultoría especializada para profesionales de acupuntura en México. Cumple con NOM-017-SSA3-2012, Aviso de Funcionamiento COFEPRIS, expediente clínico NOM-004, consentimiento informado y manejo de RPBI con la Lic. Elizabeth Gamiño (UNEVE · Cédula 15289838).",
  alternates: {
    canonical: "https://www.acupunturacdmx.com/blindaje-legal-360",
  },
  openGraph: {
    title: "Blindaje Legal 360 para Acupunturistas | Lic. Elizabeth Gamiño",
    description: "Consultoría normativa integral para abrir, operar y publicitar tu consultorio de acupuntura en México sin riesgos de multas o clausuras de COFEPRIS.",
    url: "https://www.acupunturacdmx.com/blindaje-legal-360",
  },
};

const NORMATIVAS = [
  {
    nom: "NOM-017-SSA3-2012",
    title: "Regulación de la Práctica de la Acupuntura Humana",
    desc: "Requisitos técnicos, insumos autorizados, agujas estériles y desechables, esterilización y perfil profesional del acupunturista legalmente facultado."
  },
  {
    nom: "NOM-004-SSA3-2012",
    title: "Del Expediente Clínico & Consentimiento Informado",
    desc: "Estructura obligatoria de la historia clínica, notas de evolución y el formato de consentimiento informado especializado en acupuntura para blindarte contra quejas o demandas."
  },
  {
    nom: "NOM-005-SSA3-2018",
    title: "Infraestructura & Equipamiento de Consultorios",
    desc: "Metraje mínimo, delimitación de áreas (interrogatorio, exploración/aplicación), señalética, lavabo, iluminación y medidas de accesibilidad."
  },
  {
    nom: "NOM-087-SEMARNAT-SSA1-2002",
    title: "Manejo de RPBI (Residuos Peligrosos)",
    desc: "Disposición correcta de agujas de acupuntura punzocortantes, contenedor rígido de polipropileno rojo, contrato con empresa recolectada autorizada y bitácoras."
  }
];

const INCLUDED_DOCS = [
  "Plantilla de Consentimiento Informado Especializado en Acupuntura (conclusivo ante CONAMED y COFEPRIS)",
  "Formato de Historia Clínica y Nota de Evolución adaptada a MTC y medicina alopática",
  "Guía paso a paso para tramitar tu Aviso de Funcionamiento ante COFEPRIS (Clave SCIAN correcta)",
  "Pautas para el trámite de Aviso de Publicidad Digital en redes sociales y sitio web sin multas",
  "Plantilla de Bitácora de Manejo de RPBI (agujas punzocortantes) y bitácora de limpieza",
  "Checklist de verificación física antes de una visita de verificación sanitaria"
];

export default function BlindajeLegalPage() {
  const { paymentInfo } = clinicData;

  return (
    <div className="pt-24 min-h-screen bg-[#faf8f5]">
      
      {/* HERO SECTION DE CONSULTORÍA B2B */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-[#fdfcf9] via-[#f7f4ed] to-[#faf8f5] border-b border-[#e8e1d5] overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#b86d36]">
                <span className="bg-amber-100/80 px-3 py-1 rounded-full">Consultoría Especializada para Profesionales</span>
                <span className="text-[#cfbfab]" aria-hidden="true">·</span>
                <span>México</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#18313a] leading-[1.14] tracking-tight text-balance">
                Blindaje Legal <span className="text-[#3e685f] italic">360°</span> para Consultorios de Acupuntura
              </h1>

              <p className="text-base sm:text-lg text-[#4a5e66] font-light leading-relaxed">
                Abre, opera y publicita tu práctica de acupuntura en México con total tranquilidad jurídica y sanitaria. Cumple con la <strong>NOM-017</strong>, <strong>COFEPRIS</strong>, expediente clínico y manejo de RPBI de la mano de una profesional titulada.
              </p>

              {/* Puntos Críticos Resueltos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-[#18313a]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#3e685f] flex-shrink-0" />
                  <span>Aviso de Funcionamiento COFEPRIS sin errores.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#3e685f] flex-shrink-0" />
                  <span>Consentimiento Informado a prueba de demandas.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#3e685f] flex-shrink-0" />
                  <span>Apego a la NOM-017-SSA3-2012 de Acupuntura.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#3e685f] flex-shrink-0" />
                  <span>Evita multas por publicidad irregular en redes.</span>
                </div>
              </div>

              {/* Respaldo de la Consultora */}
              <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#5a6e75]">
                <div className="flex items-center gap-1.5 font-medium text-[#18313a]">
                  <ShieldCheck size={16} className="text-[#3e685f] flex-shrink-0" />
                  <span>Por la Lic. Elizabeth Gamiño (UNEVE)</span>
                </div>
                <span className="text-[#cfbfab]" aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5 font-medium text-[#18313a]">
                  <FileText size={16} className="text-[#b86d36] flex-shrink-0" />
                  <span>Cédula Profesional: 15289838</span>
                </div>
                <span className="text-[#cfbfab]" aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5 font-medium text-[#18313a]">
                  <Award size={16} className="text-[#3e685f] flex-shrink-0" />
                  <span>Aviso COFEPRIS: 2609142002A00342</span>
                </div>
              </div>

              {/* Botón CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#paquetes"
                  className="bg-[#18313a] hover:bg-[#12242b] text-white min-h-[52px] px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-md hover:shadow-lg shadow-[#18313a]/15 flex items-center justify-center gap-2.5 active:scale-98 cursor-pointer group text-center"
                >
                  <span>Ver Opciones de Asesoría</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 text-[#f4e1cb]" />
                </a>

                <WhatsAppButton
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[52px] rounded-full text-[#18313a] hover:text-[#12242b] font-semibold text-base bg-white hover:bg-[#faf8f5] border border-[#e5dbcb] shadow-2xs transition-all text-center"
                  showIcon={false}
                  message="Hola Lic. Elizabeth, me interesa contratar la Asesoría de Blindaje Legal 360 para mi consultorio de acupuntura."
                >
                  <MessageCircle size={18} className="text-[#25D366]" />
                  <span>Consultar por WhatsApp</span>
                </WhatsAppButton>
              </div>
            </div>

            {/* Imagen Editorial de la Lic. Elizabeth Gamiño */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[2.5rem] overflow-hidden border border-[#e5dbcb] shadow-2xl bg-white group max-w-md mx-auto lg:max-w-none">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden bg-[#f4efe7]">
                  <Image
                    src="/images/lic-elizabeth-gamino-real.jpg"
                    alt="Lic. Elizabeth Gamiño - Consultora en Normatividad Sanitaria para Acupuntura"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18313a]/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-5 inset-x-5 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-[#e5dbcb] shadow-lg text-left space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#3e685f] block">
                      Consultora y Acupunturista Titulada
                    </span>
                    <h3 className="font-serif font-bold text-lg text-[#18313a]">
                      Lic. Elizabeth Gamiño
                    </h3>
                    <p className="text-xs text-[#5a6e75] font-light leading-snug">
                      Egresada de la <strong>UNEVE</strong>, institución pionera en la profesionalización de la acupuntura humana en México. Experta en cumplimiento normativo y blindaje de consultorios privados.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EL RIESGO REAL DE NO ESTAR BLINDADO */}
      <section className="py-16 px-4 bg-white border-b border-[#e8e1d5]">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
            <AlertTriangle size={15} />
            <span>¿Por qué la acupuntura está bajo estricta vigilancia en México?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#18313a] max-w-2xl mx-auto">
            Una verificación sanitaria sin preparación puede costar desde multas millonarias hasta la clausura
          </h2>

          <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed max-w-2xl mx-auto">
            En México, la acupuntura es un procedimiento médico regulado. COFEPRIS y las autoridades sanitarias locales realizan verificaciones donde exigen estrictamente el expediente clínico conforme a la norma, el correcto desecho de agujas y la delimitación del consultorio. No contar con los documentos adecuados deja desprotegido todo tu patrimonio profesional.
          </p>
        </div>
      </section>

      {/* LAS 4 NORMAS OFICIALES MEXICANAS CLAVE */}
      <section className="py-20 px-4 bg-[#faf8f5] border-b border-[#e8e1d5]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3e685f] block">
              Marco Jurídico y Sanitario
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#18313a] italic">
              Las 4 Normas que Debes Cumplir al 100%
            </h2>
            <div className="w-16 h-0.5 bg-[#b86d36]/40 mx-auto my-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NORMATIVAS.map((n, idx) => (
              <div 
                key={idx}
                className="bg-white p-7 rounded-3xl border border-[#e5dbcb] space-y-3 shadow-xs hover:border-[#cfbfab] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 bg-emerald-50 text-[#3e685f] rounded-lg border border-emerald-200/60">
                    {n.nom}
                  </span>
                  <Scale size={18} className="text-[#b86d36]" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#18313a]">
                  {n.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4a5e66] font-light leading-relaxed">
                  {n.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EL KIT DE DOCUMENTOS INCLUIDO */}
      <section className="py-20 px-4 bg-white border-b border-[#e8e1d5]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#b86d36] block">
                Plantillas Listas para Usar
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#18313a] leading-tight">
                Kit Documental Legal &amp; Sanitario Incluido
              </h2>
              <p className="text-sm text-[#4a5e66] font-light leading-relaxed">
                No pierdas semanas redactando o buscando formatos genéricos en internet que no cumplen la ley mexicana. Te entregamos todos los documentos editables en Word y PDF, diseñados específicamente para la práctica acupuntural:
              </p>

              <ul className="space-y-3 pt-2">
                {INCLUDED_DOCS.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#18313a]">
                    <CheckCircle2 size={18} className="text-[#3e685f] flex-shrink-0 mt-0.5" />
                    <span className="font-light">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#faf8f5] p-8 sm:p-10 rounded-[2.5rem] border border-[#e5dbcb] shadow-lg space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-amber-100/70 text-[#b86d36] flex items-center justify-center">
                  <Briefcase size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-2xl text-[#18313a]">
                    Tu tranquilidad como profesional vale más que una multa
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5a6e75] font-light leading-relaxed">
                    Saber que tu expediente clínico, tus avisos de funcionamiento y tus consentimientos están debidamente fundamentados en la ley mexicana te permite concentrarte al 100% en sanar a tus pacientes sin miedo a visitas sorpresa.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#e8e1d5] flex items-center justify-between text-xs text-[#3e685f] font-semibold">
                  <span>✓ Asesoría 1 a 1 personalizada</span>
                  <span>✓ Soporte directo por WhatsApp</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PAQUETES DE ASESORÍA Y PRECIOS */}
      <section id="paquetes" className="py-20 px-4 bg-[#faf8f5] border-b border-[#e8e1d5]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3e685f] block">
              Inversión en tu Seguridad Jurídica
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#18313a] italic">
              Elige tu Plan de Blindaje Legal
            </h2>
            <div className="w-16 h-0.5 bg-[#b86d36]/40 mx-auto my-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* PAQUETE 1: SESIÓN DE DIAGNÓSTICO EXPRESS */}
            <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-[#e5dbcb] shadow-md flex flex-col justify-between space-y-6 hover:border-[#cfbfab] transition-all">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5a6e75] block">
                  Paso Inicial
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#18313a]">
                  Diagnóstico Normativo Express
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#18313a]">$1,250</span>
                  <span className="text-xs text-[#5a6e75]">MXN</span>
                </div>
                <p className="text-xs text-[#4a5e66] font-light leading-relaxed">
                  Sesión personalizada 1 a 1 de 60 minutos (videollamada) para auditar la situación de tu consultorio, revisar qué documentos te faltan y darte una hoja de ruta clara de trámites.
                </p>

                <ul className="space-y-2 text-xs text-[#18313a] border-t border-[#f2ece2] pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#3e685f]" />
                    <span>Auditoría de tu espacio físico e insumos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#3e685f]" />
                    <span>Diagnóstico de trámites pendientes ante COFEPRIS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#3e685f]" />
                    <span>Revisión de tu publicidad actual</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <WhatsAppButton
                  className="w-full bg-[#faf8f5] hover:bg-[#18313a] hover:text-white text-[#18313a] py-3.5 px-6 rounded-full font-bold text-sm transition-all border border-[#e5dbcb] flex items-center justify-center gap-2 text-center"
                  showIcon={false}
                  message="Hola Lic. Elizabeth, me interesa agendar el Diagnóstico Normativo Express de $1,250 MXN para mi consultorio."
                >
                  <MessageCircle size={16} className="text-[#25D366]" />
                  <span>Agendar Diagnóstico Express</span>
                </WhatsAppButton>
              </div>
            </div>

            {/* PAQUETE 2: BLINDAJE LEGAL 360 COMPLETO */}
            <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border-2 border-[#3e685f] shadow-2xl relative flex flex-col justify-between space-y-6">
              <div className="absolute -top-3.5 right-8 bg-[#3e685f] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Más Recomendado
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#b86d36] block">
                  Solución Integral Definitiva
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#18313a]">
                  Blindaje Legal 360° Completo
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#18313a]">$3,850</span>
                  <span className="text-xs text-[#5a6e75]">MXN</span>
                </div>
                <p className="text-xs text-[#4a5e66] font-light leading-relaxed">
                  Consultoría integral con la Lic. Elizabeth Gamiño + Entrega de todo el Kit de Plantillas legales editables + Acompañamiento en tus trámites de COFEPRIS.
                </p>

                <ul className="space-y-2 text-xs text-[#18313a] border-t border-[#f2ece2] pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#3e685f]" />
                    <span><strong>2 Sesiones 1 a 1</strong> de consultoría personalizada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#3e685f]" />
                    <span><strong>Kit Completo de Plantillas</strong> (Consentimiento, Historia, RPBI)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#3e685f]" />
                    <span>Guía de trámite de Aviso de Funcionamiento y Publicidad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#3e685f]" />
                    <span>Resolución de dudas por WhatsApp durante 30 días</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 space-y-2">
                <WhatsAppButton
                  className="w-full bg-[#18313a] hover:bg-[#12242b] text-white py-4 px-6 rounded-full font-bold text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 text-center"
                  showIcon={false}
                  message="Hola Lic. Elizabeth, quiero contratar el Blindaje Legal 360° Completo de $3,850 MXN para mi consultorio de acupuntura."
                >
                  <MessageCircle size={16} className="text-[#f4e1cb]" />
                  <span>Contratar Blindaje 360°</span>
                </WhatsAppButton>

                <span className="text-[10px] text-[#5a6e75] block text-center">
                  Acepta transferencia bancaria SPEI directa y tarjeta de crédito/débito.
                </span>
              </div>
            </div>

          </div>

          {/* DATOS DE PAGO BANCARIO OFICIAL */}
          <div className="mt-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#e5dbcb] max-w-xl mx-auto text-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#e8e1d5]">
              <span className="font-bold text-[#18313a] text-sm">Datos Oficiales para Pago por Transferencia:</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">SPEI Directo</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-[#5a6e75] block">Beneficiario:</span>
                <strong className="text-[#18313a]">{paymentInfo.beneficiary}</strong>
              </div>
              <div>
                <span className="text-[#5a6e75] block">Institución / Banco:</span>
                <strong className="text-[#18313a]">{paymentInfo.bank}</strong>
              </div>
              <div className="sm:col-span-2 bg-[#faf8f5] p-3 rounded-xl border border-[#e5dbcb] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#5a6e75] block">CLABE Interbancaria (18 dígitos):</span>
                  <span className="font-mono font-bold text-sm text-[#18313a]">{paymentInfo.clabe}</span>
                </div>
              </div>
              <div className="sm:col-span-2 text-[11px] text-[#5a6e75] flex items-center justify-between pt-1">
                <span>Celular vinculado a Dimo®:</span>
                <strong className="font-mono text-[#18313a]">{paymentInfo.dimoPhone}</strong>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER CALLOUT */}
      <section className="py-16 px-4 bg-[#18313a] text-white text-center">
        <div className="container mx-auto max-w-3xl space-y-5">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#f4e1cb]">
            Ejerce con Orgullo y Tranquilidad
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
            ¿Tienes dudas sobre la situación legal de tu consultorio?
          </h2>
          <p className="text-sm sm:text-base text-[#e5dbcb] font-light max-w-xl mx-auto leading-relaxed">
            Platiquemos por WhatsApp. Conoce qué requisitos aplican para tu estado y cómo formalizar tu práctica sin complicaciones burocráticas.
          </p>
          <div className="pt-2">
            <WhatsAppButton
              className="inline-flex items-center justify-center gap-2.5 bg-[#fdfcf9] text-[#18313a] hover:bg-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-lg active:scale-95 cursor-pointer"
              showIcon={false}
              message="Hola Lic. Elizabeth, quiero consultar sobre la asesoría de Blindaje Legal 360 para acupuntura en México."
            >
              <MessageCircle size={18} className="text-[#25D366]" />
              <span>Contactar a la Lic. Elizabeth Gamiño</span>
            </WhatsAppButton>
          </div>
        </div>
      </section>

    </div>
  );
}
