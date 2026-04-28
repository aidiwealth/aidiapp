// plugins/aidi-router.client.ts
//
// The original merged HTML used a function window.showTopLevel(zone) plus a
// body class system to flip between landing / role / client / WM / SA.
// In Nuxt each of those is a real route, so this plugin replaces that
// function with one that calls navigateTo(...) instead.
//
// It also intercepts the goScreen() and showPage() monkey-patches that
// lived in the original's inline router block so WM logout / dashboard
// logout continue to work and land on the correct URL.

export default defineNuxtPlugin(() => {
  if (process.server) return

  const routes: Record<string, string> = {
    'landing':        '/',
    'role':           '/login',
    'client-signin':  '/client/signin',
    'wm-signin':      '/wealth-manager/signin',
    'sa-signin':      '/admin/signin',
    'wm-dashboard':   '/wealth-manager/dashboard',
    'sa-dashboard':   '/admin/dashboard',
  }

  // Top-level zone router — replaces the one in the original file.
  // onclick="showTopLevel('role')" still works after this runs.
  ;(window as any).showTopLevel = (zone: string) => {
    const target = routes[zone]
    if (target) {
      return navigateTo(target)
    }
    console.warn('[aidi] showTopLevel: unknown zone', zone)
  }

  // ════════════════════════════════════════════════════════════════════
  // Sign-in handler stubs — installed early so clicks work before the
  // zone JS bundle has finished downloading.
  //
  // The signin pages have inline onclick="showDashboard()" / onclick=
  // "wmHandleMagicLink()" etc. These functions live in dashboard-01.js
  // and internal-01.js, which the layout loads asynchronously on mount.
  // If the user clicks the sign-in button before that script arrives,
  // window.showDashboard is undefined and the click is a silent no-op
  // — symptom: button does nothing on first click; only works after a
  // page refresh (when the script has time to load before any click).
  //
  // We pre-install minimal stubs here that call navigateTo() directly
  // and validate the email field. When the zone bundle eventually loads,
  // its `function showDashboard() {}` declaration overwrites our stub
  // — but by then the user has already navigated, so it doesn't matter.
  // ════════════════════════════════════════════════════════════════════
  const w = window as any

  // Client zone
  w.showDashboard = () => navigateTo('/client/dashboard')
  w.handleMagicLink = () => {
    const inp = document.getElementById('signin-email') as HTMLInputElement | null
    if (inp && !inp.value.trim()) {
      inp.style.borderColor = 'var(--red)'
      inp.focus()
      return
    }
    if (inp) inp.style.borderColor = ''
    return navigateTo('/client/dashboard')
  }

  // Internal zone — WM
  w.wmHandleMagicLink = () => {
    document.querySelectorAll('.int-auth-page').forEach((p) => {
      ;(p as HTMLElement).style.display = 'none'
    })
    return navigateTo('/wealth-manager/dashboard')
  }

  // Internal zone — SA
  w.saHandleMagicLink = () => {
    document.querySelectorAll('.int-auth-page').forEach((p) => {
      ;(p as HTMLElement).style.display = 'none'
    })
    return navigateTo('/admin/dashboard')
  }

  // ════════════════════════════════════════════════════════════════════
  // navigate() — unified landing-zone router
  // The original v2 bundle defines a window.navigate(id) that toggles
  // .page.active within a single DOM. Now each landing page is its own
  // route, so navigate(id) should produce a real URL change.
  //
  //   - On non-landing routes: v2 bundle hasn't loaded, so we install a
  //     stub that calls navigateTo(...).
  //   - On landing routes: the bundle loads and overwrites our stub.
  //     We immediately re-wrap it so navigate() still calls navigateTo().
  //     The original is preserved and invoked AFTER navigation for side
  //     effects (scroll-to-top, reveal observer re-init, etc.).
  //
  // Id → URL map generated from split-landing.py ROUTE_MAP.
  // ════════════════════════════════════════════════════════════════════
  const NAV_ROUTES: Record<string, string> = {
  "home": "/",
  "about": "/about",
  "pricing": "/pricing",
  "careers": "/careers",
  "blog": "/blog",
  "security": "/security",
  "aml": "/legal/aml",
  "privacy": "/legal/privacy",
  "terms": "/legal/terms",
  "regulatory": "/legal/regulatory",
  "prod-stocks": "/products/stocks",
  "prod-crypto": "/products/crypto",
  "prod-gold": "/products/gold",
  "prod-ai": "/products/ai",
  "prod-treasury": "/products/treasury",
  "prod-realestate": "/products/real-estate",
  "prod-private": "/products/private",
  "prod-entity": "/products/entity",
  "prod-portfolio": "/products/portfolio",
  "cust-professionals": "/customers/professionals",
  "cust-families": "/customers/families",
  "cust-founders": "/customers/founders",
  "cust-diaspora": "/customers/diaspora"
} as const

  const installNavigate = () => {
    const w = window as any
    const orig = w.navigate
    w.navigate = (id: string) => {
      const target = NAV_ROUTES[id] || '/'
      // If already on the target route, delegate to the original for any
      // in-page effects (e.g., scroll to top, re-run reveal observers).
      if (window.location.pathname === target) {
        if (typeof orig === 'function') return orig(id)
        return
      }
      return navigateTo(target)
    }
    ;(w.navigate as any).__aidiWrapped = true
    return true
  }

  // Install immediately (stub for non-landing routes).
  installNavigate()

  // Watch for the landing bundle loading and overwriting navigate — if
  // that happens, re-wrap to keep URL-based routing working.
  const watchForBundleLoad = () => {
    const w = window as any
    if (!w.navigate || !(w.navigate as any).__aidiWrapped) {
      // Bundle overwrote our wrapper — re-wrap around its implementation.
      installNavigate()
    }
  }
  document.addEventListener('aidi:landing:ready', watchForBundleLoad)
  // Fallback: also poll briefly in case the event dispatch fails.
  let polls = 0
  const pollInt = setInterval(() => {
    watchForBundleLoad()
    if (++polls > 30) clearInterval(pollInt)
  }, 100)

  // When internal's goScreen() is invoked (e.g. on logout back to the role
  // gateway), route to the real URL so the URL bar reflects state.
  const hookGoScreen = () => {
    const w = window as any
    if (typeof w.goScreen !== 'function') return false
    const orig = w.goScreen
    const screenToRoute: Record<string, string> = {
      'screen-role':         '/login',
      'screen-wm-signin':    '/wealth-manager/signin',
      'screen-wm-signup':    '/wealth-manager/signup',
      'screen-sa-signin':    '/admin/signin',
      'screen-wm':           '/wealth-manager/dashboard',
      'screen-admin':        '/admin/dashboard',
      'wm-onboard-1':        '/wealth-manager/onboard/1',
      'wm-onboard-2':        '/wealth-manager/onboard/2',
      'wm-onboard-3':        '/wealth-manager/onboard/3',
      'wm-onboard-4':        '/wealth-manager/onboard/4',
      'wm-onboard-5':        '/wealth-manager/onboard/5',
      'wm-onboard-6':        '/wealth-manager/onboard/6',
      'wm-onboard-7':        '/wealth-manager/onboard/7',
      'wm-onboard-success':  '/wealth-manager/onboard/success',
    }
    w.goScreen = function (id: string) {
      const route = screenToRoute[id]
      if (route && window.location.pathname !== route) {
        navigateTo(route)
        return
      }
      // Same-zone transitions fall through to the original implementation
      return orig.apply(this, arguments as any)
    }
    return true
  }

  // Same pattern for showPage() in the client zone.
  const hookShowPage = () => {
    const w = window as any
    if (typeof w.showPage !== 'function') return false
    const orig = w.showPage
    const pageToRoute: Record<string, string> = {
      'page-signin':     '/client/signin',
      'page-signup':     '/client/signup',
      'page-onboard-1':  '/client/onboard/1',
      'page-onboard-2':  '/client/onboard/2',
      'page-onboard-3':  '/client/onboard/3',
      'page-onboard-4':  '/client/onboard/4',
      'page-onboard-5':  '/client/onboard/5',
      'page-onboard-6':  '/client/onboard/6',
      'page-onboard-7':  '/client/onboard/7',
      'page-dashboard':  '/client/dashboard',
    }
    w.showPage = function (id: string) {
      const route = pageToRoute[id]
      if (route && window.location.pathname !== route) {
        navigateTo(route)
        return
      }
      return orig.apply(this, arguments as any)
    }
    return true
  }

  // Poll briefly until the zone bundle has defined its router functions.
  // Both hooks must be attempted independently on each poll — using `&&`
  // would short-circuit and skip hookShowPage whenever goScreen is not
  // yet (or never) defined, which is exactly the case on client-only
  // routes where the internal bundle is never loaded. Track readiness
  // with a flag per hook so we stop polling each as soon as it succeeds.
  let goScreenHooked = false
  let showPageHooked = false
  const hookWhenReady = (tries = 0) => {
    if (!goScreenHooked) goScreenHooked = hookGoScreen()
    if (!showPageHooked) showPageHooked = hookShowPage()
    if ((goScreenHooked && showPageHooked) || tries > 40) return
    setTimeout(() => hookWhenReady(tries + 1), 100)
  }
  hookWhenReady()
})
