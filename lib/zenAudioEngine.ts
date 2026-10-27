"use client";

// Zen Web Audio Synthesizer: Generates 432Hz therapeutic ambient meditation drones,
// Tibetan singing bowls (528Hz Solfeggio), and rhythmic bamboo tapping sounds.

class ZenAudioEngine {
  private ctx: AudioContext | null = null;
  private droneGain: GainNode | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;
  private lfo: OscillatorNode | null = null;
  private lfoGain: GainNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private isDroneActive: boolean = false;
  private masterVolume: number = 0.8;
  private ambientVolume: number = 0.25;

  private getContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public setMasterVolume(vol: number) {
    this.masterVolume = Math.max(0, Math.min(1, vol));
    if (this.droneGain && this.ctx) {
      const targetGain = this.isDroneActive ? this.ambientVolume * this.masterVolume : 0;
      this.droneGain.gain.setValueAtTime(this.droneGain.gain.value, this.ctx.currentTime);
      this.droneGain.gain.exponentialRampToValueAtTime(Math.max(0.0001, targetGain), this.ctx.currentTime + 0.1);
    }
  }

  public setAmbientVolume(vol: number) {
    this.ambientVolume = Math.max(0, Math.min(1, vol));
    if (this.droneGain && this.ctx && this.isDroneActive) {
      const targetGain = this.ambientVolume * this.masterVolume;
      this.droneGain.gain.setValueAtTime(this.droneGain.gain.value, this.ctx.currentTime);
      this.droneGain.gain.exponentialRampToValueAtTime(Math.max(0.0001, targetGain), this.ctx.currentTime + 0.2);
    }
  }

  // Start continuous soothing 432Hz ambient meditation soundscape
  public startAmbientDrone() {
    const ctx = this.getContext();
    if (!ctx) return;
    if (this.isDroneActive) return;

    try {
      this.isDroneActive = true;

      // Filter for warm, cozy analog feel
      this.filter = ctx.createBiquadFilter();
      this.filter.type = "lowpass";
      this.filter.frequency.setValueAtTime(380, ctx.currentTime);

      this.droneGain = ctx.createGain();
      const initialGain = 0.0001;
      const targetGain = this.ambientVolume * this.masterVolume;
      this.droneGain.gain.setValueAtTime(initialGain, ctx.currentTime);
      this.droneGain.gain.exponentialRampToValueAtTime(Math.max(0.001, targetGain), ctx.currentTime + 2.5);

      // Primary oscillator: 216Hz (sub-harmonic of 432Hz healing frequency)
      this.osc1 = ctx.createOscillator();
      this.osc1.type = "sine";
      this.osc1.frequency.setValueAtTime(216, ctx.currentTime);

      // Secondary oscillator: 432Hz with slight warm detune
      this.osc2 = ctx.createOscillator();
      this.osc2.type = "sine";
      this.osc2.frequency.setValueAtTime(432.5, ctx.currentTime);

      // LFO for gentle organic wave modulation (breathing cycle: 0.08 Hz = ~12s breath)
      this.lfo = ctx.createOscillator();
      this.lfo.frequency.setValueAtTime(0.08, ctx.currentTime);
      this.lfoGain = ctx.createGain();
      this.lfoGain.gain.setValueAtTime(0.04, ctx.currentTime);
      this.lfo.connect(this.lfoGain.gain);

      this.osc1.connect(this.filter);
      this.osc2.connect(this.filter);
      this.filter.connect(this.droneGain);
      this.droneGain.connect(ctx.destination);

      this.osc1.start();
      this.osc2.start();
      this.lfo.start();
    } catch (e) {
      console.warn("Ambient drone not available:", e);
      this.isDroneActive = false;
    }
  }

  // Stop ambient drone smoothly
  public stopAmbientDrone() {
    if (!this.isDroneActive || !this.ctx || !this.droneGain) {
      this.isDroneActive = false;
      return;
    }

    try {
      const now = this.ctx.currentTime;
      this.droneGain.gain.setValueAtTime(this.droneGain.gain.value, now);
      this.droneGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      const osc1 = this.osc1;
      const osc2 = this.osc2;
      const lfo = this.lfo;

      setTimeout(() => {
        try {
          osc1?.stop();
          osc2?.stop();
          lfo?.stop();
          osc1?.disconnect();
          osc2?.disconnect();
          lfo?.disconnect();
        } catch {
          // already stopped
        }
      }, 1300);

      this.isDroneActive = false;
      this.osc1 = null;
      this.osc2 = null;
      this.lfo = null;
    } catch {
      this.isDroneActive = false;
    }
  }

  // Tibetan Singing Bowl Chime (528Hz Solfeggio Love & Healing Frequency)
  public playTibetanBowl(freq: number = 528) {
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const fundamental = ctx.createOscillator();
      const overtone1 = ctx.createOscillator();
      const overtone2 = ctx.createOscillator();
      const gain = ctx.createGain();

      // Singing bowl harmonic frequencies
      fundamental.type = "sine";
      fundamental.frequency.setValueAtTime(freq, now);
      fundamental.frequency.exponentialRampToValueAtTime(freq * 0.996, now + 3.0);

      overtone1.type = "sine";
      overtone1.frequency.setValueAtTime(freq * 2.76, now); // Metallic rim resonance

      overtone2.type = "sine";
      overtone2.frequency.setValueAtTime(freq * 5.4, now); // Shimmering high harmonic

      // Exponential decay mimicking hammered bronze
      const vol = 0.16 * this.masterVolume;
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(vol * 0.4, now + 0.6);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

      fundamental.connect(gain);
      overtone1.connect(gain);
      overtone2.connect(gain);
      gain.connect(ctx.destination);

      fundamental.start(now);
      overtone1.start(now);
      overtone2.start(now);

      fundamental.stop(now + 3.3);
      overtone1.stop(now + 1.8);
      overtone2.stop(now + 1.2);
    } catch (e) {
      console.warn("Tibetan bowl error:", e);
    }
  }

  // Percussive bamboo tapping beat
  public playTappingClick() {
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.07);

      const vol = 0.09 * this.masterVolume;
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch {
      // AudioContext unavailable
    }
  }
}

export const zenAudio = typeof window !== "undefined" ? new ZenAudioEngine() : null;
