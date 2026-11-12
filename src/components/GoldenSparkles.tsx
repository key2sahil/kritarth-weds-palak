"use client";

import React, { useEffect, useState } from "react";

interface AmbientSparkle {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export function GoldenSparkles() {
  const [ambientSparkles, setAmbientSparkles] = useState<AmbientSparkle[]>([]);

  useEffect(() => {
    // Elegant, slow-drifting golden particles in the background
    const goldTones = ["#FFF8E9", "#F5E5BE", "#E8D5A3", "#C9A45C", "#FFD700"];
    const items: AmbientSparkle[] = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      top: (i * 14.3) % 100,
      left: (i * 17.7) % 100,
      size: i % 3 === 0 ? 3.5 : 2.2,
      duration: 5 + (i % 4) * 1.5,
      delay: (i % 5) * 0.9,
      color: goldTones[i % goldTones.length],
    }));
    setAmbientSparkles(items);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
    >
      {ambientSparkles.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full pointer-events-none animate-gold-glitter"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            backgroundColor: s.color,
            boxShadow: `0 0 ${s.size * 2}px ${s.color}, 0 0 ${s.size * 4}px rgba(232, 213, 163, 0.6)`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function TwinkleSparkle({ className = "w-5 h-5 text-[#E8D5A3]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className} animate-twinkle pointer-events-none filter drop-shadow-[0_0_8px_#E8D5A3]`}
    >
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  );
}
