import { Error404Props } from '@/components/generic/Error404/Error404';
import { PageProps } from '@/components/generic/Page/Page';
import {
  PAGE_BY_SLUG_QUERY,
  PAGE_COMPONENT_TYPES_BY_SLUG_QUERY,
  PageBySlugQueryProps,
} from '@/components/generic/Page/Page.query';
import { AppSettingsProps } from '@/components/settings/AppSettings/AppSettings';
import { APP_SETTINGS_QUERY } from '@/components/settings/AppSettings/AppSettings.query';
import { sanityAPI } from '@/utils/sanity-js-api/sanityAPI';

type PageBySlugProps = PageProps & {
  error404: Error404Props['page'];
};

export async function getData() {
  const preview = process.env.SANITY_API_PREVIEW_DRAFTS === 'true';

  const appSettings: AppSettingsProps = await sanityAPI({
    preview,
  }).fetch(APP_SETTINGS_QUERY);

  const primer: PageBySlugQueryProps = await sanityAPI({
    preview,
  }).fetch(
    PAGE_COMPONENT_TYPES_BY_SLUG_QUERY({
      slug: appSettings?.homePageSlug,
    }),
  );

  const payload: PageBySlugProps = await sanityAPI({ preview }).fetch(
    PAGE_BY_SLUG_QUERY({
      slug: appSettings?.homePageSlug,
      componentTypes: primer?.componentTypes,
    }),
  );

  if (!payload) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return {
    appSettings: appSettings,
    primer: primer,
    payload: payload,
  };
}

export default async function Home() {
  const data = await getData();

  console.log(data);

  return (
    <main>
      <h1>./root</h1>
      <h2>Home page slug: {data?.appSettings?.homePageSlug}</h2>
    </main>
  );
}
