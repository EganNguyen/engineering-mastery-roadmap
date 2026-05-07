"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface DeepDiveCardProps {
  id: string;
  title: string;
  frequency: "High" | "Medium" | "Occasional";
  tags: string[];
  role?: string;
  href?: string;
}

const freqStyles = {
  High: "freq-h",
  Medium: "freq-m",
  Occasional: "freq-l",
};

export default function DeepDiveCard({ id, title, frequency, tags, role, href }: DeepDiveCardProps) {
  const content = (
    <>
      <div className="flex justify-between items-start gap-4 mb-4">
        <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors leading-tight">
          {title}
        </h3>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <span className={`freq ${freqStyles[frequency]}`}>{frequency}</span>
        </div>
      </div>
      
      {role && (
        <div className="mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-accent/80 bg-accent/5 px-2 py-0.5 rounded border border-accent/10">
            {role}
          </span>
        </div>
      )}
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, i) => (
          <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-text-secondary font-medium">
            {tag}
          </span>
        ))}
      </div>

      {/* Premium Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-[13px] z-[-1]"></div>
      </div>
    </>
  );

  return (
    <motion.div
      id={id}
      whileHover={{ y: -4 }}
      className={`card group relative h-full p-6 border border-border-tertiary rounded-xl bg-surface/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 ${href ? "cursor-pointer" : ""}`}
    >
      {href ? (
        <Link href={href} className="flex flex-col h-full no-underline relative z-10">
          {content}
        </Link>
      ) : (
        <div className="flex flex-col h-full relative z-10">
          {content}
        </div>
      )}
    </motion.div>
  );
}
