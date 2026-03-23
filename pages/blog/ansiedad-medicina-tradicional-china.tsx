import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Sparkles, Brain } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';
import SEO from '@/components/SEO';
import { WhatsAppButton, WHATSAPP_LINKS } from '@/components/WhatsAppButton';

export default function AnsiedadBlog() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#2D2D2D] selection:bg-[#AFEEEE]">
      <SEO 
        title="Acupuntura para la Ansiedad en Benito Juárez CDMX | Acupuntura CDMX"
        description="Recupera tu calma mental en la Alcaldía Benito Juárez. La acupuntura regula tu sistema nervioso y reduce el estrés para un descanso reparador."
        keywords="ansiedad acupuntura benito juarez, tratamiento estrés natural méxico, insomnio acupuntura cdmx, calma mental natural, medicina tradicional china ansiedad"
        image="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop"
        url="https://acupunturacdmx.com/blog/ansiedad-medicina-tradicional-china"
        type="article"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "Acupuntura para la Ansiedad en Benito Juárez: Recupera tu Calma",
              "description": "Recupera tu calma mental en la Alcaldía Benito Juárez. La acupuntura regula tu sistema nervioso y reduce el estrés para un descanso reparador.",
              "image": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop",
              "author": {
                "@type": "Organization",
                "name": "Equipo Acupuntura CDMX",
                "url": "https://acupunturacdmx.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Acupuntura CDMX",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://acupunturacdmx.com/images/logo.svg"
                }
              },
              "datePublished": "2024-03-20",
              "dateModified": "2024-03-20",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://acupunturacdmx.com/blog/ansiedad-medicina-tradicional-china"
              }
            })
          }}
        />
      </Head>

      {/* Navigation - Minimalist */}
      <nav className="sticky top-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-[#AFEEEE]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs uppercase tracking-widest font-bold">Inicio</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#00CED1] rounded-full flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">A</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Acupuntura CDMX</span>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-[#E0FFFF] rounded-full">
            <Brain className="w-3 h-3 text-[#00CED1]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#00CED1]">Salud Mental Integral</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
            Acupuntura para la Ansiedad en <span className="text-[#00CED1]">Benito Juárez</span>: Recupera tu Calma
          </h1>
          <div className="w-12 h-px bg-[#00CED1]/30 mb-8"></div>
          
          <div className="relative aspect-[21/9] w-full rounded-[2rem] overflow-hidden mb-12 shadow-sm border border-[#AFEEEE]/20">
            <Image 
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop" 
              alt="Detalle artístico de acupuntura para el tratamiento de la ansiedad y el estrés en CDMX."
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.header>

        {/* Content Section */}
        <article className="space-y-12 text-lg md:text-xl font-light leading-relaxed text-[#4A4A4A]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p>
              En el ritmo acelerado de la Ciudad de México, la ansiedad se ha convertido en una respuesta común del organismo ante el estrés constante. Sin embargo, vivir en un estado de alerta perpetuo agota tus reservas vitales. En <strong>Acupuntura CDMX</strong>, utilizamos la sabiduría milenaria para restaurar el silencio interno que tu cuerpo necesita.
            </p>
            <p className="mt-6">
              La acupuntura actúa directamente sobre el <strong>sistema nervioso autónomo</strong>, facilitando la transición del estado de &quot;lucha o huida&quot; (simpático) al de &quot;descanso y reparación&quot; (parasimpático). Este proceso biológico reduce significativamente los niveles de <strong>cortisol</strong>, la hormona del estrés, permitiendo que tu mente recupere su claridad y tu cuerpo su vitalidad natural.
            </p>
          </motion.div>

          {/* H2 Section */}
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#E0FFFF] p-8 md:p-12 rounded-[2rem] border border-[#AFEEEE]"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">
              ¿Cómo ayuda la Medicina Tradicional China al Insomnio y la Tensión?
            </h2>
            <ul className="space-y-6">
              {[
                { title: "Relajación profunda", desc: "Liberamos endorfinas que calman el sistema nervioso de forma inmediata." },
                { title: "Equilibrio emocional", desc: "Armonizamos el flujo de energía para estabilizar los cambios de humor y la inquietud." },
                { title: "Mejora del ciclo de sueño", desc: "Regulamos la melatonina natural para un descanso verdaderamente reparador." },
                { title: "Alivio de tensión muscular", desc: "Eliminamos las contracturas físicas que alimentan el estado de ansiedad mental." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#00CED1] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-base md:text-lg mb-1">{item.title}</h4>
                    <p className="text-sm md:text-base opacity-80">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>
              Nuestro tratamiento no solo busca aliviar los síntomas, sino tratar la raíz del desequilibrio. Al integrar la acupuntura en tu rutina de bienestar, le das a tu sistema la oportunidad de recalibrarse, encontrando un centro de paz incluso en medio del caos urbano.
            </p>
          </motion.div>
        </article>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 bg-[#2D2D2D] rounded-[2.5rem] text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00CED1]/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <Sparkles className="w-8 h-8 text-[#00CED1] mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Recupera tu paz interior hoy</h3>
          <p className="text-[#A0A0A0] mb-10 font-light max-w-md mx-auto">
            Permítete un espacio de silencio y sanación. Tu mente y tu cuerpo te lo agradecerán.
          </p>
          <WhatsAppButton 
            link={WHATSAPP_LINKS.ANSIEDAD} 
            label="Recupera tu Calma Ahora" 
            className="bg-[#F0FFFF] text-[#2D2D2D] hover:bg-[#E0FFFF]"
          />
          <p className="text-sm text-[#A0A0A0] mt-6 italic">
            *Por seguridad de nuestros pacientes, tratamos ansiedad y estrés crónico; no atendemos crisis agudas o urgencias psiquiátricas.
          </p>
        </motion.div>
      </main>

      {/* Footer - Minimalist */}
      <footer className="py-16 border-t border-[#AFEEEE] text-center bg-[#FAF9F6]">
        <div className="flex justify-center mb-6">
          <div className="w-10 h-10 bg-white border border-[#00CED1]/20 rounded-full flex items-center justify-center shadow-sm overflow-hidden p-1 relative">
            <Image 
              src="/images/logo.svg" 
              alt="Acupuntura CDMX Logo" 
              fill
              className="object-contain p-1"
            />
          </div>
        </div>
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#A0A0A0]">
          © {new Date().getFullYear()} Acupuntura CDMX · Ciudad de México
        </p>
      </footer>
    </div>
  );
}
