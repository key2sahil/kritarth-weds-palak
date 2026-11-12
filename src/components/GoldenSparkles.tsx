"use client";

import React, { useEffect, useState, useRef } from "react";

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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // 1. Ambient Background Gold Twinkles (25 well-balanced shimmering particles)
    const goldTones = ["#FFF8E9", "#F5E5BE", "#E8D5A3", "#C9A45C", "#FFD700"];
    const items: AmbientSparkle[] = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      top: (i * 13.9) % 100,
      left: (i * 18.7) % 100,
      size: (i % 3 === 0 ? 3.5 : 2.5),
      duration: 4 + (i % 4) * 1.2,
      delay: (i % 5) * 0.8,
      color: goldTones[i % goldTones.length],
    }));
    setAmbientSparkles(items);

    // 2. Beautiful Balanced Golden Ray & Stardust Sparkle Trail on Mouse & Touch
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
      isStar: boolean;
    }

    const particles: Particle[] = [];
    const colors = ["#FFF8E9", "#F5E5BE", "#E8D5A3", "#C9A45C", "#FFD700"];

    const addSparks = (x: number, y: number, count = 2) => {
      if (particles.length > 60) return;

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.4 + 0.6;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5,
          size: Math.random() * 2.8 + 2, // 2px to 4.8px (clearly visible!)
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 0.9,
          decay: Math.random() * 0.02 + 0.015, // Smooth ~1.2s graceful fade
          isStar: i % 2 === 0,
        });
      }
    };

    // Desktop Mouse Move (triggers every 12px)
    let lastMouseX = 0;
    let lastMouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const dist = Math.hypot(e.clientX - lastMouseX, e.clientY - lastMouseY);
      if (dist > 12) {
        addSparks(e.clientX, e.clientY, 2);
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      }
    };

    // Mobile Touch Move
    let lastTouchX = 0;
    let lastTouchY = 0;
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const dist = Math.hypot(touch.clientX - lastTouchX, touch.clientY - lastTouchY);
        if (dist > 14) {
          addSparks(touch.clientX, touch.clientY, 2);
          lastTouchX = touch.clientX;
          lastTouchY = touch.clientY;
        }
      }
    };

    // Mobile & Desktop Scroll (adds a gentle sprinkle of 2 sparkles on scroll movement)
    let lastScrollY = window.scrollY;
    let scrollThrottle = false;
    const onScroll = () => {
      if (scrollThrottle) return;
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      if (delta > 20) {
        scrollThrottle = true;
        const x = Math.random() * (width * 0.8) + width * 0.1;
        const y = Math.random() * (height * 0.6) + height * 0.2;
        addSparks(x, y, 2);
        lastScrollY = currentScrollY;
        setTimeout(() => {
          scrollThrottle = false;
        }, 120);
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
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;

        if (p.isStar) {
          // Draw a 4-point diamond star sparkle ✦
          const r = p.size * 1.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - r);
          ctx.lineTo(p.x + r * 0.35, p.y - r * 0.35);
          ctx.lineTo(p.x + r, p.y);
          ctx.lineTo(p.x + r * 0.35, p.y + r * 0.35);
          ctx.lineTo(p.x, p.y + r);
          ctx.lineTo(p.x - r * 0.35, p.y + r * 0.35);
          ctx.lineTo(p.x - r, p.y);
          ctx.lineTo(p.x - r * 0.35, p.y - r * 0.35);
          ctx.closePath();
          ctx.fill();
        } else {
          // Soft glowing golden round particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

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
      {/* Interactive Golden Star Sparkle Canvas Trail */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-30 w-full h-full"
      />

      {/* Ambient Floating Gold Twinkles */}
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
              boxShadow: `0 0 ${s.size * 2.5}px ${s.color}, 0 0 ${s.size * 5}px rgba(232, 213, 163, 0.7)`,
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
