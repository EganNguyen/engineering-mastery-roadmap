import type { Metadata } from "next";
import PerformanceEngineeringContent from "./content";

export const metadata: Metadata = {
  title: "Performance Engineering Deep Dive | Engineering Mastery",
  description: "Senior-level deep dive into latency, profiling, I/O optimization, and database performance for FAANG systems.",
};

export default function PerformanceEngineeringPage() {
  return <PerformanceEngineeringContent />;
}
