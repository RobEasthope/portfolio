/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable react/prop-types */

/* eslint-disable @typescript-eslint/naming-convention */
import type { PortableTextComponents } from '@portabletext/react';
import type { SanityBlock, SanityKeyed } from 'sanity-codegen';
import type { GalleryProps } from '~/components/generic/Gallery/Gallery';
import { Gallery } from '~/components/generic/Gallery/Gallery';
import type { ImageProps } from '~/components/generic/Image/Image';
import { Image } from '~/components/generic/Image/Image';
import type { MuxVideoProps } from '~/components/generic/MuxVideo/MuxVideo';
import { MuxVideo } from '~/components/generic/MuxVideo/MuxVideo';
import type { VimeoVideoProps } from '~/components/generic/VimeoVideo/VimeoVideo';
import { VimeoVideo } from '~/components/generic/VimeoVideo/VimeoVideo';
import type { YoutubeVideoProps } from '~/components/generic/YoutubeVideo/YoutubeVideo';
import { YoutubeVideo } from '~/components/generic/YoutubeVideo/YoutubeVideo';

import { Box } from '~/components/_base/Box/Box';
import { EmailLink } from '~/components/_base/EmailLink/EmailLink';
import { ExternalLink } from '~/components/_base/ExternalLink/ExternalLink';
import { InternalLink } from '~/components/_base/InternalLink/InternalLink';
import { twLinkStyles } from '~/components/_base/Prose/twLinkStyles';
import { Type } from '~/components/_base/Type/Type';

export type ProjectTextProps = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<ImageProps>
  | SanityKeyed<YoutubeVideoProps>
>;

// MARKUP
export const ProjectTextComponents: PortableTextComponents = {
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
      <ExternalLink href={value.url} className={twLinkStyles}>
        {children}
      </ExternalLink>
    ),
    InternalLink: ({ children, value }) => (
      <InternalLink
        href={value?.page?.slug?.current}
        className={twLinkStyles}
        homePageSlug={value?.appSettings?.homePageSlug}
      >
        {children}
      </InternalLink>
    ),
    EmailLink: ({ children, value }) => (
      <EmailLink email={value?.email} className={twLinkStyles}>
        {children}
      </EmailLink>
    ),
  },
  types: {
    Gallery: ({ value }: { value: GalleryProps }) => {
      const { images, columns, maxWidth, aspectRatio, _type } = value;

      return (
        <Box as="section" className="py-1">
          <Gallery
            images={images}
            columns={columns}
            maxWidth={maxWidth}
            aspectRatio={aspectRatio}
            _type={_type}
          />
        </Box>
      );
    },
    Image: ({ value }: { value: ImageProps }) => {
      const { image, maxWidth, aspectRatio, _type } = value;

      return (
        <Box as="section" className="py-1">
          <Image
            image={image}
            maxWidth={maxWidth}
            aspectRatio={aspectRatio}
            _type={_type}
          />
        </Box>
      );
    },
    MuxVideo: ({ value }: { value: MuxVideoProps }) => {
      const { muxVideo, caption, maxWidth, loop, muted, autoPlay, _type } =
        value;

      return (
        <Box as="section" className="py-1">
          <MuxVideo
            muxVideo={muxVideo}
            caption={caption}
            maxWidth={maxWidth}
            _type={_type}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
          />
        </Box>
      );
    },
    VimeoVideo: ({ value }: { value: VimeoVideoProps }) => {
      const { url, caption, maxWidth, _type } = value;

      return (
        <Box as="section" className="py-1">
          <VimeoVideo
            url={url}
            caption={caption}
            maxWidth={maxWidth}
            _type={_type}
          />
        </Box>
      );
    },
    YoutubeVideo: ({ value }: { value: YoutubeVideoProps }) => {
      const { url, caption, maxWidth, _type } = value;

      return (
        <Box as="section" className="py-1">
          <YoutubeVideo
            url={url}
            caption={caption}
            maxWidth={maxWidth}
            _type={_type}
          />
        </Box>
      );
    },
  },
};
