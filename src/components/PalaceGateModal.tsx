"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GaneshaIcon, RoyalMandalaDivider } from "./RoyalIcons";
import { Sparkles, KeyRound } from "lucide-react";

interface PalaceGateModalProps {
  onOpen: () => void;
}

export function PalaceGateModal({ onOpen }: PalaceGateModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [particles, setParticles] = useState<{ id: number; size: number; top: number; left: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: (i % 4) + 2,
      top: (i * 19) % 100,
      left: (i * 23) % 100,
      duration: (i % 3) + 4,
      delay: (i % 4) * 0.5,
    }));
    setParticles(generated);
  }, []);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-[#1A030A]">
      {/* Background Ambience */}
      <div className="absolute inset-0 royal-mandala-bg opacity-40 pointer-events-none" />

      {/* Floating Golden Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-[#E8D5A3] opacity-60 animate-float"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: `${p.top}%`,
              left: `${p.left}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Left Palace Door */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: "-100%", opacity: 0 } : { x: "0%", opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-[#1E040B] via-[#350714] to-[#4A0A1C] border-r-2 border-[#C9A45C] shadow-[10px_0_30px_rgba(0,0,0,0.8)] z-20 flex flex-col items-end justify-center pr-6"
      >
        {/* Rajasthani Arch & Door Jharokha Pattern */}
        <div className="absolute inset-4 border border-[#C9A45C]/30 rounded-l-2xl pointer-events-none" />
        <div className="absolute top-1/2 -translate-y-1/2 right-3 w-10 h-28 rounded-l-full border-2 border-r-0 border-[#C9A45C] bg-[#2B0510]/80 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full border border-[#C9A45C] bg-[#C9A45C]/20 shadow-[0_0_10px_#C9A45C]" />
        </div>
      </motion.div>

      {/* Right Palace Door */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: "100%", opacity: 0 } : { x: "0%", opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-l from-[#1E040B] via-[#350714] to-[#4A0A1C] border-l-2 border-[#C9A45C] shadow-[-10px_0_30px_rgba(0,0,0,0.8)] z-20 flex flex-col items-start justify-center pl-6"
      >
        <div className="absolute inset-4 border border-[#C9A45C]/30 rounded-r-2xl pointer-events-none" />
        <div className="absolute top-1/2 -translate-y-1/2 left-3 w-10 h-28 rounded-r-full border-2 border-l-0 border-[#C9A45C] bg-[#2B0510]/80 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full border border-[#C9A45C] bg-[#C9A45C]/20 shadow-[0_0_10px_#C9A45C]" />
        </div>
      </motion.div>

      {/* Center Royal Seal & Invitation Card Trigger */}
      <motion.div
        animate={isOpen ? { scale: 0.8, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-30 flex flex-col items-center max-w-lg mx-4 p-8 sm:p-12 text-center rounded-2xl bg-[#2A0510]/95 border-2 border-[#C9A45C] shadow-[0_0_50px_rgba(201,164,92,0.45)] backdrop-blur-md"
      >
        <div className="mb-2">
          <GaneshaIcon className="w-20 h-20 sm:w-24 sm:h-24 mx-auto drop-shadow-[0_4px_12px_rgba(201,164,92,0.6)]" />
        </div>

        <p className="text-xs sm:text-sm font-tiro tracking-widest text-[#E8D5A3] mt-2">
          ॥ श्री गणेशाय नमः ॥
        </p>

        <h2 className="text-sm uppercase tracking-[0.3em] font-cinzel text-[#C9A45C] mt-3">
          Royal Wedding Invitation
        </h2>

        <div className="my-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-bold gold-gradient-text tracking-wide">
            Kritarth & Palak
          </h1>
          <p className="font-tiro text-xl text-[#F5EBD7] mt-1">
            कृतार्थ संग पलक
          </p>
        </div>

        <RoyalMandalaDivider className="w-48 my-3" />

        <p className="text-xs sm:text-sm text-[#E8D5A3]/85 font-poppins font-light max-w-xs mx-auto">
          21 November 2026 • Sironj, Madhya Pradesh
        </p>

        <button
          onClick={handleOpenInvitation}
          className="mt-6 group relative flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C9A45C] via-[#E8D5A3] to-[#C9A45C] text-[#2B0510] font-cinzel font-semibold tracking-wider text-sm shadow-[0_0_25px_rgba(201,164,92,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <Sparkles className="w-4 h-4 text-[#5B1020]" />
          <span>Open Wedding Invitation</span>
          <span className="text-xs font-tiro font-bold">| शुभ निमंत्रण</span>
        </button>

        <button
          onClick={onOpen}
          className="mt-4 text-[11px] text-[#C9A45C]/70 hover:text-[#FFF8E9] underline underline-offset-4 tracking-wider transition-colors"
        >
          Skip Intro / सीधे प्रवेश करें
        </button>
      </motion.div>
    </div>
  );
}
