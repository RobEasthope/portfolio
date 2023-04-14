import MuxPlayer from '@mux/mux-player-react';
import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from 'sanity-codegen';

import { METADATA_HARD_CODED_FALLBACKS } from '~/constants/METADATA_HARD_CODED_FALLBACKS';

import { Box } from '~/components/base/Box/Box';
import type { ExternalLinkWithTitleSchemaProps } from '~/components/base/ExternalLink/ExternalLink';
import type { InternalLinkWithTitleSchemaProps } from '~/components/base/InternalLink/InternalLink';
import { SanityImage } from '~/components/base/SanityImage/SanityImage';
import { Type } from '~/components/base/Type/Type';

// TYPES
export type LandingHeroProps = {
  _type: 'LandingHero';
  headingforeground?: string;
  heading?: string;
  subHeading?: string;
  headingbackground?: string;
  bkgMode?: 'image' | 'video';
  logo?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
    attribution?: string;
  };
  bkgImage?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
    attribution?: string;
  };
  caption?: string;
  link: ExternalLinkWithTitleSchemaProps | InternalLinkWithTitleSchemaProps;
  muxVideo: unknown;
};

// MARKUP
export const LandingHero = ({
  heading,
  logo,
  bkgMode,
  bkgImage,
  caption,
  bkgVideo,
}: LandingHeroProps) => {
  if (!bkgImage && !bkgVideo) {
    return null;
  }

  return (
    <Box
      as="section"
      className="flex max-h-[calc(100vh_-_(45px_+_(50_-_45)_*_((100vw_-_320px)_/_(1400_-_320))))] flex-row"
    >
      {bkgMode === 'image' && (
        <Box as="div" className="w-screen">
          <SanityImage
            asset={bkgImage}
            alt={caption || ''}
            mode="cover"
            maxWidth={2560}
            className="w-screen"
          />
        </Box>
      )}

      {bkgMode === 'video' && (
        <Box as="div" className="w-screen">
          <MuxPlayer
            playbackId={bkgVideo?.playbackId}
            streamType="on-demand"
            metadata={{
              video_id: 'video-id-54321',
              video_title: 'Test video title',
              viewer_user_id: 'user-id-007',
            }}
            className="absolute w-full h-full"
          />
        </Box>
      )}

      <Box as="div" className="w-screen -translate-x-full">
        <Box
          as="div"
          className="flex h-full w-screen flex-col items-center justify-center gap-1 text-white"
        >
          <Box as="div" className="mx-auto w-2/5 max-w-[1200px]">
            <Box as="div" className="mx-auto flex min-w-[120px] justify-center">
              <SanityImage
                asset={logo}
                alt={METADATA_HARD_CODED_FALLBACKS.TITLE}
                mode="responsive"
                maxWidth={2000}
              />
            </Box>
          </Box>

          <Type as="h1" className="sr-only font-serif text-3xl uppercase">
            {heading}
          </Type>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingHero;
