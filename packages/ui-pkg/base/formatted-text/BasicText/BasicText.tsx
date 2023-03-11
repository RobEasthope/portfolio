/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Link from 'next/link';
import BlockContent from '@sanity/block-content-to-react';
import {
  BlockRendererProps,
  SerializerMarksProps,
} from 'ui-pkg/base/formatted-text/formattedTextProps';
import { Prose } from 'ui-pkg/base/typography/Prose/Prose';

// TYPES
export interface BasicTextProps {
  blocks: unknown;
}

const BasicTextBlockRenderer = ({ node, children }: BlockRendererProps) =>
  BlockContent.defaultSerializers.types.block({ node, children });

const BasicTextSerializer = {
  marks: {
    ExternalLink: ({ children, mark }: SerializerMarksProps) => (
      <a href={mark.url} target="_blank" rel="noreferrer">
        {children}
      </a>
    ),
    InternalLink: ({ children, mark }: SerializerMarksProps) => (
      <Link
        href={
          mark?.page?.slug?.current === 'root'
            ? '/'
            : `/${mark?.page?.slug?.current}`
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
  <Prose>
    <BlockContent blocks={blocks} serializers={BasicTextSerializer} />
  </Prose>
);
