import { createClient } from '@sanity/client';

export const sanityAPI = createClient({
  dataset: process.env.SANITY_PROJECT_DATASET || '',
  projectId: process.env.SANITY_PROJECT_ID || '',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN || '',
  apiVersion: process.env.SANITY_API_VERSION || '',
});
