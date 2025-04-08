/* eslint-disable @typescript-eslint/no-require-imports */
import type {Config} from 'tailwindcss';

export default {
  darkMode: 'class', // 다크모드를 클래스 기반으로 설정
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
    fontFamily: {
      nanumround: ['NanumSquareRound'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
