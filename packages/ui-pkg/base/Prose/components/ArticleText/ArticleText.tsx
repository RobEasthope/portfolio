/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/naming-convention */
import dynamic from "next/dynamic";
import { PortableTextComponents } from "@portabletext/react";
import { ImageProps } from "ui-pkg/blocks/Image/Image";
import { YoutubeVideoProps } from "ui-pkg/blocks/YoutubeVideo/YoutubeVideo";
import { Type } from "ui-pkg/base/Type/Type";
import { InternalLink } from "ui-pkg/base/InternalLink/InternalLink";
import { ExternalLink } from "ui-pkg/base/ExternalLink/ExternalLink";
import { EmailLink } from "ui-pkg/base/EmailLink/EmailLink";
import { SanityBlock, SanityKeyed } from "sanity-codegen";

const Image = dynamic(() => import("ui-pkg/blocks/Image/Image"));
const YoutubeVideo = dynamic(() => import("ui-pkg/blocks/YoutubeVideo/YoutubeVideo"));

export type ArticleTextProps = Array<
  SanityKeyed<SanityBlock> | SanityKeyed<ImageProps> | SanityKeyed<YoutubeVideoProps>
>;

// MARKUP
export const ArticleTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <Type as="h2" className="mb-1 font-sans text-2xl font-bold">
        {children}
      </Type>
    ),
    h3: ({ children }) => (
      <Type as="h3" className="mb-1 font-sans text-xl font-bold">
        {children}
      </Type>
    ),
    h4: ({ children }) => (
      <Type as="h4" className="mb-1 font-sans text-lg font-bold">
        {children}
      </Type>
    ),
    normal: ({ children }) => <Type as="p">{children}</Type>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-medium text-inherit">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-inherit">{children}</em>,

    // Links
    ExternalLink: ({ children, value }) => (
      <ExternalLink
        href={value.url}
        className="text-inherit underline decoration-2 hover:underline-offset-2"
      >
        {children}
      </ExternalLink>
    ),
    InternalLink: ({ children, value }) => (
      <InternalLink
        href={value?.page?.slug?.current}
        className="text-inherit underline decoration-2 hover:underline-offset-2"
      >
        {children}
      </InternalLink>
    ),
    EmailLink: ({ children, value }) => (
      <EmailLink
        email={value?.email}
        className="text-inherit underline decoration-2 hover:underline-offset-2"
      >
        {children}
      </EmailLink>
    ),
  },
  types: {
    Image: ({ value }: { value: ImageProps }) => {
      const { image, maxWidth, aspectRatio, _type } = value;

      return (
        <Image
          image={image}
          maxWidth={maxWidth}
          aspectRatio={aspectRatio}
          _type={_type}
        />
      );
    },
    YoutubeVideo: ({ value }: { value: YoutubeVideoProps }) => {
      const { url, caption, maxWidth, _type } = value;

      return (
        <YoutubeVideo url={url} caption={caption} maxWidth={maxWidth} _type={_type} />
      );
    },
  },
};