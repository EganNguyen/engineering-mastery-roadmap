"use client";

import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import DeepDiveCard from "@/components/DeepDiveCard";

export default function FrontendPerformanceContent() {
  return (
    <main className="pb-20">
      <div className="mb-6">
        <Link href="/#frontend-perf" className="text-accent font-medium inline-flex items-center gap-2 hover:underline group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
          Back to Roadmap
        </Link>
      </div>

      <ScrollAnimation>
        <header className="portfolio-header">
          <div className="eyebrow mb-2">Frontend Mastery</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Frontend Performance</h1>
          <p className="text-lg text-text-secondary max-w-3xl">
            Master the technical depth of high-performance web applications: from Core Web Vitals and resource delivery to rendering optimization and advanced hydration patterns.
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
          <span className="text-[10px] font-bold uppercase tracking-widest text-accent/80 bg-accent/5 px-2 py-0.5 rounded border border-accent/10">
            Role context indicated on cards
          </span>
        </div>
      </div>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2" /></svg>
            </span>
            <span className="sec-title">Metrics & measurement</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="core-web-vitals"
              title="Core Web Vitals — LCP / INP / CLS"
              frequency="High"
              role="all FE"
              tags={["LCP ≤ 2.5s", "INP ≤ 200ms", "CLS ≤ 0.1", "field vs lab data"]}
            />
            <DeepDiveCard
              id="ttfb-fcp-tti"
              title="TTFB / FCP / TTI / TBT"
              frequency="High"
              role="all FE"
              tags={["time to first byte", "first contentful paint", "time to interactive", "total blocking time"]}
            />
            <DeepDiveCard
              id="rum-synthetic"
              title="RUM vs synthetic monitoring"
              frequency="High"
              role="senior FE"
              tags={["real user metrics", "Lighthouse CI", "percentile budgets", "segment by device"]}
            />
            <DeepDiveCard
              id="perf-budgets"
              title="Performance budgets & CI enforcement"
              frequency="Medium"
              role="senior FE"
              tags={["bundle size budget", "LCP budget", "Lighthouse CI gate", "regression alerting"]}
            />
            <DeepDiveCard
              id="perf-observer"
              title="PerformanceObserver & custom metrics"
              frequency="Medium"
              role="senior FE"
              tags={["PerformanceObserver", "User Timing API", "mark / measure", "Long Tasks API"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            </span>
            <span className="sec-title">Loading & resource strategy</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="code-splitting"
              title="Code splitting strategies"
              frequency="High"
              role="all FE"
              tags={["route-based split", "dynamic import()", "vendor chunk", "granularity tradeoffs"]}
            />
            <DeepDiveCard
              id="lazy-loading"
              title="Lazy loading — images & components"
              frequency="High"
              role="all FE"
              tags={["loading=\"lazy\"", "IntersectionObserver", "React.lazy + Suspense", "below-fold deferral"]}
            />
            <DeepDiveCard
              id="resource-hints"
              title="Resource hints"
              frequency="High"
              role="all FE"
              tags={["preload critical", "prefetch next page", "preconnect origins", "fetchpriority"]}
            />
            <DeepDiveCard
              id="tree-shaking"
              title="Tree shaking"
              frequency="High"
              role="all FE"
              tags={["static ESM analysis", "sideEffects flag", "dead code elimination", "barrel file problem"]}
            />
            <DeepDiveCard
              id="asset-caching"
              title="Asset caching & cache busting"
              frequency="High"
              role="all FE"
              tags={["content hash filename", "immutable directive", "long max-age", "stale-while-revalidate"]}
            />
            <DeepDiveCard
              id="image-opt"
              title="Image optimisation"
              frequency="High"
              role="all FE"
              tags={["WebP / AVIF", "srcset / sizes", "LQIP blur-up", "aspect-ratio reserve"]}
            />
            <DeepDiveCard
              id="sw-caching"
              title="Service worker caching strategies"
              frequency="Medium"
              role="senior FE"
              tags={["cache-first", "network-first", "stale-while-revalidate", "offline fallback"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </span>
            <span className="sec-title">Rendering performance</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="layout-thrashing"
              title="Layout thrashing"
              frequency="High"
              role="all FE"
              tags={["forced sync layout", "batch reads then writes", "FastDOM", "rAF deferral"]}
            />
            <DeepDiveCard
              id="animation-perf"
              title="Animation — compositor-only props"
              frequency="High"
              role="all FE"
              tags={["transform / opacity only", "will-change caution", "GPU layer", "60fps budget"]}
            />
            <DeepDiveCard
              id="virtualisation"
              title="Virtualisation / windowing"
              frequency="High"
              role="all FE"
              tags={["render visible rows only", "react-window", "variable height", "scroll anchoring"]}
            />
            <DeepDiveCard
              id="css-contain"
              title="CSS contain & content-visibility"
              frequency="Medium"
              role="senior FE"
              tags={["layout / paint / size contain", "content-visibility: auto", "skip off-screen", "containment"]}
            />
            <DeepDiveCard
              id="long-task-chunking"
              title="Long task chunking & scheduler.yield"
              frequency="High"
              role="senior FE"
              tags={["50ms threshold", "scheduler.yield()", "React concurrent", "INP impact"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </span>
            <span className="sec-title">JavaScript execution performance</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="react-memoisation"
              title="React.memo / useMemo / useCallback"
              frequency="High"
              role="all FE"
              tags={["referential equality", "memoisation cost", "when NOT to memo", "React Compiler"]}
            />
            <DeepDiveCard
              id="js-parse-exec"
              title="JS parse & execution cost"
              frequency="High"
              role="all FE"
              tags={["parse time on low-end devices", "bytecode cache", "script evaluation", "coverage tool"]}
            />
            <DeepDiveCard
              id="web-workers"
              title="Web Workers & off-main-thread"
              frequency="Medium"
              role="senior FE"
              tags={["structured clone cost", "Transferable", "Comlink", "what to offload"]}
            />
            <DeepDiveCard
              id="wasm"
              title="WebAssembly (WASM)"
              frequency="Occasional"
              role="senior / staff"
              tags={["compute-bound use cases", "JS interop cost", "memory model", "vs JS JIT"]}
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
            <span className="sec-title">SSR, hydration & delivery</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="ssr-tradeoffs"
              title="SSR / CSR / SSG / ISR tradeoffs"
              frequency="High"
              role="all FE"
              tags={["TTFB vs TTI", "hydration cost", "stale content risk", "edge rendering"]}
            />
            <DeepDiveCard
              id="hydration-islands"
              title="Hydration & islands architecture"
              frequency="High"
              role="senior FE"
              tags={["hydration mismatch", "progressive hydration", "islands / Astro", "resumability"]}
            />
            <DeepDiveCard
              id="rsc"
              title="React Server Components"
              frequency="High"
              role="senior FE"
              tags={["zero client JS", "server/client boundary", "streaming RSC", "bundle reduction"]}
            />
            <DeepDiveCard
              id="streaming-html"
              title="Streaming HTML & Suspense"
              frequency="Medium"
              role="senior FE"
              tags={["chunked transfer", "out-of-order streaming", "Suspense boundaries", "TTFB vs FCP"]}
            />
            <DeepDiveCard
              id="h2-h3"
              title="HTTP/2 multiplexing & HTTP/3"
              frequency="Medium"
              role="senior FE"
              tags={["HOL blocking", "multiplexing", "QUIC / HTTP/3", "domain sharding anti-pattern"]}
            />
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
}
