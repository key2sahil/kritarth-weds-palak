"use client";

import React, { useState } from "react";
import { MessageCircle, Share2, Copy, Check, Heart } from "lucide-react";
import confetti from "canvas-confetti";

interface WhatsAppShareProps {
  shareMessage: string;
}

export function WhatsAppShare({ shareMessage }: WhatsAppShareProps) {
  const [copied, setCopied] = useState(false);
  const [blessingSent, setBlessingSent] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [customWish, setCustomWish] = useState("");

  const handleShareWhatsApp = () => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "https://kritarth-weds-palak.vercel.app";
    const fullText = `${shareMessage}\n\n${currentUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullText)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSendWishToHost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    // Trigger celebratory royal confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#C9A45C", "#E8D5A3", "#5B1020", "#FFF8E9"],
      });
    } catch (err) {
      // Confetti fallback
    }

    const hostPhone = "919926348812";
    const message = `॥ श्री गणेशाय नमः ॥\n\nआदरणीय कृष्ण गोपाल जी सोनी एवं सोनी परिवार,\n\nमैं ${guestName} कृतार्थ एवं पलक के शुभ विवाह पर अपनी हार्दिक शुभकामनाएं एवं मंगल आशीष प्रेषित करता हूँ।\n\nशुभकामना संदेश: ${customWish || "नवदंपति को सुखी, समृद्ध एवं मंगलमय वैवाहिक जीवन की बहुत-बहुत शुभकामनाएं!"}`;
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${hostPhone}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setBlessingSent(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      {/* 1. Share Invitation Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#380816] to-[#25040D] border border-[#C9A45C]/50 shadow-2xl text-center">
        <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#E8D5A3] uppercase tracking-wider">
          Share Royal Invitation
        </h3>
        <p className="font-tiro text-sm text-[#F5EBD7] mt-1">
          मित्रों एवं स्वजनों के साथ यह शुभ निमंत्रण साझा करें
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <button
            onClick={handleShareWhatsApp}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] text-white font-medium text-sm flex items-center justify-center gap-2.5 shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:brightness-110 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp पर शेयर करें</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#3E0A18] text-[#E8D5A3] border border-[#C9A45C]/60 font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#5B1020] active:scale-95 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-green-300">लिंक कॉपी हो गया!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#C9A45C]" />
                <span>वेबसाइट लिंक कॉपी करें</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. Direct Blessing / RSVP Form */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#350714] to-[#20030A] border border-[#C9A45C]/40 shadow-xl">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Heart className="w-5 h-5 text-[#C9A45C] fill-[#C9A45C]/30" />
          <h3 className="font-tiro text-xl sm:text-2xl font-bold text-[#FFF8E9]">
            नवदंपति को शुभाशीष भेजें
          </h3>
        </div>
        <p className="text-center font-poppins text-xs sm:text-sm text-[#E8D5A3]/80 mb-6">
          वर-वधु एवं सोनी परिवार को अपना स्नेह भरा संदेश सीधे WhatsApp पर प्रेषित करें
        </p>

        <form onSubmit={handleSendWishToHost} className="space-y-4">
          <div>
            <label className="block text-xs font-cinzel uppercase text-[#E8D5A3] mb-1.5 tracking-wider">
              आपका शुभ नाम (Your Name) *
            </label>
            <input
              type="text"
              required
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="उदा. रमेश कुमार सोनी, विदिशा"
              className="w-full px-4 py-3 rounded-xl bg-[#28040E] border border-[#C9A45C]/40 text-[#FFF8E9] placeholder-[#E8D5A3]/40 text-sm focus:outline-none focus:border-[#C9A45C] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-cinzel uppercase text-[#E8D5A3] mb-1.5 tracking-wider">
              मंगल संदेश / शुभाशीष (Blessing Message)
            </label>
            <textarea
              rows={3}
              value={customWish}
              onChange={(e) => setCustomWish(e.target.value)}
              placeholder="कृतार्थ एवं पलक को वैवाहिक जीवन की अनंत मंगलकामनाएं..."
              className="w-full px-4 py-3 rounded-xl bg-[#28040E] border border-[#C9A45C]/40 text-[#FFF8E9] placeholder-[#E8D5A3]/40 text-sm focus:outline-none focus:border-[#C9A45C] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#C9A45C] via-[#E8D5A3] to-[#C9A45C] text-[#2B0510] font-semibold text-sm tracking-wide shadow-[0_4px_20px_rgba(201,164,92,0.4)] hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>परिवार को शुभाशीष प्रेषित करें (Send Wishes via WhatsApp)</span>
          </button>
        </form>
      </div>
    </div>
  );
}

