import type { Metadata } from "next";
import JavaScriptTypeScriptContent from "./content";

export const metadata: Metadata = {
  title: "JavaScript & TypeScript Depth | Engineering Mastery",
  description: "Senior-level deep dive into JavaScript engine internals, async patterns, memory management, and advanced TypeScript for FAANG systems.",
};

export default function JavaScriptTypeScriptPage() {
  return <JavaScriptTypeScriptContent />;
}
