/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  theme: {
    extend: {
      colors: {
        card: "#1B1B1B",
        text: "#999999",
        yel: "#FFFF57",
        body: "#222222",
        border: "#CCCCCC",
      },
      borderRadius: { 20: "20px" },
      maxWidth: {
        app: "960px",
      },
    },
  },
  plugins: [],
};
