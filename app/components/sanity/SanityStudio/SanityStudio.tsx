import { ClientOnly } from 'remix-utils';
import { Studio } from 'sanity';
import config from 'sanity.config';

import type { AppSettingsProps } from '~/components/settings/AppSettings/AppSettings';

import { Box } from '~/components/base/Box/Box';
import { InternalLink } from '~/components/base/InternalLink/InternalLink';

export type SanityStudioProps = {
  homePageSlug: AppSettingsProps['homePageSlug'];
};

export function SanityStudio({ homePageSlug }: SanityStudioProps) {
  return (
    <ClientOnly>
      {() => (
        <>
          <Studio config={config} />
          <Box as="nav" className="flex justify-center">
            <InternalLink
              href={homePageSlug}
              className="inline-block text-white bg-gray-900 font-bold font-sans text-center px-1 py-0.5"
              homePageSlug={homePageSlug}
            >
              Back to app
            </InternalLink>
          </Box>
        </>
      )}
    </ClientOnly>
  );
}

export default SanityStudio;
