/* eslint-disable camelcase */
import type { LinksFunction, V2_MetaFunction } from '@remix-run/node';
import { Suspense, lazy } from 'react';

import styles from '~/sanity/SanityStudio/SanityStudio.css';
import { sanityAPI } from '~/sanity/sanity-js-api/sanityAPI';

import type { AppSettingsProps } from '~/components/settings/AppSettings/AppSettings';
import { APP_SETTINGS_QUERY } from '~/components/settings/AppSettings/AppSettings.query';

export async function loader() {
  const appSettings: AppSettingsProps = await sanityAPI.fetch(
    APP_SETTINGS_QUERY,
  );

  return json({
    appSettings: payload?.appSettings || null,
  });
}

export const meta: V2_MetaFunction<typeof loader> = () => [
  { title: 'Sanity Studio' },
  {
    property: 'robots',
    content: 'noindex',
  },
];

export const links: LinksFunction = () => [
  { rel: 'preload', href: styles, as: 'style' },
  { rel: 'stylesheet', href: styles },
];

const SanityStudio = lazy(() => import('~/sanity/SanityStudio/SanityStudio'));
const Fallback = (
  <div className="flex h-screen w-screen items-center justify-center">
    Loading...
  </div>
);

export default function StudioPage() {
  const { appSettings } = useLoaderData<typeof loader>();

  return (
    <Suspense fallback={Fallback}>
      <SanityStudio homePageSlug={appSettings?.homePageSlug} />
    </Suspense>
  );
}
