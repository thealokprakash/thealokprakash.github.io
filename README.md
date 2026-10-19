# Alok Prakash — Academic & Engineering Portfolio

A Jekyll-based GitHub Pages portfolio adapted to Alok Prakash's research and engineering background.

## Publish on GitHub Pages

1. Create or open the repository named `thealokprakash.github.io` under the GitHub account `thealokprakash`.
2. Upload the contents of this folder to the repository root (not the enclosing ZIP folder).
3. In **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`, and save.
4. GitHub Pages will build the Jekyll site and publish it at `https://thealokprakash.github.io`.

## Before publishing

- Add your own profile photo as `assets/profile.jpg`. Until then, the page shows the `AP` fallback.
- Add a PDF CV under `assets/` and add a link to it if you want a downloadable CV.
- Check publication metadata, role titles, dates, and project descriptions against your latest CV.
- This site is based on Jekyll and the supplied template's layout/style assets. It does not include the original owner's personal photos, CVs, posts, or tutorials.

## Local preview

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000` in your browser.
