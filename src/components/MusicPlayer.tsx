"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
  language?: "hi" | "en";
}

export function MusicPlayer({ autoPlayTrigger = false, language = "hi" }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio/shehnai.mp3");
    audio.loop = true;
    audio.volume = 0.65;
    audio.preload = "auto";
    audioRef.current = audio;

    const tryPlay = () => {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          window.removeEventListener("click", tryPlay);
          window.removeEventListener("touchstart", tryPlay);
          window.removeEventListener("scroll", tryPlay);
        })
        .catch(() => {});
    };

    tryPlay();

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
        .catch(() => {});
    }
  }, [autoPlayTrigger, isPlaying]);

  const toggleMusic = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Playback error:", err));
    }
  };

  return (
    <>
      {/* 1. Prominent Fixed Floating Button (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center">
        <button
          onClick={toggleMusic}
          type="button"
          aria-label={isPlaying ? "Mute / Pause Shehnai" : "Play Shehnai Music"}
          className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full border shadow-[0_4px_25px_rgba(201,164,92,0.5)] backdrop-blur-md transition-all duration-300 cursor-pointer ${
            isPlaying
              ? "bg-[#5B1020]/95 border-[#C9A45C] text-[#FFF8E9]"
              : "bg-[#25030C]/95 border-[#C9A45C]/50 text-[#E8D5A3]"
          }`}
        >
          <div className="relative flex items-center justify-center">
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

          <div className="flex flex-col text-left">
            <span className="text-xs font-cinzel font-semibold tracking-wider text-[#E8D5A3]">
              {isPlaying ? (language === "en" ? "Mute Shehnai" : "शहनाई रोकें") : (language === "en" ? "Play Shehnai" : "शहनाई बजाएं")}
            </span>
            <span className="text-[9px] text-[#C9A45C]/80 font-poppins">
              {isPlaying ? (language === "en" ? "Playing • Tap to Mute" : "बज रही है • म्यूट करें") : (language === "en" ? "Muted • Tap to Play" : "बंद है • शुरू करें")}
            </span>
          </div>
        </button>
      </div>
    </>
  );
}
