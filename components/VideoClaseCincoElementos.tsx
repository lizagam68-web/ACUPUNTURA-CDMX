"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Heart, 
  Flame, 
  Leaf, 
  Wind, 
  Droplets, 
  Layers, 
  ArrowRight, 
  Maximize2, 
  ShieldCheck, 
  BookOpen, 
  Activity, 
  Compass, 
  Fingerprint, 
  HelpCircle,
  FileText,
  Download,
  Headphones,
  Sliders,
  Music,
  Mic
} from "lucide-react";
import { AudioVoiceSettingsModal } from "./AudioVoiceSettingsModal";
import { zenAudio } from "@/lib/zenAudioEngine";
import { 
  loadVoiceSettings, 
  DEFAULT_SETTINGS,
  prepareScriptForSpeech, 
  getCustomChapterAudio, 
  VoiceSettings 
} from "@/lib/voiceEngine";

interface Chapter {
  id: number;
  timeStart: number; // in seconds
  timeEnd: number;
  title: string;
  subtitle: string;
  element?: "madera" | "fuego" | "tierra" | "metal" | "agua" | "general" | "tapping";
  summary: string;
  keyPoints: string[];
  scriptParagraph: string;
}

const CHAPTERS: Chapter[] = [
  {
    id: 1,
    timeStart: 0,
    timeEnd: 120, // 00:00 - 02:00
    title: "1. La Sobrecarga de la Vida Moderna & el Cortisol",
    subtitle: "Cómo el ritmo contemporáneo colapsa la circulación del Qi",
    element: "general",
    summary: "El estilo de vida actual (pantallas, urgencias constantes, privación de sueño) mantiene al sistema nervioso en estado de alarma simpática perpetua, bloqueando el libre flujo de la energía vital.",
    keyPoints: [
      "Hiperestimulación digital y desconexión con los ritmos biológicos circadianos.",
      "El estrés crónico agota el Yin y enciende un falso fuego que agita la mente.",
      "La Medicina Tradicional China no separa la emoción del órgano físico: mente y cuerpo son una misma unidad (Shen y Jing)."
    ],
    scriptParagraph: "Bienvenida y bienvenido a este espacio de reconexión. Soy la Licenciada Elizabeth Gamiño, especialista en Acupuntura Humana. Si hoy vives con una constante tensión en hombros, insomnio de madrugada o la mente que no para de rumiar pendientes, debes saber algo fundamental: tu cuerpo no está roto ni defectuoso; tu cuerpo está intentando comunicarse a través de un grito bioenergético. La vida moderna nos exige una velocidad para la que nuestra biología ancestral no fue diseñada. En estos diez minutos, vas a comprender qué elemento de tu organismo se encuentra bajo asedio y realizaremos juntos un protocolo de tapping bioenergético para que recuperes tu centro y disipes el estrés de inmediato."
  },
  {
    id: 2,
    timeStart: 120,
    timeEnd: 270, // 02:00 - 04:30
    title: "2. La Matriz Psicoemocional de los 5 Elementos",
    subtitle: "Ira, Ansiedad, Sobrepensamiento, Tristeza y Miedo en tus órganos",
    element: "general",
    summary: "Cada elemento rige un par de órganos y una esfera psicoemocional específica. Cuando una emoción no se procesa, estanca el canal bioenergético correspondiente.",
    keyPoints: [
      "Madera (Hígado): Frustración laboral, ira contenida, contracturas en cuello y migrañas en sienes.",
      "Fuego (Corazón): Ansiedad desbordada, taquicardia sin causa médica, insomnio y mente dispersa.",
      "Tierra (Bazo): Rumiación constante, sobrepensamiento, preocupación por el futuro y digestión pesada.",
      "Metal (Pulmón): Melancolía, duelo no elaborado, apego a lo que ya pasó y respiración entrecortada.",
      "Agua (Riñón): Miedo profundo, inseguridad vital, agotamiento crónico de glándulas suprarrenales."
    ],
    scriptParagraph: "En la Medicina Tradicional China, las siete emociones patológicas no residen solo en la cabeza, sino en resonancia directa con nuestros órganos. Si sientes cólera o frustración porque las cosas no salen como planeas, tu Madera, que es el Hígado, se estanca y genera calor que sube hacia los ojos y la mandíbula. Si sufres de palpitaciones repentinas y no puedes concentrarte en el trabajo, tu Fuego, que es el Corazón, ha perdido el anclaje del agua fresca. Si estás pensando una y otra vez en el mismo problema sin resolverlo, tu Tierra, que es el Bazo, se inflama y deviene en pesadez digestiva. Si sientes una tristeza que te cierra la garganta, tu Metal, el Pulmón, está clamando espacio. Y si te despiertas con miedo a no ser suficiente o con fatiga extrema, tu Agua, el Riñón, pide descanso urgente."
  },
  {
    id: 3,
    timeStart: 270,
    timeEnd: 420, // 04:30 - 07:00
    title: "3. El Ciclo de Desbalance: Por qué un síntoma atrae a otro",
    subtitle: "De la irritabilidad al insomnio y la fatiga adrenal",
    element: "madera",
    summary: "Los elementos están unidos por el Ciclo Generativo (Madre-Hijo) y el Ciclo de Control. Un hígado sobrecargado por estrés terminará por asaltar al bazo digestivo y agotar el riñón.",
    keyPoints: [
      "Fase de Alarma: El Hígado se tensa (Madera agrediendo a la Tierra). Comer estresado provoca inflamación inmediata.",
      "Fase de Dispersión: La falta de nutrición altera el Shen del Corazón (Fuego descontrolado y ataques de ansiedad nocturnos).",
      "Fase de Agotamiento: Cuando el cuerpo ya no puede compensar, drena la reserva vital 'Jing' de los Riñones (Agua)."
    ],
    scriptParagraph: "Observa cómo opera el estrés en un día cualquiera: comienzas la mañana con prisas y frustración en el tráfico; ahí tu Madera entra en hiperactividad. Al mediodía comes frente a la computadora revisando mensajes urgentes; inmediatamente tu abdomen se distiende y sientes pesadez extrema porque la Madera ha invadido a la Tierra. Por la noche, quieres descansar, pero tu mente no se apaga: el calor asciende y agita tu Shen en el Corazón. Y tras meses en este ciclo, el cuerpo colapsa en fatiga crónica con el Agua agotada. La digitopuntura y el tapping actúan como llaves maestras que abren estos circuitos cerrados, devolviéndole la fluidez al río de tu energía."
  },
  {
    id: 4,
    timeStart: 420,
    timeEnd: 550, // 07:00 - 09:10
    title: "4. Protocolo Guiado de Tapping & Digitopuntura de Rescate",
    subtitle: "Secuencia rítmica de 8 puntos para drenar la sobrecarga en 2 minutos",
    element: "tapping",
    summary: "Ejercicio práctico guiado con percusión rítmica (2 golpes por segundo) y respiración diafragmática 4-2-6 sobre los resonadores bioenergéticos maestros.",
    keyPoints: [
      "Punto Kárate (ID3 - Houxi): Disuelve la autoexigencia y el estrés de rendimiento.",
      "Coronilla (Baihui - Du 20): Pacífica el Shen y despeja la cefalea tensional.",
      "Tercer Ojo (Yintang): Apaga la hiperactividad del lóbulo frontal y la angustia.",
      "Bajo los Ojos (Chengqi - E1): Drena la preocupación y el sobrepensamiento de la Tierra.",
      "Clavícula (Shufu - R27): Despierta la vitalidad de los riñones y calma el pánico adrenal.",
      "Neiguan (PC6): En la cara interna de la muñeca, el gran regulador del corazón y el diafragma."
    ],
    scriptParagraph: "Vamos a practicar ahora mismo. Suelta lo que tengas en las manos, mantén la espalda recta y respira hondo. Inhala por la nariz en cuatro segundos... retén dos segundos... y exhala suave por la boca en seis segundos. Toma dos dedos de tu mano dominante y comienza a percutir rítmicamente el borde de tu mano opuesta, el Punto Kárate. Repite conmigo en voz baja: Aunque siento el peso del estrés y las exigencias de este día, acepto a mi cuerpo y elijo soltar la tensión ahora. Ahora pasa a la coronilla, en el punto Baihui: percibe cómo desciende una lluvia de calma. Vamos al entrecejo, punto Yintang: siente cómo la niebla mental se disipa. Ve bajo los ojos: liberamos la necesidad de controlarlo todo. Pasa a los huesos bajo la clavícula: revitalizamos tu centro de fuerza y valentía. Y finalmente, presiona tres dedos arriba del pliegue de tu muñeca, punto Neiguan: respira profundo hacia el corazón. Siente la pulsación tibia recorriendo tus brazos."
  },
  {
    id: 5,
    timeStart: 550,
    timeEnd: 600, // 09:10 - 10:00
    title: "5. Integración Yang Sheng & Tu Plan Personalizado",
    subtitle: "Cómo sostener el equilibrio en tu rutina diaria",
    element: "agua",
    summary: "Anclaje de la calma en el Dan Tian inferior, recomendaciones prácticas de hidratación y recordatorio de consultar tu Prescripción Anatómica en PDF.",
    keyPoints: [
      "Llevar ambas manos al vientre bajo (2 dedos bajo el ombligo) para almacenar el Qi restaurado.",
      "Practicar este protocolo de tapping cada mañana al despertar o antes de dormir.",
      "Descargar tu mapa de puntos y agendar tu valoración formal si el dolor persiste."
    ],
    scriptParagraph: "Para consolidar esta práctica de Yang Sheng, coloca ambas palmas sobre tu vientre bajo, el Dan Tian inferior. Inhala visualizando cómo toda la energía dispersa regresa a su hogar cálido y tranquilo. Te felicito por regalarte estos diez minutos de pausa consciente. En tu pantalla tienes disponible tu Prescripción Personalizada con la ubicación anatómica exacta en medidas de Cun para que continúes tu tratamiento en casa. Si buscas un abordaje profundo y presencial con diagnóstico por pulso y lengua, en nuestro consultorio en la Ciudad de México estaré honrada de acompañarte en tu sanación. Gracias por ser parte de esta clase de autocuidado."
  }
];

const TAPPING_POINTS = [
  {
    name: "Punto Kárate (Houxi · ID3)",
    location: "Borde externo de la mano, debajo del meñique",
    action: "Percusión rítmica con 2 dedos de la mano contraria",
    focus: "Libera la resistencia al cambio, la culpa y la autoexigencia tóxica",
    phrase: "«Aunque siento el peso de las exigencias del día, acepto a mi cuerpo y elijo la calma»"
  },
  {
    name: "Coronilla (Baihui · Du 20)",
    location: "Vértice de la cabeza, en la línea media entre ambas orejas",
    action: "Golpeteo suave con las yemas de 4 dedos juntos",
    focus: "Pacifica el Shen (mente), alivia cefaleas y dispersa la pesadez mental",
    phrase: "«Despejo mi mente de pensamientos intrusivos y abro espacio para la serenidad»"
  },
  {
    name: "Tercer Ojo (Yintang)",
    location: "En el entrecejo, punto equidistante entre el inicio de las cejas",
    action: "Presión pulsátil rítmica con el dedo índice o medio",
    focus: "Apaga el sistema nervioso simpático; combate el insomnio y la angustia",
    phrase: "«Confío en mi intuición y suelto la necesidad de controlarlo todo»"
  },
  {
    name: "Bajo los Ojos (Chengqi · E1 / Cuenca)",
    location: "Borde óseo infraorbitario, en la vertical de la pupila",
    action: "Percusión delicada con las yemas de los dedos índices",
    focus: "Drena la preocupación, la rumiación de la Tierra y la fatiga ocular digital",
    phrase: "«Suelto los problemas que no puedo resolver en este instante»"
  },
  {
    name: "Bajo Clavícula (Shufu · R27 Riñón)",
    location: "Depresión justo debajo de la clavícula, a 2 cm del esternón",
    action: "Golpeteo firme pero no doloroso con el puño relajado o 3 dedos",
    focus: "Carga la batería adrenal; disuelve el miedo existencial y el pánico",
    phrase: "«Recupero mi vitalidad original y me siento a salvo en mi propio cuerpo»"
  },
  {
    name: "Neiguan (PC6 · Barrera Interna)",
    location: "A 2 Cun (3 dedos) del pliegue de la muñeca, entre los dos tendones",
    action: "Presión rotatoria sostenida de 15 segundos en cada brazo",
    focus: "Regula el Corazón y el tórax; frena la taquicardia por ansiedad y las náuseas",
    phrase: "«Mi respiración es profunda, rítmica y mi corazón late en paz»"
  }
];

export const VideoClaseCincoElementos: React.FC<{
  onClose?: () => void;
  compact?: boolean;
}> = ({ onClose, compact = false }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"video" | "tapping" | "guion">("video");
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.9);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [audioSourceStatus, setAudioSourceStatus] = useState<string>("Modo Zen 432Hz · Listo");
  const [tappingBeat, setTappingBeat] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [voiceSettings, setVoiceSettings] = useState<VoiceSettings>(DEFAULT_SETTINGS);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState<boolean>(false);

  const totalDuration = 600; // 10 minutes (600 seconds)
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const activeChapterIdRef = useRef<number>(1);
  const isPlayingRef = useRef<boolean>(false);
  const isAudioMutedRef = useRef<boolean>(false);

  isPlayingRef.current = isPlaying;
  isAudioMutedRef.current = isAudioMuted;

  // Find active chapter based on current time
  const currentChapter = CHAPTERS.find(
    ch => currentTime >= ch.timeStart && currentTime < ch.timeEnd
  ) || CHAPTERS[CHAPTERS.length - 1];

  // Sound generator for Zen Chimes (harmonic bowl at chapter changes)
  const playZenChime = useCallback((freq = 528) => {
    if (isAudioMutedRef.current) return;
    zenAudio?.playTibetanBowl(freq);
  }, []);

  // Sound generator for Tapping Clicks (acoustic bamboo beat during tapping exercises)
  const playTappingAcoustic = useCallback(() => {
    if (isAudioMutedRef.current || !isPlayingRef.current) return;
    zenAudio?.playTappingClick();
  }, []);

  // Stop all active audio (speech synthesis, html audio & ambient drone)
  const stopAllAudio = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
      audioPlayerRef.current.currentTime = 0;
    }
    zenAudio?.stopAmbientDrone();
    setIsSpeaking(false);
  }, []);

  // Web Speech Synthesis engine with Mexican Spanish voice priority & natural phonetic smoothing
  const speakWithBrowserSpeech = useCallback((chapter: Chapter) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window) || isAudioMutedRef.current) {
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const settings = loadVoiceSettings();
      const polishedText = prepareScriptForSpeech(chapter.scriptParagraph);

      const utterance = new SpeechSynthesisUtterance(polishedText);
      utterance.lang = "es-MX";
      utterance.rate = (settings.rate || 0.88) * playbackRate;
      utterance.pitch = settings.pitch || 0.96;
      utterance.volume = volume;

      const voices = window.speechSynthesis.getVoices();
      const spanishVoices = voices.filter(v => v.lang.toLowerCase().startsWith("es"));

      // If device has no Spanish voices, do NOT speak with an English robot voice!
      if (spanishVoices.length === 0) {
        setAudioSourceStatus("Modo Zen Activo (Sin voz sintética)");
        setIsSpeaking(false);
        return;
      }

      let chosenVoice: SpeechSynthesisVoice | undefined;
      if (settings.voiceURI) {
        chosenVoice = spanishVoices.find(v => v.voiceURI === settings.voiceURI);
      }
      if (!chosenVoice) {
        chosenVoice = spanishVoices.find(v => 
          (v.lang.includes("MX") || v.name.toLowerCase().includes("mexic")) &&
          (v.name.includes("Paulina") || v.name.includes("Sabina") || v.name.includes("Google") || v.name.includes("Natural"))
        ) || spanishVoices.find(v =>
          v.name.includes("Paulina") || v.name.includes("Monica") || v.name.includes("Sabina") || v.name.includes("Google")
        ) || spanishVoices[0];
      }

      if (chosenVoice) {
        utterance.voice = chosenVoice;
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        const nameClean = chosenVoice?.name.replace(/Google|Microsoft/g, "").slice(0, 24) || "Español";
        setAudioSourceStatus(`Voz Guiada: ${nameClean}`);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn("Speech synthesis error:", err);
      setIsSpeaking(false);
    }
  }, [playbackRate, volume]);

  // Main narration dispatcher: respects mode (Zen 432Hz without synthetic voice / Natural Spanish Voice / Real Voice)
  const startChapterAudio = useCallback((chapter: Chapter, forcePlay: boolean = false) => {
    if (isAudioMutedRef.current || (!isPlayingRef.current && !forcePlay)) return;

    stopAllAudio();
    const settings = loadVoiceSettings();
    setVoiceSettings(settings);

    // 1. Ambient Zen Drone (432Hz) if enabled in settings
    if (settings.ambientMusic && zenAudio) {
      zenAudio.setMasterVolume(volume);
      zenAudio.setAmbientVolume(settings.ambientVolume);
      zenAudio.startAmbientDrone();
    }

    // 2. Play Tibetan singing bowl (528Hz) harmonic chime
    zenAudio?.playTibetanBowl(528);

    // 3. Audio Narration handling:
    if (settings.mode === "custom") {
      const customAudio = getCustomChapterAudio(chapter.id);
      if (customAudio && audioPlayerRef.current) {
        audioPlayerRef.current.src = customAudio;
        audioPlayerRef.current.volume = volume;
        audioPlayerRef.current.playbackRate = playbackRate;
        audioPlayerRef.current.play().then(() => {
          setIsSpeaking(true);
          setAudioSourceStatus(`Voz Real de la Lic. Elizabeth (Cap. ${chapter.id})`);
        }).catch(() => {
          setAudioSourceStatus("Modo Zen Activo");
        });
        return;
      }
      setAudioSourceStatus("Modo Zen (Sin voz sintética)");
      return;
    }

    if (settings.mode === "zen") {
      // 100% Zen mode: no synthetic voice, pure relaxation & subtitles!
      setIsSpeaking(false);
      setAudioSourceStatus("Modo Zen 432Hz · Campana Tibetana & Subtítulos");
      return;
    }

    if (settings.mode === "voice") {
      speakWithBrowserSpeech(chapter);
    }
  }, [playbackRate, volume, stopAllAudio, speakWithBrowserSpeech]);

  // Load saved voice settings on client mount safely
  useEffect(() => {
    setVoiceSettings(loadVoiceSettings());
  }, []);

  // Sync settings when changed from modal
  useEffect(() => {
    const handleVoiceChange = (e: Event) => {
      const customEvt = e as CustomEvent<VoiceSettings>;
      if (customEvt.detail) {
        setVoiceSettings(customEvt.detail);
        if (isPlayingRef.current) {
          startChapterAudio(currentChapter, true);
        }
      }
    };
    window.addEventListener("voice_settings_changed", handleVoiceChange);
    return () => {
      window.removeEventListener("voice_settings_changed", handleVoiceChange);
    };
  }, [currentChapter, startChapterAudio]);

  // Detect chapter change during timeline progression and update audio
  useEffect(() => {
    if (isPlaying && currentChapter.id !== activeChapterIdRef.current) {
      activeChapterIdRef.current = currentChapter.id;
      playZenChime(528); // gentle singing bowl chime on transition
      startChapterAudio(currentChapter);
    }
  }, [currentChapter, isPlaying, playZenChime, startChapterAudio]);

  // Timer interval for timeline progression
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            stopAllAudio();
            return totalDuration;
          }
          return prev + 1;
        });
      }, 1000 / playbackRate);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, playbackRate, stopAllAudio]);

  // Visual tapping beat animation & acoustic rhythmic percussion (in chapter 4)
  useEffect(() => {
    const beatInterval = setInterval(() => {
      setTappingBeat(prev => {
        const next = !prev;
        if (next && currentChapter.element === "tapping" && isPlayingRef.current) {
          playTappingAcoustic();
        }
        return next;
      });
    }, 600);
    return () => clearInterval(beatInterval);
  }, [currentChapter.element, playTappingAcoustic]);

  // Keep-alive timer for WebKit speech synthesis bug (Chrome/Safari pauses after 14s)
  useEffect(() => {
    if (!isPlaying) return;
    const keepAlive = setInterval(() => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
          window.speechSynthesis.pause();
          window.speechSynthesis.resume();
        }
      }
    }, 10000);
    return () => clearInterval(keepAlive);
  }, [isPlaying]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAllAudio();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [stopAllAudio]);

  // Format MM:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Main toggle for Play / Pause
  const handleTogglePlay = () => {
    setHasInteracted(true);
    if (isPlaying) {
      setIsPlaying(false);
      isPlayingRef.current = false;
      stopAllAudio();
    } else {
      setIsPlaying(true);
      isPlayingRef.current = true;
      if (isAudioMuted) {
        setIsAudioMuted(false);
        isAudioMutedRef.current = false;
      }
      playZenChime(432);
      activeChapterIdRef.current = currentChapter.id;
      startChapterAudio(currentChapter, true);
    }
  };

  // Mute / Unmute handler
  const handleToggleMute = () => {
    setHasInteracted(true);
    if (isAudioMuted) {
      setIsAudioMuted(false);
      isAudioMutedRef.current = false;
      playZenChime(528);
      if (isPlaying) {
        startChapterAudio(currentChapter);
      }
    } else {
      setIsAudioMuted(true);
      isAudioMutedRef.current = true;
      stopAllAudio();
    }
  };

  // Seek bar
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseInt(e.target.value, 10);
    setCurrentTime(newTime);
    const targetChapter = CHAPTERS.find(
      ch => newTime >= ch.timeStart && newTime < ch.timeEnd
    ) || CHAPTERS[CHAPTERS.length - 1];

    if (isPlaying) {
      activeChapterIdRef.current = targetChapter.id;
      startChapterAudio(targetChapter);
    }
  };

  // Chapter Jump
  const jumpToChapter = (startSec: number) => {
    setHasInteracted(true);
    setCurrentTime(startSec);
    setIsPlaying(true);
    if (isAudioMuted) setIsAudioMuted(false);
    const targetChapter = CHAPTERS.find(
      ch => startSec >= ch.timeStart && startSec < ch.timeEnd
    ) || CHAPTERS[0];
    activeChapterIdRef.current = targetChapter.id;
    playZenChime(528);
    startChapterAudio(targetChapter);
  };

  return (
    <div className="bg-[#18313a] text-white rounded-3xl overflow-hidden shadow-2xl border border-[#3e685f]/40 flex flex-col">
      
      {/* Hidden audio element for HD Gemini TTS */}
      <audio 
        ref={audioPlayerRef} 
        onEnded={() => setIsSpeaking(false)}
        className="hidden" 
      />

      {/* BARRA SUPERIOR DE ENCABEZADO */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-[#12242b] via-[#18313a] to-[#26444e] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-md">
            <Sparkles size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                Clase de Autocuidado · 10 Minutos
              </span>
              <span className="text-gray-400 text-xs hidden sm:inline">|</span>
              <span className="text-gray-300 text-xs hidden sm:inline font-light">
                Lic. Elizabeth Gamiño (Céd. 15289838)
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold font-serif text-white leading-tight">
              Desbalance de los 5 Elementos, Estrés Moderno &amp; Tapping
            </h3>
          </div>
        </div>

        {/* Pestañas de navegación */}
        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-full border border-white/10 text-xs">
          <button
            onClick={() => setActiveTab("video")}
            className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "video" 
                ? "bg-emerald-500 text-white font-bold shadow" 
                : "text-gray-300 hover:text-white"
            }`}
          >
            <Play size={12} className={activeTab === "video" ? "fill-white" : ""} />
            <span>Videoclase</span>
          </button>

          <button
            onClick={() => setActiveTab("tapping")}
            className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "tapping" 
                ? "bg-amber-500 text-[#18313a] font-bold shadow" 
                : "text-gray-300 hover:text-white"
            }`}
          >
            <Activity size={12} />
            <span>Guía Tapping</span>
          </button>

          <button
            onClick={() => setActiveTab("guion")}
            className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "guion" 
                ? "bg-white text-[#18313a] font-bold shadow" 
                : "text-gray-300 hover:text-white"
            }`}
          >
            <BookOpen size={12} />
            <span>Guion Completo</span>
          </button>

          {onClose && (
            <button
              onClick={() => {
                stopAllAudio();
                onClose();
              }}
              className="ml-2 text-gray-400 hover:text-white text-xs bg-white/10 hover:bg-white/20 w-7 h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              title="Cerrar reproductor"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* CUERPO PRINCIPAL SEGÚN PESTAÑA */}
      <div className="p-4 sm:p-6 space-y-6">

        {/* ========================================================================= */}
        {/* PESTAÑA 1: REPRODUCTOR DE VIDEO CON AUDIO INTEGRADO */}
        {/* ========================================================================= */}
        {activeTab === "video" && (
          <div className="space-y-4">
            
            {/* Pantalla de Cine / Presentación Clínica */}
            <div className="relative aspect-[16/9] w-full bg-gradient-to-b from-black via-[#0d171b] to-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-between p-4 sm:p-7">
              
              {/* Imagen de fondo suave con overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <Image
                  src="/images/holistic_therapy_elements_1790409106771.jpg"
                  alt="Armonía 5 Elementos"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Header superpuesto en pantalla */}
              <div className="relative z-10 flex items-center justify-between flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 bg-black/70 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs text-emerald-300">
                  <span className={`w-2.5 h-2.5 rounded-full ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-gray-400"}`} />
                  <span className="font-semibold">
                    {isPlaying ? "Reproduciendo" : "Pausado"} · Cap. {currentChapter.id}/5
                  </span>
                </div>

                {/* Badge de Audio Activo con Ondas Sonoras */}
                <div className="flex items-center gap-2">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs backdrop-blur-md transition-all ${
                    !isAudioMuted && isPlaying
                      ? "bg-emerald-950/80 border-emerald-400 text-emerald-300 shadow-md ring-1 ring-emerald-400/40"
                      : "bg-black/60 border-white/20 text-gray-300"
                  }`}>
                    <Volume2 size={13} className={isPlaying && !isAudioMuted ? "text-emerald-400 animate-bounce" : "text-gray-400"} />
                    <span className="font-semibold text-[11px]">
                      {isAudioMuted ? "Audio Silenciado" : "Audio con Voz Narrada"}
                    </span>
                    {isPlaying && !isAudioMuted && (
                      <span className="flex gap-0.5 items-end h-3 ml-1">
                        <span className="w-0.5 h-2 bg-emerald-400 animate-pulse" />
                        <span className="w-0.5 h-3 bg-emerald-400 animate-ping" />
                        <span className="w-0.5 h-1.5 bg-emerald-400 animate-pulse" />
                      </span>
                    )}
                  </div>

                  <span className="bg-black/60 backdrop-blur-md border border-white/20 text-gray-300 text-xs px-2.5 py-1 rounded-full font-mono">
                    {formatTime(currentTime)} / {formatTime(totalDuration)}
                  </span>
                </div>
              </div>

              {/* Contenido Central: Diapositiva Clínica Dinámica */}
              <div className="relative z-10 max-w-2xl mx-auto text-center space-y-3.5 my-auto py-3">
                
                {/* Element Badge Icon */}
                <div className="inline-flex items-center justify-center">
                  {currentChapter.element === "madera" && (
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center shadow-lg">
                      <Leaf size={28} />
                    </div>
                  )}
                  {currentChapter.element === "fuego" && (
                    <div className="w-14 h-14 rounded-2xl bg-rose-500/20 border border-rose-400/40 text-rose-400 flex items-center justify-center shadow-lg">
                      <Flame size={28} />
                    </div>
                  )}
                  {currentChapter.element === "tierra" && (
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center shadow-lg">
                      <Layers size={28} />
                    </div>
                  )}
                  {currentChapter.element === "metal" && (
                    <div className="w-14 h-14 rounded-2xl bg-slate-300/20 border border-slate-300/40 text-slate-200 flex items-center justify-center shadow-lg">
                      <Wind size={28} />
                    </div>
                  )}
                  {currentChapter.element === "agua" && (
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-400/40 text-blue-400 flex items-center justify-center shadow-lg">
                      <Droplets size={28} />
                    </div>
                  )}
                  {currentChapter.element === "tapping" && (
                    <div className={`w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center shadow-lg transition-transform duration-300 ${tappingBeat ? "scale-110 ring-4 ring-emerald-500/40" : "scale-100"}`}>
                      <Fingerprint size={30} />
                    </div>
                  )}
                  {currentChapter.element === "general" && (
                    <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-400/40 text-teal-400 flex items-center justify-center shadow-lg">
                      <Sparkles size={28} />
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest block">
                    {currentChapter.subtitle}
                  </span>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-white tracking-tight leading-snug">
                    {currentChapter.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xl mx-auto leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {currentChapter.summary}
                  </p>
                </div>

                {/* Si estamos en el capítulo de Tapping (Min 07:00 a 09:10), mostrar metrónomo rítmico sonoro */}
                {currentChapter.element === "tapping" && (
                  <div className="bg-emerald-950/80 border border-emerald-500/50 p-3 sm:p-4 rounded-xl max-w-lg mx-auto flex items-center justify-center gap-4 text-xs shadow-lg">
                    <div className={`w-4 h-4 rounded-full ${tappingBeat ? "bg-emerald-400 scale-125 ring-4 ring-emerald-400/40" : "bg-emerald-800"} transition-all duration-300`} />
                    <div className="text-left">
                      <div className="font-bold text-emerald-300 flex items-center gap-1.5">
                        <span>Ritmo de Tapping Activo · 2 golpes/segundo</span>
                        <Volume2 size={12} className="text-emerald-400 animate-pulse" />
                      </div>
                      <div className="text-[11px] text-gray-300 font-light">
                        Percute al compás del pulso acústico · Inhala 4s · Retén 2s · Exhala 6s
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Botón flotante central de Play si está en pausa */}
              {!isPlaying && (
                <div 
                  onClick={handleTogglePlay}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 cursor-pointer group z-20 transition-all hover:bg-black/40"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all">
                    <Play size={32} className="ml-1 fill-white" />
                  </div>
                  <div className="mt-4 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-white flex items-center gap-2 shadow-lg">
                    <Headphones size={13} className="text-emerald-400" />
                    <span>Reproducir Clase con Audio Guiado</span>
                  </div>
                </div>
              )}

              {/* Rótulo / Lower-third de televisión: Texto en pantalla */}
              <div className="relative z-10 flex items-center justify-between pointer-events-none pb-1">
                <div className="inline-flex items-center gap-2 bg-black/75 backdrop-blur-md border border-white/20 border-l-4 border-l-emerald-400 pl-3 pr-4 py-1.5 rounded-r-xl text-[11px] sm:text-xs text-white shadow-lg">
                  <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                  <span className="font-semibold font-serif tracking-wide">
                    Clase de Autocuidado · Lic. Elizabeth Gamiño (Céd. 15289838)
                  </span>
                </div>
              </div>

              {/* Barra inferior de controles dentro del canvas */}
              <div className="relative z-10 space-y-2 pt-2">
                
                {/* Timeline scrubber interactivo */}
                <div className="relative group">
                  <input
                    type="range"
                    min={0}
                    max={totalDuration}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-400 hover:h-2 transition-all"
                  />
                  {/* Marcas de capítulos */}
                  <div className="absolute top-0 left-0 right-0 flex justify-between pointer-events-none px-0.5">
                    {CHAPTERS.map(ch => (
                      <div 
                        key={ch.id} 
                        style={{ left: `${(ch.timeStart / totalDuration) * 100}%` }}
                        className="absolute w-1 h-2 bg-white/40 -top-0.5 rounded"
                        title={ch.title}
                      />
                    ))}
                  </div>
                </div>

                {/* Botones de acción y volumen */}
                <div className="flex items-center justify-between text-xs text-gray-300 pt-1 flex-wrap gap-2">
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleTogglePlay}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 sm:p-2.5 rounded-full transition-transform active:scale-95 cursor-pointer shadow-md flex items-center justify-center"
                      title={isPlaying ? "Pausar" : "Reproducir con Audio"}
                    >
                      {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5 fill-white" />}
                    </button>

                    <button
                      onClick={() => {
                        setCurrentTime(0);
                        if (isPlaying) {
                          playZenChime(528);
                          startChapterAudio(CHAPTERS[0]);
                        }
                      }}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      title="Reiniciar desde el inicio"
                    >
                      <RotateCcw size={15} />
                    </button>

                    {/* Botón y Control de Volumen / Mute */}
                    <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
                      <button
                        onClick={handleToggleMute}
                        className="text-emerald-400 hover:text-white cursor-pointer transition-colors"
                        title={isAudioMuted ? "Activar Audio" : "Silenciar Audio"}
                      >
                        {isAudioMuted ? <VolumeX size={15} className="text-rose-400" /> : <Volume2 size={15} />}
                      </button>
                      
                      <input 
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={isAudioMuted ? 0 : volume}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value);
                          setVolume(val);
                          if (val > 0 && isAudioMuted) setIsAudioMuted(false);
                          if (val === 0) setIsAudioMuted(true);
                          if (audioPlayerRef.current) audioPlayerRef.current.volume = val;
                        }}
                        className="w-14 sm:w-18 h-1 bg-white/20 rounded accent-emerald-400 cursor-pointer"
                        title={`Volumen: ${Math.round(volume * 100)}%`}
                      />
                    </div>

                    <span className="font-mono text-xs text-gray-200">
                      {formatTime(currentTime)} / {formatTime(totalDuration)}
                    </span>
                  </div>

                  {/* Selector de velocidad */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-gray-400 hidden sm:inline">Velocidad:</span>
                    {[1, 1.25, 1.5].map(rate => (
                      <button
                        key={rate}
                        onClick={() => {
                          setPlaybackRate(rate);
                          if (audioPlayerRef.current) audioPlayerRef.current.playbackRate = rate;
                          if (isPlaying) startChapterAudio(currentChapter);
                        }}
                        className={`text-[10px] px-2 py-0.5 rounded font-mono transition-colors cursor-pointer ${
                          playbackRate === rate 
                            ? "bg-emerald-500 text-white font-bold" 
                            : "text-gray-400 hover:text-white bg-white/5"
                        }`}
                      >
                        {rate}x
                      </button>
                    ))}
                  </div>

                  {/* Botón de Ajustes de Voz & Sonido */}
                  <button
                    onClick={() => setIsVoiceModalOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 hover:text-white transition-all cursor-pointer text-xs shrink-0"
                    title="Configurar modo de sonido (Zen, Voz Guiada o Grabación real)"
                  >
                    <Sliders size={13} className="text-emerald-400" />
                    <span className="text-[11px] font-semibold hidden sm:inline">
                      {voiceSettings.mode === "zen" ? "🍃 Modo Zen (Sin voz)" : voiceSettings.mode === "voice" ? "🎙️ Voz Guiada" : "🎤 Mi Voz Real"}
                    </span>
                    <span className="text-[11px] font-semibold sm:hidden">Voz/Sonido</span>
                  </button>

                </div>

              </div>

            </div>

            {/* Banner de Estado del Sonido con botón directo para cambiar modo */}
            <div className="bg-[#12242b]/90 border border-[#3e685f]/50 p-3 sm:p-3.5 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">
                  {voiceSettings.mode === "zen" ? "🍃" : voiceSettings.mode === "voice" ? "🎙️" : "🎤"}
                </span>
                <div>
                  <div className="font-bold text-white flex items-center gap-2 flex-wrap">
                    <span>
                      {voiceSettings.mode === "zen" 
                        ? "Modo Zen 432Hz Activo (Sin voz robótica)" 
                        : voiceSettings.mode === "voice" 
                        ? "Voz Guiada Activa" 
                        : "Voz Real de la Lic. Elizabeth"}
                    </span>
                    <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono">
                      {audioSourceStatus}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-300 font-light mt-0.5">
                    {voiceSettings.mode === "zen" 
                      ? "Armónico relajante de spa, campana tibetana y subtítulos en pantalla (100% natural, sin voces sintéticas)."
                      : voiceSettings.mode === "voice"
                      ? "Puedes cambiar de voz en español, modular el tono o cambiar a Modo Zen si prefieres solo música."
                      : "Reproduciendo las grabaciones de voz auténticas de la Lic. Elizabeth."}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsVoiceModalOpen(true)}
                className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl text-xs font-bold shadow transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
              >
                <Sliders size={13} />
                <span>Personalizar Sonido / Voz</span>
              </button>
            </div>

            {/* Aviso interactivo si el usuario tiene el sonido silenciado */}
            {isAudioMuted && (
              <div 
                onClick={handleToggleMute}
                className="bg-amber-950/60 border border-amber-500/40 p-3 rounded-2xl flex items-center justify-between gap-3 text-xs text-amber-200 cursor-pointer hover:bg-amber-950/80 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <VolumeX size={16} className="text-amber-400 shrink-0" />
                  <span>El audio está silenciado. Haz clic aquí para activar el sonido de la clase.</span>
                </div>
                <button className="bg-amber-500 text-[#18313a] font-bold px-3 py-1 rounded-full text-[11px] shrink-0">
                  Activar Sonido
                </button>
              </div>
            )}

            {/* Selector de Capítulos / Marcadores de Tiempo con salto de audio */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                Navegador de Capítulos con Audio (10 Minutos)
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                {CHAPTERS.map(ch => {
                  const isActive = currentChapter.id === ch.id;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => jumpToChapter(ch.timeStart)}
                      className={`text-left p-3 rounded-2xl border transition-all cursor-pointer ${
                        isActive
                          ? "bg-emerald-950/60 border-emerald-400 shadow-md ring-1 ring-emerald-400"
                          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <span className={`font-mono font-bold ${isActive ? "text-emerald-400" : "text-gray-400"}`}>
                          {formatTime(ch.timeStart)}
                        </span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        )}
                      </div>
                      <div className="text-xs font-bold text-white line-clamp-1">
                        {ch.title}
                      </div>
                      <div className="text-[10px] text-gray-300 line-clamp-1 font-light">
                        {ch.subtitle}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Transcripción en vivo del capítulo actual */}
            <div className="bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Volume2 size={16} className="text-emerald-400" />
                  <h5 className="text-sm font-bold font-serif text-white">
                    Narración en Vivo del Capítulo Actual:
                  </h5>
                </div>
                <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  {audioSourceStatus}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed italic border-l-2 border-emerald-400 pl-3 py-1">
                «{currentChapter.scriptParagraph}»
              </p>
            </div>

            {/* Puntos Clave del Capítulo Actual */}
            <div className="bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-2">
                <BookOpen size={16} className="text-emerald-400" />
                <h5 className="text-sm font-bold font-serif text-white">
                  Conceptos Clínicos de este Segmento:
                </h5>
              </div>
              <ul className="space-y-1.5 text-xs text-gray-200 font-light">
                {currentChapter.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* PESTAÑA 2: GUÍA DE TAPPING & PERCUSIÓN BIOENERGÉTICA */}
        {/* ========================================================================= */}
        {activeTab === "tapping" && (
          <div className="space-y-6">
            
            <div className="bg-gradient-to-r from-amber-950/40 via-[#18313a] to-emerald-950/40 border border-amber-500/30 rounded-2xl p-5 sm:p-6 space-y-2">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase">
                <Activity size={14} />
                <span>Protocolo Clínico de Tapping (EFT &amp; Digitopuntura MTC)</span>
              </div>
              <h4 className="text-xl font-bold font-serif text-white">
                Cómo Realizar el Ejercicio de Percusión para Calmar el Estrés Moderno
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                Utiliza las yemas de tus dedos índice y medio. Percute de 5 a 7 veces en cada resonador mientras inhalas en 4 tiempos y exhalas en 6 tiempos, pronunciando mentalmente o en voz alta la frase de reprogramación emocional.
              </p>
            </div>

            {/* Grid de Puntos de Tapping */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {TAPPING_POINTS.map((pt, index) => (
                <div 
                  key={index}
                  className="bg-white/5 border border-white/10 hover:border-emerald-400/50 p-5 rounded-2xl space-y-3 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      Paso 0{index + 1}
                    </span>
                    <span className="text-[11px] text-gray-400">
                      2 golpes/seg
                    </span>
                  </div>

                  <h5 className="text-base font-bold text-white font-serif">
                    {pt.name}
                  </h5>

                  <div className="space-y-1.5 text-xs text-gray-300">
                    <p>
                      <strong className="text-gray-100">Ubicación:</strong> {pt.location}
                    </p>
                    <p>
                      <strong className="text-gray-100">Acción:</strong> {pt.action}
                    </p>
                    <p>
                      <strong className="text-gray-100">Impacto Emocional:</strong> {pt.focus}
                    </p>
                  </div>

                  <div className="bg-black/30 border border-white/10 p-3 rounded-xl text-xs italic text-amber-200">
                    {pt.phrase}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#12242b] p-5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-sm font-bold text-white">
                  ¿Quieres saltar directo a la práctica en la videoclase?
                </div>
                <div className="text-xs text-gray-400 font-light">
                  Haz clic para que el reproductor inicie en el Minuto 07:00 con el compás sonoro y la narración guiada.
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveTab("video");
                  jumpToChapter(420);
                }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-full text-xs transition-transform active:scale-95 flex items-center gap-2 cursor-pointer shrink-0 shadow-md"
              >
                <Play size={14} className="fill-white" />
                <span>Iniciar Ejercicio en Video con Audio (07:00)</span>
              </button>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* PESTAÑA 3: GUION COMPLETO (10 MIN) */}
        {/* ========================================================================= */}
        {activeTab === "guion" && (
          <div className="space-y-6">
            
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Transcripción y Guion Técnico de Producción
                </span>
                <button
                  onClick={() => {
                    if (typeof window !== "undefined") window.print();
                  }}
                  className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download size={13} />
                  <span>Imprimir / Guardar Guion</span>
                </button>
              </div>
              <h4 className="text-lg font-bold font-serif text-white">
                Guion Oficial de la Clase de 10 Minutos para Grabación y Estudio
              </h4>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Este guion palabra por palabra ha sido redactado con la terminología de la Medicina Tradicional China, psicología somática y la cadencia de impartición de la Lic. Elizabeth Gamiño.
              </p>
            </div>

            <div className="space-y-6">
              {CHAPTERS.map(ch => (
                <div 
                  key={ch.id} 
                  className="bg-black/30 border border-white/10 rounded-2xl p-5 sm:p-6 space-y-3"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      [{formatTime(ch.timeStart)} - {formatTime(ch.timeEnd)}]
                    </span>
                    <button
                      onClick={() => {
                        setActiveTab("video");
                        jumpToChapter(ch.timeStart);
                      }}
                      className="text-xs text-gray-400 hover:text-emerald-300 underline flex items-center gap-1 cursor-pointer"
                    >
                      <Play size={11} />
                      <span>Saltar a este minuto en video con audio</span>
                    </button>
                  </div>

                  <h5 className="text-base font-bold font-serif text-white">
                    {ch.title}
                  </h5>

                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light whitespace-pre-line">
                    {ch.scriptParagraph}
                  </p>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>

      {/* FOOTER DEL REPRODUCTOR CON LLAMADO A CONSULTA O TALLER */}
      <div className="p-4 sm:p-5 bg-[#12242b] border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-300">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
          <span>
            Material avalado por la <strong>Lic. Elizabeth Gamiño</strong> (Acupuntura Humana · UNEVE).
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/test-5-elementos#resultado-prescripcion-box"
            className="text-emerald-400 hover:text-emerald-300 underline font-semibold"
          >
            Ver Prescripción de Puntos
          </Link>
          <span className="text-gray-500">·</span>
          <Link
            href="/taller-digitopuntura"
            className="bg-amber-500 hover:bg-amber-600 text-[#18313a] font-bold px-4 py-1.5 rounded-full transition-colors"
          >
            Taller en Vivo ($780 MXN)
          </Link>
        </div>
      </div>

      {/* Modal de Ajustes de Sonido, Voz y Grabación */}
      <AudioVoiceSettingsModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
        currentChapterId={currentChapter.id}
      />

    </div>
  );
};
