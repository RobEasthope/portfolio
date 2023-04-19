import { useLoaderData } from '@remix-run/react';
import type { V2_MetaFunction } from '@vercel/remix';
import { json } from '@vercel/remix';
import { cacheHeader } from 'pretty-cache-header';
import type { ReactNode } from 'react';
import { checkMetadata } from '~/utils/checkMetadata';
import { mergeMeta } from '~/utils/mergeMeta';

import type { SanityPageByIdQueryProps } from '~/types/SanityPageByIdQueryProps';

import { sanityAPI } from '~/sanity/sanity-js-api/sanityAPI';

import { Box } from '~/components/base/Box/Box';
import { urlFor } from '~/components/base/SanityImage/urlFor';

import type { FooterProps } from '~/components/navigation/Footer/Footer';
import { Footer } from '~/components/navigation/Footer/Footer';
import { FOOTER_QUERY } from '~/components/navigation/Footer/Footer.query';
import type { HeaderProps } from '~/components/navigation/Header/Header';
import { Header } from '~/components/navigation/Header/Header';
import { HEADER_QUERY } from '~/components/navigation/Header/Header.query';

import type { MetadataFallbacksProps } from '~/components/settings/MetadataFallbacks/MetadataFallbacks';

import type { Error404Props } from '~/components/pages/Error404/Error404';
import type { PageProps } from '~/components/pages/Page/Page';
import { Page } from '~/components/pages/Page/Page';
import {
  PAGE_BY_ID_QUERY,
  PAGE_COMPONENT_TYPES_BY_SLUG_QUERY,
} from '~/components/pages/Page/Page.queries';
import { HOME_PAGE_SLUG } from '~/components/pages/Page/constants/HOME_PAGE_SLUG';

export async function loader() {
  const header: HeaderProps = await sanityAPI.fetch(HEADER_QUERY);
  const footer: FooterProps = await sanityAPI.fetch(FOOTER_QUERY);

  return json({
    header: header || null,
    footer: footer || null,
  });
}

export const BasicLayout = ({ children }: { children: ReactNode }) => {
  const { header, footer } = useLoaderData<typeof loader>();
  return (
    <Box as="div" className="flex min-h-screen w-full flex-col bg-white">
      <Header
        logo={header?.logo}
        primaryNavigation={header?.primaryNavigation}
        secondaryNavigation={header?.secondaryNavigation}
      />

      <Box as="main" className="flex-grow">
        {children}
      </Box>

      {/* {slug !== HOME_PAGE_SLUG && ( */}
      <Footer
        footerNavigation={footer?.footerNavigation}
        copyrightText={footer?.copyrightText}
      />
      {/* )} */}
    </Box>
  );
};

export default BasicLayout;
