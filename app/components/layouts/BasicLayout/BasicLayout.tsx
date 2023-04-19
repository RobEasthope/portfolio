import { Box } from '~/components/base/Box/Box';

export type BasicLayoutProps = {
  children: React.ReactNode;
};

export const BasicLayout = ({ children }: BasicLayoutProps) => (
  <Box as="main" className="flex-grow">
    {children}
  </Box>
);
