/* eslint-disable camelcase */
import { useLoaderData } from '@remix-run/react';
import { json } from '@vercel/remix';
import type {
  LoaderArgs,
  V2_HtmlMetaDescriptor,
  V2_MetaFunction,
} from '@vercel/remix';
import { cacheHeader } from 'pretty-cache-header';
import type { Error404Props } from '~/components/generic/Error404/Error404';
import type { PageProps } from '~/components/generic/Page/Page';
import { Page } from '~/components/generic/Page/Page';
import type { PageBySlugQueryProps } from '~/components/generic/Page/Page.query';
import {
  PAGE_BY_ID_QUERY,
  PAGE_BY_SLUG_QUERY,
  PAGE_COMPONENT_TYPES_BY_SLUG_QUERY,
} from '~/components/generic/Page/Page.query';
import { PagePreview } from '~/components/generic/Page/PagePreview';

import { METADATA_HARD_CODED_FALLBACKS } from '~/constants/METADATA_HARD_CODED_FALLBACKS';

import { checkMetadata } from '~/utils/checkMetadata';
import { mergeMeta } from '~/utils/mergeMeta';
import { sanityAPI } from '~/utils/sanity-js-api/sanityAPI';

import type { AppSettingsProps } from '~/components/settings/AppSettings/AppSettings';
import { APP_SETTINGS_QUERY } from '~/components/settings/AppSettings/AppSettings.query';

type PageBySlugProps = PageProps & {
  error404: Error404Props['page'];
};

export async function loader({ params }: LoaderArgs) {
  const preview = process.env.SANITY_API_PREVIEW_DRAFTS === 'true';
  if (!params?.page) {
    throw new Error('I guess all of the routing has collapsed? 🤷‍♂️');
  }

  const appSettings: AppSettingsProps = await sanityAPI({ preview }).fetch(
    APP_SETTINGS_QUERY,
  );

  if (params?.page === appSettings?.homePageSlug) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('Not Found', {
      status: 404,
    });
  }

  const primer: PageBySlugQueryProps = await sanityAPI({ preview }).fetch(
    PAGE_COMPONENT_TYPES_BY_SLUG_QUERY({
      slug: params?.page,
    }),
  );

  const payload: PageBySlugProps = await sanityAPI({ preview }).fetch(
    PAGE_BY_SLUG_QUERY({
      slug: params?.page,
      componentTypes: primer?.componentTypes,
    }),
  );

  if (!payload) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('Not Found', {
      status: 404,
    });
  }

  return json({
    page: payload || null,
    error404: payload?.error404 || null,
    preview: preview || null,
  });
}

export const meta: V2_MetaFunction = ({
  matches,
  data,
}: {
  matches: string[];
  data: PageProps;
}): V2_HtmlMetaDescriptor[] =>
  mergeMeta(
    matches,
    checkMetadata({
      title: `${data?.page?.title}${METADATA_HARD_CODED_FALLBACKS?.SITE_TITLE}`,
      description: data?.page?.metadataDescription,
      image: data?.page?.metadataImage,
    }),
  );

export function headers() {
  return {
    'Cache-Control': cacheHeader({
      maxAge: '30days',
      staleWhileRevalidate: '1day',
      staleIfError: '7days',
    }),
  };
}

export default function Index() {
  const { page, preview } = useLoaderData<typeof loader>();

  return preview ? (
    <PagePreview page={page} preview={preview} />
  ) : (
    <Page page={page} />
  );
}
