"use client";

import { SOLIDPrinciple } from "@/data/lld-data";

interface SOLIDCardProps {
  principle: SOLIDPrinciple;
}

export default function SOLIDCard({ principle }: SOLIDCardProps) {
  return (
    <div className="card h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xl">
          {principle.letter}
        </div>
        <div className="text-sm font-bold text-text-primary">{principle.title}</div>
      </div>
      
      <div className="text-xs font-bold uppercase tracking-wider text-accent mb-3">
        {principle.subtitle}
      </div>
      
      <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
        {principle.body}
      </p>
      
      <div className="mt-auto pt-4 border-t border-border-tertiary">
        <div className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-2">Pattern Link / Signal</div>
        <div className="text-xs text-primary font-medium italic">
          {principle.patterns}
        </div>
      </div>
    </div>
  );
}
