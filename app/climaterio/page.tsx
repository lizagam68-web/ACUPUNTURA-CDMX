import React from "react";
import { Metadata } from "next";
import { clinicData } from "@/data/clinic-data";
import { HelpCircle, CheckCircle2, Sun, Moon, Activity, ThermometerSun } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ClimaterioSection } from "@/components/ClimaterioSection";

export const metadata: Metadata = {
  title: "Acupuntura para Climaterio y Menopausia en CDMX | Benito Juárez",
  description: "Tratamiento de acupuntura para sofocos, sudoración nocturna, insomnio y cambios de humor en la menopausia. Consulta en Benito Juárez, CDMX.",
  alternates: {
    canonical: "https://www.acupunturacdmx.com/climaterio",
  },
  openGraph: {
    title: "Acupuntura para Climaterio y Menopausia en CDMX | Benito Juárez",
    description: "Tratamiento de acupuntura para sofocos, sudoración nocturna, insomnio y cambios de humor en la menopausia. Consulta en Benito Juárez, CDMX.",
    url: "https://www.acupunturacdmx.com/climaterio",
    images: ["/images/climaterio-menopausia-acupuntura-cdmx.jpg"],
  },
};

const faqs = [
  {
    q: "¿Cómo ayuda la acupuntura en el alivio de los sofocos y bochornos?",
    a: "La acupuntura actúa sobre el centro termorregulador del hipotálamo, modulando neurotransmisores como la serotonina, la noradrenalina y las beta-endorfinas. Esto amplía la zona de confort térmico del cuerpo, reduciendo la frecuencia e intensidad de los sofocos diurnos y las sudoraciones nocturnas sin necesidad de hormonas sintéticas."
  },
  {
    q: "¿Cuánto tiempo toma notar mejoría en los síntomas del climaterio?",
    a: "Los ensayos clínicos (como el estudio AIM de Avis et al. y el estudio ACOM de Lund et al.) demuestran mejorías notables y estadísticamente significativas entre la 3ra y la 5ta sesión semanal. El ciclo recomendado habitual consta de 8 a 12 semanas para consolidar el equilibrio neuroendocrino."
  },
  {
    q: "¿Es seguro si no puedo o no deseo tomar Terapia de Reemplazo Hormonal (TRH)?",
    a: "Totalmente. La acupuntura humana es la terapia no farmacológica recomendada por consensos internacionales para mujeres con antecedentes o contraindicaciones para TRH, o que buscan un camino natural y respetuoso para transitar la menopausia."
  },
  {
    q: "¿Ayuda también con el insomnio y los cambios de humor?",
    a: "Sí. Los metaanálisis publicados en Sleep Medicine Reviews comprueban una reducción significativa en el insomnio de mantenimiento y los despertares nocturnos, promoviendo la liberación fisiológica de melatonina y GABA y disminuyendo la reactividad del cortisol ante el estrés."
  },
  {
    q: "¿Dónde está ubicado el consultorio y cómo agendar?",
    a: "Nos encontramos en Benito Juárez, Ciudad de México. Atendemos en consultorio privado de lunes a viernes de 9 a 18 hrs y sábados de 9 a 15 hrs, previa cita vía WhatsApp."
  }
];

export default function ClimaterioPage() {
  const treatmentSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Acupuntura para Climaterio, Perimenopausia y Menopausia",
    "description": "Programa integral de acupuntura clínica y medicina integrativa para el manejo de síntomas vasomotores (sofocos, sudoración nocturna), insomnio, irritabilidad y soporte musculoesquelético en la transición menopáusica.",
    "url": "https://www.acupunturacdmx.com/climaterio",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Acupuncture"
    },
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Sofocos y bochornos vasomotores"
      },
      {
        "@type": "MedicalIndication",
        "name": "Sudoración nocturna y alteraciones del sueño"
      },
      {
        "@type": "MedicalIndication",
        "name": "Irritabilidad y cambios de humor en la perimenopausia"
      }
    ],
    "howItWorks": "Neuromodulación del centro termorregulador hipotalámico y del sistema nervioso autónomo mediante la inserción de agujas filiformes estériles en resonadores acupunturales específicos, modulando serotonina, beta-endorfinas y respuesta de cortisol.",
    "citation": [
      "https://pubmed.ncbi.nlm.nih.gov/25003620/",
      "https://pubmed.ncbi.nlm.nih.gov/27023860/",
      "https://pubmed.ncbi.nlm.nih.gov/30782712/",
      "https://pubmed.ncbi.nlm.nih.gov/27072522/",
      "https://pubmed.ncbi.nlm.nih.gov/23897451/",
      "https://pubmed.ncbi.nlm.nih.gov/29293368/"
    ],
    "preparation": "Asistir con ropa cómoda y ligera, haber consumido un alimento ligero previo a la sesión y describir los patrones de sofocos o descanso.",
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

      {/* Hero Intro */}
      <section className="bg-primary-50 py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-100 text-accent-800 text-xs font-semibold tracking-wide uppercase mb-4">
                <Sun size={14} className="text-accent-600" />
                <span>Transición Saludable</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif tracking-tight leading-[1.1] text-primary-600">
                Climaterio y Menopausia
              </h1>
              <p className="text-xl text-brand-text mb-8 leading-relaxed font-light">
                Acompañamos esta etapa con acupuntura clínica de alta precisión. Regulamos tu temperatura interna, recuperamos tu sueño profundo y devolvemos la calma a tu día a día.
              </p>
              <div className="space-y-4">
                {[
                  "Alivio clínicamente probado de sofocos y bochornos",
                  "Sueño más profundo, continuo y reparador",
                  "Estabilidad anímica y menor irritabilidad",
                  "100% natural, sin hormonas sintéticas ni efectos adversos",
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
                Pilares del Tratamiento
              </h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ThermometerSun size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary-600 font-serif">Termorregulación</h4>
                    <p className="text-brand-text font-light">Amplía la ventana de confort térmico para prevenir los accesos súbitos de calor en el rostro y pecho.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Moon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary-600 font-serif">Descanso Nocturno</h4>
                    <p className="text-brand-text font-light">Favorece la secreción fisiológica de melatonina y reduce los microdespertares con sudor o palpitaciones.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary-600 font-serif">Armonía Neurovegetativa</h4>
                    <p className="text-brand-text font-light">Atenúa los picos de cortisol y la sobrecarga emocional para vivir esta transición con plenitud.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Climaterio & Menopause Section Component */}
      <ClimaterioSection />

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-primary-50 border-t border-primary-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-10 font-serif tracking-tight italic text-primary-600">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-brand-text italic font-light">
              Resolvemos tus inquietudes sobre el tratamiento de acupuntura para climaterio y menopausia
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
              message="Hola, me gustaría agendar una cita de valoración sobre acupuntura para climaterio y menopausia"
            >
              Agendar Valoración por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </div>
  );
}
