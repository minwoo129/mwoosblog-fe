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
      screens: {
        sm: {max: '767px'},
        md: {min: '768px', max: '991px'},
        lg: {min: '992px', max: '1199px'},
        xl: {min: '1200px'},
        mobile: {max: '480px'},
        tablet: {min: '481px', max: '768px'},
        laptop: {min: '769px', max: '1279px'},
        desktop: {min: '1280px'},
        vsm: {max: '479px'},
        sm1: {min: '480px', max: '624px'},
        sm2: {min: '625px', max: '767px'},
        md1: {min: '768px', max: '879px'},
        md2: {min: '880px', max: '991px'},
        lg1: {min: '992px', max: '1095px'},
        lg2: {min: '1096px', max: '1199px'},
        xl1: {min: '1200px', max: '1299px'},
        xl2: {min: '1300px', max: '1399px'},
        vxl: {min: '1400px'},
      },
    },
    fontFamily: {
      nanumround: ['NanumSquareRound'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
