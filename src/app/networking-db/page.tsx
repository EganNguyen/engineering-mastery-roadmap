import Link from "next/link";
import type { Metadata } from "next";
import NetworkingDBContent from "./content";

export const metadata: Metadata = {
  title: "Networking & DB Internals | Engineering Mastery",
  description: "Senior-level deep dive into Networking and Database Internals topics for FAANG interviews.",
};

export default function NetworkingDBPage() {
  return <NetworkingDBContent />;
}
