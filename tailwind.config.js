/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        addiona: {
          // Maroon variations
          50: '#FFF5F5',
          100: '#FFE3E3',
          200: '#FFC7C7',
          300: '#FFA8A8',
          400: '#FF7A7A',
          500: '#FF4D4D',      
          600: '#E63E3E',
          700: '#CC2F2F',
          800: '#B32020',
          900: '#991111',
          DEFAULT: '#800000',   
          950: '#4D0000',
          light: '#A04040',
          dark: '#600000',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 5px #800000, 0 0 10px #800000' },
          '50%': { opacity: '0.7', boxShadow: '0 0 20px #A04040, 0 0 30px #A04040' },
        },
        "float": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': 'spin 20s linear infinite',
        'bounce': {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        'spin-slow': 'spin-slow',
        'bounce': 'bounce 1s infinite',
      },
      animationDelay: {
        '500': '500ms',
        '1000': '1000ms',
        '2000': '2000ms',
        '4000': '4000ms',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      backgroundImage: {
        // Gradient options
        'maroon-gradient': 'linear-gradient(135deg, #800000, #A04040)',
        'maroon-to-dark': 'linear-gradient(to right, #800000, #600000)',
        'maroon-fade': 'linear-gradient(to bottom, rgba(128,0,0,0.9), rgba(128,0,0,0.5))',
        'addiona-radial': 'radial-gradient(circle at top, #800000, #ffffff00)',
        'addiona-diagonal': 'linear-gradient(120deg, #800000 0%, #FFA8A8 100%)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-gradient-maroon': {
          backgroundImage: 'linear-gradient(135deg, #800000, #A04040)',
        },
        '.bg-gradient-maroon-dark': {
          backgroundImage: 'linear-gradient(to right, #800000, #600000)',
        },
        '.bg-gradient-maroon-fade': {
          backgroundImage: 'linear-gradient(to bottom, rgba(128,0,0,0.9), rgba(128,0,0,0.5))',
        },
        '.bg-gradient-addiona-radial': {
          backgroundImage: 'radial-gradient(circle at top, #800000, transparent)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
};