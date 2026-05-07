# Design System & UI Consistency Guide

This document defines the visual language, design tokens, and UI patterns for the Engineering Mastery Roadmap to ensure a consistent, premium experience across all sections.

## 1. Design Philosophy
- **Premium Technical Aesthetic**: A "senior engineer" look—calm, confident, and high-density.
- **Glassmorphism**: Subtle transparency and background blurs to create depth.
- **Interactive Depth**: Use of glow effects, staggered reveals, and hover states to make the UI feel alive.
- **Modern Dark Mode**: Deep charcoals (`#171717`) and rich grays instead of pure black.

---

## 2. Design Tokens

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--color-background-primary` | `#171717` | Main page background |
| `--color-background-secondary` | `#212121` | Section backgrounds, deeper contrast |
| `--color-surface` | `#212121` | Card backgrounds |
| `--color-primary` | `#D97757` | Accent color, call-to-actions, icons |
| `--color-accent` | `#D97757` | Highlight links and emphasis |
| `--color-text-primary` | `#ECECEC` | High-contrast body text and headings |
| `--color-text-secondary` | `#9B9B9B` | Lower-contrast descriptions and meta text |
| `--color-border-tertiary` | `rgba(255, 255, 255, 0.08)` | Subtle card and divider borders |

### Typography
- **Sans-serif**: `Inter`, system-ui (Standard text, navigation)
- **Monospace**: `JetBrains Mono` (Technical labels, data, status tags)
- **Sizes**:
    - `h1`: `3.5rem` (Hero headings)
    - `h2`: `2.2rem` (Section headings)
    - `h3`: `1.8rem` (Module headings)
    - `Body`: `1.1rem` ( Patrick Hand variant for character, Inter for precision)

---

## 3. Core UI Patterns

### Card System
All cards (Topic, Deep Dive, SOLID) should follow these rules:
- **Border**: `1px solid var(--color-border-tertiary)`
- **Radius**: `12px` (`var(--radius-lg)`)
- **Hover**: 
    - `transform: translateY(-4px)`
    - Glow effect (radial gradient overlay)
    - Border color shift to `var(--color-primary)`

### Navigation & Layout
- **StickyNav**: `60px` height, `80%` opacity background with `blur(12px)`.
- **Max Width**: `1100px` for main content area.
- **Background Grid**: A subtle fixed grid (`rgba(255, 255, 255, 0.02)`) with a radial mask to focus content.

### Accordions (Deep Dive Topics)
- **Header**: High-density row with a completion status or frequency badge.
- **Animation**: `AnimatePresence` with height transitions (`0` to `auto`).
- **Body**: Secondary background (`rgba(0, 0, 0, 0.1)`) to differentiate from the list.

---

## 4. Animation Principles (Framer Motion)
- **Scroll Reveals**: Use `ScrollAnimation` component for staggered entry.
- **Transitions**: `duration: 0.4`, `ease: [0.2, 0.8, 0.2, 1]` for "snappy but smooth" feel.
- **Micro-interactions**: Subtle `y` axis shifts on hover and rotation for icons.

---

## 5. Module Specifics

### DSA Section
- Use phase-based tabs for sequential learning.
- Frequency badges: `High` (Green), `Medium` (Blue), `Occasional` (Slate).

### LLD Section
- SOLID principles displayed in a grid of high-contrast "Letter Cards".
- Interview approach documented as a numbered vertical flow of steps.

### Deep Dive Cards
- Should always include tags/badges to show technical depth.
- Frequency indicators should be consistent across all deep-dive pages.
