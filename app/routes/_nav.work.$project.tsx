/* eslint-disable camelcase */
import { useLoaderData } from '@remix-run/react';
import { json } from '@vercel/remix';
import type {
  LoaderArgs,
  V2_HtmlMetaDescriptor,
  V2_MetaFunction,
} from '@vercel/remix';
import { blockPreview } from 'sanity-pills';
import type { Error404Props } from '~/components/generic/Error404/Error404';
import type { ProjectProps } from '~/components/work/Project/Project';
import { Project } from '~/components/work/Project/Project';
import { PROJECT_BY_SLUG_QUERY } from '~/components/work/Project/Project.query';

import { METADATA_HARD_CODED_FALLBACKS } from '~/constants/METADATA_HARD_CODED_FALLBACKS';

import { checkMetadata } from '~/utils/checkMetadata';
import { mergeMeta } from '~/utils/mergeMeta';
import { sanityAPI } from '~/utils/sanity-js-api/sanityAPI';

type ProjectBySlugProps = ProjectProps & {
  error404: Error404Props['page'];
  url: string;
};

export async function loader({ params }: LoaderArgs) {
  const preview = process.env.SANITY_API_PREVIEW_DRAFTS === 'true';
  const url = `${process.env.VERCEL_URL || ''}/${params?.project || ''}`;

  const payload: ProjectBySlugProps = await sanityAPI({ preview }).fetch(
    PROJECT_BY_SLUG_QUERY,
    {
      slug: `work/${params?.project as string}`,
    },
  );

  if (!payload?.page || !payload.page?.displayProject) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('Not Found', {
      status: 404,
    });
  }

  return json({
    page: payload?.page || null,
    error404: payload?.error404 || null,
    url: url || null,
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
      title: `${data?.page?.title || ''}${
        METADATA_HARD_CODED_FALLBACKS?.SITE_TITLE
      }`,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      description: blockPreview(data?.page?.projectText),
      image: data?.page?.thumbnailImageForMetadata,
      url: data?.url,
    }),
  );

export default function Index() {
  const { page } = useLoaderData<typeof loader>();

  return <Project page={page} />;
}
