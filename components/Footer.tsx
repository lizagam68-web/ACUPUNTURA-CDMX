import React from "react";
import Link from "next/link";
import { clinicData } from "@/data/clinic-data";
import { Mail, MapPin, MessageCircle, Facebook, Award, ExternalLink, Smartphone } from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-[#12242b] text-white pt-16 pb-10 border-t border-[#1e3943]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Identity Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo className="w-12 h-12" strokeColor="#12242b" />
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                  Liz Gamiño <span className="text-[#f4e1cb]">Acupuntura</span>
                </h3>
                <span className="text-[11px] text-[#8ea89d] font-sans tracking-wide block">
                  Acupuntura Humana &amp; Rehabilitación · UNEVE
                </span>
              </div>
            </div>
            <p className="text-[#d6ccbe] leading-relaxed font-sans font-light text-sm sm:text-base">
              {clinicData.slogan}
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href={clinicData.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook Oficial de Liz Gamiño Acupuntura" 
                className="w-10 h-10 rounded-full bg-[#18313a] border border-[#2c4955] flex items-center justify-center text-[#d6ccbe] hover:text-white hover:bg-[#1877f2] hover:border-[#1877f2] transition-all shadow-sm group"
                title="Síguenos en Facebook"
              >
                <Facebook size={19} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href={clinicData.whatsapp}
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp de consulta directa" 
                className="w-10 h-10 rounded-full bg-[#18313a] border border-[#2c4955] flex items-center justify-center text-[#d6ccbe] hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all shadow-sm group"
                title="Escríbenos por WhatsApp"
              >
                <MessageCircle size={19} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href={clinicData.googleMapsUrl}
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Ficha oficial en Google Maps" 
                className="w-10 h-10 rounded-full bg-[#18313a] border border-[#2c4955] flex items-center justify-center text-[#d6ccbe] hover:text-white hover:bg-[#ea4335] hover:border-[#ea4335] transition-all shadow-sm group"
                title="Ver perfil oficial en Google Maps"
              >
                <MapPin size={19} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href={clinicData.contactCardUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Tarjeta Digital MiKontacto" 
                className="w-10 h-10 rounded-full bg-[#18313a] border border-[#2c4955] flex items-center justify-center text-[#d6ccbe] hover:text-white hover:bg-[#b86d36] hover:border-[#b86d36] transition-all shadow-sm group"
                title="Tarjeta de Contacto Digital MiKontacto"
              >
                <Smartphone size={19} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Specialties Column */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif text-[#faf8f5]">Tratamientos</h4>
            <ul className="space-y-3 text-[#d6ccbe] text-sm sm:text-base">
              {clinicData.specialties.map((spec) => (
                <li key={spec.id}>
                  <Link href={`/${spec.id}`} className="hover:text-white transition-colors">
                    {spec.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/diplomado" className="hover:text-white transition-colors text-[#f4e1cb] font-medium">
                  Diplomado en MTCh (Inscripciones)
                </Link>
              </li>
              <li>
                <Link href="/taller-digitopuntura" className="hover:text-white transition-colors text-[#f4e1cb] font-medium">
                  Taller de Digitopuntura ($780 MXN)
                </Link>
              </li>
              <li>
                <Link href="/blindaje-legal-360" className="hover:text-white transition-colors text-[#f4e1cb] font-medium">
                  Blindaje Legal 360 (Acupuntura México)
                </Link>
              </li>
              <li>
                <Link href="/test-5-elementos" className="hover:text-white transition-colors text-[#f4e1cb] font-medium">
                  Test de los 5 Elementos (Gratis)
                </Link>
              </li>
              <li>
                <Link href="/educacion" className="hover:text-white transition-colors text-[#f4e1cb] font-medium">
                  Educación &amp; Academia MTCh
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog de Salud
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors">
                  Contacto &amp; Ubicación
                </Link>
              </li>
            </ul>
          </div>

          {/* Exact Location & Contact Column */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif text-[#faf8f5]">Ubicación &amp; Contacto</h4>
            <ul className="space-y-4 text-[#d6ccbe] text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 text-[#b86d36] mt-1" />
                <div className="space-y-1">
                  <span className="font-medium text-white block">
                    Av. Insurgentes Sur 1409, Despacho 5
                  </span>
                  <span className="text-xs text-[#d6ccbe] block">
                    Col. Insurgentes Mixcoac, C.P. 03900, Benito Juárez, CDMX
                  </span>
                  <a 
                    href={clinicData.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs text-[#f4e1cb] hover:text-white underline transition-colors pt-0.5"
                  >
                    <span>Ver en Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={20} className="text-[#b86d36] flex-shrink-0" />
                <a href={clinicData.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {clinicData.phone} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#b86d36] flex-shrink-0" />
                <a href={`mailto:${clinicData.email}`} className="hover:text-white transition-colors">
                  {clinicData.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Facebook size={20} className="text-[#b86d36] flex-shrink-0" />
                <a href={clinicData.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Facebook Oficial
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone size={20} className="text-[#b86d36] flex-shrink-0" />
                <a href={clinicData.contactCardUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Tarjeta Digital (MiKontacto)
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours Column */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif text-[#faf8f5]">Horarios de Atención</h4>
            <ul className="space-y-2 text-[#d6ccbe] text-sm sm:text-base">
              <li>Lunes - Viernes: 9:00 - 18:00</li>
              <li>Sábado: 9:00 - 15:00</li>
              <li>Domingo: Cerrado</li>
            </ul>
            <div className="mt-4 p-3 bg-[#18313a] rounded-xl border border-[#2c4955] text-xs text-[#d6ccbe]/90">
              <span className="text-[#f4e1cb] font-semibold block mb-0.5">Atención con previa cita</span>
              Sesiones individuales y privadas en Benito Juárez, CDMX.
            </div>
          </div>
        </div>

        {/* Professional Badges & Legal Notice */}
        <div className="border-t border-[#1e3943] mt-16 pt-8 text-center text-[#d6ccbe]/70 text-sm">
          <div className="mb-5 inline-flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-xs text-[#d6ccbe] bg-[#18313a]/90 px-6 py-3 rounded-2xl border border-[#2c4955] shadow-sm">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <Award size={15} className="text-[#b86d36]" />
              Lic. {clinicData.practitioner.name}
            </span>
            <span className="hidden sm:inline opacity-40">•</span>
            <span>{clinicData.practitioner.degree} (UNEVE)</span>
            <span className="hidden sm:inline opacity-40">•</span>
            <span className="text-[#f4e1cb] font-semibold">{clinicData.practitioner.license}</span>
            <span className="hidden sm:inline opacity-40">•</span>
            <span className="text-[#f4e1cb] font-semibold bg-[#0a151a] px-3 py-1 rounded-full border border-[#2c4955]">
              {clinicData.practitioner.advertisingPermit}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-[#d6ccbe]/60 mt-2">
            <span suppressHydrationWarning>© {new Date().getFullYear()} Liz Gamiño Acupuntura · Centro de Acupuntura QI. Todos los derechos reservados.</span>
            <span className="hidden sm:inline opacity-40">·</span>
            <Link 
              href="/admin/subir-foto" 
              className="hover:text-[#f4e1cb] transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-[#f4e1cb] text-[11px]"
              title="Panel para actualizar la fotografía de la Lic. Elizabeth Gamiño"
            >
              Administración: Actualizar Fotografía
            </Link>
            <span className="hidden sm:inline opacity-40">·</span>
            <Link 
              href="/admin/github-sync" 
              className="hover:text-[#f4e1cb] transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-[#f4e1cb] text-[11px]"
              title="Guía y comandos para conectar y sincronizar este proyecto con GitHub"
            >
              Conectar GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
