import { Footer, FooterProps } from "ui-pkg/navigation/Footer/Footer";
import { Header, HeaderProps } from "ui-pkg/navigation/Header/Header";
import { Box } from "ui-pkg/base/Box/Box";

export type BasicLayoutProps = {
  children: React.ReactNode;
  header: HeaderProps;
  footer: FooterProps;
};

export const BasicLayout = ({ children, header, footer }: BasicLayoutProps) => (
  <Box as="div" className="flex min-h-screen w-full flex-col bg-white">
    <Header
      logo={header?.logo}
      primaryNavigation={header?.primaryNavigation}
      secondaryNavigation={header?.secondaryNavigation}
    />

    <Box as="main" className="flex-grow">
      {children}
    </Box>

    {slug?.current !== homePageSlug && <Footer copyrightText={footer?.copyrightText} />}
  </Box>
);
