import { json } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';

import { sanityAPI } from '~/utils/sanity-js-api/sanityAPI';

import type { AppSettingsProps } from '~/components/settings/AppSettings/AppSettings';
import { APP_SETTINGS_QUERY } from '~/components/settings/AppSettings/AppSettings.query';

import { Box } from '~/components/base/Box/Box';
import { InternalLink } from '~/components/base/InternalLink/InternalLink';

export async function loader() {
  const appSettings: AppSettingsProps = await sanityAPI.fetch(
    APP_SETTINGS_QUERY,
  );

  return json({
    appSettings: appSettings || null,
  });
}

export const StudioLayout = () => {
  const { appSettings } = useLoaderData<typeof loader>();

  return (
    <>
      <Outlet />
      <Box as="footer" className="flex items-center justify-center">
        <InternalLink
          href={appSettings?.homePageSlug}
          className="inline-block text-white bg-gray-900 font-bold font-sans text-center px-1 py-0.5"
          homePageSlug={appSettings?.homePageSlug}
        >
          Back to app
        </InternalLink>
      </Box>
    </>
  );
};

export default StudioLayout;
