"use client";

import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import DeepDiveCard from "@/components/DeepDiveCard";

export default function PerformanceEngineeringContent() {
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
          <h1>Performance Engineering Deep Dive</h1>
          <p>Master the art of high-performance systems: from kernel-level profiling and memory optimization to global-scale latency analysis and capacity planning.</p>
        </header>
      </ScrollAnimation>

      <div className="legend">
        <span><span className="ldot" style={{ background: "#4ADE80" }}></span>High frequency</span>
        <span><span className="ldot" style={{ background: "#60A5FA" }}></span>Medium frequency</span>
        <span><span className="ldot" style={{ background: "#94A3B8" }}></span>Occasional / senior+</span>
        <span><span className="badge" style={{ background: "#EEEDFE", color: "#3C3489", border: "0.5px solid #AFA9EC" }}>Role context</span></span>
      </div>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
            <span className="sec-title">Latency & measurement fundamentals</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="percentiles"
              title="Percentiles — p50 / p95 / p99 / p999"
              frequency="High"
              role="all roles"
              tags={["why avg misleads", "tail latency amplification", "HDR histogram", "SLO alignment"]}
            />
            <DeepDiveCard
              id="latency-throughput"
              title="Latency vs throughput & Little's Law"
              frequency="High"
              role="all roles"
              tags={["L = λW", "queue depth", "concurrency limits", "throughput ceiling"]}
            />
            <DeepDiveCard
              id="use-red-methods"
              title="USE method & RED method"
              frequency="High"
              role="backend / SRE"
              tags={["Utilisation / Saturation / Errors", "Rate / Errors / Duration", "resource vs service view"]}
            />
            <DeepDiveCard
              id="amdahls-law"
              title="Amdahl's Law"
              frequency="Medium"
              role="backend / systems"
              tags={["serial fraction bottleneck", "diminishing returns", "parallelism ceiling", "Gunther USL"]}
            />
            <DeepDiveCard
              id="coordinated-omission"
              title="Coordinated omission"
              frequency="Medium"
              role="senior / perf"
              tags={["benchmark bias", "HdrHistogram fix", "wrk2 vs wrk", "closed vs open loop"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" /></svg>
            </span>
            <span className="sec-title">CPU & memory profiling</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="cpu-profiling"
              title="CPU profiling & flamegraphs"
              frequency="High"
              role="all roles"
              tags={["on-CPU vs off-CPU", "sampling profiler", "flamegraph reading", "perf / async-profiler"]}
            />
            <DeepDiveCard
              id="memory-profiling"
              title="Memory profiling & heap analysis"
              frequency="High"
              role="backend / FE"
              tags={["heap dump", "allocation sampling", "retained size", "GC pause analysis"]}
            />
            <DeepDiveCard
              id="gc-tuning"
              title="GC tuning"
              frequency="Medium"
              role="backend / JVM / Go"
              tags={["G1 / ZGC / Shenandoah", "heap ratio", "GOGC", "GC log analysis"]}
            />
            <DeepDiveCard
              id="cache-locality"
              title="Cache locality & struct layout"
              frequency="Medium"
              role="systems / senior"
              tags={["spatial locality", "AoS vs SoA", "cache line packing", "prefetching"]}
            />
            <DeepDiveCard
              id="continuous-profiling"
              title="Continuous profiling in production"
              frequency="Medium"
              role="senior / SRE"
              tags={["pprof / Pyroscope", "low-overhead sampling", "regression detection", "diff flamegraphs"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" /></svg>
            </span>
            <span className="sec-title">Network & I/O performance</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="connection-pooling"
              title="Connection pooling"
              frequency="High"
              role="backend"
              tags={["pool sizing formula", "keepalive", "pool exhaustion", "connection leak"]}
            />
            <DeepDiveCard
              id="caching-strategies"
              title="Caching strategies & stampede"
              frequency="High"
              role="all roles"
              tags={["read/write-through", "write-behind", "cache stampede", "probabilistic early expiry"]}
            />
            <DeepDiveCard
              id="io-batching"
              title="I/O batching & zero-copy"
              frequency="Medium"
              role="systems / backend"
              tags={["Nagle's algorithm", "TCP_NODELAY", "sendfile()", "io_uring"]}
            />
            <DeepDiveCard
              id="backpressure"
              title="Backpressure & flow control"
              frequency="High"
              role="backend / streaming"
              tags={["bounded queues", "reactive streams", "TCP flow control", "load shedding"]}
            />
            <DeepDiveCard
              id="cdn-edge"
              title="CDN & edge optimisation"
              frequency="Medium"
              role="frontend / infra"
              tags={["cache hit ratio", "origin offload", "stale-while-revalidate", "edge compute"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path strokeLinecap="round" strokeLinejoin="round" d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
            </span>
            <span className="sec-title">Database performance</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="slow-query-analysis"
              title="Slow query analysis"
              frequency="High"
              role="backend"
              tags={["EXPLAIN ANALYZE", "seq scan vs index", "N+1 queries", "query rewrite"]}
            />
            <DeepDiveCard
              id="n-plus-1"
              title="N+1 problem & DataLoader"
              frequency="High"
              role="backend / fullstack"
              tags={["eager loading", "DataLoader batching", "GraphQL N+1", "query count"]}
            />
            <DeepDiveCard
              id="db-pool-tuning"
              title="DB pool tuning & transactions"
              frequency="Medium"
              role="backend"
              tags={["pool exhaustion", "idle-in-transaction", "lock contention", "PgBouncer"]}
            />
            <DeepDiveCard
              id="read-replicas"
              title="Read replicas & CQRS"
              frequency="Medium"
              role="backend / design"
              tags={["replication lag", "read-your-writes", "CQRS pattern", "materialized views"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4"/></svg>
            </span>
            <span className="sec-title">Frontend performance</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="core-web-vitals"
              title="Core Web Vitals — LCP / INP / CLS"
              frequency="High"
              role="frontend"
              tags={["LCP causes", "INP interaction budget", "CLS layout shifts", "field vs lab data"]}
            />
            <DeepDiveCard
              id="bundle-optimisation"
              title="Bundle optimisation"
              frequency="High"
              role="frontend"
              tags={["code splitting", "tree shaking", "dynamic import", "bundle analyser"]}
            />
            <DeepDiveCard
              id="asset-optimisation"
              title="Image & asset optimisation"
              frequency="High"
              role="frontend"
              tags={["WebP / AVIF", "srcset / sizes", "lazy loading", "blur-up LQIP"]}
            />
            <DeepDiveCard
              id="react-rendering-perf"
              title="React rendering performance"
              frequency="High"
              role="frontend"
              tags={["React.memo", "useMemo / useCallback", "list virtualisation", "React Compiler"]}
            />
            <DeepDiveCard
              id="font-loading"
              title="Font loading performance"
              frequency="Medium"
              role="frontend"
              tags={["FOIT vs FOUT", "font-display: swap", "preload font", "variable fonts"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18"/><path strokeLinecap="round" strokeLinejoin="round" d="M18 9l-5 5-2-2-4 4"/></svg>
            </span>
            <span className="sec-title">Load testing & capacity planning</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="load-testing-method"
              title="Load testing methodology"
              frequency="High"
              role="backend / SRE"
              tags={["load vs stress vs soak", "spike test", "k6 / Gatling", "realistic traffic shape"]}
            />
            <DeepDiveCard
              id="capacity-planning"
              title="Capacity planning"
              frequency="High"
              role="system design"
              tags={["back-of-envelope", "headroom target", "traffic forecasting", "autoscaling thresholds"]}
            />
            <DeepDiveCard
              id="chaos-engineering"
              title="Chaos engineering"
              frequency="Medium"
              role="senior / SRE"
              tags={["blast radius", "hypothesis-driven", "Chaos Monkey", "game days"]}
            />
            <DeepDiveCard
              id="autoscaling-strategies"
              title="Autoscaling strategies"
              frequency="Medium"
              role="backend / infra"
              tags={["reactive vs predictive", "scale-in lag", "cold start cost", "HPA / KEDA"]}
            />
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
}
