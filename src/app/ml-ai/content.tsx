"use client";

import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import DeepDiveCard from "@/components/DeepDiveCard";

export default function MLAIFundamentalsContent() {
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
          <h1>ML & AI Fundamentals for SWEs</h1>
          <p>Master the literacy of LLMs, vector search, RAG architecture, and ML system design expected in modern engineering interviews.</p>
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </span>
            <span className="sec-title">LLM & foundation model literacy</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="transformer"
              title="Transformer architecture"
              frequency="High"
              role="all roles"
              tags={["attention mechanism", "encoder vs decoder", "positional encoding", "context window"]}
            />
            <DeepDiveCard
              id="tokenisation"
              title="Tokenisation"
              frequency="High"
              role="all roles"
              tags={["BPE / WordPiece", "token ≠ word", "context window limits", "cost per token"]}
            />
            <DeepDiveCard
              id="sampling"
              title="Inference & sampling parameters"
              frequency="High"
              role="all roles"
              tags={["temperature", "top-p / nucleus", "top-k", "greedy vs beam search"]}
            />
            <DeepDiveCard
              id="ft-vs-rag"
              title="Fine-tuning vs prompting vs RAG"
              frequency="High"
              role="all roles"
              tags={["full fine-tune", "LoRA / PEFT", "few-shot prompting", "RAG tradeoffs"]}
            />
            <DeepDiveCard
              id="context-mgmt"
              title="Context window management"
              frequency="Medium"
              role="all roles"
              tags={["chunking strategies", "sliding window", "map-reduce", "KV cache"]}
            />
            <DeepDiveCard
              id="hallucination"
              title="Hallucination — causes & mitigations"
              frequency="High"
              role="all roles"
              tags={["grounding", "citation enforcement", "self-consistency", "guardrails"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.126-1.495m1.415-16.7l.126-1.495m-4.04 18.04l-.513-1.41m5.13-14.095l-.513-1.41M19.165 18a9 9 0 11-14.33-14.33" /></svg>
            </span>
            <span className="sec-title">Embeddings & vector search</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="embeddings-base"
              title="Embeddings fundamentals"
              frequency="High"
              role="all roles"
              tags={["dense vector representation", "cosine similarity", "semantic search", "embedding models"]}
            />
            <DeepDiveCard
              id="ann-search"
              title="ANN search & vector indexes"
              frequency="High"
              role="backend / design"
              tags={["HNSW graph", "IVF flat", "product quantisation", "recall vs latency"]}
            />
            <DeepDiveCard
              id="vector-db"
              title="Vector DB internals & selection"
              frequency="High"
              role="backend / design"
              tags={["Pinecone / Weaviate", "pgvector", "hybrid search", "metadata filtering"]}
            />
            <DeepDiveCard
              id="hybrid-search"
              title="Hybrid search (dense + sparse)"
              frequency="Medium"
              role="backend / design"
              tags={["BM25 sparse", "dense embedding", "RRF fusion", "re-ranking"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </span>
            <span className="sec-title">RAG system design</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="rag-pipeline"
              title="RAG pipeline — full architecture"
              frequency="High"
              role="system design"
              tags={["document ingestion", "chunking", "embed + index", "retrieve → augment → generate"]}
            />
            <DeepDiveCard
              id="chunking-rag"
              title="Chunking strategies"
              frequency="High"
              role="system design"
              tags={["fixed-size", "sentence-level", "hierarchical", "chunk overlap"]}
            />
            <DeepDiveCard
              id="rag-eval"
              title="RAG evaluation & metrics"
              frequency="Medium"
              role="system design"
              tags={["context precision", "faithfulness", "answer relevance", "RAGAS"]}
            />
            <DeepDiveCard
              id="agentic-rag"
              title="Agentic RAG & tool use"
              frequency="Medium"
              role="system design"
              tags={["ReAct pattern", "function calling", "tool schema", "multi-step reasoning"]}
            />
            <DeepDiveCard
              id="rag-failure"
              title="RAG failure modes & debugging"
              frequency="Medium"
              role="system design"
              tags={["retrieval miss", "context stuffing", "lost in the middle", "reranker"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </span>
            <span className="sec-title">ML system design & infrastructure</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="ml-sys-design"
              title="ML system design overview"
              frequency="High"
              role="senior / design"
              tags={["feature store", "training pipeline", "model registry", "serving infra"]}
            />
            <DeepDiveCard
              id="llm-serving"
              title="LLM serving & latency optimisation"
              frequency="High"
              role="backend / infra"
              tags={["continuous batching", "KV cache", "quantisation (INT8/4)", "TTFT vs TPS"]}
            />
            <DeepDiveCard
              id="model-monitoring"
              title="Model monitoring & drift"
              frequency="Medium"
              role="senior / design"
              tags={["data drift", "concept drift", "PSI / KL divergence", "shadow mode"]}
            />
            <DeepDiveCard
              id="ab-testing-ml"
              title="A/B testing ML models"
              frequency="Medium"
              role="senior / design"
              tags={["traffic splitting", "statistical significance", "multi-armed bandit", "guardrail metrics"]}
            />
            <DeepDiveCard
              id="feature-stores"
              title="Feature stores"
              frequency="Medium"
              role="senior / ML infra"
              tags={["online vs offline store", "point-in-time correct", "feature skew", "Feast / Tecton"]}
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation variant="stagger">
        <section className="section">
          <div className="sec-head">
            <span className="sec-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </span>
            <span className="sec-title">Core ML concepts for SWEs</span>
          </div>
          <div className="grid">
            <DeepDiveCard
              id="bias-variance"
              title="Bias-variance tradeoff"
              frequency="High"
              role="all roles"
              tags={["underfitting vs overfitting", "regularisation", "model complexity", "cross-validation"]}
            />
            <DeepDiveCard
              id="ml-metrics"
              title="Evaluation metrics"
              frequency="High"
              role="all roles"
              tags={["precision / recall", "F1 score", "AUC-ROC", "class imbalance"]}
            />
            <DeepDiveCard
              id="gradient-descent"
              title="Gradient descent & optimisers"
              frequency="Medium"
              role="all roles"
              tags={["SGD / Adam / AdamW", "learning rate", "momentum", "loss landscape"]}
            />
            <DeepDiveCard
              id="recommender-sys"
              title="Recommendation systems"
              frequency="High"
              role="system design"
              tags={["collaborative filtering", "two-tower model", "candidate retrieval", "ranking stage"]}
            />
            <DeepDiveCard
              id="responsible-ai"
              title="Responsible AI & fairness"
              frequency="Medium"
              role="senior / design"
              tags={["demographic parity", "disparate impact", "SHAP / LIME", "model cards"]}
            />
            <DeepDiveCard
              id="rlhf"
              title="RLHF & alignment"
              frequency="Occasional"
              role="senior / AI teams"
              tags={["reward model", "PPO / DPO", "preference data", "constitutional AI"]}
            />
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
}
