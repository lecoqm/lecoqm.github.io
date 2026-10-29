# Mathis Lecoq — portfolio

A static portfolio for **https://lecoqm.github.io/**, with a dark background, a profile column, and a project list. The layout follows the profile-and-projects structure requested by Mathis, inspired by <https://mreleden.github.io/projects.html>.

The desktop profile column stays visible while scrolling. On smaller screens, the profile moves above the projects. All content and links work without JavaScript. There are no dependencies or build tools.

## Update the existing site

1. Extract the ZIP. Inside `lecoqm.github.io`, you will find `index.html`, `README.md`, and the `assets` folder.
2. Copy these files into your existing local **lecoqm.github.io** Git repository, replacing the matching files and adding `assets/profile.svg`. Preserve any unrelated files you have added.
3. Preview the result by opening `index.html` in a browser.
4. From your repository folder, use PowerShell:

   ```powershell
   git status
   git add index.html README.md assets/styles.css assets/site.js assets/favicon.svg assets/profile.svg
   git commit -m "Redesign portfolio with dark theme and profile sidebar"
   git push
   ```

Your existing GitHub Pages deployment settings stay the same. Wait for the Pages deployment to complete, then refresh **https://lecoqm.github.io/**. If your browser still shows the old version, use Ctrl+F5.

Commit the extracted website files, not the ZIP.

## Personalise the left column

Open `index.html` and find the comment beginning **PROFILE**.

- **Name:** edit `profile-name`.
- **Role or headline:** edit the paragraph with `class="profile-role"`.
- **Short biography:** edit the paragraph with `class="profile-bio"`.
- **Links:** edit the GitHub and LinkedIn anchors in `profile-links`.
- **Longer biography:** edit the section with `id="about"` near the end of the file.

### Add your photograph

The initial version uses an SVG with the initials **ML**. To use a portrait:

1. Add the image as `assets/profile.jpg`.
2. Change the profile `<img>` to:

   ```html
   <img class="profile-image" src="assets/profile.jpg" width="152" height="152" alt="Portrait of Mathis Lecoq">
   ```

The CSS crops the image to a circle. A square photo works best.

### Add your CV

1. Add your PDF as `assets/cv.pdf`.
2. In the **PROFILE** block, find the comment beginning **Optional CV link**.
3. Remove the surrounding HTML comment markers and explanatory sentence, leaving only:

   ```html
   <a class="cv-link" href="assets/cv.pdf" download>Download my CV <span aria-hidden="true">↓</span></a>
   ```

4. Add the new assets to your next commit along with your HTML changes.

The download link is absent until a PDF is added.

## Edit the projects

Each project is an `<article>` in `index.html` with a heading, a stack/focus/links summary, and visible project notes:

1. **Bike demand forecasting** (`bike-demand`): public project covering forecasting and the ML lifecycle.
2. **Molecular graph captioning** (`molecular-captioning`): collective ALTEGRAD work with Nazim Fadli and Zié Coulibaly, with links to Mathis's fork and the original team repository.
3. **Industrial anomaly detection** (`industrial-anomalies`): future public-data project, clearly marked **Coming soon**.

When the third repository is ready, replace its planned scope with the actual work, change its status label, and add the repository URL to its summary. Only add measured results together with the evaluation context needed to understand them.

The workflow figures are explanations of the approaches. They are not dashboards or measured experimental results.

## Files and styling

- `index.html`: profile, projects, biography, and links.
- `assets/styles.css`: colours, typography, the sticky column, and mobile layout. The colour palette is defined in `:root` at the top.
- `assets/site.js`: optional active-navigation highlighting.
- `assets/profile.svg`: default initials image.
- `assets/favicon.svg`: browser icon.
- `.nojekyll`: static GitHub Pages serving.

There are no third-party fonts, analytics scripts, or external image requests.

## Preview locally

Open `index.html` directly. Alternatively, run the following from the repository folder:

```powershell
python -m http.server 8000
```

Then visit <http://localhost:8000>. Stop the server with Ctrl+C.

## First deployment, if needed

For a new installation, create a public GitHub repository named **lecoqm.github.io**, push these extracted files, then select **Settings → Pages → Deploy from a branch → main → / (root)**.

Official documentation: <https://docs.github.com/en/pages/quickstart>.

## Attribution

The layout was inspired by Mathias Villerabel's projects page. The portfolio implementation, text, and diagrams were prepared for Mathis Lecoq; no portrait, stylesheet, project image, or project result was copied from the reference page.

The project descriptions are based on the work discussed with Mathis. The molecular project is collective work, and its source repositories are linked. The internship-inspired entry contains no employer source code, internal report, private data, or internal experimental results.
