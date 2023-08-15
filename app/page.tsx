import { AppSettingsProps } from '@/components/settings/AppSettings/AppSettings';
import { APP_SETTINGS_QUERY } from '@/components/settings/AppSettings/AppSettings.query';
import { sanityAPI } from '@/utils/sanity-js-api/sanityAPI';

export async function getData() {
  const data: AppSettingsProps = await sanityAPI({ preview: false }).fetch(
    APP_SETTINGS_QUERY,
  );

  if (!data) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <h1>./root</h1>
      <h2>Home page slug: {data.homePageSlug}</h2>
    </main>
  );
}
