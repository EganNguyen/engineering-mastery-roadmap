"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LLDAccordionProps {
  badge: string;
  badgeClass?: string;
  title: string;
  children: React.ReactNode;
  tags?: string[];
  ask?: string;
}

export default function LLDAccordion({ badge, badgeClass = "bh", title, children, tags, ask }: LLDAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="topic-row">
      <div className="topic-header" onClick={() => setIsOpen(!isOpen)}>
        <span className={`topic-freq ${badgeClass} shrink-0`}>
          {badge}
        </span>
        <div className="topic-title">{title}</div>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-text-secondary opacity-50"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="topic-body">
              {children}
              
              {tags && (
                <div className="pattern-list mt-4">
                  {tags.map((tag, i) => (
                    <span key={i} className="ptag">{tag}</span>
                  ))}
                </div>
              )}
              
              {ask && (
                <button 
                  className="ask-btn mt-4 group"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Deep dive on:", ask);
                  }}
                >
                  Deep dive on this
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
