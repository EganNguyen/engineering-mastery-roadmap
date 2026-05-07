import type { Metadata } from "next";
import SecurityContent from "./content";

export const metadata: Metadata = {
  title: "Security Deep Dive | Engineering Mastery",
  description: "Senior-level deep dive into authentication, authorization, injection attacks, and transport security for FAANG interviews.",
};

export default function SecurityPage() {
  return <SecurityContent />;
}
