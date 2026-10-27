"use client";

import React, { useState, useEffect } from "react";
import { WhatsAppButton } from "./WhatsAppButton";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export const FloatingWhatsApp = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <WhatsAppButton
        className="w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all group relative"
        showIcon={false}
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-primary-600 px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-primary-50">
          ¿Dudas? Escríbenos
        </span>
      </WhatsAppButton>
    </motion.div>
  );
};
