/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    primary: "var(--primary)",
    accent: "var(--accent)",
    secondary: "var(--secondary)",

    background: "var(--background)",
    foreground: "var(--foreground)",
    card: "var(--card)",
    muted: "var(--muted)",
    border: "var(--border)",
    },
  },
  plugins: [],
}

