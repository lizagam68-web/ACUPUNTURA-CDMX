import React from "react";
import { Metadata } from "next";
import { clinicData } from "@/data/clinic-data";
import { HelpCircle, CheckCircle2, Waves, Brain, Moon } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Acupuntura para Estrés, Ansiedad e Insomnio en Benito Juárez, CDMX",
  description: "Tratamiento de acupuntura clínica especializado en regulación del sistema nervioso en CDMX. Alivia el estrés crónico, insomnio, ansiedad y migrañas. Agenda tu consulta.",
  alternates: {
    canonical: "https://www.acupunturacdmx.com/estres",
  },
  openGraph: {
    title: "Acupuntura para Estrés, Ansiedad e Insomnio en Benito Juárez, CDMX",
    description: "Tratamiento de acupuntura clínica especializado en regulación del sistema nervioso en CDMX. Alivia el estrés crónico, insomnio, ansiedad y migrañas. Agenda tu consulta.",
    url: "https://www.acupunturacdmx.com/estres",
    images: ["/images/estres-acupuntura-cdmx.jpg"],
  },
};

const faqs = [
  {
    q: "¿Cómo ayuda la acupuntura contra el estrés y la ansiedad?",
    a: "La acupuntura regula el sistema nervioso autónomo, disminuyendo la actividad simpática (de alerta/lucha o huida) e incrementando la parasimpática (de relajación y restauración). Esto reduce los niveles de cortisol, la hormona del estrés."
  },
  {
    q: "¿Es efectiva para el insomnio crónico?",
    a: "Sí, promueve la secreción de neurotransmisores reguladores del sueño como la melatonina y la serotonina, facilitando un descanso más profundo y reparador desde las primeras sesiones."
  },
  {
    q: "¿Cuántas sesiones se recomiendan?",
    a: "Para cuadros de estrés crónico o ansiedad recurrente, se sugiere un ciclo inicial de 6 a 10 sesiones con una frecuencia semanal. Muchos pacientes reportan una profunda sensación de ligereza y calma desde la primera cita."
  },
  {
    q: "¿Dónde se realiza el tratamiento?",
    a: "Te atiendo personalmente en mi consultorio ubicado en la Alcaldía Benito Juárez, CDMX."
  }
];

export default function EstresPage() {
  const spec = clinicData.specialties.find(s => s.id === "estres");

  const treatmentSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Acupuntura para Estrés y Ansiedad",
    "description": "Programa clínico especializado en la regulación neuromuscular y autonómica. Alivio eficaz de estrés, ansiedad, insomnio, migraña y dolores de cabeza tensionales mediante estimulación de precisión con agujas estériles y técnicas de relajación profunda.",
    "url": "https://www.acupunturacdmx.com/estres",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Acupuncture"
    },
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Estrés crónico y agotamiento"
      },
      {
        "@type": "MedicalIndication",
        "name": "Ansiedad y tensión nerviosa"
      },
      {
        "@type": "MedicalIndication",
        "name": "Insomnio y trastornos del sueño"
      }
    ],
    "howItWorks": "Inhibición de la sobreestimulación nerviosa simpática, liberación de endorfinas y serotonina, y optimización de la respuesta cardíaca frente al estrés.",
    "preparation": "Se aconseja acudir relajado, no presentarse en ayunas y vestir ropa holgada que facilite el acceso a puntos en brazos, piernas y cabeza.",
    "audience": {
      "@type": "MedicalAudience",
      "medicalCondition": [
        {
          "@type": "MedicalCondition",
          "name": "Anxiety state",
          "alternateName": "Ansiedad"
        },
        {
          "@type": "MedicalCondition",
          "name": "Inability to sleep",
          "alternateName": "Insomnio"
        },
        {
          "@type": "MedicalCondition",
          "name": "Stress",
          "alternateName": "Estrés"
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
              <h1 className="text-6xl md:text-8xl font-bold mb-6 font-serif tracking-tight leading-[1.1] text-primary-600">
                {spec?.title || "Control de Estrés y Ansiedad"}
              </h1>
              <p className="text-xl text-brand-text mb-8 leading-relaxed font-light">
                {spec?.description || "Regulación profunda de tu sistema nervioso. Reduce los niveles de cortisol, combate el insomnio y recupera tu calma mental."}
              </p>
              <div className="space-y-4">
                {[
                  "Disminución de la ansiedad y rumiación mental",
                  "Regulación natural del patrón de sueño",
                  "Alivio de tensiones musculares en cuello y hombros",
                  "Reducción de migrañas tensionales y fatiga"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent-green" size={24} />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-clinical">
              <h3 className="text-3xl font-bold mb-8 font-serif tracking-tight italic">Efectos Clínicos</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Waves size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary-600 font-serif">Calma Autonómica</h4>
                    <p className="text-brand-text font-light">
                      Modulamos el sistema parasimpático para desactivar el estado constante de alerta.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary-600 font-serif">Balance Químico</h4>
                    <p className="text-brand-text font-light">
                      Ayudamos a la liberación natural de melatonina y betaendorfinas analgésicas y relajantes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Moon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary-600 font-serif">Sueño Profundo</h4>
                    <p className="text-brand-text font-light">
                      Regula los ciclos circadianos para lograr un despertar rejuvenecedor sin somnolencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-primary-50 border-t border-primary-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-10 font-serif tracking-tight italic text-primary-600">Preguntas Frecuentes</h2>
            <p className="text-xl text-brand-text italic font-light">Respuestas profesionales para recuperar tu calma interior</p>
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
          <h2 className="text-5xl md:text-6xl font-bold mb-10 font-serif tracking-tight italic text-primary-600">Equilibrio al instante</h2>
          <p className="text-xl text-brand-text mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            El estrés crónico impacta todas las funciones de tu cuerpo. Regálate un respiro de calma en mi espacio de consulta y experimenta un alivio real y profundo desde la primera sesión.
          </p>
          <WhatsAppButton
            className="bg-primary-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-primary-700 transition-all inline-block shadow-lg mb-12"
            showIcon={false}
          >
            Agendar consulta de relajación y estrés
          </WhatsAppButton>

          {/* Explicit Detailed Card Disclaimer */}
          <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-primary-50 border border-primary-100 text-left">
            <p className="text-xs text-brand-text/80 leading-relaxed font-light font-sans">
              <strong>Descargo de responsabilidad:</strong> La acupuntura humana promueve una profunda relajación y equilibrio emocional. Los resultados individuales pueden variar. Esta información busca orientar tu bienestar integral.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
