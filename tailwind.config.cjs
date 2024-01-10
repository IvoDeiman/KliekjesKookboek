/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            'primary': '#E4A428',
            'secondary': '#1E1E1E',
            'header-2': '#1D1D1D',
            'danger': '#E33940',
            'gray-30': '#D6D6D64D',
            'gray-20': '#D6D6D633',
            'body': '#444444',
            'body-50': '#44444480',
            'blue': '#1fb6ff',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
            'black': '#000000',
            'black-30': '#0000004D',
            'black-20': '#00000033',
            'white': '#FFFFFF'
        },
        fontFamily: {
            sans: ['Work', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}