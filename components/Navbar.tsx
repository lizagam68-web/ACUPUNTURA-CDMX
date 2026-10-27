"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  MessageCircle, 
  ChevronDown, 
  Stethoscope, 
  Smile, 
  Feather, 
  Heart, 
  Waves,
  GraduationCap,
  BookOpen,
  Award,
  Scale,
  Briefcase,
  FileCheck,
  Activity,
  Sparkles
} from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";
import { motion, AnimatePresence } from "motion/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Dropdown states
  const [treatmentsDropdown, setTreatmentsDropdown] = useState(false);
  const [educationDropdown, setEducationDropdown] = useState(false);
  const [professionalDropdown, setProfessionalDropdown] = useState(false);

  // Mobile accordion states
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [mobileEducationOpen, setMobileEducationOpen] = useState(false);
  const [mobileProfessionalOpen, setMobileProfessionalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Ocultar al hacer scroll hacia abajo, mostrar al subir
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && !isOpen) {
          setVisible(false);
          setTreatmentsDropdown(false);
          setEducationDropdown(false);
          setProfessionalDropdown(false);
        } else {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isOpen]);

  // 1. Tratamientos clínicos para pacientes
  const clinicalTreatments = [
    {
      name: "Dolor Crónico & Ciática",
      desc: "Lumbalgia, cervicalgia, ciática y rigidez corporal",
      href: "/dolor",
      icon: Stethoscope,
    },
    {
      name: "Parálisis Facial",
      desc: "Reactivación neuromuscular, simetría y movilidad",
      href: "/paralisis-facial",
      icon: Smile,
    },
    {
      name: "Acupuntura Estética & Facial",
      desc: "Lifting natural, micropunción y apoyo metabólico",
      href: "/acupuntura-estetica",
      icon: Feather,
    },
    {
      name: "Salud & Bienestar Femenino",
      desc: "Ciclo menstrual, fertilidad previa y climaterio",
      href: "/bienestar-femenino",
      icon: Heart,
    },
    {
      name: "Estrés, Ansiedad & Insomnio",
      desc: "Regulación vagal, calma mental y descanso profundo",
      href: "/estres",
      icon: Waves,
    },
  ];

  // 2. Programas y cursos educativos (Estudiantes y público general)
  const educationalPrograms = [
    {
      id: "prog-curso-gratis",
      name: "Mini-Curso Gratuito",
      desc: "Videoclase 10 min (Estrés & Tapping) + PDF descargable",
      href: "/curso-gratis",
      icon: Sparkles,
      badge: "Gratis"
    },
    {
      id: "prog-test",
      name: "Autodiagnóstico 5 Elementos",
      desc: "Herramienta gratuita y prescripción de autocuidado",
      href: "/educacion#autodiagnostico",
      icon: Activity,
      badge: "Gratis"
    },
    {
      id: "prog-diplomado",
      name: "Diplomado de MTCh",
      desc: "6 módulos para la vida cotidiana · Inscripciones abiertas",
      href: "/diplomado",
      icon: GraduationCap,
      badge: "Inscripciones Abiertas"
    },
    {
      id: "prog-digitopuntura",
      name: "Taller de Digitopuntura",
      desc: "Clase en vivo + Guía PDF imprimible · $780 MXN",
      href: "/taller-digitopuntura",
      icon: BookOpen,
      badge: "$780 MXN"
    },
    {
      id: "prog-dietoterapia",
      name: "Dietoterapia China",
      desc: "Nutrición según las 5 estaciones y sabores energéticos",
      href: "/diplomado#temario",
      icon: Heart,
      badge: "Yang Sheng"
    },
    {
      id: "prog-catalogo",
      name: "Toda la Oferta Educativa",
      desc: "Catálogo completo de cursos, talleres y diplomados",
      href: "/educacion",
      icon: Award,
      badge: "Academia"
    },
  ];

  // 3. Asesoría y Consultoría para Profesionales de Acupuntura
  const professionalServices = [
    {
      id: "serv-blindaje",
      name: "Blindaje Legal 360°",
      desc: "Consultoría integral COFEPRIS y NOM-017 para tu consultorio",
      href: "/blindaje-legal-360",
      icon: Scale,
      badge: "Recomendado"
    },
    {
      id: "serv-kit",
      name: "Kit de Plantillas Legales",
      desc: "Consentimiento informado, expediente clínico NOM-004 y RPBI",
      href: "/blindaje-legal-360#paquetes",
      icon: FileCheck,
      badge: "Word / PDF"
    },
    {
      id: "serv-diagnostico",
      name: "Diagnóstico Express 1 a 1",
      desc: "Auditoría de tu consultorio en sesión personalizada de 60 min",
      href: "/blindaje-legal-360#paquetes",
      icon: Briefcase,
      badge: "$1,250 MXN"
    },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen 
          ? "bg-[#faf8f5]/95 backdrop-blur-md shadow-xs border-b border-[#e8e1d5] py-2.5" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Compacto y Equilibrado */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <Logo className="w-11 h-11 transition-transform group-hover:scale-105" />
              <div className="leading-tight">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#18313a] block tracking-tight">
                  Liz Gamiño <span className="text-[#3e685f]">Acupuntura</span>
                </span>
                <span className="text-[10px] font-sans font-semibold tracking-widest uppercase text-[#5a6e75] block">
                  Benito Juárez · CDMX
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Homogéneo y Despejado */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-6 text-[#4a5e66] text-sm font-medium">
            <Link 
              href="/" 
              className="hover:text-[#18313a] transition-colors py-2"
            >
              Inicio
            </Link>

            {/* Dropdown 1: Tratamientos Clínicos */}
            <div 
              className="relative"
              onMouseEnter={() => setTreatmentsDropdown(true)}
              onMouseLeave={() => setTreatmentsDropdown(false)}
            >
              <button
                type="button"
                onClick={() => setTreatmentsDropdown(!treatmentsDropdown)}
                className="flex items-center gap-1.5 hover:text-[#18313a] transition-colors py-2 cursor-pointer focus:outline-hidden"
                aria-expanded={treatmentsDropdown}
              >
                <span>Tratamientos</span>
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-200 text-[#3e685f] ${treatmentsDropdown ? "rotate-180" : ""}`} 
                />
              </button>

              <AnimatePresence>
                {treatmentsDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-88 bg-white rounded-3xl shadow-xl shadow-stone-300/30 border border-[#e5dbcb] p-3 z-50 space-y-1 mt-1.5"
                  >
                    <div className="px-3 pt-2 pb-1.5 border-b border-[#f2ece2]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#b86d36] block">
                        Especialidades Clínicas
                      </span>
                    </div>

                    {clinicalTreatments.map((treatment) => {
                      const IconComp = treatment.icon;
                      return (
                        <Link
                          key={treatment.href}
                          href={treatment.href}
                          onClick={() => setTreatmentsDropdown(false)}
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-[#faf8f5] transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-xl bg-[#f2ece2] text-[#18313a] flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-[#f4e1cb]/50 transition-all mt-0.5">
                            <IconComp size={16} />
                          </div>
                          <div>
                            <span className="font-serif font-bold text-sm text-[#18313a] block group-hover:text-[#3e685f] transition-colors">
                              {treatment.name}
                            </span>
                            <span className="text-[11px] text-[#4a5e66] font-light leading-snug block">
                              {treatment.desc}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dropdown 2: Educación & Cursos */}
            <div 
              className="relative"
              onMouseEnter={() => setEducationDropdown(true)}
              onMouseLeave={() => setEducationDropdown(false)}
            >
              <button
                type="button"
                onClick={() => setEducationDropdown(!educationDropdown)}
                className="flex items-center gap-1.5 text-[#b86d36] hover:text-[#18313a] font-semibold transition-colors py-2 cursor-pointer focus:outline-hidden"
                aria-expanded={educationDropdown}
              >
                <span>Educación</span>
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-200 text-[#b86d36] ${educationDropdown ? "rotate-180" : ""}`} 
                />
              </button>

              <AnimatePresence>
                {educationDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-92 bg-white rounded-3xl shadow-xl shadow-stone-300/30 border border-[#e5dbcb] p-3 z-50 space-y-1 mt-1.5"
                  >
                    <div className="px-3 pt-2 pb-1.5 border-b border-[#f2ece2] flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#3e685f] block">
                        Cursos &amp; Diplomados
                      </span>
                      <Link 
                        href="/educacion"
                        onClick={() => setEducationDropdown(false)}
                        className="text-[11px] text-[#b86d36] font-semibold hover:underline"
                      >
                        Ver todo
                      </Link>
                    </div>

                    {educationalPrograms.map((prog) => {
                      const IconComp = prog.icon;
                      return (
                        <Link
                          key={prog.id}
                          href={prog.href}
                          onClick={() => setEducationDropdown(false)}
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-[#faf8f5] transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#b86d36] flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-[#f4e1cb]/50 transition-all mt-0.5">
                            <IconComp size={16} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <span className="font-serif font-bold text-sm text-[#18313a] block group-hover:text-[#3e685f] transition-colors">
                                {prog.name}
                              </span>
                              {prog.badge && (
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-[#3e685f]/10 text-[#3e685f]">
                                  {prog.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] text-[#4a5e66] font-light leading-snug block">
                              {prog.desc}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dropdown 3: ASESORÍA PARA PROFESIONALES (APARTADO INDEPENDIENTE) */}
            <div 
              className="relative"
              onMouseEnter={() => setProfessionalDropdown(true)}
              onMouseLeave={() => setProfessionalDropdown(false)}
            >
              <button
                type="button"
                onClick={() => setProfessionalDropdown(!professionalDropdown)}
                className="flex items-center gap-1.5 text-[#18313a] hover:text-[#3e685f] font-semibold transition-colors py-2 cursor-pointer focus:outline-hidden"
                aria-expanded={professionalDropdown}
              >
                <span>Asesoría Profesional</span>
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-200 text-[#18313a] ${professionalDropdown ? "rotate-180" : ""}`} 
                />
              </button>

              <AnimatePresence>
                {professionalDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-94 bg-white rounded-3xl shadow-xl shadow-stone-300/30 border border-[#e5dbcb] p-3 z-50 space-y-1 mt-1.5"
                  >
                    <div className="px-3 pt-2 pb-1.5 border-b border-[#f2ece2] flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#3e685f] block">
                        Para Acupunturistas &amp; Consultorios
                      </span>
                      <Link 
                        href="/blindaje-legal-360"
                        onClick={() => setProfessionalDropdown(false)}
                        className="text-[11px] text-[#3e685f] font-semibold hover:underline"
                      >
                        Ver Blindaje 360°
                      </Link>
                    </div>

                    {professionalServices.map((serv) => {
                      const IconComp = serv.icon;
                      return (
                        <Link
                          key={serv.id}
                          href={serv.href}
                          onClick={() => setProfessionalDropdown(false)}
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-[#faf8f5] transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#3e685f] flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-emerald-100/60 transition-all mt-0.5">
                            <IconComp size={16} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <span className="font-serif font-bold text-sm text-[#18313a] block group-hover:text-[#3e685f] transition-colors">
                                {serv.name}
                              </span>
                              {serv.badge && (
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-[#18313a]/10 text-[#18313a]">
                                  {serv.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] text-[#4a5e66] font-light leading-snug block">
                              {serv.desc}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/#quien-soy" 
              className="hover:text-[#18313a] transition-colors py-2"
            >
              ¿Quién Soy?
            </Link>

            <Link 
              href="/contacto" 
              className="hover:text-[#18313a] transition-colors py-2"
            >
              Contacto
            </Link>

            {/* Botón CTA Compacto */}
            <WhatsAppButton
              className="bg-[#18313a] text-white px-5 py-2.5 rounded-full font-bold hover:bg-[#12242b] hover:shadow-md transition-all flex items-center gap-2 active:scale-95 shadow-xs text-xs sm:text-sm"
              showIcon={false}
              message="Hola, me gustaría agendar una consulta de valoración de acupuntura en Benito Juárez, CDMX."
            >
              <MessageCircle size={16} className="text-[#f4e1cb]" />
              <span>Agendar Cita</span>
            </WhatsAppButton>
          </div>

          {/* Botón de Menú Móvil */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-[#18313a] hover:bg-[#ede6dc] transition-colors focus:outline-hidden"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-[#e8e1d5] shadow-xl overflow-hidden"
          >
            <div className="px-5 pt-3 pb-8 space-y-2">
              <Link
                href="/"
                className="block px-4 py-3 text-base font-medium text-[#18313a] hover:bg-[#faf8f5] rounded-2xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>

              {/* Acordeón Móvil 1: Tratamientos */}
              <div className="border border-[#e8e1d5] rounded-2xl overflow-hidden bg-[#faf8f5]">
                <button
                  type="button"
                  onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                  className="w-full px-4 py-3.5 flex items-center justify-between text-base font-bold text-[#18313a] font-serif"
                >
                  <span>Tratamientos Clínicos</span>
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-200 text-[#3e685f] ${mobileTreatmentsOpen ? "rotate-180" : ""}`} 
                  />
                </button>

                {mobileTreatmentsOpen && (
                  <div className="px-3 pb-3 space-y-1.5 border-t border-[#e8e1d5] pt-2 bg-white">
                    {clinicalTreatments.map((treatment) => {
                      const IconComp = treatment.icon;
                      return (
                        <Link
                          key={treatment.href}
                          href={treatment.href}
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#faf8f5] transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#f2ece2] text-[#18313a] flex items-center justify-center flex-shrink-0">
                            <IconComp size={16} />
                          </div>
                          <div>
                            <span className="font-semibold text-[#18313a] text-sm block">
                              {treatment.name}
                            </span>
                            <span className="text-[11px] text-[#4a5e66] font-light block">
                              {treatment.desc}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Acordeón Móvil 2: Educación & Cursos */}
              <div className="border border-[#e5dbcb] rounded-2xl overflow-hidden bg-amber-50/40">
                <button
                  type="button"
                  onClick={() => setMobileEducationOpen(!mobileEducationOpen)}
                  className="w-full px-4 py-3.5 flex items-center justify-between text-base font-bold text-[#b86d36] font-serif"
                >
                  <span>Educación &amp; Cursos</span>
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-200 text-[#b86d36] ${mobileEducationOpen ? "rotate-180" : ""}`} 
                  />
                </button>

                {mobileEducationOpen && (
                  <div className="px-3 pb-3 space-y-1.5 border-t border-[#e5dbcb] pt-2 bg-white">
                    {educationalPrograms.map((prog) => {
                      const IconComp = prog.icon;
                      return (
                        <Link
                          key={prog.id}
                          href={prog.href}
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#faf8f5] transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#b86d36] flex items-center justify-center flex-shrink-0">
                            <IconComp size={16} />
                          </div>
                          <div>
                            <span className="font-semibold text-[#18313a] text-sm block">
                              {prog.name}
                            </span>
                            <span className="text-[11px] text-[#4a5e66] font-light block">
                              {prog.desc}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Acordeón Móvil 3: ASESORÍA PARA PROFESIONALES */}
              <div className="border border-[#3e685f]/30 rounded-2xl overflow-hidden bg-emerald-50/30">
                <button
                  type="button"
                  onClick={() => setMobileProfessionalOpen(!mobileProfessionalOpen)}
                  className="w-full px-4 py-3.5 flex items-center justify-between text-base font-bold text-[#18313a] font-serif"
                >
                  <span className="flex items-center gap-2">
                    <Scale size={16} className="text-[#3e685f]" />
                    <span>Asesoría para Profesionales</span>
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-200 text-[#3e685f] ${mobileProfessionalOpen ? "rotate-180" : ""}`} 
                  />
                </button>

                {mobileProfessionalOpen && (
                  <div className="px-3 pb-3 space-y-1.5 border-t border-[#3e685f]/20 pt-2 bg-white">
                    {professionalServices.map((serv) => {
                      const IconComp = serv.icon;
                      return (
                        <Link
                          key={serv.id}
                          href={serv.href}
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#faf8f5] transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#3e685f] flex items-center justify-center flex-shrink-0">
                            <IconComp size={16} />
                          </div>
                          <div>
                            <span className="font-semibold text-[#18313a] text-sm block">
                              {serv.name}
                            </span>
                            <span className="text-[11px] text-[#4a5e66] font-light block">
                              {serv.desc}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/#quien-soy"
                className="block px-4 py-3 text-base font-medium text-[#18313a] hover:bg-[#faf8f5] rounded-2xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                ¿Quién Soy?
              </Link>

              <Link
                href="/contacto"
                className="block px-4 py-3 text-base font-medium text-[#18313a] hover:bg-[#faf8f5] rounded-2xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>

              <div className="pt-3">
                <WhatsAppButton
                  className="w-full bg-[#18313a] text-white py-3.5 px-4 rounded-full font-bold text-center flex items-center justify-center gap-2 shadow-md active:scale-95 text-sm"
                  showIcon={false}
                  message="Hola, me gustaría agendar una consulta de valoración de acupuntura en Benito Juárez, CDMX."
                >
                  <MessageCircle size={18} className="text-[#f4e1cb]" />
                  <span>Agendar Cita por WhatsApp</span>
                </WhatsAppButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
