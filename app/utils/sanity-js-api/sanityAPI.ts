import { createClient } from '@sanity/client';
import type { SanityClient } from '@sanity/client';

export function sanityAPI({
  preview,
}: {
  preview?: { token: string };
}): SanityClient {
  const client = createClient({
    projectId: process.env.SANITY_PUBLIC_PROJECT_ID || '',
    dataset: process.env.SANITY_PUBLIC_DATASET || '',
    apiVersion: process.env.SANITY_PUBLIC_API_VERSION || '',
    useCdn: true,
    perspective: 'published',
  });
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts');
    }
    return client.withConfig({
      token: process.env.SANITY_API_TOKEN || '',
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    });
  }
  return client;
}
