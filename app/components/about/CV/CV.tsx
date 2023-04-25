import { SanityBlocks } from '~/components/base/SanityBlocks/SanityBlocks';

// TYPES
export type CVProps = {
  page: {
    _id: string;
    _type: 'Page';
    title: string;
    slug: { _type: 'slug'; current: string };
    sections: any[];
  };
};

// MARKUP
export const CV = ({ page }: CVProps) => {
  if (!page?.sections) {
    return null;
  }

  return <SanityBlocks blocks={page?.sections} pageID={page?._id} />;
};
