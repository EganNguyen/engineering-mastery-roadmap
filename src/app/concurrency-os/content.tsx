"use client";

import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import DeepDiveCard from "@/components/DeepDiveCard";

export default function ConcurrencyOSContent() {
  return (
    <main className="pb-20">
      <div className="mb-6">
        <Link href="/" className="text-accent font-medium inline-flex items-center gap-1 hover:underline">
          <span>←</span> Back to Roadmap & Portfolio
        </Link>
      </div>

      <ScrollAnimation>
        <header className="portfolio-header">
          <h1>Concurrency & OS</h1>
          <p>Deep dive into concurrency primitives, OS internals, memory models, and scheduling.</p>
        </header>
      </ScrollAnimation>

      <div className="legend">
        <span><span className="ldot" style={{ background: "#1D9E75" }}></span>High frequency</span>
        <span><span className="ldot" style={{ background: "#185FA5" }}></span>Medium frequency</span>
        <span><span className="ldot" style={{ background: "#888780" }}></span>Occasional / staff+ roles</span>
      </div>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">🔄</span>
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
            <span className="sec-icon">⚙️</span>
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
            <span className="sec-icon">🖥️</span>
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
            <span className="sec-icon">🛠️</span>
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
            <span className="sec-icon">🧪</span>
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
