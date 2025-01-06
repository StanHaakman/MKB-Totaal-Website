/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontSize: {
            xs: ['0.75rem', {lineHeight: '1rem'}],
            sm: ['0.875rem', {lineHeight: '1.5rem'}],
            base: ['1rem', {lineHeight: '1.75rem'}],
            lg: ['1.125rem', {lineHeight: '1.75rem'}],
            xl: ['1.25rem', {lineHeight: '2rem'}],
            '2xl': ['1.5rem', {lineHeight: '2.25rem'}],
            '3xl': ['1.75rem', {lineHeight: '2.25rem'}],
            '4xl': ['2rem', {lineHeight: '2.5rem'}],
            '5xl': ['2.5rem', {lineHeight: '3rem'}],
            '6xl': ['3rem', {lineHeight: '3.5rem'}],
            '7xl': ['4rem', {lineHeight: '4.5rem'}],
        },
        extend: {
            borderRadius: {
                '4xl': '2.5rem',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                display: [
                    ['Poppins', 'sans-serif'],
                    {fontVariationSettings: '"wdth" 125'},
                ],
            },
            colors: {
                // Green
                // primary: '#1E4E46', // Primaire kleur
                // 'primary-light': '#3B6F62', // Lichtere variant
                
                // Blue
                primary: "#264ba6",
                'primary-light': "#4D7BCC",
            },
        },
    },
    plugins: [],
};
