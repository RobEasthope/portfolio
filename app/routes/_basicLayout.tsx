import { useLoaderData } from '@remix-run/react';
import { json } from '@vercel/remix';
import type { ReactNode } from 'react';

import { sanityAPI } from '~/utils/sanity-js-api/sanityAPI';

import { Box } from '~/components/base/Box/Box';

import type { FooterProps } from '~/components/navigation/Footer/Footer';
import { Footer } from '~/components/navigation/Footer/Footer';
import { FOOTER_QUERY } from '~/components/navigation/Footer/Footer.query';
import type { HeaderProps } from '~/components/navigation/Header/Header';
import { Header } from '~/components/navigation/Header/Header';
import { HEADER_QUERY } from '~/components/navigation/Header/Header.query';

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
