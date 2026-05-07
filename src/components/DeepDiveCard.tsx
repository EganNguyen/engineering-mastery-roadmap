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
      <div className="flex justify-between items-start gap-4 mb-6">
        <h3 className="card-title text-text-primary group-hover:text-accent transition-colors">
          {title}
        </h3>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <span className={`freq ${freqStyles[frequency]}`}>{frequency}</span>
          {role && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-text-secondary bg-background-secondary px-2 py-1 rounded border border-border-tertiary">
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
    </>
  );

  return (
    <motion.div
      id={id}
      whileHover={{ y: -4 }}
      className={`card group relative h-full ${href ? "cursor-pointer" : ""}`}
    >
      {href ? (
        <Link href={href} className="flex flex-col h-full no-underline">
          {content}
        </Link>
      ) : (
        <div className="flex flex-col h-full">
          {content}
        </div>
      )}
    </motion.div>
  );
}
