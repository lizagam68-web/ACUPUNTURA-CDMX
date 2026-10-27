import React from "react";

export const FAQSection = ({ faqs }: { faqs: { q: string; a: string }[] }) => {
  return (
    <section id="faq" className="py-24 bg-[#faf8f5] border-t border-[#e8e1d5]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#b86d36] font-bold uppercase tracking-widest text-xs">
            Resuelvo tus Dudas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-serif italic text-[#18313a]">
            Preguntas Frecuentes
          </h2>
          <div className="w-20 h-1 bg-[#b86d36] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-[#4a5e66] font-light max-w-2xl mx-auto">
            Todo lo que necesitas saber antes de tu primera consulta de acupuntura humana y rehabilitación.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="p-6 sm:p-7 rounded-2xl border border-[#e5dbcb] bg-white shadow-2xs hover:border-[#cfbfab] transition-colors"
            >
              <h4 className="text-lg sm:text-xl font-bold mb-2.5 text-[#18313a] font-serif">
                {faq.q}
              </h4>
              <p className="text-[#4a5e66] leading-relaxed text-sm sm:text-base font-light">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
