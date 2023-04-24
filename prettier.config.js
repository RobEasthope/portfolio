module.exports = {
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("@trivago/prettier-plugin-sort-imports"),
  ],
  tailwindConfig: "./tailwind.config.ts",
  importOrder: [
    "^~/types/(.*)$",
    "^~/sanity/(.*)$",
    "^~/constants/(.*)$",
    "^~/components/settings/(.*)$",
    "^~/components/base/(.*)$",
    "^~/components/navigation/(.*)$",
    "^~/components/layouts/(.*)$",
    "^~/components/decoration/(.*)$",
    "^~/components/generics/(.*)$",
    "^~/components/pages/(.*)$",
    "^~/components/about/(.*)$",
    "^~/components/projects/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
