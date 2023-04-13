export const sanityConfig = {
  dataset: process.env.SANITY_DATASET || '',
  projectId: process.env.SANITY_PROJECT_ID || '',
  useCdn: process.env.NODE_ENV !== 'production',
  token: process.env.SANITY_API_TOKEN || '',
  apiVersion: process.env.SANITY_API_VERSION || '',
};
