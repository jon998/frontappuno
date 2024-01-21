import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Source Serif Pro', 'Georgia', 'serif'],
        body: ['Synonym', 'system-ui', 'sans-serif'],
      },
      colors: {
        nav: "#323D42",
        page: "#293331",
        card: "#43A896",
        button:"#43A896",
        "button-hover": "#354240",
        "card-hover": "#46756D",
        "default-text": "#2CDBBB",
        "blue-accent": "#3b82f6",
        "blue-accent-hover": "#2563eb", 
      }
    },
  },
  plugins: [],
}
export default config
