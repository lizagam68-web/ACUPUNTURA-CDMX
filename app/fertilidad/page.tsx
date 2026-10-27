import React from "react";
import { Metadata } from "next";
import { clinicData } from "@/data/clinic-data";
import { HelpCircle, CheckCircle2, Heart, Activity, Flower2 } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FertilidadSection } from "@/components/FertilidadSection";

export const metadata: Metadata = {
  title: "Acupuntura para Fertilidad y Salud Femenina en CDMX | Benito Juárez",
  description: "Acompañamiento clínico en fertilidad natural, apoyo en FIV/reproducción asistida y balance hormonal en Benito Juárez, CDMX. Consulta con especialistas.",
  alternates: {
    canonical: "https://www.acupunturacdmx.com/fertilidad",
  },
  openGraph: {
    title: "Acupuntura para Fertilidad y Salud Femenina en CDMX | Benito Juárez",
    description: "Acompañamiento clínico en fertilidad natural, apoyo en FIV/reproducción asistida y balance hormonal en Benito Juárez, CDMX. Consulta con especialistas.",
    url: "https://www.acupunturacdmx.com/fertilidad",
    images: ["/images/bienestar-femenino-acupuntura-cdmx.jpg"],
  },
};

const faqs = [
  {
    q: "¿En qué momento previo a un ciclo de FIV o búsqueda reproductiva se recomienda la acupuntura?",
    a: "El enfoque con mayor respaldo clínico consiste en trabajar en ciclos previos, iniciando idealmente de 2 a 3 meses (8 a 12 semanas) antes de la estimulación o búsqueda activa. Esta ventana de tiempo coincide con el ciclo de foliculogénesis ovárica, optimizando la microcirculación arterial, el equilibrio hormonal y el grosor endometrial."
  },
  {
    q: "¿Cómo ayuda la acupuntura a regular el ciclo y la fertilidad natural?",
    a: "Modula el eje hipotálamo-hipófisis-ovario (HHO), promoviendo una ovulación predecible, mejorando la calidad del moco cervical y apoyando en condiciones como el Síndrome de Ovario Poliquístico (SOP) y la endometriosis."
  },
  {
    q: "¿La acupuntura puede ayudar también en la fertilidad masculina?",
    a: "Sí. Los protocolos clínicos demuestran que la acupuntura optimiza la microcirculación testicular, reduciendo el estrés oxidativo y mejorando parámetros de concentración, movilidad y morfología espermática."
  },
  {
    q: "¿Cuántas sesiones se recomiendan?",
    a: "Para fertilidad natural o preparación de FIV se sugiere un ciclo de 8 a 12 sesiones continuas (con frecuencia semanal), adaptando los puntos específicos a cada fase de tu ciclo ovárico."
  },
  {
    q: "¿Dónde está ubicado el consultorio?",
    a: "Mi consultorio se encuentra en Benito Juárez, CDMX. Te atiendo de lunes a viernes de 9 a 18 hrs y sábados de 9 a 15 hrs con previa cita por WhatsApp."
  }
];

export default function FertilidadPage() {
  const spec = clinicData.specialties.find(s => s.id === "fertilidad");

  const treatmentSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Acupuntura para el Bienestar Femenino y Balance Hormonal",
    "description": "Programa integral de acupuntura clínica y acompañamiento especializado en el bienestar femenino. Me enfoco en promover el balance de las funciones corporales, optimizar el flujo circulatorio y reducir las respuestas físicas asociadas con el estrés y el cortisol elevado.",
    "url": "https://www.acupunturacdmx.com/fertilidad",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Acupuncture"
    },
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Apoyo en el balance hormonal y armonía corporal"
      },
      {
        "@type": "MedicalIndication",
        "name": "Regulación natural del ciclo"
      },
      {
        "@type": "MedicalIndication",
        "name": "Molestias asociadas al ciclo menstrual (cólicos y tensión)"
      }
    ],
    "howItWorks": "Aplicación de acupuntura basada en evidencia para favorecer la regulación neuromuscular periférica, optimizar la microcirculación y mitigar los efectos sistémicos de la tensión emocional y física sobre el organismo.",
    "citation": [
      "https://pubmed.ncbi.nlm.nih.gov/28004245/",
      "https://pubmed.ncbi.nlm.nih.gov/8671478/",
      "https://pubmed.ncbi.nlm.nih.gov/31447035/",
      "https://pubmed.ncbi.nlm.nih.gov/18258932/",
      "https://pubmed.ncbi.nlm.nih.gov/22243605/",
      "https://pubmed.ncbi.nlm.nih.gov/20621276/"
    ],
    "preparation": "Asistir con ropa cómoda y ligera, haber ingerido un alimento liviano previo a la cita y reportar antecedentes de salud habituales.",
    "adverseOutcome": [
      {
        "@type": "MedicalEntity",
        "name": "Pequeña marca local",
        "description": "Posibilidad de leves marcas tras la colocación de las agujas estériles que desaparecen en corto tiempo."
      }
    ],
    "audience": {
      "@type": "MedicalAudience",
      "medicalCondition": [
        {
          "@type": "MedicalCondition",
          "name": "Menstrual disorders",
          "alternateName": "Ciclos irregulares"
        },
        {
          "@type": "MedicalCondition",
          "name": "Stress-related disorders",
          "alternateName": "Estrés sistémico"
        }
      ]
    },
    "provider": {
      "@type": "MedicalBusiness",
      "name": clinicData.name,
      "alternateName": clinicData.alternateNames,
      "description": clinicData.slogan,
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
      },
      "telephone": clinicData.phoneFormatted,
      "url": "https://www.acupunturacdmx.com",
      "logo": "https://www.acupunturacdmx.com/logo.svg",
      "image": "https://www.acupunturacdmx.com/clinica-femenina.jpg",
      "email": clinicData.email,
      "priceRange": "$$",
      "openingHoursSpecification": (clinicData as any).openingHours.map((oh: any) => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": oh.days,
        "opens": oh.opens,
        "closes": oh.closes
      }))
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
    <div className="pt-24 min-h-screen">
      <JsonLd schema={treatmentSchema} />
      <JsonLd schema={faqSchema} />

      <section className="bg-primary-50 py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 font-serif tracking-tight leading-[1.1] text-primary-600">{spec?.title}</h1>
              <p className="text-xl text-brand-text mb-8 leading-relaxed font-light">
                Acompañamos tus ciclos y tu bienestar general mediante protocolos clínicos diseñados de forma ética y personalizada para fomentar el balance orgánico natural.
              </p>
              <div className="space-y-4">
                {[
                  "Regulación del ciclo corporal natural",
                  "Acompañamiento de las molestias asociadas al ciclo (cólicos, tensión)",
                  "Acompañamiento en la respuesta de relajación",
                  "Reducción profunda de los estados de tensión y cansancio",
                  "Mejora de la circulación pélvica e irrigación",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent-green" size={24} />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-clinical">
              <h3 className="text-3xl font-bold mb-8 font-serif tracking-tight italic">Ejes de Bienestar</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary-600 font-serif">Balance Corporal</h4>
                    <p className="text-brand-text font-light">Apoyamos al organismo para restaurar su equilibrio circulatorio y biológico de forma sutil.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary-600 font-serif">Bienestar Emocional</h4>
                    <p className="text-brand-text font-light">Disminuimos la tensión nerviosa recurrente, devolviendo la calma a tu rutina diaria.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Flower2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary-600 font-serif">Ciclo Natural Armónico</h4>
                    <p className="text-brand-text font-light">Favorecemos un ciclo regular mediante la estimulación y regulación de arterias locales.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Fertilidad & Reproductive Health Section */}
      <FertilidadSection />

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-primary-50 border-t border-primary-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-10 font-serif tracking-tight italic text-primary-600">Preguntas Frecuentes</h2>
            <p className="text-xl text-brand-text italic font-light">Resolvemos tus dudas sobre el acompañamiento en bienestar femenino</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-primary-100">
                <div className="flex items-start gap-4">
                  <HelpCircle className="text-primary-500 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-xl mb-3 leading-tight text-primary-600 font-serif">{faq.q}</h4>
                    <p className="text-brand-text leading-relaxed font-light">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-10 font-serif tracking-tight italic text-primary-600">Un enfoque integrativo</h2>
          <p className="text-xl text-brand-text mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            La acupuntura actúa de manera complementaria con el propósito de optimizar tus funciones biológicas naturales. Ofrecemos un espacio ético y riguroso para apoyar y armonizar tu cuerpo paso a paso.
          </p>
          <WhatsAppButton
            className="bg-primary-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-primary-700 transition-all inline-block shadow-lg mb-12"
            showIcon={false}
          >
            Agendar consulta de bienestar femenino
          </WhatsAppButton>

          {/* Explicit Detailed Card Disclaimer */}
          <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-primary-50 border border-primary-100 text-left">
            <p className="text-xs text-brand-text/80 leading-relaxed font-light font-sans">
              <strong>Descargo de responsabilidad:</strong> La acupuntura humana promueve el bienestar y equilibrio del organismo. Los resultados pueden variar según cada persona. Consulta siempre con tu profesional de confianza antes de modificar o iniciar cualquier intervención terapéutica.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
