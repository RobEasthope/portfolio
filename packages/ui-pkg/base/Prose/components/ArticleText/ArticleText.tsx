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
import { Box } from "ui-pkg/base/Box/Box";

const Image = dynamic(() => import("ui-pkg/blocks/Image/Image"));
const YoutubeVideo = dynamic(() => import("ui-pkg/blocks/YoutubeVideo/YoutubeVideo"));

// MARKUP
export const ArticleTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,

    h2: ({ children }) => <Type as="h2">{children}</Type>,
    h3: ({ children }) => <Type as="h3">{children}</Type>,
    h4: ({ children }) => <Type as="h4">{children}</Type>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-gilroyBold text-inherit">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-inherit">{children}</em>,

    // Links
    ExternalLink: ({ children, value }) => (
      <ExternalLink href={value.url} className="text-inherit hover:text-aaltoLightBlue">
        {children}
      </ExternalLink>
    ),
    InternalLink: ({ children, value }) => (
      <InternalLink
        href={value?.page?.slug?.current}
        className="text-inherit hover:text-aaltoLightBlue"
      >
        {children}
      </InternalLink>
    ),
  },
  types: {
    Image: ({ value }: { value: ImageProps }) => {
      const { image, maxWidth, _type } = value;

      return <Image image={image} maxWidth={maxWidth} _type={_type} />;
    },
    YoutubeVideo: ({ value }: { value: YoutubeVideoProps }) => {
      const { url, maxWidth, _type } = value;

      return (
        <Box as="div" className="py-8">
          <YoutubeVideo url={url} maxWidth={maxWidth} _type={_type} />
        </Box>
      );
    },
  },
};
