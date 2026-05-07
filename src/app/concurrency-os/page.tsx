import Link from "next/link";
import type { Metadata } from "next";
import ConcurrencyOSContent from "./content";

export const metadata: Metadata = {
  title: "Concurrency & OS Deep Dive | Engineering Mastery",
  description: "Senior-level deep dive into Concurrency and Operating Systems topics for FAANG interviews.",
};

export default function ConcurrencyOSPage() {
  return <ConcurrencyOSContent />;
}
