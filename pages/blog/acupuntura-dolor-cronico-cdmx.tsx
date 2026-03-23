import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Activity, Sparkles, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';
import SEO from '@/components/SEO';
import { WhatsAppButton, WHATSAPP_LINKS } from '@/components/WhatsAppButton';

export default function DolorCronicoBlog() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#2D2D2D] selection:bg-[#AFEEEE]">
      <SEO 
        title="Alivio para Esguinces y Dolor Lumbar en Benito Juárez CDMX | Acupuntura CDMX"
        description="Expertos en el tratamiento de esguinces y dolor lumbar en la Alcaldía Benito Juárez. Recupera tu movilidad con atención especializada."
        keywords="esguinces benito juarez cdmx, dolor lumbar benito juarez, acupuntura esguinces cdmx, tratamiento dolor lumbar natural, acupuntura cdmx benito juarez"
        image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
        url="https://acupunturacdmx.com/blog/acupuntura-dolor-cronico-cdmx"
        type="article"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "Alivio para Esguinces y Ciática en Benito Juárez",
              "description": "Expertos en el tratamiento de esguinces y dolor lumbar en la Alcaldía Benito Juárez. Recupera tu movilidad con atención especializada.",
              "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
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
                "@id": "https://acupunturacdmx.com/blog/acupuntura-dolor-cronico-cdmx"
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
              <span className="text-white text-[10px] font-bold">QI</span>
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
            <ShieldCheck className="w-3 h-3 text-[#00CED1]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#00CED1]">Alivio Especializado</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Alivio para <span className="text-[#00CED1]">Esguinces</span> y Ciática en Benito Juárez
          </h1>
          <div className="w-12 h-px bg-[#00CED1]/30 mb-8"></div>
          
          <div className="relative aspect-[21/9] w-full rounded-[2rem] overflow-hidden mb-12 shadow-sm border border-[#AFEEEE]/20">
            <Image 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop" 
              alt="Representación de salud física y bienestar lumbar, enfocada en el alivio del dolor crónico."
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
              El dolor crónico no es solo una sensación física persistente; es una carga que limita tu libertad y agota tu energía vital. En <strong>Acupuntura CDMX</strong>, abordamos el dolor desde una perspectiva neurofisiológica y energética, ofreciendo una alternativa potente para quienes buscan reducir su dependencia de analgésicos químicos.
            </p>
            <p className="mt-6">
              La ciencia moderna explica la eficacia de la acupuntura a través de la <strong>liberación de endorfinas y encefalinas</strong>, los analgésicos naturales más poderosos del cuerpo humano. Además, se basa en la <strong>Teoría de la Compuerta</strong> (Gate Control Theory), donde la estimulación de fibras nerviosas específicas bloquea las señales de dolor antes de que lleguen al cerebro, proporcionando un alivio profundo y duradero.
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
              Especialistas en Esguinces y Lesiones Musculares
            </h2>
            <ul className="space-y-6">
              {[
                { title: "Alivio inmediato en Esguinces", desc: "Técnicas de recuperación acelerada para que vuelvas a caminar sin dolor." },
                { title: "Recuperación de movilidad", desc: "Liberamos la tensión en fascias y músculos en el corazón de la Benito Juárez." },
                { title: "Menos dependencia a fármacos", desc: "Un camino seguro para disminuir el uso de analgésicos y evitar sus efectos secundarios." },
                { title: "Mejora en la calidad de vida", desc: "Al eliminar el dolor persistente, recuperas el sueño, el ánimo y tu capacidad de disfrutar el día a día." }
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

            {/* Nueva sección de Especialización Médica */}
            <div className="grid md:grid-cols-2 gap-12 mt-16 pt-12 border-t border-[#00CED1]/10">
              <div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight">Especialización Médica</h3>
                <p className="text-[#4A4A4A] leading-relaxed mb-6 font-light text-base md:text-lg">
                  Nuestras técnicas se basan en la estimulación del sistema nervioso y muscular. 
                  <span className="font-semibold"> No realizamos terapias de imanes ni biomagnetismo</span>, enfocándonos exclusivamente en acupuntura médica de alta precisión.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight">Enfoque Científico</h3>
                <p className="text-[#4A4A4A] leading-relaxed mb-6 font-light text-base md:text-lg">
                  Utilizamos protocolos validados para la reducción de inflamación y el manejo del dolor crónico, garantizando una atención profesional en cada sesión.
                </p>
              </div>
            </div>
          </motion.section>

          <div className="mt-8 p-4 border-l-4 border-[#00CED1] bg-[#E0FFFF]">
            <p className="text-sm font-bold">Aviso de Seguridad:</p>
            <p className="text-sm">Especializados en recuperación de lesiones y esguinces. Fracturas y traumatismos mayores requieren atención en urgencias hospitalarias.</p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>
              Nuestro enfoque en el <strong>Centro QI</strong> combina la precisión técnica con un entorno de profunda serenidad. Cada sesión es un paso hacia la recuperación de tu autonomía física, permitiéndote dejar atrás el ciclo del dolor y retomar las actividades que más amas.
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
          <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Agenda tu sesión de alivio hoy</h3>
          <p className="text-[#A0A0A0] mb-10 font-light max-w-md mx-auto">
            No permitas que el dolor defina tu vida. Descubre el poder de la sanación natural en manos expertas.
          </p>
          <WhatsAppButton 
            link={WHATSAPP_LINKS.dolorCronico} 
            label="Recuperar mi Bienestar" 
            className="bg-[#F0FFFF] text-[#2D2D2D] hover:bg-[#E0FFFF]"
          />
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
