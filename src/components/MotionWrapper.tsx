"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

export default function MotionWrapper({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
