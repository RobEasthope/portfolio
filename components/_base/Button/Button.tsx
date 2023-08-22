import type { ReactNode } from 'react';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  type: 'button' | 'submit' | 'reset';
  className?: string;
  children: ReactNode;
};

export const Button = ({ type, className, children, ...rest }: ButtonProps) => {
  if (!children) {
    return null;
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={className} {...rest}>
      {children}
    </button>
  );
};
