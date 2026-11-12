"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export function MusicPlayer({ autoPlayTrigger = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio/shehnai.mp3");
    audio.loop = true;
    audio.volume = 0.6;
    audio.preload = "auto";
    audioRef.current = audio;

    // 1. Attempt immediate play on page load
    const tryPlay = () => {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          // Remove listener once played
          window.removeEventListener("click", tryPlay);
          window.removeEventListener("touchstart", tryPlay);
          window.removeEventListener("scroll", tryPlay);
        })
        .catch(() => {
          // Browser requires user interaction; wait for first touch/click anywhere
        });
    };

    tryPlay();

    // 2. Fallback: On ANY first user gesture on the screen (tap/scroll/click), trigger play automatically
    window.addEventListener("click", tryPlay, { once: true });
    window.addEventListener("touchstart", tryPlay, { once: true });
    window.addEventListener("scroll", tryPlay, { once: true });

    return () => {
      audio.pause();
      audio.src = "";
      window.removeEventListener("click", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
      window.removeEventListener("scroll", tryPlay);
    };
  }, []);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => {
          console.log("Autoplay on trigger waiting for gesture:", e);
        });
    }
  }, [autoPlayTrigger, isPlaying]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => {
          console.error("Audio playback error:", e);
        });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      <button
        onClick={toggleMusic}
        type="button"
        title={isPlaying ? "शहनाई संगीत रोकें (Mute Shehnai)" : "शाही शहनाई बजाएं (Play Royal Shehnai)"}
        className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#3A0916]/95 border border-[#C9A45C] shadow-[0_4px_25px_rgba(201,164,92,0.45)] backdrop-blur-md text-[#FFF8E9] hover:bg-[#5B1020] active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <div className="relative">
          {isPlaying ? (
            <Volume2 className="w-5 h-5 text-[#E8D5A3] animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-[#E8D5A3]/80" />
          )}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8D5A3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A45C]"></span>
            </span>
          )}
        </div>
        <span className="text-xs font-cinzel font-semibold tracking-wider text-[#E8D5A3]">
          {isPlaying ? "Shehnai Playing" : "Play Shehnai"}
        </span>
      </button>
    </div>
  );
}
