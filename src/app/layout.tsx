import type { Metadata } from "next";
import { Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import MotionWrapper from "@/components/MotionWrapper";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tuan Nguyen | Backend Software Engineer & Engineering Roadmap",
  description: "Portfolio of Tuan Nguyen, Backend Software Engineer, and a comprehensive roadmap for FAANG-level software engineering mastery.",
  keywords: ["Backend Engineer", "Software Engineer", "Engineering Roadmap", "Tuan Nguyen"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${caveat.variable} ${jetbrainsMono.variable}`}>
      <body>
        <MotionWrapper>
          {children}
        </MotionWrapper>
      </body>
    </html>
  );
}
