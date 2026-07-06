# 🚀 Nur Habib's Portfolio

<div align="center">

![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### Personal portfolio — built with React, TypeScript, Tailwind CSS & Redux

[🌐 Live Site](https://nurhabibrs.github.io) • [📧 Contact](mailto:nurhabibrs@gmail.com)

</div>

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **UI** | React 19, TypeScript, Tailwind CSS v4 |
| **State** | Redux Toolkit (`@reduxjs/toolkit` + `react-redux`) |
| **Data** | GitHub REST API (repos fetched at runtime) |
| **Build** | Vite 6 |
| **Deploy** | GitHub Actions (`actions/deploy-pages`) |

## Features

- **GitHub API Integration** — Fetches and displays public repos dynamically
- **Dark-themed UI** — Purple accents, glassmorphic cards, floating glow effects
- **Responsive** — Mobile-first grid layout
- **Skeleton Loading** — Animated placeholders while data loads
- **CI/CD** — Auto-deployed via GitHub Actions on push to `main`

## Project Structure

```
src/
├── main.tsx           # Entry point (Redux Provider + root render)
├── App.tsx            # Root layout, repo fetch dispatch
├── index.css          # Tailwind import + global styles
├── hooks.ts           # Typed Redux hooks (useAppSelector, useAppDispatch)
├── vite-env.d.ts      # Vite type declarations
├── store/
│   ├── store.ts       # Redux store config
│   └── reposSlice.ts  # Async thunk & reducer for GitHub repos
└── components/
    ├── Header.tsx     # Sticky nav with GitHub loading indicator
    ├── Hero.tsx       # Intro section with CTA buttons
    ├── Experience.tsx # Work history cards
    ├── Projects.tsx   # Top 6 repos grid (sorted by stars)
    └── Contact.tsx    # Footer with email & social links
```

## Development

```bash
npm install       # Install deps
npm run dev       # Dev server at localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview production build
```

## Deployment

Push to `main` → GitHub Actions workflow builds and deploys to GitHub Pages automatically.

---

<div align="center">

**Built with ❤️ by Nur Habib**

</div>
