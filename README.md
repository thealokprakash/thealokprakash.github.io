# Alok Prakash – portfolio

Multi-page static site for GitHub Pages. No build step, no Jekyll, no dependencies.

## Pages

| File | Content |
| --- | --- |
| `index.html` | Home: hero, focus areas, selected publication, experience summary |
| `about.html` | Background and education |
| `research.html` | Research directions |
| `publications.html` | Publications |
| `projects.html` | Projects |
| `experience.html` | Work history, advisory roles, tools and methods |
| `404.html` | Not-found page |
| `style.css` | All styling. Colours are the variables at the top (dark in `:root`, light in `html[data-theme="light"]`) |
| `script.js` | Theme toggle, mobile menu, scroll reveal, CV link |

## Publish

1. In the repository `thealokprakash.github.io`, delete the old files, then copy the contents of this folder to the repository root (not the enclosing folder).
2. Settings → Pages → Deploy from a branch → `main` and `/ (root)`.
3. The site is live at https://thealokprakash.github.io within a minute or two.

## Add your CV

Put the PDF at `assets/cv.pdf`. The "CV" link in the menu and the "Download CV" button on the home page appear automatically once the file exists, so there is never a broken link.

## Theme

Dark is the default. The button in the menu cycles Dark, Light and Auto (follows the device setting), and the choice is remembered.

## Editing

The menu and footer are the same on every page. If you change a link or label in one, change it in all six pages.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.
