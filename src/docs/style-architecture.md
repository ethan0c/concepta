# Style Architecture

## Source of truth
- Design tokens live in src/app/globals.css under :root.
- App and components should consume semantic token classes via Tailwind arbitrary values, for example:
  - bg-[var(--color-page-bg)]
  - bg-[var(--color-surface)]
  - bg-[var(--color-surface-subtle)]
  - bg-[var(--color-surface-muted)]
  - text-[var(--color-primary)]
  - hover:bg-[var(--color-primary-hover)]

## Page composition
- Use PageShell for all top-level pages.
- Do not compose Header/Footer/BottomFooter manually inside page files.
- Keep top-level spacing in PageShell unless a page has a true exception.

## Hero composition
- Use InternalHeroSection for internal pages.
- Keep Home page hero as HeroSection.
- Avoid creating ad hoc hero markup unless the structure is genuinely different.

## Surface conventions
- Page background: var(--color-page-bg)
- Main card/contained surface: var(--color-surface)
- Soft section surface: var(--color-surface-subtle)
- Muted panel surface: var(--color-surface-muted)
- Dark band/hero background: var(--color-hero-bg)

## Header conventions
- Header supports theme variants:
  - default
  - light
  - transparent
- Prefer path-based active state over manually passing currentPage strings.

## Guardrails
- No raw hex colors inside src/app or src/components (except explicit allowlist).
- Run npm run lint:colors before merging style-heavy changes.

## PR checklist
- Page uses PageShell.
- Internal page uses InternalHeroSection where applicable.
- No new raw hex values in app/components.
- Header active navigation still correct for nested routes.
- Desktop and mobile verified for visual regressions.
