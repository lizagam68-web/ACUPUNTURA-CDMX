import Head from 'next/head';
import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string | string[];
  image?: string;
  url?: string;
  type?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  image = 'https://acupunturacdmx.com/logo.png',
  url = 'https://acupunturacdmx.com',
  type = 'website',
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
}: SEOProps) {
  // If title is the default one, use it directly, otherwise use the template
  const defaultTitle = 'Acupuntura CDMX | Especialistas en Acupuntura Médica';
  const fullTitle = title === defaultTitle ? title : `${title} | Acupuntura CDMX`;

  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  const finalOgTitle = ogTitle || fullTitle;
  const finalOgDescription = ogDescription || description;
  const finalTwitterTitle = twitterTitle || fullTitle;
  const finalTwitterDescription = twitterDescription || description;

  const medicalBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Acupuntura CDMX',
    alternateName: 'Clínica de Acupuntura y Medicina Tradicional China',
    url: 'https://acupunturacdmx.com',
    logo: 'https://acupunturacdmx.com/logo.png',
    image: 'https://acupunturacdmx.com/hero-image.jpg',
    description: 'Clínica de acupuntura profesional en Benito Juárez. Especialistas en parálisis facial, dolor crónico y salud femenina. Atención presencial en consultorio.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Benito Juárez, Ciudad de México',
      addressLocality: 'Benito Juárez',
      addressRegion: 'CDMX',
      postalCode: '03100',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.370421',
      longitude: '-99.180421',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '15:00',
      },
    ],
    telephone: '+525552520615',
    priceRange: '$$',
    medicalSpecialty: 'Acupuncture',
    sameAs: [
      'https://facebook.com/acupunturacdmx',
      'https://instagram.com/acupunturacdmx'
    ]
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Acupuntura CDMX",
    "image": "https://acupunturacdmx.com/logo.png",
    "@id": "https://acupunturacdmx.com",
    "url": "https://acupunturacdmx.com",
    "telephone": "+525552520615",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Benito Juárez, Ciudad de México",
      "addressLocality": "Benito Juárez",
      "addressRegion": "CDMX",
      "postalCode": "03100",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.370421,
      "longitude": -99.180421
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://facebook.com/acupunturacdmx",
      "https://instagram.com/acupunturacdmx"
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿La acupuntura duele?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Las agujas son extremadamente finas. La mayoría de los pacientes sienten una ligera presión o hormigueo agradable, seguido de una relajación profunda."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué servicios de acupuntura ofrecen en Benito Juárez?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ofrecemos acupuntura para parálisis facial, dolor crónico y salud femenina de lunes a viernes en nuestra clínica ubicada en la Alcaldía Benito Juárez."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuántas sesiones de acupuntura necesito?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende del caso. Para dolor agudo puede haber alivio inmediato; condiciones crónicas suelen requerir de 6 a 10 sesiones personalizadas."
        }
      }
    ]
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": fullTitle,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".resumen-tratamiento", ".introduccion-clínica"]
    },
    "url": url
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywordsString && <meta name="keywords" content={keywordsString} />}
      <link rel="canonical" href={url} />
      
      <meta name="author" content="Acupuntura CDMX" />
      <meta name="creator" content="Acupuntura CDMX" />
      <meta name="publisher" content="Acupuntura CDMX" />
      
      <meta name="format-detection" content="telephone=yes, address=yes, email=no" />

      {/* Robots */}
      <meta name="robots" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
      <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />

      {/* Open Graph */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Acupuntura CDMX" />
      <meta property="og:locale" content="es_MX" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={finalTwitterDescription} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
    </Head>
  );
}
