/* eslint-disable prefer-destructuring */
// Breakpoints
const breakpoints = [
  '0em', // 0px
  '28em', // 448px
  '40em', // 640px
  '52em', // 832px
  '64em', // 1024px
];

// Breakpoint aliases
breakpoints.b = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xlg = breakpoints[4];

// Typescale
const fontSizes = [
  '0', // Zero - 0
  '.875rem', // 14px - 1
  '1rem', // 16px, - 2
  '1.25rem', // 20px -3
  '1.5rem', // 24px - 4
  '2.25rem', // 36px - 5
  '3rem', // 48px - 6
  '5rem', // 80px - 7
  '6rem', // 96px - 8
];

// Spacing
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

export default { breakpoints, fontSizes, space };
