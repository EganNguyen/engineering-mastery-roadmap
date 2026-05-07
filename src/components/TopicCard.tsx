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
  variant?: "portfolio" | "roadmap";
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
  variant = "roadmap",
  color = {
    bg: "rgba(217, 119, 87, 0.1)",
    text: "#D97757",
    border: "rgba(217, 119, 87, 0.2)",
  },
}: TopicCardProps) {
  const isPortfolio = variant === "portfolio";

  const CardContent = (
    <motion.div
      id={id}
      initial="initial"
      whileHover="hover"
      variants={{
        hover: { y: isPortfolio ? -8 : -4 }
      }}
      className={`card group relative h-full transition-all duration-300 ${
        isPortfolio ? "portfolio-variant p-10" : "roadmap-variant p-6"
      }`}
      style={{ 
        borderColor: color.border,
        background: isPortfolio 
          ? `linear-gradient(135deg, var(--color-surface) 0%, ${color.bg} 100%)`
          : "var(--color-surface)"
      }}
    >
      <div className="card-head">
        <div className="flex items-center gap-4">
          {icon ? (
            <motion.div 
              variants={{
                initial: { scale: 1, rotate: 0, y: 0 },
                hover: { 
                  scale: 1.1, 
                  rotate: [0, -5, 5, 0],
                  y: [0, -2, 0],
                  transition: { 
                    rotate: { duration: 0.4 },
                    y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                  }
                }
              }}
              className={`p-2 rounded-lg bg-background-secondary border border-border-tertiary text-primary group-hover:text-accent transition-colors ${isPortfolio ? "w-12 h-12 flex items-center justify-center" : ""}`}
            >
              {icon}
            </motion.div>
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
          <span className={`card-title text-text-primary ${isPortfolio ? "text-xl font-bold" : "text-base font-semibold"}`}>
            {title}
          </span>
        </div>
        {href && (
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1 -translate-y-0 group-hover:-translate-y-1 text-accent">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" /></svg>
          </span>
        )}
      </div>
      
      <div className="badge-row mt-6">
        {badges.map((badge, i) => (
          <span key={i} className={`badge ${isPortfolio ? "px-4 py-2 text-sm" : "px-2 py-1 text-[10px]"}`}>
            {badge}
          </span>
        ))}
      </div>

      {isPortfolio && (
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <div className="w-24 h-24 blur-3xl bg-primary rounded-full"></div>
        </div>
      )}
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
