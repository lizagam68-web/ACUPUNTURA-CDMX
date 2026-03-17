import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingCTA = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "525552520615";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hola,%20quiero%20agendar%20cita`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-20 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all hover:shadow-[#25D366]/40 group md:bottom-8"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-[10px] font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 uppercase tracking-widest hidden md:block">
          ¿Dudas? Escríbenos
        </span>
      </motion.a>

      {/* Mobile Bottom Banner CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-md border-t border-cyan-100 md:hidden">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-cyan-950 text-white w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg active:scale-95 transition-transform"
        >
          <Calendar className="w-5 h-5" />
          Agendar Cita Ahora
        </a>
      </div>
    </>
  );
};

export default FloatingCTA;
