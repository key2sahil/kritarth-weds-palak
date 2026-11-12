import React from "react";

export function GaneshaIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Crown / Mukut */}
      <path
        d="M50 8L57 24H43L50 8Z"
        fill="#C9A45C"
        stroke="#E8D5A3"
        strokeWidth="1.5"
      />
      <circle cx="50" cy="8" r="2.5" fill="#FFF8E9" />
      <path
        d="M40 24C40 24 45 28 50 28C55 28 60 24 60 24"
        stroke="#C9A45C"
        strokeWidth="2"
      />
      
      {/* Tilak / Trishul */}
      <path
        d="M50 20V38"
        stroke="#E8D5A3"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="50" cy="27" r="1.5" fill="#5B1020" />
      <path
        d="M46 25C46 32 54 32 54 25"
        stroke="#E8D5A3"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Ears */}
      <path
        d="M38 28C28 26 22 36 28 48C34 58 40 54 40 54"
        stroke="#C9A45C"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="rgba(201,164,92,0.12)"
      />
      <path
        d="M62 28C72 26 78 36 72 48C66 58 60 54 60 54"
        stroke="#C9A45C"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="rgba(201,164,92,0.12)"
      />

      {/* Trunk (Sond) */}
      <path
        d="M47 38C47 50 44 64 53 72C61 78 69 70 65 62C62 56 55 58 55 58"
        stroke="#C9A45C"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Tusk */}
      <path d="M42 46L37 49" stroke="#FFF8E9" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Modak */}
      <ellipse cx="66" cy="62" rx="4" ry="3.5" fill="#E8D5A3" stroke="#C9A45C" strokeWidth="1" />
      
      {/* Om / Aura circles */}
      <circle cx="50" cy="50" r="46" stroke="#C9A45C" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
    </svg>
  );
}

export function KalashIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Coconut & Mango Leaves */}
      <path d="M40 10C35 18 30 25 40 32C50 25 45 18 40 10Z" fill="#C9A45C" />
      <path d="M26 20C32 23 37 28 37 32C30 32 24 26 26 20Z" fill="#164B38" />
      <path d="M54 20C48 23 43 28 43 32C50 32 56 26 54 20Z" fill="#164B38" />
      
      {/* Pot Neck & Rim */}
      <path d="M30 32H50L53 38H27L30 32Z" fill="#E8D5A3" stroke="#C9A45C" strokeWidth="1.5" />
      
      {/* Pot Body */}
      <path
        d="M27 38C20 48 22 66 40 68C58 66 60 48 53 38H27Z"
        fill="rgba(201,164,92,0.25)"
        stroke="#C9A45C"
        strokeWidth="2"
      />
      
      {/* Swastik on Pot */}
      <path d="M40 45V59M33 52H47M33 46H40M40 59H47M33 52V58M47 46V52" stroke="#5B1020" strokeWidth="1.8" strokeLinecap="round" />
      
      {/* Pot Base */}
      <path d="M33 68H47V71H33V68Z" fill="#C9A45C" />
    </svg>
  );
}

export function DiyaIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Flame */}
      <path
        d="M30 8C30 8 23 20 23 26C23 30 26 33 30 33C34 33 37 30 37 26C37 20 30 8 30 8Z"
        fill="#FFD23F"
      />
      <path
        d="M30 14C30 14 26 21 26 25C26 27.5 28 29.5 30 29.5C32 29.5 34 27.5 34 25C34 21 30 14 30 14Z"
        fill="#FF5722"
      />
      
      {/* Base of Diya */}
      <path
        d="M10 32C10 32 15 48 30 48C45 48 50 32 50 32C42 36 18 36 10 32Z"
        fill="#C9A45C"
        stroke="#E8D5A3"
        strokeWidth="1.5"
      />
      <ellipse cx="30" cy="33" rx="20" ry="4" fill="#5B1020" />
      <path d="M22 48L20 52H40L38 48" fill="#C9A45C" stroke="#E8D5A3" strokeWidth="1" />
    </svg>
  );
}

export function RoyalMandalaDivider({ className = "w-full max-w-md mx-auto my-6" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center space-x-3 text-[#C9A45C] ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-[#E8D5A3]" />
      <div className="flex items-center space-x-1">
        <span className="text-xs">✦</span>
        <svg className="w-5 h-5 text-[#C9A45C]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2L14 8L20 10L15 14L17 21L12 17L7 21L9 14L4 10L10 8L12 2Z" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
        </svg>
        <span className="text-xs">✦</span>
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C9A45C] to-[#E8D5A3]" />
    </div>
  );
}

