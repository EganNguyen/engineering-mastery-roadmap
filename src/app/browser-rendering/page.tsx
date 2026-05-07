import type { Metadata } from "next";
import BrowserRenderingContent from "./content";

export const metadata: Metadata = {
  title: "Browser & Rendering Deep Dive | Engineering Mastery",
  description: "Senior-level deep dive into browser architecture, rendering path, and event loop for FAANG interviews.",
};

export default function BrowserRenderingPage() {
  return <BrowserRenderingContent />;
}
