import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MessageCircle, Phone, ArrowRight, CheckCircle2, CheckCircle, Star, ChevronDown, ChevronUp, Heart, Wind, Sparkles, Brain, Activity, MapPin, Mail, Clock, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SEO from '@/components/SEO';

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      icono: Heart,
      color: "bg-[#5A5A40]/10 text-[#5A5A40]",
      descripcion: "Equilibrio hormonal y apoyo en fertilidad en el corazón de la Benito Juárez.",
      sintomas: ["Fertilidad", "Menopausia", "SOP", "Ciclo Menstrual"]
    },
    {
      categoria: "Dolor Musculoesquelético",
      icono: Activity,
      color: "bg-[#5A5A40]/10 text-[#5A5A40]",
      descripcion: "Alivio para esguinces y lesiones musculares sin fármacos ni imanes.",
      sintomas: ["Esguinces", "Ciática", "Dolor Lumbar", "Nervio Facial"]
    },
    {
      categoria: "Estrés y Ansiedad",
      icono: Brain,
      color: "bg-[#5A5A40]/10 text-[#5A5A40]",
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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-cyan-100 selection:text-cyan-900">
      <SEO 
        title="Especialistas en Acupuntura Médica y Regenerativa"
        description="Clínica de acupuntura profesional en Benito Juárez, CDMX. Especialistas en parálisis facial, dolor crónico, esguinces y salud hormonal femenina."
        keywords={['acupuntura benito juarez', 'paralisis facial cdmx', 'acupuntura dolor cronico cdmx', 'salud femenina benito juarez']}
        ogTitle="Acupuntura CDMX | Recuperación Técnica y Bienestar"
        ogDescription="Especialistas en parálisis facial y dolor crónico en Benito Juárez. Agenda tu consulta clínica presencial."
        twitterTitle="Acupuntura CDMX: Especialistas en Medicina Regenerativa"
        twitterDescription="Recuperación técnica y bienestar con acupuntura de especialidad en la Ciudad de México."
      />

      {/* Hero Section */}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FAF9F6] border border-[#5A5A40]/20 rounded-full flex items-center justify-center shadow-sm overflow-hidden p-1 relative">
                <Image 
                  src="/images/logo.svg" 
                  alt="Acupuntura CDMX Logo" 
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="font-bold text-[#2D2D2D] tracking-[0.1em] text-sm md:text-base uppercase">ACUPUNTURA CDMX</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              <button onClick={() => scrollTo("inicio")} className="text-slate-600 hover:text-[#5A5A40] transition-colors text-xs uppercase tracking-widest font-bold">Inicio</button>
              <button onClick={() => scrollTo("padecimientos")} className="text-slate-600 hover:text-[#5A5A40] transition-colors text-xs uppercase tracking-widest font-bold">Servicios</button>
              <button onClick={() => scrollTo("beneficios")} className="text-slate-600 hover:text-[#5A5A40] transition-colors text-xs uppercase tracking-widest font-bold">Filosofía</button>
              <button onClick={() => scrollTo("faq")} className="text-slate-600 hover:text-[#5A5A40] transition-colors text-xs uppercase tracking-widest font-bold">FAQ</button>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 bg-[#5A5A40] hover:bg-[#4A4A30] text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                <span>Agendar</span>
              </a>
              
              {/* Mobile Menu Toggle */}
              <button 
                className="lg:hidden p-2 text-slate-900"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-current transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                  <span className={`w-full h-0.5 bg-current transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
                  <span className={`w-full h-0.5 bg-current transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden bg-white border-b border-stone-100 shadow-xl"
            >
              <div className="px-4 py-8 flex flex-col gap-6 items-center">
                <button onClick={() => { scrollTo("inicio"); setMobileMenuOpen(false); }} className="text-stone-800 text-sm uppercase tracking-widest font-medium">Inicio</button>
                <button onClick={() => { scrollTo("padecimientos"); setMobileMenuOpen(false); }} className="text-stone-800 text-sm uppercase tracking-widest font-medium">Servicios</button>
                <button onClick={() => { scrollTo("beneficios"); setMobileMenuOpen(false); }} className="text-stone-800 text-sm uppercase tracking-widest font-medium">Filosofía</button>
                <button onClick={() => { scrollTo("faq"); setMobileMenuOpen(false); }} className="text-stone-800 text-sm uppercase tracking-widest font-medium">FAQ</button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-[#5A5A40] text-white py-4 rounded-full text-sm uppercase tracking-widest font-medium"
                >
                  Agendar Cita
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 md:pt-32 pb-10 md:pb-14 bg-gradient-to-b from-[#FAF9F6] to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm text-[#5A5A40] px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] border border-[#5A5A40]/20 shadow-sm">
                <span className="w-1.5 h-1.5 bg-[#5A5A40] rounded-full animate-pulse"></span>
                Acupuntura CDMX
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2D2D2D] mb-6">
                Especialistas en <span className="text-[#5A5A40]">Acupuntura CDMX</span>
              </h1>
              <p className="text-lg text-[#4A4A4A] mb-8 font-light max-w-2xl introduccion-clínica">
                Bienestar y alivio profesional en la alcaldía Benito Juárez. 
                <span className="block font-medium text-[#5A5A40] mt-2 italic">
                  *Atención presencial exclusiva en consultorio.
                </span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#5A5A40] hover:bg-[#4A4A30] text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-xl hover:shadow-[#5A5A40]/20 hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agenda tu cita
                </a>
                <button
                  onClick={() => scrollTo("padecimientos")}
                  className="inline-flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm text-[#5A5A40] border border-[#5A5A40]/20 hover:bg-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-sm hover:shadow-md"
                >
                  Ver servicios
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-[#5A5A40]" />
                  <span className="text-sm md:text-base font-medium">Terapia segura</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-[#5A5A40]" />
                  <span className="text-sm md:text-base font-medium">Agujas estériles</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-[#5A5A40]" />
                  <span className="text-sm md:text-base font-medium">Certificación</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/3] max-w-lg mx-auto relative">
                <div className="absolute inset-0 bg-blue-200 rounded-[2.5rem] transform rotate-3 opacity-30 blur-sm"></div>
                <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100/50">
                  <Image
                    src="/hero-serenity.jpg"
                    alt="Fachada principal de Acupuntura CDMX en Benito Juárez"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-50">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm md:text-base">+500 pacientes</p>
                  <p className="text-xs md:text-sm text-slate-500 tracking-tight">Bienestar garantizado</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parálisis Facial Section */}
      <section className="bg-white py-16 border-b border-[#F2F1E6]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Lado Imagen: Estética Japonesa/Clínica */}
            <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden shadow-sm">
              <Image 
                src="/terapia-facial.jpg" 
                alt="Tratamiento especializado de Nervio Facial en Acupuntura CDMX"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Lado Contenido: Conversión Rápida */}
            <div className="w-full md:w-1/2">
              <span className="text-[#5A5A40] font-bold uppercase tracking-widest text-xs">Alta Especialidad</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mt-4 mb-6 leading-tight">
                Recuperación Especializada de <span className="text-[#5A5A40]">Parálisis Facial</span>
              </h2>
              <p className="text-[#4A4A4A] mb-8 leading-relaxed font-light resumen-tratamiento">
                Sabemos que cada hora cuenta. En <strong>Acupuntura CDMX</strong> aplicamos protocolos avanzados para la regeneración del <strong>nervio facial</strong>, reduciendo secuelas y acelerando el retorno a tu vida normal.
              </p>
              
              <ul className="space-y-3 mb-8 text-sm text-[#4A4A4A]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#5A5A40]" /> Protocolos de reactivación muscular inmediata.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#5A5A40]" /> Atención personalizada en la Alcaldía Benito Juárez.
                </li>
              </ul>

              <a 
                href={`https://wa.me/${phoneNumber}?text=Hola, necesito informes urgentes sobre el tratamiento de parálisis facial`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#5A5A40] text-white px-8 py-4 rounded-full font-medium hover:bg-[#4A4A30] transition-all shadow-lg"
              >
                Agendar Consulta Prioritaria
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Padecimientos Section */}
      <section id="padecimientos" className="py-10 md:py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#5A5A40] font-bold text-sm uppercase tracking-[0.3em]">Servicios</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">Especialidades Médicas</h2>
            <div className="w-10 h-1 bg-[#5A5A40] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {padecimientos.map((item, idx) => (
              <div key={idx} className="group flex flex-col h-full bg-white p-8 rounded-2xl border border-slate-100 transition-all hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1">
                <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 shadow-sm`}>
                  <item.icono className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{item.categoria}</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-6 text-base md:text-lg">
                  {item.descripcion}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {item.sintomas.map((sintoma, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-base md:text-lg font-medium tracking-tight">{sintoma}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm md:text-base uppercase tracking-widest border-b-2 border-transparent hover:border-blue-600 transition-all"
                >
                  Consultar ahora
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-8 md:py-10 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6 shadow-md">
            <CheckCircle2 className="w-8 h-8 text-stone-600" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">Seguridad y Calidad</h2>
          <p className="text-slate-700 font-light leading-relaxed max-w-2xl mx-auto text-lg md:text-xl">
            Tu salud es nuestra prioridad. Utilizamos material 100% estéril y desechable, siguiendo protocolos internacionales de higiene para una sanación segura y profesional.
          </p>
        </div>
      </section>

      {/* Beneficios Section */}
      <section id="beneficios" className="py-10 md:py-14 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-stone-700 font-medium text-sm uppercase tracking-[0.3em]">Filosofía</span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mt-2 mb-4">Enfoque integral</h2>
            <div className="w-10 h-px bg-stone-300 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { titulo: "Evaluación personalizada", descripcion: "Analizamos tu historial y estilo de vida para diseñar un tratamiento a tu medida." },
              { titulo: "Raíces ancestrales", descripcion: "Sabiduría milenaria con los estándares de calidad actuales." },
              { titulo: "Serenidad urbana", descripcion: "Un espacio diseñado para que tu sistema nervioso descanse profundamente." },
              { titulo: "Seguimiento constante", descripcion: "Monitoreamos tu progreso y ajustamos el tratamiento según tu evolución." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 bg-white/40 p-8 rounded-2xl border border-stone-50 shadow-sm">
                <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-inner">
                  <CheckCircle2 className="w-6 h-6 text-stone-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg md:text-xl">{item.titulo}</h4>
                  <p className="text-slate-600 font-light leading-relaxed text-base md:text-lg">{item.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 5 Elementos Section */}
      <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-20 text-slate-900 relative overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 blur-3xl"></div>
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
                  <span className="text-[#5A5A40]">5 Elementos</span>
                </h2>
                <p className="text-slate-600 font-light text-lg md:text-xl mb-12 leading-relaxed max-w-md">
                  La salud es el equilibrio dinámico entre las fuerzas fundamentales. En el corazón de la ciudad, restauramos tu vitalidad profunda.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
                  {[
                    { name: 'Madera', color: 'bg-emerald-100', desc: 'Crecimiento y Renovación' },
                    { name: 'Fuego', color: 'bg-orange-100', desc: 'Pasión y Vitalidad' },
                    { name: 'Tierra', color: 'bg-amber-100', desc: 'Centro y Estabilidad' },
                    { name: 'Metal', color: 'bg-slate-200', desc: 'Pureza y Estructura' },
                    { name: 'Agua', color: 'bg-blue-100', desc: 'Sabiduría y Fluidez' }
                  ].map((el, i) => (
                    <div key={i} className="group flex items-center gap-5">
                      <div className={`w-12 h-12 rounded-full ${el.color} flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-md`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/90"></div>
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-[0.25em] font-bold text-slate-900 block mb-1">{el.name}</span>
                        <span className="text-[11px] text-slate-500 font-bold tracking-widest uppercase">{el.desc}</span>
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
                className="relative aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 group"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=1000&fit=crop&auto=format&q=80" 
                  alt="Naturaleza zen urbana moderna"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-60"></div>
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
          <div className="text-center mb-8">
            <span className="text-[#5A5A40] font-medium text-sm uppercase tracking-[0.3em]">Claridad</span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mt-2">Preguntas frecuentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div key={idx} className="border-b border-stone-100">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-6 text-left transition-colors group"
                >
                  <span className="text-xl md:text-2xl font-bold text-slate-900 pr-8 group-hover:text-[#5A5A40] transition-colors">{item.pregunta}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-6 h-6 text-[#5A5A40] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-300 flex-shrink-0" />
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
                        <p className="text-slate-600 font-light leading-relaxed text-lg md:text-xl">{item.respuesta}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F9F8F3] text-[#4A4A4A] py-12 border-t border-[#E5E2D1]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            
            {/* Columna de Propósito */}
            <div className="max-w-lg">
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4 tracking-tight">Acupuntura CDMX</h3>
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
          
          <div className="mt-12 pt-6 border-t border-[#E5E2D1] flex justify-between text-[9px] uppercase tracking-widest opacity-50">
            <span>© {new Date().getFullYear()} ACUPUNTURA CDMX</span>
            <span>Ciudad de México, Alcaldía Benito Juárez</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 transition-transform md:px-6 md:rounded-2xl"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:inline font-medium">Agendar Cita en Consultorio</span>
      </a>
    </div>
  );
}
