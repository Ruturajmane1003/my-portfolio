/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0B0F19',
        'bg-secondary': '#111827',
        'accent-primary': '#6366F1',
        'accent-gradient-start': '#6366F1',
        'accent-gradient-end': '#8B5CF6',
        'highlight': '#22D3EE',
        'text-primary': '#F9FAFB',
        'text-secondary': '#9CA3AF',
      },
    },
  },
  plugins: [],
}
