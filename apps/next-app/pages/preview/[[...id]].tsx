import Custom404 from "pages/404";

import { Page, PageProps } from "ui-pkg/pages/Page/Page";
import { appGlobalsQuery } from "ui-pkg/settings/app-globals.queries";
import { getClient, overlayDrafts } from "apis-pkg/sanity-api/sanity.server";
import { AppGlobalsProps } from "ui-pkg/settings/Globals";
import { previewAnyPageByIdQuery } from "ui-pkg/pages/Preview/Preview.queries";

// TYPES
type PreviewPageBySlugProps = {
  data: {
    page: PageProps;
    globals: AppGlobalsProps;
  };
};

// MARKUP
export default function PageBySlug({ data }: PreviewPageBySlugProps) {
  if (data.page === null) {
    return <Custom404 />;
  }

  return (
    data?.page?._type === "Page" && <Page page={data?.page} globals={data?.globals} />
  );
}

// SSR CALL
export const getServerSideProps = async ({
  query,
  preview = false,
}: {
  query: { id: string[]; key: string };
  preview: boolean;
}) => {
  // If preview key is invalid return blank props.data.page object so 404 UI kicks in and ensure a form of security
  if (query?.key !== process.env.SANITY_STUDIO_PREVIEW_KEY) {
    return {
      props: {
        data: { page: null },
      },
    };
  }

  // Fetch global data
  const globals: AppGlobalsProps = await getClient(preview).fetch(appGlobalsQuery);

  // Fetch page data
  const page = overlayDrafts(
    await getClient(preview).fetch(previewAnyPageByIdQuery, {
      id: query?.id[0],
    })
  );

  return {
    // Page payload
    props: {
      data: { page: (page[0] as PageProps) || null, globals },
    },
  };
};
