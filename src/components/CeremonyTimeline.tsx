"use client";

import React, { useState } from "react";
import { Ceremony } from "../data/weddingData";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";

interface CeremonyTimelineProps {
  ceremonies: Ceremony[];
  language?: "hi" | "en";
}

export function CeremonyTimeline({ ceremonies, language = "hi" }: CeremonyTimelineProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "18-nov" | "20-nov" | "21-nov">("all");

  const filteredCeremonies = ceremonies.filter((c) => {
    if (activeFilter === "18-nov") return c.date.includes("18 नवम्बर");
    if (activeFilter === "20-nov") return c.date.includes("20 नवम्बर");
    if (activeFilter === "21-nov") return c.date.includes("21 नवम्बर");
    return true;
  });

  const getCalendarLink = (ceremony: Ceremony) => {
    let startDate = "20261118T043000Z";
    let endDate = "20261118T063000Z";

    if (ceremony.date.includes("20 नवम्बर")) {
      startDate = "20261120T033000Z";
      endDate = "20261120T160000Z";
    } else if (ceremony.date.includes("21 नवम्बर")) {
      startDate = "20261121T033000Z";
      endDate = "20261121T180000Z";
    }

    const title = encodeURIComponent(`${language === "en" ? ceremony.nameEn : ceremony.name} - Kritarth & Palak Wedding`);
    const details = encodeURIComponent(
      `${(language === "en" ? ceremony.descriptionEn : ceremony.description) || ceremony.name}\nVenue: ${language === "en" ? ceremony.venueEn : ceremony.venue}, ${language === "en" ? ceremony.addressEn : ceremony.address}`
    );
    const location = encodeURIComponent(`${language === "en" ? ceremony.venueEn : ceremony.venue}, ${language === "en" ? ceremony.addressEn : ceremony.address}`);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
  };

  const tabs = language === "en" ? [
    { id: "all", label: "All Events" },
    { id: "18-nov", label: "18 Nov (Wed)" },
    { id: "20-nov", label: "20 Nov (Fri)" },
    { id: "21-nov", label: "21 Nov (Wedding - Sat)" },
  ] : [
    { id: "all", label: "सभी कार्यक्रम (All Events)" },
    { id: "18-nov", label: "18 नवम्बर (बुधवार)" },
    { id: "20-nov", label: "20 नवम्बर (शुक्रवार)" },
    { id: "21-nov", label: "21 नवम्बर (शुभ विवाह - शनिवार)" },
  ];

  return (
    <div className="w-full">
      {/* Date Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {tabs.map((tab) => (
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

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredCeremonies.map((ceremony) => {
          const title = language === "en" ? ceremony.nameEn : ceremony.name;
          const subTitle = language === "en" ? ceremony.name : ceremony.nameEn;
          const date = language === "en" ? `${ceremony.dateEn} (${ceremony.dayEn})` : `${ceremony.date} (${ceremony.day})`;
          const time = language === "en" ? ceremony.timeEn : ceremony.time;
          const desc = language === "en" ? ceremony.descriptionEn : ceremony.description;
          const venue = language === "en" ? ceremony.venueEn : ceremony.venue;
          const address = language === "en" ? ceremony.addressEn : ceremony.address;

          return (
            <div
              key={ceremony.id}
              className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 border flex flex-col justify-between overflow-hidden group ${
                ceremony.highlight
                  ? "bg-gradient-to-br from-[#450B1B] via-[#330713] to-[#24030B] border-[#C9A45C] shadow-[0_0_30px_rgba(201,164,92,0.25)]"
                  : "bg-gradient-to-br from-[#350714] to-[#22040C] border-[#C9A45C]/40 hover:border-[#C9A45C]/80 shadow-lg"
              }`}
            >
              {ceremony.highlight && (
                <div className="absolute top-0 right-0 bg-[#C9A45C] text-[#2B0510] text-[10px] font-cinzel font-bold px-3 py-1 rounded-bl-xl tracking-wider uppercase flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3" />
                  {language === "en" ? "Main Ceremony" : "मुख्य प्रसंग"}
                </div>
              )}

              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#E8D5A3] mb-4">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5B1020]/80 border border-[#C9A45C]/40">
                    <Calendar className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span>{date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5B1020]/80 border border-[#C9A45C]/40">
                    <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span className="font-semibold text-[#FFF8E9]">{time}</span>
                  </div>
                </div>

                <h3 className={`text-xl sm:text-2xl font-bold text-[#FFF8E9] group-hover:text-[#E8D5A3] transition-colors leading-snug ${language === "en" ? "font-cormorant tracking-wide" : "font-tiro"}`}>
                  {title}
                </h3>
                <p className={`text-xs sm:text-sm text-[#C9A45C] tracking-wide mt-1 ${language === "en" ? "font-tiro" : "font-cinzel"}`}>
                  {subTitle}
                </p>

                {desc && (
                  <p className="text-xs sm:text-sm text-[#F5EBD7]/85 font-poppins font-light mt-4 leading-relaxed bg-[#20030A]/40 p-3.5 rounded-xl border border-[#C9A45C]/15">
                    {desc}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#C9A45C]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-2 text-xs text-[#E8D5A3]/90">
                  <MapPin className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#FFF8E9] block">{venue}</span>
                    <span className="text-[11px] text-[#E8D5A3]/75">{address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={getCalendarLink(ceremony)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#2B0510] bg-[#E8D5A3] hover:bg-[#FFF8E9] transition-all flex items-center gap-1.5 shadow-sm"
                    title={language === "en" ? "Add to Google Calendar" : "गूगल कैलेंडर में जोड़ें"}
                  >
                    <Calendar className="w-3 h-3" />
                    <span>{language === "en" ? "Add Reminder" : "रिमाइंडर जोड़ें"}</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
