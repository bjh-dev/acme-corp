/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        fontWeights: {
            light: 200,
            normal: 400,
            bold: 700,
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-montserrat)', ...fontFamily.sans],
                serif: ['var(--font-lora)', ...fontFamily.serif],
            },
            colors: {
                primary: {
                    DEFAULT: '#28a0aa',
                    50: '#f4fafb',
                    100: '#eaf6f7',
                    200: '#c9e7ea',
                    300: '#a9d9dd',
                    400: '#69bdc4',
                    500: '#28a0aa',
                    600: '#249099',
                    700: '#1e7880',
                    800: '#186066',
                    900: '#144e53',
                },
                'lime-zest': {
                    DEFAULT: '#c8e069',
                    50: '#fcfdf8',
                    100: '#fafcf0',
                    200: '#f1f7da',
                    300: '#e9f3c3',
                    400: '#d9e996',
                    500: '#c8e069',
                    600: '#b4ca5f',
                    700: '#96a84f',
                    800: '#78863f',
                    900: '#626e33',
                },
                brandy: {
                    DEFAULT: '#ce8831',
                    50: '#fdf9f5',
                    100: '#faf3ea',
                    200: '#f3e1cc',
                    300: '#ebcfad',
                    400: '#ddac6f',
                    500: '#ce8831',
                    600: '#b97a2c',
                    700: '#9b6625',
                    800: '#7c521d',
                    900: '#654318',
                },
                mandy: {
                    DEFAULT: '#ef5865',
                    50: '#fef7f7',
                    100: '#fdeef0',
                    200: '#fbd5d9',
                    300: '#f9bcc1',
                    400: '#f48a93',
                    500: '#ef5865',
                    600: '#d74f5b',
                    700: '#b3424c',
                    800: '#8f353d',
                    900: '#752b31',
                },
                plum: {
                    DEFAULT: '#844f6f',
                    50: '#f9f6f8',
                    100: '#f3edf1',
                    200: '#e0d3db',
                    300: '#ceb9c5',
                    400: '#a9849a',
                    500: '#844f6f',
                    600: '#774764',
                    700: '#633b53',
                    800: '#4f2f43',
                    900: '#412736',
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
