import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from 'sanity-codegen';

export type MetadataFallbacksProps = {
  _type: 'MetadataFallbacks';
  sitename: string;
  canonicalUrl?: string;
  title: string;
  description: string;
  thumbnail: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};
