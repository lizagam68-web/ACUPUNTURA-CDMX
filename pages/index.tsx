import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MessageCircle, Phone, ArrowRight, CheckCircle2, CheckCircle, Star, ChevronDown, ChevronUp, Heart, Wind, Sparkles, Brain, Activity, MapPin, Mail, Clock, Share2, Flower2, Zap, Mountain, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SEO from '@/components/SEO';
import BotonWhatsappClinico from '@/components/BotonWhatsappClinico';
import { trackConversion } from '@/utils/analytics';

export default function Home() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "525552520615";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hola,%20quiero%20agendar%20cita`;
  
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const testimonials = [
    {
      name: "María González",
      text: "Llegué con un dolor de espalda crónico y después de 3 sesiones el cambio fue increíble. La Dra. es muy profesional.",
      rating: 5
    },
    {
      name: "Roberto Sánchez",
      text: "Excelente atención para el manejo del estrés. Me siento mucho más tranquilo y duermo mejor desde que voy.",
      rating: 5
    },
    {
      name: "Claudia Ruiz",
      text: "Recomiendo ampliamente la clínica. El tratamiento de parálisis facial me ayudó a recuperarme muy rápido.",
      rating: 5
    }
  ];

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Acupuntura CDMX',
          text: 'Recupera tu equilibrio natural con acupuntura profesional en CDMX.',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  const padecimientos = [
    {
      categoria: "Salud Femenina y Fertilidad",
      icono: Flower2,
      color: "bg-[#00CED1]/10 text-[#00CED1]",
      descripcion: "Equilibrio hormonal y apoyo en fertilidad en el corazón de la Benito Juárez.",
      sintomas: ["Fertilidad", "Menopausia", "SOP", "Ciclo Menstrual"]
    },
    {
      categoria: "Dolor Musculoesquelético",
      icono: Mountain,
      color: "bg-[#00CED1]/10 text-[#00CED1]",
      descripcion: "Alivio para esguinces y lesiones musculares sin fármacos ni imanes.",
      sintomas: ["Esguinces", "Ciática", "Dolor Lumbar", "Nervio Facial"]
    },
    {
      categoria: "Estrés y Ansiedad",
      icono: Wind,
      color: "bg-[#00CED1]/10 text-[#00CED1]",
      descripcion: "Paz mental y liberación de tensión. Encuentra la serenidad en medio del caos urbano.",
      sintomas: ["Ansiedad generalizada", "Insomnio", "Agotamiento mental", "Tensión muscular", "Irritabilidad"]
    }
  ];

  const faqs = [
    {
      pregunta: "¿La acupuntura duele?",
      respuesta: "No. Las agujas son extremadamente finas, mucho más delgadas que las de inyección. La mayoría de los pacientes sienten una ligera presión o hormigueo agradable, seguido de una sensación de relajación profunda."
    },
    {
      pregunta: "¿Cuántas sesiones necesito?",
      respuesta: "Depende del padecimiento. Para dolor agudo, puede notar alivio desde la primera sesión. Condiciones crónicas suelen requerir de 6 a 10 sesiones. Evaluamos tu caso de forma personalizada."
    },
    {
      pregunta: "¿Puedo combinar la acupuntura con medicamentos?",
      respuesta: "Sí, la acupuntura es compatible con tratamientos médicos convencionales. Es importante informarnos sobre los medicamentos que tomas para personalizar tu tratamiento."
    },
    {
      pregunta: "¿Hay contraindicaciones?",
      respuesta: "La acupuntura es segura para la mayoría de las personas. Se toman precauciones especiales en embarazo, personas con trastornos de coagulación o con marcapasos. Lo evaluamos en tu primera consulta."
    },
    {
      pregunta: "¿Dónde están ubicados?",
      respuesta: "Contamos con consultas en la Ciudad de México. Al agendar, te confirmamos la dirección exacta."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#2D2D2D] selection:bg-[#AFEEEE] selection:text-[#008B8B]">
      <SEO 
        title="Especialistas en Acupuntura Médica y Regenerativa"
        description="Clínica de acupuntura profesional en Benito Juárez, CDMX. Especialistas en parálisis facial, dolor crónico, esguinces y salud hormonal femenina. Consulta clínica presencial."
        keywords={['acupuntura benito juarez', 'paralisis facial cdmx', 'acupuntura dolor cronico cdmx', 'salud femenina benito juarez']}
        ogTitle="Acupuntura CDMX | Recuperación Técnica y Bienestar"
        ogDescription="Especialistas en parálisis facial and dolor crónico en Benito Juárez. Agenda tu consulta clínica presencial."
        twitterTitle="Acupuntura CDMX: Especialistas en Medicina Regenerativa"
        twitterDescription="Recuperación técnica y bienestar con acupuntura de especialidad en la Ciudad de México."
      />

      {/* Hero Section */}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-[#AFEEEE] shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F0FFFF] border border-[#00CED1]/20 rounded-full flex items-center justify-center shadow-sm overflow-hidden p-1 relative">
                <Image 
                  src="/images/logo.svg" 
                  alt="Acupuntura CDMX Logo" 
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="font-bold text-[#00CED1] tracking-[0.1em] text-sm md:text-base uppercase">ACUPUNTURA CDMX</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              <button onClick={() => scrollTo("inicio")} className="text-[#4A4A4A] hover:text-[#00CED1] transition-colors text-xs uppercase tracking-widest font-bold">Inicio</button>
              <button onClick={() => scrollTo("padecimientos")} className="text-[#4A4A4A] hover:text-[#00CED1] transition-colors text-xs uppercase tracking-widest font-bold">Servicios</button>
              <button onClick={() => scrollTo("beneficios")} className="text-[#4A4A4A] hover:text-[#00CED1] transition-colors text-xs uppercase tracking-widest font-bold">Filosofía</button>
              <button onClick={() => scrollTo("faq")} className="text-[#4A4A4A] hover:text-[#00CED1] transition-colors text-xs uppercase tracking-widest font-bold">FAQ</button>
            </div>

            <div className="flex items-center gap-4">
              <BotonWhatsappClinico 
                label="Agendar" 
                className="hidden sm:flex px-6 py-2.5 text-xs" 
              />
              
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-[#2D2D2D] z-[60] relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-[#00CED1] transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
                <span className={`w-full h-0.5 bg-[#00CED1] transition-all duration-300 ${mobileMenuOpen ? "opacity-0 scale-x-0" : ""}`}></span>
                <span className={`w-full h-0.5 bg-[#00CED1] transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[55] lg:hidden bg-white/95 backdrop-blur-xl"
            >
              <div className="flex flex-col h-full px-8 pt-24 pb-12 overflow-y-auto">
                <div className="flex flex-col gap-8 items-start">
                  {[
                    { name: "Inicio", id: "inicio" },
                    { name: "Servicios", id: "padecimientos" },
                    { name: "Filosofía", id: "beneficios" },
                    { name: "FAQ", id: "faq" }
                  ].map((item, i) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      onClick={() => { scrollTo(item.id); setMobileMenuOpen(false); }}
                      className="text-3xl font-bold text-[#2D2D2D] hover:text-[#00CED1] transition-colors tracking-tight"
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>

                <div className="mt-auto pt-12 border-t border-[#AFEEEE]/30">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-6"
                  >
                    <BotonWhatsappClinico 
                      label="Agendar Cita" 
                      className="w-full py-5 text-lg" 
                    />
                    
                    <div className="space-y-4 text-[#4A4A4A]">
                      <p className="text-sm font-medium uppercase tracking-widest text-[#5A5A40]">Contacto</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#E0FFFF] flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-[#00CED1]" />
                        </div>
                        <p className="text-sm leading-tight">Alcaldía Benito Juárez,<br />Ciudad de México</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#E0FFFF] flex items-center justify-center">
                          <Clock className="w-5 h-5 text-[#00CED1]" />
                        </div>
                        <p className="text-sm leading-tight">Lun - Vie: 9:00 - 18:00<br />Sáb: 9:00 - 14:00</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 md:pt-32 pb-10 md:pb-14 bg-gradient-to-b from-[#FAF9F6] to-[#E0FFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm text-[#5A5A40] px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] border border-[#5A5A40]/20 shadow-sm">
                <span className="w-1.5 h-1.5 bg-[#00CED1] rounded-full animate-pulse"></span>
                Acupuntura CDMX
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2D2D2D] mb-6">
                Especialistas en <span className="text-[#00CED1]">Acupuntura CDMX</span>
              </h1>
              <p className="text-lg text-[#4A4A4A] mb-8 font-light max-w-2xl introduccion-clínica">
                Bajo la dirección técnica de <span className="font-bold text-[#2D2D2D]">Liz Gamiño</span>, ofrecemos un escape mental y sanación profunda con precisión clínica en la alcaldía Benito Juárez. 
                <span className="block font-medium text-[#00CED1] mt-2 italic">
                  *Atención presencial exclusiva en consultorio.
                </span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <BotonWhatsappClinico />
                <button
                  onClick={() => scrollTo("padecimientos")}
                  className="inline-flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm text-[#00CED1] border border-[#00CED1]/20 hover:bg-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-sm hover:shadow-md"
                >
                  Ver servicios
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-[#4A4A4A]">
                  <CheckCircle2 className="w-5 h-5 text-[#00CED1]" />
                  <span className="text-sm md:text-base font-medium">Terapia segura</span>
                </div>
                <div className="flex items-center gap-2 text-[#4A4A4A]">
                  <CheckCircle2 className="w-5 h-5 text-[#00CED1]" />
                  <span className="text-sm md:text-base font-medium">Agujas estériles</span>
                </div>
                <div className="flex items-center gap-2 text-[#4A4A4A]">
                  <CheckCircle2 className="w-5 h-5 text-[#00CED1]" />
                  <span className="text-sm md:text-base font-medium">Certificación</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mt-12 lg:mt-0"
            >
              <div className="aspect-[4/3] max-w-lg mx-auto relative">
                <div className="absolute inset-0 bg-[#AFEEEE] rounded-[2.5rem] transform rotate-3 opacity-30 blur-sm"></div>
                <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-[#AFEEEE]/50">
                  <Image
                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop"
                    alt="Mujer profesional en un estado de profunda paz y relajación, representando el escape del estrés urbano que ofrece Acupuntura CDMX."
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-[#AFEEEE]/20">
                <div className="w-12 h-12 bg-[#E0FFFF] rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#00CED1]" />
                </div>
                <div>
                  <p className="font-bold text-[#2D2D2D] text-sm md:text-base">+500 pacientes</p>
                  <p className="text-xs md:text-sm text-[#4A4A4A] tracking-tight">Bienestar garantizado</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parálisis Facial Section */}
      <section className="bg-white py-16 border-b border-[#AFEEEE] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Lado Imagen: Estética Japonesa/Clínica */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden shadow-sm border border-[#AFEEEE]/20"
            >
              <Image 
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop" 
                alt="Consultorio de acupuntura minimalista y sereno, diseñado para la recuperación profunda y el bienestar del paciente."
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Lado Contenido: Conversión Rápida */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <span className="text-[#00CED1] font-bold uppercase tracking-widest text-xs">Alta Especialidad</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mt-4 mb-6 leading-tight">
                Recuperación Especializada de <span className="text-[#00CED1]">Parálisis Facial</span>
              </h2>
              <p className="text-[#4A4A4A] mb-8 leading-relaxed font-light resumen-tratamiento">
                Sabemos que cada hora cuenta. En <strong>Acupuntura CDMX</strong> aplicamos protocolos avanzados para la regeneración del <strong>nervio facial</strong>, reduciendo secuelas y acelerando el retorno a tu vida normal.
              </p>
              
              <ul className="space-y-3 mb-8 text-sm text-[#4A4A4A]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00CED1]" /> Protocolos de reactivación muscular inmediata.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00CED1]" /> Atención personalizada en la Alcaldía Benito Juárez.
                </li>
              </ul>

              <BotonWhatsappClinico 
                label="Agendar Consulta Prioritaria" 
                message="Hola, necesito informes urgentes sobre el tratamiento de parálisis facial"
                className="inline-flex"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Padecimientos Section */}
      <section id="padecimientos" className="py-10 md:py-12 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#5A5A40] font-bold text-sm uppercase tracking-[0.3em]">Servicios</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mt-2 mb-4">Especialidades Médicas</h2>
            <div className="w-10 h-1 bg-[#00CED1] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {padecimientos.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => {
                  trackConversion();
                  window.open(whatsappUrl, '_blank');
                }}
                className="group flex flex-col h-full bg-white p-8 rounded-2xl border border-[#AFEEEE]/30 transition-all hover:shadow-2xl hover:shadow-[#00CED1]/5 hover:-translate-y-1 cursor-pointer"
              >
                <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 shadow-sm`}>
                  <item.icono className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-[#2D2D2D] mb-3 tracking-tight">{item.categoria}</h3>
                <p className="text-[#4A4A4A] font-light leading-relaxed mb-6 text-base md:text-lg">
                  {item.descripcion}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {item.sintomas.map((sintoma, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-[#4A4A4A]">
                      <CheckCircle2 className="w-4 h-4 text-[#00CED1] flex-shrink-0" />
                      <span className="text-base md:text-lg font-medium tracking-tight">{sintoma}</span>
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-2 text-[#00CED1] font-bold text-sm md:text-base uppercase tracking-widest border-b-2 border-transparent group-hover:border-[#00CED1] transition-all">
                  Consultar ahora
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-8 md:py-10 bg-[#E0FFFF]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6 shadow-md">
            <CheckCircle2 className="w-8 h-8 text-[#5A5A40]" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-[#2D2D2D] mb-4">Seguridad y Calidad</h2>
          <p className="text-[#4A4A4A] font-light leading-relaxed max-w-2xl mx-auto text-lg md:text-xl">
            Tu salud es nuestra prioridad. Utilizamos material 100% estéril y desechable, siguiendo protocolos internacionales de higiene para una sanación segura y profesional.
          </p>
        </motion.div>
      </section>

      {/* Beneficios Section */}
      <section id="beneficios" className="py-10 md:py-14 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#5A5A40] font-medium text-sm uppercase tracking-[0.3em]">Filosofía</span>
            <h2 className="text-3xl md:text-5xl font-light text-[#2D2D2D] mt-2 mb-4">Enfoque integral</h2>
            <div className="w-10 h-px bg-[#AFEEEE] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { titulo: "Evaluación personalizada", descripcion: "Analizamos tu historial y estilo de vida para diseñar un tratamiento a tu medida." },
              { titulo: "Raíces ancestrales", descripcion: "Sabiduría milenaria con los estándares de calidad actuales." },
              { titulo: "Serenidad urbana", descripcion: "Un espacio diseñado para que tu sistema nervioso descanse profundamente." },
              { titulo: "Seguimiento constante", descripcion: "Monitoreamos tu progreso y ajustamos el tratamiento según tu evolución." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-6 bg-white/40 p-8 rounded-2xl border border-[#AFEEEE]/20 shadow-sm"
              >
                <div className="w-12 h-12 bg-[#E0FFFF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-inner">
                  <CheckCircle2 className="w-6 h-6 text-[#00CED1]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[#2D2D2D] mb-2 text-lg md:text-xl">{item.titulo}</h4>
                  <p className="text-[#4A4A4A] font-light leading-relaxed text-base md:text-lg">{item.descripcion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 5 Elementos Section */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-20 text-[#2D2D2D] relative overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.05)] border border-[#AFEEEE]/20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E0FFFF] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 blur-3xl"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[#5A5A40] font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6 block">Filosofía Milenaria</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-[1.1]">
                  Equilibrio de los <br />
                  <span className="text-[#00CED1]">5 Elementos</span>
                </h2>
                <p className="text-[#4A4A4A] font-light text-lg md:text-xl mb-12 leading-relaxed max-w-md">
                  La salud es el equilibrio dinámico entre las fuerzas fundamentales. En el corazón de la ciudad, restauramos tu vitalidad profunda.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
                  {[
                    { name: 'Madera', color: 'bg-emerald-100', desc: 'Crecimiento y Renovación' },
                    { name: 'Fuego', color: 'bg-orange-100', desc: 'Pasión y Vitalidad' },
                    { name: 'Tierra', color: 'bg-amber-100', desc: 'Centro y Estabilidad' },
                    { name: 'Metal', color: 'bg-slate-200', desc: 'Pureza y Estructura' },
                    { name: 'Agua', color: 'bg-[#E0FFFF]', desc: 'Sabiduría y Fluidez' }
                  ].map((el, i) => (
                    <div key={i} className="group flex items-center gap-5">
                      <div className={`w-12 h-12 rounded-full ${el.color} flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-md`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/90"></div>
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#2D2D2D] block mb-1">{el.name}</span>
                        <span className="text-[11px] text-[#4A4A4A] font-bold tracking-widest uppercase">{el.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#AFEEEE]/20 group"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop" 
                  alt="Detalle Zen que evoca paz y equilibrio, integrando la naturaleza en el entorno clínico de Acupuntura CDMX."
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00CED1]/40 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] font-bold mb-1">Equilibrio Urbano</p>
                  <p className="text-[10px] opacity-80 font-bold tracking-widest uppercase">Sanación profunda en la metrópoli</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-8 md:py-10 bg-[#FAF9F6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-[#5A5A40] font-medium text-sm uppercase tracking-[0.3em]">Claridad</span>
            <h2 className="text-3xl md:text-5xl font-light text-[#2D2D2D] mt-2">Preguntas frecuentes</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="border-b border-[#AFEEEE]/30"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-6 text-left transition-colors group"
                >
                  <span className="text-xl md:text-2xl font-bold text-[#2D2D2D] pr-8 group-hover:text-[#00CED1] transition-colors">{item.pregunta}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-6 h-6 text-[#00CED1] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#AFEEEE] flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pb-8">
                        <p className="text-[#4A4A4A] font-light leading-relaxed text-lg md:text-xl">{item.respuesta}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAF9F6] text-[#4A4A4A] py-16 border-t border-[#AFEEEE]">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            
            {/* Columna de Propósito */}
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white border border-[#00CED1]/20 rounded-full flex items-center justify-center shadow-sm overflow-hidden p-1 relative">
                  <Image 
                    src="/images/logo.svg" 
                    alt="Acupuntura CDMX Logo" 
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#2D2D2D] tracking-tight">Acupuntura CDMX</h3>
              </div>
              <p className="text-sm leading-relaxed font-light text-[#333333]">
                Entendemos tu deseo de sanar y tu búsqueda de alivio. Acompañamos tu proceso de 
                recuperación para restaurar el <strong>orden natural</strong> y el equilibrio de tu cuerpo 
                con la <strong>precisión técnica</strong> de la medicina japonesa. 
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-[#5A5A40] font-semibold">
                Un espacio de contención en la Benito Juárez.
              </p>
            </div>

            {/* Columna de Especialidades (Filtro SEO) */}
            <div className="text-sm">
              <h4 className="font-bold mb-4 uppercase text-[10px] tracking-[0.2em]">Especialidades</h4>
              <ul className="space-y-2 opacity-80">
                <li>Recuperación del Nervio Facial</li>
                <li>Salud Femenina y Hormonal</li>
                <li>Clínica del Dolor Crónico</li>
                <li>Acupuntura de Especialidad</li>
              </ul>
            </div>

            {/* Columna Legal/Cofepris (El Escudo) */}
            <div className="max-w-[200px] text-[10px] italic opacity-60 leading-tight">
              <p>Práctica clínica presencial. No realizamos biomagnetismo ni servicios a domicilio. 
              Comprometidos con la ética y la seguridad técnica del paciente.</p>
            </div>

          </div>
          
          <div className="mt-12 pt-6 border-t border-[#AFEEEE] flex justify-between text-[9px] uppercase tracking-widest opacity-50">
            <span>© {new Date().getFullYear()} ACUPUNTURA CDMX</span>
            <span>Ciudad de México, Alcaldía Benito Juárez</span>
          </div>
        </motion.div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => scrollTo("inicio")}
            className="fixed bottom-24 right-6 z-50 bg-white/80 backdrop-blur-md text-[#00CED1] p-3 rounded-full shadow-lg border border-[#AFEEEE] hover:bg-white transition-all md:bottom-28"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
