import type { PageTitle as rawPageTitleProps } from '~/components/types/sanity-schema';

import { Box } from '~/components/base/Box/Box';
import { Type } from '~/components/base/Type/Type';

// TYPES
export interface PageTitleProps extends rawPageTitleProps {
  heading: string;
}

export const PageTitle = ({ heading }: PageTitleProps) => {
  if (!heading) {
    return null;
  }

  return (
    <Box as="section" className="px-1">
      <Box as="div">
        <Box as="div" className="text-center">
          <Type as="h1" className="text-xl">
            {heading}
          </Type>

          <hr className="block w-3 h-0.125 bg-darkSaffron mx-auto mt-1 mb-2 border-none" />
        </Box>
      </Box>
    </Box>
  );
};

export default PageTitle;
