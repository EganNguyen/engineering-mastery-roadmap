"use client";

import PortfolioHero from "@/components/PortfolioHero";
import StickyNav from "@/components/layout/StickyNav";
import ScrollAnimation from "@/components/ScrollAnimation";
import TopicCard from "@/components/TopicCard";
import { motion } from "framer-motion";

export default function Home() {
  // Color Definitions for Roadmap (Systematic Feel)
  const coreColor = {
    bg: "rgba(29, 158, 117, 0.1)",
    text: "#4ADE80",
    border: "rgba(29, 158, 117, 0.3)"
  };
  const emergingColor = {
    bg: "rgba(24, 95, 165, 0.1)",
    text: "#60A5FA",
    border: "rgba(24, 95, 165, 0.3)"
  };
  const supplementaryColor = {
    bg: "rgba(127, 119, 221, 0.15)",
    text: "#A78BFA",
    border: "rgba(127, 119, 221, 0.4)"
  };

  return (
    <main className="pb-20">
      <div className="bg-grid"></div>

      {/* 1. Hero Section */}
      <PortfolioHero />

      {/* 3. Portfolio Section */}
      <section id="portfolio" className="mb-32">
        <ScrollAnimation>
          <div className="border-b border-border-tertiary pb-6 mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight">Summary</h2>
            <p className="text-lg text-text-secondary max-w-3xl mt-4">
              Software engineer focused on distributed systems,
              backend architecture, cloud infrastructure, observability,
              and production-grade engineering.
            </p>
          </div>

          {/* Portfolio Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="stat-card">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Backend</div>
              <div className="stat-label">Distributed Systems</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Cloud</div>
              <div className="stat-label">AWS</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Focus</div>
              <div className="stat-label">Production Quality</div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation variant="stagger">
          <div className="section-label mb-10">Core Expertise</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TopicCard
              id="exp-backend"
              index="01"
              variant="portfolio"
              title="Backend Architecture"
              badges={["C# / .NET", "Go", "Distributed Systems", "Clean Architecture"]}
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
            />
            <TopicCard
              id="exp-infra"
              index="02"
              variant="portfolio"
              title="Infrastructure & Cloud"
              badges={["AWS", "Kubernetes", "Terraform", "Docker"]}
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>}
            />
            <TopicCard
              id="exp-data"
              index="03"
              variant="portfolio"
              title="Data Systems"
              badges={["PostgreSQL", "Redis", "Kafka", "ClickHouse"]}
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>}
            />
          </div>
        </ScrollAnimation>
      </section>

      {/* 4. Featured Projects */}
      <section id="projects" className="mb-32">
        <ScrollAnimation variant="stagger">
          <div className="section-label mb-10">Featured Projects</div>
          <div className="grid">
            <a
              href="https://github.com/EganNguyen/Open-Guard"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-2 no-underline"
            >
              <motion.div
                initial="initial"
                whileHover="hover"
                variants={{
                  hover: { y: -8 }
                }}
                className="card group portfolio-variant p-10"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <motion.div 
                    variants={{
                      initial: { scale: 1, rotate: 0 },
                      hover: { 
                        scale: 1.1,
                        rotate: [0, -2, 2, 0],
                        transition: { 
                          rotate: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                        }
                      }
                    }}
                    className="w-24 h-24 rounded-2xl bg-background-secondary border border-border-tertiary flex items-center justify-center text-primary shrink-0 transition-transform"
                  >
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-3xl font-bold text-text-primary group-hover:text-accent transition-colors">Open Guard</h3>
                        <span className="freq freq-h text-[10px]">High Throughput</span>
                      </div>
                      <svg className="w-6 h-6 text-text-secondary group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </div>
                    <p className="text-xl text-text-secondary mb-8">
                      A scalable multi-tenant security platform (IAM, policy engine, audit) handling high-throughput workloads with p99 latency &lt; 30ms.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <span className="tag px-4 py-2">.NET Core</span>
                      <span className="tag px-4 py-2">PostgreSQL</span>
                      <span className="tag px-4 py-2">Kafka</span>
                      <span className="tag px-4 py-2">Kubernetes</span>
                      <span className="tag px-4 py-2">Prometheus</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </a>
          </div>
        </ScrollAnimation>
      </section>



      {/* 6. Software Engineering Roadmap Section */}
      <section id="roadmap" className="pt-20 border-t border-border-tertiary bg-roadmap-section">
        <ScrollAnimation>
          <div className="mb-16">
            <div className="section-label mb-6">Learning Map</div>
            <h2 className="text-4xl font-extrabold tracking-tight mb-6">Software Engineering Roadmap</h2>
            <p className="text-lg text-text-secondary max-w-3xl">
              A systematic, production-grade guide to mastering high-performance engineering.
              Focused on the foundations required for FAANG-level systems.
            </p>
          </div>

          <div className="legend mb-16 flex flex-wrap gap-8">
            <span><span className="dot" style={{ color: "#4ADE80" }}></span>Core — always tested</span>
            <span><span className="dot" style={{ color: "#60A5FA" }}></span>Emerging — rising weight</span>
            <span><span className="dot" style={{ color: "#A78BFA" }}></span>Supplementary</span>
          </div>
        </ScrollAnimation>

        <div className="space-y-4">
          {/* Foundations */}
          <div className="roadmap-node">
            <ScrollAnimation variant="stagger">
              <div className="sec-head mb-12">
                <motion.div 
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="sec-icon bg-green-500/10 border-green-500/20 text-green-500 p-3 rounded-xl border"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                </motion.div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-text-primary">Foundations</h3>
                </div>
              </div>

              <div className="roadmap-line line-orange" />

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <TopicCard
                  id="dsa-patterns"
                  index="01"
                  title="DSA + Patterns"
                  badges={["Arrays / trees", "Sliding window", "DP", "Backtracking", "Bit manipulation"]}
                  color={coreColor}
                />
                <TopicCard
                  id="lld"
                  index="02"
                  title="Low-Level Design (LLD)"
                  badges={["OOP + SOLID", "Design patterns", "Class diagrams", "State machines"]}
                  color={coreColor}
                />
                <TopicCard
                  id="concurrency-os-hub"
                  index="03"
                  title="Concurrency & OS"
                  badges={["Threads / locks", "Deadlock", "Scheduling", "Virtual memory"]}
                  href="/concurrency-os"
                  color={coreColor}
                />
              </div>
            </ScrollAnimation>
          </div>

          <div className="roadmap-separator" />

          {/* System Design */}
          <div className="roadmap-node">
            <ScrollAnimation variant="stagger">
              <div className="sec-head mb-12">
                <motion.div 
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="sec-icon bg-cyan-500/10 border-cyan-500/20 text-cyan-500 p-3 rounded-xl border"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </motion.div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-text-primary">System Design</h3>
                </div>
              </div>

              <div className="roadmap-line line-orange" />

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <TopicCard
                  id="hld"
                  index="04"
                  title="System Design (HLD)"
                  badges={["CAP / consistency", "Sharding", "Caching layers", "Message queues", "Rate limiting"]}
                  color={coreColor}
                />
                <TopicCard
                  id="api-design"
                  index="05"
                  title="API Design"
                  badges={["REST vs GraphQL vs gRPC", "Versioning", "Idempotency", "Pagination"]}
                  color={coreColor}
                />
                <TopicCard
                  id="networking-db-hub"
                  index="06"
                  title="Networking + DB Internals"
                  badges={["TCP / HTTP/2 / QUIC", "B-trees / LSM", "MVCC", "Query planner"]}
                  href="/networking-db"
                  color={coreColor}
                />
                <TopicCard
                  id="cloud-arch"
                  index="07"
                  title="Cloud Architecture"
                  badges={["Serverless", "K8s", "IaC", "Multi-region HA", "Cost opt"]}
                  color={coreColor}
                />
              </div>
            </ScrollAnimation>
          </div>

          <div className="roadmap-separator" />

          {/* Frontend Fundamentals */}
          <div className="roadmap-node">
            <ScrollAnimation variant="stagger">
              <div className="sec-head mb-12">
                <motion.div 
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="sec-icon bg-orange-500/10 border-orange-500/20 text-orange-500 p-3 rounded-xl border"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </motion.div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-text-primary">Frontend Fundamentals</h3>
                </div>
              </div>

              <div className="roadmap-line line-orange" />

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <TopicCard
                  id="browser-rendering-hub"
                  index="08"
                  title="Browser & Rendering"
                  badges={["DOM / CSSOM", "Paint/Layout/Composite", "Reflow vs Repaint", "Shadow DOM"]}
                  href="/browser-rendering"
                  color={coreColor}
                />
                <TopicCard
                  id="js-ts-depth"
                  index="09"
                  title="JavaScript / TypeScript Depth"
                  badges={["Closures", "Event Loop", "Async / Promises", "TS generics"]}
                  href="/javascript-typescript"
                  color={coreColor}
                />
                <TopicCard
                  id="frameworks-state"
                  index="10"
                  title="Frameworks & State"
                  badges={["React reconciliation", "Hooks internals", "Virtual DOM", "SSR / Hydration"]}
                  color={coreColor}
                />
                <TopicCard
                  id="frontend-perf"
                  index="11"
                  title="Frontend Performance"
                  badges={["Web Vitals", "Code Splitting", "Lazy Loading", "Bundle optimisation"]}
                  href="/frontend-performance"
                  color={coreColor}
                />
                <TopicCard
                  id="css-a11y"
                  index="12"
                  title="CSS Depth & A11y"
                  badges={["Flexbox / Grid", "CSS Specificity", "ARIA / WCAG", "Responsive"]}
                  color={supplementaryColor}
                />
                <TopicCard
                  id="frontend-security"
                  index="13"
                  title="Frontend Security"
                  badges={["XSS / CSRF", "CSP headers", "CORS", "OAuth / PKCE"]}
                  color={supplementaryColor}
                />
              </div>
            </ScrollAnimation>
          </div>

          <div className="roadmap-separator" />

          {/* Quality & Production */}
          <div className="roadmap-node">
            <ScrollAnimation variant="stagger">
              <div className="sec-head mb-12">
                <motion.div 
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="sec-icon bg-purple-500/10 border-purple-500/20 text-purple-500 p-3 rounded-xl border"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </motion.div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-text-primary">Quality & Production</h3>
                </div>
              </div>

              <div className="roadmap-line line-orange" />

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <TopicCard
                  id="backend-security-hub"
                  index="14"
                  title="Security (Backend)"
                  badges={["Auth / OAuth / JWT", "OWASP top 10", "TLS / mTLS", "Secrets mgmt"]}
                  href="/security"
                  color={supplementaryColor}
                />
                <TopicCard
                  id="sre-obs"
                  index="15"
                  title="Observability & SRE"
                  badges={["Metrics / logs / traces", "SLO / SLA / SLI", "Incident response"]}
                  color={coreColor}
                />
                <TopicCard
                  id="perf-eng"
                  index="16"
                  title="Performance Engineering"
                  badges={["Profiling", "CPU / memory", "Latency budgets", "Flamegraphs"]}
                  href="/performance-engineering"
                  color={coreColor}
                />
                <TopicCard
                  id="testing-prod"
                  index="17"
                  title="Testing & Production"
                  badges={["Unit / Integration / E2E", "Contract tests", "Canary / blue-green"]}
                  color={supplementaryColor}
                />
                <TopicCard
                  id="data-pipelines"
                  index="18"
                  title="Data Engineering"
                  badges={["Batch vs streaming", "Kafka / Flink", "Data lake / warehouse"]}
                  color={emergingColor}
                />
              </div>
            </ScrollAnimation>
          </div>

          <div className="roadmap-separator" />

          {/* AI & Emerging */}
          <div className="roadmap-node">
            <ScrollAnimation variant="stagger">
              <div className="sec-head mb-12">
                <motion.div 
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="sec-icon bg-blue-500/10 border-blue-500/20 text-blue-500 p-3 rounded-xl border"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </motion.div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-text-primary">AI & Emerging</h3>
                </div>
              </div>

              <div className="roadmap-line line-orange" />

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <TopicCard
                  id="ai-coding"
                  index="19"
                  title="AI-Enabled Coding"
                  badges={["Copilot / Cursor", "Prompt-to-code", "AI code review"]}
                  color={emergingColor}
                />
                <TopicCard
                  id="ml-ai-hub"
                  index="20"
                  title="ML / AI Fundamentals"
                  badges={["Embeddings / vectors", "RAG architecture", "LLM APIs", "Vector DBs"]}
                  href="/ml-ai"
                  color={emergingColor}
                />
                <TopicCard
                  id="ethics-privacy"
                  index="21"
                  title="Ethics & Privacy"
                  badges={["GDPR / residency", "Responsible AI", "Bias in ML", "Privacy by design"]}
                  color={supplementaryColor}
                />
              </div>
            </ScrollAnimation>
          </div>

          <div className="roadmap-separator" />

          {/* Leadership */}
          <div className="roadmap-node">
            <ScrollAnimation variant="stagger">
              <div className="sec-head mb-12">
                <motion.div 
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
                  className="sec-icon bg-indigo-500/10 border-indigo-500/20 text-indigo-500 p-3 rounded-xl border"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </motion.div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-text-primary">Leadership</h3>
                </div>
              </div>

              <div className="roadmap-line line-orange" />

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <TopicCard
                  id="behavioral-leadership"
                  index="22"
                  title="Behavioral / Leadership"
                  badges={["STAR method", "Conflict resolution", "Ownership", "Ambiguity"]}
                  color={coreColor}
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* 5. Hire Me Section */}
      <section id="contact" className="mb-32 pt-20 border-t border-border-tertiary">
        <ScrollAnimation>
          <div className="card p-12 text-center portfolio-variant relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

            <p className="text-sm uppercase tracking-[0.2em] text-text-secondary mb-6 font-mono">
              Available for opportunities
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Building reliable systems at scale.
            </h2>

            <p className="max-w-2xl mx-auto text-xl text-text-secondary mb-10">
              Interested in backend engineering, distributed systems,
              cloud infrastructure, and production-grade platforms.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://www.linkedin.com/in/tuan-nguyen-a31600244/" target="_blank" rel="noopener noreferrer" className="btn btn-primary px-10 py-4 text-lg">
                LinkedIn
              </a>
              <a href="https://github.com/EganNguyen" target="_blank" rel="noopener noreferrer" className="btn btn-secondary px-10 py-4 text-lg">
                GitHub Profile
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* 7. Footer Terminal */}
      <ScrollAnimation>
        <div className="terminal mt-32">
          <div className="terminal-header">
            <div className="dot-btn dot-red"></div>
            <div className="dot-btn dot-yellow"></div>
            <div className="dot-btn dot-green"></div>
          </div>
          <div className="space-y-1">
            <p className="m-0"><span className="text-secondary">$</span> status --summary</p>
            <p className="m-0 text-primary font-bold">{"> Environment: Production Ready"}</p>
            <p className="m-0 text-text-secondary opacity-70">Engineer: Tuan Nguyen</p>
            <p className="m-0 text-text-secondary opacity-70">Focus: Scalable Distributed Systems</p>
            <p className="m-0 text-primary">$ deploy --optimize</p>
            <p className="m-0 text-primary font-bold">{"> Systems healthy. Ready for impact."}</p>
          </div>
        </div>
      </ScrollAnimation>
    </main>
  );
}
