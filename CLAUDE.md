# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SvelteKit-based website for Agi Reflexology, a reflexology and massage therapy business with multiple locations. The site uses Svelte 5, TypeScript, Tailwind CSS v4, and is configured to deploy to Netlify.

## Commands

### Development
```bash
npm run dev              # Start development server
npm run dev -- --open    # Start dev server and open in browser
```

### Build & Preview
```bash
npm run build            # Build production version
npm run preview          # Preview production build locally
```

### Code Quality
```bash
npm run check            # Run svelte-check with TypeScript
npm run check:watch      # Run svelte-check in watch mode
npm run lint             # Check code with Prettier and ESLint
npm run format           # Format code with Prettier
```

## Architecture

### Directory Structure

- **`src/routes/`** - SvelteKit file-based routing
  - Dynamic routes use bracket notation: `[location_type]/[location_name]/`
  - Server-side logic in `+page.server.ts`, client-side data loading in `+page.ts`
  - Root layout (`+layout.svelte`) wraps all pages

- **`src/lib/`** - Shared application code
  - `components/` - Reusable UI components organized by category:
    - `ui/` - Pure presentational components (Text, Badge, Image, etc.)
    - `ui-interactive/` - Interactive components (Button, InlineLink, Accordion)
    - `form/` - Form input components (FormInput, FormTextarea, FormSelect, FormRadioGroup)
    - `navigation/` - Header, footer, and navigation components
    - `layout/` - Layout containers (Page, Container, Section)
  - `pages/` - Page-specific components organized by route (home/, about/, services/, locations/)
  - `data/` - Static data and content (navigation, locations, FAQs, price cards)
  - `schemas/` - TypeScript type definitions and Zod schemas
  - `stores/` - Svelte 5 runes-based stores (using `.svelte.js` files)
  - `scripts/` - Utility functions

### Key Patterns

#### Location System
The site features a comprehensive location management system:
- Locations are defined in `src/lib/data/locations.ts` with structured metadata
- Each location has a slug (e.g., "burnham", "chelsea") used in URLs
- Dynamic routes at `/locations/[location_type]/[location_name]` handle all location pages
- Location data includes: hero section, badges, available services/days, maps, descriptions
- Location types: "agi-studio", "reflexions", "home-visit"
- The `+page.ts` loader converts URL params (kebab-case) to data keys (snake_case)

#### Data-Driven Navigation
- Navigation structure defined in `src/lib/data/navigation/navigation.ts`
- Supports nested dropdowns with sublinks
- Header and footer navigation share same data structure
- Logo configuration supports three modes: icon_text, icon_only, text_only

#### Form Handling
- Uses `sveltekit-superforms` with Zod validation
- Contact form at `/contact` with server-side submission (`+page.server.ts`)
- Email integration via nodemailer (Gmail service)
- Schema defined in `src/lib/schemas/contactFormSchema.ts`

#### Component Type System
Components use TypeScript schemas for props:
- `textTypes.ts` - Text component variants and sizes
- `badgeTypes.ts` - Badge color and style variants
- `buttonTypes.ts` - Button variants and sizes
- `priceCard.ts` - Price card structure with badges
- Type definitions provide autocomplete and validation

#### Styling Architecture
- Tailwind CSS v4 via Vite plugin (`@tailwindcss/vite`)
- Global styles in `src/app.css`
- Component-specific style utilities in `src/lib/components/ui/styles/`
- Uses `clsx` and `tailwind-merge` for dynamic class composition

### SvelteKit Features

#### Server-Side vs Client-Side
- `+page.server.ts` - Server-only code (API calls, form actions, secrets)
- `+page.ts` - Runs on both server and client (data fetching)
- Form actions in `+page.server.ts` handle POST requests

#### Data Loading
- Load functions export data to page components via `data` prop
- Params from dynamic routes available in load function
- Use `error()` helper to throw 404s when data not found

### State Management

Uses Svelte 5 runes pattern (`.svelte.js` files):
- `animationState.svelte.js` - Page transition state
- `darkmode.svelte.js` - Dark mode toggle state
- `treatments.svelte.js` - Treatment filter state

### Build Configuration

- **Adapter**: `@sveltejs/adapter-netlify` (production), `adapter-auto` (fallback)
- **Vite**: Configured with Tailwind and SvelteKit plugins
- **TypeScript**: Strict mode enabled with standard SvelteKit config

## Important Notes

- **Email credentials**: The contact form contains hardcoded credentials in `src/routes/contact/+page.server.ts` - these should be moved to environment variables before production
- **Location data**: When adding new locations, update both `locations` map and `locationSections` array in `src/lib/data/locations.ts`, and add corresponding navigation links in `src/lib/data/navigation/navigation.ts`
- **Svelte 5**: This project uses Svelte 5 syntax (runes like `$state`, `$derived`, `$effect`)
- **Image handling**: Images use structured metadata with multiple variants (lg, md, sm, xs, webp, thumbnail) from CDN
