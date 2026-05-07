"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface TopicCardProps {
  id: string;
  index: string;
  title: string;
  badges: string[];
  href?: string;
  icon?: React.ReactNode;
  color?: {
    bg: string;
    text: string;
    border: string;
  };
}

export default function TopicCard({
  id,
  index,
  title,
  badges,
  href,
  icon,
  color = {
    bg: "rgba(217, 119, 87, 0.1)",
    text: "#D97757",
    border: "rgba(217, 119, 87, 0.2)",
  },
}: TopicCardProps) {
  const CardContent = (
    <motion.div
      id={id}
      whileHover={{ y: -4 }}
      className="card group relative h-full transition-all duration-300"
      style={{ 
        borderColor: color.border,
        background: `linear-gradient(135deg, var(--color-surface) 0%, ${color.bg} 100%)`
      }}
    >
      <div className="card-head">
        <div className="flex items-center gap-4">
          {icon ? (
            <div className="p-2 rounded-lg bg-background-secondary border border-border-tertiary text-primary group-hover:text-accent transition-colors">
              {icon}
            </div>
          ) : (
            <span
              className="num"
              style={{
                background: color.bg,
                color: color.text,
                borderColor: color.border,
              }}
            >
              {index}
            </span>
          )}
          <span className="card-title text-text-primary">
            {title}
          </span>
        </div>
        {href && (
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1 -translate-y-0 group-hover:-translate-y-1 text-accent">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" /></svg>
          </span>
        )}
      </div>
      
      <div className="badge-row">
        {badges.map((badge, i) => (
          <span key={i} className="badge">
            {badge}
          </span>
        ))}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="no-underline block h-full">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
