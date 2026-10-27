import React from "react";
import { Metadata } from "next";
import { clinicData } from "@/data/clinic-data";
import { 
  HelpCircle, 
  CheckCircle2, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Calendar, 
  Award, 
  Smile, 
  MessageCircle,
  HeartHandshake,
  Timer,
  Check,
  ArrowRight,
  Flame
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FacialParalysisDiagram } from "@/components/FacialParalysisDiagram";
import { FacialSymmetryComparison } from "@/components/FacialSymmetryComparison";

export const metadata: Metadata = {
  title: "Tratamiento para Parálisis Facial con Acupuntura en CDMX | Centro de Acupuntura",
  description: "Recupera tu movilidad y simetría facial. Tratamiento y terapia para parálisis de Bell y nervio facial con electroacupuntura en CDMX. Atención prioritaria.",
  keywords: [
    "acupuntura para parálisis facial",
    "electroacupuntura para parálisis facial",
    "tratamiento parálisis facial",
    "terapia para parálisis facial",
    "parálisis de Bell tratamiento",
    "clínica especialista en parálisis facial cdmx",
    "acupuntura para parálisis facial cdmx",
    "especialista en parálisis facial cerca de mí",
    "tratamiento de parálisis facial precio",
    "cómo recuperar el movimiento de la cara por parálisis",
    "acupuntura para parálisis de Bell cuánto tarda en hacer efecto",
    "terapias efectivas para nervio facial inflamado",
    "electroacupuntura y terapia neural para parálisis facial",
    "secuelas de parálisis facial tratamiento"
  ],
  alternates: {
    canonical: "https://www.acupunturacdmx.com/paralisis-facial",
  },
  openGraph: {
    title: "Tratamiento para Parálisis Facial con Acupuntura en CDMX | Centro de Acupuntura",
    description: "Tratamiento y terapias para parálisis facial con acupuntura clínica y electroacupuntura en CDMX. Protocolos para parálisis de Bell y rehabilitación neuromuscular.",
    url: "https://www.acupunturacdmx.com/paralisis-facial",
    type: "website",
  },
};

const faqs = [
  {
    q: "¿Cómo recuperar el movimiento de la cara por parálisis con acupuntura?",
    a: "Tu rostro tiene memoria neuromuscular. La electroacupuntura envía microestímulos eléctricos controlados a las ramas del nervio facial que han quedado aletargadas. Esto incrementa el flujo sanguíneo, reduce la inflamación y reeduca tus músculos para que recuperes el parpadeo natural, la simetría bucal y la capacidad de sonreír con total confianza."
  },
  {
    q: "Acupuntura para parálisis de Bell: ¿cuánto tarda en hacer efecto?",
    a: "Muchos pacientes notan una agradable disminución de pesadez y los primeros indicios de movimiento entre la 3.ª y la 6.ª sesión, especialmente si inician en las dos primeras semanas. Cada cuerpo responde a su propio ritmo, por lo que adaptamos cada sesión según tu evolución particular para acelerar tu recuperación."
  },
  {
    q: "¿El tratamiento es doloroso o invasivo?",
    a: "No. Utilizamos agujas estériles ultradelgadas (del grosor de un cabello) y la microestimulación eléctrica se regula suavemente según tu umbral de sensibilidad. La gran mayoría de pacientes experimenta una profunda relajación y alivio durante cada sesión."
  },
  {
    q: "¿Cuáles son las terapias más efectivas para el nervio facial inflamado?",
    a: "La combinación de electroacupuntura de baja frecuencia, acupuntura tradicional en canales Yang y moxibustión indirecta es de las más efectivas para desinflamar el trayecto del nervio a su salida del foramen estilomastoideo, frenando el avance del bloqueo."
  },
  {
    q: "¿La electroacupuntura funciona si ya tengo varios meses con secuelas?",
    a: "Sí. Aunque la fase temprana es ideal, pacientes con secuelas crónicas, contracturas o sincinesias (como cerrar el ojo al mover la boca) logran liberar tensiones profundas, suavizar asimetrías y reentrenar fibras latentes para mejorar significativamente su calidad de vida."
  },
  {
    q: "¿Cuál es el precio de la consulta y cómo se agenda en CDMX?",
    a: "Ofrecemos tarifas accesibles por sesión y paquetes de tratamiento continuo. Tu primera cita incluye valoración clínica detallada de tu movilidad y tu primera sesión terapéutica. Escríbenos por WhatsApp para asignarte un horario preferencial en Benito Juárez, CDMX."
  }
];

export default function ParalisisFacialPage() {
  const treatmentSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Tratamiento para Parálisis Facial con Acupuntura en CDMX",
    "description": "Protocolos avanzados de acupuntura para parálisis facial y electroacupuntura en CDMX. Tratamiento para parálisis de Bell, nervio facial inflamado y rehabilitación neuromuscular.",
    "url": "https://www.acupunturacdmx.com/paralisis-facial",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Acupuncture"
    },
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Parálisis de Bell tratamiento"
      },
      {
        "@type": "MedicalIndication",
        "name": "Nervio facial inflamado y pérdida de movilidad facial"
      },
      {
        "@type": "MedicalIndication",
        "name": "Secuelas de parálisis facial y sincinesias"
      }
    ],
    "howItWorks": "Estimulación bioeléctrica con electroacupuntura en puntos motores faciales para reactivar la transmisión neuromuscular y promover la recuperación funcional del nervio facial.",
    "provider": {
      "@type": "MedicalBusiness",
      "name": clinicData.name,
      "alternateName": clinicData.alternateNames,
      "telephone": clinicData.phoneFormatted,
      "url": "https://www.acupunturacdmx.com",
      "hasMap": clinicData.googleMapsUrl,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${clinicData.address.streetAddress}, ${clinicData.address.neighborhood}`,
        "addressLocality": clinicData.address.addressLocality,
        "addressRegion": clinicData.address.addressRegion,
        "postalCode": clinicData.address.postalCode,
        "addressCountry": clinicData.address.addressCountry
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": clinicData.geo.latitude,
        "longitude": clinicData.geo.longitude
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="pt-20 min-h-screen bg-[#fcfbfa]">
      <JsonLd schema={treatmentSchema} />
      <JsonLd schema={faqSchema} />
      
      {/* Hero Section Persuasivo & Conexión Emocional */}
      <section className="bg-gradient-to-b from-[#f4efe6] via-[#f7f3ec] to-[#fcfbfa] py-10 md:py-14 px-4 border-b border-[#e8dfcf]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="text-xs font-semibold text-[#3e685f] tracking-widest uppercase mb-3">
                Atención Prioritaria · Tu Sonrisa Puede Recuperarse
              </div>

              {/* H1 Principal con lenguaje de poder y esperanza */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3.5 font-serif tracking-tight leading-[1.18] text-[#12242b]">
                Tratamiento y Terapias para Parálisis Facial con Acupuntura
              </h1>

              <p className="text-base sm:text-lg text-[#4a5e66] mb-3.5 leading-relaxed font-normal">
                <strong>Sabemos la angustia y la incertidumbre que sientes al no poder mover tu rostro con normalidad.</strong> No estás solo. Con protocolos especializados de <strong>acupuntura para parálisis facial</strong> y <strong>electroacupuntura clínica</strong> en CDMX, reactivamos las conexiones neuronales dormidas para devolverte la movilidad, la simetría y la tranquilidad frente al espejo.
              </p>

              <div className="bg-white/90 rounded-2xl p-4 border border-[#e5dbcb] mb-5 shadow-2xs">
                <p className="text-xs sm:text-sm text-[#18313a] font-medium leading-relaxed">
                  ✓ <strong>Actúa a tiempo:</strong> En <strong>parálisis de Bell (tratamiento temprano)</strong>, cada día cuenta para despertar el nervio antes de que sufra atrofia. Te atendemos con cita prioritaria en Benito Juárez, CDMX con <strong>especialista universitaria certificada (UNEVE)</strong>.
                </p>
              </div>

              {/* Botones de Conversión Persuasivos */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <WhatsAppButton
                  className="bg-[#18313a] text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#12242b] transition-all shadow-md shadow-[#18313a]/20 active:scale-95 text-center flex items-center justify-center gap-2 cursor-pointer"
                  message="Hola, tengo síntomas de parálisis facial y deseo agendar una valoración prioritaria para recuperar mi movilidad."
                  showIcon={false}
                >
                  <Calendar size={16} />
                  <span>Quiero Iniciar mi Recuperación Hoy</span>
                </WhatsAppButton>

                <a
                  href="#guia-interactiva-facial"
                  className="bg-white hover:bg-[#faf8f5] text-[#18313a] border border-[#e5dbcb] px-5 py-3.5 rounded-full font-bold text-xs sm:text-sm transition-all shadow-2xs hover:shadow-xs text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Smile size={16} className="text-[#3e685f]" />
                  <span>Explorar Guía Facial Interactiva</span>
                </a>
              </div>
              
              <div className="flex items-center gap-1.5 text-xs text-[#3e685f] font-medium mt-3">
                <Timer size={14} className="text-[#b86d36]" />
                <span>Respuesta rápida y valoración personalizada en Benito Juárez, CDMX</span>
              </div>
            </div>

            {/* Tarjeta de Garantía y Confianza */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-lg border border-[#e8dfcf] relative overflow-hidden">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#b86d36] block mb-1">
                  ¿Por Qué Elegir Nuestro Tratamiento?
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 font-serif tracking-tight text-[#12242b]">
                  Recupera Tu Expresión Sin Temores
                </h3>

                <div className="space-y-3 mb-5">
                  {[
                    "Vuelve a sonreír y expresarte con total seguridad y simetría",
                    "Cierra tu párpado por completo y descansa sin irritación en el ojo",
                    "Bebe agua y come sin dificultad ni escapes bucales molestos",
                    "Electroacupuntura clínica suave, indolora y 100% personalizada",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="text-[#18313a] mt-0.5 flex-shrink-0" size={17} />
                      <span className="text-xs sm:text-sm text-[#4a5e66] font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#e5dbcb]">
                  <div className="flex items-center gap-2.5">
                    <Award className="text-[#b86d36] flex-shrink-0" size={22} />
                    <div className="text-left">
                      <p className="text-[10px] uppercase font-bold text-[#18313a] tracking-wider">Responsable Sanitaria Certificada</p>
                      <p className="text-xs text-[#18313a] font-semibold">Especialista en Acupuntura • Cédula Profesional: 15289838</p>
                      <p className="text-[11px] text-[#3e685f] font-medium mt-0.5">Aviso de Publicidad COFEPRIS: 2609142002A00342</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BLOQUE PERSUASIVO: 3 Razones para no posponer tu tratamiento */}
      <section className="py-10 px-4 bg-white border-b border-[#e5dbcb]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#b86d36] block mb-1">
              Tu Ventana de Oportunidad
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#12242b] tracking-tight leading-snug mb-2">
              3 Razones Decisivas para Actuar de Inmediato
            </h2>
            <div className="w-16 h-1 bg-[#b86d36] mx-auto rounded-full mb-3" />
            <p className="text-xs sm:text-sm text-[#4a5e66] font-light">
              El nervio facial es extraordinariamente reactivo en las primeras semanas. Esperar semanas sin estímulo especializado reduce la velocidad de regeneración.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#fcfbfa] p-5 rounded-2xl border border-[#e5dbcb] hover:border-[#18313a] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#18313a] text-white flex items-center justify-center mb-3">
                <Timer size={20} />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#12242b] font-serif mb-1.5">
                1. La Ventana Biológica de Oro
              </h3>
              <p className="text-xs text-[#4a5e66] font-light leading-relaxed">
                Durante los primeros 14 días el nervio conserva su mayor potencial de recuperación espontánea. Estimularlo con electroacupuntura acelera la reparación axónica hasta un 70%.
              </p>
            </div>

            <div className="bg-[#fcfbfa] p-5 rounded-2xl border border-[#e5dbcb] hover:border-[#b86d36] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#b86d36] text-white flex items-center justify-center mb-3">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#12242b] font-serif mb-1.5">
                2. Evita Secuelas Permanentes
              </h3>
              <p className="text-xs text-[#4a5e66] font-light leading-relaxed">
                Sin un tratamiento adecuado, el rostro puede desarrollar sincinesias (cerrar el ojo al mover la boca) o contracturas rígidas. La acupuntura reeduca las conexiones correctas.
              </p>
            </div>

            <div className="bg-[#fcfbfa] p-5 rounded-2xl border border-[#e5dbcb] hover:border-[#2b4c3a] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#2b4c3a] text-white flex items-center justify-center mb-3">
                <HeartHandshake size={20} />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#12242b] font-serif mb-1.5">
                3. Acompañamiento Profesional y Seguro
              </h3>
              <p className="text-xs text-[#4a5e66] font-light leading-relaxed">
                Atención directa por especialista universitaria en Acupuntura y Rehabilitación (Cédula Profesional: 15289838, UNEVE). Cumplimiento y Aviso de Publicidad COFEPRIS: 2609142002A00342. Tu salud en manos éticas y certificadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagrama Clínico de Rostro Dividido y Valoración de Síntomas */}
      <FacialParalysisDiagram />

      {/* Carrusel Clínico de Simetría Facial con Imágenes Semi-Realistas */}
      <FacialSymmetryComparison />

      {/* SECCIÓN 1 (H2): ¿Cómo ayuda la electroacupuntura en la parálisis de Bell? */}
      <section className="py-12 md:py-16 px-4 bg-[#faf8f5] border-b border-[#e5dbcb]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#b86d36] block mb-1">
              Ciencia y Evidencia Clínica
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#12242b] tracking-tight leading-snug mb-3">
              ¿Cómo ayuda la electroacupuntura en la parálisis de Bell?
            </h2>
            <div className="w-16 h-1 bg-[#b86d36] mx-auto rounded-full mb-4" />
            <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
              La <strong>electroacupuntura para parálisis facial</strong> no es magia: es bioelectricidad neurofuncional y clínica aplicada. Con microcorrientes calibradas despertamos los receptores motores para enseñarle de nuevo a tu nervio <strong>cómo recuperar el movimiento de la cara por parálisis</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#e5dbcb] hover:border-[#d4c7b2] transition-all shadow-2xs">
              <div className="w-11 h-11 bg-[#18313a] text-white rounded-xl flex items-center justify-center mb-4 shadow-2xs">
                <Zap size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#12242b] font-serif mb-2">Despierta Fibras Inactivas</h3>
              <p className="text-xs text-[#4a5e66] font-light leading-relaxed">
                Envía impulsos continuos que mantienen la vitalidad del músculo, impidiendo que pierda volumen o fuerza mientras el nervio se regenera.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#e5dbcb] hover:border-[#d4c7b2] transition-all shadow-2xs">
              <div className="w-11 h-11 bg-[#b86d36] text-white rounded-xl flex items-center justify-center mb-4 shadow-2xs">
                <Activity size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#12242b] font-serif mb-2">Alivia la Inflamación Profunda</h3>
              <p className="text-xs text-[#4a5e66] font-light leading-relaxed">
                Multiplica la microcirculación de sangre y oxígeno en el canal de salida del nervio, desinflamándolo de manera natural y sin fármacos agresivos.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#e5dbcb] hover:border-[#d4c7b2] transition-all shadow-2xs">
              <div className="w-11 h-11 bg-[#2b4c3a] text-white rounded-xl flex items-center justify-center mb-4 shadow-2xs">
                <Smile size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#12242b] font-serif mb-2">Devuelve Tu Sonrisa Auténtica</h3>
              <p className="text-xs text-[#4a5e66] font-light leading-relaxed">
                Ayuda al cerebro a reconectar las órdenes motoras: sonreír sin esfuerzo, parpadear simétricamente y volver a hablar con soltura.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#e8dfcf] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
            <div className="text-xs text-[#4a5e66]">
              <strong>Electroacupuntura y terapia neural para parálisis facial:</strong> sesión relajante, sin efectos adversos y monitoreada en todo momento.
            </div>
            <WhatsAppButton
              className="bg-[#18313a] text-white px-5 py-2.5 rounded-full font-bold text-xs hover:bg-[#12242b] transition-all whitespace-nowrap shadow-xs cursor-pointer"
              message="Hola, quisiera consultar cómo me ayudaría la electroacupuntura en mi caso particular."
              showIcon={false}
            >
              Consultar Mi Caso por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 (H2): Beneficios de la terapia de acupuntura para el nervio facial */}
      <section className="py-12 md:py-16 px-4 bg-white border-b border-[#e5dbcb]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#b86d36] block mb-1">
              Resultados Reales
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#12242b] tracking-tight leading-snug mb-3">
              Beneficios de la terapia de acupuntura para el nervio facial
            </h2>
            <div className="w-16 h-1 bg-[#b86d36] mx-auto rounded-full mb-4" />
            <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
              La <strong>acupuntura para parálisis facial CDMX</strong> no solo trabaja en la superficie de la piel; regula tu sistema nervioso autónomo para reducir el estrés y la tensión acumulada que frenan la curación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#faf8f5] p-5 sm:p-6 rounded-2xl border border-[#e5dbcb] shadow-2xs">
              <h3 className="text-base sm:text-lg font-bold text-[#12242b] font-serif mb-2.5 flex items-center gap-2">
                <CheckCircle2 className="text-[#18313a]" size={20} />
                <span>Terapias efectivas para nervio facial inflamado</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5e66] font-light leading-relaxed mb-3">
                Liberamos el atrapamiento del nervio a su salida del foramen óseo, propiciando que los impulsos eléctricos vuelvan a fluir libremente hacia tus facciones.
              </p>
              <ul className="space-y-1.5 text-xs text-[#3e685f]">
                <li>✓ Disminución rápida del dolor o molestia detrás de la oreja.</li>
                <li>✓ Cierre palpebral hermético que previene infecciones y ardor ocular.</li>
                <li>✓ Recuperación del tono muscular y deglución confortable.</li>
              </ul>
            </div>

            <div className="bg-[#faf8f5] p-5 sm:p-6 rounded-2xl border border-[#e5dbcb] shadow-2xs">
              <h3 className="text-base sm:text-lg font-bold text-[#12242b] font-serif mb-2.5 flex items-center gap-2">
                <ShieldCheck className="text-[#b86d36]" size={20} />
                <span>Secuelas de parálisis facial: tratamiento y prevención</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5e66] font-light leading-relaxed mb-3">
                Protegemos la armonía de tu rostro evitando que los músculos del lado sano se sobrecarguen o que se creen conexiones nerviosas cruzadas no deseadas.
              </p>
              <ul className="space-y-1.5 text-xs text-[#3e685f]">
                <li>✓ Relajación de contracturas en cuello y mandíbula.</li>
                <li>✓ Reeducación motriz para que el ojo no se cierre al sonreír.</li>
                <li>✓ Retorno de la seguridad personal en tu vida social y laboral.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 (H2): ¿Cuántas sesiones se necesitan para notar mejoría? */}
      <section className="py-12 md:py-16 px-4 bg-[#faf8f5] border-b border-[#e5dbcb]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#b86d36] block mb-1">
              Transparencia y Tiempos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#12242b] tracking-tight leading-snug mb-3">
              ¿Cuántas sesiones se necesitan para notar mejoría?
            </h2>
            <div className="w-16 h-1 bg-[#b86d36] mx-auto rounded-full mb-4" />
            <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
              Respondemos con honestidad clínica a <em>«acupuntura para parálisis de Bell cuánto tarda en hacer efecto»</em>. Tu pronóstico mejora sustancialmente cuando comenzamos en las primeras semanas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#e8dfcf] shadow-2xs">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#b86d36] mb-1">Fase 1 (Días 1 a 14)</div>
              <h3 className="text-base sm:text-lg font-bold text-[#12242b] font-serif mb-2">Fase Aguda (El Momento Clave)</h3>
              <p className="text-xs text-[#4a5e66] font-semibold mb-2">
                2 a 3 sesiones/semana (8 a 12 sesiones sugeridas).
              </p>
              <p className="text-xs text-[#3e685f] leading-relaxed">
                La mayor tasa de éxito. Frenamos el daño, desinflamamos el canal y reactivamos el tono antes de que el músculo pierda memoria.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#e8dfcf] shadow-2xs">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#18313a] mb-1">Fase 2 (Semanas 3 a 8)</div>
              <h3 className="text-base sm:text-lg font-bold text-[#12242b] font-serif mb-2">Fase Subaguda (Consolidación)</h3>
              <p className="text-xs text-[#4a5e66] font-semibold mb-2">
                2 sesiones/semana (12 a 18 sesiones sugeridas).
              </p>
              <p className="text-xs text-[#3e685f] leading-relaxed">
                Foco en reeducación muscular activa: oclusión ocular completa, fuerza en mejillas y sonrisa equilibrada sin desviaciones.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#e8dfcf] shadow-2xs">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#aa5833] mb-1">Fase 3 (&gt; 2 meses)</div>
              <h3 className="text-base sm:text-lg font-bold text-[#12242b] font-serif mb-2">Fase Crónica (Secuelas Tardías)</h3>
              <p className="text-xs text-[#4a5e66] font-semibold mb-2">
                1 a 2 sesiones/semana (15 a 25 sesiones sugeridas).
              </p>
              <p className="text-xs text-[#3e685f] leading-relaxed">
                Tratamiento enfocado en suavizar contracturas, balancear asimetrías y reactivar fibras remanentes para recuperar armonía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 (H2): Agenda tu valoración con especialistas en acupuntura */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-[#faf8f5] via-[#f7f2ea] to-[#f4efe6] border-b border-[#e8dfcf]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-1.5 bg-white text-[#18313a] text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3.5 border border-[#e5dbcb] shadow-2xs">
            <MapPin size={13} className="text-[#b86d36]" />
            <span>Consultorio en Benito Juárez, CDMX</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 font-serif tracking-tight leading-snug text-[#12242b]">
            Agenda tu valoración con especialistas en acupuntura
          </h2>
          <div className="w-16 h-1 bg-[#b86d36] mx-auto rounded-full mb-4" />

          <p className="text-sm sm:text-base text-[#4a5e66] mb-6 leading-relaxed font-normal max-w-2xl mx-auto">
            Si buscas un <strong>especialista en parálisis facial cerca de mí</strong> en la Ciudad de México y quieres conocer el <strong>tratamiento de parálisis facial precio / consulta</strong>, estás a un solo mensaje de dar el paso más importante hacia tu bienestar. Te atenderemos con calidez, respeto y absoluto rigor profesional y clínico.
          </p>

          <div className="bg-white p-5 sm:p-7 rounded-2xl shadow-md border border-[#e8dfcf] mb-6 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <MapPin className="text-[#b86d36] mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-xs text-[#12242b] font-serif">Ubicación Accesible</h4>
                  <p className="text-[11px] text-[#3e685f] font-medium mt-0.5">{clinicData.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="text-[#b86d36] mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-xs text-[#12242b] font-serif">Horarios Flexibles</h4>
                  <p className="text-[11px] text-[#3e685f] font-medium mt-0.5">Lun - Vie: 9:00 - 18:00 | Sáb: 9:00 - 15:00</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Award className="text-[#b86d36] mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-xs text-[#12242b] font-serif">Certificación y Normativa</h4>
                  <p className="text-[11px] text-[#12242b] font-semibold mt-0.5">Especialista Certificada (UNEVE)</p>
                  <p className="text-[11px] text-[#3e685f] font-medium">Cédula Profesional: 15289838</p>
                  <p className="text-[10px] text-[#b86d36] font-semibold mt-0.5">Aviso COFEPRIS: 2609142002A00342</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <WhatsAppButton
              className="w-full sm:w-auto bg-[#18313a] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#12242b] transition-all shadow-lg shadow-[#18313a]/20 active:scale-95 text-center flex items-center justify-center gap-2 cursor-pointer"
              message="Hola, deseo agendar mi cita de valoración prioritaria para tratamiento de parálisis facial en CDMX."
              showIcon={false}
            >
              <MessageCircle size={16} />
              <span>Agendar por WhatsApp (Solo Mensajes)</span>
            </WhatsAppButton>
          </div>
          <p className="text-[11px] text-[#3e685f] mt-3">
            Sin compromiso • Atención cálida y confidencial • Citas disponibles esta semana
          </p>
        </div>
      </section>

      {/* FAQ Section Persuasiva */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#b86d36] block mb-1">
              Despeja Tus Dudas
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2.5 font-serif tracking-tight text-[#12242b]">
              Preguntas Frecuentes sobre el Tratamiento
            </h3>
            <div className="w-16 h-1 bg-[#b86d36] mx-auto rounded-full mb-3" />
            <p className="text-sm text-[#4a5e66] font-light max-w-xl mx-auto">
              Queremos que asistas con total tranquilidad. Estas son las inquietudes más comunes de quienes inician su recuperación con nosotros.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e5dbcb] hover:border-[#d4c7b2] transition-all">
                <div className="flex items-start gap-3">
                  <HelpCircle className="text-[#b86d36] flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-bold text-sm mb-1.5 leading-snug text-[#12242b] font-serif">{faq.q}</h4>
                    <p className="text-xs text-[#4a5e66] leading-relaxed font-light">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
