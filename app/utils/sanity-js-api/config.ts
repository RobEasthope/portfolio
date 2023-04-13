// Disable no-non-null-assertion as it's irrelevant for this bit
/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const sanityConfig = {
  dataset: process.env.SANITY_DATASET! || 'production',
  projectId: process.env.SANITY_PROJECT_ID!,
  useCdn: process.env.NODE_ENV !== 'production',
  token: process.env.SANITY_API_TOKEN! || process.env.SANITY_API_TOKEN!,
  apiVersion: process.env.SANITY_API_VERSION!,
};
