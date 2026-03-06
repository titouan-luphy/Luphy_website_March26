# CLAUDE.md – Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session

## ⚠️ Deployment Guardrail – Read Before Any Change

- The site is live on GitHub Pages (or similar). All changes stay local until explicitly cleared.
- Default behavior: Every change is previewed on localhost only. Do NOT push to GitHub unless the user says so.
- Accepted push triggers (exact phrases): "push to GitHub", "deploy", "ship it", "go live"
- If unsure, ask. Never assume a push is wanted.
- If the user says "looks good" or "perfect" — that is NOT a push trigger. Stay local.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly
- If no reference image: design from scratch with high craft (see guardrails below)
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do not stop until it matches

## Local Server
- **Always serve on localhost** – never screenshot a `file:///` URL
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshot
- If the server is already running, do not start a second instance

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png`
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as screenshot-N-label.png
- `screenshot.mjs` lives in the project root. Use it as-is
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, and component proportions

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, colors, and fonts
- If assets exist there, use them. Do not use placeholders where real assets are available
- If a logo is present, use it. If a color palette is defined, use those exact values

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom, intentional palette
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans-serif
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter when appropriate
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use specific properties
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment
- **Spacing:** Use intentional, consistent spacing tokens – not random Tailwind steps
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not flat UI

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design – match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
