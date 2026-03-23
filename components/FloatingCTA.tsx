import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { trackConversion } from '@/utils/analytics';

const FloatingCTA = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "525552520615";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hola,%20quiero%20agendar%20cita`;

  const handleClick = () => {
    trackConversion();
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
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
      </motion.a>
    </>
  );
};

export default FloatingCTA;
