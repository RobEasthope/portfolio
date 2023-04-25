export type DotProps = {
  spacingTop?: number;
  spacingBottom?: number;
  className?: string;
};

export const Dot = ({ spacingTop, spacingBottom, className }: DotProps) => (
  <hr
    className={`flex w-full justify-center items-center h-1 mx-auto after:content-[''] after:h-0.25 after:w-0.25 after:bg-black after:rounded-full border-none ${
      className || ''
    }`}
  />
);
