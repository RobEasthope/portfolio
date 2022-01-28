import Custom404 from 'pages/404';
import { useRouter } from 'next/router';

import { Page, PageProps } from '@/UI/pages/Page/Page';
import { Loading } from '@/UI/base/app/Loading/Loading';
import { pageSlugsQuery } from '@/UI/pages/Page/Page.queries';
import {
  getClient,
  overlayDrafts,
  sanityClient,
} from '@/UTILS/sanity-api/sanity.server';
import { selectSanityQuery } from '@/TRQ/sanity-api/selectSanityQuery';

import { appGlobalsQuery } from '@/UI/base/settings/app-globals.queries';
import { AppGlobalsProps, SettingsProps } from '@/UI/base/settings/Globals';
import { HeaderProps } from '@/UI/navigation/Header/Header';
import { GlobalMetadata } from '@/UI/types/sanity-schema';

type PageBySlugProps = {
  data: {
    page: PageProps;
    globals: AppGlobalsProps;
  };
};

export default function PageBySlug({ data }: PageBySlugProps) {
  const router = useRouter();
  const { isFallback } = router;

  if (data.page === null) {
    return <Custom404 />;
  }

  return (
    <>
      {isFallback && <Loading />}

      {!isFallback && data?.page?._type === 'Page' && (
        <Page page={data?.page} globals={data?.globals} />
      )}
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = [];

  const pages = (await sanityClient.fetch(pageSlugsQuery)) as [PageProps];

  for (const page of pages) {
    const slug = page?.slug?.current;

    paths.push({
      params: { slug: slug?.split('/').filter((p) => p) },
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
  const globals: {
    header: HeaderProps;
    globals: GlobalMetadata;
    settings: SettingsProps;
  } = await getClient(preview).fetch(appGlobalsQuery);

  const { sanityQuery, queryParams } = selectSanityQuery(
    params?.slug || [],
    globals?.settings?.homePageSlug
  );

  const page = overlayDrafts(
    await getClient(preview).fetch(sanityQuery, queryParams)
  );

  return {
    props: {
      data: { page: (page[0] as PageProps) || null, globals },
      preview,
    },
    revalidate: 60,
  };
};
