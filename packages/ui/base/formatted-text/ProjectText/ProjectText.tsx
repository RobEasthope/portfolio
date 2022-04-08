/* eslint-disable @typescript-eslint/naming-convention */
import dynamic from 'next/dynamic';
import Link from 'next/link';
import BlockContent from '@sanity/block-content-to-react';
import { ImageProps } from '@/UI/sections/Image/Image';
import { MuxVideoProps } from '@/UI/sections/MuxVideo/MuxVideo';
import { VimeoVideoProps } from '@/UI/sections/VimeoVideo/VimeoVideo';
import { YoutubeVideoProps } from '@/UI/sections/YoutubeVideo/YoutubeVideo';
import { GalleryProps } from '@/UI/sections/Gallery/Gallery';
import { Text } from '@/UI/base/typography/Text/Text';
import {
  BlockRendererProps,
  SerializerMarksProps,
} from '@/UI/base/formatted-text/formattedTextProps';
import { Prose } from '@/UI/base/typography/Prose/Prose';

const Gallery = dynamic(() => import('../../../sections/Gallery/Gallery'));
const Image = dynamic(() => import('../../../sections/Image/Image'));
const MuxVideo = dynamic(() => import('../../../sections/MuxVideo/MuxVideo'));
const VimeoVideo = dynamic(
  () => import('../../../sections/VimeoVideo/VimeoVideo')
);
const YoutubeVideo = dynamic(
  () => import('../../../sections/YoutubeVideo/YoutubeVideo')
);

// TYPES
export interface ProjectTextProps {
  blocks: unknown;
}

// MARKUP
const ProjectTextBlockRenderer = ({ node, children }: BlockRendererProps) => {
  const { style = 'normal' } = node;

  if (style === 'h2') {
    return (
      <Text as="h2" typeSize="xLarge" typeface="serif" typeWeight="bold">
        {children}
      </Text>
    );
  }
  if (style === 'h3') {
    return (
      <Text as="h3" typeSize="large" typeface="serif" typeWeight="bold">
        {children}
      </Text>
    );
  }

  if (style === 'h4') {
    return (
      <Text as="h4" typeSize="medium" typeface="serif" typeWeight="bold">
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
          mark?.page?.slug?.current === 'root'
            ? '/'
            : `/${mark?.page?.slug?.current}`
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
        _type,
      }: GalleryProps = node;

      return (
        <Gallery
          images={images}
          galleryCaption={galleryCaption}
          columns={columns}
          aspectRatio={aspectRatio}
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

      return (
        <VimeoVideo
          url={url}
          caption={caption}
          maxWidth={maxWidth}
          _type={_type}
        />
      );
    },
    YoutubeVideo: ({ node }: { node: YoutubeVideoProps }) => {
      const { url, caption, maxWidth, _type } = node;

      return (
        <YoutubeVideo
          url={url}
          caption={caption}
          maxWidth={maxWidth}
          _type={_type}
        />
      );
    },
  },
};

export const ProjectText = ({ blocks }: ProjectTextProps) => (
  <Prose>
    <BlockContent blocks={blocks} serializers={projectTextSerializer} />
  </Prose>
);
