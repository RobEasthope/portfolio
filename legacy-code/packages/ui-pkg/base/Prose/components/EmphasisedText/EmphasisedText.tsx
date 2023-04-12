import { PortableTextComponents } from "@portabletext/react";
import { SanityBlock, SanityKeyed } from "sanity-codegen";

export type EmphasisedTextProps = Array<SanityKeyed<SanityBlock>>;

// MARKUP
export const EmphasisedText: PortableTextComponents = {
  block: { normal: ({ children }) => <span>{children}</span> },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
  },
};