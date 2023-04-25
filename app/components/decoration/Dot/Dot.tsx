import classNames from 'classnames';

import type { SpacerProps } from '~/components/decoration/Spacer/Spacer';

export type DotProps = {
  spacingTop?: SpacerProps['height'];
  spacingBottom?: SpacerProps['height'];
  className?: string;
};

export const Dot = ({
  spacingTop = '0',
  spacingBottom = '0',
  className,
}: DotProps) => (
  <hr
    className={classNames(
      `flex w-full justify-center items-center h-1 mx-auto after:content-[''] after:h-0.25 after:w-0.25 after:bg-black after:rounded-full border-none`,
      className,
      `mt-${spacingTop}`,
      `mb-${spacingBottom}`,
    )}
  />
);
