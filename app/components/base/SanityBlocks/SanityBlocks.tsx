import type { DotProps } from '~/components/decoration/Dot/Dot';
import { Dot } from '~/components/decoration/Dot/Dot';
import type { GalleryProps } from '~/components/generic/Gallery/Gallery';
import { Gallery } from '~/components/generic/Gallery/Gallery';
import type { ImageProps } from '~/components/generic/Image/Image';
import { Image } from '~/components/generic/Image/Image';
import type { LandingHeroProps } from '~/components/decoration/LandingHero/LandingHero';
import { LandingHero } from '~/components/decoration/LandingHero/LandingHero';
import type { MuxVideoProps } from '~/components/generic/MuxVideo/MuxVideo';
import { MuxVideo } from '~/components/generic/MuxVideo/MuxVideo';
import type { OrganisationsProps } from '~/components/about/Organisation/Organisations';
import { Organisations } from '~/components/about/Organisation/Organisations';
import type { PageTitleProps } from '~/components/decoration/PageTitle/PageTitle';
import { PageTitle } from '~/components/decoration/PageTitle/PageTitle';
import type { ProjectIndexProps } from '~/components/project/ProjectIndex/ProjectIndex';
import { ProjectIndex } from '~/components/project/ProjectIndex/ProjectIndex';
import type { SpacerProps } from '~/components/decoration/Spacer/Spacer';
import { Spacer } from '~/components/decoration/Spacer/Spacer';
import type { TextProps } from '~/components/blocks/Text/Text';
import { Text } from '~/components/blocks/Text/Text';
import type { VimeoVideoProps } from '~/components/blocks/VimeoVideo/VimeoVideo';
import { VimeoVideo } from '~/components/blocks/VimeoVideo/VimeoVideo';
import type { YoutubeVideoProps } from '~/components/blocks/YoutubeVideo/YoutubeVideo';
import { YoutubeVideo } from '~/components/blocks/YoutubeVideo/YoutubeVideo';

// TYPES
export type SanityBlocksProps = {
  blocks: Record<'_type' | '_key' | string, any>[];
  pageID: string;
};

// MARKUP
export const SanityBlocks = ({ blocks, pageID }: SanityBlocksProps) => {
  if (!blocks || blocks?.length <= 0) return null;

  const renderBlocks = () =>
    blocks?.map((block, i) => {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { _type } = block;

      if (!block?._type) {
        return <div key={`${pageID}-${i}`}>Block query missing</div>;
      }

      switch (_type) {
        case 'Dot':
          return (
            <Dot
              {...(block as DotProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );
        case 'Gallery':
          return (
            <Gallery
              {...(block as GalleryProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case 'Image':
          return (
            <Image
              {...(block as ImageProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case 'LandingHero':
          return (
            <LandingHero
              {...(block as LandingHeroProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case 'MuxVideo':
          return (
            <MuxVideo
              {...(block as MuxVideoProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case 'Organisations':
          return (
            <Organisations
              {...(block as OrganisationsProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case 'PageTitle':
          return (
            <PageTitle
              {...(block as PageTitleProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );
        case 'ProjectIndex':
          return (
            <ProjectIndex
              {...(block as ProjectIndexProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case 'Spacer':
          return (
            <Spacer
              {...(block as SpacerProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case 'Text':
          return (
            <Text
              {...(block as TextProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case 'VimeoVideo':
          return (
            <VimeoVideo
              {...(block as VimeoVideoProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case 'YoutubeVideo':
          return (
            <YoutubeVideo
              {...(block as YoutubeVideoProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        default:
          return (
            <div key={block?._key as string}>Missing block {block?._type}</div>
          );
      }
    });

  return <>{renderBlocks()}</>;
};
