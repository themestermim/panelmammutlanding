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
    ],

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
