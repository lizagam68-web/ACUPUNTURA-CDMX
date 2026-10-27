"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Mail, 
  Phone, 
  User, 
  ShieldCheck, 
  Video, 
  FileText, 
  MessageCircle, 
  Play, 
  Download,
  Flame,
  Award,
  ChevronDown
} from "lucide-react";
import { clinicData } from "@/data/clinic-data";
import { VideoClaseCincoElementos } from "@/components/VideoClaseCincoElementos";

interface FormularioCaptacionProps {
  source?: string;
  elementResult?: string;
  scoreResult?: number;
  compactMode?: boolean;
  onSuccessUnlock?: () => void;
  titleOverride?: string;
  subtitleOverride?: string;
}

export function FormularioCaptacionCursoGratis({
  source = "curso_gratis_landing",
  elementResult,
  scoreResult,
  compactMode = false,
  onSuccessUnlock,
  titleOverride,
  subtitleOverride
}: FormularioCaptacionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Estrés, agotamiento o ansiedad");
  const [acceptedTerms, setAcceptedTerms] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Revisar si ya se había registrado previamente
  useEffect(() => {
    try {
      const savedLead = localStorage.getItem("liz_gamino_lead_registered");
      if (savedLead) {
        setIsUnlocked(true);
      }
    } catch (e) {
      // Ignorar errores de localStorage en modo estricto
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("Por favor ingresa tu nombre completo.");
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("Por favor ingresa un correo electrónico válido.");
      return;
    }

    if (!phone.trim() || phone.replace(/\D/g, "").length < 8) {
      setErrorMessage("Por favor ingresa un número de WhatsApp válido (mínimo 10 dígitos).");
      return;
    }

    if (!acceptedTerms) {
      setErrorMessage("Por favor acepta el aviso de privacidad para continuar.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          interest,
          source,
          element: elementResult,
          score: scoreResult
        })
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "No se pudo registrar en este momento.");
      }

      // Guardar en localStorage para recordar desbloqueo
      try {
        localStorage.setItem("liz_gamino_lead_registered", "true");
        localStorage.setItem("liz_gamino_lead_name", name);
      } catch (e) {}

      setIsUnlocked(true);
      if (onSuccessUnlock) {
        onSuccessUnlock();
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Ocurrió un error. Intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `¡Hola Lic. Elizabeth Gamiño! Me acabo de registrar al Curso Gratis de Autocuidado y los 5 Elementos. Mi nombre es ${name || "un alumno"}, y mi principal interés es tratar: ${interest}. Me gustaría confirmar mi acceso.`
  );

  // =========================================================================
  // VISTA CUANDO EL USUARIO YA ESTÁ DESBLOQUEADO (ÉXITO)
  // =========================================================================
  if (isUnlocked) {
    return (
      <div className="bg-white border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 animate-fade-in text-[#18313a]">
        
        {/* Cabecera de éxito */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 border border-emerald-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 size={16} className="text-emerald-600" />
            <span>Acceso Desbloqueado con Éxito</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#18313a]">
            ¡Bienvenida/o al Mini-Curso de Autocuidado y 5 Elementos!
          </h3>

          <p className="text-sm sm:text-base text-[#4a5e66] max-w-xl mx-auto font-light">
            Tu registro quedó confirmado. Aquí tienes tu <strong>Clase en Video de 10 minutos</strong> sobre el desbalance de los 5 elementos, el estrés de la vida moderna y ejercicios breves de tapping bioenergético.
          </p>
        </div>

        {/* Reproductor Interactivo Completo de 10 Minutos */}
        <div className="space-y-4">
          <VideoClaseCincoElementos />
        </div>

        {/* Modal de video interactivo si se activa */}
        {showVideoModal && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <div className="max-w-4xl w-full my-auto">
              <VideoClaseCincoElementos onClose={() => setShowVideoModal(false)} />
            </div>
          </div>
        )}

        {/* Canales de seguimiento y WhatsApp directo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          
          <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e8e1d5] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <MessageCircle size={20} />
            </div>
            <div className="space-y-1.5">
              <h5 className="text-sm font-bold text-[#18313a]">
                Avisos &amp; Consejos Semanales por WhatsApp
              </h5>
              <p className="text-xs text-[#5a6e75] font-light leading-relaxed">
                Escríbele directamente a la Lic. Elizabeth Gamiño para confirmar tu registro y recibir recordatorios de clases abiertas.
              </p>
              <a
                href={`https://wa.me/525574402623?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:text-emerald-800 font-bold underline pt-1"
              >
                <span>Enviar mensaje a la Licenciada →</span>
              </a>
            </div>
          </div>

          <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e8e1d5] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Download size={20} />
            </div>
            <div className="space-y-1.5">
              <h5 className="text-sm font-bold text-[#18313a]">
                Tu Prescripción Anatómica en PDF
              </h5>
              <p className="text-xs text-[#5a6e75] font-light leading-relaxed">
                Descarga o imprime tu mapa de puntos con distancias en Cun y referencias anatómicas exactas para tenerlo en tu buró.
              </p>
              <button
                onClick={() => {
                  if (typeof window !== "undefined") window.print();
                }}
                className="inline-flex items-center gap-1.5 text-xs text-amber-800 hover:text-amber-900 font-bold underline pt-1 cursor-pointer"
              >
                <span>Imprimir o Guardar PDF ahora →</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    );
  }

  // =========================================================================
  // FORMULARIO DE CAPTACIÓN (ANTES DE DESBLOQUEAR)
  // =========================================================================
  return (
    <div className={`bg-white border border-[#cfbfab] rounded-3xl shadow-xl overflow-hidden text-[#18313a] ${compactMode ? "p-6" : "p-6 sm:p-10"}`}>
      
      {/* Barra de garantía superior */}
      <div className="flex items-center justify-between pb-5 border-b border-[#e8e1d5] mb-6 flex-wrap gap-2 text-xs">
        <div className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          <Sparkles size={13} className="text-emerald-600" />
          <span>Acceso 100% Gratuito</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#5a6e75]">
          <Lock size={12} className="text-emerald-600" />
          <span>Datos protegidos · Cero Spam</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Columna Izquierda: Beneficios y Promesa de Valor */}
        <div className="lg:col-span-5 space-y-5">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b86d36] block">
              Regístrate para recibir acceso inmediato
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#18313a] leading-tight">
              {titleOverride || "Mini-Curso Gratuito: Domina el Autocuidado con los 5 Elementos"}
            </h3>
            <p className="text-xs sm:text-sm text-[#4a5e66] font-light leading-relaxed">
              {subtitleOverride || "Completa tus datos para enviarte al instante tu acceso a la videoclase de 15 minutos y tu Prescripción Oficial con los puntos de digitopuntura anatómicos."}
            </p>
          </div>

          {/* Lo que incluye gratis */}
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                <Video size={14} />
              </div>
              <div className="text-xs space-y-0.5">
                <strong className="text-[#18313a] block">Clase Maestra en Video (15 min)</strong>
                <span className="text-[#5a6e75] font-light">Técnica paso a paso explicada por la Lic. Elizabeth Gamiño.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                <FileText size={14} />
              </div>
              <div className="text-xs space-y-0.5">
                <strong className="text-[#18313a] block">Prescripción Oficial en PDF</strong>
                <span className="text-[#5a6e75] font-light">Localización anatómica con distancias en Cun para imprimir en casa.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#3e685f]/15 text-[#3e685f] flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck size={14} />
              </div>
              <div className="text-xs space-y-0.5">
                <strong className="text-[#18313a] block">Rigor Clínico de Nivel Licenciatura</strong>
                <span className="text-[#5a6e75] font-light">Acupuntura Humana UNEVE · Cédula Profesional 15289838.</span>
              </div>
            </div>
          </div>

          {/* Prueba social / Foto de la profesional */}
          <div className="pt-2 flex items-center gap-3 border-t border-[#e8e1d5]/80">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#3e685f] shrink-0">
              <Image
                src="/images/lic-elizabeth-gamino-real.jpg"
                alt="Lic. Elizabeth Gamiño"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-xs">
              <span className="font-bold text-[#18313a] block">Lic. Elizabeth Gamiño</span>
              <span className="text-[#5a6e75] text-[11px] block">Especialista en Medicina Tradicional China</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario de Captación */}
        <div className="lg:col-span-7 bg-[#faf8f5] p-6 sm:p-8 rounded-2xl border border-[#e8e1d5] shadow-inner space-y-4">
          
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Mensaje de error si falta algo */}
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <span>⚠️ {errorMessage}</span>
              </div>
            )}

            {/* Campo: Nombre */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#18313a] flex items-center gap-1.5">
                <User size={13} className="text-[#3e685f]" />
                <span>Nombre Completo <span className="text-red-500">*</span></span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Sofía Morales"
                className="w-full px-4 py-2.5 rounded-xl border border-[#cfbfab] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3e685f] focus:border-transparent transition-all"
              />
            </div>

            {/* Fila: Email y WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#18313a] flex items-center gap-1.5">
                  <Mail size={13} className="text-[#3e685f]" />
                  <span>Correo Electrónico <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sofia@ejemplo.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#cfbfab] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3e685f] focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#18313a] flex items-center gap-1.5">
                  <Phone size={13} className="text-[#3e685f]" />
                  <span>WhatsApp / Teléfono <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="55 1234 5678"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#cfbfab] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3e685f] focus:border-transparent transition-all"
                />
              </div>

            </div>

            {/* Campo: Principal molestia / interés */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#18313a] flex items-center justify-between">
                <span>¿Qué desequilibrio o molestia buscas tratar?</span>
                <span className="text-[10px] text-[#5a6e75] font-normal">Personalizaremos tu guía</span>
              </label>
              <div className="relative">
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#cfbfab] bg-white text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#3e685f] focus:border-transparent transition-all pr-10"
                >
                  <option value="Estrés, agotamiento o ansiedad">Estrés continuo, agotamiento mental o ansiedad</option>
                  <option value="Insomnio o mente inquieta por las noches">Insomnio, despertar a las 3:00 am o mente inquieta</option>
                  <option value="Dolor de cabeza, migraña o cuello tenso">Dolores de cabeza, migrañas o tensión de cuello/hombros</option>
                  <option value="Problemas digestivos, hinchazón o pesadez">Problemas digestivos, hinchazón y falta de energía</option>
                  <option value="Dolores de espalda, ciática o articulaciones">Dolores de espalda baja, ciática o articulaciones</option>
                  <option value="Deseo aprender autocuidado y medicina china">Quiero aprender digitopuntura para mi familia o pacientes</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-3 text-[#5a6e75] pointer-events-none" />
              </div>
            </div>

            {/* Checkbox de términos */}
            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-0.5 rounded border-[#cfbfab] text-[#3e685f] focus:ring-[#3e685f] cursor-pointer"
              />
              <label htmlFor="terms" className="text-[11px] text-[#5a6e75] leading-snug cursor-pointer">
                Acepto recibir mi acceso al curso gratis y consejos de salud por WhatsApp/correo. Puedes darte de baja con 1 clic en cualquier momento.
              </label>
            </div>

            {/* Botón de Enviar / Captación */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-[#3e685f] to-[#18313a] hover:from-emerald-700 hover:to-[#12242b] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {isLoading ? (
                <span>Desbloqueando tu acceso...</span>
              ) : (
                <>
                  <span>Desbloquear Mi Curso Gratis &amp; Prescripción Ahora</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>

            <div className="text-center pt-1">
              <span className="text-[10px] text-[#5a6e75] flex items-center justify-center gap-1">
                <Lock size={10} className="text-emerald-600" />
                <span>Tus datos nunca se comparten con terceros. Consulta nuestro Aviso de Privacidad.</span>
              </span>
            </div>

          </form>

        </div>

      </div>

    </div>
  );
}
