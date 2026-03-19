import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Sparkles, Baby } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import { WhatsAppButton, WHATSAPP_LINKS } from '@/components/WhatsAppButton';

export default function FertilidadBlog() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#2D2D2D] selection:bg-[#E5E4D7]">
      <SEO 
        title="Acupuntura para la Fertilidad en Benito Juárez CDMX | Centro QI"
        description="Acompañamiento natural para tu fertilidad en la Alcaldía Benito Juárez. Equilibra tu cuerpo y mente para la concepción con expertos en acupuntura."
        keywords="acupuntura fertilidad benito juarez, concepción natural cdmx, apoyo FIV acupuntura, equilibrio hormonal femenino, fertilidad natural benito juarez, centro qi fertilidad"
      />

      {/* Navigation - Minimalist */}
      <nav className="sticky top-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-[#E5E4D7]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs uppercase tracking-widest font-bold">Inicio</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#5A5A40] rounded-full flex items-center justify-center">
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
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-[#F2F1E6] rounded-full">
            <Baby className="w-3 h-3 text-[#5A5A40]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#5A5A40]">Salud Reproductiva Integral</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
            Acupuntura para la Fertilidad en <span className="text-[#5A5A40]">Benito Juárez</span>: Equilibra tu Cuerpo
          </h1>
          <div className="w-12 h-px bg-[#5A5A40]/30 mb-8"></div>
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
              El camino hacia la maternidad es un proceso sagrado que requiere armonía física y emocional. En el <strong>Centro de Acupuntura QI</strong>, entendemos que la fertilidad no es solo una cuestión biológica, sino un estado de equilibrio integral. La acupuntura ofrece un enfoque natural y efectivo para preparar tu cuerpo y mente para recibir una nueva vida.
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
            className="bg-[#F2F1E6] p-8 md:p-12 rounded-[2rem] border border-[#E5E4D7]"
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
                  <CheckCircle2 className="w-6 h-6 text-[#5A5A40] flex-shrink-0 mt-1" />
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
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#5A5A40]/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <Sparkles className="w-8 h-8 text-[#5A5A40] mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Inicia tu camino hacia la maternidad</h3>
          <p className="text-[#A0A0A0] mb-10 font-light max-w-md mx-auto">
            Estamos aquí para acompañarte con profesionalismo y calidez en cada paso de este hermoso viaje.
          </p>
          <WhatsAppButton 
            href={WHATSAPP_LINKS.FERTILIDAD} 
            label="Agenda tu Consulta de Fertilidad" 
            className="bg-[#FAF9F6] text-[#2D2D2D] hover:bg-[#F2F1E6]"
          />
          <p className="text-sm text-[#A0A0A0] mt-6 italic">
            *Por seguridad de nuestras pacientes, realizamos acompañamiento en fertilidad; no realizamos procedimientos quirúrgicos ni diagnósticos de urgencia.
          </p>
        </motion.div>
      </main>

      {/* Footer - Minimalist */}
      <footer className="py-12 border-t border-[#E5E4D7] text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#A0A0A0]">
          © {new Date().getFullYear()} Centro de Acupuntura QI · CDMX
        </p>
      </footer>

      {/* Floating CTA for Mobile */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-8 right-8 z-50 md:hidden"
      >
        <WhatsAppButton 
          href={WHATSAPP_LINKS.FERTILIDAD} 
          label="" 
          className="w-14 h-14 p-0 justify-center"
        />
      </motion.div>
    </div>
  );
}
