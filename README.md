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

The site lives in `PJRJ/PedroSite` and is served at `https://pjrj.github.io/PedroSite/`.

1. Pages on a free GitHub plan needs a **public** repository
   (Settings → General → Danger Zone → Change visibility).
2. **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*,
   Branch = `main` / `(root)`, then Save. The first build takes about a minute.
3. Every `git push` to `main` redeploys the site.

To serve it at the root URL `https://pjrj.github.io` instead, rename the repository to
`PJRJ.github.io` (Settings → General → Repository name) and update the remote:
`git remote set-url origin https://github.com/PJRJ/PJRJ.github.io.git`.

Optional custom domain: add it under Settings → Pages, point a `CNAME` DNS record at
`pjrj.github.io`, and tick *Enforce HTTPS*.

## Updating content

Everything lives in `index.html`:

- **New paper:** copy an `<article class="pub">` block under the right year heading.
- **News:** add an `<li>` at the top of the `.news` list.
- **Photo:** add `assets/photo.jpg` and swap the initials `<div>` as described in the comment.
- **More profiles (Google Scholar, DBLP, LinkedIn, CV PDF):** uncomment the lines in the sidebar.
- **Service / Teaching / Talks:** uncomment the placeholder near the end of `<main>`.
