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
    { id: "graph", label: "Resource graph" },
    { id: "strategy", label: "Prevention vs avoidance" },
    { id: "code", label: "Code patterns" },
    { id: "interview", label: "Interview answers" },
  ];

  return (
    <main className="pb-20 !max-w-[1400px]">
      <div className="mb-6">
        <Link href="/concurrency-os" className="text-accent font-medium inline-flex items-center gap-2 hover:underline group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
          Back to Concurrency & OS
        </Link>
      </div>

      <ScrollAnimation>
        <header className="portfolio-header">
          <h1>Deadlock</h1>
          <p>A comprehensive deep dive into Coffman conditions, resource allocation graphs, and strategies for prevention, avoidance, and detection in high-scale systems.</p>
        </header>
      </ScrollAnimation>

      <div className="flex flex-wrap gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 border ${activeTab === tab.id
              ? "bg-accent text-white border-accent shadow-md hover:shadow-lg"
              : "bg-transparent text-text-secondary border-white/10 hover:border-white/30"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="h-px w-full bg-border-tertiary mb-12"></div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
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
  return (
    <div className="space-y-6">
      <p className="text-text-secondary leading-relaxed">
        All four conditions must hold simultaneously. Break <em>any one</em> and deadlock is impossible.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <ConditionCard
          num="1"
          title="Mutual exclusion"
          content="At least one resource is held in a non-shareable mode — only one thread can use it at a time."
          fix="Make resources shareable (e.g. read locks, immutable data)."
          color="rgba(239, 68, 68, 0.1)"
          textColor="#EF4444"
        />
        <ConditionCard
          num="2"
          title="Hold and wait"
          content="A thread holding at least one resource is waiting to acquire more."
          fix="Acquire all resources atomically at once, or release before requesting new ones."
          color="rgba(239, 68, 68, 0.1)"
          textColor="#EF4444"
        />
        <ConditionCard
          num="3"
          title="No preemption"
          content="Resources can't be forcibly taken — a thread releases them voluntarily."
          fix="Allow preemption — if a thread can't acquire all resources, it releases what it holds and retries."
          color="rgba(239, 68, 68, 0.1)"
          textColor="#EF4444"
        />
        <ConditionCard
          num="4"
          title="Circular wait"
          content="A circular chain: T1 waits for T2's resource, T2 waits for T3's, …, Tn waits for T1's."
          fix="Impose a global lock ordering — every thread acquires locks in the same numeric order."
          color="rgba(239, 68, 68, 0.1)"
          textColor="#EF4444"
        />
      </div>
      <div className="p-4 border border-border-tertiary rounded-xl bg-background-secondary/50">
        <p className="text-sm">
          <strong className="text-text-primary">Memory hook:</strong> <strong>M</strong>utual exclusion · <strong>H</strong>old and wait · <strong>N</strong>o preemption · <strong>C</strong>ircular wait → <strong>MHNC</strong> or <span className="text-accent italic">"Men Hold No Circles"</span>
        </p>
      </div>
    </div>
  );
}

function ConditionCard({ num, title, content, fix, color, textColor }: any) {
  return (
    <div className="card p-6 h-full border-border-tertiary rounded-xl">
      <div className="mb-6">
        <span
          className="inline-block px-4 py-1.5 rounded-lg text-[10px] font-bold tracking-wide border"
          style={{ backgroundColor: color, color: textColor, borderColor: textColor + '33' }}
        >
          Condition {num}
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-text-primary">{title}</h3>
      <p className="text-sm text-text-secondary/80 mb-8 leading-7 max-w-2xl">{content}</p>
      <div className="pt-6 border-t border-border-tertiary mt-auto">
        <p className="text-sm leading-7">
          <strong className="text-text-primary block mb-1 font-bold text-[11px] tracking-wide">Break it:</strong>
          {fix}
        </p>
      </div>
    </div>
  );
}

function GraphPanel() {
  return (
    <div className="space-y-6">
      <p className="text-text-secondary leading-relaxed">
        A resource allocation graph (RAG) makes deadlock visible. Threads are circles, resources are squares.
        An edge from <span className="text-accent font-medium">resource → thread</span> means "allocated".
        An edge from <span className="text-blue-400 font-medium">thread → resource</span> means "waiting".
      </p>

      <div className="bg-background-secondary/30 rounded-2xl p-8 border border-border-tertiary">
        <svg width="100%" viewBox="0 0 640 320" className="max-w-3xl mx-auto overflow-visible">
          <defs>
            <marker id="arr-allocated" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
            <marker id="arr-waiting" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>

          {/* T1 */}
          <g>
            <circle cx="140" cy="160" r="40" fill="rgba(167, 139, 250, 0.1)" stroke="#A78BFA" strokeWidth="2" />
            <text x="140" y="155" textAnchor="middle" fill="white" className="font-bold text-lg">T1</text>
            <text x="140" y="175" textAnchor="middle" fill="#A78BFA" className="text-[10px] uppercase font-bold tracking-widest">thread</text>
          </g>

          {/* T2 */}
          <g>
            <circle cx="500" cy="160" r="40" fill="rgba(167, 139, 250, 0.1)" stroke="#A78BFA" strokeWidth="2" />
            <text x="500" y="155" textAnchor="middle" fill="white" className="font-bold text-lg">T2</text>
            <text x="500" y="175" textAnchor="middle" fill="#A78BFA" className="text-[10px] uppercase font-bold tracking-widest">thread</text>
          </g>

          {/* R1 */}
          <g>
            <rect x="270" y="50" width="100" height="70" rx="12" fill="rgba(251, 146, 60, 0.1)" stroke="#FB923C" strokeWidth="2" />
            <text x="320" y="80" textAnchor="middle" fill="white" className="font-bold text-lg">R1</text>
            <text x="320" y="100" textAnchor="middle" fill="#FB923C" className="text-[10px] uppercase font-bold tracking-widest">resource</text>
          </g>

          {/* R2 */}
          <g>
            <rect x="270" y="200" width="100" height="70" rx="12" fill="rgba(251, 146, 60, 0.1)" stroke="#FB923C" strokeWidth="2" />
            <text x="320" y="230" textAnchor="middle" fill="white" className="font-bold text-lg">R2</text>
            <text x="320" y="250" textAnchor="middle" fill="#FB923C" className="text-[10px] uppercase font-bold tracking-widest">resource</text>
          </g>

          {/* Edges */}
          {/* R1 → T1 (Allocated) */}
          <path d="M270 85 L185 145" stroke="#FB923C" strokeWidth="2" markerEnd="url(#arr-allocated)" fill="none" />
          <text x="210" y="105" textAnchor="middle" fill="#FB923C" className="text-[10px] font-bold">allocated</text>

          {/* T1 → R2 (Waiting) */}
          <path d="M185 175 L270 235" stroke="#60A5FA" strokeWidth="2" strokeDasharray="6,4" markerEnd="url(#arr-waiting)" fill="none" />
          <text x="210" y="225" textAnchor="middle" fill="#60A5FA" className="text-[10px] font-bold">waiting</text>

          {/* R2 → T2 (Allocated) */}
          <path d="M370 235 L455 175" stroke="#FB923C" strokeWidth="2" markerEnd="url(#arr-allocated)" fill="none" />
          <text x="430" y="225" textAnchor="middle" fill="#FB923C" className="text-[10px] font-bold">allocated</text>

          {/* T2 → R1 (Waiting) */}
          <path d="M455 145 L370 85" stroke="#60A5FA" strokeWidth="2" strokeDasharray="6,4" markerEnd="url(#arr-waiting)" fill="none" />
          <text x="430" y="105" textAnchor="middle" fill="#60A5FA" className="text-[10px] font-bold">waiting</text>

          {/* Cycle Label */}
          <text x="320" y="165" textAnchor="middle" fill="#EF4444" className="font-bold text-sm animate-pulse">⟳ cycle = deadlock</text>
        </svg>
      </div>

      <div className="p-4 border-l-4 border-accent bg-background-secondary rounded-r-xl">
        <p className="text-sm leading-relaxed">
          <strong className="text-text-primary">Detection rule:</strong> if the RAG has a cycle and each resource has only one instance → deadlock is guaranteed.
          With multiple instances per resource, a cycle is necessary but not sufficient — run the <span className="text-accent">Banker's Algorithm</span> to confirm.
        </p>
      </div>
    </div>
  );
}

function StrategyPanel() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <StrategyCard
          type="Prevention"
          badgeColor="#EF4444"
          title="Eliminate a Coffman condition"
          steps={[
            { title: "Lock ordering", desc: "Assign a global numeric ID to each lock; always acquire in ascending order. Breaks circular wait." },
            { title: "Acquire all-or-nothing", desc: "Try to claim all needed resources atomically; if any fails, release all and retry. Breaks hold-and-wait." },
            { title: "Timeouts", desc: "tryLock(timeout) releases held locks if blocked too long. Adds preemption." }
          ]}
        />
        <StrategyCard
          type="Avoidance"
          badgeColor="#10B981"
          title="Stay in safe states"
          steps={[
            { title: "Banker's Algorithm", desc: "Before granting a request, simulate allocation and check if a safe sequence exists. Only grant if safe." },
            { title: "Cost", desc: "Requires knowing max resource needs in advance. High runtime overhead — rarely used in production OS kernels." }
          ]}
        />
        <StrategyCard
          type="Detection"
          badgeColor="#8B5CF6"
          title="Let it happen, then fix it"
          steps={[
            { title: "Periodically scan", desc: "The RAG for cycles using DFS. Commonly used by database engines like PostgreSQL." },
            { title: "Recovery", desc: "Kill one thread in the cycle (victim selection), preempt a resource, or rollback a transaction." }
          ]}
        />
      </div>

      <div className="p-6 border border-border-tertiary rounded-2xl bg-gradient-to-br from-background-secondary to-transparent">
        <h4 className="text-text-primary font-bold mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          In practice at FAANG scale
        </h4>
        <p className="text-sm text-text-secondary leading-relaxed">
          <span className="text-text-primary font-medium">Lock ordering + tryLock timeouts</span> are the dominant production patterns.
          Banker's Algorithm is primarily an interview concept. Deadlock detection is typically delegated to the database layer (e.g., PostgreSQL detects wait-graph cycles and kills one transaction).
        </p>
      </div>
    </div>
  );
}

function StrategyCard({ type, badgeColor, title, steps }: any) {
  return (
    <div className="card p-6 h-full border-border-tertiary rounded-xl">
      <div className="mb-6">
        <span
          className="inline-block px-4 py-1.5 rounded-lg text-[10px] font-bold tracking-wide border"
          style={{ backgroundColor: badgeColor + '11', color: badgeColor, borderColor: badgeColor + '33' }}
        >
          {type}
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-8 text-text-primary">{title}</h3>
      <div className="space-y-6">
        {steps.map((step: any, i: number) => (
          <div key={i} className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-background-secondary border border-border-tertiary flex items-center justify-center text-[11px] font-bold text-text-primary shrink-0 mt-1">
              {i + 1}
            </div>
            <div>
              <p className="text-md font-bold text-text-primary leading-tight mb-2">{step.title}</p>
              <p className="text-sm text-text-secondary/80 leading-7 max-w-2xl">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodePanel() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <CodeCard
        type="Problematic"
        badgeColor="#EF4444"
        title="Classic AB / BA deadlock"
        code={`// Thread 1
lock(A); 
lock(B);   // A → B

// Thread 2
lock(B); 
lock(A);   // B → A

// T1 holds A, waits B
// T2 holds B, waits A → deadlock`}
      />
      <CodeCard
        type="Fix"
        badgeColor="#10B981"
        title="Consistent global order"
        code={`// Both threads always acquire
// in the same order: A before B
void transfer(Acct a, Acct b) {
  Acct first  = min(a.id, b.id);
  Acct second = max(a.id, b.id);
  
  lock(first);
  lock(second);
  
  // perform transfer...
  
  unlock(second);
  unlock(first);
}`}
      />
      <CodeCard
        type="Fix"
        badgeColor="#10B981"
        title="tryLock + backoff"
        code={`while (true) {
  if (a.tryLock(100ms)) {
    if (b.tryLock(100ms)) {
      // success!
      break;
    }
    // could not get B, 
    // release A and retry
    a.unlock(); 
  }
  sleep(random_backoff);
}`}
      />
      <CodeCard
        type="Fix"
        badgeColor="#10B981"
        title="Single lock / Coordinator"
        code={`// Serialize mutations through
// one coordinator - no multi-lock
chan <- TransferRequest{a, b, amt}

// Coordinator processes requests
// serially in a single loop
for req := range channel {
  processTransfer(req)
}`}
      />
    </div>
  );
}

function CodeCard({ type, badgeColor, title, code }: any) {
  return (
    <div className="card p-0 border-border-tertiary overflow-hidden rounded-xl">
      <div className="p-6 border-b border-border-tertiary">
        <span
          className="inline-block px-4 py-1.5 rounded-lg text-[10px] font-bold tracking-wide mb-4 border"
          style={{ backgroundColor: badgeColor + '11', color: badgeColor, borderColor: badgeColor + '33' }}
        >
          {type}
        </span>
        <h3 className="text-2xl font-bold text-text-primary">{title}</h3>
      </div>
      <div className="p-6 bg-[#0D0D0D]">
        <pre className="text-sm font-mono text-text-secondary/90 leading-7 whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

function InterviewPanel() {
  const questions = [
    {
      q: "How do you prevent deadlock in production?",
      a: "Lock ordering is the primary defense — assign a total order to all locks and always acquire in that order. This eliminates circular wait. For scenarios where ordering isn't feasible, use tryLock with timeouts and random backoff (jitter) to add preemption. At the architecture level, prefer shared-nothing actors or serializing work through a single coordinator."
    },
    {
      q: "How does a database handle deadlock?",
      a: "PostgreSQL and MySQL maintain a wait-for graph. Periodically, they run a DFS to find cycles. When a cycle is detected, they perform 'victim selection' by killing the transaction that has performed the least work, returning an error to the client to retry."
    },
    {
      q: "Deadlock vs livelock vs starvation?",
      a: "Deadlock: threads are blocked forever, no progress. Livelock: threads are active and consuming CPU but keep reacting to each other with no net progress (like two people dodging in a hallway). Starvation: a thread is perpetually denied resources by higher-priority tasks. Fix livelock with random backoff; fix starvation with fair scheduling."
    },
    {
      q: "Explain Banker's Algorithm",
      a: "Dijkstra's Banker's Algorithm checks if a resource request keeps the system in a 'safe state'. It simulates the worst-case: can we find a sequence where every thread's max needs are eventually satisfied? If not, the request is deferred. It's theoretically sound but rarely used in practice because it requires knowing max resource needs upfront."
    }
  ];

  return (
    <div className="space-y-6">
      {questions.map((item, i) => (
        <div key={i} className="card p-6 border-border-tertiary hover:border-accent group transition-all rounded-xl">
          <h4 className="text-2xl font-bold mb-6 flex items-center justify-between text-text-primary">
            Q: "{item.q}"
            <svg className="w-5 h-5 text-text-secondary/50 group-hover:text-accent transition-colors shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </h4>
          <p className="text-sm text-text-secondary/80 leading-7 border-t border-border-tertiary pt-6 max-w-3xl">
            {item.a}
          </p>
        </div>
      ))}
    </div>
  );
}
