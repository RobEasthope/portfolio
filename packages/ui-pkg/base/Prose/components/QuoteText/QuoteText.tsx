import { PortableTextComponents } from "@portabletext/react";
import { SanityBlock, SanityKeyed } from "sanity-codegen";

export type QuoteTextProps = Array<SanityKeyed<SanityBlock>>;

// MARKUP
export const QuoteText: PortableTextComponents = {
  block: { normal: ({ children }) => <p>{children}</p> },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
  },
};
