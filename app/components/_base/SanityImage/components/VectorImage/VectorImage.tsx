import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { urlFor } from '~/components/_base/SanityImage/urlFor';

export type VectorImageProps = {
  asset: SanityImageSource;
  alt: string;
  className?: string;
};

export const VectorImage = ({ asset, alt, className }: VectorImageProps) => {
  const vectorImageUrl: string | null = urlFor(asset).url();

  return <img src={vectorImageUrl || ''} alt={alt} className={className} />;
};
