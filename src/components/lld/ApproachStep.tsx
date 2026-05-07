"use client";

import { LLDStep } from "@/data/lld-data";

interface ApproachStepProps {
  step: LLDStep;
}

export default function ApproachStep({ step }: ApproachStepProps) {
  return (
    <div className="flex gap-4 p-5 rounded-xl bg-background-secondary border border-border-tertiary">
      <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold shrink-0">
        {step.num}
      </div>
      <div>
        <div className="text-sm font-bold text-text-primary mb-1">{step.title}</div>
        <p className="text-xs leading-relaxed text-text-secondary">{step.body}</p>
      </div>
    </div>
  );
}
