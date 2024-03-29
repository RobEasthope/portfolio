import classNames from 'classnames';

// TYPES
export type SpacerProps = {
  _type?: 'Spacer';
  height:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '14'
    | '16'
    | '20'
    | '24'
    | '28'
    | '32'
    | '36'
    | '40'
    | '44'
    | '48'
    | '52'
    | '56'
    | '60'
    | '64';
  className?: string;
};

// MARKUP
export const Spacer = ({ height = '1', className }: SpacerProps) => {
  if (!height) {
    return null;
  }

  return <div className={classNames('w-full', `h-${height}`, className)} />;
};

export default Spacer;
