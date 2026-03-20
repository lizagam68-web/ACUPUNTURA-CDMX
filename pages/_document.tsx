import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="font-sans antialiased text-[#333] bg-[#F3F4F6]">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
