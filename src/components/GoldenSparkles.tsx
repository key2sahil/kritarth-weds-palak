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
    // 1. Gentle Ambient Background Particles (Kept at only 16 soft, tiny, quiet specks)
    const colors = ["#E8D5A3", "#C9A45C", "#F5E5BE"];
    const items: SparkleItem[] = Array.from({ length: 16 }, (_, i) => ({
      id: i,
      top: (i * 17.3) % 100,
      left: (i * 23.9) % 100,
      size: i % 2 === 0 ? 2 : 1.5,
      duration: 6 + (i % 3) * 2,
      delay: (i % 5) * 1.5,
      color: colors[i % colors.length],
    }));
    setSparkles(items);

    // 2. Subtle Interactive Stardust (Strictly throttled, tiny, quick fade, never covering text)
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
    }

    const particles: Particle[] = [];
    const subtleGold = ["#E8D5A3", "#C9A45C", "#F5E5BE"];

    const addSparks = (x: number, y: number, count = 1) => {
      // Limit total particles in memory so it never explodes into patakhas
      if (particles.length > 25) return;

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.9 + 0.3; // Very gentle drift
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.4,
          size: Math.random() * 1.8 + 1, // Tiny delicate specs (1px - 2.8px)
          color: subtleGold[Math.floor(Math.random() * subtleGold.length)],
          alpha: 0.65, // Lower opacity
          decay: Math.random() * 0.04 + 0.03, // Fades away very fast (under 0.8s)
        });
      }
    };

    // Desktop Mouse Move Trigger: only fires every 35px of movement, 1 tiny particle
    let lastMouseX = 0;
    let lastMouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const dist = Math.hypot(e.clientX - lastMouseX, e.clientY - lastMouseY);
      if (dist > 35) {
        addSparks(e.clientX, e.clientY, 1);
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      }
    };

    // Mobile Touch Move Trigger: gentle single particle trail
    let lastTouchX = 0;
    let lastTouchY = 0;
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const dist = Math.hypot(touch.clientX - lastTouchX, touch.clientY - lastTouchY);
        if (dist > 40) {
          addSparks(touch.clientX, touch.clientY, 1);
          lastTouchX = touch.clientX;
          lastTouchY = touch.clientY;
        }
      }
    };

    // Scroll: removed burst entirely so scrolling through invitation cards is 100% clean and readable!

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

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
        ctx.fillStyle = p.color;

        // Subtle soft dot (no harsh long ray lines or firecracker blasts)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
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
    };
  }, []);

  return (
    <>
      {/* Subtle Soft Stardust Trail (Low opacity, behind dialogs) */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-10 w-full h-full opacity-60"
      />

      {/* Gentle Floating Background Dust (Underneath content layers) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30"
      >
        {sparkles.map((s) => (
          <span
            key={s.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              backgroundColor: s.color,
              opacity: 0.4,
            }}
          />
        ))}
      </div>
    </>
  );
}

export function TwinkleSparkle({ className = "w-4 h-4 text-[#E8D5A3]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className} pointer-events-none opacity-40`}
    >
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  );
}
