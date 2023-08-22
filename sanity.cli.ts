import { defineCliConfig } from 'sanity/cli';

import { SANITY_PROJECT } from '@/constants/SANITY_PROJECT';

export default defineCliConfig({
  api: {
    projectId: SANITY_PROJECT.PUBLIC_ID,
    dataset: SANITY_PROJECT.PUBLIC_DATASET,
  },
});
