# Design System & UI Consistency Guide

This document defines the visual language, design tokens, and architectural patterns for the Engineering Mastery Roadmap. It serves as the source of truth for all future development to ensure a cohesive, premium experience.

---

## 1. Design Philosophy
- **Senior Engineer Aesthetic**: High-density, technically precise, and visually calm. Avoid flashy over-saturation; prioritize clarity and "mechanical" beauty.
- **Glassmorphism**: Use transparency and `backdrop-filter: blur(12px)` to create depth without clutter.
- **Interactive Feedback**: Every user action should have a micro-interaction (glow, lift, or subtle color shift).
- **Dark Mode First**: Optimized for `#171717` (Deep Charcoal) backgrounds with `#ECECEC` (Off-white) text.

---

## 2. Design Tokens (CSS Variables)

### Color Palette
Defined in `src/app/globals.css`.

| Token | Value | Intent |
|-------|-------|--------|
| `--color-background-primary` | `#171717` | Main canvas background. |
| `--color-background-secondary` | `#212121` | Inset panels and secondary sections. |
| `--color-surface` | `#212121` | Card backgrounds and modal surfaces. |
| `--color-primary` | `#D97757` | The primary brand color (Earth Orange). Used for accents. |
| `--color-accent` | `#D97757` | Links, hover states, and critical emphasis. |
| `--color-text-primary` | `#ECECEC` | Headings and high-importance body text. |
| `--color-text-secondary` | `#9B9B9B` | Explanatory text, metadata, and labels. |
| `--color-border-tertiary` | `rgba(255, 255, 255, 0.08)` | Subtle separators and card borders. |

### Typography
- **Headings**: `Inter` (Sans-serif). Extra-bold for H1, Bold for H2/H3.
- **Body**: `Inter`. Regular for prose, Medium for emphasis.
- **Technical/Mono**: `JetBrains Mono`. Used for:
    - Code blocks
    - Status badges (High/Medium/Low)
    - Topic indices (01, 02...)
    - Metadata tags

---

## 3. Component Architecture

### The "Deep Dive" Pattern
All deep-dive pages (DSA, LLD, Performance) must follow this structural hierarchy:
1. **Sticky Navigation**: Standard breadcrumb/back link to the roadmap.
2. **Page Header**:
    - `.eyebrow`: Small uppercase text (e.g., "Frontend Mastery").
    - `h1`: Bold, clear title.
    - `p`: High-level summary of the section's value proposition.
3. **Control Row**:
    - **Legend**: Frequency indicators (`High`, `Medium`, `Occasional`).
    - **Tabs**: Using the `.phase-tabs` and `.ptab` classes for section navigation.
4. **Content Area**:
    - Grid of `DeepDiveCard` for index pages.
    - Accordion lists for topic deep dives.

### Reusable Components

#### 1. TopicCard (`src/components/TopicCard.tsx`)
Used for main categories on the landing page.
- **Rules**: Must have a unique index (e.g., "01") or a Lottie/SVG icon.
- **Interaction**: Radial glow on hover, 4px vertical lift.

#### 2. DeepDiveCard (`src/components/DeepDiveCard.tsx`)
Used for specific modules within a category.
- **Rules**: Must display frequency badge and a list of sub-topic tags.
- **Interaction**: Subtle primary-colored border transition on hover.

#### 3. SOLIDCard (`src/components/lld/SOLIDCard.tsx`)
Specialized for principles/tenets.
- **Rules**: Large initial letter (e.g., "S") with background gradient.

---

## 4. Interaction & Animation Patterns

### Hover States (The "Premium" Look)
All interactive cards MUST implement the following:
- **Vertical Shift**: `transform: translateY(-4px)`.
- **Border Transition**: `border-color` shifts from `--color-border-tertiary` to `rgba(217, 119, 87, 0.3)`.
- **Glow Effect**: A subtle radial gradient overlay that appears on hover.
  ```css
  /* Example from globals.css */
  .card:hover::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(217, 119, 87, 0.1), transparent 70%);
  }
  ```

### Framer Motion Standards
- **Staggered Entrance**: Use the `ScrollAnimation` component with `variant="stagger"`.
- **Spring Physics**: Use snappy but natural springs for UI elements.
  - `transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }`
- **Tab Transitions**: Use `AnimatePresence` with `mode="wait"` for content swapping.

---

## 5. Spacing & Layout Grid

- **Page Max-Width**: `1100px` (standard) or `1400px` (wide-view for deep dives).
- **Section Padding**: `clamp(4rem, 10vh, 8rem)` for top/bottom margins.
- **Card Grids**:
    - Desktop: 3 columns (`grid-cols-3`)
    - Tablet: 2 columns (`grid-cols-2`)
    - Mobile: 1 column (`grid-cols-1`)
- **Internal Card Padding**: `1.5rem` (24px) for standard, `2.5rem` (40px) for hero elements.

---

## 6. Implementation Workflow for New Sections
To maintain architectural consistency, follow these steps when adding a new deep-dive:

1. **Define Data**: Create a new file in `src/data/` (e.g., `networking-data.ts`).
2. **Setup Route**: Create a folder in `src/app/` with `page.tsx` and `content.tsx`.
3. **Use Layout**: Wrap content in `main.pb-20`.
4. **Header First**: Implement the `.portfolio-header` with an `.eyebrow`.
5. **Map Components**: Map over your data to render `DeepDiveCard` or custom accordions.
6. **Verify Consistency**: Ensure the "Legend" and "Tabs" match existing pages exactly.
