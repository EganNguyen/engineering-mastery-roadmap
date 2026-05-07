"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DSATopic } from "@/data/dsa-data";

interface TopicRowProps {
  topic: DSATopic;
}

export default function TopicRow({ topic }: TopicRowProps) {
  const [isOpen, setIsOpen] = useState(false);

  const freqLabel = {
    fh: "High",
    fm: "Medium",
    fl: "Occasional",
  };

  const freqClass = {
    fh: "fh",
    fm: "fm",
    fl: "fl",
  };

  return (
    <div className="topic-row">
      <div className="topic-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="topic-title">{topic.title}</div>
        
        <span className={`topic-freq ${freqClass[topic.freq]}`}>
          {freqLabel[topic.freq]}
        </span>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-text-secondary opacity-50"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
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
              <div className="pattern-list">
                {topic.patterns.map((p, i) => (
                  <span key={i} className="ptag">{p}</span>
                ))}
              </div>
              
              <div className="problems mt-4">
                <strong className="text-text-primary text-xs block mb-1">Practice problems:</strong>
                <p className="text-sm leading-relaxed text-text-secondary">{topic.problems}</p>
              </div>
              
              <button 
                className="ask-btn mt-4 group"
                onClick={(e) => {
                  e.stopPropagation();
                  // In a real app, this would trigger an AI prompt
                  console.log("Deep dive on:", topic.ask);
                }}
              >
                Go deep on this topic
                <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
