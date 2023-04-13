import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';
import { SANITY_PROJECT } from '~/components/config/SANITY_PROJECT';

export const urlFor = (source: SanityImageSource) =>
  imageUrlBuilder({
    projectId: SANITY_PROJECT.PUBLIC_ID,
    dataset: SANITY_PROJECT.PUBLIC_DATASET,
  }).image(source);
