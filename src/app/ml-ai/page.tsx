import type { Metadata } from "next";
import MLAIFundamentalsContent from "./content";

export const metadata: Metadata = {
  title: "ML & AI Fundamentals for SWEs | Engineering Mastery",
  description: "Senior-level deep dive into ML/AI fundamentals, RAG architecture, LLM literacy, and vector search for software engineering interviews.",
};

export default function MLAIPage() {
  return <MLAIFundamentalsContent />;
}
