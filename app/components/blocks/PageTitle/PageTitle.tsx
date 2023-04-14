
import { Box } from '~/components/base/Box/Box';
import { Type } from '~/components/base/Type/Type';
import type { PageTitle as rawPageTitleProps } from '~/components/types/sanity-schema';

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
          <Type as="h1">{heading}</Type>

          <span className="block w-2 h-[2px] bg-black mx-auto mt-1 mb-2" />
        </Box>
      </Box>
    </Box>
  );
};

export default PageTitle;
