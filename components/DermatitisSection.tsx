'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { handleGlobalCTA } from '@/utils/analytics';

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

export const DermatitisSection = () => {
  const handleContact = () => {
    handleGlobalCTA("información sobre acupuntura para dermatitis atópica");
  };

  return (
    <section className="py-20 bg-[#FDFCF9] px-[8%] overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <Reveal direction="left">
          <span className="text-[#2ABFBF] font-bold tracking-[0.2em] uppercase text-xs">Piel • Nervios • Inmunidad</span>
          <h2 className="font-serif italic text-4xl md:text-5xl mt-4 text-[#1B3A4B] leading-tight">Acupuntura para Dermatitis Atópica</h2>
          <p className="mt-6 text-[#6E8491] leading-relaxed text-lg">
            La piel es el reflejo de tu sistema nervioso. A través de la <strong>Psiconeuroinmunoendocrinología (PNIE)</strong>, entendemos cómo el estrés crónico dispara citoquinas inflamatorias. 
          </p>
          <p className="mt-4 text-[#6E8491] text-lg">
            Estimulamos puntos clave como <strong>IG4 (Hegu)</strong> para modular la respuesta neurogénica, reduciendo el prurito y restaurando la barrera cutánea desde el equilibrio interno.
          </p>
          <button 
            onClick={handleContact} 
            className="mt-8 bg-[#1B3A4B] text-white px-10 py-4 rounded-full font-bold uppercase text-[11px] tracking-widest hover:bg-[#2ABFBF] transition-all hover:-translate-y-1 shadow-lg"
          >
            Valoración Cutánea
          </button>
        </Reveal>
        <Reveal direction="right" delay={0.2}>
          <div className="bg-[#EBF1F5] aspect-square rounded-3xl flex items-center justify-center p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2ABFBF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="text-center relative z-10">
              <div className="text-[#2ABFBF] text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-500">✨</div>
              <p className="font-serif italic text-2xl text-[#1B3A4B] leading-relaxed">&quot;La piel sana comienza en un sistema nervioso en paz.&quot;</p>
              <div className="mt-8 w-12 h-0.5 bg-[#2ABFBF] mx-auto"></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
