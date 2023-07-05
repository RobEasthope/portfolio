import classNames from 'classnames';
import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from 'sanity-codegen';
import { SanityImage as RawSanityImage } from 'sanity-image';

import { SanitySrcSetImage } from './components/SanitySrcSetImage/SanitySrcSetImage';

// TYPES
export type ImageAssetProp = {
  _type: 'image';
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
};

export type SanityImageProps = {
  asset: ImageAssetProp | undefined;
  maxWidth: number;
  alt: string | undefined;
  mode: 'standard' | 'cover' | 'contain' | 'next';
  className?: string;
  wrapperClassName?: string;
  assetClassName?: string;
  containAspectRatio?: number;
  aspectRatio?: number;
  cover?: boolean;
};

// MARKUP
export const SanityImage = ({
  asset,
  src = asset,
  maxWidth,
  alt,
  mode = 'responsive',
  aspectRatio = 0,
  containAspectRatio = 1,
  className = '',
  wrapperClassName = '',
  assetClassName = '',
  cover = false,
}: SanityImageProps) => {
  if (!asset) {
    return null;
  }

  switch (mode) {
    case 'standard':
      return (
        <div className={className}>
          <div
            style={{ maxWidth: `${maxWidth}px` }}
            className={`responsive-image-wrapper ${wrapperClassName}`}
          >
            <RawSanityImage
              id={src?.id}
              mode={aspectRatio ? 'cover' : 'contain'}
              width={src?.dimensions?.width}
              height={src?.dimensions?.height / aspectRatio}
              preview={src?.preview}
              hotspot={src?.hotspot}
              crop={src?.crop}
              baseUrl="https://cdn.sanity.io/images/117tt97y/production/"
              alt={alt || ''}
            />
          </div>
        </div>
      );

    case 'cover':
      return (
        <div
          style={{ maxWidth: `${maxWidth}px` }}
          className={classNames(
            `cover-image-wrapper`,
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
            baseUrl="https://cdn.sanity.io/images/117tt97y/production/"
            alt={alt || ''}
          />
        </div>
      );

    case 'contain':
      return (
        <div
          style={{ maxWidth: `${maxWidth}px`, position: 'relative' }}
          className={classNames(
            `contain-image-wrapper`,
            className,
            wrapperClassName,
          )}
        >
          <div className="contain-image-wrapper">
            <RawSanityImage
              id={src?.id}
              mode="cover"
              width={src?.dimensions?.width}
              height={src?.dimensions?.height / aspectRatio}
              preview={src?.preview}
              hotspot={src?.hotspot}
              crop={src?.crop}
              baseUrl="https://cdn.sanity.io/images/117tt97y/production/"
              alt={alt || ''}
            />
          </div>
        </div>
      );

    default:
      return null;
  }
};
