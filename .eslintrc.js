/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "wesbos/typescript",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: [
    "/.cache",
    "/node_modules",
    "/.vercel",
    "/build",
    "/public",
    "remix.config.js",
    "*.d.ts",
  ],
};
