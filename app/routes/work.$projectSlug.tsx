import {
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from '@remix-run/react';
import { json } from '@vercel/remix';
import type { LoaderArgs } from '@vercel/remix';
import { cacheHeader } from 'pretty-cache-header';
import { blockPreview } from 'sanity-pills';
import { checkMetadata } from '~/utils/checkMetadata';
import { mergeMeta } from '~/utils/mergeMeta';

import type { SanityPageByIdQueryProps } from '~/types/SanityPageByIdQueryProps';

import { sanityAPI } from '~/sanity/sanity-js-api/sanityAPI';

import { urlFor } from '~/components/base/SanityImage/urlFor';

import type { MetadataFallbacksProps } from '~/components/settings/MetadataFallbacks/MetadataFallbacks';

import type { Error404Props } from '~/components/pages/Error404/Error404';
import {
  PAGE_BY_ID_QUERY,
  PAGE_COMPONENT_TYPES_BY_SLUG_QUERY,
} from '~/components/pages/Page/Page.queries';
import type { ProjectProps } from '~/components/pages/Project/Project';
import { Project } from '~/components/pages/Project/Project';
import { PROJECT_BY_SLUG_QUERY } from '~/components/pages/Project/Project.queries';

type ProjectBySlugProps = ProjectProps & {
  error404: Error404Props['page'];
  fallbacks: MetadataFallbacksProps;
};

export async function loader({ params }: LoaderArgs) {
  const payload: ProjectBySlugProps = await sanityAPI.fetch(
    PROJECT_BY_SLUG_QUERY,
    {
      slug: `work/${params?.projectSlug}`,
    },
  );

  if (!payload?.page || !payload.page?.displayProject) {
    throw new Response('Not Found', {
      status: 404,
    });
  }

  return json({
    page: payload?.page || null,
    header: payload?.header || null,
    footer: payload?.footer || null,
    fallbacks: payload?.fallbacks || null,
    error404: payload?.error404 || null,
  });
}

export const meta: V2_MetaFunction = ({
  matches,
  data,
}): V2_HtmlMetaDescriptor[] =>
  mergeMeta(
    matches,
    checkMetadata({
      title: data?.page?.title,
      description: blockPreview(data?.page?.projectText),
      image: data?.page?.thumbnailImage,
    }),
  );

export default function Index() {
  const { page, header, footer } = useLoaderData<typeof loader>();

  return <Project page={page} header={header} footer={footer} />;
}
