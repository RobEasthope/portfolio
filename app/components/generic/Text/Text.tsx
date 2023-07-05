import { Box } from '~/components/_base/Box/Box';
import { Prose } from '~/components/_base/Prose/Prose';
import type { FullTextProps } from '~/components/_base/Prose/components/FullText/FullText';
import { FullTextComponents } from '~/components/_base/Prose/components/FullText/FullText';

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
        className="mx-auto font-serif"
      />
    </Box>
  );
};

export default Text;
