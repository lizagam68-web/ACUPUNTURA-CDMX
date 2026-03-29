import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Montserrat, Playfair_Display, Barlow, Cormorant_Garamond } from 'next/font/google';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageview } from '@/utils/analytics';
import FloatingCTA from '@/components/FloatingCTA';
import { GoogleTag } from '@/components/GoogleTag';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const barlow = Barlow({ subsets: ['latin'], weight: ['400', '700', '900'], variable: '--font-barlow' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '600'], style: ['normal', 'italic'], variable: '--font-cormorant' });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={`${inter.variable} ${montserrat.variable} ${playfair.variable} ${barlow.variable} ${cormorant.variable} font-sans`}>
      {/* Google Tag Manager & Google Ads */}
      <GoogleTag />
      
      <Component {...pageProps} />
      <FloatingCTA />
    </div>
  );
}
