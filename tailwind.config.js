module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: { extend: {} },
  plugins: [require("@tailwindcss/forms")],
};
