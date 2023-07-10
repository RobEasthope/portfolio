/* eslint-disable camelcase */
import { useLoaderData } from '@remix-run/react';
import { json } from '@vercel/remix';
import type {
  LoaderArgs,
  V2_HtmlMetaDescriptor,
  V2_MetaFunction,
} from '@vercel/remix';
import { cacheHeader } from 'pretty-cache-header';
import type { PageProps } from '~/components/generic/Page/Page';
import type { PageBySlugQueryProps } from '~/components/generic/Page/Page.query';

import { checkMetadata } from '~/utils/checkMetadata';
import { mergeMeta } from '~/utils/mergeMeta';
import { sanityAPI } from '~/utils/sanity-js-api/sanityAPI';

import type { CVProps } from '~/components/about/CV/CV';
import { CV } from '~/components/about/CV/CV';
import {
  CV_BY_SLUG_QUERY,
  CV_COMPONENT_TYPES_BY_SLUG_QUERY,
} from '~/components/about/CV/CV.query';
import { CVPreview } from '~/components/about/CV/CVPreview';

type CVBySlugProps = CVProps;

export async function loader({ params }: LoaderArgs) {
  const preview = process.env.SANITY_API_PREVIEW_DRAFTS === 'true';
  const url = `${process.env.VERCEL_URL || ''}/${params?.cv || ''}`;

  if (!params?.cv) {
    throw new Error('I guess all of the routing has collapsed? 🤷‍♂️');
  }

  const primer: PageBySlugQueryProps = await sanityAPI({ preview }).fetch(
    CV_COMPONENT_TYPES_BY_SLUG_QUERY({
      slug: params?.cv,
    }),
  );

  const payload: CVBySlugProps = await sanityAPI({ preview }).fetch(
    CV_BY_SLUG_QUERY({
      slug: params?.cv,
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
    preview,
    url: url || null,
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
      title: 'Rob Easthope',
      description: data?.page?.metadataDescription,
      image: data?.page?.metadataImage,
      url: data?.url,
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
    <CVPreview page={page} preview={preview} />
  ) : (
    <CV page={page} />
  );
}
