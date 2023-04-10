import { Box } from "ui-pkg/base/Box/Box";
import { Prose } from "ui-pkg/base/Prose/Prose";
import { ArticleTextComponents } from "ui-pkg/base/Prose/components/ArticleText/ArticleText";
import { FullTextProps } from "ui-pkg/base/Prose/components/FullText/FullText";

// TYPES
export type TextProps = {
  _type: "Text";
  text?: FullTextProps;
};

export const Text = ({ text }: TextProps) => {
  if (!text) {
    return null;
  }

  return (
    <Box as="section" className="px-1 py-1">
      <Prose
        as="div"
        content={text}
        components={ArticleTextComponents}
        className="mx-auto font-serif text-md"
      />
    </Box>
  );
};

export default Text;
