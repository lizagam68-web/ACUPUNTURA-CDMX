import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { FaqChatWidget } from "@/components/FaqChatWidget";
import { JsonLd } from "@/components/JsonLd";
import { clinicData } from "@/data/clinic-data";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.acupunturacdmx.com'),
  title: {
    default: "Liz Gamiño Acupuntura CDMX | Alivio del Dolor en Benito Juárez",
    template: `%s | Liz Gamiño Acupuntura CDMX`
  },
  description: "Consultorio de acupuntura humana en Av. Insurgentes Sur 1409, Despacho 5, Insurgentes Mixcoac, Benito Juárez, CDMX. Consulta con la Lic. Elizabeth Gamiño (Liz Gamiño). Alivio de dolor, parálisis facial y bienestar femenino.",
  alternates: {
    canonical: '/',
  },
  keywords: [
    "liz gamiño acupuntura",
    "liz gamino acupuntura",
    "elizabeth gamiño acupuntura",
    "acupuntura insurgentes sur",
    "acupuntura insurgentes mixcoac",
    "acupuntura cdmx",
    "acupuntura benito juarez",
    "acupuntura del valle",
    "centro de acupuntura qi",
    "clinica de acupuntura cdmx",
    "acupuntura dolor cronico",
    "alivio dolor de espalda cdmx",
    "tratamiento ciatica benito juarez",
    "acupuntura estres cdmx",
    "paralisis facial acupuntura",
    "electroacupuntura cdmx",
    "terapia dolor benito juarez",
    "acupunturista certificado CDMX",
    "medicina tradicional china cdmx"
  ],
  authors: [{ name: "Lic. Elizabeth Gamiño (Liz Gamiño)" }],
  creator: "Liz Gamiño Acupuntura",
  publisher: "Liz Gamiño Acupuntura",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Liz Gamiño Acupuntura CDMX | Alivio de Dolor Crónico en Benito Juárez",
    description: "Consultorio de acupuntura humana en Av. Insurgentes Sur 1409, Despacho 5, Insurgentes Mixcoac, Benito Juárez, CDMX. Consulta con la Lic. Elizabeth Gamiño.",
    url: "https://www.acupunturacdmx.com",
    siteName: "Liz Gamiño Acupuntura",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Liz Gamiño Acupuntura CDMX, Insurgentes Sur Benito Juárez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acupuntura CDMX | Alivio de Dolor Crónico en Benito Juárez",
    description: "Clínica especialista en acupuntura clínica en Benito Juárez, CDMX. Centro de Acupuntura QI ofrece alivio real de dolor crónico, dolor de espalda, ciática y estrés.",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "fzjaGQEFQC9QPZ97xptsZXVFIbsZURNDXBZHhXCwmg0",
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${notoSerif.variable} font-sans antialiased bg-white text-primary-950`}
        suppressHydrationWarning
      >
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VBE0CWFMLV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VBE0CWFMLV');
            gtag('config', 'AW-11004313271');
            gtag('config', 'AW-985455568');

            window.gtag_report_conversion = function(url) {
              var callbackCalled = false;
              var callback = function () {
                if (!callbackCalled && typeof(url) != 'undefined' && url) {
                  callbackCalled = true;
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-985455568/xY8HCKXSrLUcENC389UD',
                  'value': 1.0,
                  'currency': 'MXN',
                  'event_callback': callback
              });
              gtag('event', 'generate_lead', {
                  'event_category': 'WhatsApp',
                  'event_label': 'Clic WhatsApp',
                  'value': 1.0,
                  'currency': 'MXN'
              });
              gtag('event', 'contact', {
                  'method': 'WhatsApp'
              });
              if (typeof(url) != 'undefined' && url) {
                setTimeout(callback, 400);
              }
              return false;
            };
          `}
        </Script>

        <Navbar />
        <main>{children}</main>
        <FloatingWhatsApp />
        <FaqChatWidget />
        <Footer />
      </body>
    </html>
  );
}
