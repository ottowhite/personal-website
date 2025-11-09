# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Otto White built with Next.js 15, TypeScript, React 19, and Tailwind CSS 4. The site features a dark mode design with a collapsible sidebar navigation and multiple pages including a home page, links/contact page, and utility endpoints.

## Development Commands

```bash
# Development server with Turbopack (fast refresh)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Project Structure

- **`src/app/`** - Next.js App Router pages and API routes

  - `layout.tsx` - Root layout with Sidebar component, fonts (Geist Sans/Mono), and dark theme setup
  - `page.tsx` - Home page with welcome content and image
  - `links/page.tsx` - Contact/links page with social media and professional links
  - `txt/route.ts` - API route returning plain text (public keys or user setup scripts based on `?type=` query param)
  - `components/` - React components
    - `Sidebar.tsx` - Client component with hamburger menu and collapsible navigation

- **`public/`** - Static assets including images

## Key Technical Details

### Navigation Architecture

- The Sidebar is a client component (`'use client'`) embedded in the root layout
- Navigation items are defined in `Sidebar.tsx` as an array of `NavItem` objects
- Supports both internal Next.js Links and external links (marked with `isExternal` flag)
- Sidebar is collapsed by default and uses slide-in animation

### Styling

- Uses Tailwind CSS 4 with PostCSS
- Dark theme enforced via `className="dark"` on `<html>` element
- Custom color scheme: gray-950 background, gray-100 text
- Fixed top bar (64px height, z-50) with sidebar and site title
- Main content has padding-top to account for fixed header

### TypeScript Configuration

- Path alias: `@/*` maps to `./src/*`
- Target: ES2017
- Strict mode enabled
- Module resolution: bundler

### Development Environment

- Nix flake available for reproducible development environment setup
- Uses Next.js 15 with Turbopack for fast development

## API Routes

- **`/txt`** - Returns plain text content
  - `?type=pubkey` (default): Returns SSH public key
  - `?type=add_user`: Returns bash script for user setup with SSH key

## Adding New Pages

1. Create new file in `src/app/[page-name]/page.tsx`
2. Add route to `navItems` array in `src/app/components/Sidebar.tsx`
3. Use `'use client'` directive if client-side features needed

## Git Workflow

Make atomic commits with conventional commit style:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, no functional changes)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Each commit should represent a single logical change. Ask if the change is satisfactory before committing.

Push after every commit.
