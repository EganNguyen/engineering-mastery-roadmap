"use client";

import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import DeepDiveCard from "@/components/DeepDiveCard";

export default function SecurityContent() {
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
          <div className="eyebrow mb-2">Systems Mastery</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Security Deep Dive</h1>
          <p className="text-lg text-text-secondary max-w-3xl">
            Master the principles of authentication, authorization, injection mitigation, and zero-trust architecture.
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </span>
            <span className="sec-title">Authentication & authorisation</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="oauth"
              title="OAuth 2.0 & OIDC"
              frequency="High"
              role="all roles"
              tags={["auth code + PKCE", "access vs refresh token", "OIDC id_token", "token introspection"]}
            />
            <DeepDiveCard
              id="jwt"
              title="JWT — internals & pitfalls"
              frequency="High"
              role="all roles"
              tags={["header.payload.sig", "alg:none attack", "RS256 vs HS256", "expiry / revocation"]}
            />
            <DeepDiveCard
              id="session-mgmt"
              title="Session management"
              frequency="High"
              role="all roles"
              tags={["HttpOnly / Secure / SameSite", "session fixation", "token rotation", "sliding expiry"]}
            />
            <DeepDiveCard
              id="rbac-abac"
              title="RBAC vs ABAC"
              frequency="Medium"
              role="backend / design"
              tags={["role hierarchy", "policy engine", "Zanzibar / ReBAC", "least privilege"]}
            />
            <DeepDiveCard
              id="pwd-hashing"
              title="Password hashing"
              frequency="Medium"
              role="backend"
              tags={["bcrypt / Argon2", "salt", "work factor", "rainbow table defence"]}
            />
            <DeepDiveCard
              id="mtls"
              title="mTLS & service identity"
              frequency="Medium"
              role="backend / infra"
              tags={["mutual TLS", "SPIFFE / SPIRE", "cert rotation", "zero trust"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </span>
            <span className="sec-title">Injection & input attacks</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="sql-injection"
              title="SQL injection"
              frequency="High"
              role="all roles"
              tags={["parameterised queries", "ORM pitfalls", "second-order injection", "WAF limitations"]}
            />
            <DeepDiveCard
              id="xss-security"
              title="XSS — all three types"
              frequency="High"
              role="frontend / fullstack"
              tags={["stored vs reflected", "DOM-based XSS", "output encoding", "trusted types"]}
            />
            <DeepDiveCard
              id="csrf-security"
              title="CSRF"
              frequency="High"
              role="frontend / backend"
              tags={["forged cross-origin request", "SameSite=Strict/Lax", "double-submit cookie", "CSRF token"]}
            />
            <DeepDiveCard
              id="ssrf-injection"
              title="Command injection, SSRF & path traversal"
              frequency="Medium"
              role="backend"
              tags={["shell injection", "SSRF to internal services", "../traversal", "allowlist validation"]}
            />
            <DeepDiveCard
              id="proto-pollution"
              title="Prototype pollution"
              frequency="Medium"
              role="frontend / Node.js"
              tags={["__proto__ mutation", "Object.create(null)", "deep merge risk", "JSON parse safety"]}
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
            <span className="sec-title">Transport & data security</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="tls-hsts"
              title="TLS 1.3 & HSTS"
              frequency="High"
              role="all roles"
              tags={["1-RTT handshake", "0-RTT resumption", "cert pinning", "HSTS preload"]}
            />
            <DeepDiveCard
              id="encryption-at-rest"
              title="Encryption at rest & in transit"
              frequency="Medium"
              role="backend / infra"
              tags={["AES-GCM", "envelope encryption", "KMS / HSM", "key rotation"]}
            />
            <DeepDiveCard
              id="secrets-mgmt"
              title="Secrets management"
              frequency="Medium"
              role="backend / infra"
              tags={["no secrets in env vars", "Vault dynamic secrets", "short-lived creds", "audit logs"]}
            />
            <DeepDiveCard
              id="pii-handling"
              title="Tokenisation & PII handling"
              frequency="Medium"
              role="backend / design"
              tags={["format-preserving encryption", "tokenisation vault", "data minimisation", "GDPR compliance"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </span>
            <span className="sec-title">System design security</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="rate-limiting-sec"
              title="Rate limiting & abuse prevention"
              frequency="High"
              role="system design"
              tags={["token bucket", "IP vs user-level", "distributed rate limit", "bot detection"]}
            />
            <DeepDiveCard
              id="zero-trust-arch"
              title="Zero trust architecture"
              frequency="Medium"
              role="senior / infra"
              tags={["never trust, always verify", "service mesh", "workload identity", "network segmentation"]}
            />
            <DeepDiveCard
              id="supply-chain"
              title="Supply chain security"
              frequency="Occasional"
              role="senior / staff+"
              tags={["SBOM", "Sigstore / cosign", "dependency confusion", "SLSA framework"]}
            />
            <DeepDiveCard
              id="secure-gateway"
              title="Secure API gateway design"
              frequency="Medium"
              role="system design"
              tags={["authn at edge", "schema validation", "threat modelling", "audit trail"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </span>
            <span className="sec-title">OWASP & secure coding</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="owasp-top-10"
              title="OWASP Top 10"
              frequency="High"
              role="all roles"
              tags={["broken access control", "cryptographic failures", "injection", "insecure design"]}
            />
            <DeepDiveCard
              id="threat-modelling"
              title="Threat modelling"
              frequency="Medium"
              role="senior / design"
              tags={["STRIDE", "data flow diagram", "trust boundaries", "attack surface"]}
            />
            <DeepDiveCard
              id="secure-coding"
              title="Secure coding principles"
              frequency="Medium"
              role="all roles"
              tags={["input validation", "output encoding", "fail secure", "defence in depth"]}
            />
            <DeepDiveCard
              id="timing-attacks"
              title="Timing attacks & side channels"
              frequency="Occasional"
              role="senior / crypto"
              tags={["early-exit comparison", "constant-time compare", "cache side channel", "Spectre"]}
            />
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
}
