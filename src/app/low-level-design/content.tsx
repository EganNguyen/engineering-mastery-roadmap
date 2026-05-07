"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { 
  solidPrinciples, 
  designPatterns, 
  lldProblems, 
  interviewFramework 
} from "@/data/lld-data";
import SOLIDCard from "@/components/lld/SOLIDCard";
import LLDAccordion from "@/components/lld/LLDAccordion";
import ApproachStep from "@/components/lld/ApproachStep";

const tabs = [
  { id: "solid", label: "SOLID + OOP" },
  { id: "patterns", label: "Design Patterns" },
  { id: "problems", label: "LLD Problems" },
  { id: "approach", label: "Interview Approach" }
];

export default function LLDDeepDiveContent() {
  const [activeTab, setActiveTab] = useState("solid");

  return (
    <main className="pb-20">
      <div className="mb-6">
        <Link href="/" className="text-accent font-medium inline-flex items-center gap-2 hover:underline group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Roadmap & Portfolio
        </Link>
      </div>

      <ScrollAnimation>
        <header className="portfolio-header">
          <div className="eyebrow mb-2">Systems Mastery</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Low-Level Design (LLD)</h1>
          <p className="text-lg text-text-secondary max-w-3xl">
            Master the art of writing clean, extensible, and maintainable code. 
            Focused on SOLID principles, design patterns, and classic interview problems.
          </p>
        </header>
      </ScrollAnimation>

      {/* Tab Selection */}
      <section className="mb-12">
        <div className="phase-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`ptab ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Active Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "solid" && (
            <div className="space-y-8">
              <div className="tip-box">
                <strong>What FAANG tests:</strong> They don't ask "name the SOLID principles." They give you a bad class design and ask you to fix it — or ask you to extend a feature and penalise you for touching code that should be closed.
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solidPrinciples.map((p, i) => (
                  <SOLIDCard key={i} principle={p} />
                ))}
              </div>
            </div>
          )}

          {activeTab === "patterns" && (
            <div className="space-y-8">
              <div className="tip-box">
                <strong>Strategy:</strong> Know each pattern as a solution to a named problem. Focus on the trade-offs: when does a pattern add too much complexity?
              </div>
              <div className="topic-list">
                {designPatterns.map((p, i) => (
                  <LLDAccordion 
                    key={i} 
                    badge={p.category} 
                    title={p.title} 
                    tags={p.tags}
                    ask={p.ask}
                  >
                    <div className="space-y-4">
                      {p.description.map((desc, di) => (
                        <div key={di} className="flex gap-3 items-start">
                          <div className="w-5 h-5 rounded-full bg-background-secondary border border-border-tertiary flex items-center justify-center text-[10px] text-text-secondary shrink-0 mt-0.5">
                            {di + 1}
                          </div>
                          <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
                        </div>
                      ))}
                    </div>
                  </LLDAccordion>
                ))}
              </div>
            </div>
          )}

          {activeTab === "problems" && (
            <div className="space-y-8">
              <div className="tip-box">
                <strong>Practice Guide:</strong> These 10 problems cover ~90% of what appears in actual LLD rounds. Practise designing the class diagram first, then coding the core methods.
              </div>
              <div className="topic-list">
                {lldProblems.map((p, i) => (
                  <LLDAccordion 
                    key={i} 
                    badge={p.frequency} 
                    badgeClass={p.frequency === "High" ? "fh" : "fm"}
                    title={p.title} 
                    tags={p.tags}
                    ask={p.ask}
                  >
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {p.body}
                    </p>
                  </LLDAccordion>
                ))}
              </div>
            </div>
          )}

          {activeTab === "approach" && (
            <div className="space-y-8">
              <div className="tip-box">
                <strong>Framework:</strong> Most candidates jump to coding within 2 minutes. This is wrong. The interviewer is watching how you think, not just what you produce.
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {interviewFramework.map((step, i) => (
                  <ApproachStep key={i} step={step} />
                ))}
                
                <div className="card bg-orange-500/5 border-orange-500/20">
                  <div className="text-sm font-bold text-orange-500 mb-4 uppercase tracking-widest">Anti-patterns to avoid</div>
                  <ul className="text-xs space-y-3 text-text-secondary list-disc pl-4">
                    <li>Anemic models (classes with no behaviour — just getters/setters)</li>
                    <li>God classes (one class doing everything)</li>
                    <li>Inheritance where composition fits</li>
                    <li>Hardcoded enums that block extension</li>
                    <li>Missing interfaces — depending on concretions</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
