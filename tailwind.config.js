/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["var(--font-avenir-medium)"],
        beaufort: ["var(--font-beaufort-bold)"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        "custom-dark": {
          primary: "oklch(51% 0.222 16.935)",
          "primary-content": "oklch(96% 0.018 272.314)",
          secondary: "oklch(65% 0.241 354.308)",
          "secondary-content": "oklch(43% 0.218 303.724)",
          accent: "oklch(77% 0.152 181.912)",
          "accent-content": "oklch(38% 0.063 188.416)",
          neutral: "oklch(14% 0.005 285.823)",
          "neutral-content": "oklch(92% 0.004 286.32)",
          "base-100": "oklch(25.33% 0.016 252.42)",
          "base-200": "oklch(23.26% 0.014 253.1)",
          "base-300": "oklch(21.15% 0.012 254.09)",
          "base-content": "oklch(97.807% 0.029 256.847)",
          info: "oklch(74% 0.16 232.661)",
          "info-content": "oklch(29% 0.066 243.157)",
          success: "oklch(76% 0.177 163.223)",
          "success-content": "oklch(37% 0.077 168.94)",
          warning: "oklch(82% 0.189 84.429)",
          "warning-content": "oklch(41% 0.112 45.904)",
          error: "oklch(71% 0.194 13.428)",
          "error-content": "oklch(27% 0.105 12.094)",
        },
      },
    ],
    darkTheme: "custom-dark",
  },
};
