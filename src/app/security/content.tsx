"use client";

import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import DeepDiveCard from "@/components/DeepDiveCard";

export default function SecurityContent() {
  return (
    <main className="pb-20">
      <div className="mb-6">
        <Link href="/" className="text-accent font-medium inline-flex items-center gap-1 hover:underline">
          <span>←</span> Back to Roadmap & Portfolio
        </Link>
      </div>

      <ScrollAnimation>
        <header className="portfolio-header">
          <h1>Security Deep Dive</h1>
          <p>Master the principles of authentication, authorization, injection mitigation, and zero-trust architecture.</p>
        </header>
      </ScrollAnimation>

      <div className="legend">
        <span><span className="ldot" style={{ background: "#1D9E75" }}></span>High frequency</span>
        <span><span className="ldot" style={{ background: "#185FA5" }}></span>Medium frequency</span>
        <span><span className="ldot" style={{ background: "#888780" }}></span>Occasional / senior+</span>
        <span><span className="badge" style={{ background: "#EEEDFE", color: "#3C3489", border: "0.5px solid #AFA9EC" }}>Role context</span></span>
      </div>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">🔐</span>
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
            <span className="sec-icon">🐛</span>
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
            <span className="sec-icon">🛡️</span>
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
            <span className="sec-icon">🏛️</span>
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
            <span className="sec-icon">📝</span>
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
