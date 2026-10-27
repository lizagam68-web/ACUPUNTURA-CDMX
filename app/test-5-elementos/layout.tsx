import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Gratis de los 5 Elementos & Polaridad Yin-Yang | Prescripción de Autocuidado",
  description: "Descubre gratis en 3 minutos el equilibrio de tu energía vital (Qi). Recibe tu Prescripción Personalizada de Autocuidado con localización anatómica exacta de puntos de digitopuntura, dietoterapia y hábitos. Por la Lic. Elizabeth Gamiño.",
  alternates: {
    canonical: "/test-5-elementos",
  },
  openGraph: {
    title: "🎁 Test Gratis: Diagnóstico de 5 Elementos & Tu Prescripción de Autocuidado",
    description: "Conoce qué órgano Zang-Fu pide equilibrio y qué puntos anatómicos de digitopuntura presionar hoy. Test interactivo 100% gratuito de la Lic. Elizabeth Gamiño en CDMX.",
    url: "https://www.acupunturacdmx.com/test-5-elementos",
    siteName: "Liz Gamiño Acupuntura Humana",
    images: [
      {
        url: "/images/lic-elizabeth-gamino-real.jpg",
        width: 720,
        height: 720,
        alt: "Lic. Elizabeth Gamiño - Test Gratuito de los 5 Elementos",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Test Gratis de 5 Elementos y Prescripción de Autocuidado MTCh",
    description: "Identifica tu elemento predominante y la localización anatómica de tus resonadores de digitopuntura.",
    images: ["/images/lic-elizabeth-gamino-real.jpg"],
  },
  keywords: [
    "test 5 elementos gratis",
    "autodiagnostico medicina tradicional china gratis",
    "test yin yang gratis",
    "digitopuntura localizacion anatomica",
    "puntos acupuntura en casa",
    "prescripcion de autocuidado gratis",
    "elizabeth gamino acupuntura cdmx",
    "test cinco elementos medicina china",
  ],
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
