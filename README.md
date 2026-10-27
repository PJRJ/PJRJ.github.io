# Pedro Jesús Ruiz Jiménez — academic website

Static, dependency-free personal site (plain HTML/CSS/JS, no build step).

```
index.html          all content (about, news, publications, projects, CV sections)
assets/style.css    styles, light/dark theme
assets/main.js      theme toggle, BibTeX copy buttons, active-nav highlight
assets/favicon.svg
.nojekyll           tells GitHub Pages to serve files as-is
```

## Preview locally

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy on GitHub Pages

The site lives in `PJRJ/PJRJ.github.io` and is served at **https://pjrj.github.io**.
Pages is set to deploy from `main` / `(root)`, so every `git push` to `main` redeploys the site
(the build takes about a minute; progress is under the repository's Actions tab).

Optional custom domain: add it under Settings → Pages, point a `CNAME` DNS record at
`pjrj.github.io`, and tick *Enforce HTTPS*.

## Updating content

Everything lives in `index.html`:

- **New paper:** copy an `<article class="pub">` block under the right year heading.
- **News:** add an `<li>` at the top of the `.news` list.
- **Photo:** add `assets/photo.jpg` and swap the initials `<div>` as described in the comment.
- **More profiles (Google Scholar, DBLP, LinkedIn, CV PDF):** uncomment the lines in the sidebar.
- **Service / Teaching / Talks:** uncomment the placeholder near the end of `<main>`.
