# Stuff I like

A personal favorites shelf built with Svelte 5, TypeScript, and Vite. Responsive cards, category filters, live search, alphabetical sorting, and a GitHub Pages workflow are included.

## Run locally

```sh
npm install
npm run dev
```

## Make it yours

Edit `src/lib/favorites.ts`: update the profile title and intro, replace the sample favorites, and set `isDemo` to `false`. Categories are generated from the entries. Each item has a title, category, creator, note, year, art style, decorative glyph, and optional external URL (use an empty string for no link).

Available art styles: `prince`, `rainbows`, `spirited`, `stardew`, `morning`, and `budapest`. These are original CSS illustrations, not official covers. Customize styles in `src/app.css` or add your own styles. No account or backend is needed. Google Fonts is used with local serif/sans-serif fallbacks.

## Check and build

```sh
npm run check
npm run build
npm run preview
```

The static site is generated in `dist/`. Vite uses relative asset paths so it works at a GitHub Pages repository path or a root domain. Keep navigation on this single page; adding history-based routes would require further routing configuration.

## Publish to GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch. If your default branch has another name, update `.github/workflows/deploy.yml`.
2. Open the repository's **Settings → Pages** and choose **GitHub Actions** as the build source.
3. Run **Deploy to GitHub Pages** from the Actions tab, or push another commit to `main`.
4. The completed deployment displays the site URL in the workflow's `github-pages` environment.

The workflow installs from the lockfile, checks Svelte and TypeScript, builds, and publishes `dist/`. See the [Vite deployment guide](https://vite.dev/guide/static-deploy.html#github-pages).
