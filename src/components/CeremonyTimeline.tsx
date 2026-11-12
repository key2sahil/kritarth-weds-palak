"use client";

import React, { useState } from "react";
import { Ceremony } from "../data/weddingData";
import { Calendar, Clock, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

interface CeremonyTimelineProps {
  ceremonies: Ceremony[];
}

export function CeremonyTimeline({ ceremonies }: CeremonyTimelineProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "18-nov" | "20-nov" | "21-nov">("all");

  const filteredCeremonies = ceremonies.filter((c) => {
    if (activeFilter === "18-nov") return c.date.includes("18 नवम्बर");
    if (activeFilter === "20-nov") return c.date.includes("20 नवम्बर");
    if (activeFilter === "21-nov") return c.date.includes("21 नवम्बर");
    return true;
  });

  const getCalendarLink = (ceremony: Ceremony) => {
    // Generate Google Calendar Link
    let startDate = "20261118T043000Z";
    let endDate = "20261118T063000Z";

    if (ceremony.date.includes("20 नवम्बर")) {
      startDate = "20261120T033000Z";
      endDate = "20261120T160000Z";
    } else if (ceremony.date.includes("21 नवम्बर")) {
      startDate = "20261121T033000Z";
      endDate = "20261121T180000Z";
    }

    const title = encodeURIComponent(`${ceremony.name} - Kritarth & Palak Wedding`);
    const details = encodeURIComponent(`${ceremony.description || ceremony.name}\nVenue: ${ceremony.venue}, ${ceremony.address}`);
    const location = encodeURIComponent(`${ceremony.venue}, ${ceremony.address}`);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
  };

  return (
    <div className="w-full">
      {/* Date Filter Tabs for Mobile & Quick Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {[
          { id: "all", label: "सभी कार्यक्रम (All Events)" },
          { id: "18-nov", label: "18 नवम्बर (बुधवार)" },
          { id: "20-nov", label: "20 नवम्बर (शुक्रवार)" },
          { id: "21-nov", label: "21 नवम्बर (शुभ विवाह - शनिवार)" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id as any)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeFilter === tab.id
                ? "bg-[#C9A45C] text-[#2B0510] font-semibold shadow-[0_0_15px_rgba(201,164,92,0.6)]"
                : "bg-[#3A0916]/80 text-[#E8D5A3] border border-[#C9A45C]/30 hover:border-[#C9A45C]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Events Grid / Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredCeremonies.map((ceremony, idx) => (
          <div
            key={ceremony.id}
            className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 border flex flex-col justify-between overflow-hidden group ${
              ceremony.highlight
                ? "bg-gradient-to-br from-[#450B1B] via-[#330713] to-[#24030B] border-[#C9A45C] shadow-[0_0_30px_rgba(201,164,92,0.25)]"
                : "bg-gradient-to-br from-[#350714] to-[#22040C] border-[#C9A45C]/40 hover:border-[#C9A45C]/80 shadow-lg"
            }`}
          >
            {/* Top Ornamental corner ribbon */}
            {ceremony.highlight && (
              <div className="absolute top-0 right-0 bg-[#C9A45C] text-[#2B0510] text-[10px] font-cinzel font-bold px-3 py-1 rounded-bl-xl tracking-wider uppercase flex items-center gap-1 shadow-md">
                <Sparkles className="w-3 h-3" />
                मुख्य प्रसंग (Main Event)
              </div>
            )}

            <div>
              {/* Timing & Date Badge */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#E8D5A3] mb-4">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5B1020]/80 border border-[#C9A45C]/40">
                  <Calendar className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span>{ceremony.date} ({ceremony.day})</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5B1020]/80 border border-[#C9A45C]/40">
                  <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span className="font-semibold text-[#FFF8E9]">{ceremony.time}</span>
                </div>
              </div>

              {/* Ceremony Title */}
              <h3 className="text-xl sm:text-2xl font-tiro font-bold text-[#FFF8E9] group-hover:text-[#E8D5A3] transition-colors leading-snug">
                {ceremony.name}
              </h3>
              <p className="text-xs sm:text-sm font-cinzel text-[#C9A45C] tracking-wide mt-1">
                {ceremony.nameEn}
              </p>

              {/* Description */}
              {ceremony.description && (
                <p className="text-xs sm:text-sm text-[#F5EBD7]/85 font-poppins font-light mt-4 leading-relaxed bg-[#20030A]/40 p-3.5 rounded-xl border border-[#C9A45C]/15">
                  {ceremony.description}
                </p>
              )}
            </div>

            {/* Venue & Action Buttons */}
            <div className="mt-6 pt-4 border-t border-[#C9A45C]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-2 text-xs text-[#E8D5A3]/90">
                <MapPin className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#FFF8E9] block">{ceremony.venue}</span>
                  <span className="text-[11px] text-[#E8D5A3]/75">{ceremony.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={getCalendarLink(ceremony)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#2B0510] bg-[#E8D5A3] hover:bg-[#FFF8E9] transition-all flex items-center gap-1.5 shadow-sm"
                  title="Add to Google Calendar"
                >
                  <Calendar className="w-3 h-3" />
                  <span>रिमाइंडर जोड़ें</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

