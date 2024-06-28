/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {
                l: '425px',
                m: '375px',
                s: '320px',
            },
            colors: {
                text: 'var(--text)',
                'bg-primary': 'var(--bg-primary)',
                'bg-secondary': 'var(--bg-secondary)',
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                accent: 'var(--accent)',
            },
            padding: {
                custom: 'clamp(3rem, 0.4286rem + 8.0357vw, 12rem)',
            },
            backgroundImage: {
                map: "url('./assets/images/map.svg')",
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.fit-content': {
                    width: 'fit-content',
                    height: 'fit-content',
                },
            }
            addUtilities(newUtilities, ['responsive', 'hover'])
        },
    ],
}
