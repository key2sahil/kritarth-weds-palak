"use client";

import React, { useState } from "react";
import { WEDDING_DATA } from "@/data/weddingData";
import { PalaceGateModal } from "@/components/PalaceGateModal";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Countdown } from "@/components/Countdown";
import { CeremonyTimeline } from "@/components/CeremonyTimeline";
import { WhatsAppShare } from "@/components/WhatsAppShare";
import { GaneshaIcon, KalashIcon, DiyaIcon, RoyalMandalaDivider } from "@/components/RoyalIcons";
import { GoldenSparkles, TwinkleSparkle } from "@/components/GoldenSparkles";
import {
  Calendar,
  MapPin,
  Phone,
  Navigation,
  Languages,
  Store,
  ChevronDown,
  Building,
} from "lucide-react";

export default function Home() {
  const [invitationOpened, setInvitationOpened] = useState(false);
  const [lang, setLang] = useState<"hi" | "en">("hi");

  const toggleLanguage = (selectedLang: "hi" | "en") => {
    setLang(selectedLang);
  };

  return (
    <main className="relative min-h-screen selection:bg-[#C9A45C] selection:text-[#2B0510] text-[#FFF8E9] overflow-x-hidden">
      {/* 1. CINEMATIC PALACE GATE OVERLAY */}
      {!invitationOpened && (
        <PalaceGateModal onOpen={() => setInvitationOpened(true)} />
      )}

      {/* FLOATING MUSIC CONTROLLER (PLAY/PAUSE / MUTE/UNMUTE) */}
      <MusicPlayer autoPlayTrigger={invitationOpened} language={lang} />

      {/* BACKGROUND ROYAL AMBIENCE */}
      <div className="fixed inset-0 royal-mandala-bg opacity-30 pointer-events-none -z-10" />

      {/* GOLDEN GLITTER & STARDUST PARTICLES LAYER */}
      <GoldenSparkles />

      {/* TOP FLOATING NAV / BAR WITH GIGW COMPLIANT LANGUAGE SWITCHER */}
      <header className="sticky top-0 z-40 bg-[#25030C]/95 backdrop-blur-md border-b border-[#C9A45C]/30 px-4 py-2.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          {/* Invocation / Title */}
          <div className="flex items-center gap-2">
            <span className="font-tiro text-xs sm:text-sm text-[#E8D5A3] font-semibold">
              {lang === "hi" ? "॥ श्री गणेशाय नमः ॥" : "|| Shree Ganeshay Namah ||"}
            </span>
          </div>

          {/* Center Title (desktop) */}
          <div className="text-center hidden md:block">
            <span className="font-cinzel text-xs tracking-widest text-[#C9A45C] uppercase">
              Kritarth & Palak Wedding
            </span>
          </div>

          {/* Right Navigation & Bilingual Language Toggle (GIGW / Accessibility) */}
          <div className="flex items-center gap-3">
            <nav className="hidden sm:flex items-center gap-3 text-xs font-medium text-[#E8D5A3]">
              <a href="#events" className="hover:text-[#FFF8E9] transition-colors">
                {lang === "hi" ? "कार्यक्रम" : "Ceremonies"}
              </a>
              <a href="#venue" className="hover:text-[#FFF8E9] transition-colors">
                {lang === "hi" ? "स्थल" : "Venue"}
              </a>
              <a href="#family" className="hover:text-[#FFF8E9] transition-colors">
                {lang === "hi" ? "परिवार" : "Family"}
              </a>
            </nav>

            {/* GIGW-style Language Switcher */}
            <div
              role="group"
              aria-label="Language selection / भाषा चयन"
              className="flex items-center rounded-full bg-[#3B0917] border border-[#C9A45C]/60 p-0.5 shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggleLanguage("hi")}
                aria-pressed={lang === "hi"}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  lang === "hi"
                    ? "bg-[#C9A45C] text-[#2B0510] font-bold shadow-md"
                    : "text-[#E8D5A3] hover:text-[#FFF8E9]"
                }`}
              >
                हिन्दी
              </button>
              <button
                type="button"
                onClick={() => toggleLanguage("en")}
                aria-pressed={lang === "en"}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  lang === "en"
                    ? "bg-[#C9A45C] text-[#2B0510] font-bold shadow-md"
                    : "text-[#E8D5A3] hover:text-[#FFF8E9]"
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-14 overflow-hidden">
        <div className="absolute inset-x-4 inset-y-6 sm:inset-10 border border-[#C9A45C]/25 rounded-3xl pointer-events-none -z-0" />
        <div className="absolute inset-x-6 inset-y-8 sm:inset-12 border border-[#C9A45C]/15 rounded-3xl pointer-events-none -z-0" />

        {/* Auspicious Deity Invocations */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-tiro text-[#E8D5A3] tracking-widest mb-6">
          {(lang === "hi" ? WEDDING_DATA.auspiciousInvocations : WEDDING_DATA.auspiciousInvocationsEn).map((inv, idx) => (
            <React.Fragment key={idx}>
              <span>{inv}</span>
              {idx < 2 && <span className="text-[#C9A45C]">✦</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Lord Ganesha Motif */}
        <div className="relative z-10 mb-4">
          <GaneshaIcon className="w-20 h-20 sm:w-28 sm:h-28 mx-auto drop-shadow-[0_4px_20px_rgba(201,164,92,0.6)]" />
        </div>

        {/* Mangalacharan Shlokas */}
        <div className="relative z-10 max-w-xl mx-auto mb-6 px-4 py-3 rounded-2xl bg-[#3E0A18]/50 border border-[#C9A45C]/30 backdrop-blur-sm">
          <p className="font-tiro text-sm sm:text-base text-[#F5EBD7] leading-relaxed">
            {lang === "hi" ? (
              <>
                {WEDDING_DATA.shlokas.mangalacharan[0]}<br />
                {WEDDING_DATA.shlokas.mangalacharan[1]}
              </>
            ) : (
              <>
                {WEDDING_DATA.shlokas.mangalacharanEn[0]}<br />
                {WEDDING_DATA.shlokas.mangalacharanEn[1]}
              </>
            )}
          </p>
        </div>

        {/* Subtitle / Invitation Wording */}
        <p className="relative z-10 font-cinzel text-xs sm:text-sm uppercase tracking-[0.3em] text-[#C9A45C] mb-3">
          {lang === "hi" ? WEDDING_DATA.couple.familyInviteHi : WEDDING_DATA.couple.familyInviteEn}
        </p>

        {/* Royal Names of the Couple */}
        <div className="relative z-10 my-2">
          <div className="absolute -top-4 left-4 hidden sm:block">
            <TwinkleSparkle className="w-5 h-5 text-[#E8D5A3]" />
          </div>
          <div className="absolute -bottom-3 right-6 hidden sm:block">
            <TwinkleSparkle className="w-4 h-4 text-[#C9A45C]" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-cormorant font-bold gold-gradient-text tracking-wide drop-shadow-md">
            {WEDDING_DATA.couple.groom.nameEn}
            <span className="text-2xl sm:text-4xl font-serif text-[#E8D5A3] mx-3 sm:mx-5">&</span>
            {WEDDING_DATA.couple.bride.nameEn}
          </h1>

          <div className="flex items-center justify-center gap-3 text-2xl sm:text-4xl font-tiro font-bold text-[#FFF8E9] mt-3">
            <span>{lang === "hi" ? WEDDING_DATA.couple.groom.nameHi : WEDDING_DATA.couple.groom.nameEn}</span>
            <span className="text-xl sm:text-2xl font-light text-[#C9A45C]">{lang === "hi" ? "संग" : "weds"}</span>
            <span>{lang === "hi" ? WEDDING_DATA.couple.bride.nameHi : WEDDING_DATA.couple.bride.nameEn}</span>
          </div>
        </div>

        <RoyalMandalaDivider className="relative z-10 w-64 sm:w-80 my-4" />

        {/* Wedding Highlights */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-poppins text-[#E8D5A3]">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#C9A45C]" />
            <span className="font-semibold text-[#FFF8E9]">
              {lang === "hi" ? "21 नवम्बर 2026 (शनिवार)" : "21 November 2026 (Saturday)"}
            </span>
          </div>
          <span className="hidden sm:inline text-[#C9A45C]">|</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#C9A45C]" />
            <span>
              {lang === "hi" ? "स्वागत मैरिज गार्डन, सिरोंज (म.प्र.)" : "Swagat Marriage Garden, Sironj (M.P.)"}
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#invitation-note"
          className="relative z-10 mt-10 inline-flex flex-col items-center gap-1 text-[11px] font-cinzel tracking-widest text-[#C9A45C]/80 hover:text-[#FFF8E9] transition-colors"
        >
          <span>{lang === "hi" ? "निमंत्रण पत्र पढ़ें" : "Read Invitation Card"}</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C9A45C]" />
        </a>
      </section>

      {/* SECTION 2: GANESH VANDANA & AUSPICIOUS BLESSING */}
      <section className="relative py-16 px-4 bg-gradient-to-b from-[#2B0510] via-[#3B0917] to-[#2B0510] border-y border-[#C9A45C]/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <DiyaIcon className="w-6 h-6 transform -scale-x-100" />
            <KalashIcon className="w-14 h-14" />
            <DiyaIcon className="w-6 h-6" />
          </div>

          <h2 className="text-sm font-cinzel uppercase tracking-[0.25em] text-[#C9A45C] mb-2">
            {lang === "hi" ? "विघ्नहर्ता श्री गणेश कृपा" : "Divine Blessings of Lord Ganesha"}
          </h2>
          <h3 className="font-tiro text-2xl sm:text-3xl font-bold text-[#FFF8E9] mb-4">
            {lang === "hi" ? "गणेश वंदना" : "Ganesh Vandana"}
          </h3>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#23030A]/60 border border-[#C9A45C]/40 shadow-inner">
            <p className="font-tiro text-lg sm:text-xl text-[#F5EBD7] leading-relaxed font-medium">
              {lang === "hi" ? (
                <>
                  विघ्न हरण मंगल करण, श्री गणपति महाराज ।<br />
                  प्रथम निमंत्रण आपको, पूर्ण करियो काज ॥
                </>
              ) : (
                <>
                  {WEDDING_DATA.shlokas.ganeshVandanaEn[0]}<br />
                  {WEDDING_DATA.shlokas.ganeshVandanaEn[1]}
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: INVITATION MESSAGE / PATRIKA WORDING (WITH IN-CARD SWITCHER) */}
      <section id="invitation-note" className="py-20 px-4 relative">
        <div className="max-w-3xl mx-auto">
          {/* Royal Parchment Invitation Card */}
          <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#FFF8E9] to-[#F5EBD7] text-[#2B0510] border-4 border-[#C9A45C] shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
            {/* Ornamental Corners */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#5B1020]" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#5B1020]" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#5B1020]" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#5B1020]" />

            {/* IN-CARD LANGUAGE SWITCHER (GIGW / Accessible) */}
            <div className="flex items-center justify-end mb-4">
              <div
                role="group"
                aria-label="Language selection within card"
                className="inline-flex items-center gap-1 p-1 rounded-full bg-[#5B1020]/10 border border-[#5B1020]/30 text-xs"
              >
                <Languages className="w-3.5 h-3.5 text-[#5B1020] ml-1.5 mr-0.5" />
                <button
                  type="button"
                  onClick={() => toggleLanguage("hi")}
                  className={`px-2.5 py-0.5 rounded-full font-medium transition-all ${
                    lang === "hi"
                      ? "bg-[#5B1020] text-[#FFF8E9] font-bold"
                      : "text-[#5B1020] hover:bg-[#5B1020]/20"
                  }`}
                >
                  हिन्दी
                </button>
                <button
                  type="button"
                  onClick={() => toggleLanguage("en")}
                  className={`px-2.5 py-0.5 rounded-full font-medium transition-all ${
                    lang === "en"
                      ? "bg-[#5B1020] text-[#FFF8E9] font-bold"
                      : "text-[#5B1020] hover:bg-[#5B1020]/20"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <div className="text-center">
              <span className="font-tiro text-base font-bold text-[#5B1020] tracking-wider">
                ॥ मंगलम् भगवान विष्णुः ॥
              </span>

              <h2 className="text-3xl sm:text-4xl font-tiro font-bold text-[#5B1020] mt-3 mb-2">
                {lang === "hi" ? "स्नेहिल आमंत्रण" : "Royal Wedding Invitation"}
              </h2>

              <div className="h-[1px] w-36 mx-auto bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent my-4" />

              <p className="font-tiro text-lg font-semibold text-[#5B1020] mb-4">
                {lang === "hi" ? WEDDING_DATA.invitationMessage.salutationHi : WEDDING_DATA.invitationMessage.salutationEn}
              </p>

              <p className="font-tiro text-base sm:text-lg text-[#3A0916] leading-relaxed max-w-2xl mx-auto">
                {lang === "hi" ? WEDDING_DATA.invitationMessage.bodyHi : WEDDING_DATA.invitationMessage.bodyEn}
              </p>

              <div className="mt-8 pt-6 border-t border-[#C9A45C]/40 text-center">
                <p className="font-tiro text-sm text-[#5B1020] font-medium">
                  {lang === "hi" ? WEDDING_DATA.invitationMessage.conclusionHi : WEDDING_DATA.invitationMessage.conclusionEn}
                </p>
                <p className="font-tiro text-base font-bold text-[#5B1020] mt-3">
                  — {lang === "hi" ? WEDDING_DATA.couple.familyInviteHi : WEDDING_DATA.couple.familyInviteEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: BRIDE & GROOM INTRODUCTIONS */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#2B0510] via-[#350714] to-[#2B0510] border-y border-[#C9A45C]/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
              {lang === "hi" ? "वर एवं वधु परिचय" : "The Royal Couple"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-tiro font-bold text-[#FFF8E9] mt-2">
              {lang === "hi" ? "शुभ परिणय सूत्र" : "Auspicious Union"}
            </h2>
            <RoyalMandalaDivider className="w-48 my-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* GROOM CARD */}
            <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#3E0A18] to-[#26040E] border-2 border-[#C9A45C]/60 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 mx-auto rounded-full bg-[#5B1020] border-2 border-[#C9A45C] flex items-center justify-center text-xl font-bold font-cormorant gold-gradient-text shadow-md mb-4">
                  K
                </div>

                <div className="text-center">
                  <span className="text-xs font-cinzel text-[#E8D5A3] tracking-widest uppercase block mb-1">
                    {lang === "hi" ? WEDDING_DATA.couple.groom.taglineHi : WEDDING_DATA.couple.groom.taglineEn}
                  </span>
                  <h3 className="font-tiro text-2xl sm:text-3xl font-bold text-[#FFF8E9]">
                    {lang === "hi" ? WEDDING_DATA.couple.groom.titleHi : WEDDING_DATA.couple.groom.titleEn}
                  </h3>
                  <p className="font-cinzel text-sm text-[#C9A45C] tracking-wide mt-0.5">
                    {WEDDING_DATA.couple.groom.nameEn}
                  </p>
                </div>

                <div className="mt-8 space-y-3 font-tiro text-sm sm:text-base text-[#F5EBD7] bg-[#1E030A]/60 p-5 rounded-2xl border border-[#C9A45C]/20">
                  <p>
                    <span className="text-[#C9A45C] font-semibold">{lang === "hi" ? "सुपौत्र:" : "Grandson of:"}</span>{" "}
                    {lang === "hi" ? WEDDING_DATA.couple.groom.grandparentsHi : WEDDING_DATA.couple.groom.grandparentsEn}
                  </p>
                  <p>
                    <span className="text-[#C9A45C] font-semibold">{lang === "hi" ? "सुपुत्र:" : "Son of:"}</span>{" "}
                    {lang === "hi" ? WEDDING_DATA.couple.groom.parentsHi : WEDDING_DATA.couple.groom.parentsEn}
                  </p>
                  <p>
                    <span className="text-[#C9A45C] font-semibold">{lang === "hi" ? "निवासी:" : "Residence:"}</span>{" "}
                    {lang === "hi" ? WEDDING_DATA.couple.groom.residenceHi : WEDDING_DATA.couple.groom.residenceEn}
                  </p>
                </div>
              </div>
            </div>

            {/* BRIDE CARD */}
            <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#3E0A18] to-[#26040E] border-2 border-[#C9A45C]/60 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 mx-auto rounded-full bg-[#5B1020] border-2 border-[#C9A45C] flex items-center justify-center text-xl font-bold font-cormorant gold-gradient-text shadow-md mb-4">
                  P
                </div>

                <div className="text-center">
                  <span className="text-xs font-cinzel text-[#E8D5A3] tracking-widest uppercase block mb-1">
                    {lang === "hi" ? WEDDING_DATA.couple.bride.taglineHi : WEDDING_DATA.couple.bride.taglineEn}
                  </span>
                  <h3 className="font-tiro text-2xl sm:text-3xl font-bold text-[#FFF8E9]">
                    {lang === "hi" ? WEDDING_DATA.couple.bride.titleHi : WEDDING_DATA.couple.bride.titleEn}
                  </h3>
                  <p className="font-cinzel text-sm text-[#C9A45C] tracking-wide mt-0.5">
                    {WEDDING_DATA.couple.bride.nameEn}
                  </p>
                </div>

                <div className="mt-8 space-y-3 font-tiro text-sm sm:text-base text-[#F5EBD7] bg-[#1E030A]/60 p-5 rounded-2xl border border-[#C9A45C]/20">
                  <p>
                    <span className="text-[#C9A45C] font-semibold">{lang === "hi" ? "सुपौत्री:" : "Granddaughter of:"}</span>{" "}
                    {lang === "hi" ? WEDDING_DATA.couple.bride.grandparentsHi : WEDDING_DATA.couple.bride.grandparentsEn}
                  </p>
                  <p>
                    <span className="text-[#C9A45C] font-semibold">{lang === "hi" ? "सुपुत्री:" : "Daughter of:"}</span>{" "}
                    {lang === "hi" ? WEDDING_DATA.couple.bride.parentsHi : WEDDING_DATA.couple.bride.parentsEn}
                  </p>
                  <p>
                    <span className="text-[#C9A45C] font-semibold">{lang === "hi" ? "निवासी:" : "Residence:"}</span>{" "}
                    {lang === "hi" ? WEDDING_DATA.couple.bride.residenceHi : WEDDING_DATA.couple.bride.residenceEn}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LIVE WEDDING COUNTDOWN */}
      <section className="py-14 px-4 bg-[#21030A]">
        <Countdown targetDate={WEDDING_DATA.mainDate} />
      </section>

      {/* SECTION 6: WEDDING CEREMONIES & TIMELINE */}
      <section id="events" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
            {lang === "hi" ? "मांगलिक अनुष्ठान" : "Auspicious Schedule"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-tiro font-bold text-[#FFF8E9] mt-2">
            {lang === "hi" ? "मांगलिक कार्यक्रम" : "Wedding Ceremonies"}
          </h2>
          <p className="text-xs sm:text-sm text-[#E8D5A3]/80 font-poppins mt-2">
            {lang === "hi"
              ? "18 नवम्बर से 21 नवम्बर 2026 तक समस्त वैवाहिक अनुष्ठान का विवरण"
              : "Complete schedule of auspicious rituals from 18 to 21 November 2026"}
          </p>
          <RoyalMandalaDivider className="w-48 my-4" />
        </div>

        <CeremonyTimeline ceremonies={WEDDING_DATA.ceremonies} language={lang} />
      </section>

      {/* SECTION 7: VENUE & GOOGLE MAPS LOCATION */}
      <section id="venue" className="py-20 px-4 bg-gradient-to-b from-[#2B0510] via-[#350714] to-[#2B0510] border-y border-[#C9A45C]/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
              {lang === "hi" ? "विवाह स्थल एवं मार्गदर्शिका" : "Wedding Destination & Travel"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-tiro font-bold text-[#FFF8E9] mt-2">
              {lang === "hi" ? "विवाह स्थल" : "Venue Location"}
            </h2>
            <RoyalMandalaDivider className="w-48 my-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Venue Details */}
            <div className="p-8 rounded-3xl bg-[#3E0A18]/90 border border-[#C9A45C]/50 shadow-xl space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#5B1020] border border-[#C9A45C] text-[#E8D5A3]">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-tiro text-2xl font-bold text-[#FFF8E9]">
                    {lang === "hi" ? WEDDING_DATA.venue.nameHi : WEDDING_DATA.venue.nameEn}
                  </h3>
                  <p className="font-cinzel text-sm text-[#C9A45C] tracking-wide mt-0.5">
                    {WEDDING_DATA.venue.nameEn}
                  </p>
                  <p className="font-poppins text-sm text-[#F5EBD7]/90 mt-2 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#C9A45C] shrink-0 mt-1" />
                    <span>{lang === "hi" ? WEDDING_DATA.venue.addressHi : WEDDING_DATA.venue.addressEn}</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#C9A45C]/20 flex flex-col sm:flex-row gap-3">
                <a
                  href={WEDDING_DATA.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C9A45C] via-[#E8D5A3] to-[#C9A45C] text-[#2B0510] font-cinzel font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{lang === "hi" ? "Google Maps दिशा-निर्देश" : "Get Google Maps Directions"}</span>
                </a>
              </div>

              {/* Host Contact numbers */}
              <div className="p-4 rounded-xl bg-[#26040E]/80 border border-[#C9A45C]/30">
                <span className="text-xs font-cinzel text-[#C9A45C] uppercase tracking-wider block mb-2">
                  {lang === "hi" ? "संपर्क सूत्र (Host Contacts)" : "Host Contacts"}
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  {WEDDING_DATA.contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="px-3.5 py-1.5 rounded-full bg-[#5B1020] border border-[#C9A45C]/40 text-xs text-[#FFF8E9] flex items-center gap-2 hover:border-[#C9A45C]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
                      <span>+91 {phone}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Maps Embed Frame */}
            <div className="rounded-3xl overflow-hidden border-2 border-[#C9A45C]/60 shadow-2xl h-[360px] bg-[#22040C]">
              <iframe
                title="Swagat Marriage Garden Sironj Map"
                src={WEDDING_DATA.venue.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAMILY INVITATION & ESTABLISHMENTS */}
      <section id="family" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
            {lang === "hi" ? "स्नेही स्वजन एवं परिवार" : "With Family Blessings"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-tiro font-bold text-[#FFF8E9] mt-2">
            {lang === "hi" ? "परिवारजन" : "Our Beloved Families"}
          </h2>
          <RoyalMandalaDivider className="w-48 my-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* प्रेषक & विनयावनत */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#380816] to-[#25040D] border border-[#C9A45C]/50 shadow-lg">
            <h3 className="font-tiro text-xl font-bold text-[#E8D5A3] border-b border-[#C9A45C]/30 pb-2 mb-3">
              {lang === "hi" ? "॥ प्रेषक ॥" : "|| Host (Presitter) ||"}
            </h3>
            <p className="font-tiro text-base font-semibold text-[#FFF8E9]">
              {lang === "hi" ? WEDDING_DATA.contact.presitterHi : WEDDING_DATA.contact.presitterEn}
            </p>
            <p className="font-tiro text-xs text-[#E8D5A3]/80 mt-1">
              {lang === "hi" ? WEDDING_DATA.contact.addressHi : WEDDING_DATA.contact.addressEn}
            </p>
            <div className="mt-3 text-xs text-[#F5EBD7] space-y-1">
              <p>Mo.: {WEDDING_DATA.contact.phones.join(", ")}</p>
            </div>

            <h4 className="font-tiro text-lg font-bold text-[#E8D5A3] border-b border-[#C9A45C]/30 pb-2 mt-6 mb-3">
              {lang === "hi" ? "॥ विनयावनत ॥" : "|| Seekers of Blessings ||"}
            </h4>
            <p className="font-tiro text-sm text-[#FFF8E9]">
              {lang === "hi" ? WEDDING_DATA.family.vinayawanat.membersHi[0] : WEDDING_DATA.family.vinayawanat.membersEn[0]}
            </p>
          </div>

          {/* मातृकुल (Updated with स्व. श्री गिरिराज जी) */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#380816] to-[#25040D] border border-[#C9A45C]/50 shadow-lg">
            <h3 className="font-tiro text-xl font-bold text-[#E8D5A3] border-b border-[#C9A45C]/30 pb-2 mb-1">
              {lang === "hi" ? "॥ मातृकुल ॥" : "|| Maternal Family (Matrikul) ||"}
            </h3>
            <p className="font-tiro text-xs text-[#C9A45C] mb-3">
              {lang === "hi" ? WEDDING_DATA.family.matrikul.subtitleHi : WEDDING_DATA.family.matrikul.subtitleEn}
            </p>
            <ul className="space-y-1.5 font-tiro text-xs sm:text-sm text-[#FFF8E9]">
              {(lang === "hi" ? WEDDING_DATA.family.matrikul.members : WEDDING_DATA.family.matrikul.membersEn).map((member, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#C9A45C] text-xs">✦</span>
                  <span>{member}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* कुल आधार */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#380816] to-[#25040D] border border-[#C9A45C]/50 shadow-lg">
            <h3 className="font-tiro text-xl font-bold text-[#E8D5A3] border-b border-[#C9A45C]/30 pb-2 mb-1">
              {lang === "hi" ? "॥ कुल आधार ॥" : "|| Pillars of the Family ||"}
            </h3>
            <p className="font-tiro text-xs text-[#C9A45C] mb-3">
              {lang === "hi" ? WEDDING_DATA.family.kulAadhar.subtitleHi : WEDDING_DATA.family.kulAadhar.subtitleEn}
            </p>
            <div className="space-y-1 font-tiro text-xs text-[#FFF8E9] max-h-48 overflow-y-auto pr-2">
              {(lang === "hi" ? WEDDING_DATA.family.kulAadhar.members : WEDDING_DATA.family.kulAadhar.membersEn).map((member, i) => (
                <p key={i}>• {member}</p>
              ))}
            </div>
          </div>

          {/* कुल श्रृंगार */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#380816] to-[#25040D] border border-[#C9A45C]/50 shadow-lg">
            <h3 className="font-tiro text-xl font-bold text-[#E8D5A3] border-b border-[#C9A45C]/30 pb-2 mb-3">
              {lang === "hi" ? "॥ कुल श्रृंगार ॥" : "|| Pride of Family ||"}
            </h3>
            <ul className="space-y-1.5 font-tiro text-xs sm:text-sm text-[#FFF8E9]">
              {(lang === "hi" ? WEDDING_DATA.family.kulShringar.members : WEDDING_DATA.family.kulShringar.membersEn).map((member, i) => (
                <li key={i}>• {member}</li>
              ))}
            </ul>
          </div>

          {/* बाल विनय */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#380816] to-[#25040D] border border-[#C9A45C]/50 shadow-lg">
            <h3 className="font-tiro text-xl font-bold text-[#E8D5A3] border-b border-[#C9A45C]/30 pb-2 mb-3">
              {lang === "hi" ? "॥ बाल विनय ॥" : "|| Bal Vinay ||"}
            </h3>
            <p className="font-tiro text-sm text-[#FFF8E9] leading-relaxed">
              {(lang === "hi" ? WEDDING_DATA.family.balVinay.members : WEDDING_DATA.family.balVinay.membersEn).join(", ")}
            </p>
          </div>

          {/* पारिवारिक प्रतिष्ठान */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#380816] to-[#25040D] border border-[#C9A45C]/50 shadow-lg">
            <h3 className="font-tiro text-xl font-bold text-[#E8D5A3] border-b border-[#C9A45C]/30 pb-2 mb-3">
              {lang === "hi" ? "॥ प्रतिष्ठान ॥" : "|| Family Establishments ||"}
            </h3>
            <ul className="space-y-2 font-tiro text-xs sm:text-sm text-[#FFF8E9]">
              {WEDDING_DATA.contact.establishments.map((est, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Store className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">{lang === "hi" ? est.nameHi : est.nameEn}</span>
                    <span className="text-[11px] text-[#E8D5A3]/75">{lang === "hi" ? est.locationHi : est.locationEn}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 9: WHATSAPP SHARE & RSVP */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#2B0510] via-[#350714] to-[#20030A]">
        <WhatsAppShare
          shareMessage={lang === "hi" ? WEDDING_DATA.whatsappShare.defaultMessageHi : WEDDING_DATA.whatsappShare.defaultMessageEn}
          language={lang}
        />
      </section>

      {/* SECTION 10: CLOSING BLESSING & ROYAL FOOTER */}
      <footer className="py-14 px-4 bg-[#1A0207] border-t border-[#C9A45C]/30 text-center">
        <div className="max-w-2xl mx-auto">
          <GaneshaIcon className="w-16 h-16 mx-auto mb-3 opacity-90" />

          <p className="font-tiro text-lg sm:text-xl font-bold text-[#FFF8E9]">
            {lang === "hi"
              ? "आपकी गरिमामयी उपस्थिति हमारे लिए सौभाग्य की बात होगी।"
              : "Your gracious presence and blessings will be our greatest honour."}
          </p>

          <h3 className="font-cormorant text-2xl sm:text-3xl font-bold gold-gradient-text mt-3">
            Kritarth & Palak
          </h3>
          <p className="font-tiro text-sm text-[#E8D5A3] mt-1">
            {lang === "hi" ? "कृतार्थ संग पलक" : "Kritarth weds Palak"}
          </p>

          <RoyalMandalaDivider className="w-40 my-4" />

          <p className="text-xs text-[#E8D5A3]/70 font-poppins">
            {lang === "hi"
              ? "विवाह तिथि: 21 नवम्बर 2026 • स्वागत मैरिज गार्डन, सिरोंज (विदिशा, म.प्र.)"
              : "Wedding Date: 21 November 2026 • Swagat Marriage Garden, Sironj (M.P.)"}
          </p>
          <p className="text-[11px] text-[#E8D5A3]/40 font-poppins mt-2">
            {lang === "hi" ? "सोनी परिवार का स्नेहित आमंत्रण" : "Cordially invited by Soni Family"}
          </p>
        </div>
      </footer>
    </main>
  );
}
