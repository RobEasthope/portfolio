module.exports = {
  plugins: [require("@trivago/prettier-plugin-sort-imports")],
  importOrder: [
    "^~/components/base/(.*)$",
    "^~/components/pages/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
