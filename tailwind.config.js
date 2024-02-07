/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      body: "Work Sans",
    },
    screens: {
      "4xsm": "280px",
      "3xsm": "320px",
      "2xsm": "376px",
      xsm: "405px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1920px",
    },
    extend: {
      content: {
        about: 'url("/assets/outline-text/about.svg")',
        skills: 'url("/assets/outline-text/skills.png")',
        portfolio: 'url("/assets/outline-text/portfolio.svg")',
        blogs: 'url("/assets/outline-text/blogs.png")',
        services: 'url("/assets/outline-text/services.svg")',
        testimonials: 'url("/assets/outline-text/testimonials.svg")',
        contact: 'url("/assets/outline-text/contact.svg")',
      },
      colors: {
        primary: "#00040f",
        "primary-2": "#2A303C",
        secondary: "#00f6ff",
        "secondary-2": "#0F172A",
        "secondary-3": "#0B1221",
        tertiary: "#1A1C28",

        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        paragraph: "#878e99",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          padding: "0px 1rem",
          "@screen xsm": {
            maxWidth: "auto",
            margin: "0px auto",
          },
          "@screen sm": {
            maxWidth: "462px",
            margin: "0px auto",
          },
          "@screen md": {
            maxWidth: "750px",
            margin: "0px auto",
            padding: "0px auto",
          },
          "@screen lg": {
            maxWidth: "970px",
            margin: "0px auto",
          },
          "@screen xl": {
            maxWidth: "1170px",
            margin: "0px auto",
          },

          "@screen 2xl": {
            maxWidth: "1250px",
            margin: "0px auto",
          },

          "@screen 3xl": {
            maxWidth: "1570px",
            margin: "0px auto",
          },
        },
        ".container-none": {
          padding: "0px 0px",
          maxWidth: "100%",
        },
      });
    },
  ],
};
