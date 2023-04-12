import type { FooterProps } from '~/components/navigation/Footer/Footer';
import type { HeaderProps } from '~/components/navigation/Header/Header';
import { SanityBlocks } from '~/components/base/SanityBlocks/SanityBlocks';
import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from 'sanity-codegen';
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
  header: HeaderProps;
  footer: FooterProps;
};

// MARKUP
export const Page = ({ page, header, footer }: PageProps) => (
  <BasicLayout header={header} footer={footer} slug={page?.slug?.current}>
    <SanityBlocks blocks={page?.sections} pageID={page?._id} />
  </BasicLayout>
);
