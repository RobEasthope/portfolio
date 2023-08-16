import { Error404Props } from '@/components/generic/Error404/Error404';
import { Page, PageProps } from '@/components/generic/Page/Page';
import {
  PAGE_BY_SLUG_QUERY,
  PAGE_COMPONENT_TYPES_BY_SLUG_QUERY,
  PageBySlugQueryProps,
} from '@/components/generic/Page/Page.query';
import { PagePreview } from '@/components/generic/Page/PagePreview';
import { AppSettingsProps } from '@/components/settings/AppSettings/AppSettings';
import { APP_SETTINGS_QUERY } from '@/components/settings/AppSettings/AppSettings.query';
import { sanityAPI } from '@/utils/sanity-js-api/sanityAPI';

type PageBySlugProps = PageProps & {
  error404: Error404Props['page'];
};

export async function getData(params) {
  const preview = process.env.SANITY_API_PREVIEW_DRAFTS === 'true';

  const appSettings: AppSettingsProps = await sanityAPI({ preview }).fetch(
    APP_SETTINGS_QUERY,
  );

  if (params?.slug === appSettings?.homePageSlug) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('Not Found', {
      status: 404,
    });
  }

  const primer: PageBySlugQueryProps = await sanityAPI({ preview }).fetch(
    PAGE_COMPONENT_TYPES_BY_SLUG_QUERY({
      slug: params?.slug,
    }),
  );

  const payload: PageBySlugProps = await sanityAPI({ preview }).fetch(
    PAGE_BY_SLUG_QUERY({
      slug: params?.slug,
      componentTypes: primer?.componentTypes,
    }),
  );

  if (!payload) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('Not Found', {
      status: 404,
    });
  }

  return {
    homePageSlug: appSettings?.homePageSlug,
    preview: preview,
    primer: primer,
    page: payload,
  };
}

export default async function PageBySlug({
  params,
}: {
  params: { slug: string };
}) {
  const { page, preview, homePageSlug } = await getData(params);

  console.log(page);

  return <div>Slug: {params.slug}</div>;
}
