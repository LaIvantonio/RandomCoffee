/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './utils/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            yellow: {
                DEFAULT: '#FFDD00',
            },
            lemon: {
                DEFAULT: '#FFED00',
            },
            orange: {
                DEFAULT: '#ECB300',
            },
            white: {
                DEFAULT: '#FFFFFF',
            },
            blue: {
                DEFAULT: '#3FB7E1',
            },
            red: {
                DEFAULT: '#E14143',
            },
            gray: {
                DEFAULT: '#B1B1B1',
            },
            black: {
                DEFAULT: '#010103',
            },
        },
        fontFamily: {
            main: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        },
        fontWeight: {
            regular: '400',
            bold: '700',
        },
        backgroundImage: {
            gradient: 'linear-gradient(90deg, #FDC200 0%, #FFED00 50%, #FDC200 100%)',
        },
        borderRadius: {
            x: '1.5rem',
            xl: '2rem',
        },
        boxShadow: {
            default: '0px 0px 100px 10px rgba(0, 0, 0, 0.25);',
            auth: '0px 0px 20px 0px rgba(0, 0, 0, 0.25);',
        },
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
};
