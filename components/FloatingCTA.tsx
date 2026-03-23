import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { handleGlobalCTA } from '@/utils/analytics';

const FloatingCTA = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleGlobalCTA("valoración rápida");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={handleClick}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all hover:shadow-[#25D366]/40 group md:bottom-8 md:right-8"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-[10px] font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 uppercase tracking-widest hidden md:block">
          ¿Dudas? Escríbenos
        </span>
      </motion.button>
    </>
  );
};

export default FloatingCTA;
