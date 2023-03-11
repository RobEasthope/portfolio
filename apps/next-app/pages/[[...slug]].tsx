import { useRouter } from "next/router";

import { Error404 } from "ui-pkg/pages/Error404/Error404";
import { Page, PageProps } from "ui-pkg/pages/Page/Page";
import { Loading } from "ui-pkg/base/app/Loading/Loading";
import {
  getClient,
  overlayDrafts,
  sanityClient,
} from "apis-pkg/sanity-api/sanity.server";
import { appGlobalsQuery } from "ui-pkg/base/settings/app-globals.queries";
import { AppGlobalsProps, SettingsProps } from "ui-pkg/base/settings/Globals";
import { HeaderProps } from "ui-pkg/navigation/Header/Header";
import { GlobalMetadata } from "ui-pkg/types/sanity-schema";
import { pageRenderChecks } from "utils/pageRenderChecks";
import { createSlugFromQuery } from "apis-pkg/sanity-api/createSlugFromQuery";
import { pageBySlugQuery, pageSlugsQuery } from "ui-pkg/pages/Page/Page.queries";

// TYPES
type PageBySlugProps = {
  data: {
    page: PageProps;
    globals: AppGlobalsProps;
    homePageSlug: string;
  };
};

// MARKUP
export default function PageBySlug({ data }: PageBySlugProps) {
  const router = useRouter();
  const { isFallback } = router;
  const { page, globals, homePageSlug } = data;

  if (!pageRenderChecks({ data, currentRoute: router.asPath })) {
    return <Error404 />;
  }

  return (
    <>
      {isFallback && <Loading />}

      {!isFallback && page?._type === "Page" && (
        <Page page={page} globals={globals} homePageSlug={homePageSlug} />
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
        params: { slug: slug?.split("/").filter((p) => p) },
      });
    }
  }

  return {
    paths,
    fallback: "blocking",
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
        params?.slug?.length > 0 ? createSlugFromQuery(params?.slug) : homePageSlug,
    })
  );

  // Page payload
  return {
    props: {
      data: {
        page: (page[0] as PageProps) || null,
        globals,
        homePageSlug,
      },
      preview,
    },
    // ISR cache time
    revalidate: 60,
  };
};
