import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'blackviolet': '#10002b',
                'normalviolet': '#7b2cbf',
                'whiteviolet': '#e0aaff',
                'primary' : "#37854d",
                "secondary" : "#292629",
                "body": "#1f1d21",
              },
              boxShadow: {
                'custom': '-31px -15px 35px -26px rgba(55,133,77,1) inset',
              }
        },
    },


    plugins: [forms],
};
