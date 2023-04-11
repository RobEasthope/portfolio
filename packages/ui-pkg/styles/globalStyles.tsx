import { globalCss } from "ui-pkg/styles/stitches.config";
import { TYPE_SCALE } from "ui-pkg/styles/constants/TYPE_SCALE";
import { MAX_WIDTH } from "ui-pkg/config/MAX_WIDTHS";

export const globalStyles = globalCss({
  html: {
    // Minimum font fontSize
    fontSize: `${TYPE_SCALE.STANDARD.MIN}px`,

    // Dynamic font fontSize
    "@pageMinWidth": {
      fontSize: `calc(${TYPE_SCALE.STANDARD.MIN}px + (${TYPE_SCALE.STANDARD.MAX} - ${TYPE_SCALE.STANDARD.MIN}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
    },

    // Maximum font fontSize
    "@pageMaxWidth": {
      fontSize: `${TYPE_SCALE.STANDARD.MAX}px`,
    },
  },
});
