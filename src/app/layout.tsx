import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel, Rozha_One, Poppins, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-cinzel",
  display: "swap",
});

const rozha = Rozha_One({
  subsets: ["latin", "devanagari"],
  weight: ["400"],
  variable: "--font-rozha",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const tiro = Tiro_Devanagari_Hindi({
  subsets: ["latin", "devanagari"],
  weight: ["400"],
  variable: "--font-tiro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kritarth & Palak | Royal Wedding Invitation | 21 Nov 2026",
  description:
    "॥ श्री गणेशाय नमः ॥ With the blessings of our ancestors and family, join us to celebrate the wedding of Kritarth & Palak on 21 November 2026 at Swagat Marriage Garden, Sironj.",
  keywords: [
    "Kritarth and Palak Wedding",
    "Kritarth weds Palak",
    "Wedding Invitation",
    "Sironj Wedding",
    "Swagat Marriage Garden",
    "Soni Parivar Nimantran",
  ],
  authors: [{ name: "Soni Family, Sironj" }],
  openGraph: {
    title: "Kritarth & Palak | Royal Wedding Invitation",
    description: "॥ मंगलम् भगवान विष्णुः ॥ You are cordially invited to celebrate the royal wedding of Kritarth & Palak.",
    type: "website",
    locale: "hi_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kritarth & Palak | Royal Wedding Invitation",
    description: "Join us in celebrating the holy union of Kritarth & Palak on 21st November 2026 in Sironj.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hi"
      className={`${cormorant.variable} ${cinzel.variable} ${rozha.variable} ${poppins.variable} ${tiro.variable} scroll-smooth`}
    >
      <body className="bg-[#2B0510] text-[#FFF8E9] font-poppins selection:bg-[#C9A45C] selection:text-[#2B0510] min-h-screen antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
