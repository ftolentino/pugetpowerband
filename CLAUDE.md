# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

Sanity Studio is accessible at `/studio` route during development.

## Architecture

This is a Next.js 15 band website with Sanity CMS for content management.

### Data Flow
- **Sanity CMS** → `lib/sanity.ts` (client + GROQ queries) → **React components**
- All content (band info, photos, shows) is managed through Sanity Studio
- Components fetch data server-side using queries defined in `lib/sanity.ts`

### Key Files
- `lib/sanity.ts` - Sanity client, GROQ queries, TypeScript interfaces (BandInfo, Photo, Show)
- `sanity.config.ts` - Sanity Studio config (mounted at `/studio`)
- `sanity/schemas/` - Content type definitions (bandInfo, photo, show)
- `app/page.tsx` - Homepage assembles all section components
- `tailwind.config.ts` - Custom `primary` color palette for theming

### Content Types (Sanity Schemas)
- **bandInfo**: Band name, description, hero image, social links
- **photo**: Gallery images with categories (live, band, studio, bts)
- **show**: Venue, date, tickets, age restrictions, supporting acts

### Environment Variables
```
NEXT_PUBLIC_SANITY_PROJECT_ID  # Sanity project ID
NEXT_PUBLIC_SANITY_DATASET     # Usually "production"
NEXT_PUBLIC_SITE_URL           # Production URL for SEO
```
