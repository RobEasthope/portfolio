import { ClientOnly } from 'remix-utils';
import { Studio } from 'sanity';

import config from '~/sanity/sanity.config';

import { Box } from '~/components/base/Box/Box';
import { InternalLink } from '~/components/base/InternalLink/InternalLink';

import { HOME_PAGE_SLUG } from '~/components/pages/Page/constants/HOME_PAGE_SLUG';

export function SanityStudio() {
  return (
    <ClientOnly>
      {() => (
        <>
          <Studio config={config} />
          <Box as="nav" className="flex justify-center">
            <InternalLink
              href={HOME_PAGE_SLUG}
              className="inline-block text-white bg-gray-900 font-bold font-sans text-center px-1 py-0.5"
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
