import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Montserrat, Playfair_Display, Barlow, Cormorant_Garamond } from 'next/font/google';
import Script from 'next/script';
import FloatingCTA from '@/components/FloatingCTA';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const barlow = Barlow({ subsets: ['latin'], weight: ['400', '700', '900'], variable: '--font-barlow' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '600'], style: ['normal', 'italic'], variable: '--font-cormorant' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${montserrat.variable} ${playfair.variable} ${barlow.variable} ${cormorant.variable} font-sans`}>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');`,
        }}
      />
      {/* Google Ads Global Tag */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID?.split('/')[0] || 'AW-11004313271'}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-ads-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID?.split('/')[0] || 'AW-11004313271'}');
            ${process.env.NEXT_PUBLIC_GA_ID ? `gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');` : ''}
          `,
        }}
      />
      <Component {...pageProps} />
      <FloatingCTA />
    </div>
  );
}
