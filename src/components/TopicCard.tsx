"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

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
    bg: "rgba(56, 189, 248, 0.1)",
    text: "#38bdf8",
    border: "rgba(56, 189, 248, 0.2)",
  },
}: TopicCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const CardContent = (
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
      <div className="card-head">
        <div className="flex items-center gap-4">
          {icon ? (
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-accent group-hover:scale-110 transition-transform">
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
          <span className="card-title">
            {title}
          </span>
        </div>
        {href && (
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent">
            ↗
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
      <Link href={href} className="no-underline">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
