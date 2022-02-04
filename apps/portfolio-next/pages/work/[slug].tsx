import Custom404 from 'pages/404';
import { useRouter } from 'next/router';

import { Page, PageProps } from '@/UI/pages/Page/Page';
import { Loading } from '@/UI/base/app/Loading/Loading';
import {
  getClient,
  overlayDrafts,
  sanityClient,
} from '@/UTILS/sanity-api/sanity.server';
import { appGlobalsQuery } from '@/UI/base/settings/app-globals.queries';
import { AppGlobalsProps, SettingsProps } from '@/UI/base/settings/Globals';
import { HeaderProps } from '@/UI/navigation/Header/Header';
import { GlobalMetadata } from '@/UI/types/sanity-schema';
import {
  projectBySlugQuery,
  projectSlugsQuery,
} from '@/UI/pages/Project/Project.queries';

// TYPES
type ProjectBySlugProps = {
  data: {
    page: PageProps;
    globals: AppGlobalsProps;
  };
};

// MARKUP
export default function ProjectBySlug({ data }: ProjectBySlugProps) {
  const router = useRouter();
  const { isFallback } = router;
  const { page, globals } = data;

  if (!data.page) {
    return <Custom404 />;
  }

  return (
    <>
      {isFallback && <Loading />}

      {!isFallback && page?._type === 'Page' && (
        <Page page={page} globals={globals} />
      )}
    </>
  );
}

// SSG CALLS
export const getStaticPaths = async () => {
  const paths = [];

  const pages = (await sanityClient.fetch(projectSlugsQuery)) as [PageProps];

  for (const page of pages) {
    const slug = page?.slug?.current;

    paths.push({
      params: { slug },
    });
  }

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({
  params,
  preview = false,
}: {
  params: { slug: string[] };
  preview: boolean;
}) => {
  // Fetch global data
  const globals: {
    header: HeaderProps;
    globals: GlobalMetadata;
    settings: SettingsProps;
  } = await getClient(preview).fetch(appGlobalsQuery);

  // Fetch project data
  const project = overlayDrafts(
    await getClient(preview).fetch(projectBySlugQuery, {
      slug: params?.slug,
    })
  );

  // Page payload
  return {
    props: {
      data: { page: (project[0] as PageProps) || null, globals },
      preview,
    },
    // ISR cache time
    revalidate: 60,
  };
};
