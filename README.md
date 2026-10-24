# Nikhil Joglekar — Professional Authority Website

A production-oriented, lightweight editorial website made with **Astro**. Five pages: Home, About, Insights (Markdown articles), Resources, Contact. Responsive, GitHub-friendly, and deployable to Cloudflare Pages for no hosting charge within the free tier.

## Start here — customization checklist

1. Open `src/config/site.js`. Set `url` to the real domain (`https://yourdomain.com`), and fill in the public `linkedin` and `email` fields. Until filled, contact links are deliberately placeholders.
2. Replace the SVG monogram with a headshot if desired, and review About text for accuracy. Update titles, positioning and legal disclaimer as appropriate.
3. Update the domain in `public/robots.txt` to match `site.url`. Astro's sitemap integration then generates `/sitemap-index.xml` automatically at build time.
4. Review article drafts in `src/content/insights/`. These are intentionally **not published**. Do not switch their `draft` flag until you write and fact-check actual articles.
5. Change any content you don't want public before pushing the repository.

## Run locally

Install [Node.js](https://nodejs.org/) version 20.3+ (Node 22 LTS recommended), then run in the project folder:

```bash
npm install
npm run dev
```

Open the local address that Astro prints (typically `http://localhost:4321`). To make a production build, run:

```bash
npm run build
npm run preview
```

Astro outputs static assets in `dist/`.

## Publish via GitHub and Cloudflare Pages

1. Create a free GitHub repository (e.g. `nikhil-personal-website`). **Do not upload the `node_modules` folder**. The included `.gitignore` skips it.
2. Upload the project files to the **root** of the repository and commit to `main`. You can use GitHub's **Add file → Upload files** option; select the unzipped project contents, not the outer directory.
3. Create a Cloudflare account. Navigate to **Workers & Pages → Create application → Pages → Import an existing Git repository**. Authorize GitHub and choose the repository.
4. Set **Framework preset** to Astro if shown, **Build command** to `npm run build`, **Build output directory** to `dist`, **Root directory** to `/` (or leave default), **Production branch** to `main`.
5. If the build environment requests a Node version, set environment variable `NODE_VERSION` to `22` in Cloudflare Pages settings, then redeploy.
6. Deploy. Check your temporary `*.pages.dev` URL.
7. To attach a domain, go to the project's **Custom domains** panel and follow the DNS instructions. Afterward, set `site.url` and `public/robots.txt` to that domain, commit, and let Cloudflare rebuild.
8. Every future push to `main` triggers a rebuild and deployment automatically.

Cloudflare official guide: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/

## Publishing an article

1. Copy a `.md` file in `src/content/insights/` and name it with a simple kebab-case slug (e.g. `privacy-by-design.md`).
2. Edit title, description, category, date, reading time and body. Supported category values are **Privacy & Data Protection**, **AI Governance**, and **Privacy in Practice**.
3. Set `draft: false` only when the article is ready, accurate, and reviewed. Draft articles don't appear in the list, homepage or deployed routes.
4. Commit the file. Cloudflare deploys it automatically.

Each article has its own permanent route at `/insights/<filename>/`. The Insights page filters published content by category. No CMS, database or subscription required.

## Pages and settings

| Item | File |
| --- | --- |
| Global brand and links | `src/config/site.js` |
| Fonts, colors and responsive design | `src/styles/global.css` |
| Navigation, footer, SEO and social metadata | `src/layouts/Base.astro` |
| Home | `src/pages/index.astro` |
| About | `src/pages/about.astro` |
| Insights directory | `src/pages/insights/index.astro` |
| Article pages | `src/pages/insights/[slug].astro` |
| Markdown articles | `src/content/insights/*.md` |
| Resources | `src/pages/resources.astro` |
| Contact | `src/pages/contact.astro` |

## SEO, accessibility and privacy

- Each page has semantic structure, canonical URLs, Open Graph tags and a social preview card.
- Astro's sitemap integration outputs sitemap files; update the production domain first.
- No analytics, tracking scripts, cookies, or contact-form processing are added by default. Google Fonts are externally loaded: self-host fonts if you need to avoid requests to Google.
- Keyboard navigation, skip link, mobile navigation labels, visible focus states and reduced-motion preference are included.
- `public/_headers` sets basic security headers when hosted on Cloudflare Pages.
- All site articles and resources should be reviewed to ensure professional accuracy and compliance with any applicable confidentiality / employer obligations.

## Things intentionally left as placeholders

- Public email, LinkedIn URL, production domain
- A personal headshot (abstract editorial artwork is shown instead)
- Fully written articles and downloadable resources
- Any claims requiring further confirmation about employers, clients or achievements

No testimonials, nonexistent credentials, client names or invented services are published.
