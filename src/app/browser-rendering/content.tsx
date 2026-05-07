"use client";

import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import DeepDiveCard from "@/components/DeepDiveCard";

export default function BrowserRenderingContent() {
  return (
    <main className="pb-20">
      <div className="mb-6">
        <Link href="/#browser-rendering-hub" className="text-accent font-medium inline-flex items-center gap-2 hover:underline group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
          Back to Roadmap
        </Link>
      </div>

      <ScrollAnimation>
        <header className="portfolio-header">
          <div className="eyebrow mb-2">Frontend Mastery</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Browser & Rendering</h1>
          <p className="text-lg text-text-secondary max-w-3xl">
            Deep dive into critical rendering path, DOM/CSSOM, event loop, and browser security models.
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

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </span>
            <span className="sec-title">Critical rendering path</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="crp"
              title="Critical rendering path"
              frequency="High"
              tags={["HTML parse → DOM", "CSS parse → CSSOM", "render tree", "layout → paint → composite"]}
            />
            <DeepDiveCard
              id="reflow-repaint"
              title="Reflow vs repaint vs composite"
              frequency="High"
              tags={["layout triggers", "paint triggers", "composite-only props", "will-change"]}
            />
            <DeepDiveCard
              id="css-cost"
              title="CSS property cost model"
              frequency="High"
              tags={["width/height → layout", "color → paint", "transform/opacity → composite", "contain"]}
            />
            <DeepDiveCard
              id="render-blocking"
              title="Render-blocking resources"
              frequency="High"
              tags={["parser-blocking scripts", "defer / async", "preload / preconnect", "font-display"]}
            />
            <DeepDiveCard
              id="layer-promotion"
              title="Layer promotion & GPU compositing"
              frequency="Medium"
              tags={["compositor thread", "layer explosion", "transform hack", "DevTools layers panel"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 22V12m0 0l-4-4m4 4l4-4m-4 12l-6-6m6 6l6-6" /></svg>
            </span>
            <span className="sec-title">DOM & CSSOM</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="dom-construction"
              title="DOM construction & HTML parsing"
              frequency="High"
              tags={["tokenization", "tree construction", "speculative parsing", "parser errors"]}
            />
            <DeepDiveCard
              id="cssom-construction"
              title="CSSOM & selector matching"
              frequency="High"
              tags={["right-to-left matching", "specificity cascade", "selector cost", "style recalc"]}
            />
            <DeepDiveCard
              id="shadow-dom"
              title="Shadow DOM"
              frequency="Medium"
              tags={["open vs closed mode", "slots", "style encapsulation", "web components"]}
            />
            <DeepDiveCard
              id="layout-algorithms"
              title="Layout algorithms"
              frequency="Medium"
              tags={["block formatting context", "flex algorithm", "grid placement", "contain: layout"]}
            />
            <DeepDiveCard
              id="layout-thrashing"
              title="Layout thrashing"
              frequency="High"
              tags={["forced sync layout", "read-write batching", "requestAnimationFrame", "FastDOM"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </span>
            <span className="sec-title">Event loop & concurrency</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="event-loop"
              title="Browser event loop"
              frequency="High"
              tags={["call stack", "task queue", "microtask queue", "rendering steps"]}
            />
            <DeepDiveCard
              id="micro-macro"
              title="Microtasks vs macrotasks"
              frequency="High"
              tags={["Promise.then order", "queueMicrotask", "setTimeout(0)", "MutationObserver"]}
            />
            <DeepDiveCard
              id="raf-idle"
              title="rAF vs requestIdleCallback"
              frequency="High"
              tags={["16ms frame budget", "idle periods", "animation timing", "React scheduler"]}
            />
            <DeepDiveCard
              id="web-workers"
              title="Web Workers & off-main-thread"
              frequency="Medium"
              tags={["dedicated worker", "structured clone", "Transferable objects", "SharedArrayBuffer"]}
            />
            <DeepDiveCard
              id="long-tasks"
              title="Long tasks & main thread blocking"
              frequency="High"
              tags={["50ms threshold", "INP metric", "task chunking", "scheduler.yield"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
            </span>
            <span className="sec-title">Navigation & resource loading</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="url-to-pixel"
              title="URL to first pixel — full flow"
              frequency="High"
              tags={["DNS lookup", "TCP + TLS", "HTTP request", "parse → render"]}
            />
            <DeepDiveCard
              id="caching-layers"
              title="Browser caching layers"
              frequency="High"
              tags={["Cache-Control", "ETag / Last-Modified", "service worker", "memory vs disk cache"]}
            />
            <DeepDiveCard
              id="resource-hints"
              title="Resource hints"
              frequency="Medium"
              tags={["preload", "prefetch", "preconnect", "modulepreload"]}
            />
            <DeepDiveCard
              id="service-workers"
              title="Service workers"
              frequency="Medium"
              tags={["install/activate/fetch", "cache-first", "stale-while-revalidate", "offline support"]}
            />
            <DeepDiveCard
              id="cors"
              title="CORS"
              frequency="High"
              tags={["preflight OPTIONS", "simple vs preflighted", "credentials mode", "CORB / COEP"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
            </span>
            <span className="sec-title">Events & interaction</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="bubbling"
              title="Event bubbling & delegation"
              frequency="High"
              tags={["capture phase", "bubble phase", "stopPropagation", "event delegation pattern"]}
            />
            <DeepDiveCard
              id="passive-events"
              title="Passive event listeners"
              frequency="Medium"
              tags={["scroll jank", "touch event block", "passive: true", "compositor thread"]}
            />
            <DeepDiveCard
              id="observer-apis"
              title="Observer APIs"
              frequency="Medium"
              tags={["IntersectionObserver", "MutationObserver", "ResizeObserver", "lazy loading"]}
            />
            <DeepDiveCard
              id="pointer-touch"
              title="Pointer & touch events"
              frequency="Occasional"
              tags={["pointer capture", "touch-action CSS", "coalesced events", "input latency"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </span>
            <span className="sec-title">Browser security model</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="sop"
              title="Same-origin policy"
              frequency="High"
              tags={["origin = scheme+host+port", "iframe isolation", "document.domain", "postMessage"]}
            />
            <DeepDiveCard
              id="csp"
              title="Content Security Policy"
              frequency="Medium"
              tags={["script-src / style-src", "nonce / hash", "report-only mode", "trusted types"]}
            />
            <DeepDiveCard
              id="spectre-isolation"
              title="Cross-origin isolation & Spectre"
              frequency="Occasional"
              tags={["COEP / COOP headers", "SharedArrayBuffer gating", "site isolation", "Spectre mitigation"]}
            />
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
}
