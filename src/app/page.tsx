"use client";

import PortfolioHero from "@/components/PortfolioHero";
import ScrollAnimation from "@/components/ScrollAnimation";
import TopicCard from "@/components/TopicCard";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="pb-20">
      <div className="bg-glow"></div>
      <div className="bg-grid"></div>

      <PortfolioHero />

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="section-label">Core Tech Stack</div>
          <div className="grid">
            <TopicCard
              id="tech-backend"
              index="01"
              title="Backend Languages"
              badges={["C# / .NET", "Go", "Python"]}
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>}
            />
            <TopicCard
              id="tech-frontend"
              index="02"
              title="Frontend Languages"
              badges={["Angular", "Next.js", "Vue.js"]}
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>}
            />
            <TopicCard
              id="tech-data"
              index="03"
              title="Data & State"
              badges={["PostgreSQL", "Redis", "MongoDB", "ClickHouse"]}
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>}
            />
            <TopicCard
              id="tech-infra"
              index="04"
              title="Infrastructure & Messaging"
              badges={["Docker", "RabbitMQ", "Kubernetes", "Kafka", "AWS"]}
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>}
            />
            <TopicCard
              id="tech-obs"
              index="05"
              title="Observability & Practices"
              badges={["Prometheus / Grafana", "OpenTelemetry", "Clean Architecture", "DDD"]}
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M3 3v18h18" /><path d="M18 9l-5 5-2-2-4 4" /></svg>}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="section-label">Key Projects</div>
          <div className="grid">
            <a
              href="https://github.com/EganNguyen/Open-Guard"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-2 no-underline"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="card group"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">Open Guard</h3>
                        <span className="freq freq-h text-[10px]">Production Grade</span>
                      </div>
                      <svg className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </div>
                    <p className="text-text-secondary mb-6">
                      A scalable multi-tenant security platform (IAM, policy engine, audit) handling high-throughput workloads with p99 latency &lt; 30ms.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="tag text-purple-400">.NET Core</span>
                      <span className="tag text-blue-400">PostgreSQL</span>
                      <span className="tag text-yellow-400">Kafka</span>
                      <span className="tag text-blue-300">Kubernetes</span>
                      <span className="tag text-orange-400">Prometheus</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </a>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="terminal">
          <div className="terminal-header">
            <div className="dot-btn dot-red"></div>
            <div className="dot-btn dot-yellow"></div>
            <div className="dot-btn dot-green"></div>
          </div>
          <div className="space-y-1">
            <p className="m-0"><span className="text-blue-400">$</span> kubectl get pods -n open-guard</p>
            <p className="m-0 text-white">NAME                             READY   STATUS    RESTARTS   AGE</p>
            <p className="m-0 text-gray-400">iam-service-7f4b9d8c           1/1     Running   0          12d</p>
            <p className="m-0 text-gray-400">policy-engine-5d2a3f1b         1/1     Running   0          12d</p>
            <p className="m-0 text-gray-400">audit-log-9b8c7d6e             1/1     Running   0          12d</p>
            <p className="m-0 text-green-400">$ system_status --check all</p>
            <p className="m-0 text-green-500 font-bold">{"> All systems healthy. Latency within SLA."}</p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-[100px] mb-8 border-b border-border-tertiary pb-6">
          <h2 className="text-4xl font-extrabold tracking-tight">Engineering Mastery Roadmap</h2>
          <p className="text-lg">A comprehensive, FAANG-level guide to mastering software engineering fundamentals, system design, and production-grade development.</p>
        </div>
      </ScrollAnimation>

      <div className="legend">
        <span><span className="dot" style={{ color: "#10b981" }}></span>Core — always tested</span>
        <span><span className="dot" style={{ color: "#3b82f6" }}></span>Emerging — rising weight</span>
        <span><span className="dot" style={{ color: "#818cf8" }}></span>Supplementary</span>
      </div>

      {/* Color Definitions */}
      {(() => {
        const coreColor = { bg: "rgba(16, 185, 129, 0.1)", text: "#10b981", border: "rgba(16, 185, 129, 0.2)" };
        const emergingColor = { bg: "rgba(59, 130, 246, 0.1)", text: "#3b82f6", border: "rgba(59, 130, 246, 0.2)" };
        const supplementaryColor = { bg: "rgba(129, 140, 248, 0.1)", text: "#818cf8", border: "rgba(129, 140, 248, 0.2)" };

        return (
          <div className="space-y-16">
            <ScrollAnimation variant="stagger">
              <div className="section-label">Foundations</div>
              <div className="grid">
                <TopicCard
                  id="dsa-patterns"
                  index="01"
                  title="DSA + Patterns"
                  badges={["Arrays / trees / graphs", "Sliding window", "Two pointers", "DP", "Backtracking", "Bit manipulation"]}
                  color={coreColor}
                />
                <TopicCard
                  id="lld"
                  index="02"
                  title="Low-Level Design (LLD)"
                  badges={["OOP + SOLID", "Design patterns", "Class diagrams", "LRU / parking lot", "State machines"]}
                  color={coreColor}
                />
                <TopicCard
                  id="concurrency-os-hub"
                  index="03"
                  title="Concurrency & OS"
                  badges={["Threads / locks / semaphores", "Deadlock", "Scheduling", "Memory model", "Virtual memory"]}
                  href="/concurrency-os"
                  color={coreColor}
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation variant="stagger">
              <div className="section-label">System Design</div>
              <div className="grid">
                <TopicCard
                  id="hld"
                  index="04"
                  title="System Design (HLD)"
                  badges={["CAP / consistency", "Sharding", "Caching layers", "Message queues", "Rate limiting", "Leader election"]}
                  color={coreColor}
                />
                <TopicCard
                  id="api-design"
                  index="05"
                  title="API Design"
                  badges={["REST vs GraphQL vs gRPC", "Versioning", "Idempotency", "Pagination", "Webhooks"]}
                  color={coreColor}
                />
                <TopicCard
                  id="networking-db-hub"
                  index="06"
                  title="Networking + DB Internals"
                  badges={["TCP / HTTP/2 / QUIC", "DNS / CDN", "B-trees / LSM", "MVCC", "Query planner"]}
                  href="/networking-db"
                  color={coreColor}
                />
                <TopicCard
                  id="cloud-arch"
                  index="07"
                  title="Cloud Architecture"
                  badges={["Serverless", "Containers / K8s", "IaC", "Multi-region HA", "Cost optimisation"]}
                  color={coreColor}
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation variant="stagger">
              <div className="section-label">Frontend Fundamentals</div>
              <div className="grid">
                <TopicCard
                  id="browser-rendering-hub"
                  index="08"
                  title="Browser & Rendering"
                  badges={["DOM / CSSOM", "Paint / layout / composite", "Reflow vs repaint", "Event loop", "Shadow DOM"]}
                  href="/browser-rendering"
                  color={coreColor}
                />
                <TopicCard
                  id="js-ts-depth"
                  index="09"
                  title="JavaScript / TypeScript Depth"
                  badges={["Closures / prototypes", "Event loop / microtasks", "Async / Promises", "TS generics", "Memory leaks"]}
                  color={coreColor}
                />
                <TopicCard
                  id="frameworks-state"
                  index="10"
                  title="Frameworks & State Management"
                  badges={["React reconciliation", "Hooks internals", "Virtual DOM", "Redux / Zustand", "SSR / hydration"]}
                  color={coreColor}
                />
                <TopicCard
                  id="frontend-perf"
                  index="11"
                  title="Frontend Performance"
                  badges={["Core Web Vitals", "Code splitting", "Lazy loading", "Bundle optimisation", "Cache strategies"]}
                  color={coreColor}
                />
                <TopicCard
                  id="css-a11y"
                  index="12"
                  title="CSS Depth & Accessibility"
                  badges={["Flexbox / Grid", "CSS specificity", "ARIA / WCAG", "Responsive design", "CSS-in-JS"]}
                  color={supplementaryColor}
                />
                <TopicCard
                  id="frontend-security"
                  index="13"
                  title="Frontend Security"
                  badges={["XSS / CSRF", "CSP headers", "CORS", "OAuth / PKCE", "Secure storage"]}
                  color={supplementaryColor}
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation variant="stagger">
              <div className="section-label">Quality & Production</div>
              <div className="grid">
                <TopicCard
                  id="backend-security-hub"
                  index="14"
                  title="Security (Backend)"
                  badges={["Auth / OAuth / JWT", "OWASP top 10", "TLS / mTLS", "Secrets mgmt", "Zero trust"]}
                  href="/security"
                  color={supplementaryColor}
                />
                <TopicCard
                  id="sre-obs"
                  index="15"
                  title="Observability & SRE"
                  badges={["Metrics / logs / traces", "SLO / SLA / SLI", "Incident response", "On-call design"]}
                  color={coreColor}
                />
                <TopicCard
                  id="perf-eng"
                  index="16"
                  title="Performance Engineering"
                  badges={["Profiling", "CPU / memory", "Latency budgets", "Load testing", "Flamegraphs"]}
                  color={coreColor}
                />
                <TopicCard
                  id="testing-quality"
                  index="17"
                  title="Testing & Production Quality"
                  badges={["Unit / integration / E2E", "Contract tests", "Feature flags", "Canary / blue-green"]}
                  color={supplementaryColor}
                />
                <TopicCard
                  id="data-pipelines"
                  index="18"
                  title="Data Engineering Pipelines"
                  badges={["Rising", "Batch vs streaming", "Kafka / Flink", "Data lake / warehouse"]}
                  color={emergingColor}
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation variant="stagger">
              <div className="section-label">AI & Emerging</div>
              <div className="grid">
                <TopicCard
                  id="ai-coding"
                  index="19"
                  title="AI-Enabled Coding"
                  badges={["Rising", "Copilot / Cursor workflow", "Prompt-to-code", "AI code review", "Test generation"]}
                  color={emergingColor}
                />
                <TopicCard
                  id="ml-ai-hub"
                  index="20"
                  title="ML / AI Fundamentals for SWEs"
                  badges={["Rising", "Embeddings / vectors", "RAG architecture", "LLM APIs", "Fine-tuning basics", "Vector DBs"]}
                  href="/ml-ai"
                  color={emergingColor}
                />
                <TopicCard
                  id="ethics-privacy"
                  index="21"
                  title="Ethics, Privacy & Compliance"
                  badges={["GDPR / data residency", "Responsible AI", "Bias in ML", "Privacy by design"]}
                  color={supplementaryColor}
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation variant="stagger">
              <div className="section-label">Leadership</div>
              <div className="grid">
                <TopicCard
                  id="behavioral-leadership"
                  index="22"
                  title="Behavioral / Leadership Thinking"
                  badges={["STAR method", "Conflict resolution", "Ownership & bias for action", "Navigating ambiguity", "Cross-team influence"]}
                  color={coreColor}
                />
              </div>
            </ScrollAnimation>
          </div>
        );
      })()}
    </main>
  );
}
