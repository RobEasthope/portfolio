import { createClient } from '@sanity/client';
import type { SanityClient } from '@sanity/client';

export function sanityAPI({ preview }: { preview?: boolean }): SanityClient {
  // Published mode
  if (!preview) {
    return createClient({
      projectId: process.env.SANITY_PUBLIC_PROJECT_ID || '',
      dataset: process.env.SANITY_PUBLIC_DATASET || '',
      apiVersion: process.env.SANITY_PUBLIC_API_VERSION || '',
      useCdn: true,
      perspective: 'published',
    });
  }

  // Preview mode
  return createClient({
    projectId: process.env.SANITY_PUBLIC_PROJECT_ID || '',
    dataset: process.env.SANITY_PUBLIC_DATASET || '',
    apiVersion: process.env.SANITY_PUBLIC_API_VERSION || '',
    token: process.env.SANITY_API_TOKEN || '',
    useCdn: false,
    ignoreBrowserTokenWarning: true,
    perspective: 'previewDrafts',
  });
}
