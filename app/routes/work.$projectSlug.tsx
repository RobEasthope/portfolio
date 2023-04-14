import { json } from '@vercel/remix';
import type { LoaderArgs } from '@vercel/remix';
import {
  useLoaderData,
  useRouteError,
  isRouteErrorResponse,
} from '@remix-run/react';
import { cacheHeader } from 'pretty-cache-header';
import { sanityAPI } from '~/sanity/sanity-js-api/sanityAPI';
import type { SanityPageByIdQueryProps } from '~/types/SanityPageByIdQueryProps';
import {
  PAGE_BY_ID_QUERY,
  PAGE_COMPONENT_TYPES_BY_SLUG_QUERY,
} from '~/components/pages/Page/Page.queries';
import type { Error404Props } from '~/components/pages/Error404/Error404';
import type { MetadataSettingsProps } from '~/components/settings/MetadataSettingsProps';
import type { ProjectProps } from '~/components/pages/Project/Project';
import { Project } from '~/components/pages/Project/Project';
import { PROJECT_BY_SLUG_QUERY } from '~/components/pages/Project/Project.queries';

type ProjectBySlugProps = ProjectProps & {
  error404: Error404Props['page'];
  fallbacks: MetadataSettingsProps;
};

export async function loader({ params }: LoaderArgs) {
  const payload: ProjectBySlugProps = await sanityAPI.fetch(
    PROJECT_BY_SLUG_QUERY,
    {
      slug: params?.projectSlug,
    },
  );

  return json({
    page: payload?.page || null,
    header: payload?.header || null,
    footer: payload?.footer || null,
    fallbacks: payload?.fallbacks || null,
    error404: payload?.error404 || null,
  });
}

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

  return <Project page={page} header={header} footer={footer} />;
}
