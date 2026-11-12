"use client";

import React, { useEffect, useState } from "react";

interface SparkleItem {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export function GoldenSparkles() {
  const [sparkles, setSparkles] = useState<SparkleItem[]>([]);

  useEffect(() => {
    // 40 radiant golden glitters & diamond sparkles distributed gracefully across screen
    const colors = ["#FFF8E9", "#F5E5BE", "#E8D5A3", "#C9A45C", "#FFD700"];
    const items: SparkleItem[] = Array.from({ length: 42 }, (_, i) => ({
      id: i,
      top: (i * 11.3) % 100,
      left: (i * 17.9) % 100,
      size: (i % 4 === 0 ? 5 : i % 2 === 0 ? 3.5 : 2.5),
      duration: 3 + (i % 4) * 1.5, // 3s to 7.5s active shimmering
      delay: (i % 7) * 0.7,
      color: colors[i % colors.length],
    }));
    setSparkles(items);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
    >
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full pointer-events-none animate-gold-glitter"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            backgroundColor: s.color,
            boxShadow: `0 0 ${s.size * 3}px ${s.color}, 0 0 ${s.size * 6}px rgba(232, 213, 163, 0.9)`,
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
