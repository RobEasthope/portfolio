import { createClient } from '@sanity/client';

export const sanityAPI = createClient({
  projectId: process.env.SANITY_PUBLIC_PROJECT_ID || '',
  dataset: process.env.SANITY_PUBLIC_DATASET || '',
  apiVersion: process.env.SANITY_PUBLIC_API_VERSION || '',
  useCdn: true,
  perspective: 'published',
  token: process.env.SANITY_API_TOKEN || '',
});
