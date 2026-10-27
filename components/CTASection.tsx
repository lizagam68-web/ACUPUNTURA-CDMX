import React from "react";
import { clinicData } from "@/data/clinic-data";
import { WhatsAppButton } from "./WhatsAppButton";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-22 bg-[#faf8f5] border-t border-[#e8e1d5]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto rounded-[2.5rem] bg-[#18313a] p-10 md:p-16 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl border border-[#2c4955]">
           
           {/* Warm glowing accents */}
           <div className="absolute top-0 right-0 w-80 h-80 bg-[#b86d36]/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3e685f]/30 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />
           
           <div className="relative z-10">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#f4e1cb] mb-4">
                Atención Personalizada · Insurgentes Sur 1409 · Benito Juárez
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.12] font-serif tracking-tight text-white text-balance">
                ¿Listo para vivir sin dolor y en <span className="text-[#f4e1cb] italic font-serif">equilibrio</span>?
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-[#e5dbcb] mb-9 max-w-2xl mx-auto font-light leading-relaxed">
                Agenda tu consulta de valoración en mi consultorio de Benito Juárez, CDMX. Te brindo una atención cercana, diagnóstico riguroso y sesiones sin tiempos de espera.
              </p>
              
              <WhatsAppButton
                className="inline-flex items-center justify-center gap-2 bg-[#fdfcf9] text-[#18313a] hover:bg-white px-9 py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer group"
                showIcon={false}
                message="Hola, me gustaría agendar una consulta de valoración en su consultorio de Benito Juárez, CDMX"
              >
                <span>Agendar Cita por WhatsApp</span>
                <ArrowRight size={18} className="text-[#b86d36] transition-transform group-hover:translate-x-1" />
              </WhatsAppButton>
           </div>
        </div>
      </div>
    </section>
  );
};
