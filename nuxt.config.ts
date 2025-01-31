// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  hooks: {
    "pages:extend"(pages) {
      pages.push(
          {
            name: "Login",
            path: "/login",
            file: "~/pages/login/index.vue",
          },
      );
    },
  },
  srcDir: "./",

    modules: [
        '@pinia/nuxt',
        '@nuxt/image',
        'nuxt-headlessui',
        '@nuxtjs/i18n',
    ],

    ssr: true,

    i18n: {
        vueI18n: './i18n.config.js',
        locales: [
            { code: 'fa', iso: 'fa-IR', name: 'فارسی' }
        ],
        defaultLocale: 'fa',
        strategy: 'no_prefix',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'locale',
            alwaysRedirect: true,
            fallbackLocale: 'fa'
        },
    },

    headlessui: {
        prefix: 'HL'
    },

    runtimeConfig: {
        public: {
            apiBase: 'https://panel.paye1.com/api',
        }
    },

    plugins: []
})
