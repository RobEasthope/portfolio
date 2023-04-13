/* eslint-disable @typescript-eslint/no-non-null-assertion */
import createClient from "@sanity/client";

export const sanityPreviewAPI = createClient({
  dataset:
    process.env.SANITY_PROJECT_DATASET! ||
    process.env.STORYBOOK_SANITY_PROJECT_DATASET ||
    "production",
  projectId:
    process.env.SANITY_PROJECT_ID! ||
    process.env.STORYBOOK_SANITY_PROJECT_ID!,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN! || process.env.SANITY_API_TOKEN!,
  apiVersion: process.env.SANITY_API_VERSION!,
});
