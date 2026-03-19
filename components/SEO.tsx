import Head from 'next/head';
import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string | string[];
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  image = 'https://acupunturacdmx.com/logo.png',
  url = 'https://acupunturacdmx.com',
  type = 'website',
}: SEOProps) {
  // If title is the default one, use it directly, otherwise use the template
  const defaultTitle = 'Acupuntura CDMX | Especialistas en Acupuntura Médica';
  const fullTitle = title === defaultTitle ? title : `${title} | Acupuntura CDMX`;

  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;

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
      addressLocality: 'Benito Juárez',
      addressRegion: 'CDMX',
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
        closes: '20:00',
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
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Acupuntura CDMX" />
      <meta property="og:locale" content="es_MX" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessJsonLd) }}
      />
    </Head>
  );
}
