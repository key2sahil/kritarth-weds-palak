"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownProps {
  targetDate: string;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false });

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.isPast) {
    return (
      <div className="text-center py-6 px-4 rounded-2xl bg-[#3A0916]/80 border border-[#C9A45C]/50 max-w-lg mx-auto shadow-xl">
        <h3 className="font-cormorant text-2xl text-[#E8D5A3]">The Auspicious Wedding Ceremony has Commenced</h3>
        <p className="font-tiro text-base text-[#FFF8E9] mt-1">मंगल परिणय संस्कार संपन्न हो चुका है। आप सभी का स्नेहिल आशीष नवयुगल पर बना रहे।</p>
      </div>
    );
  }

  const timeBlocks = [
    { labelEn: "Days", labelHi: "दिन", value: timeLeft.days },
    { labelEn: "Hours", labelHi: "घंटे", value: timeLeft.hours },
    { labelEn: "Minutes", labelHi: "मिनट", value: timeLeft.minutes },
    { labelEn: "Seconds", labelHi: "सेकंड", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center justify-center gap-2 mb-6 text-[#C9A45C]">
        <Clock className="w-4 h-4 text-[#E8D5A3]" />
        <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#E8D5A3]">
          Auspicious Muhurat Countdown
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
        {timeBlocks.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-gradient-to-b from-[#3E0A18] to-[#26040E] border border-[#C9A45C]/40 shadow-[0_6px_20px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-[#C9A45C] transition-all"
          >
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent opacity-80" />
            <span className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold gold-gradient-text">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs font-cinzel text-[#E8D5A3] uppercase tracking-wider mt-1">
              {item.labelEn}
            </span>
            <span className="text-[10px] sm:text-xs font-tiro text-[#C9A45C]/90">
              {item.labelHi}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

