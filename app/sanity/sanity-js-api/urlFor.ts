import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { sanityConfig } from './config';

const builder = imageUrlBuilder(sanityConfig);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
