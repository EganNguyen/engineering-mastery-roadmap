"use client";

import { motion } from "framer-motion";

export default function PortfolioHero() {
  return (
    <section className="hero-grid relative">
      <div className="split-bg">
        <div className="bg-left"></div>
        <div className="bg-right"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="eyebrow">Senior Software Engineer</p>

        <h1 className="hero-title">
          Building scalable<br />
          <span className="text-primary">production-grade</span> systems.
        </h1>

        <p className="hero-description">
          A hybrid approach to engineering: building robust distributed systems while 
          architecting the definitive roadmap for technical mastery.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="#portfolio" className="btn btn-primary">
            View Summary
          </a>
          <a href="#roadmap" className="btn btn-secondary">
            Explore Roadmap
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="roadmap-preview-card"
      >
        <div className="roadmap-header">
          Engineering Mastery Roadmap
        </div>

        <div className="roadmap-tags">
          <span>DSA</span>
          <span>System Design</span>
          <span>Cloud / Infra</span>
          <span>Frontend</span>
          <span>AI / ML</span>
          <span>Security</span>
          <span>Leadership</span>
        </div>

        <div className="mini-roadmap-tree">
          <div className="tree-step">
            <div className="tree-dot"><div className="tree-dot-inner"></div></div>
            <span>Foundations</span>
          </div>
          <div className="tree-line"></div>
          <div className="tree-step">
            <div className="tree-dot"><div className="tree-dot-inner"></div></div>
            <span>System Design</span>
          </div>
          <div className="tree-line"></div>
          <div className="tree-step">
            <div className="tree-dot"><div className="tree-dot-inner"></div></div>
            <span>Frontend Fundamentals</span>
          </div>
          <div className="tree-line"></div>
          <div className="tree-step">
            <div className="tree-dot"><div className="tree-dot-inner"></div></div>
            <span>Quality & Production</span>
          </div>
          <div className="tree-line"></div>
          <div className="tree-step">
            <div className="tree-dot"><div className="tree-dot-inner"></div></div>
            <span>AI & Emerging</span>
          </div>
        </div>

        <div className="roadmap-stats">
          <div className="stat-item">
            <span className="stat-value">22</span>
            <span className="stat-label">Domains</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">120+</span>
            <span className="stat-label">Topics</span>
          </div>
          <div className="stat-item md:col-span-2">
            <span className="stat-value">FAANG</span>
            <span className="stat-label">Level Focus</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
