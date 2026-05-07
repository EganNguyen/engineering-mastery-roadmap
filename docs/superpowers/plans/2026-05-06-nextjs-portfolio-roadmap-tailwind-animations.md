# Next.js Portfolio & Roadmap with Tailwind CSS & Animations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate raw HTML designs to a Next.js App Router application with Tailwind CSS for rapid styling, Framer Motion for interactive animations, and performance optimizations for fast load times, serving as a personal portfolio and engineering mastery roadmap.

**Architecture:** Use Next.js App Router with TypeScript for type safety. Tailwind CSS replaces vanilla CSS for faster development of responsive, consistent designs. Framer Motion handles animations (page transitions, scroll-triggered effects, hover interactions). All pages use static site generation (SSG) for performance. Next.js built-in metadata API manages SEO.

**Tech Stack:** Next.js 14+, TypeScript, Tailwind CSS, Framer Motion, @tailwindcss/typography, next/font.

---

## File Structure

### New Files to Create
- `tailwind.config.ts`: Tailwind configuration with custom design system tokens
- `src/app/globals.css`: Minimal global styles with Tailwind directives
- `src/app/layout.tsx`: Root layout with metadata, font optimization, Framer Motion page transitions
- `src/app/page.tsx`: Home page (Portfolio + Roadmap Hub)
- `src/app/concurrency-os/page.tsx`: Concurrency & OS deep dive page
- `src/app/networking-db/page.tsx`: Networking & DB Internals deep dive page
- `src/components/PortfolioHero.tsx`: Reusable hero section component
- `src/components/ExperienceCard.tsx`: Experience entry card component
- `src/components/RoadmapCard.tsx`: Roadmap topic card with navigation
- `src/components/ScrollAnimation.tsx`: Reusable scroll-triggered animation wrapper

### Files to Delete
- `design/*.html`: Raw HTML files after successful migration verification

---

### Task 1: Initialize Next.js App with Tailwind CSS

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`

- [ ] **Step 1: Scaffold Next.js app with Tailwind**
Run:
```bash
npx -y create-next-app@latest ./ --ts --eslint --app --src-dir --import-alias "@/*" --use-npm --tailwind
```
Expected: Next.js app initialized with Tailwind CSS, TypeScript, App Router, src directory. No errors.

- [ ] **Step 2: Install additional dependencies**
Run:
```bash
npm install framer-motion @tailwindcss/typography
```
Expected: Dependencies added to package.json.

- [ ] **Step 3: Verify setup**
Run `npm run dev`, navigate to http://localhost:3000. Confirm default page loads with Tailwind styles.
Expected: Dev server starts successfully.

- [ ] **Step 4: Commit initial setup**
```bash
git add .
git commit -m "feat: initialize Next.js app with Tailwind CSS and Framer Motion"
```

---

### Task 2: Configure Tailwind Design System

**Files:**
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Extend Tailwind theme**
Replace `tailwind.config.ts` content with:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#1e293b",
        accent: "#3b82f6",
        surface: "#f8fafc",
        "text-primary": "#0f172a",
        "text-secondary": "#475569",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
```
Expected: Custom design tokens configured.

- [ ] **Step 2: Verify config**
Run `npm run build` to check for errors.
Expected: Build completes without Tailwind errors.

- [ ] **Step 3: Commit config**
```bash
git add tailwind.config.ts
git commit -m "feat: configure Tailwind design system with custom tokens"
```

---

### Task 3: Set Up Global Styles & Root Layout

**Files:**
- Modify: `src/app/globals.css`
- Create: `src/app/layout.tsx`

- [ ] **Step 1: Add Tailwind directives to globals.css**
Replace `src/app/globals.css` content with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-surface text-text-primary font-sans antialiased;
  }
}
```

- [ ] **Step 2: Create root layout**
Replace `src/app/layout.tsx` content with:
```typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Tuan Nguyen - Backend Software Engineer & Engineering Roadmap",
  description: "Personal portfolio and interactive Engineering Mastery Roadmap",
  keywords: ["Backend Engineer", "Software Engineer", "Engineering Roadmap"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Verify layout**
Run `npm run dev`, confirm Inter font loads correctly.
Expected: No rendering errors.

- [ ] **Step 4: Commit layout**
```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "feat: set up root layout with Framer Motion transitions and SEO metadata"
```

---

### Task 4: Implement Home Page (Portfolio + Roadmap Hub)

**Files:**
- Create: `src/app/page.tsx`, `src/components/PortfolioHero.tsx`, `src/components/ExperienceCard.tsx`, `src/components/RoadmapCard.tsx`

- [ ] **Step 1: Create PortfolioHero component**
Create `src/components/PortfolioHero.tsx`:
```typescript
import { motion } from "framer-motion";

export default function PortfolioHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-20 sm:py-32"
    >
      <h1 className="text-4xl sm:text-6xl font-bold text-text-primary mb-4">Tuan Nguyen</h1>
      <h2 className="text-2xl sm:text-3xl text-accent mb-6">Mid-Level Backend Software Engineer</h2>
      <div className="flex gap-4 text-text-secondary">
        <a href="mailto:tuan.nguyen@example.com" className="hover:text-accent transition-colors">Email</a>
        <a href="https://github.com/egannguyen" target="_blank" className="hover:text-accent transition-colors">GitHub</a>
      </div>
    </motion.section>
  );
}
```

- [ ] **Step 2: Create ExperienceCard component**
Create `src/components/ExperienceCard.tsx`:
```typescript
import { motion } from "framer-motion";

export default function ExperienceCard({ company, role, duration, description }: {
  company: string; role: string; duration: string; description: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
    >
      <h3 className="text-xl font-semibold">{company}</h3>
      <p className="text-accent font-medium">{role}</p>
      <p className="text-text-secondary text-sm mb-4">{duration}</p>
      <p className="text-text-secondary">{description}</p>
    </motion.div>
  );
}
```

- [ ] **Step 3: Create RoadmapCard component**
Create `src/components/RoadmapCard.tsx`:
```typescript
import Link from "next/link";
import { motion } from "framer-motion";

export default function RoadmapCard({ title, description, href }: {
  title: string; description: string; href: string;
}) {
  return (
    <Link href={href} passHref>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-accent transition-colors cursor-pointer"
      >
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-text-secondary">{description}</p>
      </motion.div>
    </Link>
  );
}
```

- [ ] **Step 4: Implement home page**
Replace `src/app/page.tsx`:
```typescript
import PortfolioHero from "@/components/PortfolioHero";
import ExperienceCard from "@/components/ExperienceCard";
import RoadmapCard from "@/components/RoadmapCard";
import { motion } from "framer-motion";

const experiences = [
  { company: "LizAI", role: "Backend Engineer", duration: "2023-Present", description: "Built AI platform backend services" },
  { company: "Thien Minh Group", role: "Backend Engineer", duration: "2021-2023", description: "Developed travel booking APIs" },
  { company: "TGL", role: "Junior Backend Engineer", duration: "2019-2021", description: "Maintained e-commerce backends" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <PortfolioHero />
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} {...exp} />
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 py-16 bg-secondary/5"
      >
        <h2 className="text-3xl font-bold mb-8">Engineering Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RoadmapCard title="Concurrency & OS" description="Threads, processes, OS internals" href="/concurrency-os" />
          <RoadmapCard title="Networking & DB Internals" description="Protocols, database internals" href="/networking-db" />
        </div>
      </motion.section>
    </div>
  );
}
```

- [ ] **Step 5: Verify home page**
Run `npm run dev`, check animations and navigation links.
Expected: All sections render with scroll-triggered animations, links work.

- [ ] **Step 6: Commit home page**
```bash
git add src/app/page.tsx src/components/
git commit -m "feat: implement home page with portfolio and roadmap sections"
```

---

### Task 5: Implement Concurrency & OS Deep Dive Page

**Files:**
- Create: `src/app/concurrency-os/page.tsx`, `src/components/ScrollAnimation.tsx`

- [ ] **Step 1: Create ScrollAnimation wrapper**
Create `src/components/ScrollAnimation.tsx`:
```typescript
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ScrollAnimation({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Implement concurrency page**
Replace `src/app/concurrency-os/page.tsx`:
```typescript
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata = {
  title: "Concurrency & OS Deep Dive - Tuan Nguyen",
  description: "In-depth concurrency and operating system guide for FAANG interviews",
};

export default function ConcurrencyOSPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <Link href="/" className="text-accent hover:underline mb-8 inline-block">← Back to Home</Link>
      <ScrollAnimation>
        <h1 className="text-4xl font-bold mb-6">Concurrency & OS Deep Dive</h1>
      </ScrollAnimation>
      <div className="prose prose-slate max-w-none mt-12">
        <ScrollAnimation><h2>Threads vs Processes</h2><p>Key differences and use cases.</p></ScrollAnimation>
        <ScrollAnimation><h2>Synchronization</h2><p>Mutexes, semaphores, and condition variables.</p></ScrollAnimation>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Verify page**
Run `npm run dev`, navigate to `/concurrency-os`. Check back link and animations.
Expected: Page renders correctly.

- [ ] **Step 4: Commit**
```bash
git add src/app/concurrency-os/page.tsx src/components/ScrollAnimation.tsx
git commit -m "feat: implement Concurrency & OS deep dive page"
```

---

### Task 6: Implement Networking & DB Internals Deep Dive Page

**Files:**
- Create: `src/app/networking-db/page.tsx`

- [ ] **Step 1: Implement networking page**
Replace `src/app/networking-db/page.tsx`:
```typescript
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata = {
  title: "Networking & DB Internals - Tuan Nguyen",
  description: "Deep dive into networking protocols and database internals",
};

export default function NetworkingDBPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <Link href="/" className="text-accent hover:underline mb-8 inline-block">← Back to Home</Link>
      <ScrollAnimation>
        <h1 className="text-4xl font-bold mb-6">Networking & Database Internals</h1>
      </ScrollAnimation>
      <div className="prose prose-slate max-w-none mt-12">
        <ScrollAnimation><h2>TCP/IP Suite</h2><p>Handshake, flow control, congestion control.</p></ScrollAnimation>
        <ScrollAnimation><h2>Database Engines</h2><p>B-trees, LSM-trees, transaction isolation.</p></ScrollAnimation>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify page**
Run `npm run dev`, navigate to `/networking-db`.
Expected: Page renders correctly.

- [ ] **Step 3: Commit**
```bash
git add src/app/networking-db/page.tsx
git commit -m "feat: implement Networking & DB Internals deep dive page"
```

---

### Task 7: Performance Optimizations

**Files:**
- Modify: `next.config.js`

- [ ] **Step 1: Configure static export**
Replace `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};
module.exports = nextConfig;
```

- [ ] **Step 2: Run Lighthouse audit**
Run `npm run build && npm run start`, audit with Chrome DevTools.
Expected: Performance score > 90.

- [ ] **Step 3: Commit optimizations**
```bash
git add next.config.js
git commit -m "perf: optimize for static export and performance"
```

---

### Task 8: Cleanup & Final Verification

**Files:**
- Delete: `design/*.html`

- [ ] **Step 1: Verify migration completeness**
Confirm all HTML content is migrated to Next.js pages.

- [ ] **Step 2: Delete raw HTML files**
Run:
```bash
rm -rf design/
```

- [ ] **Step 3: Final build check**
Run `npm run build`.
Expected: Build completes successfully.

- [ ] **Step 4: Commit cleanup**
```bash
git add . && git commit -m "chore: remove raw HTML files after migration"
```

---

## Self-Review
1. **Spec coverage:** All requirements (Tailwind, animations, performance, portfolio + roadmap) are addressed in tasks.
2. **Placeholder scan:** No TBD/TODO placeholders, all code blocks are complete.
3. **Type consistency:** All component props are typed, Next.js and Framer Motion APIs are used consistently.

---

## Execution Handoff
Plan complete and saved to `docs/superpowers/plans/2026-05-06-nextjs-portfolio-roadmap-tailwind-animations.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?
