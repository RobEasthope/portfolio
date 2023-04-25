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

import type { SanityPageByIdQueryProps } from '~/types/SanityPageByIdQueryProps';

import { checkMetadata } from '~/utils/checkMetadata';
import { mergeMeta } from '~/utils/mergeMeta';
import { sanityAPI } from '~/utils/sanity-js-api/sanityAPI';

import { CV } from '~/components/about/CV/CV';
import {
  CV_BY_ID_QUERY,
  CV_COMPONENT_TYPES_BY_SLUG_QUERY,
} from '~/components/about/CV/CV.query';

type PageBySlugProps = PageProps & {
  error404: Error404Props['page'];
};

export async function loader({ params }: LoaderArgs) {
  const primer: SanityPageByIdQueryProps = await sanityAPI.fetch(
    CV_COMPONENT_TYPES_BY_SLUG_QUERY,
    {
      slug: params?.cv,
    },
  );

  const payload: PageBySlugProps = await sanityAPI.fetch(
    CV_BY_ID_QUERY({
      id: primer?.id,
      componentTypes: primer?.componentTypes,
    }),
  );

  if (!payload?.page) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('Not Found', {
      status: 404,
    });
  }

  return json({
    page: payload?.page || null,
    error404: payload?.error404 || null,
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
      title: data?.page?.title,
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

export default function CVRoute() {
  const { page } = useLoaderData<typeof loader>();

  return <CV page={page} />;
}
