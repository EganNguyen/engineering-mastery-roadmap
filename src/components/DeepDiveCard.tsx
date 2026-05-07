"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

interface DeepDiveCardProps {
  id: string;
  title: string;
  frequency: "High" | "Medium" | "Occasional";
  tags: string[];
  role?: string;
}

const freqStyles = {
  High: "freq-h",
  Medium: "freq-m",
  Occasional: "freq-l",
};

export default function DeepDiveCard({ id, title, frequency, tags, role }: DeepDiveCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      id={id}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8 }}
      className="card group relative"
      style={{
        // @ts-ignore
        "--mouse-x": useMotionTemplate`${mouseX}px`,
        "--mouse-y": useMotionTemplate`${mouseY}px`,
      }}
    >
      <div className="flex justify-between items-start gap-4 mb-6">
        <h3 className="card-title text-white group-hover:text-accent transition-colors">
          {title}
        </h3>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <span className={`freq ${freqStyles[frequency]}`}>{frequency}</span>
          {role && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary/70 bg-primary/5 px-2 py-1 rounded">
              {role}
            </span>
          )}
        </div>
      </div>
      
      <div className="tags mt-auto">
        {tags.map((tag, i) => (
          <span key={i} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
