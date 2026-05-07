"use client";

import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import DeepDiveCard from "@/components/DeepDiveCard";

export default function BrowserRenderingContent() {
  return (
    <main className="pb-20">
      <div className="mb-6">
        <Link href="/" className="text-accent font-medium inline-flex items-center gap-1 hover:underline">
          <span>←</span> Back to Roadmap & Portfolio
        </Link>
      </div>

      <ScrollAnimation>
        <header className="portfolio-header">
          <h1>Browser & Rendering</h1>
          <p>Deep dive into critical rendering path, DOM/CSSOM, event loop, and browser security models.</p>
        </header>
      </ScrollAnimation>

      <div className="legend">
        <span><span className="ldot" style={{ background: "#1D9E75" }}></span>High frequency</span>
        <span><span className="ldot" style={{ background: "#185FA5" }}></span>Medium frequency</span>
        <span><span className="ldot" style={{ background: "#888780" }}></span>Occasional / senior roles</span>
      </div>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">🖼️</span>
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
            <span className="sec-icon">🌳</span>
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
            <span className="sec-icon">🔄</span>
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
            <span className="sec-icon">🌐</span>
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
            <span className="sec-icon">🖱️</span>
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
            <span className="sec-icon">🛡️</span>
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
