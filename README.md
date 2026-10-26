# Gianmarco Fabbri — Personal Website

Personal website of Gianmarco Fabbri, M.Sc. Cybersecurity Engineering student at Politecnico di Torino.

**Live:** https://gianmarco-fabbri.github.io/

A single static HTML page with no build step: a fixed sidebar (photo, contacts, navigation) and a content column with About, Education, Experience, Projects and Skills. The layout is inspired by [Marios Kogias' academic website](https://github.com/marioskogias/marioskogias.github.io); the code is written from scratch.

## Structure

```text
index.html                # the whole site
css/style.css             # styles (colors and fonts are variables in :root)
img/                      # profile photo, social preview image (JPEG), touch icon
docs/                     # CV (PDF) linked from the sidebar
favicon.svg
404.html                  # not-found page; sends old /it/ and /en/ links to the home page
robots.txt, sitemap.xml
```

## Editing

- **Content:** edit `index.html` directly. Each project is a `<div class="project">` block inside `#projects`; copy one to add a new project.
- **CV:** replace `docs/Gianmarco-Fabbri-CV.pdf` (the published version has no phone number).
- **Last updated:** update the date in the footer of `index.html` and `<lastmod>` in `sitemap.xml`.

## Local preview

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which copies only the website files (`index.html`, `404.html`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `css/`, `img/`, `docs/`) and publishes them to GitHub Pages. If you add a new top-level file or folder to the site, add it to that list too.
