import type { Metadata } from "next";
import FrontendPerformanceContent from "./content";

export const metadata: Metadata = {
  title: "Frontend Performance Deep Dive | Engineering Mastery",
  description: "Comprehensive guide to mastering frontend performance: metrics, loading strategies, rendering, and hydration for FAANG-scale applications.",
};

export default function FrontendPerformancePage() {
  return <FrontendPerformanceContent />;
}
