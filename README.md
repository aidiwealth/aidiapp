# Aidi — Nuxt 3 App

This project is the Nuxt 3 conversion of the original single-file HTML
prototype (`aidi_merged.html`), which was itself a merge of three
hand-authored HTML files:

1. **`aidi_v2.html`** — public marketing / landing pages
2. **`aidi_internal_v3.html`** — role gateway, Wealth-Manager flow, Super-Admin flow
3. **`aidi_dashboard.html`** — client (retail investor) flow

The conversion preserves **every original HTML element, CSS rule, and JS
function verbatim**. The Nuxt scaffolding exists only to give backend
developers clean seams — real URLs, a place to wire API calls, and a
conventional project layout. No visual or behavioral changes were
introduced.

## Quick start

```bash
pnpm install           # or npm / yarn
pnpm dev               # dev server on http://localhost:3000
pnpm build && pnpm preview
```

## Routes

Every "page" from the original single-file prototype is now its own
Nuxt route with its own URL. 49 routes in total.

### Public (marketing) — `layouts/landing.vue`

| URL                             | Page                              |
| ------------------------------- | --------------------------------- |
| `/`                             | Home                              |
| `/about`                        | About                             |
| `/pricing`                      | Pricing                           |
| `/careers`                      | Careers                           |
| `/blog`                         | Blog                              |
| `/security`                     | Security                          |
| `/products/stocks`              | Stocks & ETFs                     |
| `/products/crypto`              | Crypto & digital assets           |
| `/products/gold`                | Gold & metals                     |
| `/products/ai`                  | Elia AI advisor                   |
| `/products/treasury`            | Treasury & cash                   |
| `/products/real-estate`         | Real estate                       |
| `/products/private`             | Private markets                   |
| `/products/entity`              | Entity formation                  |
| `/products/portfolio`           | Portfolio management              |
| `/customers/professionals`      | Customers — professionals         |
| `/customers/families`           | Customers — families & legacies   |
| `/customers/founders`           | Customers — founders              |
| `/customers/diaspora`           | Customers — diaspora              |
| `/legal/aml`                    | AML policy                        |
| `/legal/privacy`                | Privacy policy                    |
| `/legal/terms`                  | Terms                             |
| `/legal/regulatory`             | Regulatory                        |

### Auth gateway — `layouts/internal.vue`

| URL                             | Page                              |
| ------------------------------- | --------------------------------- |
| `/login`                        | Account-type gateway              |

### Client flow — `layouts/client.vue`

| URL                             | Page                              |
| ------------------------------- | --------------------------------- |
| `/client/signin`                | Client sign in                    |
| `/client/signup`                | Client sign up                    |
| `/client/onboard/1` – `7`       | Client onboarding steps           |
| `/client/dashboard`             | Client dashboard                  |

### Wealth Manager flow — `layouts/internal.vue`

| URL                             | Page                              |
| ------------------------------- | --------------------------------- |
| `/wealth-manager/signin`        | WM sign in                        |
| `/wealth-manager/signup`        | WM sign up                        |
| `/wealth-manager/onboard/1`–`7` | WM onboarding steps               |
| `/wealth-manager/onboard/success` | WM onboarding complete          |
| `/wealth-manager/dashboard`     | WM dashboard                      |

### Super Admin flow — `layouts/internal.vue`

| URL                             | Page                              |
| ------------------------------- | --------------------------------- |
| `/admin/signin`                 | Super Admin sign in               |
| `/admin/dashboard`              | Super Admin dashboard             |

## Directory layout

```
aidi-app/
├── app.vue                  ─ shell: <NuxtLayout><NuxtPage/></NuxtLayout>
├── nuxt.config.ts           ─ global CSS order, fonts, SSR disabled
├── package.json
├── assets/
│   ├── css/                 ─ exact stylesheets from the original <head>
│   │   ├── 01-v2-landing.css
│   │   ├── 02-internal.css
│   │   ├── 03-dashboard.css
│   │   ├── 04-dashboard-supplement.css
│   │   └── 05-merged-overrides.css
│   └── js/                  ─ dev-only mirrors of /public/js/*.js
├── public/
│   └── js/                  ─ zone JS bundles loaded by layouts at runtime
│       ├── v2-landing-{01..06}.js  (from aidi_v2 inline script tags)
│       ├── internal-01.js          (from aidi_internal_v3 inline script tags)
│       └── dashboard-01.js         (from aidi_dashboard inline script tags)
├── layouts/
│   ├── default.vue          ─ bare passthrough (unused, kept as safety net)
│   ├── landing.vue          ─ wraps every public / marketing route
│   │                          + renders shared chrome (nav, mobile menu, Elia)
│   │                          + injects /js/v2-landing-*.js
│   ├── internal.vue         ─ wraps every role-gateway / WM / SA page
│   │                          + renders zone chrome (modals, overlays)
│   │                          + injects /js/internal-01.js
│   └── client.vue           ─ wraps every client-zone page
│                              + renders zone chrome + injects /js/dashboard-01.js
├── pages/                   ─ 49 route components (see table above)
└── plugins/
    └── aidi-router.client.ts  ─ maps window.showTopLevel(),
                                  goScreen(), showPage(), navigate()
                                  to real URL navigation via navigateTo()
```

## How the conversion works

**CSS** — Every style block from the original head became a file
under `assets/css/`. Load order is preserved (v2 first, then internal,
then dashboard, then merged-build overrides) so the cascade matches the
original 1:1. Inline style tags that lived inside the body of
each zone were appended to the matching zone's CSS file.

**JS** — Every inline script block was extracted into one file per
zone under `public/js/`. The bundles are loaded at runtime by their
respective layout via an injected script tag. This matters because:

1. The original code declares globals (`window.navigate`, `window.showPage`,
   `window.goScreen`, hundreds of others). Running them inside a Vue
   script setup block would scope them to the module — they need to
   be in the global scope so `onclick="navigate('pricing')"` in the
   template still resolves.
2. The bundle contains DOMContentLoaded listeners that expect to find
   the DOM populated. Injecting after onMounted() gives them that DOM.

**HTML** — Each page div from the original became a Nuxt page component.
Each page's markup is rendered verbatim inside a route wrapper div.
No Vue interpolation is used; everything is static HTML the JS bundles
operate on via document.getElementById etc., identical to the original.

**Shared zone chrome** — Modals, overlays, notification drawers, nav,
and mobile menus that sit alongside every page in a zone are rendered
by the layout, not by individual pages. This mirrors how the original
worked: those elements were always in the DOM, just hidden until a page
triggered them.

**Router** — The original defined four toggle-style navigation
functions: `showTopLevel(zone)`, `navigate(id)`, `goScreen(id)`, and
`showPage(id)`. They all toggled CSS classes on a single DOM. In Nuxt,
`plugins/aidi-router.client.ts` redefines each of them to call
`navigateTo(...)`:

| Original call                       | Routes to            |
| ----------------------------------- | -------------------- |
| `showTopLevel('role')`              | `/login`             |
| `showTopLevel('client-signin')`     | `/client/signin`     |
| `navigate('pricing')`               | `/pricing`           |
| `navigate('prod-stocks')`           | `/products/stocks`   |
| `goScreen('screen-wm-signin')`      | `/wealth-manager/signin` |
| `showPage('page-dashboard')`        | `/client/dashboard`  |

Intra-page state changes (tab toggles, modal opens, chart selections)
still go through the original functions unchanged, because those
functions do not call navigation helpers — they operate on DOM state
within the current route.

**Page activation** — The original CSS has `.page { display: none; }`
and `.screen { display: none; }` rules. The original JS added `.active`
to the currently-visible one. Each layout now performs this activation
step on mount and on every route change, so navigating directly to any
URL (e.g. opening `/client/signin` in a new tab) makes the page visible.

## What backend developers need to do next

1. **API calls.** The original JS uses hard-coded dummy data for
   everything (user profile, portfolio holdings, notifications, etc.).
   Search the bundles in `public/js/` for `DUMMY_`, `SAMPLE_`,
   `mock`, and `seed` to find the hooks where real `fetch()` calls
   should replace the static data.

2. **Auth.** The sign-in pages currently accept any input. To add real
   auth, replace the submit handlers inside `public/js/dashboard-01.js`
   (client) and `public/js/internal-01.js` (WM + SA). Gate the
   `/client/*`, `/wealth-manager/*`, and `/admin/*` routes with
   `middleware/auth.ts` once session handling exists.

3. **Server routes.** Add REST or RPC endpoints under `server/api/`.
   Nuxt's server directory is ready to go.

4. **Persistent state.** Vue state libraries (Pinia) or a simple
   useState() composable can replace the in-memory module-scoped
   variables the bundles currently use.

## What we explicitly did NOT do

- Did not rewrite any HTML into Vue components.
- Did not replace any CSS class names or tokens.
- Did not touch any of the original JS logic.
- Did not add features beyond routing wiring.
- Did not remove any features.

If something renders differently from the original `aidi_merged.html`,
it is almost certainly a bug in the conversion — please report it
rather than fixing by rewriting.
