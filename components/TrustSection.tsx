import React from "react";
import { clinicData } from "@/data/clinic-data";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { JsonLd } from "./JsonLd";

export const TrustSection = () => {
  const trustSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": clinicData.name,
    "award": "Atención certificada con altos estándares de calidad y seguridad",
    "knowsAbout": [
      "Acupuntura Clínica Especializada",
      "Electroacupuntura",
      "Moxibustión",
      "Tratamiento del Dolor",
      "Bienestar Femenino",
      "Parálisis Facial"
    ],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Certificación Profesional",
        "value": "Especialistas certificados en Acupuntura y Medicina Tradicional"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Seguridad e Higiene",
        "value": "Material 100% estéril y desechable de un solo uso"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Ubicación",
        "value": "CDMX Benito Juárez"
      }
    ]
  };

  return (
    <section className="py-22 bg-[#18313a] text-white overflow-hidden relative">
      {/* Warm Ambient Radial Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#b86d36]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#3e685f]/25 rounded-full blur-3xl pointer-events-none" />

      <JsonLd schema={trustSchema} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <div>
            <span className="text-[#f4e1cb] font-bold uppercase tracking-widest text-xs block mb-3">
              Cuidado Humano &amp; Excelencia
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-[1.15] font-serif tracking-tight text-white">
              ¿Por qué elegir mi <span className="text-[#f4e1cb] italic font-serif">consulta de Acupuntura</span> en CDMX?
            </h2>
            <div className="space-y-4 sm:space-y-5">
              {[
                "Te atiendo personalmente en cada sesión: soy especialista titulada con cédula profesional y aviso de publicidad.",
                "Utilizo agujas filiformes estériles y desechables de alta calidad para una sesión suave, confortable y segura.",
                "Diseño un tratamiento enfocado en el origen de tu dolor o desbalance para devolverte la movilidad y el bienestar.",
                "Te recibo en un consultorio privado con citas puntuales, atención sin prisas y un ambiente de calma.",
                "Consultorio con ubicación céntrica y segura en la Alcaldía Benito Juárez, CDMX, con fácil acceso.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <CheckCircle2 className="text-[#f4e1cb] mt-1 flex-shrink-0" size={20} />
                  <p className="text-base md:text-lg text-[#fdfaf6] font-light leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-video bg-[#12242b] border border-[#2c4955]">
               <Image 
                 src="/images/clinical-acupuncture.jpg"
                 alt="Sesión de Acupuntura Humana Profesional en Benito Juárez CDMX"
                 fill
                 className="object-cover opacity-90"
                 referrerPolicy="no-referrer"
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#12242b]/60 via-transparent to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-[#b86d36] text-white p-5 sm:p-6 rounded-3xl shadow-xl hidden md:block border border-[#d39f70] max-w-xs">
              <p className="text-xl sm:text-2xl font-bold mb-1 font-serif leading-snug">Recupera tu energía y bienestar</p>
              <p className="text-[#fdfaf6] text-xs sm:text-sm font-light">Alivio profundo y equilibrio integral</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
