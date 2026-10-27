"use client";

import React from "react";
import Image from "next/image";
import { Award, FileText, CheckCircle2, ShieldCheck, HeartHandshake, GraduationCap, Smartphone } from "lucide-react";
import { clinicData } from "@/data/clinic-data";
import { WhatsAppButton } from "./WhatsAppButton";
import { usePractitionerPhoto } from "@/lib/usePractitionerPhoto";

export const QuienSoySection = () => {
  const { practitioner } = clinicData;
  const photoSrc = usePractitionerPhoto();

  return (
    <section id="quien-soy" className="py-20 md:py-28 bg-gradient-to-b from-[#faf8f5] via-[#f4efe7] to-[#faf8f5] relative overflow-hidden border-t border-[#e8e1d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#3e685f] text-xs font-semibold uppercase tracking-widest block mb-2">
            Perfil Profesional &amp; Formación Universitaria
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#18313a] tracking-tight italic mb-3 text-balance">
            ¿Quién Soy?
          </h2>
          <div className="w-16 h-0.5 bg-[#b86d36]/40 mx-auto mb-6" />
          <p className="text-lg text-[#4a5e66] font-light leading-relaxed">
            Conoce mi trayectoria universitaria y cómo te acompañaré en tu proceso de recuperación, alivio del dolor y bienestar integral.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-[#e5dbcb] shadow-xl shadow-stone-300/30 overflow-hidden p-8 md:p-14 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Profile Avatar & Official Badges */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-gradient-to-br from-[#18313a] via-[#2c4955] to-[#b86d36] p-1.5 shadow-2xl relative">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white relative bg-[#faf8f5]">
                    <Image
                      src={photoSrc}
                      alt={`Lic. ${practitioner.name} - Acupuntura Humana y Rehabilitación UNEVE`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 208px, 240px"
                      priority
                      referrerPolicy="no-referrer"
                      unoptimized={photoSrc.startsWith("data:")}
                    />
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-2 -right-2 bg-white text-[#18313a] p-2.5 px-4 rounded-2xl shadow-lg border border-[#e5dbcb] flex items-center gap-2.5">
                  <ShieldCheck size={20} className="text-[#b86d36]" />
                  <div className="text-left">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#18313a]">Atención Ética</div>
                    <div className="text-[11px] text-[#4a5e66] font-medium">Tratamiento Seguro</div>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#18313a]">
                Lic. {practitioner.name}
              </h3>
              <span className="text-xs font-bold uppercase tracking-wider text-[#b86d36] block mt-0.5">
                Cédula Profesional 15289838 · UNEVE
              </span>
              <p className="text-[#3e685f] font-medium text-base sm:text-lg mt-1 mb-6">
                {practitioner.degree}
              </p>

              {/* Official Credentials Cards */}
              <div className="w-full space-y-3 max-w-sm">
                <div className="flex items-center gap-3.5 bg-[#faf8f5] border border-[#e5dbcb] rounded-2xl p-3.5 text-left transition-all hover:bg-white hover:border-[#cfbfab]">
                  <GraduationCap className="text-[#18313a] flex-shrink-0" size={22} />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#3e685f] block">
                      Universidad
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#18313a] block leading-snug">
                      Universidad Estatal del Valle de Ecatepec (UNEVE)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 bg-[#faf8f5] border border-[#e5dbcb] rounded-2xl p-3.5 text-left transition-all hover:bg-white hover:border-[#cfbfab]">
                  <Award className="text-[#18313a] flex-shrink-0" size={22} />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#3e685f] block">
                      Cédula Profesional Oficial
                    </span>
                    <span className="text-sm font-semibold text-[#18313a]">
                      {practitioner.license}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 bg-[#faf8f5] border border-[#e5dbcb] rounded-2xl p-3.5 text-left transition-all hover:bg-white hover:border-[#cfbfab]">
                  <FileText className="text-[#b86d36] flex-shrink-0" size={22} />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#b86d36] block">
                      Aviso de Publicidad Cofepris
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#18313a]">
                      {practitioner.advertisingPermit}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography & Approach */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#b86d36] block mb-2">
                  Trayectoria &amp; Enfoque Humano
                </span>
                <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#18313a] leading-snug">
                  Compromiso con tu salud, vocación de servicio y rigor universitario.
                </h4>
              </div>

              <p className="text-base sm:text-lg text-[#4a5e66] font-light leading-relaxed">
                Egresada de la <strong>Universidad Estatal del Valle de Ecatepec (UNEVE)</strong> en la <em>Licenciatura en Acupuntura Humana y Rehabilitación</em>, cuento con sólida formación universitaria, avalada con Cédula Profesional oficial y amplia práctica clínica en el alivio del dolor musculoesquelético, la recuperación motriz y el bienestar integral.
              </p>

              <p className="text-base text-[#4a5e66] font-light leading-relaxed">
                Mi objetivo es brindarte una atención cercana, respetuosa y personalizada. Combino la precisión milenaria de la Acupuntura con técnicas avanzadas de rehabilitación física para restablecer el equilibrio del cuerpo, desbloquear los canales energéticos y acompañarte a recuperar tu movilidad y vitalidad sin dolor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-[#faf8f5] p-4 rounded-2xl border border-[#e5dbcb]">
                  <CheckCircle2 className="text-[#3e685f] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h5 className="font-bold text-sm text-[#18313a] font-serif">Acupuntura Humana</h5>
                    <p className="text-xs text-[#4a5e66] font-light mt-0.5">
                      Desbloqueo de canales, alivio del dolor crónico y equilibrio orgánico natural con respaldo académico.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#faf8f5] p-4 rounded-2xl border border-[#e5dbcb]">
                  <HeartHandshake className="text-[#3e685f] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h5 className="font-bold text-sm text-[#18313a] font-serif">Rehabilitación Integral</h5>
                    <p className="text-xs text-[#4a5e66] font-light mt-0.5">
                      Recuperación funcional de la movilidad en ciática, lumbalgia y parálisis facial.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
                <WhatsAppButton
                  className="w-full sm:w-auto bg-[#18313a] text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-[#12242b] transition-all shadow-md shadow-[#18313a]/15 active:scale-95 text-center flex items-center justify-center gap-2 cursor-pointer"
                  showIcon={false}
                  message="Hola, me gustaría agendar una consulta de valoración de acupuntura humana y rehabilitación en Benito Juárez, CDMX"
                >
                  Agendar Consulta de Valoración
                </WhatsAppButton>
                <a
                  href={clinicData.contactCardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white border border-[#b86d36] text-[#b86d36] hover:bg-[#b86d36] hover:text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all shadow-sm active:scale-95 text-center flex items-center justify-center gap-2"
                  title="Abrir tarjeta digital MiKontacto"
                >
                  <Smartphone size={17} />
                  <span>Guardar Contacto Digital</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
