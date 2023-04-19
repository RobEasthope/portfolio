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
    attribution?: string;
  };
  caption?: string;
  bkgVideo: unknown;
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
      className="relative px-1 h-[calc(100vh_-_(23px_+_(25_-_23)_*_((100vw_-_320px)_/_(1400_-_320))))] md:px-2 md:h-[calc(100vh_-_(45px_+_(50_-_45)_*_((100vw_-_320px)_/_(1400_-_320))))]"
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
        <MuxPlayer
          playbackId={bkgVideo?.playbackId}
          streamType="on-demand"
          metadata={{
            video_id: 'video-id-54321',
            video_title: 'Test video title',
            viewer_user_id: 'user-id-007',
          }}
          autoPlay
          loop
          muted
          className="absolute h-full w-full"
        />
      )}
    </Box>
  );
};

export default LandingHero;
