"use client";

export type SfxKind = "hover" | "click" | "snap";

let ctx: AudioContext | null = null;

function getCtx() {
  if (typeof window === "undefined") return null;
  if (!ctx) ctx = new AudioContext();
  return ctx;
}

export async function unlockAudio() {
  const c = getCtx();
  if (!c) return;
  if (c.state === "suspended") await c.resume();
}

export function playSfx(kind: SfxKind, enabled: boolean) {
  if (!enabled) return;
  const c = getCtx();
  if (!c) return;
  if (c.state === "suspended") void c.resume();

  const now = c.currentTime;
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.connect(gain);
  gain.connect(c.destination);

  if (kind === "hover") {
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.018, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
    osc.start(now);
    osc.stop(now + 0.09);
    return;
  }

  if (kind === "snap") {
    osc.type = "triangle";
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.12);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.03, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
    osc.start(now);
    osc.stop(now + 0.18);
    return;
  }

  osc.type = "sine";
  osc.frequency.setValueAtTime(520, now);
  osc.frequency.exponentialRampToValueAtTime(740, now + 0.05);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.035, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
  osc.start(now);
  osc.stop(now + 0.14);
}

export const MK_SPOTIFY_PLAYLIST_ID = "3nn7gH8cUuGARPp4irtpkf";
export const MK_SPOTIFY_URI = `spotify:playlist:${MK_SPOTIFY_PLAYLIST_ID}`;
export const MK_SPOTIFY_EMBED = `https://open.spotify.com/embed/playlist/${MK_SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`;
