import React from "react";
import Link from "next/link";
import { clinicData } from "@/data/clinic-data";
import { ArrowRight, Stethoscope, Heart, Smile, Waves, Feather } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { WhatsAppButton } from "./WhatsAppButton";

const SpecialtyIcon = ({ id, size = 28 }: { id: string; size?: number }) => {
  switch (id) {
    case "dolor":
      return <Stethoscope size={size} />;
    case "paralisis-facial":
      return <Smile size={size} />;
    case "bienestar-femenino":
    case "fertilidad":
      return <Heart size={size} />;
    case "estres":
      return <Waves size={size} />;
    case "acupuntura-estetica":
      return <Feather size={size} className="text-[#b86d36]" />;
    default:
      return <Stethoscope size={size} />;
  }
};

export const Specialties = () => {
  return (
    <section id="specialties" className="py-24 bg-[#faf8f5] relative border-b border-[#e8e1d5]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[#3e685f] font-bold uppercase tracking-widest text-xs block">
            Tratamientos Clínicos Especializados
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-serif italic text-[#18313a] text-balance">
            Mis Especialidades
          </h2>
          <div className="w-16 h-0.5 bg-[#b86d36]/40 mx-auto my-3" />
          <p className="text-lg md:text-xl text-[#4a5e66] max-w-3xl mx-auto font-light leading-relaxed">
            Protocolos terapéuticos que aplico con rigor y dedicación profesional para ayudarte a restablecer tu equilibrio físico, motriz y energético.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {clinicData.specialties.map((spec, idx) => (
            <ScrollReveal
              key={spec.id}
              delay={idx * 0.08}
              className="group p-7 sm:p-8 rounded-[2rem] border border-[#e5dbcb] bg-white hover:border-[#cfbfab] hover:shadow-xl hover:shadow-stone-300/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-[#f2ece2] text-[#18313a] rounded-2xl flex items-center justify-center group-hover:scale-105 group-hover:bg-[#f4e1cb]/40 transition-all shadow-2xs">
                    <SpecialtyIcon id={spec.id} />
                  </div>
                  <span className="font-serif text-2xl font-light text-[#b86d36]/60 select-none">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight font-serif text-[#18313a] min-h-[56px] flex items-center">
                  {spec.title}
                </h3>
                <p className="text-[#4a5e66] mb-8 leading-relaxed text-sm sm:text-base font-light">
                  {spec.description}
                </p>
              </div>
              
              <div className="mt-auto pt-4 flex flex-col xs:flex-row sm:flex-col xl:flex-row gap-2.5">
                <Link
                  href={`/${spec.id}`}
                  className="flex-1 text-center bg-[#faf8f5] hover:bg-[#f2ece2] text-[#18313a] py-2.5 px-3 rounded-full font-bold text-xs sm:text-sm transition-all border border-[#e5dbcb] flex items-center justify-center min-h-[42px] active:scale-95"
                >
                  Saber más
                </Link>
                <WhatsAppButton
                  className="flex-1 bg-[#18313a] hover:bg-[#12242b] text-white py-2.5 px-3 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 shadow-2xs active:scale-95 min-h-[42px]"
                  showIcon={false}
                  message={`Hola, me interesa una consulta para el área de ${spec.title}.`}
                >
                  <span>Agendar</span>
                  <ArrowRight size={14} className="text-[#f4e1cb]" />
                </WhatsAppButton>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
