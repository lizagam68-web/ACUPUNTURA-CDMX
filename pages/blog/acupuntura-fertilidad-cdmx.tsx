import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Sparkles, Baby } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';
import SEO from '@/components/SEO';
import { WhatsAppButton } from '@/components/WhatsAppButton'; // Solo importamos el botón

// Definimos el link aquí mismo para evitar que Next.js se pierda
const WHATSAPP_LINK_DIRECTO = "https://wa.me/525552520615?text=Hola%20Liz,%20leí%20sobre%20el%20equilibrio%20del%20eje%20hormonal%20y%20me%20gustaría%20agendar%20una%20valoración%20para%20fertilidad.";

export default function FertilidadBlog() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#2D2D2D] selection:bg-[#AFEEEE]">
      <SEO 
        title="Acupuntura para la Fertilidad en Benito Juárez CDMX | Acupuntura CDMX"
        description="Acompañamiento natural para tu fertilidad en la Alcaldía Benito Juárez. Equilibra tu cuerpo y mente para la concepción con expertos en acupuntura."
        keywords="acupuntura fertilidad benito juarez, concepción natural cdmx, apoyo FIV acupuntura, equilibrio hormonal femenino, fertilidad natural benito juarez, acupuntura cdmx fertilidad"
        image="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop"
        url="https://acupunturacdmx.com/blog/acupuntura-fertilidad-cdmx"
        type="article"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "Acupuntura para la Fertilidad en Benito Juárez: Equilibra tu Cuerpo",
              "description": "Acompañamiento natural para tu fertilidad en la Alcaldía Benito Juárez. Equilibra tu cuerpo y mente para la concepción con expertos en acupuntura.",
              "image": "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop",
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
                "@id": "https://acupunturacdmx.com/blog/acupuntura-fertilidad-cdmx"
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
            <Baby className="w-3 h-3 text-[#00CED1]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#00CED1]">Salud Reproductiva Integral</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
            Acupuntura para la Fertilidad en <span className="text-[#00CED1]">Benito Juárez</span>: Equilibra tu Cuerpo
          </h1>
          <div className="w-12 h-px bg-[#00CED1]/30 mb-8"></div>
          
          <div className="relative aspect-[21/9] w-full rounded-[2rem] overflow-hidden mb-12 shadow-sm border border-[#AFEEEE]/20">
            <Image 
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop" 
              alt="Ambiente de bienestar y serenidad, representando el equilibrio hormonal y la fertilidad femenina."
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
              El camino hacia la maternidad es un proceso sagrado que requiere armonía física y emocional. En <strong>Acupuntura CDMX</strong>, entendemos que la fertilidad no es solo una cuestión biológica, sino un estado de equilibrio integral. La acupuntura ofrece un enfoque natural y efectivo para preparar tu cuerpo y mente para recibir una nueva vida.
            </p>
            <p className="mt-6">
              A través de la estimulación de puntos específicos, la acupuntura logra mejorar significativamente el <strong>flujo sanguíneo hacia el útero y los ovarios</strong>, optimizando el entorno para la implantación. Además, actúa regulando el complejo <strong>eje hormonal Hipotálamo-Hipófisis-Ovario</strong>, lo que favorece ciclos menstruales más regulares y una ovulación de mejor calidad.
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
              Acompañamiento en Procesos de FIV y Concepción Natural
            </h2>
            <ul className="space-y-6">
              {[
                { title: "Reducción de estrés", desc: "Disminuimos los niveles de cortisol que pueden interferir con la implantación y el éxito de los tratamientos de fertilidad." },
                { title: "Mejora de la calidad ovárica", desc: "Fomentamos una mejor nutrición celular en los folículos a través de una circulación optimizada." },
                { title: "Engrosamiento del endometrio", desc: "Ayudamos a preparar un revestimiento uterino receptivo y saludable para el embrión." },
                { title: "Apoyo emocional", desc: "Brindamos un espacio de contención y serenidad durante las etapas más desafiantes del proceso." }
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
              Ya sea que estés buscando un embarazo de forma natural o te encuentres en un proceso de Reproducción Asistida (FIV, Inseminación Artificial), la acupuntura se integra perfectamente como una terapia complementaria que potencia las probabilidades de éxito, cuidando siempre de tu bienestar emocional.
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
          <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Inicia tu camino hacia la maternidad</h3>
          <p className="text-[#A0A0A0] mb-10 font-light max-w-md mx-auto">
            Estamos aquí para acompañarte con profesionalismo y calidez en cada paso de este hermoso viaje.
          </p>
          <WhatsAppButton 
            link={WHATSAPP_LINK_DIRECTO} 
            label="Agenda tu Consulta de Fertilidad" 
            className="bg-[#F0FFFF] text-[#2D2D2D] hover:bg-[#E0FFFF]"
          />
          <p className="text-sm text-[#A0A0A0] mt-6 italic">
            *Por seguridad de nuestras pacientes, realizamos acompañamiento en fertilidad; no realizamos procedimientos quirúrgicos ni diagnósticos de urgencia.
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
