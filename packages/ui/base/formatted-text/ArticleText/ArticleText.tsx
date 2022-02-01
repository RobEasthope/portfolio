/* eslint-disable react/display-name */
import dynamic from 'next/dynamic';
import Link from 'next/link';
import BlockContent from '@sanity/block-content-to-react';
import { ReactNode } from 'react';
import { ImageProps } from '@/UI/content/Image/Image';
import { MuxVideoProps } from '@/UI/content/MuxVideo/MuxVideo';
import { VimeoVideoProps } from '@/UI/content/VimeoVideo/VimeoVideo';
import { YoutubeVideoProps } from '@/UI/content/YoutubeVideo/YoutubeVideo';
import { GalleryProps } from '@/UI/content/Gallery/Gallery';
import { Text } from '@/UI/base/typography/Text/Text';

const Gallery = dynamic(() => import('../../../content/Gallery/Gallery'));
const Image = dynamic(() => import('../../../content/Image/Image'));
const MuxVideo = dynamic(() => import('../../../content/MuxVideo/MuxVideo'));
const VimeoVideo = dynamic(
  () => import('../../../content/VimeoVideo/VimeoVideo')
);
const YoutubeVideo = dynamic(
  () => import('../../../content/YoutubeVideo/YoutubeVideo')
);

// TYPES
export interface ArticleTextProps {
  blocks: unknown;
}

// MARKUP
const ArticleTextBlockRenderer = (props: {
  node: { style: string };
  children: ReactNode;
}) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { style = 'normal' } = props?.node;
  const { children } = props;

  if (style === 'h2') {
    return (
      <Text as="h2" typeSize="xLarge" typeface="serif" typeWeight="medium">
        {children}
      </Text>
    );
  }
  if (style === 'h3') {
    return (
      <Text as="h3" typeSize="large" typeface="serif" typeWeight="medium">
        {children}
      </Text>
    );
  }

  if (style === 'h4') {
    return (
      <Text as="h4" typeSize="medium" typeface="serif" typeWeight="medium">
        {children}
      </Text>
    );
  }

  // Fall back to default handling
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  return BlockContent.defaultSerializers.types.block(props);
};

const articleTextSerializer = {
  marks: {
    // eslint-disable-next-line react/prop-types
    ExternalLink: ({ children, mark }) => (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, react/prop-types
      <a href={mark.url} target="_blank" rel="noreferrer">
        {children}
      </a>
    ),
    // eslint-disable-next-line react/prop-types
    InternalLink: ({ children, mark }) => (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      <Link
        href={
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, react/prop-types
          mark?.page?.slug?.current === 'root'
            ? '/'
            : // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access, react/prop-types
              `/${mark?.page?.slug?.current}`
        }
      >
        <a>{children}</a>
      </Link>
    ),
  },
  types: {
    block: ArticleTextBlockRenderer,

    Gallery: (props: { node: GalleryProps }) => {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { images, galleryCaption, columns, aspectRatio, _type } =
        // eslint-disable-next-line react/destructuring-assignment
        props?.node;

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
    Image: (props: { node: ImageProps }) => {
      // eslint-disable-next-line @typescript-eslint/naming-convention, react/destructuring-assignment
      const { image, maxWidth, _type } = props?.node;

      return <Image image={image} maxWidth={maxWidth} _type={_type} />;
    },
    MuxVideo: (props: { node: MuxVideoProps }) => {
      // eslint-disable-next-line @typescript-eslint/naming-convention, react/destructuring-assignment
      const { muxVideo, caption, maxWidth, _type } = props?.node;

      return (
        <MuxVideo
          muxVideo={muxVideo}
          caption={caption}
          maxWidth={maxWidth}
          _type={_type}
        />
      );
    },
    VimeoVideo: (props: { node: VimeoVideoProps }) => {
      // eslint-disable-next-line @typescript-eslint/naming-convention, react/destructuring-assignment
      const { url, caption, maxWidth, _type } = props?.node;

      return (
        <VimeoVideo
          url={url}
          caption={caption}
          maxWidth={maxWidth}
          _type={_type}
        />
      );
    },
    YoutubeVideo: (props: { node: YoutubeVideoProps }) => {
      // eslint-disable-next-line @typescript-eslint/naming-convention, react/destructuring-assignment
      const { url, caption, maxWidth, _type } = props?.node;

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

export const ArticleText = ({ blocks }: ArticleTextProps) => (
  <BlockContent blocks={blocks} serializers={articleTextSerializer} />
);
