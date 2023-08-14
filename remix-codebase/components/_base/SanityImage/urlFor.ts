import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { SANITY_PROJECT } from '~/constants/SANITY_PROJECT';

export const urlFor = (source: SanityImageSource) =>
  imageUrlBuilder({
    projectId: SANITY_PROJECT.PUBLIC_ID,
    dataset: SANITY_PROJECT.PUBLIC_DATASET,
  }).image(source);
