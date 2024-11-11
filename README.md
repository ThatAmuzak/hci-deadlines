[![Deploy to GitHub Pages](https://github.com/ovi-lab/hci-deadlines/actions/workflows/svelte-gh-pages-deploy.yml/badge.svg)](https://github.com/ovi-lab/hci-deadlines/actions/workflows/svelte-gh-pages-deploy.yml)

Website link: https://ovi-lab.github.io/hci-deadlines

This is a based on [hci-deadlines.github.io](https://github.com/hci-deadlines/hci-deadlines.github.io.), but uses the same data source ([conf-database](https://github.com/ovi-lab/conf-database)). See [conf-database](https://github.com/ovi-lab/conf-database).

# Svelete development
## Developing

Once installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
