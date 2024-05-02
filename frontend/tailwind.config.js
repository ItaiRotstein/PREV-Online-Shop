/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "back-drop": "rgba(0, 0, 0, 0.8)",
        "navbar-black": "#1e1e1e",
      },
      fontFamily: {
        "inter": ["Inter"],
        "merriweather": ["Merriweather"]
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }
      };
      addUtilities(newUtilities);
    }
  ],
}

