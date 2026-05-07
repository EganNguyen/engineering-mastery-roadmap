"use client";

import { DSAPhase } from "@/data/dsa-data";

interface PhaseTabsProps {
  phases: DSAPhase[];
  activeIdx: number;
  onTabChange: (idx: number) => void;
}

export default function PhaseTabs({ phases, activeIdx, onTabChange }: PhaseTabsProps) {
  return (
    <div className="phase-tabs mb-6">
      {phases.map((phase, i) => (
        <button
          key={i}
          onClick={() => onTabChange(i)}
          className={`ptab ${activeIdx === i ? 'active' : ''}`}
        >
          <span 
            className="dot" 
            style={{ background: phase.color }}
          ></span>
          <span className="whitespace-nowrap">Phase {i + 1} — {phase.title.split(' — ')[1]}</span>
        </button>
      ))}
    </div>
  );
}
