"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";

type TabId = "coffman" | "graph" | "strategy" | "code" | "interview";

export default function DeadlockContent() {
  const [activeTab, setActiveTab] = useState<TabId>("coffman");

  const tabs: { id: TabId; label: string }[] = [
    { id: "coffman", label: "4 Conditions" },
    { id: "graph", label: "Resource Graph" },
    { id: "strategy", label: "Strategies" },
    { id: "code", label: "Code Patterns" },
    { id: "interview", label: "Interview Q&A" },
  ];

  return (
    <main className="pb-20">
      <div className="mb-6">
        <Link href="/concurrency-os" className="text-accent font-medium inline-flex items-center gap-2 hover:underline group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Concurrency & OS
        </Link>
      </div>

      <ScrollAnimation>
        <header className="portfolio-header">
          <div className="eyebrow mb-2">Systems Mastery</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Deadlock Deep Dive</h1>
          <p className="text-lg text-text-secondary max-w-3xl">
            A comprehensive guide to Coffman conditions, resource allocation graphs, and strategies for prevention, avoidance, and detection in high-scale systems.
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
          {activeTab === "coffman" && <CoffmanPanel />}
          {activeTab === "graph" && <GraphPanel />}
          {activeTab === "strategy" && <StrategyPanel />}
          {activeTab === "code" && <CodePanel />}
          {activeTab === "interview" && <InterviewPanel />}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

function CoffmanPanel() {
  const conditions = [
    {
      num: "1",
      title: "Mutual Exclusion",
      subtitle: "Exclusive ownership",
      content: "At least one resource is held in a non-shareable mode — only one thread can use it at a time.",
      fix: "Make resources shareable (e.g. read locks, immutable data, lock-free structures)."
    },
    {
      num: "2",
      title: "Hold and Wait",
      subtitle: "Partial allocation",
      content: "A thread holding at least one resource is waiting to acquire additional resources held by others.",
      fix: "Acquire all resources atomically at once, or release all held resources before requesting new ones."
    },
    {
      num: "3",
      title: "No Preemption",
      subtitle: "Voluntary release only",
      content: "Resources cannot be forcibly taken from a thread; they must be released voluntarily by the holder.",
      fix: "Allow preemption — if a thread can't acquire all resources, it must release what it holds and retry."
    },
    {
      num: "4",
      title: "Circular Wait",
      subtitle: "Cycle of dependency",
      content: "A circular chain exists where T1 waits for T2, T2 for T3, and Tn for T1.",
      fix: "Impose a global lock ordering — every thread must acquire resources in the same numeric or lexicographic order."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="tip-box">
        <strong>Fundamental Rule:</strong> All four conditions must hold simultaneously for a deadlock to occur. Breaking <em>any one</em> of these conditions makes deadlock mathematically impossible.
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {conditions.map((c, i) => (
          <div key={i} className="card p-6 flex flex-col h-full border border-border-tertiary rounded-xl bg-surface">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                {c.num}
              </div>
              <div className="text-lg font-bold text-text-primary">{c.title}</div>
            </div>
            
            <div className="text-[10px] font-bold uppercase tracking-widest text-accent mb-3">
              {c.subtitle}
            </div>
            
            <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">
              {c.content}
            </p>
            
            <div className="mt-auto pt-4 border-t border-border-tertiary">
              <div className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-2">How to Break It</div>
              <div className="text-xs text-primary font-medium italic">
                {c.fix}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-xl bg-background-secondary border border-border-tertiary text-center">
        <p className="text-sm">
          <strong className="text-text-primary">Memory Hook:</strong> <span className="text-accent italic">"Men Hold No Circles"</span> (<strong>M</strong>utual exclusion, <strong>H</strong>old and wait, <strong>N</strong>o preemption, <strong>C</strong>ircular wait)
        </p>
      </div>
    </div>
  );
}

function GraphPanel() {
  return (
    <div className="space-y-8">
      <div className="tip-box">
        <strong>Visualizing Deadlock:</strong> A Resource Allocation Graph (RAG) uses nodes to represent threads (circles) and resources (rectangles). Deadlock is identified by cycles in the graph.
      </div>

      <div className="card p-8 bg-surface border border-border-tertiary rounded-xl flex flex-col items-center">
        <svg width="100%" viewBox="0 0 640 320" className="max-w-2xl overflow-visible">
          <defs>
            <marker id="arr-allocated" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="#D97757" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
            <marker id="arr-waiting" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="#4A6D8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>

          {/* Nodes */}
          <g>
            <circle cx="140" cy="160" r="40" fill="rgba(217, 119, 87, 0.05)" stroke="var(--color-primary)" strokeWidth="2" />
            <text x="140" y="165" textAnchor="middle" fill="white" className="font-bold text-lg">T1</text>
          </g>
          <g>
            <circle cx="500" cy="160" r="40" fill="rgba(217, 119, 87, 0.05)" stroke="var(--color-primary)" strokeWidth="2" />
            <text x="500" y="165" textAnchor="middle" fill="white" className="font-bold text-lg">T2</text>
          </g>
          <g>
            <rect x="270" y="50" width="100" height="70" rx="12" fill="rgba(255, 255, 255, 0.02)" stroke="var(--color-border-tertiary)" strokeWidth="2" />
            <text x="320" y="90" textAnchor="middle" fill="white" className="font-bold text-lg">R1</text>
          </g>
          <g>
            <rect x="270" y="200" width="100" height="70" rx="12" fill="rgba(255, 255, 255, 0.02)" stroke="var(--color-border-tertiary)" strokeWidth="2" />
            <text x="320" y="240" textAnchor="middle" fill="white" className="font-bold text-lg">R2</text>
          </g>

          {/* R1 → T1 (Allocated) */}
          <path d="M270 85 L185 145" stroke="#D97757" strokeWidth="2" markerEnd="url(#arr-allocated)" fill="none" />
          {/* T1 → R2 (Waiting) */}
          <path d="M185 175 L270 235" stroke="#4A6D8C" strokeWidth="2" strokeDasharray="6,4" markerEnd="url(#arr-waiting)" fill="none" />
          {/* R2 → T2 (Allocated) */}
          <path d="M370 235 L455 175" stroke="#D97757" strokeWidth="2" markerEnd="url(#arr-allocated)" fill="none" />
          {/* T2 → R1 (Waiting) */}
          <path d="M455 145 L370 85" stroke="#4A6D8C" strokeWidth="2" strokeDasharray="6,4" markerEnd="url(#arr-waiting)" fill="none" />

          <text x="320" y="165" textAnchor="middle" fill="#D97757" className="font-bold text-sm uppercase tracking-widest animate-pulse">Cycle Detected</text>
        </svg>
        
        <div className="mt-8 flex gap-6 text-xs font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-text-primary">Allocated</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-secondary"></div>
            <span className="text-text-primary">Waiting</span>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-background-secondary border-l-4 border-primary">
        <p className="text-sm leading-relaxed text-text-secondary">
          <strong className="text-text-primary">The Rule:</strong> If the RAG has a cycle and each resource has only one instance, deadlock is guaranteed. If resources have multiple instances, a cycle is necessary but not sufficient (requires <span className="text-primary font-bold">Banker's Algorithm</span>).
        </p>
      </div>
    </div>
  );
}

function StrategyPanel() {
  const strategies = [
    {
      title: "Deadlock Prevention",
      badge: "Eliminate Condition",
      content: "Ensuring that at least one of the four Coffman conditions cannot hold.",
      items: [
        { label: "Lock Ordering", desc: "Acquire all locks in a predefined global order to break Circular Wait." },
        { label: "Hold and Wait", desc: "Require threads to request all resources at once or release all before new requests." },
        { label: "Preemption", desc: "If a thread cannot acquire a resource, it must release all held resources and restart." }
      ]
    },
    {
      title: "Deadlock Avoidance",
      badge: "Dynamic Check",
      content: "Analyzing each resource request to ensure the system remains in a 'safe state'.",
      items: [
        { label: "Banker's Algorithm", desc: "A simulation-based approach to check if a request could lead to a deadlock." },
        { label: "Resource Graphs", desc: "Dynamic monitoring of resource allocation to avoid entering unsafe states." }
      ]
    },
    {
      title: "Deadlock Detection",
      badge: "Fix After Fact",
      content: "Allowing deadlocks to occur and then recovering using detection algorithms.",
      items: [
        { label: "DFS cycle detection", desc: "Periodically scanning the resource graph for cycles (e.g., in databases)." },
        { label: "Recovery", desc: "Terminating one or more threads or preempting resources to break the cycle." }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="tip-box">
        <strong>In Production:</strong> Lock ordering and try-lock timeouts are the most common strategies. Avoidance (Banker's) is rarely used in high-performance kernels due to runtime overhead.
      </div>

      <div className="topic-list">
        {strategies.map((s, i) => (
          <LLDAccordionSimplified key={i} badge={s.badge} title={s.title}>
            <p className="text-sm text-text-primary font-medium mb-4">{s.content}</p>
            <div className="space-y-3">
              {s.items.map((item, ii) => (
                <div key={ii} className="p-3 rounded-lg bg-background-primary/50 border border-border-tertiary">
                  <div className="text-xs font-bold text-accent mb-1">{item.label}</div>
                  <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </LLDAccordionSimplified>
        ))}
      </div>
    </div>
  );
}

function CodePanel() {
  const patterns = [
    {
      title: "Problem: AB / BA Deadlock",
      badge: "Problematic",
      badgeClass: "bg-red-500/10 text-red-500 border-red-500/20",
      code: `// Thread 1             // Thread 2
lock(A);                lock(B);
lock(B); // Waits A     lock(A); // Waits B`
    },
    {
      title: "Solution: Consistent Ordering",
      badge: "Best Practice",
      badgeClass: "bg-green-500/10 text-green-500 border-green-500/20",
      code: `void transfer(Account a, Account b) {
  Account first = a.id < b.id ? a : b;
  Account second = a.id < b.id ? b : a;
  
  lock(first);
  lock(second);
  // Safe transfer logic
}`
    },
    {
      title: "Solution: Try-Lock with Backoff",
      badge: "Defensive",
      badgeClass: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      code: `while (true) {
  if (a.tryLock()) {
    if (b.tryLock()) {
      try { return transfer(); }
      finally { b.unlock(); }
    }
    a.unlock();
  }
  sleep(randomBackoff());
}`
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {patterns.map((p, i) => (
          <div key={i} className="card border border-border-tertiary rounded-xl overflow-hidden bg-surface">
            <div className="p-4 border-b border-border-tertiary flex justify-between items-center">
              <div className="text-sm font-bold text-text-primary">{p.title}</div>
              <span className={`text-[10px] px-2 py-1 rounded-md font-bold uppercase border ${p.badgeClass}`}>
                {p.badge}
              </span>
            </div>
            <div className="p-4 bg-black/40">
              <pre className="text-xs font-mono text-text-secondary leading-relaxed overflow-x-auto">
                <code>{p.code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InterviewPanel() {
  const questions = [
    {
      q: "How do you detect deadlock in a production database?",
      a: "Databases like PostgreSQL use Wait-for Graphs. They periodically run a cycle-detection algorithm (DFS) on the graph. If a cycle is found, they select a 'victim' transaction (usually the one that has done the least work) and abort it to break the cycle."
    },
    {
      q: "Deadlock vs Livelock vs Starvation?",
      a: "Deadlock: threads are stuck and make no progress. Livelock: threads are active and consuming CPU but keep reacting to each other without making progress. Starvation: a thread is perpetually denied resources while others make progress."
    },
    {
      q: "When would you use Banker's Algorithm?",
      a: "Rarely in production systems because it requires knowing the maximum resource requirement of every process upfront. It's primarily a theoretical concept used to demonstrate how avoidance works in a closed system."
    }
  ];

  return (
    <div className="space-y-6">
      {questions.map((q, i) => (
        <div key={i} className="card p-6 border border-border-tertiary rounded-xl hover:border-primary transition-colors">
          <div className="text-lg font-bold text-text-primary mb-4">Q: {q.q}</div>
          <p className="text-sm text-text-secondary leading-relaxed border-t border-border-tertiary pt-4">
            {q.a}
          </p>
        </div>
      ))}
    </div>
  );
}

// Simplified LLDAccordion style for internal use
function LLDAccordionSimplified({ badge, title, children }: { badge: string, title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="topic-row">
      <div className="topic-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="topic-freq fm shrink-0">{badge}</span>
        <div className="topic-title">{title}</div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-text-secondary opacity-50">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="topic-body bg-background-primary/30">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
