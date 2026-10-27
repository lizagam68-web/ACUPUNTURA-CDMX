"use client";

// High-Fidelity Voice & Narration Engine for Lic. Elizabeth Gamiño Masterclass
// Handles natural voice discovery, phonetic therapeutic script optimization,
// and custom user voice recordings (real microphone / audio memo upload).

export interface VoiceOption {
  voice: SpeechSynthesisVoice;
  displayName: string;
  isMexican: boolean;
  isNatural: boolean;
  lang: string;
}

export type AudioNarrationMode = "zen" | "voice" | "custom";

export interface VoiceSettings {
  mode: AudioNarrationMode;
  voiceURI: string;
  pitch: number; // 0.8 to 1.2 (default 0.96 for warm therapeutic resonance)
  rate: number;  // 0.75 to 1.15 (default 0.88 for calm, conscious cadence)
  ambientMusic: boolean;
  ambientVolume: number;
}

export const DEFAULT_SETTINGS: VoiceSettings = {
  mode: "zen", // Default to Zen Mode (100% natural ambient meditation & singing bowl) so nobody hears a robotic voice unexpectedly!
  voiceURI: "",
  pitch: 0.96,
  rate: 0.88,
  ambientMusic: true,
  ambientVolume: 0.35,
};

const STORAGE_KEY = "acupuncture_voice_settings";
const CUSTOM_AUDIO_PREFIX = "custom_chapter_audio_";

export function loadVoiceSettings(): VoiceSettings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
    }
  } catch {
    // fallback
  }
  return DEFAULT_SETTINGS;
}

export function saveVoiceSettings(settings: VoiceSettings): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    window.dispatchEvent(new CustomEvent("voice_settings_changed", { detail: settings }));
  } catch {
    // quota exceeded or blocked
  }
}

// Custom Chapter Audio (Recorded by Lic. Elizabeth or uploaded from WhatsApp)
export function getCustomChapterAudio(chapterId: number): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(`${CUSTOM_AUDIO_PREFIX}${chapterId}`);
  } catch {
    return null;
  }
}

export function saveCustomChapterAudio(chapterId: number, dataUrl: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(`${CUSTOM_AUDIO_PREFIX}${chapterId}`, dataUrl);
    window.dispatchEvent(new CustomEvent("custom_audio_updated", { detail: { chapterId } }));
  } catch {
    // local storage full
  }
}

export function removeCustomChapterAudio(chapterId: number): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(`${CUSTOM_AUDIO_PREFIX}${chapterId}`);
    window.dispatchEvent(new CustomEvent("custom_audio_updated", { detail: { chapterId } }));
  } catch {
    // ignore
  }
}

// Convert dense clinical script into warm, natural, spoken Spanish for therapeutic audio
export function prepareScriptForSpeech(rawScript: string): string {
  if (!rawScript) return "";

  let text = rawScript;

  // Replace clinical and anatomical codes with natural spoken Spanish
  text = text.replace(/ID3\s*[-–—]\s*Houxi/gi, "punto Jou-jí");
  text = text.replace(/Baihui\s*[-–—]\s*Du\s*20/gi, "punto Baijui, en la coronilla");
  text = text.replace(/Chengqi\s*[-–—]\s*E1/gi, "punto Cheng-chí, bajo la cuenca ocular");
  text = text.replace(/Shufu\s*[-–—]\s*R27/gi, "punto Shu-fu, del meridiano de riñón");
  text = text.replace(/PC6/gi, "punto Neiguan");
  text = text.replace(/Du\s*20/gi, "punto Baijui");
  text = text.replace(/ID3/gi, "punto Jou-jí");
  text = text.replace(/E1/gi, "punto Cheng-chí");
  text = text.replace(/R27/gi, "punto Shu-fu");
  text = text.replace(/4-2-6/g, "cuatro, dos, seis");
  text = text.replace(/\bCun\b/gi, "tsoon");
  text = text.replace(/\bQi\b/g, "Chi");
  text = text.replace(/«|»|"|“|”/g, "");
  text = text.replace(/\(([^)]+)\)/g, ", $1, ");

  // Add conscious breathing pauses after punctuation
  text = text.replace(/\.\s+/g, "... ");
  text = text.replace(/;\s+/g, ", ");
  text = text.replace(/:\s+/g, "... ");

  return text.trim();
}

// Async Voice Discovery with Natural Spanish filtering & ranking
export function getSpanishVoices(callback: (voices: VoiceOption[]) => void): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    callback([]);
    return;
  }

  const resolve = () => {
    const all = window.speechSynthesis.getVoices();
    const spanish = all.filter(v => v.lang.toLowerCase().startsWith("es"));

    if (spanish.length === 0) {
      callback([]);
      return;
    }

    const options: VoiceOption[] = spanish.map(v => {
      const name = v.name;
      const isMexican = v.lang.toLowerCase().includes("mx") || name.toLowerCase().includes("mexic");
      const isNatural = name.toLowerCase().includes("natural") || 
                        name.toLowerCase().includes("online") || 
                        name.toLowerCase().includes("google") ||
                        name.toLowerCase().includes("paulina") ||
                        name.toLowerCase().includes("sabina") ||
                        name.toLowerCase().includes("mónica") ||
                        name.toLowerCase().includes("monica");

      // User friendly label
      let label = v.name;
      if (isMexican) label += " (México 🇲🇽)";
      else if (v.lang.toLowerCase().includes("es")) label += " (España 🇪🇸)";
      else if (v.lang.toLowerCase().includes("us")) label += " (Latinoamérica 🌎)";

      if (isNatural) label = "⭐ " + label;

      return {
        voice: v,
        displayName: label,
        isMexican,
        isNatural,
        lang: v.lang,
      };
    });

    // Rank: Mexican natural first, then natural spanish, then mexican, then others
    options.sort((a, b) => {
      if (a.isMexican && a.isNatural && !(b.isMexican && b.isNatural)) return -1;
      if (b.isMexican && b.isNatural && !(a.isMexican && a.isNatural)) return 1;
      if (a.isNatural && !b.isNatural) return -1;
      if (b.isNatural && !a.isNatural) return 1;
      if (a.isMexican && !b.isMexican) return -1;
      if (b.isMexican && !a.isMexican) return 1;
      return a.displayName.localeCompare(b.displayName);
    });

    callback(options);
  };

  const initial = window.speechSynthesis.getVoices();
  if (initial && initial.length > 0) {
    resolve();
  } else {
    window.speechSynthesis.onvoiceschanged = () => {
      resolve();
    };
    // fallback timeout in case onvoiceschanged does not fire
    setTimeout(resolve, 300);
  }
}
