import React from "react";

// Royal Indian Groom Sherwani & Pagdi / Safa Royal Silhouette
export function GroomRoyalMotif({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Royal Kalangi / Feather on Turban */}
      <path d="M50 10C51 4 47 0 46 2C45 4 47 7 48 12" stroke="#E8D5A3" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="50" cy="14" r="2.5" fill="#FFD700" />
      
      {/* Rajasthani Pagdi / Safa Turban */}
      <path
        d="M28 26C32 16 68 16 72 26C76 32 74 38 68 40C60 42 40 42 32 40C26 38 24 32 28 26Z"
        fill="#5B1020"
        stroke="#C9A45C"
        strokeWidth="2"
      />
      {/* Turban Folds / Swirls */}
      <path d="M30 26C42 22 58 22 70 26" stroke="#E8D5A3" strokeWidth="1.5" />
      <path d="M32 32C44 28 56 28 68 32" stroke="#C9A45C" strokeWidth="1.5" />
      <path d="M36 38C45 35 55 35 64 38" stroke="#E8D5A3" strokeWidth="1.5" />

      {/* Royal Tilak on Face */}
      <path d="M50 42V48" stroke="#C9A45C" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="45" r="1" fill="#FFD700" />

      {/* Royal Sherwani Neck & Collar */}
      <path
        d="M38 52H62L68 84H32L38 52Z"
        fill="#3B0917"
        stroke="#C9A45C"
        strokeWidth="2"
      />
      {/* Nehru Collar */}
      <path d="M42 52L50 58L58 52" stroke="#E8D5A3" strokeWidth="2" strokeLinecap="round" />
      {/* Sherwani Button Placket */}
      <path d="M50 58V84" stroke="#C9A45C" strokeWidth="2" />
      <circle cx="50" cy="64" r="1.5" fill="#FFD700" />
      <circle cx="50" cy="71" r="1.5" fill="#FFD700" />
      <circle cx="50" cy="78" r="1.5" fill="#FFD700" />
      {/* Royal Pearl Mala / Necklace */}
      <path d="M42 60C45 68 55 68 58 60" stroke="#FFF8E9" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3" />
    </svg>
  );
}

// Royal Indian Bride Chunari & Maang Tikka Silhouette
export function BrideRoyalMotif({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Royal Odhani / Chunari Arch over Head */}
      <path
        d="M24 82C24 45 32 18 50 18C68 18 76 45 76 82"
        stroke="#C9A45C"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="rgba(91, 16, 32, 0.4)"
      />
      {/* Chunari Gota Patti Border Pattern */}
      <path
        d="M28 82C28 48 35 22 50 22C65 22 72 48 72 82"
        stroke="#E8D5A3"
        strokeWidth="1.2"
        strokeDasharray="2 3"
      />

      {/* Maang Tikka Jewelry */}
      <path d="M50 22V36" stroke="#FFD700" strokeWidth="1.8" />
      <circle cx="50" cy="38" r="3.5" fill="#5B1020" stroke="#FFD700" strokeWidth="1.5" />
      <circle cx="50" cy="38" r="1.5" fill="#FFF8E9" />

      {/* Traditional Bindi */}
      <circle cx="50" cy="46" r="2" fill="#E8D5A3" />

      {/* Royal Nath (Nose Ring) */}
      <circle cx="44" cy="52" r="3" stroke="#FFD700" strokeWidth="1.5" />
      <path d="M41 52C36 50 32 46 32 44" stroke="#E8D5A3" strokeWidth="1" strokeDasharray="1 2" />

      {/* Bridal Necklace (Aad / Haar) */}
      <path
        d="M38 66C42 74 58 74 62 66"
        stroke="#FFD700"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M41 72C45 78 55 78 59 72"
        stroke="#C9A45C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
      
      {/* Bridal Choli / Lehnga Shoulder neckline */}
      <path d="M32 82C36 74 42 70 50 70C58 70 64 74 68 82" stroke="#C9A45C" strokeWidth="2" fill="#5B1020" />
    </svg>
  );
}
