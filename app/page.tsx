import React from "react";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/Hero";
import { Specialties } from "@/components/Specialties";
import { BienestarFemeninoSection } from "@/components/BienestarFemeninoSection";
import { TrustSection } from "@/components/TrustSection";
import { QuienSoySection } from "@/components/QuienSoySection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { clinicData } from "@/data/clinic-data";

export const metadata: Metadata = {
  title: "Acupuntura CDMX | Alivio del Dolor y Armonización Energética en Benito Juárez",
  description: "Centro de acupuntura tradicional en Benito Juárez, CDMX (cerca de Col. Del Valle y Nápoles). Alivio de dolor de espalda, ciática, bienestar femenino y equilibrio del Qi. Agenda tu sesión.",
  alternates: {
    canonical: "https://www.acupunturacdmx.com",
  },
  openGraph: {
    title: "Acupuntura CDMX | Alivio del Dolor y Armonización Energética en Benito Juárez",
    description: "Centro de acupuntura tradicional en Benito Juárez, CDMX (cerca de Col. Del Valle y Nápoles). Alivio de dolor de espalda, ciática, bienestar femenino y equilibrio del Qi.",
    url: "https://www.acupunturacdmx.com",
    type: "website",
    locale: "es_MX",
  },
};

const faqs = [
  {
    q: "¿Duele la acupuntura?",
    a: "No. Se utilizan agujas filiformes sumamente delgadas y flexibles de uso único. La experiencia es placentera; los pacientes suelen sentir la llegada del Qi (Deqi) como un sutil cosquilleo o calidez reconfortante que induce una relajación profunda."
  },
  {
    q: "¿Cómo agendo mi primera sesión?",
    a: `Puedes escribirme directamente por WhatsApp al ${clinicData.phone}. Evalúo tu motivo de consulta de forma personalizada para preparar tu sesión ideal.`
  },
  {
    q: "¿Cuántas sesiones necesito para ver resultados?",
    a: "La gran mayoría de las personas experimenta una disminución notable del dolor o la tensión entre la 1ra y la 3ra sesión. El ciclo de sesiones se ajusta a tu ritmo de recuperación y equilibrio personal."
  },
  {
    q: "¿Puedo recibir acupuntura si estoy tomando otros cuidados de salud?",
    a: "Sí, es totalmente armónico y seguro. La acupuntura estimula los mecanismos naturales de autorregulación del cuerpo y coexiste en perfecta concordancia con tu estilo de vida y cualquier cuidado previo."
  },
  {
    q: "¿En qué zona de la Ciudad de México se encuentran?",
    a: `Mi consultorio está ubicado en Av. Insurgentes Sur 1409, Despacho 5, Col. Insurgentes Mixcoac, C.P. 03900, Benito Juárez, CDMX (a unos pasos de Río Churubusco y Parque Hundido, con fácil acceso vía Metrobús y Metro Mixcoac/Insurgentes Sur). Atiendo de lunes a viernes de 9 a 18 hrs y sábados de 9 a 15 hrs previa cita.`
  }
];

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Liz Gamiño Acupuntura",
    "alternateName": [
      "Liz Gamino Acupuntura",
      "Centro de Acupuntura QI",
      "Lic. Elizabeth Gamiño Acupuntura",
      "Acupuntura CDMX Liz Gamiño",
      "Acupuntura CDMX Liz Gamino"
    ],
    "description": "Consultorio universitario de acupuntura clínica y rehabilitación en Benito Juárez, CDMX dirigido por la Lic. Elizabeth Gamiño (Liz Gamiño). Especialista en fertilidad (SOP, acompañamiento FIV), parálisis facial (Bell) y manejo del dolor crónico (lumbalgia, ciática, migraña). Diagnóstico Ryodoraku y protocolos complementarios con material 100% estéril y desechable.",
    "url": "https://www.acupunturacdmx.com",
    "telephone": "+52 55 5252 0615",
    "email": "contacto@acupunturacdmx.com",
    "hasMap": "https://share.google/HDDS8v520dSzVlkH6",
    "sameAs": [
      "https://share.google/HDDS8v520dSzVlkH6",
      "https://www.facebook.com/profile.php?id=61594664782403",
      "https://mikontacto.com/lizgamino2"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Insurgentes Sur 1409, Despacho 5, Insurgentes Mixcoac",
      "addressLocality": "Benito Juárez",
      "addressRegion": "Ciudad de México",
      "postalCode": "03900",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.3683",
      "longitude": "-99.1811"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "medicalSpecialty": ["Acupuncture"],
    "priceRange": "$$",
    "founder": {
      "@type": "Person",
      "name": "Elizabeth Gamiño",
      "alternateName": ["Liz Gamiño", "Liz Gamino", "Lic. Elizabeth Gamiño"],
      "jobTitle": "Licenciada en Acupuntura Humana y Rehabilitación",
      "identifier": "Cédula Profesional 15289838",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Universidad Estatal del Valle de Ecatepec (UNEVE)"
      }
    },
    "employee": {
      "@type": "Person",
      "name": "Lic. Elizabeth Gamiño",
      "jobTitle": "Licenciada en Acupuntura Humana y Rehabilitación",
      "identifier": "Cédula Profesional 15289838"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Insurgentes Mixcoac, Benito Juárez, CDMX"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Benito Juárez, Ciudad de México"
      },
      {
        "@type": "City",
        "name": "Ciudad de México"
      }
    ]
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
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={faqSchema} />
      <div className="flex flex-col w-full overflow-hidden">
        <Hero />
        <Specialties />
        <BienestarFemeninoSection />
        <TrustSection />
        <QuienSoySection />
        <FAQSection faqs={faqs} />
        <CTASection />
      </div>
    </>
  );
}
