'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Zap, Shield, ArrowUpRight, Activity, Cpu } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { trackConversion } from '@/utils/analytics';

const trackConversionLocal = () => {
  // 1. EL SENSOR: Enviamos la señal de éxito a Google Ads y GA4
  trackConversion();
  
  // Link de WhatsApp limpio y profesional
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "525552520615";
  window.open(`https://wa.me/${phoneNumber}?text=Deseo%20iniciar%20el%20protocolo%20de%20especialidad.`, "_blank");
};

export default function CleanTechPage() {
  return (
    <div className="bg-white min-h-screen text-[#050505] selection:bg-[#00f2ff]/20 font-sans">
      <Head>
        <title>QI.TECH | Acupuntura Avanzada</title>
        <meta name="description" content="Ingeniería clínica aplicada a la recuperación nerviosa y muscular en la Benito Juárez." />
      </Head>
      
      {/* 1. NAVEGACIÓN DE ALTA PRECISIÓN */}
      <header className="fixed top-0 w-full z-50 p-6">
        <div className="bg-white/70 backdrop-blur-2xl border border-black/5 max-w-6xl mx-auto rounded-2xl px-8 py-4 flex justify-between items-center shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-2">
            <Cpu size={20} className="text-[#00f2ff]" />
            <span className="font-black tracking-tighter text-xl italic uppercase">QI.TECH</span>
          </div>
          <button 
            onClick={trackConversionLocal}
            className="text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-[#00f2ff] pb-1 hover:opacity-50 transition-all"
          >
            SISTEMA DE CITAS
          </button>
        </div>
      </header>

      {/* 2. HERO: IMPACTO VISUAL LUMINOSO */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        {/* Luz de fondo sutil */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#00f2ff10,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-black/10 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] opacity-60">
              <Radio size={12} className="text-[#00f2ff]" /> Estatus: Alta Frecuencia Operativa
            </div>
            
            <h1 className="text-6xl md:text-[110px] font-black leading-[0.9] tracking-tighter mb-10">
              ACUPUNTURA <br />
              <span className="text-white" style={{ WebkitTextStroke: '1.5px #050505' }}>AVANZADA.</span>
            </h1>

            <div className="flex flex-col md:flex-row items-end gap-12">
              <p className="max-w-md text-left text-lg font-light opacity-60 leading-relaxed">
                Ingeniería clínica aplicada a la recuperación nerviosa y muscular. 
                Protocolos de especialidad en la Benito Juárez.
              </p>
              
              <button 
                onClick={trackConversionLocal}
                className="bg-[#050505] text-white px-12 py-6 rounded-2xl text-xs font-black tracking-[0.2em] uppercase flex items-center gap-4 hover:bg-[#00f2ff] hover:text-black transition-all duration-500 shadow-2xl"
              >
                INICIAR PROTOCOLO <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. BENTO GRID: DISEÑO MODERNO Y ACCESIBLE */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Tarjeta Principal */}
          <div className="md:col-span-2 md:row-span-2 p-12 bg-[#050505] text-white rounded-[2.5rem] flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-150 transition-transform duration-1000">
              <Activity size={200} />
            </div>
            <div className="relative z-10">
              <Zap className="text-[#00f2ff] mb-6" size={32} />
              <h3 className="text-5xl font-black italic tracking-tighter mb-6">Parálisis <br /> Facial.</h3>
              <p className="opacity-50 max-w-xs font-light">Estimulación de precisión para la recuperación de la movilidad nerviosa.</p>
            </div>
            <div className="relative z-10 text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Protocolo Técnico v2.6</div>
          </div>

          {/* Tarjeta: Clínica del Dolor */}
          <div className="md:col-span-2 p-10 bg-[#f8f8f8] rounded-[2.5rem] flex flex-col justify-between hover:border-[#00f2ff] border border-transparent transition-all">
            <h3 className="text-2xl font-bold tracking-tight">Clínica del Dolor</h3>
            <p className="opacity-50 text-sm mb-6">Tratamiento de alta velocidad para lesiones crónicas.</p>
            <div className="h-[1px] bg-black/5 w-full" />
          </div>

          {/* Tarjeta: Datos Dinámicos */}
          <div className="p-10 bg-[#00f2ff] text-black rounded-[2.5rem] flex flex-col justify-center items-center text-center">
            <div className="text-5xl font-black italic tracking-tighter">98.7%</div>
            <div className="text-[9px] font-bold uppercase tracking-widest mt-2">Precisión</div>
          </div>

          {/* Tarjeta: Seguridad */}
          <div className="p-10 border border-black/10 rounded-[2.5rem] flex flex-col justify-center items-center text-center hover:bg-black hover:text-white transition-all group">
            <Shield size={32} className="group-hover:text-[#00f2ff] transition-colors" />
            <div className="text-[9px] font-bold uppercase tracking-widest mt-4">100% Clínico</div>
          </div>

        </div>
      </section>

      {/* 4. FOOTER: MINIMALISMO ABSOLUTO */}
      <footer className="py-20 border-t border-black/5 text-center flex flex-col items-center gap-4">
        <div className="text-[9px] font-black tracking-[0.5em] opacity-30 uppercase">
          CENTRO DE ACUPUNTURA QI | BENITO JUÁREZ CDMX
        </div>
        <Link href="/privacidad" className="text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-[#00f2ff] transition-colors">
          Aviso de Privacidad
        </Link>
      </footer>

    </div>
  );
}
