/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {createClient} from "@sanity/client";

export const sanityAPI = createClient({
  dataset:
    process.env.SANITY_PROJECT_DATASET! ||
    process.env.STORYBOOK_SANITY_PROJECT_DATASET,
  projectId:
    process.env.SANITY_PROJECT_ID! ||
    process.env.STORYBOOK_SANITY_PROJECT_ID!,
  useCdn: true,
  token: process.env.SANITY_API_TOKEN! || process.env.SANITY_API_TOKEN!,
  apiVersion: process.env.SANITY_API_VERSION!,
});
