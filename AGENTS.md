# Agent Directives & Project Memory

## Core Mandate
**ALWAYS** reference and adhere to the specifications defined in `@DESIGN.xml` before making any visual or structural changes. This document acts as the source of truth for the project's design system and requirements.

**Memory Maintenance:** The model should spontaneously update this `@AGENTS.md` file whenever significant architectural decisions are made or new project patterns are established to ensure long-term memory is preserved.

**Design Updates:** When design choices change or new projects are added, the model MUST update `@DESIGN.xml` accordingly to maintain the single source of truth for the project's design specifications.

## Long-Term Project Memory

### Project Identity
- **Type:** Personal Portfolio Website
- **Theme:** "Code-like" / CLI Aesthetic
- **Key Visuals:**
    - **Font:** 'Maple Mono' (imported in `index.css`)
    - **Headers:** `snake_case` prefixed with `$` (e.g., `$ who_am_i`)
    - **Background:** Dark blue/purple gradient (Terminal/IDE feel)
    - **Components:** White cards for projects to contrast with dark background
    - **Profile Pic:** Rounded rectangle (border-radius: 12px)

### Architecture & Structure
- **Stack:** HTML5, CSS3, Vanilla JavaScript (No frameworks allowed per constraints).
- **File Structure:** Flat structure.
    - `index.html`: Main entry point. Contains semantic sections (`#hero`, `#projects`).
    - `index.css`: Global styles, CSS variables for theme colors, animation classes.
    - `index.js`: Handles interactions (Image Slider/Carousel) and Scroll Reveal animations.
    - `DESIGN.xml`: Design specifications and constraints.

### Key Components
1.  **Hero Section:**
    - Rounded rectangle profile picture.
    - "Terminal command" styled links.
2.  **Project Highlights:**
    - Grid layout.
    - Custom Vanilla JS Image Carousel (Logic in `index.js`, styles in `index.css`).
    - Scroll reveal animations using `IntersectionObserver`.

### Constraints
- Mobile-first responsive design.
- Accessible semantic HTML.
- Zero dependencies (except FontSource for typography).
