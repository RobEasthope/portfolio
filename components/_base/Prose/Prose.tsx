import type { PortableTextComponents } from '@portabletext/react';
import { PortableText } from '@portabletext/react';
import type { LinksFunction } from '@vercel/remix';
import classNames from 'classnames';
import { Box } from 'components/_base/Box/Box';

import styles from './prose-overrides.css';

export type ProseProps = {
  as: string;
  className?: string;
  content: any;
  components: unknown;
};

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export const Prose = ({
  as = 'div',
  content,
  components,
  className,
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
      />
    </Box>
  );
};
