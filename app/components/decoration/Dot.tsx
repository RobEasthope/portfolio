export type DotProps = {
  className?: string;
};

export const Dot = ({ className }: DotProps) => (
  <hr
    className={`mx-auto h-0.25 w-0.25 bg-black rounded-full border-none ${className}`}
  />
);
