# Mathis Lecoq — portfolio

A static portfolio prepared for **https://lecoqm.github.io/**.

It presents:

1. [Bike demand forecasting](https://github.com/lecoqm/bike_demand_forecasting): forecasting, model tracking, API serving, replay, monitoring, and model comparison.
2. [Molecular graph captioning](https://github.com/lecoqm/molecular-graph-captioning): a shared ALTEGRAD project with Nazim Fadli and Zié Coulibaly. The page links to both Mathis's fork and the original team repository and describes the collaborative contribution across approaches.
3. Industrial anomaly detection: a clearly labelled **coming soon** entry for a future project using public data. There is no repository link or published performance claim for this project yet.

## Publish with GitHub Pages

These instructions assume that you do not already have a `lecoqm.github.io` repository. If you do, use its existing checkout and keep unrelated files.

1. On GitHub, create a **public** repository named exactly **`lecoqm.github.io`**. Leave README, licence, and .gitignore initialization unchecked: these files are already in this folder.
2. Extract the ZIP on your computer. Open PowerShell inside the extracted `lecoqm.github.io` folder, where `index.html` and `README.md` are directly visible.
3. Upload the source with Git:

   ```powershell
   git init -b main
   git add .
   git commit -m "Create machine learning portfolio"
   git remote add origin https://github.com/lecoqm/lecoqm.github.io.git
   git push -u origin main
   ```

4. In the GitHub repository, open **Settings → Pages**.
5. Under **Build and deployment**, set **Source** to **Deploy from a branch**. Choose **main**, **/ (root)**, then **Save**.
6. Wait for the Pages deployment to complete, then open **https://lecoqm.github.io/**. The first deployment can take several minutes.

You are publishing the extracted site files, not the ZIP itself. This is a separate portfolio repository; do not put these files into either machine learning project's source tree.

Official instructions: <https://docs.github.com/en/pages/quickstart>.

## Preview locally

Open `index.html` directly in a browser. The content, styles, diagrams, links, and expandable notes work from a local file without a server or JavaScript.

Alternatively, from this folder:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000>. Stop the server with Ctrl+C.

## Edit the portfolio

- **Text and links:** `index.html`.
- **Colours, spacing, and responsive layout:** `assets/styles.css`.
- **Optional active navigation:** `assets/site.js`.
- **Browser icon:** `assets/favicon.svg`.

To add the internship-inspired project later, find the article with `id="industrial-anomalies"` in `index.html`:

1. Replace the planned description and outline with the actual public project's methods and results.
2. Change its status from "Coming soon" to "Public repository".
3. Replace the planned-note paragraph with an actual repository link, following the first project's `text-link` pattern.
4. Update the portfolio index, the "Two public repositories" count, and the artwork's preparation label as appropriate.

Keep illustrations labelled as conceptual unless they are replaced with measured results. The sensor illustration currently contains no experimental data. The graph illustration is an abstract representation, not a validated chemical structure.

## Content and attribution

The portfolio descriptions are based on the projects discussed with Mathis. Source repositories are linked from each project. No numerical performance scores are reproduced on this page. Project details and results belong in their respective repositories, where their evaluation context can be inspected.

The molecular project is collective work; this portfolio does not assign ownership from commit counts. Its original team repository is <https://github.com/Nazim-fad/molecular-graph-captioning>.

The industrial project entry describes a future public-data implementation. The website contains no internship report, slide deck, employer source code, private dataset, or internal experimental result.

All artwork is inline SVG created for this portfolio. The site uses system fonts, makes no third-party font or analytics requests, and has no runtime dependencies, installation, or build step. `.nojekyll` allows GitHub Pages to serve it as static files.
