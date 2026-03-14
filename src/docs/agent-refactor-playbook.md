# Agent Refactor Playbook

## Objective
Standardize layout, header behavior, and color usage across the app with low regression risk.

## Completed Baseline
- Shared page shell created and adopted across all top-level pages.
- Header now supports theme variants and path-based active navigation.
- Global color tokens established in globals.css.
- Shared internal page hero component adopted across internal pages.
- Raw-hex guardrail script added: npm run lint:colors.

## Parallel Agent Assignments

### Agent 1: Token Migration Agent
Scope:
- Replace remaining repeated hex values with semantic CSS variables.
- Focus first on repeated values: #0B4BBB, #0a3d9c, #161616, #F5F7FA, #f4f4f4.

Success criteria:
- No visual regressions on hero, CTA, and card sections.
- No hardcoded color hex values in page wrappers and shared components except approved exceptions.

Suggested prompt:
"Thoroughly migrate repeated color hex values in src/app and src/components to semantic CSS variables from globals.css. Keep behavior and appearance unchanged. Return changed files and any remaining exceptions."

### Agent 2: Shared Hero Pattern Agent
Scope:
- Extract repeated internal-page hero structure into shared component.
- Keep current spacing and animation defaults.
- Support label, title, description, and optional custom children.

Success criteria:
- Privacy, Terms, About, Contact, Services, Solutions, and Resources all use the shared hero component.
- Existing content and motion behavior preserved.

Suggested prompt:
"Create a reusable internal-page hero component for repeated sections using HeroBackground + heading block. Migrate all matching pages with minimal visual change and report any outliers requiring custom layout."

### Agent 3: Surface Consistency Agent
Scope:
- Normalize section surface backgrounds to token classes.
- Define clear patterns for page background, section background, card background, and dark CTA band.

Success criteria:
- Section-level style consistency across all pages.
- No conflicting background layers where parent and child sections fight each other.

Suggested prompt:
"Audit section and card backgrounds across all pages, then normalize them to a consistent surface system using semantic tokens. Preserve intended contrast and hierarchy."

### Agent 4: Guardrails Agent
Scope:
- Add a style architecture note and contribution guardrails.
- Document how to use PageShell, Header theme options, and tokens.

Success criteria:
- New contributors can follow one documented approach.
- Includes a short checklist for PR reviews.

Suggested prompt:
"Create concise docs for style architecture and page composition conventions. Include examples for PageShell usage, Header theming, token usage, and a PR checklist to prevent regression into page-specific style drift."

## Review Checklist
- Header active state is correct on nested routes.
- Hero fade/parallax behavior still works.
- Footer and BottomFooter appear exactly once per page.
- No TypeScript or lint errors.
- No raw hex colors in src/app or src/components (run npm run lint:colors).
- Mobile menu still locks body scroll and closes correctly.
