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
import { pageRenderChecks } from '@/NEXT/utils/pageRenderChecks';
import { createSlugFromQuery } from '@/UTILS/sanity-api/createSlugFromQuery';
import { pageBySlugQuery, pageSlugsQuery } from '@/UI/pages/Page/Page.queries';

// TYPES
type PageBySlugProps = {
  data: {
    page: PageProps;
    globals: AppGlobalsProps;
  };
};

// MARKUP
export default function PageBySlug({ data }: PageBySlugProps) {
  const router = useRouter();
  const { isFallback } = router;

  console.log(router.asPath);

  if (!pageRenderChecks({ data, currentRoute: router.asPath })) {
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

// SSG CALLS
export const getStaticPaths = async () => {
  const paths = [];

  const pages = (await sanityClient.fetch(pageSlugsQuery)) as [PageProps];

  const homePageRoute: { homePageSlug: string } = await sanityClient.fetch(
    `*[_type== 'Settings'][0]{
      "homePageSlug": rawHomePageRef->slug.current
    }`
  );

  for (const page of pages) {
    const slug = page?.slug?.current;

    if (slug !== homePageRoute.homePageSlug) {
      paths.push({
        params: { slug: slug?.split('/').filter((p) => p) },
      });
    }
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

  // Pick out home page slug
  const homePageSlug = globals?.settings?.homePageSlug;

  // Fetch page data
  const page = overlayDrafts(
    await getClient(preview).fetch(pageBySlugQuery, {
      slug:
        // If the router returns the app root pass in the home page slug. Other wise just pass in the page slug
        params?.slug?.length > 0
          ? createSlugFromQuery(params?.slug)
          : homePageSlug,
    })
  );

  // Page payload
  return {
    props: {
      data: { page: (page[0] as PageProps) || null, globals },
      preview,
    },
    // ISR cache time
    revalidate: 60,
  };
};
