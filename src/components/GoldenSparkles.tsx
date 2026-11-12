"use client";

import React, { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function GoldenSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // 25 delicate, slow-drifting gold stardust particles distributed gracefully
    const items: Sparkle[] = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      top: (i * 13.7) % 100,
      left: (i * 19.3) % 100,
      size: (i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1.5) + Math.sin(i) * 0.5,
      duration: 6 + (i % 5) * 2, // 6s to 14s gentle slow drift
      delay: (i % 6) * 1.2,
      opacity: 0.35 + (i % 4) * 0.15,
    }));
    setSparkles(items);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
    >
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full pointer-events-none animate-gold-float"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            backgroundColor: s.id % 2 === 0 ? "#E8D5A3" : "#C9A45C",
            boxShadow: `0 0 ${s.size * 2.5}px rgba(232, 213, 163, 0.85)`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
}

export function TwinkleSparkle({ className = "w-4 h-4 text-[#E8D5A3]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className} animate-twinkle pointer-events-none`}
    >
      <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
    </svg>
  );
}
