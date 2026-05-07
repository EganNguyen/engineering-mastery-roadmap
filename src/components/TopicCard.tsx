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
      className={`card group relative h-full transition-all duration-300 border border-border-tertiary rounded-xl bg-surface/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 ${
        isPortfolio ? "p-10" : "p-6"
      }`}
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
              className={`p-2.5 rounded-xl bg-background-secondary border border-border-tertiary text-primary group-hover:text-accent group-hover:border-accent/30 transition-all duration-300 ${isPortfolio ? "w-14 h-14 flex items-center justify-center" : "w-10 h-10 flex items-center justify-center"}`}
            >
              {icon}
            </motion.div>
          ) : (
            <span
              className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold border"
              style={{
                background: color.bg,
                color: color.text,
                borderColor: color.border,
              }}
            >
              {index}
            </span>
          )}
          <span className={`text-text-primary group-hover:text-primary transition-colors ${isPortfolio ? "text-2xl font-bold tracking-tight" : "text-lg font-bold"}`}>
            {title}
          </span>
        </div>
        {href && (
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1 -translate-y-0 group-hover:-translate-y-1 text-accent">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" /></svg>
          </span>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2 mt-6">
        {badges.map((badge, i) => (
          <span key={i} className={`px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-text-secondary font-medium tracking-wide ${isPortfolio ? "text-xs" : "text-[10px]"}`}>
            {badge}
          </span>
        ))}
      </div>

      {/* Premium Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-[13px] z-[-1]"></div>
      </div>

      {isPortfolio && (
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <div className="w-32 h-32 blur-3xl bg-primary rounded-full"></div>
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
