"use client";

import React, { useEffect, useState, useRef } from "react";

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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // 1. Ambient Background Gold Floating Sparkles
    const colors = ["#FFF8E9", "#F5E5BE", "#E8D5A3", "#C9A45C", "#FFD700"];
    const items: SparkleItem[] = Array.from({ length: 36 }, (_, i) => ({
      id: i,
      top: (i * 11.3) % 100,
      left: (i * 17.9) % 100,
      size: i % 4 === 0 ? 5 : i % 2 === 0 ? 3.5 : 2.5,
      duration: 3 + (i % 4) * 1.5,
      delay: (i % 7) * 0.7,
      color: colors[i % colors.length],
    }));
    setSparkles(items);

    // 2. Interactive Golden Ray & Stardust Trail (Mouse Move & Mobile Scroll / Touch)
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      decay: number;
      length: number;
    }

    const particles: Particle[] = [];
    const goldPalette = ["#FFF8E9", "#F5E5BE", "#E8D5A3", "#C9A45C", "#FFD700", "#FFAA00"];

    const addSparks = (x: number, y: number, count = 3, isScroll = false) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = isScroll ? Math.random() * 3 + 1 : Math.random() * 2.2 + 0.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed + (isScroll ? (Math.random() - 0.5) * 4 : -0.6),
          size: Math.random() * 3.5 + 1.5,
          color: goldPalette[Math.floor(Math.random() * goldPalette.length)],
          alpha: 1,
          decay: Math.random() * 0.025 + 0.015,
          length: Math.random() * 8 + 4,
        });
      }
    };

    // Desktop Mouse Move Trigger
    let lastMouseX = 0;
    let lastMouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const dist = Math.hypot(e.clientX - lastMouseX, e.clientY - lastMouseY);
      if (dist > 8) {
        addSparks(e.clientX, e.clientY, 3);
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      }
    };

    // Mobile Touch Move Trigger
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        addSparks(touch.clientX, touch.clientY, 4);
      }
    };

    // Mobile / Desktop Scroll Trigger (Golden rays sprinkle from screen center/sides as you scroll)
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      if (delta > 10) {
        // Sprinkle golden particles across random spots near finger/scroll position
        const randX = Math.random() * width;
        const randY = Math.random() * (height * 0.8) + height * 0.1;
        addSparks(randX, randY, 4, true);
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    let animationId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.strokeStyle = p.color;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;

        // Draw glittering ray line
        ctx.beginPath();
        ctx.lineWidth = p.size * 0.8;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * p.length, p.y - p.vy * p.length);
        ctx.stroke();

        // Draw star spark head
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.7, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Interactive Golden Ray Canvas Trail */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-40 w-full h-full"
      />

      {/* Radiant Floating Stardust */}
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
    </>
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
