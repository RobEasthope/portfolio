import { createImageUrlBuilder } from 'next-sanity';
import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from '@/UI/types/sanity-schema';
import { sanityConfig } from '@/UTILS/sanity-api/sanity-config';
import { BlurrableImage } from '@/UI/base/media/SanityImage/components/BlurrableImage/BlurrableImage';
import { HighResImage } from '@/UI/base/media/SanityImage/components/HighResImage/HighResImage';
import { VectorImage } from '@/UI/base/media/SanityImage/components/VectorImage/VectorImage';
import { Wrapper } from './SanityImage.styles';

// TYPES
export interface ImageAssetProp {
  _type: 'image';
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
}

export type SanityImageProps = {
  asset: ImageAssetProp;
  maxWidth: number;
  mode: 'responsive' | 'cover' | 'contain' | 'next';
  alt?: string;
  aspectRatio?: number;
};

// MARKUP
export const SanityImage = ({
  asset,
  alt,
  mode,
  maxWidth,
  aspectRatio, // Default to 'natural/original' image aspect ratio
}: SanityImageProps) => {
  const imageBuilder = createImageUrlBuilder(sanityConfig);

  // Abort if no asset has been passed in
  if (!asset) {
    return null;
  }

  // VECTORS
  // Render a basic img element if the asset is an svg
  const assetRef = asset?.asset?._ref;

  if (assetRef.slice(-4) === '-svg') {
    return <VectorImage asset={asset || ''} alt={alt || ''} />;
  }

  // BITMAPS
  // Round max width to nearest hundred to match Sanity's pre-generated assets. Rendered image width is handled seperately
  const roundedUpMaxWidth = Math.ceil(maxWidth / 100) * 100;

  // Set minimum asset width
  const minAssetWidth = 100;
  const BLURRING = 100;

  const blurredImageAsset = (): string => {
    if (!aspectRatio) {
      // Generate url and push to array
      return imageBuilder
        .image(asset)
        .auto('format')
        .width(100)
        .blur(BLURRING)
        .url() as string;
    }
    return imageBuilder
      .image(asset)
      .auto('format')
      .width(100)
      .height(Math.floor(100 / aspectRatio))
      .blur(BLURRING)
      .url() as string;
  };

  const srcSetSizes = () => {
    let size = minAssetWidth;
    const widths = [];
    while (size <= roundedUpMaxWidth) {
      // Generate size option and push to array
      widths.push(`${size}w`);

      // Bump to next asset size
      size += 100;
    }

    return `(max-width: ${maxWidth}px) ${String(widths.map((width) => width))}`;
  };

  const srcSetAssets = () => {
    let size = minAssetWidth;
    const assetUrls = [];

    while (size <= roundedUpMaxWidth) {
      if (!aspectRatio) {
        // Generate url
        const url = imageBuilder
          .image(asset)
          .auto('format')
          .fit('crop')
          .width(size)
          .url() as string;

        // Push to array
        assetUrls.push(`${url && url} ${size && size}w`);
      } else {
        // Generate url
        const url = imageBuilder
          .image(asset)
          .auto('format')
          .fit('crop')
          .width(size)
          .height(Math.floor(size / aspectRatio))
          .url() as string;

        // Push to array
        assetUrls.push(`${url && url} ${size && size}w`);
      }

      // Bump to next asset size
      size += 100;
    }

    return `${String(assetUrls.map((assetUrl) => assetUrl))}`;
  };

  return (
    <Wrapper mode={mode}>
      <BlurrableImage
        img={
          <HighResImage
            sizes={srcSetSizes()}
            srcSet={srcSetAssets()}
            loading="lazy"
          />
        }
        blurredAssetUrl={blurredImageAsset()}
        alt={alt}
      />
    </Wrapper>
  );
};
