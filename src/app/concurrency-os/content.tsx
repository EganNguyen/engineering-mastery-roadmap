"use client";

import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import DeepDiveCard from "@/components/DeepDiveCard";

export default function ConcurrencyOSContent() {
  return (
    <main className="pb-20">
      <div className="mb-6">
        <Link href="/" className="text-accent font-medium inline-flex items-center gap-2 hover:underline group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
          Back to Roadmap & Portfolio
        </Link>
      </div>

      <ScrollAnimation>
        <header className="portfolio-header">
          <h1>Concurrency & OS</h1>
          <p>Deep dive into concurrency primitives, OS internals, memory models, and scheduling.</p>
        </header>
      </ScrollAnimation>

      <div className="legend">
        <span><span className="ldot" style={{ background: "#4ADE80" }}></span>High frequency</span>
        <span><span className="ldot" style={{ background: "#60A5FA" }}></span>Medium frequency</span>
        <span><span className="ldot" style={{ background: "#94A3B8" }}></span>Occasional / staff+ roles</span>
      </div>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </span>
            <span className="sec-title">Concurrency primitives</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="mutex-semaphore"
              title="Mutex, semaphore & monitor"
              frequency="High"
              tags={["binary vs counting semaphore", "ownership", "condition variables", "spurious wakeup"]}
            />
            <DeepDiveCard
              id="deadlock-sec"
              title="Deadlock"
              frequency="High"
              tags={["4 Coffman conditions", "lock ordering", "resource graph", "banker's algorithm"]}
            />
            <DeepDiveCard
              id="race-conditions"
              title="Race conditions"
              frequency="High"
              tags={["data race vs race condition", "TOCTOU", "atomic operations", "volatile"]}
            />
            <DeepDiveCard
              id="rw-locks"
              title="Read-write locks"
              frequency="High"
              tags={["writer starvation", "reader preference", "RWMutex", "upgrade deadlock"]}
            />
            <DeepDiveCard
              id="lock-free"
              title="Lock-free & wait-free structures"
              frequency="Medium"
              tags={["compare-and-swap", "ABA problem", "atomic reference", "Michael-Scott queue"]}
            />
            <DeepDiveCard
              id="livelock"
              title="Livelock & starvation"
              frequency="Medium"
              tags={["vs deadlock", "backoff strategies", "fair scheduling", "priority inversion"]}
            />
            <DeepDiveCard
              id="memory-model"
              title="Memory model & happens-before"
              frequency="Medium"
              tags={["happens-before", "visibility guarantees", "reordering", "volatile / sync.atomic"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </span>
            <span className="sec-title">Threading & scheduling</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="thread-proc"
              title="Thread vs process vs coroutine"
              frequency="High"
              tags={["kernel vs user threads", "M:N threading", "goroutines", "context switch cost"]}
            />
            <DeepDiveCard
              id="thread-pool"
              title="Thread pool design"
              frequency="High"
              tags={["pool sizing formula", "work stealing", "bounded queue", "rejection policies"]}
            />
            <DeepDiveCard
              id="cpu-scheduling"
              title="CPU scheduling"
              frequency="Medium"
              tags={["CFS / Linux scheduler", "preemptive vs cooperative", "priority queues", "time slice"]}
            />
            <DeepDiveCard
              id="event-loop-os"
              title="Async / event loop model"
              frequency="High"
              tags={["single-threaded event loop", "I/O multiplexing", "epoll / kqueue", "callback vs promise"]}
            />
            <DeepDiveCard
              id="work-stealing"
              title="Work stealing schedulers"
              frequency="Occasional"
              tags={["deque per thread", "ForkJoinPool", "Go GMP model", "locality"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </span>
            <span className="sec-title">Memory & hardware</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="virt-mem"
              title="Virtual memory & paging"
              frequency="High"
              tags={["page table", "TLB miss", "page fault", "huge pages"]}
            />
            <DeepDiveCard
              id="cpu-cache"
              title="CPU cache & cache coherence"
              frequency="High"
              tags={["L1/L2/L3 latency", "MESI protocol", "false sharing", "cache line"]}
            />
            <DeepDiveCard
              id="false-sharing"
              title="False sharing"
              frequency="Medium"
              tags={["cache line padding", "@Contended", "NUMA awareness", "perf counters"]}
            />
            <DeepDiveCard
              id="mem-barriers"
              title="Memory barriers & reordering"
              frequency="Medium"
              tags={["store/load barrier", "acquire/release semantics", "StoreLoad fence", "x86 vs ARM"]}
            />
            <DeepDiveCard
              id="gc-internals"
              title="Stack, heap & GC internals"
              frequency="Medium"
              tags={["stack frame", "escape analysis", "GC pause (STW)", "generational GC"]}
            />
            <DeepDiveCard
              id="numa"
              title="NUMA architecture"
              frequency="Occasional"
              tags={["local vs remote memory", "NUMA-aware allocation", "CPU pinning", "memory latency"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
            </span>
            <span className="sec-title">OS & I/O model</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="syscalls"
              title="System calls & context switching"
              frequency="High"
              tags={["user vs kernel mode", "syscall overhead", "vDSO", "interrupt handling"]}
            />
            <DeepDiveCard
              id="io-models"
              title="I/O models — blocking to epoll"
              frequency="High"
              tags={["blocking I/O", "select/poll O(n)", "epoll O(1)", "io_uring"]}
            />
            <DeepDiveCard
              id="namespaces"
              title="Namespaces, cgroups & containers"
              frequency="Medium"
              tags={["PID/net namespace", "cgroup limits", "container runtime", "seccomp"]}
            />
            <DeepDiveCard
              id="ipc"
              title="IPC mechanisms"
              frequency="Medium"
              tags={["pipes / FIFOs", "Unix domain sockets", "shared memory", "message queues"]}
            />
            <DeepDiveCard
              id="cow-os"
              title="Copy-on-write (CoW)"
              frequency="Medium"
              tags={["fork() semantics", "page sharing", "Redis RDB snapshot", "CoW in data structures"]}
            />
            <DeepDiveCard
              id="io-uring"
              title="io_uring"
              frequency="Occasional"
              tags={["submission ring", "completion ring", "zero syscall I/O", "vs epoll"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.673.337a4 4 0 01-2.574.346l-1.928-.386a2 2 0 01-1.583-1.97V4a2 2 0 012-2h11.429a2 2 0 012 2v1.429a2 2 0 01-2 2H9.857a2 2 0 00-2 2v3.143a2 2 0 002 2h7.571a2 2 0 012 2v1.429a2 2 0 01-2 2h-1.429a2 2 0 01-2-2z" /></svg>
            </span>
            <span className="sec-title">Applied concurrency patterns</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="producer-consumer"
              title="Producer-consumer & bounded buffer"
              frequency="High"
              tags={["blocking queue", "backpressure", "LMAX disruptor", "ring buffer"]}
            />
            <DeepDiveCard
              id="rate-limiter-design"
              title="Thread-safe rate limiter"
              frequency="High"
              tags={["token bucket", "atomic counters", "sliding window", "distributed rate limit"]}
            />
            <DeepDiveCard
              id="lru-cache-design"
              title="Concurrent LRU cache design"
              frequency="High"
              tags={["lock striping", "ConcurrentHashMap", "doubly linked list", "eviction policy"]}
            />
            <DeepDiveCard
              id="actor-model"
              title="Actor model"
              frequency="Medium"
              tags={["message passing", "mailbox", "Akka / Erlang", "no shared state"]}
            />
            <DeepDiveCard
              id="stm"
              title="Software transactional memory"
              frequency="Occasional"
              tags={["optimistic concurrency", "retry / commit", "Clojure STM", "vs locks"]}
            />
            <DeepDiveCard
              id="reactor-proactor"
              title="Reactor & proactor patterns"
              frequency="Medium"
              tags={["event demultiplexer", "Netty / Nginx model", "proactor async I/O", "IOCP"]}
            />
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
}
