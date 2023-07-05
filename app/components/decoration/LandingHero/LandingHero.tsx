import MuxPlayer from '@mux/mux-player-react';
import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from 'sanity-codegen';

import { Box } from '~/components/base/Box/Box';
import { SanityImage } from '~/components/base/SanityImage/SanityImage';

// TYPES
export type LandingHeroProps = {
  _type: 'LandingHero';
  bkgMode?: 'image' | 'video';
  bkgImage?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
  caption?: string;
  bkgVideo: {
    _type: 'muxVideo';
    playbackId: string;
    assetId: string;
    title: string;
  };
};

// MARKUP
export const LandingHero = ({
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
      className="landing-hero relative mx-1 md:mx-2 h-[calc(100vh-(3.5rem*1.5))] md:h-[calc(100vh-(5rem*1.5))] "
    >
      {bkgMode === 'image' && (
        <Box as="div" className="w-screen">
          <SanityImage
            src={bkgImage}
            alt={caption}
            className="w-screen"
            cover
          />
        </Box>
      )}

      {bkgMode === 'video' && (
        <MuxPlayer
          playbackId={bkgVideo?.playbackId}
          streamType="on-demand"
          metadata={{
            video_id: bkgVideo?.assetId,
            video_title: bkgVideo?.title || '',
            viewer_user_id: 'user-id-007',
          }}
          autoPlay
          loop
          muted
          className="absolute h-full w-full leading-[0]"
        />
      )}
    </Box>
  );
};

export default LandingHero;
