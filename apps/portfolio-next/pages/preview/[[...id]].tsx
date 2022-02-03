import Custom404 from 'pages/404';

import { Page, PageProps } from '@/UI/pages/Page/Page';
import { appGlobalsQuery } from '@/UI/base/settings/app-globals.queries';
import { getClient, overlayDrafts } from '@/UTILS/sanity-api/sanity.server';
import { AppGlobalsProps } from '@/UI/base/settings/Globals';
import { groq } from 'next-sanity';

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
    data?.page?._type === 'Page' && (
      <Page page={data?.page} globals={data?.globals} />
    )
  );
}

// QUERY
const previewAnyPageByIdQuery = groq`
  *[_type in ["Page"] && _id == $id]{
    ...,
    "sections": rawSections[]{
      ...,
      "link": rawLink[0]{..., "to": {...internalUID->{...},  }},
      "bkg": rawBkg->,
      "cards": rawCards[]{
        ...,
        "link": rawLink[0]{..., "to": {...internalUID->{...},  }},
        "bkg": rawBkg->,
      },
      "muxVideo": rawMuxVideo.asset->,
    }
  }
`;

// SSR CALL
export const getServerSideProps = async ({
  query,
  preview = false,
}: {
  query: { id: string[]; key: string };
  preview: boolean;
}) => {
  // If preview key is invalid return blank props.data.page object so 404 UI kicks in
  if (query?.key !== process.env.SANITY_STUDIO_PREVIEW_KEY) {
    return {
      props: {
        data: { page: null },
      },
    };
  }

  const globals: AppGlobalsProps = await getClient(preview).fetch(
    appGlobalsQuery
  );

  const page = overlayDrafts(
    await getClient(preview).fetch(previewAnyPageByIdQuery, {
      id: query?.id[0],
    })
  );

  return {
    props: {
      data: { page: (page[0] as PageProps) || null, globals },
    },
  };
};
