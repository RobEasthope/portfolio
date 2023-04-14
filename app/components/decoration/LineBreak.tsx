import classNames from 'classnames';

export type LineBreakProps = {
  className?: string;
};

export const LineBreak = ({ className }: LineBreakProps) => (
  <hr
    className={classNames(
      'flex items-center justify-center h-1 after:content-[""] after:block after:w-3 after:h-0.125 after:bg-darkSaffron  border-none',
      className,
    )}
  />
);
