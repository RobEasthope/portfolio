import { Footer, FooterProps } from "ui-pkg/navigation/Footer/Footer";
import { Header, HeaderProps } from "ui-pkg/navigation/Header/Header";
import { Box } from "ui-pkg/base/Box/Box";
import { HOME_PAGE_SLUG } from "ui-pkg/pages/Page/constants/HOME_PAGE_SLUG";

export type BasicLayoutProps = {
  children: React.ReactNode;
  header: HeaderProps;
  footer: FooterProps;
  slug?: string;
};

export const BasicLayout = ({ children, header, footer, slug }: BasicLayoutProps) => (
  <Box as="div" className="flex min-h-screen w-full flex-col bg-white">
    <Header
      logo={header?.logo}
      primaryNavigation={header?.primaryNavigation}
      secondaryNavigation={header?.secondaryNavigation}
    />

    <Box as="main" className="flex-grow">
      {children}
    </Box>

    {slug !== HOME_PAGE_SLUG && (
      <Footer
        footerNavigation={footer?.footerNavigation}
        copyrightText={footer?.copyrightText}
      />
    )}
  </Box>
);
