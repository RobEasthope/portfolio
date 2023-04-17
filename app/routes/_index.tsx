import { useLoaderData } from '@remix-run/react';
import type { V2_MetaFunction } from '@vercel/remix';
import { json } from '@vercel/remix';
import { cacheHeader } from 'pretty-cache-header';

import type { SanityPageByIdQueryProps } from '~/types/SanityPageByIdQueryProps';

import { sanityAPI } from '~/sanity/sanity-js-api/sanityAPI';

import type { MetadataSettingsProps } from '~/components/settings/MetadataSettingsProps';

import type { Error404Props } from '~/components/pages/Error404/Error404';
import type { PageProps } from '~/components/pages/Page/Page';
import { Page } from '~/components/pages/Page/Page';
import {
  PAGE_BY_ID_QUERY,
  PAGE_COMPONENT_TYPES_BY_SLUG_QUERY,
} from '~/components/pages/Page/Page.queries';
import { HOME_PAGE_SLUG } from '~/components/pages/Page/constants/HOME_PAGE_SLUG';

type PageBySlugProps = PageProps & {
  error404: Error404Props['page'];
  fallbacks: MetadataSettingsProps;
};

export async function loader() {
  const primer: SanityPageByIdQueryProps = await sanityAPI.fetch(
    PAGE_COMPONENT_TYPES_BY_SLUG_QUERY,
    {
      slug: HOME_PAGE_SLUG,
    },
  );

  const payload: PageBySlugProps = await sanityAPI.fetch(
    PAGE_BY_ID_QUERY({
      id: primer?.id,
      componentTypes: primer?.componentTypes,
    }),
  );

  return json({
    page: payload?.page || null,
    header: payload?.header || null,
    footer: payload?.footer || null,
    fallbacks: payload?.fallbacks || null,
    error404: payload?.error404 || null,
  });
}

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => [
  { title: data?.page?.title },
  {
    property: 'og:title',
    content: data?.page?.title,
  },
  {
    name: 'description',
    content: data?.page?.metadataDescription,
  },
];

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
  const { page, header, footer } = useLoaderData<typeof loader>();

  return <Page page={page} header={header} footer={footer} />;
}
