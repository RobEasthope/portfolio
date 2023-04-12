import type { ReactNode } from 'react';
import { createElement } from 'react';

export type TypeProps = React.HTMLAttributes<HTMLDivElement> & {
  as: // All valid HTML text elements
  | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'dt'
    | 'dd'
    | 'span'
    | 'small'
    | 'div'
    | 'figcaption'
    | 'q'
    | 'li';
  className?: string;
  children: ReactNode;
};

export const Type = ({ as = 'p', className, children, ...rest }: TypeProps) => {
  if (!children) {
    return null;
  }

  return createElement(
    as,
    {
      className,
      ...rest,
    },
    children,
  );
};
