import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Sparkles, Brain } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import { WhatsAppButton, WHATSAPP_LINKS } from '@/components/WhatsAppButton';

export default function AnsiedadBlog() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#2D2D2D] selection:bg-[#E5E4D7]">
      <SEO 
        title="Acupuntura para la Ansiedad en Benito Juárez CDMX | Centro QI"
        description="Recupera tu calma mental en la Alcaldía Benito Juárez. La acupuntura regula tu sistema nervioso y reduce el estrés para un descanso reparador."
        keywords="ansiedad acupuntura benito juarez, tratamiento estrés natural méxico, insomnio acupuntura cdmx, calma mental natural, medicina tradicional china ansiedad"
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
            <Brain className="w-3 h-3 text-[#5A5A40]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#5A5A40]">Salud Mental Integral</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
            Acupuntura para la Ansiedad en <span className="text-[#5A5A40]">Benito Juárez</span>: Recupera tu Calma
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
              En el ritmo acelerado de la Ciudad de México, la ansiedad se ha convertido en una respuesta común del organismo ante el estrés constante. Sin embargo, vivir en un estado de alerta perpetuo agota tus reservas vitales. En el <strong>Centro de Acupuntura QI</strong>, utilizamos la sabiduría milenaria para restaurar el silencio interno que tu cuerpo necesita.
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
            className="bg-[#F2F1E6] p-8 md:p-12 rounded-[2rem] border border-[#E5E4D7]"
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
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#5A5A40]/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <Sparkles className="w-8 h-8 text-[#5A5A40] mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Recupera tu paz interior hoy</h3>
          <p className="text-[#A0A0A0] mb-10 font-light max-w-md mx-auto">
            Permítete un espacio de silencio y sanación. Tu mente y tu cuerpo te lo agradecerán.
          </p>
          <WhatsAppButton 
            href={WHATSAPP_LINKS.ANSIEDAD} 
            label="Recupera tu Calma Ahora" 
            className="bg-[#FAF9F6] text-[#2D2D2D] hover:bg-[#F2F1E6]"
          />
          <p className="text-sm text-[#A0A0A0] mt-6 italic">
            *Por seguridad de nuestros pacientes, tratamos ansiedad y estrés crónico; no atendemos crisis agudas o urgencias psiquiátricas.
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
          href={WHATSAPP_LINKS.ANSIEDAD} 
          label="" 
          className="w-14 h-14 p-0 justify-center"
        />
      </motion.div>
    </div>
  );
}
