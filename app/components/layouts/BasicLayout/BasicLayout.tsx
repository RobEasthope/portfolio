import { Box } from '~/components/base/Box/Box';

import type { FooterProps } from '~/components/navigation/Footer/Footer';
import { Footer } from '~/components/navigation/Footer/Footer';
import type { HeaderProps } from '~/components/navigation/Header/Header';
import { Header } from '~/components/navigation/Header/Header';

export type BasicLayoutProps = {
  children: React.ReactNode;
  header: HeaderProps;
  footer: FooterProps;
  slug?: string;
};

export const BasicLayout = ({
  children,
  header,
  footer,
  slug,
}: BasicLayoutProps) => (
  <Box as="div" className="flex min-h-screen w-full flex-col bg-white">
    <Header
      logo={header?.logo}
      primaryNavigation={header?.primaryNavigation}
      secondaryNavigation={header?.secondaryNavigation}
      appSettings={header?.appSettings}
    />

    <Box as="main" className="flex-grow">
      {children}
    </Box>

    {slug !== header?.appSettings?.homePageSlug && (
      <Footer
        footerNavigation={footer?.footerNavigation}
        copyrightText={footer?.copyrightText}
      />
    )}
  </Box>
);
