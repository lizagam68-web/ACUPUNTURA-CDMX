"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Leaf, 
  Droplets, 
  Flame, 
  Wind,
  CheckCircle2,
  Maximize2
} from "lucide-react";

export const NaturalVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const naturalElements = [
    {
      id: "herbolaria",
      icon: Leaf,
      title: "Herbolaria Tradicional (Fitoterapia)",
      color: "bg-emerald-500",
      lightBg: "bg-emerald-50 border-emerald-200 text-emerald-900",
      iconColor: "text-emerald-600",
      description: "Extractos botánicos puros que mejoran la nutrición del nervio facial y aceleran la regeneración tisular."
    },
    {
      id: "moxibustion",
      icon: Flame,
      title: "Moxibustión Herbal Natural (Artemisa)",
      color: "bg-amber-500",
      lightBg: "bg-amber-50 border-amber-200 text-amber-900",
      iconColor: "text-amber-600",
      description: "Calor terapéutico de la planta Artemisa vulgaris que activa la circulación de la sangre y dispersa el frío en los meridianos faciales."
    },
    {
      id: "viento-qi",
      icon: Wind,
      title: "Armonización del Viento Interno y Qi",
      color: "bg-teal-500",
      lightBg: "bg-teal-50 border-teal-200 text-teal-900",
      iconColor: "text-teal-600",
      description: "Enfoque tradicional donde la parálisis facial se asocia a factores de 'Viento'. Restauramos el flujo de energía vital."
    },
    {
      id: "hidroterapia",
      icon: Droplets,
      title: "Micro-Estimulación y Nutrición Humana",
      color: "bg-cyan-500",
      lightBg: "bg-cyan-50 border-cyan-200 text-cyan-900",
      iconColor: "text-cyan-600",
      description: "Acupuntura con agujas filiformes de acero estéril que estimulan la microcirculación tisular de manera completamente natural."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-primary-50/40 to-white border-t border-primary-100">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/70 border border-emerald-200 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3 shadow-xs">
            <Leaf size={14} className="text-emerald-600" /> Terapia Natural Integrativa
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif italic text-primary-900 tracking-tight mb-4">
            Tratamiento con Elementos Naturales para Parálisis Facial
          </h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto font-light leading-relaxed">
            Combinamos la acupuntura clínica con elementos de la naturaleza (herbolaria, moxibustión de Artemisa y equilibrio térmico) para reactivar de forma holística la función del nervio facial.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Video Box with Natural Aesthetics */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="bg-primary-950 rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-800/40 relative group">
              {/* Natural Badge Banner */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-emerald-950/80 backdrop-blur-md text-emerald-200 px-3.5 py-1.5 rounded-full border border-emerald-700/50 text-xs font-semibold">
                <Leaf size={14} className="text-emerald-400 animate-pulse" />
                <span>Entorno Natural y Relajante</span>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
                {!videoError ? (
                  <video
                    ref={videoRef}
                    playsInline
                    loop
                    muted={isMuted}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onError={() => setVideoError(true)}
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1512290900673-3f18e977ef28?auto=format&fit=crop&w=1200&q=80"
                  >
                    <source src="/videos/paralisis-facial.mp4" type="video/mp4" />
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                  </video>
                ) : (
                  <div className="relative w-full h-full bg-emerald-950 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                    <Image 
                      src="/images/clinical-acupuncture.jpg" 
                      alt="Acupuntura Humana y Rehabilitación Integral" 
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover opacity-40 mix-blend-overlay"
                    />
                    <div className="relative z-10 max-w-md bg-emerald-950/80 p-6 rounded-2xl border border-emerald-500/30 backdrop-blur-md">
                      <div className="w-12 h-12 bg-emerald-600/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3 border border-emerald-500/40">
                        <Leaf size={24} className="animate-pulse" />
                      </div>
                      <h4 className="text-white font-serif italic text-xl font-bold mb-2">
                        Experiencia Terapéutica Natural
                      </h4>
                      <p className="text-emerald-200 text-xs font-light leading-relaxed mb-4">
                        Reactivación del flujo de energía (Qi) mediante estímulos naturales, herbolaria y moxibustión de Artemisa en mi espacio clínico de atención.
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs text-emerald-300 font-semibold bg-emerald-900/80 px-3 py-1.5 rounded-full border border-emerald-700/50">
                        <Leaf size={12} className="text-emerald-400" />
                        Tratamiento 100% Personalizado en CDMX
                      </span>
                    </div>
                  </div>
                )}

                {/* Video Controls Overlay */}
                {!videoError && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between text-white z-20 opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlay}
                        className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-all shadow-md focus:outline-none"
                        aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                      >
                        {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="p-2 rounded-full hover:bg-white/20 text-emerald-100 transition-colors"
                        aria-label={isMuted ? "Activar sonido" : "Silenciar sonido"}
                      >
                        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                      </button>

                      <span className="text-xs font-medium text-emerald-200 hidden sm:inline-block">
                        {isPlaying ? "Reproduciendo armonía natural" : "Haz clic para ver el entorno natural"}
                      </span>
                    </div>

                    <button
                      onClick={toggleFullscreen}
                      className="p-2 rounded-full hover:bg-white/20 text-emerald-100 transition-colors"
                      aria-label="Pantalla completa"
                    >
                      <Maximize2 size={18} />
                    </button>
                  </div>
                )}
              </div>

              {/* Video Caption Footer */}
              <div className="bg-primary-900/90 p-4 border-t border-primary-800 text-emerald-100 text-xs flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-light">
                  <Leaf size={14} className="text-emerald-400" />
                  Visualiza el proceso de reconexión nerviosa rodeado de ambiente natural pacífico
                </span>
                <span className="font-semibold text-emerald-300">Terapia Holística</span>
              </div>
            </div>

            {/* Quick Benefits Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white p-3 rounded-2xl border border-emerald-100 text-center shadow-xs">
                <Leaf size={18} className="text-emerald-600 mx-auto mb-1" />
                <span className="text-xs font-bold text-primary-950 block">100% Natural</span>
                <span className="text-[10px] text-brand-text font-light">Sin químicos sintéticos</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-amber-100 text-center shadow-xs">
                <Flame size={18} className="text-amber-600 mx-auto mb-1" />
                <span className="text-xs font-bold text-primary-950 block">Moxa Herbal</span>
                <span className="text-[10px] text-brand-text font-light">Calor de Artemisa</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-teal-100 text-center shadow-xs">
                <Wind size={18} className="text-teal-600 mx-auto mb-1" />
                <span className="text-xs font-bold text-primary-950 block">Equilibrio Qi</span>
                <span className="text-[10px] text-brand-text font-light">Energía vital</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-cyan-100 text-center shadow-xs">
                <Droplets size={18} className="text-cyan-600 mx-auto mb-1" />
                <span className="text-xs font-bold text-primary-950 block">Microcirculación</span>
                <span className="text-[10px] text-brand-text font-light">Flujo plasmático</span>
              </div>
            </div>
          </div>

          {/* Natural Elements Feature List */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-bold font-serif text-primary-900 italic mb-2">
              Los 4 Elementos Naturales de la Terapia
            </h3>
            
            {naturalElements.map((element) => {
              const IconComponent = element.icon;
              return (
                <div 
                  key={element.id}
                  className={`p-5 rounded-2xl border transition-all hover:shadow-md ${element.lightBg}`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`p-2.5 rounded-xl bg-white shadow-xs ${element.iconColor} flex-shrink-0`}>
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold font-serif text-base mb-1">
                        {element.title}
                      </h4>
                      <p className="text-xs font-light leading-relaxed text-brand-text">
                        {element.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Guarantee Badge */}
            <div className="p-4 rounded-2xl bg-emerald-900 text-white flex items-center gap-3 shadow-md mt-4">
              <CheckCircle2 size={24} className="text-emerald-400 flex-shrink-0" />
              <p className="text-xs font-light leading-snug">
                Tratamiento seguro, no invasivo y respetuoso con la fisiología natural de tu cuerpo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
