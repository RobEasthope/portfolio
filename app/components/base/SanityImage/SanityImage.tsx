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
  src: ImageAssetProp | undefined;
  maxWidth: number;
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
  maxWidth,
  alt,
  aspectRatio = 0,
  className = '',
  wrapperClassName = '',
  imgClassName = '',
  cover = false,
}: SanityImageProps) => {
  if (!src) {
    return null;
  }

  // Cover mode
  if (cover) {
    return (
      <div
        style={{ maxWidth: `${maxWidth}px` }}
        className={classNames(
          `sanity-image`,
          `sanity-image--cover-image-wrapper`,
          className,
          wrapperClassName,
        )}
      >
        <RawSanityImage
          id={src?.id}
          mode="cover"
          width={src?.dimensions?.width}
          height={src?.dimensions?.height / aspectRatio}
          preview={src?.preview}
          hotspot={src?.hotspot}
          crop={src?.crop}
          baseUrl={SANITY_PROJECT?.BASE_IMAGE_URL}
          alt={alt || ''}
          className={classNames(className, imgClassName)}
        />
      </div>
    );
  }

  // Standard mode
  return (
    <div
      style={{ maxWidth: `${maxWidth}px` }}
      className={classNames(
        `sanity-image`,
        `sanity-image--standard-image-wrapper`,
        className,
        wrapperClassName,
      )}
    >
      <RawSanityImage
        id={src?.id}
        mode={aspectRatio ? 'cover' : 'contain'}
        width={src?.dimensions?.width}
        height={src?.dimensions?.height / aspectRatio}
        preview={src?.preview}
        hotspot={src?.hotspot}
        crop={src?.crop}
        baseUrl={SANITY_PROJECT?.BASE_IMAGE_URL}
        alt={alt || ''}
        className={classNames(className, imgClassName)}
      />
    </div>
  );
};
