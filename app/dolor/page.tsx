import React from "react";
import { Metadata } from "next";
import { clinicData } from "@/data/clinic-data";
import { HelpCircle, CheckCircle2, Zap, Brain, Thermometer } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Acupuntura para el Dolor Crónico en CDMX | Especialistas en Analgesia",
  description: "Especialistas en tratamiento del dolor en CDMX. Alivio efectivo para migraña, lumbalgia y ciática con acupuntura clínica. Agenda tu valoración hoy mismo.",
  alternates: {
    canonical: "https://www.acupunturacdmx.com/dolor",
  },
  openGraph: {
    title: "Acupuntura para el Dolor Crónico en CDMX",
    description: "Especialistas en tratamiento del dolor en CDMX. Alivio efectivo para migraña, lumbalgia y ciática con acupuntura clínica. Agenda tu valoración ahora.",
    url: "https://www.acupunturacdmx.com/dolor",
  },
};

const faqs = [
  {
    q: "¿Qué tipos de dolor tratan?",
    a: "Tratamos migraña, cefalea tensional, lumbalgia, ciática, cervicalgia, artritis, fibromialgia, dolor articular de rodilla, cadera y hombro, y neuropatía periférica."
  },
  {
    q: "¿La acupuntura quita el dolor desde la primera sesión?",
    a: "Muchos pacientes reportan reducción de la intensidad del dolor desde la primera sesión. El efecto acumulativo mejora progresivamente con cada sesión."
  },
  {
    q: "¿Cuántas sesiones necesito para el dolor crónico?",
    a: "Para dolor crónico se recomiendan entre 8 y 12 sesiones iniciales con frecuencia de 1 a 2 veces por semana. Para dolor agudo, 3 a 6 sesiones suelen ser suficientes."
  },
  {
    q: "¿Dónde está la clínica?",
    a: "Estamos en Av. Insurgentes Sur 1409, Despacho 5, Insurgentes Mixcoac, Benito Juárez, C.P. 03900, CDMX. Atendemos con previa cita de lunes a viernes de 9 a 18 hrs y sábados de 9 a 15 hrs."
  }
];

export default function DolorPage() {
  const spec = clinicData.specialties.find(s => s.id === "dolor");

  const treatmentSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Acupuntura para el Dolor Crónico",
    "description": "Tratamiento de acupuntura clínica especializado en el manejo integral del dolor crónico y agudo. Empleamos técnicas avanzadas como electroacupuntura para la modulación nerviosa y alivio del dolor neuropático, moxibustión clínica para mejorar la circulación y relajar la musculatura profunda, y acupuntura tradicional para restablecer el equilibrio sistémico. Especialistas en migraña, lumbalgia, ciática y fibromialgia.",
    "url": "https://www.acupunturacdmx.com/dolor",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Acupuncture"
    },
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Alivio del dolor crónico y agudo"
      },
      {
        "@type": "MedicalIndication",
        "name": "Migraña y Cefalea"
      },
      {
        "@type": "MedicalIndication",
        "name": "Lumbalgia y Ciática"
      }
    ],
    "howItWorks": "Estimulación de terminaciones nerviosas y puntos gatillo para la liberación de endorfinas, modulación de señales de dolor en el sistema nervioso central y reducción de procesos inflamatorios mediante electroacupuntura y moxibustión.",
    "preparation": "Se recomienda asistir con ropa cómoda, haber ingerido alimentos ligeros antes de la sesión y reportar cualquier tratamiento farmacológico actual.",
    "adverseOutcome": [
      {
        "@type": "MedicalEntity",
        "name": "Pequeños hematomas locales",
        "description": "Posibilidad de leves moretones en el sitio de inserción que desaparecen en pocos días."
      }
    ],
    "audience": {
      "@type": "MedicalAudience",
      "medicalCondition": [
        {
          "@type": "MedicalCondition",
          "name": "Chronic Pain",
          "alternateName": "Dolor Crónico"
        },
        {
          "@type": "MedicalCondition",
          "name": "Migraine",
          "alternateName": "Migraña"
        },
        {
          "@type": "MedicalCondition",
          "name": "Sciatica",
          "alternateName": "Ciática"
        },
        {
          "@type": "MedicalCondition",
          "name": "Fibromyalgia",
          "alternateName": "Fibromialgia"
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
      "image": "https://www.acupunturacdmx.com/clinica-dolor.jpg",
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
                {spec?.description}
              </p>
              <div className="space-y-4">
                {[
                  "Migrañas y cefaleas tensionales",
                  "Lumbalgia y dolor ciático",
                  "Artritis y dolores articulares",
                  "Fibromialgia",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent-green" size={24} />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-clinical">
              <h3 className="text-3xl font-bold mb-8 font-serif tracking-tight italic">Protocolo de Atención</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary-600 font-serif">Alivio Inmediato</h4>
                    <p className="text-brand-text font-light">Buscamos reducir la intensidad del dolor desde la primera sesión.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary-600 font-serif">Modulación Neurológica</h4>
                    <p className="text-brand-text font-light">Estimulo la respuesta natural del sistema nervioso para modular y disminuir el dolor.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Thermometer size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary-600 font-serif">Reducción Inflamatoria</h4>
                    <p className="text-brand-text font-light">Técnicas para disminuir la inflamación sistémica y local.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-10 font-serif tracking-tight italic text-primary-600">¿Cómo abordo el dolor en consulta?</h2>
          <p className="text-xl text-brand-text mb-12 leading-relaxed font-light">
            En mi consulta integro la acupuntura con electroacupuntura y terapia de calor (moxibustión) para potenciar el efecto analgésico. Realizo una valoración detallada y personalizada para identificar el origen de tu dolor y no solo tratar el síntoma.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-primary-50 border-t border-primary-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif tracking-tight italic text-primary-600">Preguntas Frecuentes</h2>
            <p className="text-xl text-brand-text italic font-light">Despeja tus dudas sobre el tratamiento del dolor con acupuntura</p>
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
          <WhatsAppButton
            className="bg-primary-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-primary-700 transition-all inline-block"
            showIcon={false}
          >
            Agendar valoración para dolor
          </WhatsAppButton>
        </div>
      </section>
    </div>
  );
}
