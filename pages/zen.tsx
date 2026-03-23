'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, MapPin, ArrowRight, Shield } from 'lucide-react';
import Head from 'next/head';

const trackConversion = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', { 'send_to': 'AW-11004313271/NfInCOvXyIkYEPfNq_4p' });
  }
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "525552520615";
  window.open(`https://wa.me/${phoneNumber}?text=Deseo%20iniciar%20un%20protocolo%20de%20especialidad.`, "_blank");
};

export default function ZenSanctuary() {
  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#1C1C1C] selection:bg-[#5A726C]/20 font-light">
      <Head>
        <title>Qi Clinic | Acupuntura de Especialidad</title>
        <meta name="description" content="Diseñamos un escape mental y sanación profunda con precisión clínica en la alcaldía Benito Juárez." />
      </Head>
      
      {/* NAVEGACIÓN SUTIL */}
      <nav className="fixed top-0 w-full z-50 p-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-serif italic text-2xl tracking-tighter">Qi Clinic</span>
            <span className="text-[8px] tracking-[0.4em] uppercase opacity-40">Especialidad Técnica</span>
          </div>
          <button onClick={trackConversion} className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest">
            <span className="w-8 h-[1px] bg-current group-hover:w-12 transition-all" /> 
            Agendar Protocolo
          </button>
        </div>
      </nav>

      {/* HERO: EL EQUILIBRIO PERFECTO */}
      <section className="relative pt-64 pb-32 px-6">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            
            <div className="inline-flex items-center gap-2 mb-12 opacity-40">
              <Leaf size={14} strokeWidth={1} />
              <span className="text-[9px] font-bold uppercase tracking-[0.5em]">Acupuntura de Especialidad CDMX</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-[100px] font-serif leading-[0.9] mb-12 italic">
              Precisión <span className="font-sans font-black not-italic tracking-tighter uppercase text-[0.8em] block md:inline">Clínica.</span>
            </h1>

            {/* Tu texto centralizado y con peso emocional */}
            <div className="max-w-2xl mx-auto mb-20">
              <p className="text-xl md:text-3xl font-light leading-relaxed text-[#1C1C1C]/70 italic">
                “Bajo <span className="text-[#5A726C] font-normal">dirección técnica especializada</span>, diseñamos un escape mental y sanación profunda con precisión clínica en la alcaldía Benito Juárez.”
              </p>
            </div>

            <button 
              onClick={trackConversion}
              className="relative group bg-[#1C1C1C] text-[#FDFCF9] px-16 py-8 rounded-full overflow-hidden transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
            >
              <div className="absolute inset-0 bg-[#5A726C] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase">
                Iniciar Restauración <ArrowRight size={16} />
              </span>
            </button>

          </motion.div>
        </div>
      </section>

      {/* SECCIÓN DE "FLUJO": MÁS HUMANA */}
      <section className="max-w-7xl mx-auto px-6 py-40 grid md:grid-cols-2 gap-24 items-center">
        <div className="relative">
          {/* Espacio para una imagen macro de alta calidad */}
          <div className="aspect-[4/5] bg-[#EBE9E4] rounded-[4rem] overflow-hidden shadow-inner flex items-center justify-center">
             <Sparkles size={40} className="opacity-10 text-[#5A726C]" />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white p-10 rounded-[3rem] shadow-xl border border-black/5">
             <p className="text-[10px] font-bold uppercase tracking-widest opacity-30 mb-4">Métrica Técnica</p>
             <div className="text-5xl font-serif italic mb-2">98%</div>
             <p className="text-xs opacity-50">Efectividad en protocolos de Parálisis Facial.</p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-4xl font-serif italic">Arquitectura del Bienestar</h3>
            <p className="text-lg opacity-60 leading-relaxed font-light">
              No es solo acupuntura. Es una intervención técnica diseñada para resetear el sistema nervioso y restaurar la movilidad facial.
            </p>
          </div>
          
          <div className="flex gap-12 pt-8 border-t border-black/5">
            <div className="flex flex-col gap-2">
              <MapPin size={20} className="text-[#5A726C]" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Benito Juárez</span>
            </div>
            <div className="flex flex-col gap-2">
              <Shield size={20} className="text-[#5A726C]" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Protocolo Clínico</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="p-20 text-center opacity-20">
        <p className="text-[8px] font-bold uppercase tracking-[1em]">Centro de Acupuntura QI | Orden · Dirección · Contención</p>
      </footer>

    </div>
  );
}
