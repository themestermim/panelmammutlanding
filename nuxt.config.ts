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
        head: {
            link: [
                { rel: 'icon', type: 'image/svg+xml', sizes: '96x96', href: '/assets/favicon/favicon.svg' },
                { rel: 'icon', type: 'image/svg+xml', href: '/assets/favicon/favicon.svg' },
                { rel: 'shortcut icon', href: '/assets/favicon/favicon.svg' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicon/favicon.svg' },
            ],
        },
    },

    srcDir: "./",

    modules: [
        '@pinia/nuxt',
        '@nuxt/image',
        'nuxt-headlessui',
        'nuxt-swiper',
        '@nuxtjs/device',
    ],

    ssr: true,

    headlessui: {
        prefix: 'HL'
    },

    runtimeConfig: {
        public: {
            apiBase: 'https://panelmammut.co/api',
        },
        private: {
            gmailAppPassword: "hang hyog tlwe zhwx",
            gmailMailTo: "themestermim@gmail.com",
        }
    },

    plugins: [
        {src: './plugins/vue3-toastify.ts'},
    ],
})
