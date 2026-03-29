'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  MessageCircle, 
  Zap, 
  ArrowRight, 
  MapPin,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { trackConversion, handleGlobalCTA } from '@/utils/analytics';
import { DermatitisSection } from '@/components/DermatitisSection';
import { BlogGrid } from '@/components/BlogGrid';

const Reveal = ({ children, direction = 'up', delay = 0, className = '' }: { children: React.ReactNode, direction?: 'up' | 'left' | 'right', delay?: number, className?: string }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 22 : 0,
      x: direction === 'left' ? -28 : direction === 'right' ? 28 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function BiologyPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRestauracionClick = () => {
    handleGlobalCTA("sesión de restauración");
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#2ABFBF]/20">
      <Head>
        <title>Acupuntura CDMX · Protocolos de Acupuntura de Especialidad — Benito Juárez</title>
        <meta name="description" content="Clínica de Acupuntura en la Benito Juárez, CDMX. Especialistas en Parálisis Facial, Clínica del Dolor y Restauración Neural. Protocolos clínicos de alta precisión." />
        <meta name="keywords" content="acupuntura cdmx, acupuntura benito juarez, parálisis facial cdmx, clínica del dolor cdmx, acupuntura del valle, acupuntura nápoles" />
        <meta property="og:title" content="Acupuntura CDMX · Protocolos de Especialidad" />
        <meta property="og:description" content="Neurofisiología del Bienestar en la Benito Juárez. Especialistas en Parálisis Facial y Dolor Crónico." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acupunturacdmx.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Acupuntura CDMX",
              "image": "https://acupunturacdmx.com/logo.png",
              "@id": "https://acupunturacdmx.com",
              "url": "https://acupunturacdmx.com",
              "telephone": "+525552520615",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Benito Juárez",
                "addressLocality": "Ciudad de México",
                "addressRegion": "CDMX",
                "postalCode": "03100",
                "addressCountry": "MX"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.3828,
                "longitude": -99.1612
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "07:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "08:00",
                  "closes": "14:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/acupunturacdmx",
                "https://www.instagram.com/acupunturacdmx"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Dónde se encuentra la clínica de acupuntura?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nuestra clínica de acupuntura de especialidad se encuentra en la Alcaldía Benito Juárez, Ciudad de México, cubriendo zonas como Del Valle, Nápoles e Insurgentes Sur."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Qué protocolos de acupuntura ofrecen?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ofrecemos protocolos especializados en Parálisis Facial (Restauración del VII Par Craneal), Clínica del Dolor (Cervicalgia y Lumbalgia) y Equilibrio Neural para el manejo del estrés y ansiedad."
                  }
                }
              ]
            }
          `}
        </script>
      </Head>

      {/* NAV */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[200] w-[90%] max-w-[1000px]">
        <nav className={`flex items-center justify-between px-8 h-[60px] rounded-full border border-[#2ABFBF]/12 backdrop-blur-[20px] transition-all duration-300 ${isScrolled ? 'bg-[#FDFCF9]/88 shadow-[0_12px_40px_rgba(15,37,53,0.12)]' : 'bg-[#FDFCF9]/88 shadow-[0_8px_30px_rgba(15,37,53,0.07)]'}`}>
          <a className="flex items-center gap-2.5 font-black text-[14px] tracking-[0.1em] uppercase text-[#1B3A4B] no-underline" href="#">
            <div className="w-2 h-2 rounded-full bg-[#2ABFBF] animate-pulse"></div>
            Acupuntura CDMX
          </a>
          <ul className="hidden md:flex gap-8 list-none">
            <li><a href="#protocolos" className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#6E8491] no-underline transition-colors hover:text-[#2ABFBF]">Protocolos</a></li>
            <li><a href="#metodo" className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#6E8491] no-underline transition-colors hover:text-[#2ABFBF]">Metodología</a></li>
            <li><a href="#blog" className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#6E8491] no-underline transition-colors hover:text-[#2ABFBF]">Blog</a></li>
            <li><a href="#cita" className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#6E8491] no-underline transition-colors hover:text-[#2ABFBF]">Contacto</a></li>
          </ul>
          <button 
            onClick={() => handleGlobalCTA("sesión de valoración")} 
            className="flex items-center gap-[7px] bg-[#2ABFBF] text-[#0F2535] px-[22px] py-[10px] rounded-full text-[11px] font-black uppercase no-underline transition-all hover:bg-[#5DD0D0] hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(42,191,191,0.25)]"
          >
            <MessageCircle size={13} fill="currentColor" />
            Agendar
          </button>
        </nav>
      </div>

      {/* HERO */}
      <section className="relative min-h-[90vh] bg-[#0F2535] text-white grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center px-[8%] pt-[140px] pb-[80px] overflow-hidden">
        <div className="absolute top-[-20%] right-[-14%] w-[72vw] h-[72vw] rounded-full border border-[#2ABFBF]/6 pointer-events-none"></div>
        <div className="absolute bottom-[-12%] left-[-6%] w-[46vw] h-[46vw] rounded-full border border-[#2ABFBF]/6 pointer-events-none"></div>
        <div className="absolute right-[-2%] bottom-[-8%] font-serif italic text-[38vw] text-[#2ABFBF]/[0.035] leading-none pointer-events-none select-none">田</div>
        
        <div className="relative z-[2] max-w-[700px]">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-[#2ABFBF]/30 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-[#5DD0D0] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2ABFBF] animate-pulse"></div>
            Protocolos de Acupuntura - Benito Juárez, CDMX
          </div>
          <h1 className="text-[clamp(42px,5.8vw,86px)] font-black leading-[0.9] tracking-[-0.03em] uppercase mb-[22px]">
            Tu cuerpo no está<span className="block mt-1.5 font-serif italic font-light text-[clamp(40px,5.5vw,82px)] lowercase tracking-normal text-[#5DD0D0] leading-[1.1]">fallando&hellip; está saturado</span>
          </h1>
          <p className="text-[19px] text-white/90 max-w-[520px] mb-[42px] font-light leading-[1.8]">
            Un sistema nervioso colapsado no se resuelve con más descanso. Se resuelve con <b className="text-white font-bold opacity-100">precisión clínica, protocolo técnico</b> y una Clínica de Protocolos de Acupuntura en el corazón de la Benito Juárez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button 
              onClick={() => handleGlobalCTA("sesión de valoración")} 
              className="group relative inline-flex items-center justify-center gap-3 bg-[#2ABFBF] text-[#0F2535] px-10 py-[22px] rounded-full font-black uppercase tracking-[0.12em] text-[14px] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(42,191,191,0.45)] hover:bg-[#5DD0D0] w-full sm:w-auto overflow-hidden"
            >
              <div className="absolute inset-0 rounded-full bg-[#2ABFBF] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out skew-x-12"></div>
              <MessageCircle size={20} fill="currentColor" className="relative z-10" />
              <span className="relative z-10">Agendar primera consulta</span>
            </button>
            <a href="#protocolos" className="inline-flex items-center justify-center gap-2.5 border border-white/20 text-white/80 px-9 py-[20px] rounded-full font-bold uppercase tracking-[0.1em] text-[12px] no-underline transition-all hover:border-[#2ABFBF]/60 hover:text-[#5DD0D0] w-full sm:w-auto">
              Ver protocolos
            </a>
          </div>
          <div className="flex items-center gap-2.5 text-[11px] font-bold tracking-[0.1em] uppercase text-white/50 mb-12">
            <Zap size={12} className="text-[#5DD0D0]" />
            Respuesta inmediata por WhatsApp
          </div>
          <div className="w-full h-px bg-white/7 mb-12"></div>
        </div>

        <div className="hidden lg:block relative z-[2]">
          <div className="bg-[#2ABFBF]/8 border border-[#2ABFBF]/22 backdrop-blur-[16px] p-11 max-w-[370px] rounded-[20px]">
            <span className="block text-[10px] font-bold tracking-[0.24em] uppercase text-[#5DD0D0] mb-5">Protocolo de Especialidad - Acupuntura de Precisión</span>
            <div className="font-serif italic text-[28px] text-white leading-[1.3] mb-4">Parálisis Facial &amp; Restauración del Nervio Facial</div>
            <p className="text-[13px] text-white/60 leading-[1.8] mb-7">El tratamiento de mayor precisión clínica. Restitución funcional completa del VII par craneal mediante electroacupuntura de precisión.</p>
          </div>
        </div>
      </section>

      {/* DOLOR SECTION */}
      <section className="bg-[#0F2535] px-[8%] py-[110px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(42,191,191,0.05),transparent_65%)] pointer-events-none"></div>
        <Reveal>
          <div className="flex items-center gap-3.5 text-[11px] font-bold tracking-[0.28em] uppercase text-[#2ABFBF] mb-6 before:content-[''] before:w-7 before:h-px before:bg-[#2ABFBF]/40">Señales de alerta</div>
          <h2 className="font-black text-[clamp(36px,5.5vw,80px)] leading-[0.93] tracking-[-0.03em] uppercase text-white mb-4">
            El agotamiento tiene un<br/>lenguaje propio&hellip;<em className="block mt-1.5 font-serif italic font-light text-[clamp(34px,5.2vw,76px)] lowercase tracking-normal text-[#5DD0D0] leading-[1.1]">escucha las señales</em>
          </h2>
          <p className="text-[17px] text-white/90 max-w-[600px] leading-[1.8] mb-[72px] font-light">Estas son las señales de un sistema nervioso <b className="text-white font-bold">colapsado</b> en la persona moderna:</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-[#2ABFBF]/10 border border-[#2ABFBF]/10">
          {[
            { icon: '💤', title: 'Sueño Roto', text: 'Te duermes cansado&hellip; pero despiertas igual o peor. Tu mente nunca se apaga del todo.' },
            { icon: '🧠', title: 'Mente Saturada', text: 'Pensamientos constantes, dificultad para concentrarte, decisiones más lentas&hellip; y más errores.' },
            { icon: '🔥', title: 'Tensión Física Acumulada', text: 'Cuello duro, espalda cargada, mandíbula apretada. Dolor que ya se volvió "normal".' },
            { icon: '⚡', title: 'Sistema en Alerta', text: 'Ansiedad, irritabilidad, sensación de urgencia constante aunque no haya peligro real.' },
            { icon: '🔋', title: 'Desgaste Silencioso', text: 'Fatiga crónica, baja energía, pérdida de motivación y sensación de estar "funcionando a medias".' },
            { icon: '💥', title: 'El Patrón Oculto', text: 'No es falta de descanso. Es un sistema nervioso que lleva demasiado tiempo sin recuperarse.' }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-[#0F2535] p-11 border-r border-[#2ABFBF]/8 relative overflow-hidden group transition-colors hover:bg-[#2ABFBF]/5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-[#2ABFBF] after:to-[#5DD0D0] after:scale-x-0 after:origin-left after:transition-transform after:duration-400 hover:after:scale-x-100">
                <span className="block text-[28px] mb-5 leading-none">{item.icon}</span>
                <div className="font-black text-[13px] tracking-[0.18em] uppercase text-[#5DD0D0] mb-3.5">{item.title}</div>
                <div className="font-serif italic text-[20px] text-white/85 leading-[1.55]" dangerouslySetInnerHTML={{ __html: item.text }}></div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 p-14 lg:p-[56px_60px] bg-[#2ABFBF]/6 border border-[#2ABFBF]/18 relative overflow-hidden">
            <div className="absolute top-[-20px] left-8 font-serif italic text-[180px] text-[#2ABFBF]/8 leading-none pointer-events-none select-none">&quot;</div>
            <div className="relative z-[1] font-black text-[clamp(22px,3vw,42px)] leading-[1.05] tracking-[-0.02em] uppercase text-white mb-5">
              Si no duermes bien&hellip; si tu cuerpo duele&hellip;<br/>si tu mente <span className="text-[#5DD0D0]">no se detiene&hellip;</span>
            </div>
            <div className="relative z-[1] font-serif italic text-[clamp(20px,2.5vw,34px)] text-white/95 leading-[1.35] mb-10 max-w-[720px]">
              No estás cansado: estás <strong className="text-white font-normal not-italic">desregulado.</strong><br/>Y eso tiene solución clínica.
            </div>
            <div className="flex flex-wrap gap-2.5 mt-12">
              {['Insomnio crónico', 'Ansiedad de alto rendimiento', 'Estrés laboral crónico', 'Cervicalgia y lumbalgia', 'Bruxismo', 'Fatiga mental', 'Burnout moderno'].map((kw, i) => (
                <span key={i} className="border border-[#2ABFBF]/20 px-4.5 py-2 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase text-white/60 transition-all cursor-default hover:border-[#5DD0D0] hover:text-[#5DD0D0]">{kw}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* STRIP */}
      <div className="bg-[#2ABFBF] px-[8%] py-5 flex items-center gap-9 overflow-hidden">
        {[
          { b: 'Protocolos de Acupuntura', s: 'Benito Juárez' },
          { b: 'Acupuntura CDMX', s: 'Protocolo 2026' },
          { b: 'Benito Juárez', s: 'Zona Sur CDMX' },
          { b: '7AM-8PM', s: 'Horario Extendido' }
        ].map((item, i) => (
          <div key={i} className="flex-shrink-0 flex items-center gap-4 whitespace-nowrap text-[11px] font-bold tracking-[0.18em] uppercase text-white/80">
            <b className="text-white">{item.b}</b>
            <span className="w-1 h-1 rounded-full bg-white/30"></span>
            {item.s}
          </div>
        ))}
      </div>

      {/* PROTOCOLOS */}
      <section id="protocolos" className="px-[8%] py-[100px]">
        <Reveal>
          <span className="block text-[#2ABFBF] font-bold text-[12px] uppercase tracking-[0.2em] mb-[15px]">Protocolos de Especialidad - Las que el paciente busca</span>
          <div className="font-serif italic text-[clamp(30px,3.8vw,50px)] text-[#1B3A4B] mb-4 leading-[1.15]">El protocolo exacto que necesitas</div>
          <p className="text-[15px] text-slate-700 leading-[1.8] max-w-[580px] mb-14">Tres accesos directos al tratamiento. Sin generalismos. La persona moderna sabe lo que le duele — y nosotros sabemos cómo resolverlo con precisión clínica.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { n: '01', h3: 'Parálisis Facial', h4: '"Restauración del VII Par Craneal"', p: 'Electroacupuntura de precisión en los 43 puntos motores del nervio facial. Reactivación progresiva y documentada de la función neuromuscular. Protocolo de precisión, resultados medibles.', service: 'parálisis facial' },
            { n: '02', h3: 'Clínica del Dolor', h4: '"Eliminación de Interferencias Físicas"', p: 'Protocolo rápido para lesiones agudas, dolor crónico, cervicalgia y lumbalgia. La persona moderna que sufre no rinde. Resolución clínica sin dependencia de fármacos.', service: 'clínica del dolor' },
            {
              n: '03', 
              h3: 'Equilibrio Neural', 
              h4: '"Contención del Sistema Nervioso"', 
              p: 'El escape mental técnico que la persona moderna de la Benito Juárez necesita. Regulación del eje cortisol-sueño, neuromodulación del estrés y restauración de la claridad ejecutiva.',
              service: 'equilibrio neural'
            }
          ].map((card, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-white p-[50px_40px] rounded-[15px] border border-[#eee] transition-all duration-400 relative overflow-hidden group hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(27,58,75,0.05)] hover:border-[#2ABFBF] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-[#2ABFBF] before:to-[#5DD0D0] before:scale-x-0 before:origin-left before:transition-transform before:duration-400 hover:before:scale-x-100">
                <span className="block text-[12px] font-bold text-[#2ABFBF] mb-5 tracking-[0.2em] uppercase">PROTOCOLO {card.n}</span>
                <h3 className="text-[22px] font-black mb-2 uppercase text-[#1B3A4B]">{card.h3}</h3>
                <h4 className="font-serif italic text-[19px] text-[#2ABFBF] mb-[18px]">{card.h4}</h4>
                <p className="text-[14px] text-slate-700 leading-[1.8]">{card.p}</p>
                <button 
                  onClick={() => handleGlobalCTA(card.service)} 
                  className="inline-flex items-center gap-2 mt-7 text-[10px] font-black tracking-[0.2em] uppercase text-[#2ABFBF] no-underline transition-[gap] duration-200 hover:gap-3.5"
                >
                  Ver Protocolo <ArrowRight size={14} />
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
          <Reveal delay={0.1}>
            <div className="bg-white p-10 rounded-xl border border-[#1B3A4B]/7 transition-all duration-300 hover:border-[#C4ECEC] hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(42,191,191,0.08)]">
              <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#2ABFBF] mb-3">Filosofía Clínica</span>
              <div className="font-serif italic text-[20px] text-[#1B3A4B] leading-[1.45]">&quot;La persona moderna no necesita incienso. Necesita datos, precisión y un sistema nervioso que le obedezca.&quot;</div>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="bg-[#2ABFBF] p-10 rounded-xl border border-[#1B3A4B]/7 transition-all duration-300 hover:border-[#C4ECEC] hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(42,191,191,0.08)]">
              <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 mb-3">Manifiesto Kansai</span>
              <div className="font-serif italic text-[20px] text-white leading-[1.45]">&quot;Transformamos el colapso en orden, dirección y contención clínica.&quot;</div>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="bg-white p-10 rounded-xl border border-[#1B3A4B]/7 transition-all duration-300 hover:border-[#C4ECEC] hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(42,191,191,0.08)]">
              <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#2ABFBF] mb-3">Anclaje Geográfico</span>
              <div className="font-serif italic text-[20px] text-[#1B3A4B] leading-[1.45]">&quot;Clínica de Protocolos de Acupuntura en el corazón de la Alcaldía Benito Juárez. Del Valle, Nápoles, Insurgentes Sur.&quot;</div>
            </div>
          </Reveal>
        </div>
      </section>

      <DermatitisSection />

      {/* METODOLOGÍA */}
      <section id="metodo" className="bg-[#0F2535] px-[8%] py-[100px]">
        <Reveal>
          <span className="block text-[#5DD0D0] font-bold text-[12px] uppercase tracking-[0.2em] mb-[15px]">Protocolo de Intervención - 4 Fases</span>
          <div className="font-serif italic text-[clamp(30px,3.8vw,50px)] text-white mb-4 leading-[1.15]">Cómo funciona<br/>el sistema</div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mt-[60px]">
          {[
            { n: '01', title: 'Diagnóstico de Pulso Técnico', text: 'Evaluación neurológica y energética de 60 min. Mapeamos tu sistema nervioso autónomo con precisión clínica antes de cualquier intervención.' },
            { n: '02', title: 'Protocolo de Intervención', text: 'Plan de sesiones basado en métricas clínicas y objetivos funcionales. Sin suposiciones. Solo evidencia aplicada a tu caso específico.' },
            { n: '03', title: 'Restauración Activa', text: 'Sesiones desde las 7 AM y fines de semana. Horarios diseñados para la persona moderna. Tu agenda manda, nuestra precisión también.' },
            { n: '04', title: 'Seguimiento con Métricas', text: 'Documentación de avance en cada sesión. Lo que no se mide, no se mejora. Reportes de progreso clínico para la persona moderna orientada a resultados.' }
          ].map((step, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-[44px_36px] border-r border-white/7 last:border-r-0 group">
                <div className="font-black text-[10px] tracking-[0.2em] text-[#2ABFBF] mb-5">FASE {step.n}</div>
                <div className="w-8 h-0.5 bg-[#C4ECEC] mb-5 transition-[width] duration-300 group-hover:w-14 group-hover:bg-[#2ABFBF]"></div>
                <div className="text-[16px] font-bold text-white mb-2.5">{step.title}</div>
                <p className="text-[13px] text-white/85 leading-[1.75]">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      {/* BLOG */}
      <section id="blog" className="bg-[#FDFCF9] px-[8%] py-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <Reveal>
              <span className="block text-[#2ABFBF] font-bold text-[12px] uppercase tracking-[0.3em] mb-4">Autoridad Tecnica</span>
              <h2 className="font-serif italic text-[clamp(32px,4.5vw,56px)] text-[#1B3A4B] leading-[1.1] mb-2">Blog de Protocolos</h2>
              <div className="w-20 h-1 bg-[#2ABFBF] rounded-full"></div>
            </Reveal>
            <Reveal direction="right">
              <a className="group flex items-center gap-3 text-[12px] font-black tracking-[0.15em] uppercase text-[#1B3A4B] no-underline transition-colors hover:text-[#2ABFBF]" href="#">
                Ver todos los artículos
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Featured Post */}
            <div className="lg:col-span-8">
              <Reveal>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-8 bg-[#1B3A4B]">
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                      <svg viewBox="0 0 200 112" width="160" height="90" fill="none" className="opacity-40">
                        <circle cx="100" cy="56" r="30" stroke="#2ABFBF" strokeWidth="1"/>
                        <line x1="100" y1="26" x2="100" y2="86" stroke="#2ABFBF" strokeWidth="0.5"/>
                        <line x1="70" y1="56" x2="130" y2="56" stroke="#2ABFBF" strokeWidth="0.5"/>
                        <circle cx="100" cy="56" r="5" fill="#2ABFBF"/>
                      </svg>
                    </div>
                    <div className="absolute top-6 left-6 bg-[#2ABFBF] text-[#0F2535] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Destacado</div>
                  </div>
                  <div className="max-w-[680px]">
                    <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#2ABFBF] mb-4">Parálisis Facial</p>
                    <h3 className="font-serif text-[clamp(24px,3vw,36px)] text-[#1B3A4B] leading-[1.2] mb-6 group-hover:text-[#2ABFBF] transition-colors">Por qué nuestra experiencia técnica salva tu movilidad facial</h3>
                    <p className="text-[16px] text-[#2D3E4B] leading-[1.8] mb-8">La parálisis facial periférica tiene una ventana de intervención crítica. Descubre cómo el Protocolo de Especialidad actúa en las primeras 72 horas para maximizar la recuperación funcional.</p>
                    <div className="flex items-center gap-4 text-[12px] text-[#B5C4CC] font-medium">
                      <span>Marzo 2026</span>
                      <span className="w-1 h-1 rounded-full bg-[#B5C4CC]"></span>
                      <span>7 min de lectura</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sidebar Posts */}
            <div className="lg:col-span-4 flex flex-col gap-10">
              {[
                { tag: 'Estrés Moderno', title: 'Acupuntura vs. Estrés Crónico en la Benito Juárez', meta: 'Marzo 2026', bg: 'bg-[#EBF1F5]' },
                { tag: 'Sueño', title: 'Los 5 puntos de acupuntura para dormir profundo', meta: 'Febrero 2026', bg: 'bg-[#254D63]' },
                { tag: 'Clínica del Dolor', title: 'Cervicalgia: El protocolo de liberación miofascial', meta: 'Enero 2026', bg: 'bg-[#F4F8FB]' }
              ].map((post, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group cursor-pointer flex gap-6 items-start">
                    <div className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden ${post.bg} flex items-center justify-center transition-transform group-hover:scale-105`}>
                      <svg viewBox="0 0 100 100" width="40" height="40" fill="none" className="opacity-30">
                        <circle cx="50" cy="50" r="20" stroke={post.bg.includes('254D63') ? '#fff' : '#1B3A4B'} strokeWidth="1"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#2ABFBF] mb-2">{post.tag}</p>
                      <h4 className="font-serif text-[17px] text-[#1B3A4B] leading-[1.4] group-hover:text-[#2ABFBF] transition-colors mb-2">{post.title}</h4>
                      <p className="text-[11px] text-[#B5C4CC]">{post.meta}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BlogGrid />

      {/* CTA */}
      <section id="cita" className="bg-[#1B3A4B] px-[8%] py-[100px] relative overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-12 before:content-[''] before:absolute before:top-[-160px] before:right-[5%] before:w-[460px] before:h-[460px] before:rounded-full before:border before:border-[#2ABFBF]/7 before:pointer-events-none">
        <Reveal direction="left">
          <div className="relative z-[1] font-black text-[clamp(28px,3.8vw,56px)] leading-none uppercase tracking-[-0.02em] text-white">
            Agenda tu consulta<em className="block mt-1.5 font-serif italic font-light text-[clamp(26px,3.5vw,52px)] lowercase tracking-normal text-[#5DD0D0]">de valoracion tecnica</em>
          </div>
        </Reveal>
        <div className="relative z-[1] flex flex-col items-start md:items-end gap-3.5">
          <Reveal direction="right">
          <button 
            onClick={() => handleGlobalCTA("consulta de valoración técnica")} 
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-9 py-[18px] text-[13px] font-black tracking-[0.1em] uppercase no-underline rounded-full whitespace-nowrap transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(37,211,102,0.35)]"
          >
            <MessageCircle size={20} fill="currentColor" />
            Escribir por WhatsApp
          </button>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0E1C24] px-[8%] pt-16 pb-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/6 mb-7">
          <Reveal>
            <div className="font-black text-[18px] tracking-[0.1em] uppercase text-white mb-3.5">Acupuntura <span className="text-[#2ABFBF]">CDMX</span></div>
            <p className="text-[13px] text-white/70 leading-[1.85] max-w-[280px]">Neurofisiología del Bienestar. Dirección Técnica Especializada. Alcaldía Benito Juárez, CDMX. Protocolo de Especialidad 2026.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/75 mb-[18px]">Protocolos</div>
            <ul className="list-none space-y-2.5">
              {['Restauración Neural', 'Estrés Moderno', 'Clínica del Dolor', 'Insomnio Clínico', 'Parálisis Facial'].map((link, i) => (
                <li key={i}><a className="text-[13px] text-white/60 no-underline transition-colors hover:text-[#5DD0D0]" href="#">{link}</a></li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/75 mb-[18px]">Zona de Influencia</div>
            <ul className="list-none space-y-2.5">
              {['Benito Juárez', 'Del Valle', 'Nápoles', 'Insurgentes Sur', 'WTC CDMX'].map((link, i) => (
                <li key={i}><a className="text-[13px] text-white/60 no-underline transition-colors hover:text-[#5DD0D0]" href="#">{link}</a></li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/75 mb-[18px]">Contacto</div>
            <ul className="list-none space-y-2.5">
              <li><button 
                onClick={() => handleGlobalCTA("valoración")} 
                className="text-[13px] text-white/60 no-underline transition-colors hover:text-[#5DD0D0] text-left"
              >
                WhatsApp directo
              </button></li>
              <li><span className="text-[13px] text-white/60">Lun-Vie 7 AM - 8 PM</span></li>
              <li><span className="text-[13px] text-white/60">Sábado 8 AM - 2 PM</span></li>
              <li><span className="text-[13px] text-white/60">hola@acupunturacdmx.com</span></li>
              <li><Link href="/privacidad" className="text-[11px] text-[#2ABFBF] font-bold uppercase tracking-widest hover:text-white transition-colors">Aviso de Privacidad</Link></li>
            </ul>
          </Reveal>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2.5 text-[11px] text-white/40 tracking-[0.06em]">
          <span>2026 Acupuntura CDMX - Dirección Técnica Especializada - Benito Juárez</span>
          <span>Protocolo de Acupuntura - ID: AW-985455568</span>
        </div>
      </footer>
    </div>
  );
}

