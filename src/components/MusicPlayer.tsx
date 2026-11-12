"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export function MusicPlayer({ autoPlayTrigger = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Shehnai instrumental background tune (royalty-free Indian classical flute/shehnai wedding music)
    const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_c39cfc153d.mp3?filename=indian-traditional-background-music-107024.mp3");
    audio.loop = true;
    audio.volume = 0.55;
    audioRef.current = audio;

    audio.addEventListener("canplaythrough", () => {
      setAudioLoaded(true);
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Browser prevented autoplay before interaction
          setIsPlaying(false);
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
        .catch((e) => console.log("Audio play error:", e));
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      <button
        onClick={toggleMusic}
        title={isPlaying ? "संगीत बंद करें (Mute Music)" : "संगीत बजाएं (Play Shehnai Music)"}
        className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#3A0916]/90 border border-[#C9A45C]/80 shadow-[0_4px_20px_rgba(201,164,92,0.35)] backdrop-blur-md text-[#FFF8E9] hover:bg-[#5B1020] transition-all duration-300"
      >
        <div className="relative">
          {isPlaying ? (
            <Volume2 className="w-5 h-5 text-[#E8D5A3] animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-[#E8D5A3]/70" />
          )}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8D5A3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A45C]"></span>
            </span>
          )}
        </div>
        <span className="text-xs font-cinzel tracking-wider text-[#E8D5A3]">
          {isPlaying ? "Shehnai Playing" : "Play Shehnai"}
        </span>
      </button>
    </div>
  );
}

