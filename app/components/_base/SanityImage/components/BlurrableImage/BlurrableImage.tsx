import classNames from 'classnames';
import * as React from 'react';

import { useSSRLayoutEffect } from './useSSRLayoutEffect';

// TYPES
type BlurrableImageProps = {
  img: React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>;
  alt?: string;
  blurredAssetUrl?: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

// MARKUP
export function BlurrableImage({
  img,
  blurredAssetUrl,
  alt,
  className = '',
}: BlurrableImageProps) {
  const [hiResImageLoaded, setFullSizeImageLoaded] = React.useState(false);
  const hiResImageRef = React.useRef<HTMLImageElement>(null);

  useSSRLayoutEffect(() => {
    if (hiResImageRef.current?.complete) setFullSizeImageLoaded(true);
  }, []);

  React.useEffect(() => {
    if (!hiResImageRef.current) return;
    if (hiResImageRef.current.complete) return;

    let current = true;
    hiResImageRef.current.addEventListener('load', () => {
      if (!hiResImageRef.current || !current) return;
      setTimeout(() => {
        setFullSizeImageLoaded(true);
      }, 0);
    });

    return () => {
      current = false;
    };
  }, [hiResImageRef, hiResImageLoaded]);

  const hiResImage = React.cloneElement(img, {
    // @ts-expect-error no idea 🤷‍♂️
    ref: hiResImageRef,
    className: classNames(
      'high-res-image',
      className,
      hiResImageLoaded ? 'high-res-image--show' : 'high-res-image--hide',
    ),
  });

  return (
    <>
      {blurredAssetUrl && (
        <img
          src={blurredAssetUrl}
          className={classNames(
            'blurred-res-image',
            className,
            hiResImageLoaded ? 'blurred-image--hide' : 'high-res-image--show',
          )}
          alt={alt}
        />
      )}
      {hiResImage}
      <noscript>{img}</noscript>
    </>
  );
}
