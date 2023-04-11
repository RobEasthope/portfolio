import { FooterProps } from "ui-pkg/navigation/Footer/Footer";
import { HeaderProps } from "ui-pkg/navigation/Header/Header";
import { SanityBlocks } from "ui-pkg/base/SanityBlocks/SanityBlocks";
import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from "sanity-codegen";
import { BasicLayout } from "ui-pkg/layouts/BasicLayout/BasicLayout";

// TYPES
export type PageProps = {
  page: {
    _id: string;
    _type: "Page";
    title: string;
    slug: { _type: "slug"; current: string };
    sections: any[];
    metadataDescription: string;
    metadataImage: {
      _type: "image";
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
  <BasicLayout header={header} footer={footer}>
    <SanityBlocks blocks={page?.sections} pageID={page?._id} />
  </BasicLayout>
);
