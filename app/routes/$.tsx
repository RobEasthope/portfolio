import type { LoaderArgs } from '@vercel/remix';
import { useLoaderData } from '@remix-run/react';
import { Page } from '~/components/pages/Page/Page';
import { sanityAPI } from '~/utils/sanity-js-api/sanityAPI';
import type { SanityPageByIdQueryProps } from '~/components/types/SanityPageByIdQueryProps';
import {
  PAGE_BY_ID_QUERY,
  PAGE_COMPONENT_TYPES_BY_SLUG_QUERY,
} from '~/components/pages/Page/Page.queries';

export const config = { runtime: 'edge' };

export const loader = async ({ request, params }: LoaderArgs) => {
  const primer: SanityPageByIdQueryProps = await sanityAPI.fetch(
    PAGE_COMPONENT_TYPES_BY_SLUG_QUERY,
    {
      slug:
        // If the router returns the app root pass in the home page slug. Other wise just pass in the page slug
        params?.slug?.length > 0
          ? createSlugFromQuery(params?.slug)
          : HOME_PAGE_SLUG,
    },
  );

  const payload = await sanityAPI
    .fetch(
      PAGE_BY_ID_QUERY({
        id: primer?.id,
        componentTypes: primer?.componentTypes,
      }),
    )
    .then((result) => (result ? articleZ.parse(result) : null));

  if (!payload) {
    throw new Response(`Page not found`, { status: 404 });
  }

  return json({
    payload,
    query: preview ? articleQuery : null,
    params: preview ? params : null,
  });
};

export default function PageRoute() {
  const { payload, query, params } = useLoaderData<typeof loader>();

  console.log(params);

  // if (preview && query && params && token) {
  //   return (
  //     <PreviewSuspense fallback={<Article {...article} />}>
  //       <PreviewArticle query={query} params={params} token={token} />
  //     </PreviewSuspense>
  //   );
  // }

  return (
    <main>
      <h1>foo</h1>
    </main>
  );

  // return <Page page={payload?.page} header={payload?.header} />;
}
