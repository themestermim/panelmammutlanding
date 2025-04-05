/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        fontFamily: {
            'yekanbakhfa': 'yekanbakhFa',
        },
        colors: {
            black: 'rgb(var(--theme-black), <alpha-value>)',
            white: 'rgb(var(--theme-white), <alpha-value>)',
            current: "currentColor",
            transparent: "transparent",
            gray: {
                50: 'rgb(var(--theme-gray-50), <alpha-value>)',
                100: 'rgb(var(--theme-gray-100), <alpha-value>)',
                200: 'rgb(var(--theme-gray-200), <alpha-value>)',
                300: 'rgb(var(--theme-gray-300), <alpha-value>)',
                400: 'rgb(var(--theme-gray-400), <alpha-value>)',
                500: 'rgb(var(--theme-gray-500), <alpha-value>)',
                600: 'rgb(var(--theme-gray-600), <alpha-value>)',
                700: 'rgb(var(--theme-gray-700), <alpha-value>)',
                800: 'rgb(var(--theme-gray-800), <alpha-value>)',
                900: 'rgb(var(--theme-gray-900), <alpha-value>)',
            },
            primary: {
                50: 'rgb(var(--theme-primary-50), <alpha-value>)',
                100: 'rgb(var(--theme-primary-100), <alpha-value>)',
                200: 'rgb(var(--theme-primary-200), <alpha-value>)',
                300: 'rgb(var(--theme-primary-300), <alpha-value>)',
                400: 'rgb(var(--theme-primary-400), <alpha-value>)',
                500: 'rgb(var(--theme-primary-500), <alpha-value>)',
                600: 'rgb(var(--theme-primary-600), <alpha-value>)',
                700: 'rgb(var(--theme-primary-700), <alpha-value>)',
                800: 'rgb(var(--theme-primary-800), <alpha-value>)',
                900: 'rgb(var(--theme-primary-900), <alpha-value>)',
            },
            secondary: {
                50: 'rgb(var(--theme-secondary-50), <alpha-value>)',
                100: 'rgb(var(--theme-secondary-100), <alpha-value>)',
                200: 'rgb(var(--theme-secondary-200), <alpha-value>)',
                300: 'rgb(var(--theme-secondary-300), <alpha-value>)',
                400: 'rgb(var(--theme-secondary-400), <alpha-value>)',
                500: 'rgb(var(--theme-secondary-500), <alpha-value>)',
                600: 'rgb(var(--theme-secondary-600), <alpha-value>)',
                700: 'rgb(var(--theme-secondary-700), <alpha-value>)',
                800: 'rgb(var(--theme-secondary-800), <alpha-value>)',
                900: 'rgb(var(--theme-secondary-900), <alpha-value>)',
            },
            secondary: {
                50: 'rgb(var(--theme-success-50), <alpha-value>)',
                100: 'rgb(var(--theme-success-100), <alpha-value>)',
                200: 'rgb(var(--theme-success-200), <alpha-value>)',
                500: 'rgb(var(--theme-success-500), <alpha-value>)',
            },
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}

