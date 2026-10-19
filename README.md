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
├── data/         # profile.ts (projects, skills, contacts, links)
├── i18n/         # translations.ts (IT/EN strings) and utils.ts (t(), localized paths)
├── layouts/      # Layout.astro (head, navbar, footer)
├── pages/
│   ├── index.astro   # redirect to /it/
│   └── [lang]/       # each page is generated once per language (/it/, /en/)
└── styles/       # global.css (theme variables, buttons, animations)
```

- **Text:** all user-facing strings live in `src/i18n/translations.ts`; pages read them with `t(lang, "key")`.
- **Content:** projects, skills and contacts live in `src/data/profile.ts`. To add a project, add an entry there plus its `projects.<id>.desc` string in both languages; set `featured: true` to show it on the home page.

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
