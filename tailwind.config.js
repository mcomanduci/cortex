/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-2": "#24417C",
        "primary-1": "#2D63D2",
        "bg-1": "#F7FAFD",
      },
      spacing: {
        site: "90rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans"],
        roboto: ["Roboto", "sans"],
      },
    },
  },
  plugins: [],
};
