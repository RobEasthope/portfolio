import PicoSanity from 'picosanity';

export const sanityPreviewAPI = PicoSanity({
  projectId: process.env.SANITY_PUBLIC_PROJECT_ID || '',
  dataset: process.env.SANITY_PUBLIC_DATASET || '',
  apiVersion: process.env.SANITY_PUBLIC_API_VERSION || '',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || '',
});
