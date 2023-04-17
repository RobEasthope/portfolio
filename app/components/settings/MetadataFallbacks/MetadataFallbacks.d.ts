import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from 'sanity-codegen';

export type MetadataFallbacksProps = {
  _type: 'MetadataFallbacks';
  headingappsettings?: string;
  sitename: string;
  canonicalUrl?: string;
  headingseometadatafallbacks?: string;
  titleFallback: string;
  descriptionFallback: string;
  thumbnailFallback: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};
