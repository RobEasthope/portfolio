import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from 'sanity-codegen';

import { SanityBlocks } from '~/components/base/SanityBlocks/SanityBlocks';

import { BasicLayout } from '~/components/layouts/BasicLayout/BasicLayout';

// TYPES
export type PageProps = {
  page: {
    _id: string;
    _type: 'Page';
    title: string;
    slug: { _type: 'slug'; current: string };
    sections: any[];
    metadataDescription: string;
    metadataImage: {
      _type: 'image';
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    };
  };
};

// MARKUP
export const Page = ({ page }: PageProps) => (
  <BasicLayout>
    <SanityBlocks blocks={page?.sections} pageID={page?._id} />
  </BasicLayout>
);
