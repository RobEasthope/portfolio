/* eslint-disable @typescript-eslint/naming-convention */
import dynamic from "next/dynamic";
import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";
import { ImageProps } from "ui-pkg/blocks/Image/Image";
import { MuxVideoProps } from "ui-pkg/blocks/MuxVideo/MuxVideo";
import { VimeoVideoProps } from "ui-pkg/blocks/VimeoVideo/VimeoVideo";
import { YoutubeVideoProps } from "ui-pkg/blocks/YoutubeVideo/YoutubeVideo";
import { GalleryProps } from "ui-pkg/blocks/Gallery/Gallery";
import { Text } from "ui-pkg/base/typography/Text/Text";
import {
  BlockRendererProps,
  SerializerMarksProps,
} from "ui-pkg/base/formatted-text/formattedTextProps";
import { Prose } from "ui-pkg/base/typography/Prose/Prose";

const Gallery = dynamic(() => import("../../../blocks/Gallery/Gallery"));
const Image = dynamic(() => import("../../../blocks/Image/Image"));
const MuxVideo = dynamic(() => import("../../../blocks/MuxVideo/MuxVideo"));
const VimeoVideo = dynamic(() => import("../../../blocks/VimeoVideo/VimeoVideo"));
const YoutubeVideo = dynamic(() => import("../../../blocks/YoutubeVideo/YoutubeVideo"));

// TYPES
export interface ProjectTextProps {
  blocks: unknown;
}

// MARKUP
const ProjectTextBlockRenderer = ({ node, children }: BlockRendererProps) => {
  const { style = "normal" } = node;

  if (style === "h2") {
    return (
      <Text as="h2" typeSize="xLarge" typeWeight="bold">
        {children}
      </Text>
    );
  }
  if (style === "h3") {
    return (
      <Text as="h3" typeSize="large" typeWeight="bold">
        {children}
      </Text>
    );
  }

  if (style === "h4") {
    return (
      <Text as="h4" typeSize="medium" typeWeight="bold">
        {children}
      </Text>
    );
  }

  // Fall back to default handling
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  return BlockContent.defaultSerializers.types.block({ node, children });
};

const projectTextSerializer = {
  marks: {
    ExternalLink: ({ children, mark }: SerializerMarksProps) => (
      <a href={mark.url} target="_blank" rel="noreferrer">
        {children}
      </a>
    ),
    InternalLink: ({ children, mark }: SerializerMarksProps) => (
      <Link
        href={
          mark?.page?.slug?.current === "root" ? "/" : `/${mark?.page?.slug?.current}`
        }
      >
        <a>{children}</a>
      </Link>
    ),
  },
  types: {
    block: ProjectTextBlockRenderer,

    Gallery: ({ node }: { node: GalleryProps }) => {
      const {
        images,
        galleryCaption,
        columns,
        aspectRatio,
        maxWidth,
        _type,
      }: GalleryProps = node;

      return (
        <Gallery
          images={images}
          galleryCaption={galleryCaption}
          columns={columns}
          aspectRatio={aspectRatio}
          maxWidth={maxWidth}
          _type={_type}
        />
      );
    },
    Image: ({ node }: { node: ImageProps }) => {
      const { image, maxWidth, _type } = node;

      return <Image image={image} maxWidth={maxWidth} _type={_type} />;
    },
    MuxVideo: ({ node }: { node: MuxVideoProps }) => {
      const { muxVideo, caption, maxWidth, _type } = node;

      return (
        <MuxVideo
          muxVideo={muxVideo}
          caption={caption}
          maxWidth={maxWidth}
          _type={_type}
        />
      );
    },
    VimeoVideo: ({ node }: { node: VimeoVideoProps }) => {
      const { url, caption, maxWidth, _type } = node;

      return <VimeoVideo url={url} caption={caption} maxWidth={maxWidth} _type={_type} />;
    },
    YoutubeVideo: ({ node }: { node: YoutubeVideoProps }) => {
      const { url, caption, maxWidth, _type } = node;

      return (
        <YoutubeVideo url={url} caption={caption} maxWidth={maxWidth} _type={_type} />
      );
    },
  },
};

export const ProjectText = ({ blocks }: ProjectTextProps) => (
  <Prose>
    <BlockContent blocks={blocks} serializers={projectTextSerializer} />
  </Prose>
);
