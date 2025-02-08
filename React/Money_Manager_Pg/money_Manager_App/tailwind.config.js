/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensures Tailwind scans all your files
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Adding Roboto as a custom font family
      },
    },
  },
  plugins: [],
};
