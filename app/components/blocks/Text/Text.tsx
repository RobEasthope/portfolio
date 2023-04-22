import { Box } from '~/components/base/Box/Box';
import { Prose } from '~/components/base/Prose/Prose';
import type { FullTextProps } from '~/components/base/Prose/components/FullText/FullText';
import { FullTextComponents } from '~/components/base/Prose/components/FullText/FullText';

import { HOME_PAGE_SLUG } from '~/components/pages/Page/constants/HOME_PAGE_SLUG';

// TYPES
export type TextProps = {
  _type: 'Text';
  text?: FullTextProps;
};

export const Text = ({ text }: TextProps) => {
  if (!text) {
    return null;
  }

  return (
    <Box as="section" blockSpacing>
      <Prose
        as="div"
        content={text}
        components={FullTextComponents}
        className="mx-auto font-serif text-md"
        homePageSlug={HOME_PAGE_SLUG}
      />
    </Box>
  );
};

export default Text;
