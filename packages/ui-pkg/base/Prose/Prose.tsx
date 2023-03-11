import { PortableText, PortableTextComponents } from "@portabletext/react";
import { Box } from "ui-pkg/base/Box/Box";

export type ProseProps = {
  as: string;
  className?: string;
  content: any;
  components: unknown;
};

export const Prose = ({ as = "div", content, components, className }: ProseProps) => {
  if (!content) {
    return null;
  }

  return (
    <Box as={as} className={`prose ${className || ""}`}>
      <PortableText
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        value={content}
        components={components as PortableTextComponents}
      />
    </Box>
  );
};
