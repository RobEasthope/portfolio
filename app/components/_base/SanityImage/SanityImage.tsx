import type { SanityImageDimensions } from '@sanity/image-url/lib/types/types';
import classNames from 'classnames';
import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from 'sanity-codegen';
import { SanityImage as RawSanityImage } from 'sanity-image';

import { SANITY_PROJECT } from '~/constants/SANITY_PROJECT';

// TYPES
export type ImageAssetProp = {
  _type: 'image';
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
};

export type SanityImageProps = {
  src:
    | {
        id: string;
        dimensions: SanityImageDimensions;
        preview?: string;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      }
    | undefined;
  alt: string | undefined;
  className?: string;
  wrapperClassName?: string;
  imgClassName?: string;
  aspectRatio?: number;
  cover?: boolean;
};

// MARKUP
export const SanityImage = ({
  src,
  alt = '',
  aspectRatio = 0,
  className = '',
  wrapperClassName = '',
  imgClassName = '',
  cover = false,
}: SanityImageProps) => {
  if (!src) {
    return null;
  }

  const calculatedImageHeight = aspectRatio
    ? src.dimensions.width / aspectRatio
    : src.dimensions.height;

  // Cover mode
  if (cover) {
    return (
      <div
        className={classNames(
          `sanity-image--cover-image-wrapper`,
          className,
          wrapperClassName,
        )}
      >
        <RawSanityImage
          id={src?.id}
          mode="cover"
          width={src?.dimensions?.width}
          height={calculatedImageHeight}
          preview={src?.preview}
          hotspot={src?.hotspot}
          crop={src?.crop}
          baseUrl={SANITY_PROJECT?.BASE_IMAGE_URL}
          alt={alt}
          className={classNames(
            'sanity-image--cover-image-element',
            className,
            imgClassName,
          )}
        />
      </div>
    );
  }

  // Standard mode
  return (
    <div
      className={classNames(
        `sanity-image--standard-image-wrapper`,
        className,
        wrapperClassName,
      )}
    >
      <RawSanityImage
        id={src?.id}
        mode={aspectRatio ? 'cover' : 'contain'}
        width={src?.dimensions?.width}
        height={calculatedImageHeight}
        preview={src?.preview}
        hotspot={src?.hotspot}
        crop={src?.crop}
        baseUrl={SANITY_PROJECT?.BASE_IMAGE_URL}
        alt={alt}
        className={classNames(
          'sanity-image--standard-image-element ',
          className,
          imgClassName,
        )}
      />
    </div>
  );
};
