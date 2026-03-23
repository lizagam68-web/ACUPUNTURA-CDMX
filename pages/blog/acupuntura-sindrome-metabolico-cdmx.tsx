import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Activity, Sparkles, HeartPulse } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';
import SEO from '@/components/SEO';
import { WhatsAppButton, WHATSAPP_LINKS } from '@/components/WhatsAppButton';

export default function SindromeMetabolicoBlog() {
  return (
    <div className="min-h-screen bg-[#F0FFFF] font-sans text-[#2D2D2D] selection:bg-[#AFEEEE]">
      <SEO 
        title="Acupuntura Metabólica en Benito Juárez CDMX | Salud Endocrina"
        description="Optimiza tu salud metabólica en la Alcaldía Benito Juárez. La acupuntura ayuda a regular la insulina y el cortisol de forma natural."
        keywords="acupuntura metabólica benito juarez, síndrome metabólico tratamiento natural, regulación cortisol acupuntura, salud metabólica benito juarez, medicina china endocrina"
        image="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1200&auto=format&fit=crop"
        url="https://acupunturacdmx.com/blog/acupuntura-sindrome-metabolico-cdmx"
        type="article"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "Acupuntura Metabólica en Benito Juárez: Salud Endocrina",
              "description": "Optimiza tu salud metabólica en la Alcaldía Benito Juárez. La acupuntura ayuda a regular la insulina y el cortisol de forma natural.",
              "image": "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1200&auto=format&fit=crop",
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
                "@id": "https://acupunturacdmx.com/blog/acupuntura-sindrome-metabolico-cdmx"
              }
            })
          }}
        />
      </Head>

      {/* Navigation - Minimalist */}
      <nav className="sticky top-0 z-50 bg-[#F0FFFF]/80 backdrop-blur-md border-b border-[#AFEEEE]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs uppercase tracking-widest font-bold">Inicio</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#00CED1] rounded-full flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">QI</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Centro QI</span>
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
            <HeartPulse className="w-3 h-3 text-[#00CED1]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#00CED1]">Salud Metabólica & Vitalidad</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
            Acupuntura Metabólica en <span className="text-[#00CED1]">Benito Juárez</span>: Salud Endocrina
          </h1>
          <div className="w-12 h-px bg-[#00CED1]/30 mb-8"></div>
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
              El metabolismo es el motor de nuestra existencia, un complejo sistema de procesos químicos que transforman los nutrientes en la energía necesaria para la vida. En el <strong>Centro de Acupuntura QI</strong>, abordamos la salud metabólica desde una visión integrativa, reconociendo que el equilibrio endocrino es fundamental para una vitalidad duradera.
            </p>
            <p className="mt-6">
              La acupuntura actúa como un potente regulador del <strong>sistema endocrino</strong>. Estudios clínicos sugieren que la estimulación de puntos específicos puede mejorar significativamente la <strong>sensibilidad a la insulina</strong> y ayudar a reducir la <strong>inflamación sistémica</strong>, factores clave en el manejo del síndrome metabólico. Al restaurar la comunicación fluida entre las glándulas y los órganos, facilitamos que el cuerpo recupere su capacidad de autorregulación natural.
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
              Regulación Hormonal y Control del Cortisol mediante Medicina Tradicional China
            </h2>
            <ul className="space-y-6">
              {[
                { title: "Optimización del metabolismo", desc: "Fomentamos una respuesta biológica eficiente en la gestión de nutrientes y energía." },
                { title: "Equilibrio del eje hormonal", desc: "Armonizamos la producción glandular para evitar picos y caídas que afectan tu bienestar." },
                { title: "Reducción de fatiga crónica", desc: "Al mejorar la eficiencia metabólica, tus niveles de energía se mantienen estables durante el día." },
                { title: "Apoyo en la salud cardiovascular", desc: "La reducción de la inflamación sistémica protege tus arterias y mejora la circulación general." }
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
              Nuestro enfoque no se limita a tratar síntomas aislados; buscamos fortalecer tu terreno biológico. Al controlar los niveles de <strong>cortisol</strong> —la hormona del estrés que tanto impacta en el metabolismo—, creamos las condiciones ideales para que tu cuerpo funcione con la máxima eficiencia y armonía.
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
          <Activity className="w-8 h-8 text-[#00CED1] mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Agenda tu evaluación metabólica hoy</h3>
          <p className="text-[#A0A0A0] mb-10 font-light max-w-md mx-auto">
            Descubre cómo la medicina milenaria puede transformar tu salud endocrina y devolverte la vitalidad que mereces.
          </p>
          <WhatsAppButton 
            link={WHATSAPP_LINKS.general} 
            label="Optimiza tu Salud Hoy" 
            className="bg-[#F0FFFF] text-[#2D2D2D] hover:bg-[#E0FFFF]"
          />
          <p className="text-sm text-[#A0A0A0] mt-6 italic">
            *Por seguridad de nuestros pacientes, realizamos acompañamiento metabólico; no atendemos crisis diabéticas o urgencias endocrinas.
          </p>
        </motion.div>

        {/* Legal Disclaimer */}
        <footer className="mt-16 pt-8 border-t border-[#AFEEEE]">
          <p className="text-xs text-[#A0A0A0] leading-relaxed text-center italic">
            Esta información tiene un carácter meramente informativo. Para obtener asesoramiento o diagnóstico médicos, consulta a un profesional.
          </p>
        </footer>
      </main>

      {/* Footer - Minimalist */}
      <footer className="py-12 border-t border-[#AFEEEE] text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#A0A0A0]">
          © {new Date().getFullYear()} Centro de Acupuntura QI · CDMX
        </p>
      </footer>
    </div>
  );
}
