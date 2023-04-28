import { Outlet, useLoaderData } from '@remix-run/react';
import { json } from '@vercel/remix';
import groq from 'groq';

import { sanityAPI } from '~/utils/sanity-js-api/sanityAPI';

import { Box } from '~/components/base/Box/Box';

import type { FooterProps } from '~/components/navigation/Footer/Footer';
import { Footer } from '~/components/navigation/Footer/Footer';
import { FOOTER_QUERY } from '~/components/navigation/Footer/Footer.query';
import type { HeaderProps } from '~/components/navigation/Header/Header';
import { Header } from '~/components/navigation/Header/Header';
import { HEADER_QUERY } from '~/components/navigation/Header/Header.query';

export async function loader() {
  const payload: { header: HeaderProps; footer: FooterProps } =
    await sanityAPI.fetch(groq`{
    "header": ${HEADER_QUERY},
    "footer": ${FOOTER_QUERY},
  }`);

  return json({
    header: payload?.header || null,
    footer: payload?.footer || null,
  });
}

export const HeaderAndFooterLayout = () => {
  const { header, footer } = useLoaderData<typeof loader>();
  return (
    <Box as="div" className="flex min-h-screen w-full flex-col bg-white">
      <Header
        logo={header?.logo}
        primaryNavigation={header?.primaryNavigation}
        secondaryNavigation={header?.secondaryNavigation}
        appSettings={header?.appSettings}
      />

      <Box as="main" className="flex-grow">
        <Outlet />
      </Box>

      <Footer
        footerNavigation={footer?.footerNavigation}
        copyrightText={footer?.copyrightText}
      />
    </Box>
  );
};

export default HeaderAndFooterLayout;
