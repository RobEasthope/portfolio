import { HEADER_QUERY } from '@/components/navigation/Header/Header.query';
import './globals.css';
import type { Metadata } from 'next';
import { FOOTER_QUERY } from '@/components/navigation/Footer/Footer.query';
import groq from 'groq';
import { Header, HeaderProps } from '@/components/navigation/Header/Header';
import { Footer, FooterProps } from '@/components/navigation/Footer/Footer';
import { sanityAPI } from '@/utils/sanity-js-api/sanityAPI';
import { Box } from '@/components/_base/Box/Box';

export async function getData() {
  const token = process.env.SANITY_API_TOKEN;
  const preview =
    process.env.SANITY_API_PREVIEW_DRAFTS === 'true' ? { token } : undefined;

  const payload: { header: HeaderProps; footer: FooterProps } = await sanityAPI(
    { preview },
  ).fetch(groq`{
    "header": ${HEADER_QUERY},
    "footer": ${FOOTER_QUERY},
  }`);

  return {
    header: payload?.header || null,
    footer: payload?.footer || null,
  };
}

export const metadata: Metadata = {
  title: {
    template: '%s // Rob Easthope',
    default: '👋',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { header, footer } = await getData();

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/jpv8zzo.css" />
      </head>
      <Box
        as="body"
        className="flex min-h-screen w-full flex-col bg-white font-plantin"
      >
        <Header
          logo={header?.logo}
          primaryNavigation={header?.primaryNavigation}
          secondaryNavigation={header?.secondaryNavigation}
          appSettings={header?.appSettings}
        />
        <Box as="main" className="flex-grow">
          {children}
        </Box>
        <Footer
          footerNavigation={footer?.footerNavigation}
          copyrightText={footer?.copyrightText}
        />
      </Box>
    </html>
  );
}
