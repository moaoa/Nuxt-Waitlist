// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    "@nuxt/ui",
    "@nuxthub/core",
    "nuxt-security",
    "@nuxt/fonts",
    "@nuxt/image",
  ],
  security: {
    headers: {
      contentSecurityPolicy: {
        "img-src": ["'self'", "data:", "https:"],
      },
    },
  },
  ui: {
  },
  colorMode: {
    preference: "light",
  },
  routeRules: {
    "/api/join-waitlist": {
      security: {
        rateLimiter: {
          tokensPerInterval: 25,
        },
      },
    },
  },

  hub: {
    database: true,
  },
});
