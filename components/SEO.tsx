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
  image = 'https://acupunturacdmx.com/images/logo.svg',
  url = 'https://acupunturacdmx.com',
  type = 'website',
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
}: SEOProps) {
  // If title is the default one, use it directly, otherwise use the template
  const defaultTitle = 'Acupuntura CDMX | Especialistas en Acupuntura Médica y Regenerativa';
  const defaultDescription = 'Clínica de acupuntura profesional en Benito Juárez, CDMX. Especialistas en parálisis facial, dolor crónico, esguinces y salud hormonal femenina. Consulta clínica presencial.';
  const defaultKeywords = ['acupuntura benito juarez', 'paralisis facial cdmx', 'acupuntura dolor cronico cdmx', 'salud femenina benito juarez'];
  const fullTitle = title === defaultTitle ? title : (title ? `${title} | Acupuntura CDMX` : defaultTitle);

  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : (keywords || defaultKeywords.join(', '));

  const finalOgTitle = ogTitle || fullTitle;
  const finalOgDescription = ogDescription || description || defaultDescription;
  const finalTwitterTitle = twitterTitle || fullTitle;
  const finalTwitterDescription = twitterDescription || description || defaultDescription;

  const medicalBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Acupuntura CDMX',
    alternateName: 'Clínica de Acupuntura y Medicina Tradicional China',
    url: 'https://acupunturacdmx.com',
    logo: 'https://acupunturacdmx.com/images/logo.svg',
    image: 'https://acupunturacdmx.com/images/logo.svg',
    description: description || defaultDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '[TU_CALLE_Y_NUMERO]',
      addressLocality: 'Benito Juárez',
      addressRegion: 'CDMX',
      postalCode: '[CODIGO_POSTAL]',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '[LATITUD]',
      longitude: '[LONGITUD]',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      }
    ],
    telephone: '+5255XXXXXXXX',
    priceRange: '$$',
    medicalSpecialty: [
      'Acupuncture',
      'PainManagement',
      'RehabilitativeMedicine'
    ],
    sameAs: [
      'https://facebook.com/acupunturacdmx',
      'https://instagram.com/acupunturacdmx'
    ]
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Acupuntura CDMX",
    "image": "https://acupunturacdmx.com/images/logo.svg",
    "@id": "https://acupunturacdmx.com",
    "url": "https://acupunturacdmx.com",
    "telephone": "+5255XXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[TU_CALLE_Y_NUMERO]",
      "addressLocality": "Benito Juárez",
      "addressRegion": "CDMX",
      "postalCode": "[CODIGO_POSTAL]",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "[LATITUD]",
      "longitude": "[LONGITUD]"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué servicios de acupuntura ofrecen en Benito Juárez?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ofrecemos acupuntura médica para parálisis facial, dolor crónico, esguinces y salud hormonal femenina en nuestra clínica de la Benito Juárez."
        }
      },
      {
        "@type": "Question",
        "name": "¿La acupuntura duele?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La acupuntura utiliza agujas extremadamente finas y generalmente es indolora. La mayoría de los pacientes experimentan una sensación de relajación profunda."
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
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywordsString} />
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
      <meta property="og:image" content={image === 'https://acupunturacdmx.com/images/logo.svg' ? 'https://acupunturacdmx.com/images/logo.svg' : image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Acupuntura CDMX" />
      <meta property="og:locale" content="es_MX" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={finalTwitterDescription} />
      <meta name="twitter:image" content={image === 'https://acupunturacdmx.com/images/logo.svg' ? 'https://acupunturacdmx.com/images/logo.svg' : image} />

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
