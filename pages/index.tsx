import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MessageCircle, Phone, ArrowRight, CheckCircle2, Star, ChevronDown, ChevronUp, Heart, Wind, Sparkles, Brain, Activity, MapPin, Mail, Clock, Share2 } from 'lucide-react';
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
      categoria: "Fertilidad y Salud Femenina",
      icono: Heart,
      color: "bg-cyan-50 text-cyan-700",
      descripcion: "Enfoque emocional y equilibrio natural para acompañar tu camino hacia la maternidad.",
      sintomas: ["Regulación del ciclo", "Apoyo en procesos de FIV", "Equilibrio hormonal", "Reducción de ansiedad", "Salud uterina"]
    },
    {
      categoria: "Estrés y Ansiedad",
      icono: Brain,
      color: "bg-cyan-50 text-cyan-700",
      descripcion: "Paz mental y liberación de tensión. Encuentra la serenidad en medio del caos urbano.",
      sintomas: ["Ansiedad generalizada", "Insomnio", "Agotamiento mental", "Tensión muscular", "Irritabilidad"]
    },
    {
      categoria: "Dolor Musculoesquelético",
      icono: Activity,
      color: "bg-cyan-50 text-cyan-700",
      descripcion: "Resultados profundos sin procesos invasivos. Recupera tu movilidad y vive sin limitaciones.",
      sintomas: ["Dolor lumbar y cervical", "Ciática", "Lesiones deportivas", "Contracturas crónicas", "Artritis"]
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
      respuesta: "Contamos con consultas en la Ciudad de México. Al agendar, te confirmamos la dirección exacta y opciones de estacionamiento."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F9F9] font-sans text-slate-900 selection:bg-cyan-100 selection:text-cyan-900">
      <SEO 
        title="Acupuntura en CDMX | Recupera tu Equilibrio Natural"
        description="Especialistas en acupuntura en CDMX. Enfoque en fertilidad, estrés, ansiedad y dolor musculoesquelético. Recupera tu bienestar con medicina tradicional china."
        keywords="acupuntura cdmx, fertilidad acupuntura, estres ansiedad cdmx, dolor espalda acupuntura, medicina tradicional china mexico"
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-cyan-100 shadow-md" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-cyan-950 rounded-full flex items-center justify-center shadow-inner">
                <span className="text-white font-light text-sm tracking-tighter">A</span>
              </div>
              <span className="font-medium text-slate-900 tracking-[0.2em] text-sm md:text-base uppercase">ACUPUNTURA CDMX</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              <button onClick={() => scrollTo("inicio")} className="text-slate-600 hover:text-cyan-800 transition-colors text-sm uppercase tracking-widest font-medium">Inicio</button>
              <button onClick={() => scrollTo("padecimientos")} className="text-slate-600 hover:text-cyan-800 transition-colors text-sm uppercase tracking-widest font-medium">Servicios</button>
              <button onClick={() => scrollTo("beneficios")} className="text-slate-600 hover:text-cyan-800 transition-colors text-sm uppercase tracking-widest font-medium">Filosofía</button>
              <button onClick={() => scrollTo("faq")} className="text-slate-600 hover:text-cyan-800 transition-colors text-sm uppercase tracking-widest font-medium">FAQ</button>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 bg-cyan-950 hover:bg-cyan-900 text-white px-6 py-2.5 rounded-full text-sm uppercase tracking-widest font-medium transition-all shadow-lg hover:scale-105 active:scale-95"
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
              className="lg:hidden bg-white border-b border-cyan-100 shadow-xl"
            >
              <div className="px-4 py-8 flex flex-col gap-6 items-center">
                <button onClick={() => { scrollTo("inicio"); setMobileMenuOpen(false); }} className="text-slate-800 text-lg uppercase tracking-widest font-medium">Inicio</button>
                <button onClick={() => { scrollTo("padecimientos"); setMobileMenuOpen(false); }} className="text-slate-800 text-lg uppercase tracking-widest font-medium">Servicios</button>
                <button onClick={() => { scrollTo("beneficios"); setMobileMenuOpen(false); }} className="text-slate-800 text-lg uppercase tracking-widest font-medium">Filosofía</button>
                <button onClick={() => { scrollTo("faq"); setMobileMenuOpen(false); }} className="text-slate-800 text-lg uppercase tracking-widest font-medium">FAQ</button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-cyan-950 text-white py-4 rounded-full text-lg uppercase tracking-widest font-medium"
                >
                  Agendar Cita
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 md:pt-32 pb-10 md:pb-14 bg-gradient-to-b from-[#D1EAEA] to-[#F4F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm text-cyan-900 px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] border border-cyan-200/50 shadow-sm">
                <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full animate-pulse"></span>
                Urban Zen CDMX
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-slate-900 leading-[1.1] tracking-tight">
                Acupuntura en CDMX: <br />
                <span className="italic font-serif text-cyan-800">Recuperar el equilibrio</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-lg font-light">
                Un refugio de serenidad absoluta. Restauramos tu armonía vital con un enfoque sofisticado de la medicina tradicional china.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-cyan-950 hover:bg-cyan-900 text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-xl hover:shadow-cyan-900/20 hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5" />
                  Inicia tu sanación
                </a>
                <button
                  onClick={() => scrollTo("padecimientos")}
                  className="inline-flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm text-slate-800 border border-cyan-200 hover:bg-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-sm hover:shadow-md"
                >
                  Ver servicios
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm md:text-base font-medium">Terapia segura</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm md:text-base font-medium">Agujas estériles</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
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
                <div className="absolute inset-0 bg-cyan-200 rounded-[2.5rem] transform rotate-3 opacity-30 blur-sm"></div>
                <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-cyan-100/50">
                  <Image
                    src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop&auto=format&q=80"
                    alt="Piedras zen y agua"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-cyan-50">
                <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-cyan-800" />
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


      {/* Padecimientos Section */}
      <section id="padecimientos" className="py-10 md:py-12 bg-[#F4F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-cyan-700 font-medium text-sm uppercase tracking-[0.3em]">Especialidades</span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mt-2 mb-4">Caminos hacia tu bienestar</h2>
            <div className="w-10 h-px bg-cyan-300 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {padecimientos.map((item, idx) => (
              <div key={idx} className="group flex flex-col h-full bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-cyan-100/30 transition-all hover:bg-white hover:shadow-2xl hover:shadow-cyan-900/5 hover:-translate-y-1">
                <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 shadow-sm`}>
                  <item.icono className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-light text-slate-900 mb-3 tracking-tight">{item.categoria}</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-6 text-base md:text-lg italic">
                  {item.descripcion}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {item.sintomas.map((sintoma, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-slate-700">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></span>
                      <span className="text-base md:text-lg font-light tracking-wide">{sintoma}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-900 font-bold text-sm md:text-base uppercase tracking-widest border-b-2 border-cyan-100 pb-1 w-fit hover:border-cyan-900 transition-all"
                >
                  Consultar
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-8 md:py-10 bg-[#E0F2F2]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6 shadow-md">
            <CheckCircle2 className="w-8 h-8 text-cyan-600" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">Seguridad y Calidad</h2>
          <p className="text-slate-700 font-light leading-relaxed max-w-2xl mx-auto text-lg md:text-xl">
            Tu salud es nuestra prioridad. Utilizamos material 100% estéril y desechable, siguiendo protocolos internacionales de higiene para una sanación segura y profesional.
          </p>
        </div>
      </section>

      {/* Beneficios Section */}
      <section id="beneficios" className="py-10 md:py-14 bg-[#F4F9F9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-cyan-700 font-medium text-sm uppercase tracking-[0.3em]">Filosofía</span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mt-2 mb-4">Enfoque integral</h2>
            <div className="w-10 h-px bg-cyan-300 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { titulo: "Evaluación personalizada", descripcion: "Analizamos tu historial y estilo de vida para diseñar un tratamiento a tu medida." },
              { titulo: "Raíces ancestrales", descripcion: "Sabiduría milenaria con los estándares de calidad actuales." },
              { titulo: "Serenidad urbana", descripcion: "Un espacio diseñado para que tu sistema nervioso descanse profundamente." },
              { titulo: "Seguimiento constante", descripcion: "Monitoreamos tu progreso y ajustamos el tratamiento según tu evolución." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 bg-white/40 p-8 rounded-2xl border border-cyan-50 shadow-sm">
                <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-inner">
                  <CheckCircle2 className="w-6 h-6 text-cyan-600" strokeWidth={1.5} />
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
      <section className="py-6 md:py-8 bg-[#F4F9F9] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cyan-950 rounded-[2rem] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20 blur-3xl"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">Los 5 Elementos</h2>
                <p className="text-cyan-100 font-light text-lg md:text-xl mb-10 leading-relaxed">
                  La salud es el equilibrio dinámico entre las fuerzas fundamentales de la naturaleza. Armonizamos estas energías para restaurar tu vitalidad profunda.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {[
                    { name: 'Madera', color: 'bg-cyan-400' },
                    { name: 'Fuego', color: 'bg-cyan-500' },
                    { name: 'Tierra', color: 'bg-cyan-600' },
                    { name: 'Metal', color: 'bg-cyan-300' },
                    { name: 'Agua', color: 'bg-cyan-700' }
                  ].map((el, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${el.color} shadow-sm`}></div>
                      <span className="text-xs uppercase tracking-[0.2em] font-medium text-cyan-300">{el.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl grayscale opacity-40 border border-white/10">
                <Image 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=450&fit=crop&auto=format&q=80" 
                  alt="Naturaleza zen"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-8 md:py-10 bg-[#F4F9F9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-cyan-700 font-medium text-sm uppercase tracking-[0.3em]">Claridad</span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mt-2">Preguntas frecuentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div key={idx} className="border-b border-cyan-100">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-6 text-left transition-colors group"
                >
                  <span className="text-xl md:text-2xl font-light text-slate-900 pr-8 group-hover:text-cyan-800 transition-colors">{item.pregunta}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-6 h-6 text-cyan-900 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-cyan-200 flex-shrink-0" />
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
                        <p className="text-slate-700 font-light leading-relaxed text-lg md:text-xl">{item.respuesta}</p>
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
      <footer className="bg-slate-950 text-slate-400 py-12 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-white mb-6">
                <div className="w-10 h-10 bg-cyan-900 rounded-full flex items-center justify-center shadow-lg">
                  <span className="font-light text-base">A</span>
                </div>
                <span className="font-medium tracking-[0.3em] text-sm uppercase">ACUPUNTURA CDMX</span>
              </div>
              <p className="text-base leading-relaxed font-light tracking-wide max-w-xs text-slate-500">
                Equilibrio y bienestar con tratamientos personalizados de acupuntura en un entorno de paz urbana absoluta.
              </p>
            </div>

            <div>
              <h3 className="text-white text-sm uppercase tracking-[0.3em] font-bold mb-8">Especialidades</h3>
              <ul className="space-y-4 text-base font-light">
                <li><button onClick={() => scrollTo("padecimientos")} className="hover:text-cyan-400 transition-colors">Fertilidad</button></li>
                <li><button onClick={() => scrollTo("padecimientos")} className="hover:text-cyan-400 transition-colors">Estrés y Ansiedad</button></li>
                <li><button onClick={() => scrollTo("padecimientos")} className="hover:text-cyan-400 transition-colors">Dolor Muscular</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm uppercase tracking-[0.3em] font-bold mb-8">Navegación</h3>
              <ul className="space-y-4 text-base font-light">
                <li><button onClick={() => scrollTo("inicio")} className="hover:text-cyan-400 transition-colors">Inicio</button></li>
                <li><Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
                <li><Link href="/privacidad" className="hover:text-cyan-400 transition-colors">Privacidad</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm uppercase tracking-[0.3em] font-bold mb-8">Contacto</h3>
              <ul className="space-y-6 text-base font-light">
                <li className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-cyan-600 flex-shrink-0" strokeWidth={1} />
                  <a href={`tel:+${phoneNumber}`} className="hover:text-white transition-colors">+{phoneNumber}</a>
                </li>
                <li className="flex items-center gap-4">
                  <MessageCircle className="w-6 h-6 text-cyan-600 flex-shrink-0" strokeWidth={1} />
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp Directo</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-900 pt-8 text-center text-xs font-light tracking-[0.4em] text-slate-600 uppercase">
            <p>© {new Date().getFullYear()} ACUPUNTURA CDMX. URBAN ZEN THERAPY.</p>
          </div>
        </div>
      </footer>


    </div>
  );
}
