"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import LLDAccordion from "@/components/lld/LLDAccordion";
import DeepDiveCard from "@/components/DeepDiveCard";
import { 
  cloudComputeTopics, 
  cloudReliabilityTopics, 
  cloudNetworkingTopics,
  cloudDataSections,
  cloudIacTopics,
  cloudCostCards
} from "@/data/cloud-architecture-data";

type Phase = "compute" | "reliability" | "networking" | "data" | "iac" | "cost";

export default function CloudArchitectureContent() {
  const [activePhase, setActivePhase] = useState<Phase>("compute");

  const phases: { id: Phase; label: string }[] = [
    { id: "compute", label: "Compute" },
    { id: "reliability", label: "Reliability" },
    { id: "networking", label: "Networking" },
    { id: "data", label: "Data & Storage" },
    { id: "iac", label: "IaC & DevOps" },
    { id: "cost", label: "Cost & Trade-offs" },
  ];

  return (
    <main className="pb-20">
      <div className="mb-6">
        <Link href="/#cloud-arch" className="text-accent font-medium inline-flex items-center gap-2 hover:underline group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
          Back to Roadmap
        </Link>
      </div>

      <ScrollAnimation>
        <header className="portfolio-header">
          <div className="eyebrow mb-2">Systems Mastery</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Cloud Architecture</h1>
          <p className="text-lg text-text-secondary max-w-3xl">
            Master the cloud-native patterns expected at FAANG scale: from Kubernetes orchestration and multi-region reliability to serverless tradeoffs and cost engineering.
          </p>
        </header>
      </ScrollAnimation>

      <div className="legend mb-12">
        <div className="flex flex-wrap gap-6 items-center">
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-secondary">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80]"></span> High Frequency
          </span>
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-secondary">
            <span className="w-2.5 h-2.5 rounded-full bg-[#60A5FA]"></span> Medium Frequency
          </span>
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-secondary">
            <span className="w-2.5 h-2.5 rounded-full bg-[#94A3B8]"></span> Occasional / Senior+
          </span>
        </div>
      </div>

      <div className="phase-tabs mb-10 overflow-x-auto pb-2">
        {phases.map((phase) => (
          <button
            key={phase.id}
            onClick={() => setActivePhase(phase.id)}
            className={`ptab ${activePhase === phase.id ? "active" : ""}`}
          >
            {phase.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {activePhase === "compute" && (
            <section className="space-y-6">
              <div className="tip-box mb-8">
                <strong>What FAANG tests:</strong> Not which cloud provider you prefer — but whether you can reason about the tradeoffs between compute models under different traffic patterns, latency constraints, and operational costs.
              </div>
              <div className="space-y-4">
                {cloudComputeTopics.map((topic) => (
                  <LLDAccordion
                    key={topic.id}
                    title={topic.title}
                    frequency={topic.frequency}
                    steps={topic.steps}
                    tags={topic.tags}
                    prompt={topic.prompt}
                  />
                ))}
              </div>
            </section>
          )}

          {activePhase === "reliability" && (
            <section className="space-y-6">
              <div className="tip-box mb-8">
                <strong>What FAANG tests:</strong> Given a system design, interviewers ask "what happens when X fails?" You need to enumerate failure modes and recovery strategies — not just claim "it's highly available."
              </div>
              <div className="space-y-4">
                {cloudReliabilityTopics.map((topic) => (
                  <LLDAccordion
                    key={topic.id}
                    title={topic.title}
                    frequency={topic.frequency}
                    steps={topic.steps}
                    tags={topic.tags}
                    prompt={topic.prompt}
                  />
                ))}
              </div>
            </section>
          )}

          {activePhase === "networking" && (
            <section className="space-y-6">
              <div className="tip-box mb-8">
                <strong>What FAANG tests:</strong> Cloud networking appears in every system design round — as the glue between components. Know how traffic flows from user to service and back, and what can fail at each hop.
              </div>
              <div className="space-y-4">
                {cloudNetworkingTopics.map((topic) => (
                  <LLDAccordion
                    key={topic.id}
                    title={topic.title}
                    frequency={topic.frequency}
                    steps={topic.steps}
                    tags={topic.tags}
                    prompt={topic.prompt}
                  />
                ))}
              </div>
            </section>
          )}

          {activePhase === "data" && (
            <section className="space-y-12">
              <div className="tip-box">
                <strong>What FAANG tests:</strong> Storage selection is a core system design skill. Interviewers watch whether you default to "use Postgres" for everything or match the access pattern to the right store.
              </div>
              {cloudDataSections.map((section) => (
                <div key={section.id} className="space-y-6">
                  <h3 className="text-xl font-bold text-text-primary flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                    {section.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.cards.map((card) => (
                      <DeepDiveCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        frequency={card.badge as any}
                        tags={[]}
                        role={card.body}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}

          {activePhase === "iac" && (
            <section className="space-y-6">
              <div className="tip-box mb-8">
                <strong>What FAANG tests:</strong> You're expected to know IaC at the conceptual level — why it exists, what problems it solves, and how CI/CD pipelines gate deployments.
              </div>
              <div className="space-y-4">
                {cloudIacTopics.map((topic) => (
                  <LLDAccordion
                    key={topic.id}
                    title={topic.title}
                    frequency={topic.frequency}
                    steps={topic.steps}
                    tags={topic.tags}
                    prompt={topic.prompt}
                  />
                ))}
              </div>
            </section>
          )}

          {activePhase === "cost" && (
            <section className="space-y-12">
              <div className="tip-box">
                <strong>What FAANG tests:</strong> At senior+ level, interviewers explicitly ask "what would this cost at scale?" and "how would you optimise it?" Cost awareness is a signal of production experience.
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cloudCostCards.map((card) => (
                  <DeepDiveCard
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    frequency={card.badge as any}
                    tags={[]}
                    role={card.body}
                  />
                ))}
              </div>
              <div className="card p-8 border border-border-tertiary rounded-xl bg-surface/50">
                <h3 className="text-xl font-bold mb-4 text-primary">Interview Signal</h3>
                <p className="text-text-secondary leading-relaxed">
                  How to demonstrate cost awareness: After proposing a design, volunteer: <br/>
                  <span className="text-text-primary italic font-medium block mt-2">
                    "At 10M DAU this generates roughly X GB/day of egress — that's about $Y/month. I'd use CloudFront to cache static assets and reduce origin egress by ~80%."
                  </span>
                  <br/>
                  You don't need exact figures — order-of-magnitude estimates with clear reasoning are the signal.
                </p>
              </div>
            </section>
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
