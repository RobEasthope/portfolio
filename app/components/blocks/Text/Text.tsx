import { Box } from "~/components/base/Box/Box";
import { Prose } from "~/components/base/Prose/Prose";
import {
  FullTextComponents,
  FullTextProps,
} from "~/components/base/Prose/components/FullText/FullText";

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
        components={FullTextComponents}
        className="mx-auto font-serif text-md"
      />
    </Box>
  );
};

export default Text;
