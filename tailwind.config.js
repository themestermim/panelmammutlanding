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
        fontSize: {
            'xs': ['12px', '22px'],
            'sm': ['14px', '24px'],
            'base': ['16px', '28px'],
            'lg': ['18px', '30px'],
            'xl': ['20px', '34px'],
            '2xl': ['24px', '40px'],
            '3xl': ['28px', '46px'],
            '4xl': ['32px', '52px'],
            '5xl': ['36px', '58px'],
            '6xl': ['40px', '66px'],
            '7xl': ['56px', '90px'],
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
            success: {
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
        extend: {
            animation: {
                // start slide 1
                'slide-1-title-start': 'slide_1_title_start 2000ms',
                'slide-1-title-start-lg': 'slide_1_title_start_lg 2000ms',
                // image start
                'slide-1-image-start': 'slide_1_image_start 2000ms',
                'slide-1-image-start-sm': 'slide_1_image_start_sm 2000ms',
                'slide-1-image-start-lg': 'slide_1_image_start_lg 2000ms',
                // shadow
                'slide-1-shadow-start': 'slide_1_shadow_start 2000ms',
                // text right start
                'slide-1-right-text-start': 'slide_1_right_text_start 2000ms',
                'slide-1-right-text-start-sm': 'slide_1_right_text_start_sm 2000ms',
                'slide-1-right-text-start-lg': 'slide_1_right_text_start_lg 2000ms',
                // text right square
                'slide-1-right-square-start': 'slide_1_right_square_start 2000ms',
                // text left start
                'slide-1-left-text-start': 'slide_1_left_text_start 2000ms',
                'slide-1-left-text-start-sm': 'slide_1_left_text_start_sm 2000ms',
                'slide-1-left-text-start-lg': 'slide_1_left_text_start_lg 2000ms',
                // text left square
                'slide-1-left-square-start': 'slide_1_left_square_start 2000ms',
                'slide-1-left-square-start-lg': 'slide_1_left_square_start_lg 2000ms',
                // description
                'slide-1-description-start': 'slide_1_description_start 2000ms',
                'slide-1-description-start-lg': 'slide_1_description_start_lg 2000ms',
                // end slide 1
                'slide-1-title-end': 'slide_1_title_end 2000ms',
                'slide-1-title-end-lg': 'slide_1_title_end_lg 2000ms',
                // image start
                'slide-1-image-end': 'slide_1_image_end 2000ms',
                'slide-1-image-end-sm': 'slide_1_image_end_sm 2000ms',
                'slide-1-image-end-lg': 'slide_1_image_end_lg 2000ms',
                // shadow
                'slide-1-shadow-end': 'slide_1_shadow_end 2000ms',
                // text right start
                'slide-1-right-text-end': 'slide_1_right_text_end 2000ms',
                'slide-1-right-text-end-sm': 'slide_1_right_text_end_sm 2000ms',
                'slide-1-right-text-end-lg': 'slide_1_right_text_end_lg 2000ms',
                // text right square
                'slide-1-right-square-end': 'slide_1_right_square_end 2000ms',
                // text left start
                'slide-1-left-text-end': 'slide_1_left_text_end 2000ms',
                'slide-1-left-text-end-sm': 'slide_1_left_text_end_sm 2000ms',
                'slide-1-left-text-end-lg': 'slide_1_left_text_end_lg 2000ms',
                // text left square
                'slide-1-left-square-end': 'slide_1_left_square_end 2000ms',
                'slide-1-left-square-end-lg': 'slide_1_left_square_end_lg 2000ms',
                // description
                'slide-1-description-end': 'slide_1_description_end 2000ms',
                'slide-1-description-end-lg': 'slide_1_description_end_lg 2000ms',
                // slide 1 finished.


                // start slide 2
                'slide-2-title-start': 'slide_2_title_start 2000ms',
                'slide-2-title-start-lg': 'slide_2_title_start_lg 2000ms',
                // image start
                'slide-2-image-start': 'slide_2_image_start 2000ms',
                'slide-2-image-start-sm': 'slide_2_image_start_sm 2000ms',
                'slide-2-image-start-lg': 'slide_2_image_start_lg 2000ms',
                // shadow
                // 'slide-1-shadow-start': 'slide_1_shadow_start 2000ms',
                // text right start
                'slide-2-right-text-start': 'slide_2_right_text_start 2000ms',
                'slide-2-right-text-start-sm': 'slide_2_right_text_start_sm 2000ms',
                'slide-2-right-text-start-lg': 'slide_2_right_text_start_lg 2000ms',
                // text right square
                'slide-2-right-square-start': 'slide_2_right_square_start 2000ms',
                // text left start
                'slide-2-left-text-start': 'slide_2_left_text_start 2000ms',
                'slide-2-left-text-start-sm': 'slide_2_left_text_start_sm 2000ms',
                'slide-2-left-text-start-lg': 'slide_2_left_text_start_lg 2000ms',
                // text left square
                'slide-2-left-square-start': 'slide_2_left_square_start 2000ms',
                // 'slide-1-left-square-start-lg': 'slide_1_left_square_start_lg 2000ms',
                // description
                'slide-2-description-start': 'slide_2_description_start 2000ms',
                'slide-2-description-start-lg': 'slide_2_description_start_lg 2000ms',
                // end slide 1
                'slide-2-title-end': 'slide_2_title_end 2000ms',
                'slide-2-title-end-lg': 'slide_2_title_end_lg 2000ms',
                // image start
                'slide-2-image-end': 'slide_2_image_end 2000ms',
                'slide-2-image-end-sm': 'slide_2_image_end_sm 2000ms',
                'slide-2-image-end-lg': 'slide_2_image_end_lg 2000ms',
                // shadow
                // 'slide-1-shadow-end': 'slide_1_shadow_end 2000ms',
                // text right start
                'slide-2-right-text-end': 'slide_2_right_text_end 2000ms',
                'slide-2-right-text-end-sm': 'slide_2_right_text_end_sm 2000ms',
                'slide-2-right-text-end-lg': 'slide_2_right_text_end_lg 2000ms',
                // text right square
                'slide-2-right-square-end': 'slide_2_right_square_end 2000ms',
                // text left start
                'slide-2-left-text-end': 'slide_2_left_text_end 2000ms',
                'slide-2-left-text-end-sm': 'slide_2_left_text_end_sm 2000ms',
                'slide-2-left-text-end-lg': 'slide_2_left_text_end_lg 2000ms',
                // text left square
                'slide-2-left-square-end': 'slide_2_left_square_end 2000ms',
                'slide-2-left-square-end-lg': 'slide_2_left_square_end_lg 2000ms',
                // description
                'slide-2-description-end': 'slide_2_description_end 2000ms',
                'slide-2-description-end-lg': 'slide_2_description_end_lg 2000ms',
            },
            keyframes: {
                // start slide 1
                slide_1_title_start: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-100px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                slide_1_title_start_lg: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-150px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                // image
                slide_1_image_start: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-50px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                slide_1_image_start_sm: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-75px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                slide_1_image_start_lg: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-100px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                // image shadow
                slide_1_shadow_start: {
                    '0%': {
                        opacity: '0.5',
                        transform: 'translate(50%, 25px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(50%, 0px)',
                    },
                },
                // text right
                slide_1_right_text_start: {
                    '0%': {
                        opacity: '0.25',
                        transform: 'translate(24px, -16px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                },
                slide_1_right_text_start_sm: {
                    '0%': {
                        opacity: '0.25',
                        transform: 'translate(56px, -32px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                },
                slide_1_right_text_start_lg: {
                    '0%': {
                        opacity: '0.25',
                        transform: 'translate(184px, -120px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                },
                // text right sqaure
                slide_1_right_square_start: {
                    '0%': {
                        transform: 'rotate(135deg)',
                    },
                    '100%': {
                        transform: 'rotate(45deg)',
                    },
                },
                // text left
                slide_1_left_text_start: {
                    '0%': {
                        opacity: '0.25',
                        transform: 'translate(-24px, -16px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                },
                slide_1_left_text_start_sm: {
                    '0%': {
                        opacity: '0.25',
                        transform: 'translate(-56px, -32px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                },
                slide_1_left_text_start_lg: {
                    '0%': {
                        opacity: '0.25',
                        transform: 'translate(-190px, -123px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                },
                // text left square
                slide_1_left_square_start: {
                    '0%': {
                        transform: 'rotate(-60deg)',
                    },
                    '100%': {
                        transform: 'rotate(30deg)',
                    },
                },
                slide_1_left_square_start_lg: {
                    '0%': {
                        transform: 'rotate(-45deg)',
                    },
                    '100%': {
                        transform: 'rotate(45deg)',
                    },
                },
                // description
                slide_1_description_start: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(100px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0px)',
                    },
                },
                slide_1_description_start_lg: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(160px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0px)',
                    },
                },
                // end slide 1
                slide_1_title_end: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(-100px)',
                    },
                },
                slide_1_title_end_lg: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(-150px)',
                    },
                },
                // image
                slide_1_image_end: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(-50px)',
                    },
                },
                slide_1_image_end_sm: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(-75px)',
                    },
                },
                slide_1_image_end_lg: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(-100px)',
                    },
                },
                // image shadow
                slide_1_shadow_end: {
                    '0%': {
                        opacity: '1',
                        transform: 'translate(50%, 0px)',
                    },
                    '100%': {
                        opacity: '0.5',
                        transform: 'translate(50%, 25px)',
                    },
                },
                // text right
                slide_1_right_text_end: {
                    '0%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                    '100%': {
                        opacity: '0.25',
                        transform: 'translate(24px, -16px)',
                    },
                },
                slide_1_right_text_end_sm: {
                    '0%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                    '100%': {
                        opacity: '0.25',
                        transform: 'translate(56px, -32px)',
                    },
                },
                slide_1_right_text_end_lg: {
                    '0%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                    '100%': {
                        opacity: '0.25',
                        transform: 'translate(184px, -120px)',
                    },
                },
                // text right sqaure
                slide_1_right_square_end: {
                    '0%': {
                        transform: 'rotate(45deg)',
                    },
                    '100%': {
                        transform: 'rotate(135deg)',
                    },
                },
                // text left
                slide_1_left_text_end: {
                    '0%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                    '100%': {
                        opacity: '0.25',
                        transform: 'translate(-24px, -16px)',
                    },
                },
                slide_1_left_text_end_sm: {
                    '0%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                    '100%': {
                        opacity: '0.25',
                        transform: 'translate(-56px, -32px)',
                    },
                },
                slide_1_left_text_end_lg: {
                    '0%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                    '100%': {
                        opacity: '0.25',
                        transform: 'translate(-190px, -123px)',
                    },
                },
                // text left square
                slide_1_left_square_end: {
                    '0%': {
                        transform: 'rotate(30deg)',
                    },
                    '100%': {
                        transform: 'rotate(-60deg)',
                    },
                },
                slide_1_left_square_end_lg: {
                    '0%': {
                        transform: 'rotate(45deg)',
                    },
                    '100%': {
                        transform: 'rotate(-45deg)',
                    },
                },
                // description
                slide_1_description_end: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0px)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(100px)',
                    },
                },
                slide_1_description_end_lg: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0px)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(160px)',
                    },
                },
                // slide 1 finished

                // start slide 1
                slide_2_title_start: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(160px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                slide_2_title_start_lg: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(384px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                // image
                slide_2_image_start: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(96px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                slide_2_image_start_sm: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(124px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                slide_2_image_start_lg: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(184px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                // image shadow
                // slide_1_shadow_start: {
                //     '0%': {
                //         opacity: '0.5',
                //         transform: 'translate(50%, 25px)',
                //     },
                //     '100%': {
                //         opacity: '1',
                //         transform: 'translate(50%, 0px)',
                //     },
                // },
                // text right
                slide_2_right_text_start: {
                    '0%': {
                        opacity: '0.25',
                        transform: 'translate(48px, 80px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                },
                slide_2_right_text_start_sm: {
                    '0%': {
                        opacity: '0.25',
                        transform: 'translate(104px, 160px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                },
                slide_2_right_text_start_lg: {
                    '0%': {
                        opacity: '0.25',
                        transform: 'translate(178px, 292px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                },
                // text right sqaure
                slide_2_right_square_start: {
                    '0%': {
                        transform: 'rotate(110deg)',
                    },
                    '100%': {
                        transform: 'rotate(20deg)',
                    },
                },
                // text left
                slide_2_left_text_start: {
                    '0%': {
                        opacity: '0.25',
                        transform: 'translate(-8px, 96px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                },
                slide_2_left_text_start_sm: {
                    '0%': {
                        opacity: '0.25',
                        transform: 'translate(-32px, 128px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                },
                slide_2_left_text_start_lg: {
                    '0%': {
                        opacity: '0.25',
                        transform: 'translate(-227px, 292px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                },
                // text left square
                slide_2_left_square_start: {
                    '0%': {
                        transform: 'rotate(180deg)',
                    },
                    '100%': {
                        transform: 'rotate(45deg)',
                    },
                },
                // slide_1_left_square_start_lg: {
                //     '0%': {
                //         transform: 'rotate(-45deg)',
                //     },
                //     '100%': {
                //         transform: 'rotate(45deg)',
                //     },
                // },
                // description
                slide_2_description_start: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(100px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0px)',
                    },
                },
                slide_2_description_start_lg: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(160px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0px)',
                    },
                },
                // end slide 1
                slide_2_title_end: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(160px)',
                    },
                },
                slide_2_title_end_lg: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(384px)',
                    },
                },
                // image
                slide_2_image_end: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(96px)',
                    },
                },
                slide_2_image_end_sm: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(124px)',
                    },
                },
                slide_2_image_end_lg: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(184px)',
                    },
                },
                // image shadow
                // slide_1_shadow_start: {
                //     '0%': {
                //         opacity: '0.5',
                //         transform: 'translate(50%, 25px)',
                //     },
                //     '100%': {
                //         opacity: '1',
                //         transform: 'translate(50%, 0px)',
                //     },
                // },
                // text right
                slide_2_right_text_end: {
                    '0%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                    '100%': {
                        opacity: '0.25',
                        transform: 'translate(48px, 80px)',
                    },
                },
                slide_2_right_text_end_sm: {
                    '0%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                    '100%': {
                        opacity: '0.25',
                        transform: 'translate(104px, 160px)',
                    },
                },
                slide_2_right_text_end_lg: {
                    '0%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                    '100%': {
                        opacity: '0.25',
                        transform: 'translate(178px, 292px)',
                    },
                },
                // text right sqaure
                slide_2_right_square_end: {
                    '0%': {
                        transform: 'rotate(20deg)',
                    },
                    '100%': {
                        transform: 'rotate(110deg)',
                    },
                },
                // text left
                slide_2_left_text_end: {
                    '0%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                    '100%': {
                        opacity: '0.25',
                        transform: 'translate(-8px, 96px)',
                    },
                },
                slide_2_left_text_end_sm: {
                    '0%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                    '100%': {
                        opacity: '0.25',
                        transform: 'translate(-32px, 128px)',
                    },
                },
                slide_2_left_text_end_lg: {
                    '0%': {
                        opacity: '1',
                        transform: 'translate(0px, 0px)',
                    },
                    '100%': {
                        opacity: '0.25',
                        transform: 'translate(-227px, 292px)',
                    },
                },
                // text left square
                slide_2_left_square_end: {
                    '0%': {
                        transform: 'rotate(45deg)',
                    },
                    '100%': {
                        transform: 'rotate(180deg)',
                    },
                },
                slide_2_left_square_end_lg: {
                    '0%': {
                        transform: 'rotate(45deg)',
                    },
                    '100%': {
                        transform: 'rotate(-45deg)',
                    },
                },
                // description
                slide_2_description_end: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0px)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(100px)',
                    },
                },
                slide_2_description_end_lg: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0px)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(160px)',
                    },
                }
            },
            blur: {
                '4xl': '80px',
                '5xl': '96px',
            },
            spacing: {
                '30': '7.5rem',
                '46': '11.5rem',
                '54': '13.5rem',
                '68': '17rem',
                '76': '19rem',
                '88': '22rem',
                '100': '25rem',
                '108': '27rem',
                '116': '29rem',
                '120': '30rem',
                '136': '34rem',
                '140': '35rem',
                '152': '38rem',
            },
            transitionDuration: {
                '2000': '2000ms',
                '3000': '3000ms',
            },
            transitionTimingFunction: {
                // 'slide': 'cubic-bezier(0.245, 0.695, 0.485, 0.855)',
                'slide': 'cubic-bezier(0.25, 1, 0.25, 1)',
            },
            zIndex: {
                '1': '1',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}

