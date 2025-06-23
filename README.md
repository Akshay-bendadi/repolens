# Repolens Next.js Project

## Tech Stack

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS** (with PostCSS)
- **Prettier** (with Tailwind plugin)
- **ESLint** (Next.js + TypeScript rules)
- **Recharts** (for charting)
- **GitHub API integration boilerplate**

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run development server:**
   ```sh
   npm run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```
4. **Lint code:**
   ```sh
   npm run lint
   ```
5. **Format code:**
   ```sh
   npm run format
   ```

## Node.js Compatibility

- Requires **Node.js v16 or higher**

## Folder Structure

- `src/app/` — App Router pages
- `src/components/` — Shared React components
- `src/utils/` — Utility functions (e.g., GitHub API)

## GitHub API Integration

- See `src/utils/github.ts` for a fetch utility with an auth placeholder.

## Example Chart

- See `src/app/page.tsx` for a Recharts example.
