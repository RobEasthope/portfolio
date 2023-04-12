/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
const defaultTheme = require("tailwindcss/defaultTheme");

const LOWER_SCREEN_SIZE = 320;
const UPPER_SCREEN_SIZE = 1400;

const BASE_UNIT = "1.5rem";

// UTILS
// Parked here due to import/compile issues

// Returns a fluid clamp value based on screen size. Min and max values are in pixels.
const fluidPx = ({ min, max }) => [
  `clamp(${min}px, calc(${min}px + (${max} - ${min}) * ((100vw - ${LOWER_SCREEN_SIZE}px) / (${UPPER_SCREEN_SIZE} - ${LOWER_SCREEN_SIZE}))), ${max}px)`,
];

// Takes pixel values and returns a fluid font size and line height. Line height is set to 1.5 by default.
const fluidTypeSize = ({ min, max, lineHeight = 1.5 }) => [
  fluidPx({ min, max }),
  { lineHeight },
];

/** @type {import('tailwindcss').Config} */
module.exports = {
  extend: {
    fontFamily: {
      sans: ["aktiv-grotesk", ...defaultTheme.fontFamily.sans],
      serif: ["linotype-sabon", ...defaultTheme.fontFamily.serif],
    },
    fontSize: {
      sm: fluidTypeSize({
        min: 14,
        max: 16,
      }),
      base: fluidTypeSize({
        min: 16,
        max: 18,
      }),
      md: fluidTypeSize({
        min: 18,
        max: 21,
      }),
      lg: fluidTypeSize({
        min: 18,
        max: 24,
      }),
      xl: fluidTypeSize({
        min: 21,
        max: 32,
      }),
      "2xl": fluidTypeSize({
        min: 23,
        max: 43,
      }),
      "3xl": fluidTypeSize({
        min: 26,
        max: 56,
      }),
      "4xl": fluidTypeSize({
        min: 28,
        max: 76,
      }),
      "5xl": fluidTypeSize({
        min: 32,
        max: 100,
      }),
    },
  },
  spacing: {
    0: "0",
    px: "1px",
    "2px": "2px",
    0.25: `calc(${BASE_UNIT} * 0.25)`,
    0.5: `calc(${BASE_UNIT} * 0.5)`,
    0.75: `calc(${BASE_UNIT} * 0.75)`,
    1: `calc(${BASE_UNIT} * 1)`,
    1.25: `calc(${BASE_UNIT} * 1.25)`,
    1.5: `calc(${BASE_UNIT} * 1.5)`,
    1.75: `calc(${BASE_UNIT} * 1.75)`,
    2: `calc(${BASE_UNIT} * 2)`,
    3: `calc(${BASE_UNIT} * 3)`,
    4: `calc(${BASE_UNIT} * 4)`,
    5: `calc(${BASE_UNIT} * 5)`,
    6: `calc(${BASE_UNIT} * 6)`,
    7: `calc(${BASE_UNIT} * 7)`,
    8: `calc(${BASE_UNIT} * 8)`,
    9: `calc(${BASE_UNIT} * 9)`,
    10: `calc(${BASE_UNIT} * 10)`,
    11: `calc(${BASE_UNIT} * 11)`,
    12: `calc(${BASE_UNIT} * 12)`,
    14: `calc(${BASE_UNIT} * 14)`,
    16: `calc(${BASE_UNIT} * 16)`,
    20: `calc(${BASE_UNIT} * 20)`,
    24: `calc(${BASE_UNIT} * 24)`,
    28: `calc(${BASE_UNIT} * 28)`,
    32: `calc(${BASE_UNIT} * 32)`,
    36: `calc(${BASE_UNIT} * 36)`,
    40: `calc(${BASE_UNIT} * 40)`,
    44: `calc(${BASE_UNIT} * 44)`,
    48: `calc(${BASE_UNIT} * 48)`,
    52: `calc(${BASE_UNIT} * 52)`,
    56: `calc(${BASE_UNIT} * 56)`,
    60: `calc(${BASE_UNIT} * 60)`,
    64: `calc(${BASE_UNIT} * 64)`,
  },
};
