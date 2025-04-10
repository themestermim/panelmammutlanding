// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-01-31',
    devtools: { enabled: true },
    css: ['~/assets/scss/main.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    app: {
        baseURL: '/',
    },

    // hooks: {
    //   "pages:extend"(pages) {
    //     pages.push(
    //         {
    //           name: "Login",
    //           path: "/login",
    //           file: "~/pages/login/index.vue",
    //         },
    //     );
    //   },
    // },
    srcDir: "./",

    modules: [
        '@pinia/nuxt',
        '@nuxt/image',
        'nuxt-headlessui',
        // '@nuxtjs/i18n',
        'nuxt-swiper',
    ],

    ssr: true,

    // i18n: {
    //     vueI18n: './i18n.config.js',
    //     locales: [
    //         { code: 'fa', iso: 'fa-IR', name: 'فارسی' }
    //     ],
    //     defaultLocale: 'fa',
    //     strategy: 'no_prefix',
    //     detectBrowserLanguage: {
    //         useCookie: true,
    //         cookieKey: 'locale',
    //         alwaysRedirect: true,
    //         fallbackLocale: 'fa'
    //     },
    // },

    headlessui: {
        prefix: 'HL'
    },

    runtimeConfig: {
        // public: {
        //     apiBase: 'https://panel.paye1.com/api',
        // }
        private: {
            gmailAppPassword: "hang hyog tlwe zhwx",
            gmailMailTo: "themestermim@gmail.com",
        }
    },

    plugins: [
        {src: './plugins/vue3-toastify.ts'},
    ],
})
