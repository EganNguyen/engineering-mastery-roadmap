import type { Metadata } from "next";
import DSAPatternsContent from "./content";

export const metadata: Metadata = {
  title: "DSA & Patterns Deep Dive | Engineering Mastery",
  description: "Comprehensive FAANG study plan for Data Structures, Algorithms, and coding patterns.",
};

export default function DSAPatternsPage() {
  return <DSAPatternsContent />;
}
