import form from '@tailwindcss/forms'
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "desktop": "1440px"
      },
      colors: {
        "movie-primary": "#FC4747",
        "movie-secondary": "#10141E",                    
        "movie-third": "#5A698F",
        "movie-fourth": "#161D2F",
        "movie-fifth": "#FFFFFF",
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], // Define the Outfit font family
      },
      fontSize: {
        'heading-l': '32px',  // Heading Large (L) - 32px
        'heading-m': '24px',  // Heading Medium (M) - 24px
        'heading-s': '24px',  // Heading Small (S) - 24px (Outfit Medium)
        'heading-xs': '18px', // Heading Extra Small (XS) - 18px (Outfit Medium)
        'body-m': '15px',  // Body Medium (M) - 15px
        'body-s': '13px',  // Body Small (S) - 13px
      },
      fontWeight: {
        light: 300,  // Light weight for Outfit Light          
        medium: 400,  //  Medium weight for Outfit Medium          
        heavy: 500, // Heavy weight for Outfit Heavy
      },
    },
  },
  plugins: [form],
}

