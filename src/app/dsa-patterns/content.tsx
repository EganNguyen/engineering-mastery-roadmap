"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { dsaPhases } from "@/data/dsa-data";
import TopicRow from "@/components/dsa/TopicRow";
import PhaseTabs from "@/components/dsa/PhaseTabs";

export default function DSAPatternsContent() {
  const [activePhase, setActivePhase] = useState(0);

  const currentPhase = dsaPhases[activePhase];

  return (
    <main className="pb-20">
      <div className="mb-6">
        <Link href="/#dsa-patterns" className="text-accent font-medium inline-flex items-center gap-2 hover:underline group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Roadmap
        </Link>
      </div>

      <ScrollAnimation>
        <header className="portfolio-header">
          <div className="eyebrow mb-2">Technical Mastery</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">DSA & Patterns</h1>
          <p className="text-lg text-text-secondary max-w-3xl">
            A systematic, 14-week study plan to master Data Structures, Algorithms, and the most common coding patterns tested at FAANG.
          </p>
        </header>
      </ScrollAnimation>

      {/* Phase Selection */}
      <section className="mb-8">
        <PhaseTabs 
          phases={dsaPhases} 
          activeIdx={activePhase} 
          onTabChange={setActivePhase} 
        />
      </section>

      {/* Active Phase Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="phase-meta">
            <span className="meta-pill">{currentPhase.subtitle}</span>
            <span className="meta-pill">{currentPhase.weeks}</span>
            <span className="meta-pill">{currentPhase.goal}</span>
          </div>

          <div className="tip-box">
            <strong>Strategy:</strong> {currentPhase.strategy}
          </div>

          <div className="topic-list">
            {currentPhase.topics.map((topic, i) => (
              <TopicRow 
                key={i}
                topic={topic}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
