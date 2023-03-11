import { MAX_WIDTH } from "ui-pkg/constants/MAX_WIDTHS";
import { SizeProps, SizeReturnProps } from "ui-pkg/types/utils";

export const size = ({ selector, min, max }: SizeProps): SizeReturnProps => {
  switch (selector) {
    case "marginTop":
      return {
        // Minimum size
        marginTop: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          marginTop: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          marginTop: `${max}px`,
        },
      };

    case "marginRight":
      return {
        // Minimum size
        marginRight: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          marginRight: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          marginRight: `${max}px`,
        },
      };

    case "marginBottom":
      return {
        // Minimum size
        marginBottom: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          marginBottom: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          marginBottom: `${max}px`,
        },
      };

    case "marginLeft":
      return {
        // Minimum size
        marginLeft: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          marginLeft: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          marginLeft: `${max}px`,
        },
      };

    case "marginX":
      return {
        // Minimum size
        marginX: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          marginX: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          marginX: `${max}px`,
        },
      };

    case "marginY":
      return {
        // Minimum size
        marginY: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          marginY: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          marginY: `${max}px`,
        },
      };

    case "paddingTop":
      return {
        // Minimum size
        paddingTop: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          paddingTop: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          paddingTop: `${max}px`,
        },
      };

    case "paddingRight":
      return {
        // Minimum size
        paddingRight: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          paddingRight: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          paddingRight: `${max}px`,
        },
      };

    case "paddingBottom":
      return {
        // Minimum size
        paddingBottom: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          paddingBottom: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          paddingBottom: `${max}px`,
        },
      };

    case "paddingLeft":
      return {
        // Minimum size
        paddingLeft: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          paddingLeft: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          paddingLeft: `${max}px`,
        },
      };

    case "paddingX":
      return {
        // Minimum size
        paddingX: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          paddingX: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          paddingX: `${max}px`,
        },
      };

    case "paddingY":
      return {
        // Minimum size
        paddingY: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          paddingY: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          paddingY: `${max}px`,
        },
      };

    case "gap":
      return {
        // Minimum size
        gap: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          gap: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          gap: `${max}px`,
        },
      };

    case "width":
      return {
        // Minimum size
        width: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          width: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          width: `${max}px`,
        },
      };

    case "minWidth":
      return {
        // Minimum size
        minWidth: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          minWidth: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          minWidth: `${max}px`,
        },
      };

    case "height":
      return {
        // Minimum size
        height: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          height: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          height: `${max}px`,
        },
      };

    case "minHeight":
      return {
        // Minimum size
        minHeight: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          minHeight: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          minHeight: `${max}px`,
        },
      };

    case "xySize":
      return {
        // Minimum size
        xySize: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          xySize: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          xySize: `${max}px`,
        },
      };

    case "minXySize":
      return {
        // Minimum size
        xySize: `${min}px`,
        minWidth: `${min}px`,
        minHeight: `${min}px`,

        // Dynamic size
        "@pageMinWidth": {
          xySize: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
          minWidth: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
          minHeight: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum size
        "@pageMaxWidth": {
          xySize: `${max}px`,
          minWidth: `${max}px`,
          minHeight: `${max}px`,
        },
      };

    default:
      return {};
  }
};
