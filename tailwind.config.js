import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      'banner-gradient': 'linear-gradient(to bottom, rgba(17, 17, 17, 0) 0, rgba(17, 17, 17, 0.75) 50%, rgba(17, 17, 17, 1) 100%)',
      'banner-gradient-hover': 'linear-gradient(to bottom, rgba(17, 17, 17, 0) 0, rgba(17, 17, 17, 0.95) 50%, rgba(17, 17, 17, 1) 100%)',
    }
  },
  keyframes: {
    enterFromRight: {
      from: { opacity: 0, transform: 'translateX(200px)' },
      to: { opacity: 1, transform: 'translateX(0)' },
    },
    enterFromLeft: {
      from: { opacity: 0, transform: 'translateX(-200px)' },
      to: { opacity: 1, transform: 'translateX(0)' },
    },
    exitToRight: {
      from: { opacity: 1, transform: 'translateX(0)' },
      to: { opacity: 0, transform: 'translateX(200px)' },
    },
    exitToLeft: {
      from: { opacity: 1, transform: 'translateX(0)' },
      to: { opacity: 0, transform: 'translateX(-200px)' },
    },
    scaleIn: {
      from: { opacity: 0, transform: 'rotateX(-10deg) scale(0.9)' },
      to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
    },
    scaleOut: {
      from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
      to: { opacity: 0, transform: 'rotateX(-10deg) scale(0.95)' },
    },
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    fadeOut: {
      from: { opacity: 1 },
      to: { opacity: 0 },
    },
  },
  animation: {
    'scaleIn': 'scaleIn 200ms ease',
    'scaleOut': 'scaleOut 200ms ease',
    'fadeIn': 'fadeIn 200ms ease',
    'fadeOut': 'fadeOut 200ms ease',
    'enterFromLeft': 'enterFromLeft 250ms ease',
    'enterFromRight': 'enterFromRight 250ms ease',
    'exitToLeft': 'exitToLeft 250ms ease',
    'exitToRight': 'exitToRight 250ms ease',
  }
};

export const plugins = [
  require('@tailwindcss/line-clamp'),
  plugin(({ matchUtilities }) => {
    matchUtilities({
      perspective: (value) => ({
        perspective: value,
      }),
    });
  }),
];

