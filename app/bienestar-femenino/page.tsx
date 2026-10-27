import React from "react";
import { Metadata } from "next";
import { clinicData } from "@/data/clinic-data";
import { HelpCircle, CheckCircle2, Heart, Activity, Flower2, Sun, Moon } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BienestarFemeninoSection } from "@/components/BienestarFemeninoSection";

export const metadata: Metadata = {
  title: "Acupuntura para Salud y Bienestar Femenino en CDMX | Benito Juárez",
  description: "Acompañamiento integral con acupuntura en CDMX: alivio de cólicos y dolor menstrual, fertilidad y preparación FIV en ciclos previos, y climaterio sin hormonas sintéticas.",
  alternates: {
    canonical: "https://www.acupunturacdmx.com/bienestar-femenino",
  },
  openGraph: {
    title: "Acupuntura para Salud y Bienestar Femenino en CDMX | Benito Juárez",
    description: "Acompañamiento integral con acupuntura en CDMX: alivio de cólicos y dolor menstrual, fertilidad y preparación FIV en ciclos previos, y climaterio sin hormonas sintéticas.",
    url: "https://www.acupunturacdmx.com/bienestar-femenino",
    images: ["/images/bienestar-femenino-acupuntura-cdmx.jpg"],
  },
};

const faqs = [
  {
    q: "¿Cómo actúa la acupuntura para quitar los cólicos menstruales (dismenorrea)?",
    a: "La acupuntura clínica modula el sistema nervioso autónomo y frena la producción excesiva de prostaglandinas en el útero, reduciendo la contractilidad violenta del músculo miometrial. Al mismo tiempo, estimula la liberación de beta-endorfinas y vasodilatadores naturales, aliviando el dolor punzante en el bajo vientre y la zona lumbar sin los efectos secundarios gástricos de los analgésicos."
  },
  {
    q: "¿Por qué se recomienda iniciar el tratamiento de fertilidad 2 a 3 meses antes?",
    a: "Porque el proceso biológico de maduración folicular (foliculogénesis) dura aproximadamente 90 días. Trabajar en ciclos previos (8 a 12 semanas antes) permite acondicionar el flujo vascular hacia los ovarios y el útero, optimizar la respuesta ovárica y favorecer un endometrio trilaminar receptivo para la concepción natural o transferencia de FIV."
  },
  {
    q: "¿La acupuntura es segura si tengo contraindicación para hormonas en la menopausia?",
    a: "Es totalmente segura y de hecho es la terapia no farmacológica de primera elección respaldada por sociedades ginecológicas internacionales. La acupuntura no introduce hormonas exógenas; actúa regulando el centro termorregulador del hipotálamo y los niveles de serotonina y endorfinas, reduciendo los sofocos y sudoraciones nocturnas de forma natural."
  },
  {
    q: "¿Con qué frecuencia se realizan las sesiones de salud femenina?",
    a: "Habitualmente se inicia con una sesión semanal de 45 a 50 minutos. En el caso del ciclo menstrual, se ajustan los puntos según la fase folicular, ovulatoria o lútea. Tras las semanas de estabilización y alivio sintomático, las sesiones se espacian según la evolución de cada paciente."
  },
  {
    q: "¿Dónde se ubica la clínica y cómo solicito una cita?",
    a: "Estamos ubicados en Benito Juárez, Ciudad de México. Las consultas se realizan en consultorio privado previa cita a través de WhatsApp, de lunes a viernes de 9 a 18 hrs y sábados de 9 a 15 hrs."
  }
];

export default function BienestarFemeninoPage() {
  const treatmentSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Programa Integral de Acupuntura para la Salud y Bienestar Femenino",
    "description": "Sombrilla terapéutica integral de acupuntura clínica para las diferentes etapas de la mujer: alivio de cólicos y dolor menstrual (dismenorrea), acondicionamiento de fertilidad y ciclos previos para FIV/IA, y manejo no hormonal del climaterio y menopausia.",
    "url": "https://www.acupunturacdmx.com/bienestar-femenino",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Acupuncture"
    },
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Cólicos menstruales y dismenorrea primaria"
      },
      {
        "@type": "MedicalIndication",
        "name": "Tensión premenstrual y dolor pélvico"
      },
      {
        "@type": "MedicalIndication",
        "name": "Fertilidad natural y preparación para reproducción asistida (FIV)"
      },
      {
        "@type": "MedicalIndication",
        "name": "Sofocos y sudoraciones nocturnas del climaterio"
      },
      {
        "@type": "MedicalIndication",
        "name": "Insomnio y labilidad emocional perimenopáusica"
      }
    ],
    "howItWorks": "Neuromodulación del eje hipotálamo-hipófisis-ovárico (HHO), regulación simpática del flujo sanguíneo pélvico y liberación de endorfinas analgésicas mediante acupuntura clínica basada en evidencia.",
    "citation": [
      "https://pubmed.ncbi.nlm.nih.gov/27087094/",
      "https://pubmed.ncbi.nlm.nih.gov/29879061/",
      "https://pubmed.ncbi.nlm.nih.gov/28004245/",
      "https://pubmed.ncbi.nlm.nih.gov/8671478/",
      "https://pubmed.ncbi.nlm.nih.gov/25003620/",
      "https://pubmed.ncbi.nlm.nih.gov/27023860/"
    ],
    "preparation": "Llevar ropa cómoda y ligera, haber consumido un alimento ligero antes de la sesión y compartir antecedentes ginecológicos o síntomas predominantes.",
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
      "email": clinicData.email,
      "priceRange": "$$"
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

      {/* Hero Overview */}
      <section className="bg-primary-50 py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-100 text-accent-800 text-xs font-semibold tracking-wide uppercase mb-4">
                <Heart size={14} className="text-accent-600 fill-accent-600" />
                <span>Salud Femenina Integral</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif tracking-tight leading-[1.1] text-primary-600">
                Bienestar Femenino
              </h1>
              <p className="text-xl text-brand-text mb-8 leading-relaxed font-light">
                Un espacio clínico dedicado a honrar y acompañar los ritmos biológicos de tu cuerpo. Tratamientos no invasivos para cólicos menstruales, fertilidad y climaterio en Benito Juárez, CDMX.
              </p>
              <div className="space-y-4">
                {[
                  "Alivio duradero de cólicos, dolor lumbar y tensión pélvica",
                  "Acompañamiento en fertilidad natural y ciclos previos a FIV",
                  "Control natural de sofocos, sudor nocturno e insomnio",
                  "Atención personalizada con respaldo en literatura indexada",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent-green" size={24} />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-clinical">
              <h3 className="text-3xl font-bold mb-8 font-serif tracking-tight italic text-primary-950">
                Tres Etapas, Un Mismo Cuidado
              </h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Flower2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary-600 font-serif">1. Ciclo y Cólicos</h4>
                    <p className="text-brand-text font-light">Desinflamamos el miometrio y aliviamos el dolor menstrual para vivir tu período con ligereza.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary-600 font-serif">2. Fertilidad y FIV</h4>
                    <p className="text-brand-text font-light">Acondicionamos la irrigación ovárica y el lecho endometrial en ciclos previos a la concepción.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sun size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary-600 font-serif">3. Climaterio y Menopausia</h4>
                    <p className="text-brand-text font-light">Restablecemos el termostato interno del hipotálamo y la calma nocturna sin hormonas sintéticas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Unified Umbrella Section */}
      <BienestarFemeninoSection />

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-primary-50 border-t border-primary-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-10 font-serif tracking-tight italic text-primary-600">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-brand-text italic font-light">
              Respuestas a las dudas más comunes sobre la acupuntura y la salud femenina
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-primary-100 shadow-sm">
                <h3 className="font-bold text-xl mb-3 flex items-start gap-3 font-serif italic text-primary-900">
                  <HelpCircle className="text-accent-500 mt-1 flex-shrink-0" size={22} />
                  {faq.q}
                </h3>
                <p className="text-brand-text font-light text-lg leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <WhatsAppButton 
              className="bg-primary-600 text-white hover:bg-primary-700 py-4 px-10 rounded-full font-bold text-lg transition-all shadow-md hover:shadow-lg inline-flex items-center gap-3 active:scale-95"
              message="Hola, me gustaría agendar una cita de valoración sobre bienestar femenino y acupuntura"
            >
              Agendar Valoración por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </div>
  );
}
