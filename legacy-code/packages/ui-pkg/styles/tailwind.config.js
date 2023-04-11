/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const TAILWIND_THEME = require("./tailwind-theme");
const TAILWIND_PLUGINS = require("./tailwind-plugins");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../**/*.{js,ts,jsx,tsx}"],
  theme: TAILWIND_THEME,
  plugins: TAILWIND_PLUGINS,
};
