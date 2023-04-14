module.exports = {
  plugins: [require("@trivago/prettier-plugin-sort-imports")],
  importOrder: [
    "^~/types/(.*)$",
    "^~/sanity/(.*)$",
    "^~/constants/(.*)$",
    "^~/components/base/(.*)$",
    "^~/components/navigation/(.*)$",
    "^~/components/settings/(.*)$",
    "^~/components/blocks/(.*)$",
    "^~/components/layouts/(.*)$",
    "^~/components/pages/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
