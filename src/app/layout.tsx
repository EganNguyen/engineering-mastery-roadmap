import type { Metadata } from "next";
import { Patrick_Hand, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import MotionWrapper from "@/components/MotionWrapper";

const patrickHand = Patrick_Hand({
  weight: "400",
  variable: "--font-patrick-hand",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tuan Nguyen | Software Engineer & Engineering Roadmap",
  description: "Portfolio of Tuan Nguyen, Software Engineer, and a comprehensive roadmap for FAANG-level software engineering mastery.",
  keywords: ["Software Engineer", "Engineering Roadmap", "Tuan Nguyen"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${patrickHand.variable} ${jetbrainsMono.variable}`}>
      <body>
        <MotionWrapper>
          {children}
        </MotionWrapper>
      </body>
    </html>
  );
}
