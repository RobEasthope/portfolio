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
  mode: 'responsive' | 'cover' | 'contain' | 'next';
  className?: string;
  wrapperClassName?: string;
  assetClassName?: string;
  containAspectRatio?: number;
  aspectRatio?: number;
};

// MARKUP
export const SanityImage = ({
  asset,
  maxWidth,
  alt,
  mode = 'responsive',
  aspectRatio = 0,
  containAspectRatio = 1,
  className = '',
  wrapperClassName = '',
  assetClassName = '',
}: SanityImageProps) => {
  if (!asset) {
    return null;
  }

  switch (mode) {
    case 'responsive':
      return (
        <div className={className}>
          <div
            style={{ maxWidth: `${maxWidth}px` }}
            className={`responsive-image-wrapper ${wrapperClassName}`}
          >
            {/* <SanitySrcSetImage
              className={classNames(
                `responsive-image-element`,
                className,
                assetClassName,
              )}
              asset={asset}
              maxWidth={maxWidth}
              aspectRatio={aspectRatio}
              alt={alt || ''}
            /> */}
            <RawSanityImage
              // Pass the Sanity Image ID (`_id`) (e.g., `image-abcde12345-1200x800-jpg`)
              id={asset?.id}
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
          {/* <SanitySrcSetImage
            className={classNames(
              `cover-image-element`,
              className,
              wrapperClassName,
            )}
            asset={asset}
            maxWidth={maxWidth}
            aspectRatio={aspectRatio}
            alt={alt || ''}
          /> */}
          <RawSanityImage
            // Pass the Sanity Image ID (`_id`) (e.g., `image-abcde12345-1200x800-jpg`)
            id={asset?.id}
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
            {/* <SanitySrcSetImage
              className={classNames(
                `contain-image-element`,
                className,
                wrapperClassName,
              )}
              asset={asset}
              maxWidth={maxWidth}
              aspectRatio={aspectRatio}
              alt={alt || ''}
            /> */}
            <RawSanityImage
              // Pass the Sanity Image ID (`_id`) (e.g., `image-abcde12345-1200x800-jpg`)
              id={asset?.id}
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
