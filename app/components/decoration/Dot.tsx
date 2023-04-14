export type DotProps = {
  className?: string;
};

export const Dot = ({ className }: DotProps) => (
  <span className="flex items-center h-1">
    <hr
      className={`mx-auto h-0.25 w-0.25 bg-black rounded-full border-none ${
        className || ''
      }`}
    />
  </span>
);
