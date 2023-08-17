import { Error404Props } from '@/components/generic/Error404/Error404';
import { Project, ProjectProps } from '@/components/work/Project/Project';
import {
  PROJECT_BY_SLUG_QUERY,
  PROJECT_SLUGS_QUERY,
} from '@/components/work/Project/Project.query';
import { sanityAPI } from '@/utils/sanity-js-api/sanityAPI';

type ProjectBySlugProps = ProjectProps & {
  error404: Error404Props['page'];
  url: string;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const preview = process.env.SANITY_API_PREVIEW_DRAFTS === 'true';
  const slugs: string[] = await sanityAPI({ preview }).fetch(
    PROJECT_SLUGS_QUERY,
  );

  return slugs.map((slug) => ({
    paths: slug,
  }));
}

export async function getData(params) {
  const preview = process.env.SANITY_API_PREVIEW_DRAFTS === 'true';

  const payload: ProjectBySlugProps = await sanityAPI({ preview }).fetch(
    PROJECT_BY_SLUG_QUERY,
    {
      slug: `work/${params?.project as string}`,
    },
  );

  console.log(payload);

  if (!payload?.page || !payload.page?.displayProject) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('Not Found', {
      status: 404,
    });
  }

  return {
    preview: preview,
    page: payload,
  };
}

export default async function PageBySlug({ params }) {
  const { page, preview } = await getData(params);

  return <Project page={page} />;
}
