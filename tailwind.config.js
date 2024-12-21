/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green1: "#115E56",
        green2: "#134E48",
        green3: "#CCFBEF",
        border1: "#DCDFE4",
        success:"#198754",
        danger: "#dc3545",
        gray1: "#667085",
        gray2: "#DCDFE4",
      },
      fontFamily: {
        inter: ['"Inter"', 'serif'],
      },
      spacing: {
        tablePadding: "1rem",
      }
    },
  },
  plugins: [],
};
