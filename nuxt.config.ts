// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  // Global CSS — these are the exact stylesheets from the original
  // aidi_merged.html, sliced apart by their source file. Load order is
  // identical to the original file's <head> so cascade behavior matches.
  css: [
    '~/assets/css/01-v2-landing.css',
    '~/assets/css/02-internal.css',
    '~/assets/css/03-dashboard.css',
    '~/assets/css/04-dashboard-supplement.css',
    '~/assets/css/05-merged-overrides.css',
  ],

  app: {
    head: {
      title: 'Aidi — Your AI Investment Office',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Instrument+Sans:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap'
        }
      ]
    },

    // Disable built-in page/layout transitions so CSS animations from the
    // source files aren't wrapped in extra fade behavior.
    pageTransition: false,
    layoutTransition: false
  },

  // The original file uses a lot of window.* globals and raw DOM manipulation
  // (document.getElementById, direct event listeners). Rendering purely on
  // the client matches the original single-file experience 1:1 and avoids
  // SSR-hydration issues with unvalidated markup inside the extracted HTML.
  ssr: false,
})
