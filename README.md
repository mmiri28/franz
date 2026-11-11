# Francis the Blackman

A small static website for a class project: a funny short story about Francis and his hopelessly misplanned "Great Sunrise Expedition".

## Files

- `index.html` – the page and the story
- `style.css` – styling
- `script.js` – the "Rate the expedition" buttons
- `netlify.toml` – tells Netlify there is no build step

## Run locally

Just open `index.html` in a browser.

## Deploy on Netlify (via GitHub)

1. The GitHub repository is [`mmiri28/franz`](https://github.com/mmiri28/franz).
2. In this folder, run:
   ```bash
   git remote add origin https://github.com/mmiri28/franz.git
   git branch -M main
   git push -u origin main
   ```
3. On Netlify: **Add new site → Import an existing project → GitHub**, pick `mmiri28/franz`.
4. Leave the build command empty and the publish directory as `.` (already set in `netlify.toml`), then click **Deploy**.

Every push to `main` will redeploy the site automatically.
