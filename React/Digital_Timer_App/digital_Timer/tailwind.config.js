/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}", // Adjust these paths to match your project structure
];
export const theme = {
  extend: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"], // Adds Roboto as 'roboto'
      sans: ["Roboto", ...require("tailwindcss/defaultTheme").fontFamily.sans], // Sets Roboto as default sans-serif
    },
  },
};
export const plugins = [];
