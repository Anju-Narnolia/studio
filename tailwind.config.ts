import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Text colors
    'text-blue-700', 'text-red-700', 'text-green-700', 'text-purple-700', 'text-orange-700',
    'text-teal-700', 'text-pink-700', 'text-indigo-700', 'text-gray-700', 'text-emerald-700',
    
    // Background colors
    'bg-blue-50', 'bg-red-50', 'bg-green-50', 'bg-purple-50', 'bg-orange-50',
    'bg-teal-50', 'bg-pink-50', 'bg-indigo-50', 'bg-gray-50', 'bg-emerald-50',
    'bg-blue-100', 'bg-red-100', 'bg-green-100', 'bg-purple-100', 'bg-orange-100',
    'bg-teal-100', 'bg-pink-100', 'bg-indigo-100', 'bg-gray-100', 'bg-emerald-100',
    
    // Border colors
    'border-blue-300', 'border-red-300', 'border-green-300', 'border-purple-300', 'border-orange-300',
    'border-teal-300', 'border-pink-300', 'border-indigo-300', 'border-gray-300', 'border-emerald-300',
    
    // Button colors
    'bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500',
    'bg-teal-500', 'bg-pink-500', 'bg-indigo-500', 'bg-gray-500', 'bg-emerald-500',
    'hover:bg-blue-600', 'hover:bg-red-600', 'hover:bg-green-600', 'hover:bg-purple-600', 'hover:bg-orange-600',
    'hover:bg-teal-600', 'hover:bg-pink-600', 'hover:bg-indigo-600', 'hover:bg-gray-600', 'hover:bg-emerald-600',
    
    // Focus ring colors
    'focus:ring-blue-500', 'focus:ring-red-500', 'focus:ring-green-500', 'focus:ring-purple-500', 'focus:ring-orange-500',
    'focus:ring-teal-500', 'focus:ring-pink-500', 'focus:ring-indigo-500', 'focus:ring-gray-500', 'focus:ring-emerald-500',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        body: ['var(--font-inter)', 'sans-serif'],
        headline: ['var(--font-inter)', 'sans-serif'],
        code: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
