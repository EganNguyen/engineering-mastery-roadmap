"use client";

import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import DeepDiveCard from "@/components/DeepDiveCard";

export default function NetworkingDBContent() {
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
          <h1>Networking & DB Internals</h1>
          <p>Deep dive into network protocols, load balancing, database engines, indexing, and distributed transactions.</p>
        </header>
      </ScrollAnimation>

      <div className="legend">
        <span><span className="ldot" style={{ background: "#4ADE80" }}></span>High frequency</span>
        <span><span className="ldot" style={{ background: "#60A5FA" }}></span>Medium frequency</span>
        <span><span className="ldot" style={{ background: "#94A3B8" }}></span>Occasional / senior roles</span>
      </div>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
            </span>
            <span className="sec-title">Networking</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="tcp-udp"
              title="TCP vs UDP"
              frequency="High"
              tags={["3-way handshake", "flow control", "congestion control", "reliable delivery"]}
            />
            <DeepDiveCard
              id="http-versions"
              title="HTTP/1.1 → HTTP/2 → HTTP/3 / QUIC"
              frequency="High"
              tags={["multiplexing", "head-of-line blocking", "server push", "QUIC over UDP"]}
            />
            <DeepDiveCard
              id="dns-resolution"
              title="DNS resolution"
              frequency="High"
              tags={["recursive vs iterative", "TTL & caching", "anycast", "DNS over HTTPS"]}
            />
            <DeepDiveCard
              id="tls-mtls"
              title="TLS & mTLS"
              frequency="High"
              tags={["certificate chain", "symmetric vs asymmetric", "TLS 1.3", "session resumption"]}
            />
            <DeepDiveCard
              id="cdn-edge"
              title="CDN & edge caching"
              frequency="Medium"
              tags={["cache-control headers", "origin shield", "cache invalidation", "geo-routing"]}
            />
            <DeepDiveCard
              id="websockets-sse"
              title="WebSockets vs long polling vs SSE"
              frequency="Medium"
              tags={["bidirectional", "heartbeat", "backpressure", "fan-out"]}
            />
            <DeepDiveCard
              id="load-balancing"
              title="Load balancing"
              frequency="Medium"
              tags={["L4 vs L7", "round-robin", "least connections", "sticky sessions"]}
            />
            <DeepDiveCard
              id="bgp-routing"
              title="BGP & internet routing"
              frequency="Occasional"
              tags={["AS paths", "peering", "route flapping", "anycast"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
            </span>
            <span className="sec-title">Database internals</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="btree-lsm"
              title="B-tree vs LSM tree"
              frequency="High"
              tags={["write amplification", "read amplification", "compaction", "SSTables"]}
            />
            <DeepDiveCard
              id="indexes-depth"
              title="Indexes in depth"
              frequency="High"
              tags={["clustered vs secondary", "covering index", "index scan vs seek", "partial index"]}
            />
            <DeepDiveCard
              id="mvcc-isolation"
              title="MVCC & isolation levels"
              frequency="High"
              tags={["read committed", "repeatable read", "serializable", "phantom reads"]}
            />
            <DeepDiveCard
              id="query-planner"
              title="Query planner & optimizer"
              frequency="High"
              tags={["cost-based optimizer", "statistics / cardinality", "join order", "EXPLAIN plan"]}
            />
            <DeepDiveCard
              id="wal-recovery"
              title="WAL & crash recovery"
              frequency="High"
              tags={["REDO / UNDO log", "checkpoint", "ARIES algorithm", "fsync"]}
            />
            <DeepDiveCard
              id="replication-strat"
              title="Replication strategies"
              frequency="High"
              tags={["leader-follower", "sync vs async", "replication lag", "multi-leader conflicts"]}
            />
            <DeepDiveCard
              id="sharding-strat"
              title="Sharding strategies"
              frequency="Medium"
              tags={["range vs hash shard", "hotspot avoidance", "resharding", "cross-shard joins"]}
            />
            <DeepDiveCard
              id="acid-locking"
              title="ACID & locking internals"
              frequency="Medium"
              tags={["2-phase locking", "deadlock detection", "optimistic concurrency", "gap locks"]}
            />
            <DeepDiveCard
              id="consistent-hashing"
              title="Consistent hashing"
              frequency="Medium"
              tags={["virtual nodes", "minimal disruption", "ring topology", "hot partitions"]}
            />
            <DeepDiveCard
              id="columnar-storage"
              title="Columnar vs row storage"
              frequency="Medium"
              tags={["OLAP vs OLTP", "compression", "vectorised execution", "Parquet / Arrow"]}
            />
            <DeepDiveCard
              id="dist-transactions"
              title="Distributed transactions"
              frequency="Occasional"
              tags={["2-phase commit", "Saga pattern", "coordinator failure", "eventual consistency"]}
            />
            <DeepDiveCard
              id="vector-db-internals"
              title="Vector DB internals"
              frequency="Occasional"
              tags={["ANN search", "HNSW graph", "IVF / PQ", "embedding distance"]}
            />
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
}
