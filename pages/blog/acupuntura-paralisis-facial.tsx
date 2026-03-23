import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Wind, Sparkles, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';
import SEO from '@/components/SEO';
import { WhatsAppButton, WHATSAPP_LINKS } from '@/components/WhatsAppButton';

export default function ParalisisFacialBlog() {
  return (
    <div className="min-h-screen bg-[#F0FFFF] font-sans text-[#2D2D2D] selection:bg-[#AFEEEE]">
      <SEO 
        title="Acupuntura para Nervio Facial en Benito Juárez | Centro QI"
        description="Especialistas en la recuperación del nervio facial en CDMX. Tratamiento avanzado para parálisis facial en ambiente controlado de consultorio."
        keywords="acupuntura paralisis facial cdmx, tratamiento nervio facial benito juarez, recuperacion paralisis de bell cdmx, acupuntura facial benito juarez"
        image="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop"
        url="https://acupunturacdmx.com/blog/acupuntura-paralisis-facial"
        type="article"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "Recupera el Movimiento de tu Rostro en Benito Juárez: Alivio Efectivo",
              "description": "Especialistas en la recuperación del nervio facial en CDMX. Tratamiento avanzado para parálisis facial en ambiente controlado de consultorio.",
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
                "@id": "https://acupunturacdmx.com/blog/acupuntura-paralisis-facial"
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
            <Wind className="w-3 h-3 text-[#00CED1]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#00CED1]">Tratamiento Especializado</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
            Recupera el Movimiento de tu Rostro en <span className="text-[#00CED1]">Benito Juárez</span>: Alivio Efectivo
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
              La parálisis facial periférica, comúnmente conocida como Parálisis de Bell, es una condición que afecta la movilidad de los músculos del rostro debido a la inflamación del séptimo nervio craneal. En el <strong>Centro de Acupuntura QI</strong>, abordamos esta patología desde una perspectiva integral y serena.
            </p>
            <p className="mt-6">
              La acupuntura actúa como un catalizador biológico: facilita la <strong>reactivación de las terminaciones nerviosas</strong> y promueve una mejora inmediata en la microcirculación sanguínea local. Este flujo renovado de energía y nutrientes es esencial para desinflamar el nervio y restaurar la comunicación entre el cerebro y los músculos faciales.
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
              ¿Por qué iniciar el tratamiento de inmediato?
            </h2>
            <ul className="space-y-6">
              {[
                { title: "Reducción de inflamación", desc: "Disminuimos la presión sobre el nervio facial para detener el daño celular." },
                { title: "Estimulación de puntos motores", desc: "Activamos puntos específicos para reeducar los músculos y recuperar la simetría." },
                { title: "Prevención de secuelas", desc: "Evitamos la aparición de tics permanentes o rigidez muscular residual." }
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
              Nuestro enfoque combina la técnica tradicional con un ambiente de profunda calma japonesa, permitiendo que tu sistema nervioso entre en un estado de reparación óptimo. La recuperación es un camino que recorremos juntos, con paciencia y precisión profesional.
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
          <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Recupera tu bienestar hoy mismo</h3>
          <p className="text-[#A0A0A0] mb-10 font-light max-w-md mx-auto">
            La atención temprana es la clave para una recuperación completa y sin secuelas.
          </p>

          {/* Filtro de Seguridad */}
          <div className="my-10 p-6 bg-[#E0FFFF] border-l-4 border-[#00CED1] rounded-r-2xl text-left">
            <h4 className="font-bold text-[#2D2D2D] mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#00CED1]" />
              Protocolo de Seguridad QI
            </h4>
            <p className="text-sm text-[#4A4A4A] italic leading-relaxed">
              Tratamos parálisis faciales establecidas y secuelas. Por protocolo de seguridad, no atendemos urgencias hospitalarias ni traumatismos agudos. Nuestra atención es 100% presencial en la Benito Juárez.
            </p>
          </div>

          <WhatsAppButton 
            href={WHATSAPP_LINKS.PARALISIS_FACIAL} 
            label="Agenda tu Alivio Prioritario" 
            className="bg-[#F0FFFF] text-[#2D2D2D] hover:bg-[#E0FFFF]"
          />
        </motion.div>
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
