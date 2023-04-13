import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';

type ProjectDetails = {
  projectId: string;
  dataset: string;
  apiVersion: string;
};

export const projectDetails = (): ProjectDetails => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {
    SANITY_PUBLIC_PROJECT_ID,
    SANITY_PUBLIC_DATASET,
    SANITY_PUBLIC_API_VERSION,
  } = typeof document === 'undefined' ? process.env : window.ENV;

  return {
    projectId: String(SANITY_PUBLIC_PROJECT_ID),
    dataset: String(SANITY_PUBLIC_DATASET),
    apiVersion: String(SANITY_PUBLIC_API_VERSION),
  };
};

export const urlFor = (source: SanityImageSource) =>
  imageUrlBuilder(projectDetails()).image(source);
