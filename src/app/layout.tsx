import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MotionWrapper from "@/components/MotionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <MotionWrapper>
          {children}
        </MotionWrapper>
      </body>
    </html>
  );
}
