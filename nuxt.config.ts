// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxthub/core",
    "nuxt-security",
    "@nuxt/fonts",
    "@nuxt/ui",
    "@nuxt/image",
  ],
  security: {
    headers: {
      contentSecurityPolicy: {
        "img-src": ["'self'", "data:", "https://i.ytimg.com"],
      },
    },
  },
  ui: {
    primary: "emerald",
  },
  colorMode: {
    preference: "light",
  },
  routeRules: {
    "/api/join-waitlist": {
      security: {
        rateLimiter: {
          tokensPerInterval: 1,
        },
      },
    },
  },

  hub: {
    database: true,
  },
});
