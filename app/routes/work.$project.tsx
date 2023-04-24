import { useLoaderData } from '@remix-run/react';
import { json } from '@vercel/remix';
import type {
  LoaderArgs,
  V2_HtmlMetaDescriptor,
  V2_MetaFunction,
} from '@vercel/remix';
import { blockPreview } from 'sanity-pills';
import { checkMetadata } from '~/utils/checkMetadata';
import { mergeMeta } from '~/utils/mergeMeta';

import { sanityAPI } from '~/sanity/sanity-js-api/sanityAPI';

import type { MetadataFallbacksProps } from '~/components/settings/MetadataFallbacks/MetadataFallbacks';

import type { Error404Props } from '~/components/pages/Error404/Error404';
import type { ProjectProps } from '~/components/pages/Project/Project';
import { Project } from '~/components/pages/Project/Project';
import { PROJECT_BY_SLUG_QUERY } from '~/components/pages/Project/Project.query';

type ProjectBySlugProps = ProjectProps & {
  error404: Error404Props['page'];
  fallbacks: MetadataFallbacksProps;
};

export async function loader({ params }: LoaderArgs) {
  const payload: ProjectBySlugProps = await sanityAPI.fetch(
    PROJECT_BY_SLUG_QUERY,
    {
      slug: `work/${params?.project as string}`,
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

// eslint-disable-next-line camelcase
export const meta: V2_MetaFunction = ({
  matches,
  data,
}: {
  matches: string[];
  data: ProjectProps;
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
