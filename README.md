# Gianmarco Fabbri — Portfolio

Personal portfolio of Gianmarco Fabbri, Cybersecurity Engineering student at Politecnico di Torino.

**Live:** https://gianmarco-fabbri.github.io/

Built with [Astro](https://astro.build) as a fully static site, available in Italian and English, and deployed automatically to GitHub Pages.

## Pages

| Page     | Path                                 |
| :------- | :----------------------------------- |
| Home     | `/it/`, `/en/`                       |
| About    | `/it/about/`, `/en/about/`           |
| Projects | `/it/projects/`, `/en/projects/`     |
| Notes    | `/it/notes/`, `/en/notes/`           |
| Contact  | `/it/contact/`, `/en/contact/`       |

The root `/` redirects to the Italian version.

## Project structure

```text
src/
├── components/   # Navbar, Hero, Footer, ProjectCard, SectionHeading, SkillBadge
├── i18n/         # translations.ts (IT/EN strings) and utils.ts (t(), localized paths)
├── layouts/      # Layout.astro (head, navbar, footer)
├── pages/
│   ├── index.astro   # redirect to /it/
│   ├── it/           # Italian pages
│   └── en/           # English pages
└── styles/       # global.css (theme variables, buttons, animations)
```

All user-facing text lives in `src/i18n/translations.ts`; each page sets its language and reads strings with `t(lang, "key")`.

## Development

Requires Node.js 18.20+ (or 20.3+).

```sh
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # static build in ./dist
npm run preview   # serve the build locally
```

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site with `withastro/action` and publishes it to GitHub Pages.
