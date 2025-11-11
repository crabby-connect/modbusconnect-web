# Technology Stack

## Framework

- **Next.js 14.2.15** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5.6.3** - Type-safe JavaScript

## Build System

- **Next.js Static Export** - Configured with `output: "export"` for static site generation
- **SWC** - Fast TypeScript/JavaScript compiler and minifier (enabled via `swcMinify: true`)
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixing

## Styling

- **Tailwind CSS 3.4.14** - Utility-first CSS framework
- Custom color palette defined in `tailwind.config.js` (primary colors: 50-900 scale)
- Global styles in `app/globals.css`

## UI Components

- **Lucide React** - Icon library (v0.344.0)
- Custom components in `app/components/`

## Image Optimization

- **Sharp** - High-performance image processing
- **Critical** - Critical CSS extraction
- Custom optimization scripts:
  - `scripts/optimize-images.js` - Generates responsive WebP images
  - `scripts/postbuild-optimize.js` - Post-build HTML optimization

## Configuration

- **Path Aliases**: `@/*` maps to workspace root
- **Strict TypeScript**: Enabled with strict mode
- **Module Resolution**: Bundler mode for Next.js compatibility

## Common Commands

```bash
# Development server
npm run dev

# Production build (includes image optimization)
npm run build

# Start production server
npm start

# Linting
npm run lint

# Image optimization only
npm run optimize:images

# Post-build optimization only
npm run postbuild
```

## Build Process

The build pipeline runs in this order:

1. `optimize:images` - Creates responsive WebP versions of images
2. `next build` - Builds static site with Next.js
3. `postbuild` - Optimizes HTML output (async CSS, fetch priority)

## Performance Optimizations

- Static export for fast hosting
- Image unoptimization disabled (handled by custom scripts)
- Console removal in production
- Inline critical CSS in layout
- Async CSS loading
- WebP image format with PNG fallbacks
- Responsive images with srcset
- Fetch priority hints for hero images
