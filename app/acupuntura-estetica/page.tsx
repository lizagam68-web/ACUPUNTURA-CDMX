import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { clinicData } from "@/data/clinic-data";
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Feather, 
  Sun, 
  HelpCircle, 
  Activity, 
  FileText, 
  Check, 
  X,
  MessageCircle
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Acupuntura Estética, Facial & Control de Peso en CDMX | Benito Juárez",
  description: "Lifting facial con acupuntura natural, micropunción dérmica regenerativa y regulación metabólica coadyuvante en CDMX. Estimula tu propio colágeno sin cirugías con la Lic. Elizabeth Gamiño (UNEVE · Cédula 15289838 · Aviso COFEPRIS).",
  alternates: {
    canonical: "https://www.acupunturacdmx.com/acupuntura-estetica",
  },
  openGraph: {
    title: "Acupuntura Estética, Facial & Control de Peso en CDMX | Benito Juárez",
    description: "Rejuvenecimiento facial natural, micropunción dérmica y apoyo en control de peso mediante bioestimulación y acupuntura clínica.",
    url: "https://www.acupunturacdmx.com/acupuntura-estetica",
  },
};

const faqs = [
  {
    q: "¿Las microagujas faciales causan dolor?",
    a: "No. En el rostro se utilizan microagujas filiformes estériles de calibre ultrafino (mucho más delgadas que las de acupuntura corporal estándar). La sensación es de un cosquilleo suave o calidez reconfortante que promueve una relajación profunda durante la sesión."
  },
  {
    q: "¿En cuánto tiempo se notan los resultados en el rostro?",
    a: "Desde la primera sesión se percibe una piel más oxigenada, luminosa y descansada. Como se trata de un proceso biológico que estimula tus propios fibroblastos para generar colágeno y elastina, los cambios estructurales en firmeza y líneas de expresión se consolidan de forma progresiva a partir de la 4ª a 6ª sesión."
  },
  {
    q: "¿Cómo ayuda la acupuntura en el control de peso y metabolismo?",
    a: "La acupuntura actúa como un coadyuvante clave: regula el sistema nervioso simpático para reducir los picos de cortisol (estrés), disminuye la ansiedad por comer compulsivamente (especialmente antojos de carbohidratos por la tarde) y estimula la motilidad gástrica para una digestión más ligera y eficiente."
  },
  {
    q: "¿Qué diferencia hay entre la micropunción dérmica y otros métodos agresivos?",
    a: "Nuestra micropunción dérmica superficial utiliza cartuchos estériles de un solo uso abiertos frente a ti. A diferencia de peelings químicos agresivos o tratamientos que dejan la piel enrojecida por días, este protocolo bioestimula la epidermis con mínima reactividad cutánea, permitiéndote retomar tus actividades de inmediato."
  },
  {
    q: "¿Dónde se realiza la consulta y cómo se agenda?",
    a: "Las sesiones son 100% privadas e individuales en nuestro consultorio en Av. Insurgentes Sur 1409, Despacho 5, Insurgentes Mixcoac, Benito Juárez, CDMX. Se atiende exclusivamente con previa cita para garantizar tu privacidad y puntualidad."
  }
];

export default function AcupunturaEsteticaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Acupuntura Estética, Facial y Regulación Metabólica",
    "description": "Protocolos clínicos de acupuntura estética facial (efecto lifting natural y síntesis de colágeno), bioestimulación con micropunción dérmica superficial y auriculoterapia para modulación metabólica y control de ansiedad por comer en CDMX.",
    "url": "https://www.acupunturacdmx.com/acupuntura-estetica",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Acupuncture"
    },
    "provider": {
      "@type": "MedicalBusiness",
      "name": clinicData.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${clinicData.address.streetAddress}, ${clinicData.address.neighborhood}`,
        "addressLocality": clinicData.address.addressLocality,
        "addressRegion": clinicData.address.addressRegion,
        "postalCode": clinicData.address.postalCode,
        "addressCountry": clinicData.address.addressCountry
      },
      "telephone": clinicData.phoneFormatted,
      "url": "https://www.acupunturacdmx.com"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div className="pt-24 min-h-screen bg-[#faf8f5]">
      <JsonLd schema={schema} />
      <JsonLd schema={faqSchema} />

      {/* HERO PERSUASIVO DE ALTA CONVERSIÓN */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden border-b border-[#e8e1d5] bg-gradient-to-b from-[#fdfcf9] via-[#f7f4ed] to-[#faf8f5]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Columna de Texto Persuasivo */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#b86d36]">
                <span>Bioestimulación Celular &amp; Salud Integral</span>
                <span className="text-[#cfbfab]" aria-hidden="true">·</span>
                <span>Benito Juárez, CDMX</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#18313a] leading-[1.12] tracking-tight text-balance">
                Rejuvenecimiento Facial Natural &amp; <span className="text-[#3e685f] italic">Armonía Metabólica</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#4a5e66] font-light leading-relaxed max-w-xl">
                Estimula tu propio colágeno, devuelve la firmeza a tus facciones y modula la ansiedad por comer desde la raíz. Belleza y bienestar duradero <strong>sin cirugías, sin toxinas sintéticas y sin perder tu expresión natural</strong>.
              </p>

              {/* Puntos de Dolor Resueltos Rápidos */}
              <div className="space-y-2.5 pt-1 text-sm text-[#18313a]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={17} className="text-[#3e685f] flex-shrink-0" />
                  <span><strong>Efecto Lifting Natural:</strong> Estimula colágeno propio sin sustancias extrañas.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={17} className="text-[#3e685f] flex-shrink-0" />
                  <span><strong>Micropunción Dérmica:</strong> Luminosidad y textura uniforme con material 100% estéril.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={17} className="text-[#3e685f] flex-shrink-0" />
                  <span><strong>Control Metabólico:</strong> Regulación del apetito emocional y digestión ligera.</span>
                </div>
              </div>

              {/* Botón Principal de Conversión */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <WhatsAppButton
                  className="bg-[#18313a] hover:bg-[#12242b] text-white min-h-[52px] px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-md hover:shadow-lg shadow-[#18313a]/15 flex items-center justify-center gap-2.5 active:scale-98 cursor-pointer group"
                  showIcon={false}
                  message="Hola, me gustaría agendar una valoración de Acupuntura Estética y Facial en Benito Juárez, CDMX."
                >
                  <span>Agendar Valoración por WhatsApp</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 text-[#f4e1cb]" />
                </WhatsAppButton>

                <a
                  href="#pilares-tratamiento"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[52px] rounded-full text-[#18313a] hover:text-[#12242b] font-semibold text-base bg-white hover:bg-[#faf8f5] border border-[#e5dbcb] shadow-2xs transition-all text-center"
                >
                  <span>Conocer los 3 Tratamientos</span>
                </a>
              </div>

              {/* Barra de Confianza & Respaldo Oficial */}
              <div className="pt-4 border-t border-[#e8e1d5] flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#5a6e75]">
                <div className="flex items-center gap-1.5 font-medium text-[#18313a]">
                  <ShieldCheck size={16} className="text-[#3e685f] flex-shrink-0" />
                  <span>Lic. Elizabeth Gamiño (UNEVE)</span>
                </div>
                <span className="hidden sm:inline text-[#cfbfab]" aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5 font-medium text-[#18313a]">
                  <FileText size={16} className="text-[#b86d36] flex-shrink-0" />
                  <span>Cédula: 15289838 · Aviso COFEPRIS</span>
                </div>
              </div>
            </div>

            {/* Imagen Editorial de Atmósfera */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[2.5rem] overflow-hidden border border-[#e5dbcb] shadow-xl shadow-stone-300/40 bg-white group">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden bg-[#f4efe7]">
                  <Image
                    src="/images/acupuncture_treatment_detail_1790409097131.jpg"
                    alt="Detalle de acupuntura facial y bioestimulación con agujas filiformes estériles"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18313a]/80 via-[#18313a]/15 to-transparent" />
                  
                  <div className="absolute bottom-0 inset-x-0 p-6 text-white z-10">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#f4e1cb] block mb-1">
                      Medicina Tradicional China &amp; Ciencia
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
                      Bioestimulación Genuina
                    </h3>
                    <p className="text-xs sm:text-sm text-[#e8e1d5] font-light mt-1">
                      Despierta la vitalidad de tus células sin riesgos quirúrgicos ni sustancias artificiales.
                    </p>
                  </div>
                </div>

                <div className="px-6 py-3.5 bg-[#faf8f5] border-t border-[#ede6dc] flex items-center justify-between text-xs text-[#4a5e66]">
                  <span className="font-medium text-[#18313a]">
                    Material 100% Desechable &amp; Estéril
                  </span>
                  <span className="text-[#3e685f] font-semibold">
                    Benito Juárez, CDMX
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TABLA COMPARATIVA: ACUPUNTURA ESTÉTICA VS. PROCEDIMIENTOS INVASIVOS */}
      <section className="py-20 px-4 bg-white border-b border-[#e8e1d5]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-[#b86d36] font-bold uppercase tracking-widest text-xs block">
              Decisiones Inteligentes para tu Rostro y Salud
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[#18313a] tracking-tight italic text-balance">
              ¿Por qué elegir la Bioestimulación con Acupuntura frente a métodos invasivos?
            </h2>
            <div className="w-16 h-0.5 bg-[#3e685f]/40 mx-auto my-3" />
            <p className="text-base sm:text-lg text-[#4a5e66] font-light leading-relaxed">
              La medicina estética convencional a menudo recurre a paralizar músculos o introducir sustancias sintéticas temporales. La acupuntura estética estimula la capacidad natural de tu propio organismo para regenerarse de adentro hacia afuera.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#e5dbcb] shadow-lg shadow-stone-200/50 bg-[#faf8f5]">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#e5dbcb]">
              
              {/* Columna Acupuntura Estética (Ganadora) */}
              <div className="p-8 sm:p-10 bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#3e685f] flex items-center justify-center">
                    <Feather size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-[#18313a]">Acupuntura Estética Clínica</h3>
                    <p className="text-xs text-[#3e685f] font-medium">Bioestimulación y Armonía Integral</p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-[#18313a]">
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-[#3e685f] flex-shrink-0 mt-0.5" />
                    <span><strong>Tu propio colágeno:</strong> Reactiva los fibroblastos para producir colágeno y elastina naturales.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-[#3e685f] flex-shrink-0 mt-0.5" />
                    <span><strong>Expresión intacta:</strong> No paraliza músculos ni altera la calidez de tu sonrisa.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-[#3e685f] flex-shrink-0 mt-0.5" />
                    <span><strong>Sin químicos ni tóxicos:</strong> Cero riesgo de granulomas o rechazo de sustancias extrañas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-[#3e685f] flex-shrink-0 mt-0.5" />
                    <span><strong>Cero tiempo de reposo:</strong> Puedes regresar de inmediato a tu vida laboral y social.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-[#3e685f] flex-shrink-0 mt-0.5" />
                    <span><strong>Beneficio sistémico:</strong> Alivia el estrés, mejora el sueño y regula la digestión simultáneamente.</span>
                  </li>
                </ul>
              </div>

              {/* Columna Métodos Invasivos Convencionales */}
              <div className="p-8 sm:p-10 bg-[#faf8f5]/60 text-[#4a5e66]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 text-[#4a5e66] flex items-center justify-center">
                    <X size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-[#18313a]">Procedimientos Sintéticos / Invasivos</h3>
                    <p className="text-xs text-stone-500 font-medium">Toxinas, rellenos y cirugías</p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-[#4a5e66]">
                  <li className="flex items-start gap-3">
                    <X size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Inyección de sustancias químicas externas de biodegradación variable.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Riesgo de rigidez facial, asimetrías o pérdida de naturalidad en la mirada.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Efecto pasajero que genera dependencia económica y retoques forzados continuos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Hematomas, inflamación visible y necesidad de días de recuperación.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Trata solo el signo visible exterior, ignorando el estado metabólico y emocional.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* LOS 3 PILARES CLÍNICOS DEL TRATAMIENTO */}
      <section id="pilares-tratamiento" className="py-24 px-4 bg-[#faf8f5] border-b border-[#e8e1d5]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[#3e685f] font-bold uppercase tracking-widest text-xs block">
              Protocolos con Rigor Universitario y Enfoque Natural
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[#18313a] tracking-tight italic text-balance">
              Nuestros 3 Tratamientos de Acupuntura Estética
            </h2>
            <div className="w-16 h-0.5 bg-[#b86d36]/40 mx-auto my-3" />
            <p className="text-base sm:text-lg text-[#4a5e66] font-light leading-relaxed">
              Diseñados de manera personalizada tras una valoración clínica inicial, combinando la sabiduría de los meridianos y la bioestimulación celular moderna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* PILAR 1: LIFTING FACIAL CON ACUPUNTURA */}
            <div className="bg-white rounded-[2rem] p-8 border border-[#e5dbcb] shadow-md hover:shadow-xl hover:border-[#cfbfab] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-[#b86d36] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Feather size={28} />
                </div>
                
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#b86d36] block mb-2">
                  Efecto Tensor Natural
                </span>
                <h3 className="text-2xl font-bold font-serif text-[#18313a] mb-4">
                  Acupuntura Facial &amp; Tonificación Dérmica
                </h3>
                
                <p className="text-sm text-[#4a5e66] font-light leading-relaxed mb-6">
                  Aplicación indolora de microagujas en puntos neuromusculares del rostro y cuello. Activa la circulación de <em>Qi</em> y sangre, relaja la tensión mandibular y estimula la síntesis autóloga de colágeno y elastina.
                </p>

                <div className="space-y-2 border-t border-[#f2ece2] pt-4 mb-6 text-xs text-[#18313a]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#3e685f]" />
                    <span>Lifting sutil en pómulos, mejillas y óvalo facial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#3e685f]" />
                    <span>Suaviza líneas de expresión en entrecejo y frente</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#3e685f]" />
                    <span>Drenaje linfático que atenúa bolsas y ojeras</span>
                  </div>
                </div>
              </div>

              <WhatsAppButton
                className="w-full bg-[#faf8f5] hover:bg-[#18313a] text-[#18313a] hover:text-white py-3 rounded-full font-bold text-xs transition-all border border-[#e5dbcb] flex items-center justify-center gap-2 active:scale-95"
                showIcon={false}
                message="Hola, me gustaría agendar una consulta de valoración para Lifting Facial con Acupuntura."
              >
                <span>Consultar Disponibilidad</span>
                <ArrowRight size={14} />
              </WhatsAppButton>
            </div>

            {/* PILAR 2: MICROPUNCIÓN DÉRMICA REGENERATIVA (DERMAPEN) */}
            <div className="bg-white rounded-[2rem] p-8 border border-[#3e685f]/30 shadow-md hover:shadow-xl hover:border-[#3e685f] transition-all flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#3e685f] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl tracking-wider uppercase">
                Bioestimulación
              </div>

              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#3e685f] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Sun size={28} />
                </div>
                
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#3e685f] block mb-2">
                  Luminosidad &amp; Textura
                </span>
                <h3 className="text-2xl font-bold font-serif text-[#18313a] mb-4">
                  Micropunción Dérmica &amp; Regeneración Tisular
                </h3>
                
                <p className="text-sm text-[#4a5e66] font-light leading-relaxed mb-6">
                  Protocolo higiénico de micropunción superficial con cartuchos individuales desechables. Basado en la técnica milenaria de bioestimulación dérmica para renovar la capa epidérmica y devolver una textura suave y homogénea.
                </p>

                <div className="space-y-2 border-t border-[#f2ece2] pt-4 mb-6 text-xs text-[#18313a]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#3e685f]" />
                    <span>Afina poros visiblemente y empareja la textura</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#3e685f]" />
                    <span>Luminosidad inmediata para piel opaca por el estrés</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#3e685f]" />
                    <span>Cartuchos 100% estériles abiertos frente a ti</span>
                  </div>
                </div>
              </div>

              <WhatsAppButton
                className="w-full bg-[#18313a] hover:bg-[#12242b] text-white py-3 rounded-full font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
                showIcon={false}
                message="Hola, me gustaría agendar una consulta de valoración para Micropunción Dérmica Regenerativa."
              >
                <span>Agendar Micropunción</span>
                <ArrowRight size={14} className="text-[#f4e1cb]" />
              </WhatsAppButton>
            </div>

            {/* PILAR 3: ACUPUNTURA METABÓLICA Y CONTROL DE PESO */}
            <div className="bg-white rounded-[2rem] p-8 border border-[#e5dbcb] shadow-md hover:shadow-xl hover:border-[#cfbfab] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-[#b86d36] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Activity size={28} />
                </div>
                
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#b86d36] block mb-2">
                  Regulación Digestiva &amp; Calma
                </span>
                <h3 className="text-2xl font-bold font-serif text-[#18313a] mb-4">
                  Acupuntura Metabólica &amp; Control de Ansiedad
                </h3>
                
                <p className="text-sm text-[#4a5e66] font-light leading-relaxed mb-6">
                  Protocolo complementario de acupuntura sistémica y auriculoterapia clínica para modular los centros nerviosos del apetito, reducir la ansiedad por carbohidratos/dulces y desinflamar el aparato digestivo.
                </p>

                <div className="space-y-2 border-t border-[#f2ece2] pt-4 mb-6 text-xs text-[#18313a]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#3e685f]" />
                    <span>Modula el hambre emocional y los picos de ansiedad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#3e685f]" />
                    <span>Mejora el tránsito intestinal y la digestión pesada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#3e685f]" />
                    <span>Coadyuvante ético en tus metas de estilo de vida</span>
                  </div>
                </div>
              </div>

              <WhatsAppButton
                className="w-full bg-[#faf8f5] hover:bg-[#18313a] text-[#18313a] hover:text-white py-3 rounded-full font-bold text-xs transition-all border border-[#e5dbcb] flex items-center justify-center gap-2 active:scale-95"
                showIcon={false}
                message="Hola, me gustaría agendar una consulta de valoración para Acupuntura Metabólica y Control de Apetito."
              >
                <span>Consultar Disponibilidad</span>
                <ArrowRight size={14} />
              </WhatsAppButton>
            </div>

          </div>
        </div>
      </section>

      {/* EL PROCESO DE ATENCIÓN EN 3 PASOS (CLARIDAD Y TRANQUILIDAD) */}
      <section className="py-20 px-4 bg-white border-b border-[#e8e1d5]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[#b86d36] font-bold uppercase tracking-widest text-xs block">
              Atención Personalizada de Principio a Fin
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#18313a] tracking-tight italic">
              ¿Cómo es tu Consulta en Benito Juárez?
            </h2>
            <div className="w-16 h-0.5 bg-[#3e685f]/40 mx-auto my-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#faf8f5] p-8 rounded-3xl border border-[#e5dbcb] space-y-4">
              <span className="font-serif text-3xl font-bold text-[#b86d36] block">01</span>
              <h3 className="text-xl font-bold font-serif text-[#18313a]">Diagnóstico Integral</h3>
              <p className="text-sm text-[#4a5e66] font-light leading-relaxed">
                Evaluamos tu tipo de piel, nivel de tensión muscular facial, estado digestivo y niveles de estrés mediante diagnóstico clínico Ryodoraku y Medicina Tradicional China.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-8 rounded-3xl border border-[#e5dbcb] space-y-4">
              <span className="font-serif text-3xl font-bold text-[#3e685f] block">02</span>
              <h3 className="text-xl font-bold font-serif text-[#18313a]">Sesión de Bioestimulación</h3>
              <p className="text-sm text-[#4a5e66] font-light leading-relaxed">
                Aplicación cuidadosa de microagujas estériles en un ambiente de silencio y confort absoluto. Te relajas durante 30 a 45 minutos mientras tu organismo activa sus respuestas regenerativas.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-8 rounded-3xl border border-[#e5dbcb] space-y-4">
              <span className="font-serif text-3xl font-bold text-[#18313a] block">03</span>
              <h3 className="text-xl font-bold font-serif text-[#18313a]">Plan y Mantenimiento</h3>
              <p className="text-sm text-[#4a5e66] font-light leading-relaxed">
                Te brindamos recomendaciones de hidratación, descanso y el calendario óptimo de sesiones para que los efectos de firmeza y ligereza se prolonguen en el tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES (DESARMANDO OBJECIONES) */}
      <section className="py-20 px-4 bg-[#faf8f5] border-b border-[#e8e1d5]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14 space-y-3">
            <span className="text-[#3e685f] font-bold uppercase tracking-widest text-xs block">
              Resolvemos tus Dudas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#18313a] tracking-tight italic">
              Preguntas Frecuentes
            </h2>
            <div className="w-16 h-0.5 bg-[#b86d36]/40 mx-auto my-3" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e5dbcb] shadow-2xs space-y-2.5"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle size={20} className="text-[#b86d36] flex-shrink-0 mt-0.5" />
                  <h3 className="font-serif font-bold text-lg text-[#18313a]">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER FINAL DE CONVERSIÓN CON COFEPRIS DISCLAIMER */}
      <section className="py-20 px-4 bg-[#18313a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#b86d36]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3e685f]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-6">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#f4e1cb]">
            Atención Individualizada con Previa Cita
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight text-white text-balance">
            ¿Lista para rejuvenecer tu piel y equilibrar tu cuerpo de forma natural?
          </h2>

          <p className="text-base sm:text-lg text-[#e5dbcb] font-light max-w-2xl mx-auto leading-relaxed">
            Te recibo en mi consultorio de Insurgentes Sur 1409, Benito Juárez, CDMX. Consulta directa, sin intermediarios y con el respaldo de una cédula profesional universitaria.
          </p>

          <div className="pt-4">
            <WhatsAppButton
              className="inline-flex items-center justify-center gap-2.5 bg-[#fdfcf9] text-[#18313a] hover:bg-white px-9 py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer group"
              showIcon={false}
              message="Hola, me gustaría agendar una consulta de valoración para Acupuntura Estética y Facial en Benito Juárez, CDMX."
            >
              <MessageCircle size={20} className="text-[#25D366]" />
              <span>Agendar Cita por WhatsApp</span>
              <ArrowRight size={18} className="text-[#b86d36] transition-transform group-hover:translate-x-1" />
            </WhatsAppButton>
          </div>

          {/* DESCARGO REGULATORIO OBLIGATORIO DE SALUD (COFEPRIS BLINDADO) */}
          <div className="pt-10 border-t border-[#2c4955] text-center text-[11px] text-[#cfbfab]/80 max-w-3xl mx-auto leading-relaxed space-y-1.5 font-sans">
            <p className="font-semibold text-[#f4e1cb]">
              Aviso Regulatorio de Salud · Lic. Elizabeth Gamiño (UNEVE) · Cédula Profesional: 15289838 · Aviso de Publicidad COFEPRIS: 2609142002A00342
            </p>
            <p>
              Servicios de acupuntura humana conforme a la NOM-017-SSA3-2012. La acupuntura estética y metabólica actúa como coadyuvante natural para la autorregulación biológica y el bienestar integral. Los resultados pueden variar según el estilo de vida, hábitos y características individuales de cada persona. No sustituye la consulta médica, endocrinológica ni un plan nutricional individualizado.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
