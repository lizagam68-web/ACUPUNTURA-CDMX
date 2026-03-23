export const trackConversion = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || 'AW-XXXXXXXXX/YYYYYYYYY', 
      'event_callback': () => console.log("Señal de éxito enviada a Google Ads")
    });
  }
};
