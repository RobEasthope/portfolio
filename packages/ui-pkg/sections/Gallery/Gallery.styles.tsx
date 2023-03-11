import { BasicText } from "ui-pkg/base/formatted-text/BasicText/BasicText";
import { styled } from "ui-pkg/styles/stitches.config";

export const Figure = styled("figure", {
  margin: 0,
});

export const Grid = styled("div", {
  display: "grid",
  gap: "$x1",

  variants: {
    columns: {
      1: {
        "@initial": {
          gridTemplateColumns: "repeat(1, 1fr)",
        },
      },
      2: {
        "@initial": {
          gridTemplateColumns: "repeat(1, 1fr)",
        },
        "@medium": {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
      },
      3: {
        "@initial": {
          gridTemplateColumns: "repeat(1, 1fr)",
        },
        "@xSmall": {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        "@medium": {
          gridTemplateColumns: "repeat(3, 1fr)",
        },
      },
      4: {
        "@initial": {
          gridTemplateColumns: "repeat(1, 1fr)",
        },
        "@small": {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        "@large": {
          gridTemplateColumns: "repeat(4, 1fr)",
        },
      },
    },
  },
  defaultVariants: {
    columns: 2,
  },
});

export const GalleryCaption = styled(BasicText, {});
