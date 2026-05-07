import type { Metadata } from "next";
import LLDDeepDiveContent from "./content";

export const metadata: Metadata = {
  title: "Low-Level Design (LLD) Deep Dive | Engineering Mastery",
  description: "Master SOLID principles, design patterns, and classic LLD problems for FAANG interviews.",
};

export default function LLDDeepDivePage() {
  return <LLDDeepDiveContent />;
}
