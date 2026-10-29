# Mathis Lecoq — portfolio

A static portfolio for **https://lecoqm.github.io/**, with a dark background and a profile column. The layout follows the structure requested by Mathis, inspired by <https://mreleden.github.io/index.html>.

- **Home — `index.html`:** introduction, illustrated summaries of the three featured projects, About me, and Contact.
- **Project details — `projects.html`:** full write-ups, methods, deliverables, and the upcoming project's outline.

Each project title and its details link on the home page opens the matching section of `projects.html`. The sidebar and back links let visitors move between the two pages.

The home page also restores the three illustrations from the first portfolio design. Clicking an illustration opens its project write-up.

The desktop profile column stays visible while scrolling. On smaller screens, the profile moves above the projects. All content and links work without JavaScript. There are no dependencies or build tools.

## Update the existing site

1. Extract the ZIP. Inside `lecoqm.github.io`, you will find `index.html`, **`projects.html`**, `README.md`, and the `assets` folder.
2. Copy these files into your existing local **lecoqm.github.io** Git repository, replacing the matching files and adding `assets/profile.svg`. Preserve any unrelated files you have added.
3. Preview the result by opening `index.html` in a browser.
4. From your repository folder, use PowerShell:

   ```powershell
   git status
   git add index.html projects.html README.md assets
   git commit -m "Restore project illustrations on portfolio home page"
   git push
   ```

Your existing GitHub Pages deployment settings stay the same. Wait for the Pages deployment to complete, then refresh **https://lecoqm.github.io/**. If your browser still shows the old version, use Ctrl+F5.

Commit the extracted website files, not the ZIP.

## Personalise the left column

Find the comment beginning **PROFILE** in both `index.html` and `projects.html`. Keep the sidebar information consistent in both files.

- **Name:** edit `profile-name`.
- **Role or headline:** edit the paragraph with `class="profile-role"`.
- **Short biography:** edit the paragraph with `class="profile-bio"`.
- **Links:** edit the GitHub and LinkedIn anchors in `profile-links`.
- **Longer biography:** edit the section with `id="about"` near the end of `index.html`.

### Edit the contact section

The **Contact** section follows **About me** on the home page. Both sidebars link directly to `index.html#contact`. It currently contains your LinkedIn and GitHub links.

Edit the section with `id="contact"` in `index.html` to change the text or links. To add an email address, add a new list item containing a `mailto:` link with the address you want to make public.

### Add your photograph

The initial version uses an SVG with the initials **ML**. To use a portrait:

1. Add the image as `assets/profile.jpg`.
2. Change the profile `<img>` in both HTML files to:

   ```html
   <img class="profile-image" src="assets/profile.jpg" width="152" height="152" alt="Portrait of Mathis Lecoq">
   ```

The CSS crops the image to a circle. A square photo works best.

### Add your CV

1. Add your PDF as `assets/cv.pdf`.
2. In the **PROFILE** block of each HTML file, find the comment beginning **Optional CV link**.
3. Remove the surrounding HTML comment markers and explanatory sentence, leaving only:

   ```html
   <a class="cv-link" href="assets/cv.pdf" download>Download my CV <span aria-hidden="true">↓</span></a>
   ```

4. Add the new assets to your next commit along with your HTML changes.

The download link is absent until a PDF is added.

## Edit the projects

The home page has a short `<article>` for each project. Full write-ups are in `projects.html`, using the same project IDs:

1. **Bike demand forecasting** (`bike-demand`): public project covering forecasting and the ML lifecycle.
2. **Molecular graph captioning** (`molecular-captioning`): collective ALTEGRAD work with Nazim Fadli and Zié Coulibaly, with links to Mathis's fork and the original team repository.
3. **Industrial anomaly detection** (`industrial-anomalies`): future public-data project, clearly marked **Coming soon**.

When the third repository is ready, update its summary in `index.html` and its full write-up in `projects.html`. Replace the planned scope with the actual work, change its status label, and add the repository URL. Only add measured results together with the evaluation context needed to understand them.

The project illustrations and workflow figures explain the approaches. They are not dashboards or measured experimental results. The sensor illustration is explicitly labelled as conceptual, and the molecular graph is an abstract illustration.

The home-page artwork is stored in `assets/bike-demand.svg`, `assets/molecular-captioning.svg`, and `assets/industrial-anomalies.svg`. These self-contained vector images stay sharp on different screens and use no external resources.

## Files and styling

- `index.html`: home page, short project summaries, biography, and links.
- `projects.html`: full project write-ups and links back to the home page.
- `assets/styles.css`: colours, typography, the sticky column, and mobile layout. The colour palette is defined in `:root` at the top.
- `assets/site.js`: optional active-navigation highlighting.
- `assets/profile.svg`: default initials image.
- `assets/bike-demand.svg`, `assets/molecular-captioning.svg`, `assets/industrial-anomalies.svg`: the three original project illustrations.
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
