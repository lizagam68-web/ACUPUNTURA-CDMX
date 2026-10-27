"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Volume2, 
  Sparkles, 
  Mic, 
  Sliders, 
  Check, 
  Play, 
  Square, 
  RotateCcw, 
  Upload, 
  Music, 
  Headphones,
  Info,
  CheckCircle2,
  Trash2,
  AlertCircle
} from "lucide-react";
import { 
  VoiceSettings, 
  VoiceOption, 
  AudioNarrationMode, 
  getSpanishVoices, 
  saveVoiceSettings, 
  loadVoiceSettings,
  DEFAULT_SETTINGS,
  getCustomChapterAudio,
  saveCustomChapterAudio,
  removeCustomChapterAudio,
  prepareScriptForSpeech
} from "@/lib/voiceEngine";
import { zenAudio } from "@/lib/zenAudioEngine";

interface AudioVoiceSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentChapterId?: number;
}

export const AudioVoiceSettingsModal: React.FC<AudioVoiceSettingsModalProps> = ({
  isOpen,
  onClose,
  currentChapterId = 1
}) => {
  const [settings, setSettings] = useState<VoiceSettings>(DEFAULT_SETTINGS);
  const [availableVoices, setAvailableVoices] = useState<VoiceOption[]>([]);
  const [isPlayingTest, setIsPlayingTest] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingSeconds, setRecordingSeconds] = useState<number>(0);
  const [customAudioUrl, setCustomAudioUrl] = useState<string | null>(null);
  const [saveSuccessNotice, setSaveSuccessNotice] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setSettings(loadVoiceSettings());
    }
  }, [isOpen]);

  useEffect(() => {
    getSpanishVoices((voices) => {
      setAvailableVoices(voices);
      // Auto pick highest ranked voice if none selected
      if (!settings.voiceURI && voices.length > 0) {
        setSettings(prev => ({ ...prev, voiceURI: voices[0].voice.voiceURI }));
      }
    });
  }, [settings.voiceURI]);

  useEffect(() => {
    // Check if current chapter has custom recorded audio
    const custom = getCustomChapterAudio(currentChapterId);
    setCustomAudioUrl(custom);
  }, [currentChapterId, isOpen]);

  if (!isOpen) return null;

  const handleModeChange = (mode: AudioNarrationMode) => {
    const updated = { ...settings, mode };
    setSettings(updated);
    saveVoiceSettings(updated);
    showNotice(`Modo configurado: ${mode === "zen" ? "Música Zen & Cuencos" : mode === "voice" ? "Voz Guiada" : "Mi Voz Real"}`);
  };

  const handleVoiceSelect = (voiceURI: string) => {
    const updated = { ...settings, voiceURI };
    setSettings(updated);
    saveVoiceSettings(updated);
  };

  const handlePitchChange = (pitch: number) => {
    const updated = { ...settings, pitch };
    setSettings(updated);
    saveVoiceSettings(updated);
  };

  const handleRateChange = (rate: number) => {
    const updated = { ...settings, rate };
    setSettings(updated);
    saveVoiceSettings(updated);
  };

  const handleAmbientToggle = () => {
    const updated = { ...settings, ambientMusic: !settings.ambientMusic };
    setSettings(updated);
    saveVoiceSettings(updated);
    if (!updated.ambientMusic && zenAudio) {
      zenAudio.stopAmbientDrone();
    }
  };

  const handleAmbientVolume = (vol: number) => {
    const updated = { ...settings, ambientVolume: vol };
    setSettings(updated);
    saveVoiceSettings(updated);
    zenAudio?.setAmbientVolume(vol);
  };

  const showNotice = (msg: string) => {
    setSaveSuccessNotice(msg);
    setTimeout(() => setSaveSuccessNotice(null), 3000);
  };

  // Test current speech voice
  const handleTestVoice = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();
    if (isPlayingTest) {
      setIsPlayingTest(false);
      return;
    }

    const testPhrase = prepareScriptForSpeech(
      "Hola, soy la Licenciada Elizabeth Gamiño. Bienvenida a tu clase de autocuidado y equilibrio de los cinco elementos."
    );

    const utterance = new SpeechSynthesisUtterance(testPhrase);
    utterance.lang = "es-MX";
    utterance.rate = settings.rate;
    utterance.pitch = settings.pitch;

    if (settings.voiceURI) {
      const selectedVoice = availableVoices.find(v => v.voice.voiceURI === settings.voiceURI);
      if (selectedVoice) {
        utterance.voice = selectedVoice.voice;
      }
    }

    utterance.onstart = () => setIsPlayingTest(true);
    utterance.onend = () => setIsPlayingTest(false);
    utterance.onerror = () => setIsPlayingTest(false);

    window.speechSynthesis.speak(utterance);
  };

  // Start recording real voice from microphone
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Data = reader.result as string;
          saveCustomChapterAudio(currentChapterId, base64Data);
          setCustomAudioUrl(base64Data);
          handleModeChange("custom");
          showNotice(`¡Audio real guardado para el Capítulo ${currentChapterId}!`);
        };
        reader.readAsDataURL(audioBlob);

        // Stop media tracks
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start(200);
      setIsRecording(true);
      setRecordingSeconds(0);
      timerIntervalRef.current = setInterval(() => {
        setRecordingSeconds(prev => prev + 1);
      }, 1000);
    } catch {
      alert("No se pudo acceder al micrófono. Por favor permite el acceso al micrófono en tu navegador o sube un archivo de audio.");
    }
  };

  // Stop recording
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    }
  };

  // Handle file upload of voice note (WhatsApp, MP3, etc.)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("audio/") && !file.name.endsWith(".m4a") && !file.name.endsWith(".mp3") && !file.name.endsWith(".wav")) {
      alert("Por favor selecciona un archivo de audio válido (MP3, M4A, WAV, OGG).");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      saveCustomChapterAudio(currentChapterId, base64);
      setCustomAudioUrl(base64);
      handleModeChange("custom");
      showNotice(`¡Archivo de audio cargado para el Capítulo ${currentChapterId}!`);
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteCustomAudio = () => {
    removeCustomChapterAudio(currentChapterId);
    setCustomAudioUrl(null);
    showNotice(`Audio eliminado. Se restableció el modo por defecto.`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-[#18313a] border border-[#3e685f]/60 rounded-3xl w-full max-w-2xl text-white shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-[#12242b] via-[#18313a] to-[#26444e] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
              <Sliders size={20} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white leading-tight">
                Ajustes de Sonido, Voz &amp; Ambiente
              </h3>
              <p className="text-xs text-gray-300">
                Personaliza la experiencia sonora de tu videoclase de 5 Elementos
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              window.speechSynthesis?.cancel();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Success toast inside modal */}
        {saveSuccessNotice && (
          <div className="bg-emerald-950/80 border-b border-emerald-500/50 px-4 py-2 text-xs text-emerald-300 flex items-center gap-2">
            <CheckCircle2 size={14} className="shrink-0" />
            <span>{saveSuccessNotice}</span>
          </div>
        )}

        <div className="p-4 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">

          {/* SELECTOR DE 3 MODOS PRINCIPALES */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2.5">
              1. Selecciona cómo deseas escuchar la clase:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              {/* Opción 1: Modo Zen (Recomendado) */}
              <button
                type="button"
                onClick={() => handleModeChange("zen")}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  settings.mode === "zen"
                    ? "bg-emerald-950/70 border-emerald-400 shadow-md ring-2 ring-emerald-400/50"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">🍃</span>
                    {settings.mode === "zen" && (
                      <span className="text-[10px] bg-emerald-500 text-white font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Check size={10} /> Activo
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1">
                    Modo Zen 432Hz
                  </h4>
                  <p className="text-[11px] text-gray-300 leading-snug">
                    <strong className="text-emerald-300 font-medium">100% Sin voz artificial.</strong> Cuenco tibetano 528Hz, música de relajación y subtítulos dinámicos.
                  </p>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold mt-3">
                  Recomendado para calma
                </span>
              </button>

              {/* Opción 2: Voz Guiada Natural */}
              <button
                type="button"
                onClick={() => handleModeChange("voice")}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  settings.mode === "voice"
                    ? "bg-emerald-950/70 border-emerald-400 shadow-md ring-2 ring-emerald-400/50"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">🎙️</span>
                    {settings.mode === "voice" && (
                      <span className="text-[10px] bg-emerald-500 text-white font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Check size={10} /> Activo
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1">
                    Voz Narrada
                  </h4>
                  <p className="text-[11px] text-gray-300 leading-snug">
                    Lectura terapéutica pausada. Puedes elegir la voz de tu dispositivo y cambiar tono o velocidad.
                  </p>
                </div>
                <span className="text-[10px] text-gray-400 mt-3">
                  Configurable abajo
                </span>
              </button>

              {/* Opción 3: Voz Real de la Lic. Elizabeth */}
              <button
                type="button"
                onClick={() => handleModeChange("custom")}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  settings.mode === "custom"
                    ? "bg-amber-950/70 border-amber-400 shadow-md ring-2 ring-amber-400/50"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">🎤</span>
                    {settings.mode === "custom" && (
                      <span className="text-[10px] bg-amber-500 text-[#18313a] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Check size={10} /> Activo
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1">
                    Voz Real Humana
                  </h4>
                  <p className="text-[11px] text-gray-300 leading-snug">
                    Graba tu propia voz con el micrófono o sube audios de WhatsApp para cada capítulo.
                  </p>
                </div>
                <span className="text-[10px] text-amber-400 mt-3 font-medium">
                  {customAudioUrl ? "Audio cargado" : "Pendiente de grabar"}
                </span>
              </button>

            </div>
          </div>

          {/* PANEL ESPECÍFICO SEGÚN MODO SELECCIONADO */}

          {/* PANEL 1: MODO ZEN */}
          {settings.mode === "zen" && (
            <div className="bg-emerald-950/40 border border-emerald-500/30 p-4 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                <Music size={16} />
                <span>Experiencia Sonora de Meditación y Sanación</span>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed font-light">
                En este modo <strong className="text-emerald-300 font-medium">no se reproducirá ninguna voz sintética ni robótica</strong>. La clase avanza fluidamente con:
              </p>
              <ul className="text-xs text-gray-300 space-y-1.5 pl-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Frecuencia base en 432 Hz y 528 Hz para inducir relajación del sistema nervioso.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Campana y cuenco tibetano en cada cambio de capítulo.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Percusión rítmica de bambú en el ejercicio de tapping.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Subtítulos visuales y transcripción completa en pantalla.</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    zenAudio?.playTibetanBowl(528);
                  }}
                  className="px-3 py-1.5 bg-emerald-600/80 hover:bg-emerald-600 text-white rounded-xl text-xs font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Sparkles size={14} />
                  <span>Probar sonido del Cuenco Tibetano (528 Hz)</span>
                </button>
              </div>
            </div>
          )}

          {/* PANEL 2: VOZ NARRADA (AJUSTES DETALLADOS) */}
          {settings.mode === "voice" && (
            <div className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Volume2 size={16} className="text-emerald-400" />
                  <span>Configuración de la Voz Guiada</span>
                </h4>
                <button
                  type="button"
                  onClick={handleTestVoice}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all ${
                    isPlayingTest
                      ? "bg-rose-500 text-white shadow animate-pulse"
                      : "bg-emerald-500 hover:bg-emerald-400 text-white shadow-md"
                  }`}
                >
                  {isPlayingTest ? (
                    <>
                      <Square size={12} className="fill-white" />
                      <span>Detener Prueba</span>
                    </>
                  ) : (
                    <>
                      <Play size={12} className="fill-white" />
                      <span>Probar Voz Actual</span>
                    </>
                  )}
                </button>
              </div>

              {/* Selector de voz */}
              <div>
                <label className="text-xs text-gray-300 block mb-1.5">
                  Voz instalada en tu equipo (se recomiendan las voces marcadas con ⭐):
                </label>
                {availableVoices.length > 0 ? (
                  <select
                    value={settings.voiceURI}
                    onChange={(e) => handleVoiceSelect(e.target.value)}
                    className="w-full bg-[#12242b] border border-white/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400"
                  >
                    {availableVoices.map((v) => (
                      <option key={v.voice.voiceURI} value={v.voice.voiceURI}>
                        {v.displayName}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="text-xs text-amber-300 bg-amber-950/40 p-2.5 rounded-xl border border-amber-500/30 flex items-center gap-2">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>Tu dispositivo no tiene voces en español nativas. Te recomendamos usar el <strong>Modo Zen</strong> o <strong>Grabar tu propia voz</strong>.</span>
                  </div>
                )}
              </div>

              {/* Deslizadores de Calidez (Pitch) y Velocidad (Rate) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-300">Tono / Calidez:</span>
                    <span className="font-mono text-emerald-400 font-bold">
                      {settings.pitch < 1 ? "Cálido/Grave" : settings.pitch === 1 ? "Natural" : "Agudo"} ({settings.pitch.toFixed(2)})
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.8"
                    max="1.2"
                    step="0.02"
                    value={settings.pitch}
                    onChange={(e) => handlePitchChange(parseFloat(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 mt-0.5">
                    <span>Más profundo</span>
                    <span>Más agudo</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-300">Ritmo / Pausa:</span>
                    <span className="font-mono text-emerald-400 font-bold">
                      {settings.rate < 0.9 ? "Meditativo" : settings.rate <= 1 ? "Normal" : "Rápido"} ({settings.rate.toFixed(2)}x)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.75"
                    max="1.15"
                    step="0.02"
                    value={settings.rate}
                    onChange={(e) => handleRateChange(parseFloat(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 mt-0.5">
                    <span>Pausado (Calma)</span>
                    <span>Dinámico</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-gray-400 bg-white/5 p-2.5 rounded-xl flex items-start gap-2 border border-white/5">
                <Info size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  El texto se ha adaptado fonéticamente para pronunciar términos tradicionales como <em>«Baihui»</em>, <em>«Qi»</em> y <em>«Neiguan»</em> con naturalidad y pausas de respiración consciente.
                </span>
              </div>
            </div>
          )}

          {/* PANEL 3: GRABAR O SUBIR VOZ REAL */}
          {settings.mode === "custom" && (
            <div className="bg-amber-950/30 border border-amber-500/40 p-4 sm:p-5 rounded-2xl space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Mic size={16} className="text-amber-400" />
                    <span>Grabar o Subir Audio para el Capítulo {currentChapterId}</span>
                  </h4>
                  <p className="text-xs text-gray-300">
                    Tu propia voz humana aportará la máxima cercanía, calidez y profesionalismo.
                  </p>
                </div>
                {customAudioUrl && (
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full font-medium">
                    Audio guardado
                  </span>
                )}
              </div>

              {/* Botón de Grabación con Micrófono */}
              <div className="p-3 bg-black/40 rounded-xl border border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
                      isRecording
                        ? "bg-rose-600 text-white animate-pulse"
                        : "bg-amber-500 hover:bg-amber-400 text-[#18313a] shadow"
                    }`}
                  >
                    {isRecording ? (
                      <>
                        <Square size={14} className="fill-white" />
                        <span>Detener Grabación ({recordingSeconds}s)</span>
                      </>
                    ) : (
                      <>
                        <Mic size={14} />
                        <span>Grabar con Micrófono</span>
                      </>
                    )}
                  </button>
                  {isRecording && (
                    <span className="text-xs text-rose-300 flex items-center gap-1.5 animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                      Grabando tu voz en vivo...
                    </span>
                  )}
                </div>

                {/* Subir archivo de audio (WhatsApp / Nota de voz) */}
                <div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="audio/*,.mp3,.m4a,.wav,.ogg"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <Upload size={14} />
                    <span>Subir archivo o nota de WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Si ya hay un audio grabado para este capítulo */}
              {customAudioUrl && (
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-3">
                    <audio src={customAudioUrl} controls className="h-8 max-w-[240px]" />
                    <span className="text-xs text-emerald-300 font-medium">Audio listo para reproducir</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleDeleteCustomAudio}
                    className="text-xs text-rose-300 hover:text-rose-100 flex items-center gap-1 cursor-pointer transition-colors p-1"
                  >
                    <Trash2 size={13} />
                    <span>Eliminar este audio</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* SECCIÓN DE MÚSICA AMBIENTAL 432Hz */}
          <div className="border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleAmbientToggle}
                className={`w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer transition-all ${
                  settings.ambientMusic 
                    ? "bg-emerald-500 text-white shadow" 
                    : "bg-white/10 text-gray-400"
                }`}
              >
                <Music size={18} />
              </button>
              <div>
                <div className="text-xs font-bold text-white">
                  Música de Fondo Zen (432 Hz)
                </div>
                <div className="text-[11px] text-gray-300 font-light">
                  Sutil atmósfera armónica de spa y relajación clínica
                </div>
              </div>
            </div>

            {settings.ambientMusic && (
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-gray-400">Volumen:</span>
                <input
                  type="range"
                  min="0.05"
                  max="0.8"
                  step="0.05"
                  value={settings.ambientVolume}
                  onChange={(e) => handleAmbientVolume(parseFloat(e.target.value))}
                  className="w-24 accent-emerald-400 cursor-pointer"
                />
                <span className="text-[10px] font-mono text-gray-300">
                  {Math.round(settings.ambientVolume * 100)}%
                </span>
              </div>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-black/40 border-t border-white/10 flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              const def: VoiceSettings = {
                mode: "zen",
                voiceURI: "",
                pitch: 0.96,
                rate: 0.88,
                ambientMusic: true,
                ambientVolume: 0.35,
              };
              setSettings(def);
              saveVoiceSettings(def);
              showNotice("Ajustes restablecidos al Modo Zen por defecto");
            }}
            className="text-xs text-gray-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
          >
            <RotateCcw size={12} />
            <span>Restablecer todo a Modo Zen</span>
          </button>

          <button
            type="button"
            onClick={() => {
              window.speechSynthesis?.cancel();
              onClose();
            }}
            className="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl text-xs font-bold shadow-lg cursor-pointer transition-all"
          >
            Guardar &amp; Continuar Clase
          </button>
        </div>

      </div>
    </div>
  );
};
