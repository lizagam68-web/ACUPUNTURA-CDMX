'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  Shield, 
  Zap, 
  Sparkles, 
  MapPin, 
  ArrowUpRight, 
  Cpu, 
  Flower2, 
  Mountain, 
  Wind, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  ArrowRight
} from 'lucide-react';

const trackConversion = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', { 'send_to': 'AW-11004313271/NfInCOvXyIkYEPfNq_4p' });
  }
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "525552520615";
  window.open(`https://wa.me/${phoneNumber}?text=Deseo%20iniciar%20un%20protocolo%20clínico%20de%20especialidad.`, "_blank");
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-black/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className="text-xl md:text-2xl font-serif italic opacity-60 group-hover:opacity-100 transition-opacity">{question}</span>
        {isOpen ? <ChevronUp size={20} className="opacity-20" /> : <ChevronDown size={20} className="opacity-20" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-lg font-light leading-relaxed opacity-40">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const padecimientos = [
    {
      categoria: "Salud Femenina",
      icono: Flower2,
      descripcion: "Equilibrio hormonal y apoyo en fertilidad con protocolos de acupuntura especializada.",
      sintomas: ["Fertilidad", "Menopausia", "SOP", "Ciclo Menstrual"]
    },
    {
      categoria: "Dolor Crónico",
      icono: Mountain,
      descripcion: "Alivio para lesiones musculares y nerviosas sin fármacos, enfocado en la raíz del problema.",
      sintomas: ["Ciática", "Dolor Lumbar", "Nervio Facial", "Migrañas"]
    },
    {
      categoria: "Estrés y Ansiedad",
      icono: Wind,
      descripcion: "Liberación de tensión y restauración del sistema nervioso en un entorno de serenidad.",
      sintomas: ["Insomnio", "Agotamiento", "Tensión", "Irritabilidad"]
    }
  ];

  const faqs = [
    {
      question: "¿La acupuntura duele?",
      answer: "No. Las agujas son extremadamente finas. La mayoría de los pacientes sienten una ligera presión o hormigueo agradable, seguido de una relajación profunda."
    },
    {
      question: "¿Cuántas sesiones necesito?",
      answer: "Depende del padecimiento. Para dolor agudo, puede notar alivio desde la primera sesión. Condiciones crónicas suelen requerir de 6 a 10 sesiones."
    },
    {
      question: "¿Es seguro el tratamiento?",
      answer: "Absolutamente. Utilizamos material 100% estéril y desechable, siguiendo los más estrictos protocolos internacionales de higiene."
    }
  ];

  return (
    <div className="min-h-screen selection:bg-[#5A726C]/10">
      <Head>
        <title>Acupuntura CDMX | Precisión Clínica Humana</title>
        <meta name="description" content="Acupuntura de especialidad en Benito Juárez, CDMX. Protocolos avanzados para parálisis facial, dolor crónico y restauración neural." />
      </Head>
      
      {/* HEADER: CALM TECH NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 p-8 flex justify-between items-center">
        <div className="flex flex-col group cursor-default">
          <span className="font-serif italic text-3xl tracking-tighter text-[#1a1a1a]">Qi Clinic</span>
          <div className="h-[1px] w-0 group-hover:w-full bg-[#5A726C] transition-all duration-700" />
        </div>
        <button onClick={trackConversion} className="glass-refraction px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:scale-105 transition-transform">
          Protocolo Cita
        </button>
      </nav>

      {/* HERO 2026: SEDA Y CRISTAL */}
      <section className="relative pt-64 pb-40 px-6 bg-[#FDFCF9]">
        {/* Luz de Refracción (Elimina lo opaco) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_10%,#5A726C15,transparent_60%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            
            <div className="inline-flex items-center gap-3 mb-10 px-6 py-2 glass-refraction rounded-full shadow-sm">
              <div className="w-1.5 h-1.5 bg-[#00f2ff] rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30">
                Dirección Técnica Especializada
              </span>
            </div>
            
            <h1 className="text-6xl md:text-[120px] font-black leading-[0.85] tracking-tighter mb-12 uppercase text-[#1a1a1a]">
              Precisión <br />
              <span className="font-serif italic font-light lowercase text-[0.85em] opacity-80" style={{ WebkitTextStroke: '0.8px #1a1a1a', color: 'transparent' }}>
                Clínica Humana.
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl md:text-3xl font-light leading-relaxed text-black/50 italic mb-16">
              “Transformamos la alta complejidad en un 
              <span className="text-black font-medium"> escape mental y restauración profunda </span> 
              con rigor clínico en la Benito Juárez.”
            </p>

            {/* Botón con efecto de 'Jade Pulido' */}
            <button 
              onClick={trackConversion}
              className="group relative bg-[#1a1a1a] text-white px-16 py-8 rounded-2xl overflow-hidden transition-all duration-1000 shadow-2xl hover:shadow-[#00f2ff]/20"
            >
              <div className="absolute inset-0 bg-[#5A726C] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
              <span className="relative z-10 flex items-center gap-4 text-xs font-black tracking-[0.3em] uppercase">
                Iniciar Protocolo de Cita <ArrowUpRight size={18} className="text-[#00f2ff]" />
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* FLUID BENTO GRID: TACTILIDAD Y DATOS */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 h-auto md:h-[800px]">
          
          {/* Parálisis Facial: La Joya Técnica */}
          <div className="md:col-span-4 md:row-span-2 glass-refraction p-16 rounded-[4rem] flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#5A726C]/5 rounded-full blur-[100px] group-hover:bg-[#5A726C]/10 transition-colors duration-1000" />
            <Sparkles size={40} className="text-[#5A726C] mb-32" />
            <div>
              <h3 className="text-5xl md:text-7xl font-serif italic mb-8">Restauración <br /> Neural.</h3>
              <p className="max-w-md text-lg opacity-40 font-light leading-relaxed">Protocolos avanzados para parálisis facial y recuperación del sistema nervioso periférico.</p>
            </div>
          </div>

          {/* Clínica del Dolor: Acción */}
          <div className="md:col-span-2 p-12 bg-[#1a1a1a] text-white rounded-[4rem] flex flex-col justify-between hover:scale-[0.98] transition-transform duration-700">
            <Zap size={32} className="text-[#5A726C]" />
            <h3 className="text-3xl font-bold tracking-tight">Clínica del <br /> Dolor.</h3>
          </div>

          {/* Ubicación: Accesibilidad */}
          <div className="md:col-span-2 p-12 glass-refraction rounded-[4rem] flex flex-col justify-center items-center text-center">
            <MapPin size={24} className="mb-4 opacity-20" />
            <span className="text-xs font-bold tracking-widest uppercase opacity-40">Ubicación</span>
            <p className="text-xl font-medium mt-2">Benito Juárez <br /> CDMX</p>
          </div>

          {/* Datos de Confianza */}
          <div className="md:col-span-6 p-12 border border-black/5 rounded-[4rem] flex flex-col md:flex-row items-center justify-around bg-white/40">
            <div className="text-center group">
              <div className="text-7xl font-black italic tracking-tighter text-[#1a1a1a] group-hover:text-[#5A726C] transition-colors">98.7%</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-30 mt-4">Efectividad Técnica</div>
            </div>
            <div className="h-[1px] w-20 md:h-20 md:w-[1px] bg-black/5 my-8 md:my-0" />
            <div className="text-center group">
              <div className="text-7xl font-black italic tracking-tighter text-[#1a1a1a] group-hover:text-[#5A726C] transition-colors">+1500</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-30 mt-4">Protocolos Exitosos</div>
            </div>
          </div>
        </div>
      </section>

      {/* PADECIMIENTOS: ESPECIALIDADES MÉDICAS */}
      <section className="max-w-7xl mx-auto px-6 py-40">
        <div className="text-center mb-32">
          <p className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-30 mb-4">Especialidades</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Protocolos de <br /><span className="font-serif italic font-light lowercase">Especialidad.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {padecimientos.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="glass-refraction p-12 rounded-[3rem] flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-[#5A726C]/10 rounded-full flex items-center justify-center mb-8">
                <item.icono size={24} className="text-[#5A726C]" />
              </div>
              <h3 className="text-3xl font-serif italic mb-6">{item.categoria}</h3>
              <p className="text-lg font-light opacity-40 leading-relaxed mb-8 flex-grow">{item.descripcion}</p>
              <ul className="space-y-4">
                {item.sintomas.map((sintoma, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest opacity-20">
                    <div className="w-1 h-1 bg-black rounded-full" />
                    {sintoma}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRUST: SEGURIDAD Y CALIDAD */}
      <section className="py-40 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield size={48} className="text-[#5A726C] mx-auto mb-12" />
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-12">Seguridad <br /><span className="font-serif italic font-light lowercase">Sin Concesiones.</span></h2>
          <p className="text-xl md:text-3xl font-light leading-relaxed opacity-60 italic">
            “Utilizamos material 100% estéril y desechable, siguiendo protocolos internacionales de higiene para una sanación segura y profesional.”
          </p>
        </div>
      </section>

      {/* BENEFITS: ENFOQUE INTEGRAL */}
      <section className="max-w-7xl mx-auto px-6 py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <p className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-30 mb-4">Metodología</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-12">Enfoque <br /><span className="font-serif italic font-light lowercase text-[0.8em]">Integral.</span></h2>
            <div className="space-y-12">
              {[
                { title: "Evaluación Personalizada", desc: "Analizamos tu historial y estilo de vida para diseñar un tratamiento a tu medida." },
                { title: "Serenidad Urbana", desc: "Un espacio diseñado para que tu sistema nervioso descanse profundamente." },
                { title: "Seguimiento Constante", desc: "Monitoreamos tu progreso y ajustamos el tratamiento según tu evolución." }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-8">
                  <div className="text-2xl font-serif italic opacity-20">0{i+1}</div>
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-widest mb-2">{benefit.title}</h4>
                    <p className="text-lg font-light opacity-40 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden glass-refraction p-4">
            <Image 
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop" 
              alt="Zen Atmosphere"
              fill
              className="object-cover rounded-[3.5rem] opacity-80 grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 5 ELEMENTS: EQUILIBRIO MILENARIO */}
      <section className="py-40 bg-[#FDFCF9] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#5A726C05,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase">Equilibrio <br /><span className="font-serif italic font-light lowercase">de los 5 Elementos.</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            {['Madera', 'Fuego', 'Tierra', 'Metal', 'Agua'].map((el, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-24 h-24 rounded-full border border-black/5 flex items-center justify-center mb-6 group-hover:bg-[#5A726C] group-hover:text-white transition-all duration-700">
                  <span className="text-xs font-bold tracking-widest uppercase">{el}</span>
                </div>
                <div className="h-20 w-[1px] bg-black/5 group-hover:h-32 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ: CLARIDAD TÉCNICA */}
      <section className="max-w-4xl mx-auto px-6 py-40">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">FAQ.</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* 5. FOOTER: MINIMALISMO Y SILENCIO */}
      <footer className="py-20 border-t border-black/5 text-center bg-[#FDFCF9]">
        <div className="text-[9px] font-black tracking-[0.6em] opacity-20 uppercase">
          CENTRO DE ACUPUNTURA QI | CIENCIA Y SERENIDAD
        </div>
      </footer>

      {/* 6. BOTÓN FLOTANTE: EL SENSOR DE ÉXITO (ID: 11004313271) */}
      <motion.button 
        onClick={trackConversion}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 z-50 bg-[#1a1a1a] text-[#00f2ff] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#00f2ff] hover:text-black transition-all duration-500 group"
      >
        <MessageCircle size={28} />
        {/* Pulso de luz High-Tech */}
        <div className="absolute inset-0 bg-[#00f2ff]/20 rounded-full animate-ping pointer-events-none" />
      </motion.button>

    </div> // Cerramos el div principal
  ); // Cerramos el return
} // Cerramos la función export default

