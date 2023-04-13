import type { LoaderArgs } from '@vercel/remix';
import { useLoaderData } from '@remix-run/react';
import type { HeaderProps } from '~/components/navigation/Header/Header';
import { Header } from '~/components/navigation/Header/Header';
import { sanityAPI } from '~/utils/sanity-js-api/sanityAPI';
import { HEADER_QUERY } from '~/components/navigation/Header/Header.query';

export const config = { runtime: 'edge' };

export async function loader() {
  const header: HeaderProps = await sanityAPI.fetch(HEADER_QUERY);

  return {
    header,
  };
}

export default function Index() {
  const { header } = useLoaderData<typeof loader>();

  return (
    <>
      <Header
        logo={header?.logo}
        primaryNavigation={header?.primaryNavigation}
        secondaryNavigation={header?.secondaryNavigation}
      />
      <main>
        <h1 className="text-red-400">foo</h1>
      </main>
    </>
  );
}
