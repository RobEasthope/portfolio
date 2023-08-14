import type { SanitySchemaProps } from 'sanity.config';
import { SanityBlocks } from '~/components/_base/SanityBlocks/SanityBlocks';

// TYPES
export type PageProps = {
  page: Extract<SanitySchemaProps, { _type: 'Page' }> & {
    sections: any[];
  };
};

// MARKUP
export const Page = ({ page }: PageProps) => (
  <SanityBlocks blocks={page?.sections} pageID={page?._id} />
);
