# Abisha V — Portfolio

A React + Vite portfolio site: Home, Work (project list), individual project
detail pages, About, and Contact.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy anywhere that
serves static files (Vercel, Netlify, GitHub Pages, etc).

## Add your photos

See `public/images/README.md` — just drop in files with the right names and
they'll show up automatically. No code changes needed.

## Edit your content

All your projects, experience, education, and skills live in one file:

```
src/data/projects.js
```

Update that file and every page (Home, Work, project detail pages, About)
updates automatically.

## Project structure

```
src/
  components/   Nav, Footer, ProjectCard, Avatar, icons, dividers
  pages/        Home, Work, ProjectDetail, About, Contact
  data/         projects.js — all your content in one place
  App.jsx       routes
  index.css     design tokens (colors, fonts, spacing)
  App.css       component styles
```
