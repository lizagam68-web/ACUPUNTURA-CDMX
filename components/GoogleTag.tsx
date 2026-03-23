'use client';

import Script from 'next/script';

export function GoogleTag() {
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID?.split('/')[0] || 'AW-11004313271';
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {/* Google Ads Global Tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
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
            gtag('config', '${googleAdsId}');
            ${gaId ? `gtag('config', '${gaId}');` : ''}
          `,
        }}
      />
    </>
  );
}
