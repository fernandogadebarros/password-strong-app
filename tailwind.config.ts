import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          lightest: '#E6E5EA',
          light: '#817D92',
          dark: '#24232C',
          darkest: '#18171F',
        },
        green: {
          light: '#A4FFAF',
        },
        orange: {
          light: '#FB7C58',
        },
        yellow: {
          light: '#F8CD65',
        },
        red: {
          light: '#F64A4A',
        },
      },
    },
  },

  plugins: [require('@tailwindcss/custom-forms')],
};
export default config;
