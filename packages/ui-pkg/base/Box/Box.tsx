import { ReactNode, createElement } from "react";
import { variants } from "classname-variants";

type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
  as: string;
  className?: string;
  children: ReactNode | ReactNode[];
  ref?: React.RefObject<HTMLDivElement>;
  breakout?: boolean;
  maxWidth?: "none" | "auto" | "small" | "text" | "medium" | "large" | "full";
  columns?: "null" | "1" | "2" | "3" | "4" | "5";
};

const boxVariants = variants({
  variants: {
    breakout: {
      true: "max-w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] w-screen",
    },
    maxWidth: {
      none: "",
      auto: "max-w-auto",
      small: "max-w-lg",
      text: "max-w-prose",
      medium: "max-w-5xl",
      large: "max-w-7xl",
      full: "w-screen",
    },
    columns: {
      null: "",
      "1": "grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1",
      "2": "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2",
      "3": "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3",
      "4": "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4",
      "5": "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    },
  },
});

export const Box = ({
  as = "div",
  className,
  breakout = false,
  maxWidth = "none",
  columns = "null",
  ref,
  children,
  ...rest
}: BoxProps) => {
  if (!children) {
    return null;
  }

  return createElement(
    as,
    {
      className: `${boxVariants({ breakout, maxWidth, columns })} ${className || ""}`,
      ref,
      ...rest,
    },
    children
  );
};