"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
  language?: "hi" | "en";
}

export function MusicPlayer({ autoPlayTrigger = false, language = "hi" }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userManuallyPaused = useRef<boolean>(false);

  useEffect(() => {
    const audio = new Audio("/audio/shehnai.mp3");
    audio.loop = true;
    audio.volume = 0.65;
    audio.preload = "auto";
    audioRef.current = audio;

    const onAudioPlay = () => setIsPlaying(true);
    const onAudioPause = () => setIsPlaying(false);

    audio.addEventListener("play", onAudioPlay);
    audio.addEventListener("pause", onAudioPause);

    // Initial silent try
    audio.play().catch(() => {});

    // Try play on very first screen touch if user hasn't paused manually
    const onFirstTouch = () => {
      if (!userManuallyPaused.current && audio.paused) {
        audio.play().catch(() => {});
      }
      window.removeEventListener("click", onFirstTouch);
      window.removeEventListener("touchstart", onFirstTouch);
    };

    window.addEventListener("click", onFirstTouch, { once: true });
    window.addEventListener("touchstart", onFirstTouch, { once: true });

    return () => {
      audio.removeEventListener("play", onAudioPlay);
      audio.removeEventListener("pause", onAudioPause);
      audio.pause();
      audio.src = "";
      window.removeEventListener("click", onFirstTouch);
      window.removeEventListener("touchstart", onFirstTouch);
    };
  }, []);

  // When welcome screen palace gate opens
  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !userManuallyPaused.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [autoPlayTrigger]);

  const toggleMusic = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!audioRef.current) return;

    if (!audioRef.current.paused) {
      // User requested PAUSE / MUTE
      userManuallyPaused.current = true;
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // User requested PLAY / UNMUTE
      userManuallyPaused.current = false;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Playback error:", err));
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 pointer-events-auto">
      <button
        onClick={toggleMusic}
        type="button"
        aria-label={isPlaying ? "Mute Shehnai" : "Play Shehnai"}
        className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full border shadow-[0_4px_25px_rgba(201,164,92,0.6)] backdrop-blur-md transition-all duration-300 cursor-pointer ${
          isPlaying
            ? "bg-[#5B1020] border-[#C9A45C] text-[#FFF8E9]"
            : "bg-[#25030C] border-[#C9A45C]/50 text-[#E8D5A3]"
        }`}
      >
        <div className="relative flex items-center justify-center pointer-events-none">
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

        <div className="flex flex-col text-left pointer-events-none">
          <span className="text-xs font-cinzel font-semibold tracking-wider text-[#E8D5A3]">
            {isPlaying
              ? language === "en"
                ? "Mute Shehnai"
                : "शहनाई रोकें"
              : language === "en"
              ? "Play Shehnai"
              : "शहनाई बजाएं"}
          </span>
          <span className="text-[9px] text-[#C9A45C]/80 font-poppins">
            {isPlaying
              ? language === "en"
                ? "Playing • Tap to Mute"
                : "बज रही है • म्यूट करें"
              : language === "en"
              ? "Muted • Tap to Play"
              : "बंद है • शुरू करें"}
          </span>
        </div>
      </button>
    </div>
  );
}
