export interface CloudTopic {
  id: string;
  title: string;
  frequency: "High" | "Medium" | "Occasional";
  steps: string[];
  tags: string[];
  prompt: string;
}

export interface CloudSection {
  id: string;
  title: string;
  topics: CloudTopic[];
}

export interface CloudCard {
  id: string;
  title: string;
  badge: "High" | "Medium" | "Occasional" | "Senior+" | "Role context" | "Low" | "Strategic";
  body: string;
}

export interface CloudGridSection {
  id: string;
  title: string;
  cards: CloudCard[];
}

export const cloudComputeTopics: CloudTopic[] = [
  {
    id: "containers-k8s",
    title: "Containers & Kubernetes",
    frequency: "High",
    steps: [
      "Container model: image layers, copy-on-write filesystem, namespaces + cgroups for isolation. Know why containers are not VMs — shared kernel, faster startup, no hypervisor overhead.",
      "K8s core objects: Pod, Deployment, Service, ConfigMap, Secret, HPA, PVC. Know the difference between a Deployment (stateless) and a StatefulSet (ordered, stable network identity — for databases, Kafka).",
      "Scheduling & rolling updates: how the scheduler places pods (node affinity, taints/tolerations, resource requests vs limits). Rolling update strategy — max unavailable, max surge. How readiness probes gate traffic during rollout.",
      "Service mesh (Istio/Linkerd): sidecar proxy model, mTLS between services, traffic shaping (canary weights), observability (distributed tracing without code changes)."
    ],
    tags: ["pod lifecycle", "HPA vs VPA", "StatefulSet", "readiness probe", "service mesh", "KEDA"],
    prompt: "Deep dive into Kubernetes — how scheduling, rolling updates, and HPA work for FAANG system design interviews"
  },
  {
    id: "serverless",
    title: "Serverless — functions & containers",
    frequency: "High",
    steps: [
      "Cold start problem: function container must be initialised on first invocation — adds 100ms–2s latency. Mitigations: provisioned concurrency (keep containers warm), smaller runtimes (Node/Python over Java), minifying dependencies.",
      "When to use serverless: event-driven, unpredictable traffic, short-lived tasks (image resize, webhook handler, ETL trigger). When NOT to: long-running jobs (>15 min), persistent connections (WebSockets), latency-sensitive hot paths.",
      "Concurrency model: each invocation is isolated — no shared memory between calls. State must live in external stores (DynamoDB, Redis). At-most-once vs at-least-once execution guarantees."
    ],
    tags: ["cold start", "provisioned concurrency", "event-driven", "execution limits", "idempotency"],
    prompt: "Explain serverless architecture tradeoffs — cold start, concurrency model, when to use vs avoid for FAANG design rounds"
  },
  {
    id: "autoscaling",
    title: "Autoscaling — reactive & predictive",
    frequency: "Medium",
    steps: [
      "HPA (Horizontal Pod Autoscaler): scales pod count based on CPU/memory or custom metrics (queue depth via KEDA). Lag between metric crossing threshold and pods being ready — design for this gap with circuit breakers.",
      "Scale-in risk: aggressively scaling down drops in-flight requests. Use connection draining, PodDisruptionBudgets, and termination grace periods. Scale-out is safe; scale-in needs care.",
      "Predictive scaling: scheduled scaling for known traffic patterns (lunch rush, market open). ML-based predictive scaling (AWS) for recurring patterns. Reduces cold-start lag at known peaks."
    ],
    tags: ["HPA / VPA", "KEDA", "PodDisruptionBudget", "connection draining", "scale-in lag"],
    prompt: "Explain autoscaling strategies for Kubernetes — HPA, KEDA, predictive scaling, and scale-in risks for FAANG"
  }
];

export const cloudReliabilityTopics: CloudTopic[] = [
  {
    id: "multi-region",
    title: "Multi-region HA architecture",
    frequency: "High",
    steps: [
      "Active-active vs active-passive: active-active serves traffic from multiple regions simultaneously — zero failover time but requires conflict-free data replication. Active-passive has a warm standby — failover takes seconds to minutes, but simpler consistency.",
      "Data replication lag: cross-region replication is async — lag can be 100ms–seconds. During failover, reads may return stale data. Design decisions: can your use case tolerate stale reads? If not, synchronous replication (high write latency) or route reads to primary always.",
      "Failover mechanics: DNS-based (Route53 health checks, TTL matters), anycast routing, global load balancer. RTO (recovery time objective) vs RPO (recovery point objective) — interviewers ask you to quantify these.",
      "Cell-based architecture: FAANG-specific pattern — partition users into cells (each cell is an independent stack). A failure in cell 3 doesn't affect cells 1, 2. Blast radius containment."
    ],
    tags: ["active-active", "RTO / RPO", "replication lag", "cell architecture", "anycast"],
    prompt: "Explain multi-region HA architecture — active-active vs active-passive, failover mechanics, and cell-based design for FAANG"
  },
  {
    id: "resilience-patterns",
    title: "Resilience patterns — circuit breaker, bulkhead, retry",
    frequency: "High",
    steps: [
      "Circuit breaker: three states — CLOSED (normal), OPEN (failing fast without calling downstream), HALF-OPEN (probe with limited traffic). Prevents cascading failures when a dependency is degraded.",
      "Retry with exponential backoff + jitter: naive retries amplify load on a struggling service. Jitter randomises retry timing across clients, preventing thundering herd.",
      "Bulkhead: isolate resource pools per dependency — separate thread pools for payment service, inventory service. Titanic metaphor: watertight compartments.",
      "Timeout + deadline propagation: always set timeouts. Propagate deadlines across service calls — if the user's request has 200ms left, don't call a service with a 500ms timeout."
    ],
    tags: ["circuit breaker states", "exponential backoff", "jitter", "bulkhead", "deadline propagation"],
    prompt: "Explain circuit breaker, bulkhead, and retry patterns — states, implementation, and FAANG system design applications"
  },
  {
    id: "deployment-strat",
    title: "Deployment strategies — canary, blue-green, feature flags",
    frequency: "High",
    steps: [
      "Blue-green: two identical environments — switch traffic atomically. Instant rollback (flip DNS/LB back). Cost: double infrastructure during transition.",
      "Canary: route 1–5% of traffic to new version, observe error rates + latency, graduate to 100% if healthy. Slower than blue-green but cheaper and gives real-signal validation.",
      "Feature flags: decouple deploy from release. Code ships dark, flag enables it for % of users or specific cohorts. Enables A/B testing, kill switches, gradual rollout."
    ],
    tags: ["canary weights", "rollback strategy", "feature flag", "dark launch", "traffic shifting"],
    prompt: "Compare blue-green vs canary vs feature flag deployments — tradeoffs and when to use each at FAANG scale"
  }
];

export const cloudNetworkingTopics: CloudTopic[] = [
  {
    id: "load-balancers",
    title: "Load balancers — L4 vs L7, global vs regional",
    frequency: "High",
    steps: [
      "L4 (TCP/UDP): routes by IP + port, no application awareness. Faster, lower overhead. Cannot do path-based routing, header inspection, or TLS termination based on hostname.",
      "L7 (HTTP/gRPC): routes by URL path, headers, cookies. Enables: path routing, A/B traffic splitting, sticky sessions, WAF integration, TLS termination. Cost: higher CPU per connection.",
      "Global load balancer (Anycast): single IP resolves to nearest PoP. Routes to healthiest origin. Used for latency-sensitive global services."
    ],
    tags: ["L4 vs L7", "path routing", "TLS termination", "anycast", "sticky sessions"],
    prompt: "Explain L4 vs L7 load balancers — routing capabilities, tradeoffs, and when to use each in FAANG system design"
  },
  {
    id: "vpc-mesh",
    title: "VPC, subnets, security groups, peering",
    frequency: "High",
    steps: [
      "VPC fundamentals: private isolated network. Public subnets (route to internet gateway) vs private subnets (no direct internet — use NAT gateway for egress).",
      "Security groups vs NACLs: security groups are stateful, instance-level. NACLs are stateless, subnet-level. Use security groups for service-to-service.",
      "VPC peering vs Transit Gateway: peering is non-transitive. Transit Gateway is a hub — connect hundreds of VPCs centrally. Use peering for simple two-VPC connections."
    ],
    tags: ["public vs private subnet", "NAT gateway", "VPC endpoint", "security group", "Transit Gateway"],
    prompt: "Explain VPC architecture — subnets, security groups, peering vs Transit Gateway for FAANG cloud design rounds"
  }
];

export const cloudDataSections: CloudGridSection[] = [
  {
    id: "storage-selection",
    title: "Storage Selection & Databases",
    cards: [
      {
        id: "object-storage",
        title: "Object storage (S3 / GCS)",
        badge: "High",
        body: "Immutable, infinitely scalable, cheap. For: images, video, backups, ML training data, static assets. Key design: pre-signed URLs for secure client-direct upload. Lifecycle rules for tiering."
      },
      {
        id: "managed-db",
        title: "Managed databases (RDS / Spanner)",
        badge: "High",
        body: "RDS Multi-AZ = synchronous standby. Aurora = shared storage, 15 read replicas. Spanner = globally distributed, externally consistent, SQL — for strong consistency across regions."
      },
      {
        id: "managed-queues",
        title: "Managed queues (SQS / Kafka)",
        badge: "High",
        body: "SQS: at-least-once, no ordering. Kinesis/Kafka: ordered within partition, replay, consumer groups. EventBridge: event routing with schema registry."
      },
      {
        id: "caching",
        title: "Caching layer (Redis)",
        badge: "Medium",
        body: "Redis: rich data types (sorted sets, streams), persistence, pub/sub. Choose Redis for almost everything — pick Memcached only for extreme horizontal scaling without persistence."
      }
    ]
  }
];

export const cloudIacTopics: CloudTopic[] = [
  {
    id: "iac-terra",
    title: "Infrastructure as Code — Terraform & CDK",
    frequency: "High",
    steps: [
      "Why IaC: reproducible environments, version-controlled infrastructure, drift detection, peer-reviewed changes. Avoid 'snowflake' servers from manual console config.",
      "Terraform model: declarative — describe desired state, Terraform plans the diff, applies atomically. State file tracks real-world mapping. Remote state for team use.",
      "CDK: define cloud resources in TypeScript/Python — generates CloudFormation. Better for developers who think in code. Enables type-safe constructs.",
      "GitOps: infrastructure changes flow through PRs. Automated plan on PR, apply on merge to main. Drift detection alerts when real infra deviates."
    ],
    tags: ["declarative vs imperative", "state file", "plan / apply", "modules", "GitOps", "drift detection"],
    prompt: "Explain Terraform and IaC concepts at the depth expected in FAANG system design and engineering interviews"
  }
];

export const cloudCostCards: CloudCard[] = [
  {
    id: "compute-levers",
    title: "Compute cost levers",
    badge: "High",
    body: "On-demand: full price. Reserved: 30–60% discount (1-3 yr commit). Spot: 70–90% discount. Design for spot: stateless workers, checkpointing, graceful shutdown. Use spot for batch, never for stateful."
  },
  {
    id: "transfer-costs",
    title: "Data transfer costs",
    badge: "High",
    body: "Egress is expensive, ingress is free. Cross-AZ transfer costs add up at scale. CDN offload reduces origin egress. Co-locate chatty services in the same AZ. VPC endpoints eliminate NAT egress costs."
  },
  {
    id: "right-sizing",
    title: "Right-sizing",
    badge: "Medium",
    body: "Match instance to workload: C (CPU), R/X (Memory), I/D (Storage), P/G (GPU). Target 60–70% average utilisation for headroom. Oversizing is common and costly."
  }
];
