import type { Metadata } from "next";
import DeadlockContent from "./content";

export const metadata: Metadata = {
  title: "Deadlock Deep Dive | Engineering Mastery",
  description: "Senior-level deep dive into Deadlock conditions, prevention, avoidance, and FAANG interview patterns.",
};

export default function DeadlockPage() {
  return <DeadlockContent />;
}
