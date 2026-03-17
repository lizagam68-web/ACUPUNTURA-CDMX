import Head from 'next/head';
import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
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
  const fullTitle = `${title} | Acupuntura CDMX`;

  const medicalBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Acupuntura CDMX',
    alternateName: 'Clínica de Acupuntura y Medicina Tradicional China',
    url: 'https://acupunturacdmx.com',
    logo: 'https://acupunturacdmx.com/logo.png',
    image: 'https://acupunturacdmx.com/hero-image.jpg',
    description: 'Especialistas en acupuntura y medicina tradicional china para el alivio del dolor, estrés y bienestar integral en la Ciudad de México.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ciudad de México',
      addressRegion: 'CDMX',
      addressCountry: 'MX',
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
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Acupuntura CDMX" />

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
