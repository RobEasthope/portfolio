import classNames from 'classnames';

export type LineBreakProps = {
  className?: string;
};

export const LineBreak = ({ className }: LineBreakProps) => (
  <hr
    className={classNames(
      'block w-3 h-0.125 bg-darkSaffron mx-auto border-none',
      className,
    )}
  />
);
