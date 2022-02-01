/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Link from 'next/link';
import BlockContent from '@sanity/block-content-to-react';

// TYPES
export interface BasicTextProps {
  blocks: unknown;
  className?: string;
  as?: string;
}

const BasicTextBlockRenderer = (props) =>
  BlockContent.defaultSerializers.types.block(props);

const basicTextSerializer = {
  marks: {
    // eslint-disable-next-line react/prop-types
    ExternalLink: ({ children, mark }) => (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, react/prop-types
      <a href={mark.url} target="_blank" rel="noreferrer">
        {children}
      </a>
    ),
    // eslint-disable-next-line react/prop-types
    InternalLink: ({ children, mark }) => (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      <Link
        href={
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, react/prop-types
          mark?.page?.slug?.current === 'root'
            ? '/'
            : // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access, react/prop-types
              `/${mark?.page?.slug?.current}`
        }
      >
        <a>{children}</a>
      </Link>
    ),
  },
  types: {
    block: BasicTextBlockRenderer,
  },
};

// MARKUP
export const BasicText = ({ blocks }: BasicTextProps) => (
  <BlockContent blocks={blocks} serializers={basicTextSerializer} />
);
