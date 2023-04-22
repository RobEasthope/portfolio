import type { PortableTextComponents } from '@portabletext/react';
import { PortableText } from '@portabletext/react';
import classNames from 'classnames';

import { Box } from '~/components/base/Box/Box';

export type ProseProps = {
  as: string;
  className?: string;
  content: any;
  components: unknown;
  homePageSlug: string;
};

export const Prose = ({
  as = 'div',
  content,
  components,
  className,
  homePageSlug,
}: ProseProps) => {
  if (!content) {
    return null;
  }

  return (
    <Box as={as} className={classNames('prose', 'text-ink', className)}>
      <PortableText
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        value={content}
        components={components as PortableTextComponents}
        homePageSlug={homePageSlug}
      />
    </Box>
  );
};
