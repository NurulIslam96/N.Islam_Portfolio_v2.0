# Md. Nurul Islam — Portfolio

A flashy, animated single-page portfolio: a live 3D hero scene (Three.js),
glassmorphic panels, gradient text, scroll-triggered reveals, mouse-tilt
project cards, and a working "message me" panel. Built with React, Vite,
React Three Fiber and Framer Motion.

## Run it

You need [Node.js](https://nodejs.org) 18 or newer installed. Then, in this folder:

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). That's it — no
accounts or keys required (just an internet connection the first time, so
`npm install` can download React Three Fiber and Framer Motion).

To build a static production version:

```bash
npm run build
npm run preview   # preview the production build locally
```

The `dist/` folder from `npm run build` is what you'd upload to any static
host (Netlify, Vercel, GitHub Pages, etc.).

## What's inside

- `src/App.jsx` — the shell: background aurora, navbar, sections, mail modal
- `src/sections/` — Hero, About, Projects, Contact (the scrolling page)
- `src/components/HeroScene.jsx` — the 3D floating-glass hero, built with `@react-three/fiber`
- `src/components/TiltCard.jsx` — the mouse-tilt 3D wrapper used by project cards
- `src/components/MailPanel.jsx` — the contact form, shown as a glass modal
- `src/data/content.js` — all your text content (name, skills, projects, accent colors) in one place
- `public/resume.pdf` — your résumé, wired up to the "Résumé" button on Home

## About the contact form ("mail client")

Out of the box, submitted messages are saved to **the visitor's own browser**
via `localStorage` (see `src/lib/mailStore.js`) and shown in the panel's
"Messages" tab, plus there's an "Email directly" button that opens the
visitor's email app with a `mailto:` link — that one always works and is the
most reliable way for someone to actually reach you.

Because there's no backend server, messages saved via the form only exist in
that visitor's browser — they aren't sent to you automatically. If you want
real emails delivered to your inbox whenever someone submits the form:

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Add an Email Service (e.g. connect your Gmail) and copy its **Service ID**
3. Create a template with `{{name}}`, `{{email}}`, `{{message}}` variables and copy its **Template ID**
4. Copy your **Public Key** from Account → General
5. Paste all three into `src/lib/emailjs.js`

No extra npm install needed for that — it calls EmailJS's REST API directly
with `fetch`. Once those three values are filled in, the form automatically
starts sending real emails in addition to the local save.

## Editing content

Everything text-based — your bio, skills, and the three projects (BuyTop,
Dentisia, Learning Point) — lives in `src/data/content.js`. Change it there
and every page updates automatically.

## Deploying

Any static host works since this builds to plain HTML/CSS/JS:

- **Vercel / Netlify**: connect the repo, build command `npm run build`, output directory `dist`
- **GitHub Pages**: run `npm run build`, push the contents of `dist/` to a `gh-pages` branch
