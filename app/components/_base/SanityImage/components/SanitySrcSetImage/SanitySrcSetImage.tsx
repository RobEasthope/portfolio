import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import classNames from 'classnames';
import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from 'sanity-codegen';

import { BlurrableImage } from '~/components/_base/SanityImage/components/BlurrableImage/BlurrableImage';
import { VectorImage } from '~/components/_base/SanityImage/components/VectorImage/VectorImage';
import { urlFor } from '~/components/_base/SanityImage/urlFor';

// TYPES
export type ImageAssetProp = {
  _type: 'image';
  asset: SanityReference<SanityImageAsset>;
  crop: SanityImageCrop;
  hotspot: SanityImageHotspot;
};

export type SanitySrcSetImageProps = {
  asset: SanityImageSource & { asset: { _ref: string } };
  maxWidth: number;
  alt: string;
  aspectRatio: number | undefined;
  className: string;
};

// MARKUP
export const SanitySrcSetImage = ({
  asset,
  alt,
  maxWidth,
  aspectRatio, // Default to 'natural/original' image aspect ratio
  className,
}: SanitySrcSetImageProps) => {
  // Abort if no asset has been passed in
  if (!asset) {
    return null;
  }

  // VECTORS
  // Render a basic img element if the asset is an svg
  const assetRef = asset?.asset?._ref;

  if (assetRef?.slice(-4) === '.svg') {
    return <VectorImage src={asset || ''} alt={alt} className={className} />;
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
      return urlFor(asset).auto('format').width(100).blur(BLURRING).url();
    }
    return urlFor(asset)
      .auto('format')
      .width(100)
      .height(Math.floor(100 / aspectRatio))
      .blur(BLURRING)
      .url();
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

    return `(max-width: ${maxWidth}px) ${String(
      widths?.map((width) => width),
    )}`;
  };

  const srcSetAssets = () => {
    let size = minAssetWidth;
    const assetUrls = [];

    while (size <= roundedUpMaxWidth) {
      if (!aspectRatio) {
        // Generate url
        const url = urlFor(asset)
          ?.auto('format')
          ?.fit('crop')
          ?.width(size)
          ?.url();

        // Push to array
        assetUrls.push(`${url && url} ${size && size}w`);
      } else {
        // Generate url
        const url = urlFor(asset)
          .auto('format')
          .fit('crop')
          .width(size)
          .height(Math.floor(size / aspectRatio))
          .url();

        // Push to array
        assetUrls.push(`${url && url} ${size && size}w`);
      }

      // Bump to next asset size
      size += 100;
    }

    return `${String(assetUrls.map((assetUrl) => assetUrl))}`;
  };

  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <div className={classNames('sanity-image-wrapper', className)}>
      <BlurrableImage
        img={
          <img
            sizes={srcSetSizes()}
            srcSet={srcSetAssets()}
            className={className}
            loading="lazy"
            alt={alt}
          />
        }
        blurredAssetUrl={blurredImageAsset()}
        alt={alt}
      />
    </div>
  );
};
