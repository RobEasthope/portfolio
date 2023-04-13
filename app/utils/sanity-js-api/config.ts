export const sanityConfig = {
  projectId: process.env.SANITY_PUBLIC_PROJECT_ID || '',
  dataset: process.env.SANITY_PUBLIC_DATASET || '',
  apiVersion: process.env.SANITY_PUBLIC_API_VERSION || '',
  useCdn: process.env.NODE_ENV !== 'production',
  token: process.env.SANITY_API_TOKEN || '',
};
