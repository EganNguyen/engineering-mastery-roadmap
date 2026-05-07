"use client";

import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import DeepDiveCard from "@/components/DeepDiveCard";

export default function JavaScriptTypeScriptContent() {
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
          <h1>JavaScript & TypeScript Depth</h1>
          <p>Master the internal mechanics of the modern web’s primary engine: from V8 JIT and event loop orchestration to advanced type-level programming and memory optimization.</p>
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </span>
            <span className="sec-title">Core language mechanics</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="closures"
              title="Closures & scope chain"
              frequency="High"
              role="all FE roles"
              tags={["lexical scope", "closure over loop var", "module pattern", "memory retention"]}
            />
            <DeepDiveCard
              id="prototypes"
              title="Prototype chain & inheritance"
              frequency="High"
              role="all FE roles"
              tags={["__proto__ vs prototype", "Object.create", "class sugar", "instanceof chain"]}
            />
            <DeepDiveCard
              id="this-binding"
              title="this binding rules"
              frequency="High"
              role="all FE roles"
              tags={["implicit binding", "explicit call/apply/bind", "new binding", "arrow vs function"]}
            />
            <DeepDiveCard
              id="coercion"
              title="Type coercion & equality"
              frequency="High"
              role="all FE roles"
              tags={["abstract equality", "ToNumber / ToString", "falsy values", "NaN pitfalls"]}
            />
            <DeepDiveCard
              id="hoisting"
              title="Hoisting & TDZ"
              frequency="High"
              role="all FE roles"
              tags={["var hoisting", "temporal dead zone", "function declaration", "let/const"]}
            />
            <DeepDiveCard
              id="generators"
              title="Generators & iterators"
              frequency="Medium"
              role="senior FE"
              tags={["Symbol.iterator", "yield / next()", "lazy evaluation", "infinite sequences"]}
            />
            <DeepDiveCard
              id="proxy-reflect"
              title="Proxy & Reflect"
              frequency="Medium"
              role="senior FE"
              tags={["get/set traps", "validation", "Vue 3 reactivity", "meta-programming"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
            <span className="sec-title">Async & concurrency model</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="event-loop"
              title="Event loop — full execution model"
              frequency="High"
              role="all FE roles"
              tags={["call stack", "macrotask queue", "microtask drain", "render timing"]}
            />
            <DeepDiveCard
              id="promises"
              title="Promise internals & combinators"
              frequency="High"
              role="all FE roles"
              tags={["pending/fulfilled/rejected", "Promise.all/race/any", "unhandled rejection", "microtask timing"]}
            />
            <DeepDiveCard
              id="async-await"
              title="async/await under the hood"
              frequency="High"
              role="all FE roles"
              tags={["syntactic sugar", "implicit promise wrap", "try/catch vs .catch", "top-level await"]}
            />
            <DeepDiveCard
              id="custom-promise"
              title="Implement Promise from scratch"
              frequency="High"
              role="coding round"
              tags={["state machine", "callback queues", "thenable chaining", "Promises/A+"]}
            />
            <DeepDiveCard
              id="debounce-throttle"
              title="Implement debounce & throttle"
              frequency="High"
              role="coding round"
              tags={["setTimeout / clearTimeout", "leading/trailing edge", "requestAnimationFrame", "use cases"]}
            />
            <DeepDiveCard
              id="abort-controller"
              title="Cancellation & AbortController"
              frequency="Medium"
              role="all FE roles"
              tags={["AbortSignal", "fetch cancellation", "race condition fix", "cleanup pattern"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
            </span>
            <span className="sec-title">Memory & runtime</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="memory-management"
              title="Memory management & GC"
              frequency="High"
              role="senior FE"
              tags={["heap allocation", "mark-and-sweep", "generational GC", "V8 internals"]}
            />
            <DeepDiveCard
              id="leak-patterns"
              title="Memory leak patterns"
              frequency="High"
              role="senior FE"
              tags={["retained closures", "event listener leak", "detached DOM", "setInterval"]}
            />
            <DeepDiveCard
              id="weakmap-ref"
              title="WeakMap, WeakSet & WeakRef"
              frequency="Medium"
              role="senior FE"
              tags={["weak reference", "GC-eligible", "private data pattern", "FinalizationRegistry"]}
            />
            <DeepDiveCard
              id="v8-internals"
              title="V8 JIT & hidden classes"
              frequency="Medium"
              role="senior / perf"
              tags={["Ignition interpreter", "TurboFan JIT", "hidden class shapes", "deopt triggers"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
            </span>
            <span className="sec-title">Functional & design patterns</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="fp-patterns"
              title="Functional programming patterns"
              frequency="High"
              role="all FE roles"
              tags={["pure functions", "immutability", "composition", "currying / partial application"]}
            />
            <DeepDiveCard
              id="poly-apply"
              title="Implement bind / call / apply"
              frequency="High"
              role="coding round"
              tags={["this context", "spread args", "new + bind edge case", "polyfill pattern"]}
            />
            <DeepDiveCard
              id="deep-ops"
              title="Deep clone / merge / equal"
              frequency="High"
              role="coding round"
              tags={["circular reference", "structuredClone", "prototype chain", "Map/Set handling"]}
            />
            <DeepDiveCard
              id="event-emitter"
              title="Implement EventEmitter"
              frequency="High"
              role="coding round"
              tags={["on / off / emit", "once wrapper", "listener map", "wildcard events"]}
            />
            <DeepDiveCard
              id="utils-impl"
              title="Implement memoize / compose / pipe"
              frequency="Medium"
              role="coding round"
              tags={["cache by args", "reduceRight compose", "variadic pipe", "WeakMap cache"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
            </span>
            <span className="sec-title">TypeScript depth</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="generics"
              title="Generics & constraints"
              frequency="High"
              role="all FE roles"
              tags={["extends constraint", "default generics", "infer keyword", "conditional types"]}
            />
            <DeepDiveCard
              id="utility-types"
              title="Utility types & their implementation"
              frequency="High"
              role="all FE roles"
              tags={["Partial / Required", "Pick / Omit", "ReturnType", "Awaited"]}
            />
            <DeepDiveCard
              id="type-narrowing"
              title="Type narrowing & guards"
              frequency="High"
              role="all FE roles"
              tags={["discriminated union", "typeof / instanceof", "is predicate", "asserts never"]}
            />
            <DeepDiveCard
              id="mapped-literal"
              title="Mapped & template literal types"
              frequency="Medium"
              role="senior FE"
              tags={["keyof / in", "as remapping", "template literal", "recursive types"]}
            />
            <DeepDiveCard
              id="declaration-merging"
              title="Declaration merging & module augmentation"
              frequency="Medium"
              role="senior FE"
              tags={["interface merging", "global augment", "ambient .d.ts", "triple-slash"]}
            />
            <DeepDiveCard
              id="structural-nominal"
              title="Structural vs nominal typing"
              frequency="Medium"
              role="senior FE"
              tags={["duck typing", "brand types", "opaque types", "excess property check"]}
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
            <span className="sec-title">Modules & tooling internals</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="cjs-esm"
              title="CJS vs ESM & tree shaking"
              frequency="High"
              role="all FE roles"
              tags={["static vs dynamic", "live bindings", "tree shaking", "circular deps"]}
            />
            <DeepDiveCard
              id="bundler-internals"
              title="Bundler internals"
              frequency="Medium"
              role="senior FE"
              tags={["dependency graph", "chunk splitting", "Vite ESM dev", "sourcemaps"]}
            />
            <DeepDiveCard
              id="runtime-envs"
              title="Runtime environments"
              frequency="Medium"
              role="fullstack FE"
              tags={["browser vs Node", "edge runtime limits", "Deno / Bun", "Web APIs"]}
            />
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
}
