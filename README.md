# Hero Park — AI-Driven Developer

Personal portfolio built with React, Vite, and Tailwind CSS.

## Development

- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm run preview`

## Content

The page presents an introduction, selected projects, skills, certificates, and contact details. Project data lives in `src/components/Projects/Projects.jsx`. Demo and source URLs were not provided, so project actions open real screenshot galleries instead of placeholder links. Add verified project URLs when available. InternHub is explicitly presented as UI/UX design work.

The title and description use “Hero Park | AI-Driven Developer”. No unverified AI project results, client metrics, or employment history have been added.

## Accessibility and performance

- Native modal dialogs support keyboard focus, Escape dismissal, focus restoration, and background scroll locking.
- Semantic sections, a skip link, visible focus styles, actionable email/phone links, and accessible clipboard feedback.
- Responsive layout, light/dark mode with optional persisted preference, and reduced-motion support.
- Optimized WebP project images and portrait; original assets are retained. Below-the-fold images load lazily.

## Assets and hosting

Certificates are in `public/certificates`; the CV is `public/resume.pdf`. The static build is emitted to `dist`. `.openai/hosting.json` identifies the private Sites preview.
