import type { GalleryProps } from '~/components/generic/Gallery/Gallery';
import { Gallery } from '~/components/generic/Gallery/Gallery';
import type { ImageProps } from '~/components/generic/Image/Image';
import { Image } from '~/components/generic/Image/Image';
import type { MuxVideoProps } from '~/components/generic/MuxVideo/MuxVideo';
import { MuxVideo } from '~/components/generic/MuxVideo/MuxVideo';
import type { TextProps } from '~/components/generic/Text/Text';
import { Text } from '~/components/generic/Text/Text';
import type { VimeoVideoProps } from '~/components/generic/VimeoVideo/VimeoVideo';
import { VimeoVideo } from '~/components/generic/VimeoVideo/VimeoVideo';
import type { YoutubeVideoProps } from '~/components/generic/YoutubeVideo/YoutubeVideo';
import { YoutubeVideo } from '~/components/generic/YoutubeVideo/YoutubeVideo';
import type { ProjectIndexProps } from '~/components/work/ProjectIndex/ProjectIndex';
import { ProjectIndex } from '~/components/work/ProjectIndex/ProjectIndex';

import type { DotProps } from '~/components/decoration/Dot/Dot';
import { Dot } from '~/components/decoration/Dot/Dot';
import type { LandingHeroProps } from '~/components/decoration/LandingHero/LandingHero';
import { LandingHero } from '~/components/decoration/LandingHero/LandingHero';
import type { PageTitleProps } from '~/components/decoration/PageTitle/PageTitle';
import { PageTitle } from '~/components/decoration/PageTitle/PageTitle';
import type { SpacerProps } from '~/components/decoration/Spacer/Spacer';
import { Spacer } from '~/components/decoration/Spacer/Spacer';

import type { ContactDetailsProps } from '~/components/about/ContactDetails/ContactDetails';
import { ContactDetails } from '~/components/about/ContactDetails/ContactDetails';
import type { EducationProps } from '~/components/about/Education/Education';
import { Education } from '~/components/about/Education/Education';
import type { GigIndexProps } from '~/components/about/GigIndex/GigIndex';
import { GigIndex } from '~/components/about/GigIndex/GigIndex';
import type { OrganisationsProps } from '~/components/about/Organisation/Organisations';
import { Organisations } from '~/components/about/Organisation/Organisations';

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

        case 'ContactDetails':
          return (
            <ContactDetails
              {...(block as ContactDetailsProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );
        case 'Education':
          return (
            <Education
              {...(block as EducationProps)}
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

        case 'GigIndex':
          return (
            <GigIndex
              {...(block as GigIndexProps)}
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
