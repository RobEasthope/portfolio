import { LandingHero as rawLandingHeroProps } from '@/UI/types/sanity-schema';
import { MaxWidth } from '@/UI/base/layout/MaxWidth/MaxWidth';
import { PaddedComponent } from '@/UI/base/layout/PaddedComponent/PaddedComponent';
import { Text } from '@/UI/base/typography/Text/Text';
import SanityMuxPlayer from 'sanity-mux-player';
import { Picture } from '@/UI/base/media/Picture/Picture';
import { styled } from '@/UI/styles/stitches.config';
import { SPACING } from '@/UI/constants/SPACING';

// STYLES

const heroHeight = `calc(100vh - ${SPACING.x6})`;

export const Wrapper = styled('div', {
  position: 'relative',
  maxHeight: '100vh',
});

export const ForegroundContent = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  color: 'white',
});

export const ForegroundContentLayout = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center',
});

export const JumbotronBkgImage = styled(Picture, {
  width: '100vw',
  height: heroHeight,
});

export const JumbotronBkgVideo = styled(SanityMuxPlayer, {
  width: '100vw !important',
  height: heroHeight,

  '& video': {
    height: heroHeight,
    objectFit: 'cover',
    objectPosition: 'center center',
  },
});

// TYPES
export interface LandingHeroProps extends rawLandingHeroProps {
  muxVideo: unknown;
}

// MARKUP
export const LandingHero = ({
  heading,
  subheading,
  bkgMode,
  bkgImage,
  muxVideo,
}: LandingHeroProps) => {
  if (!bkgImage && !muxVideo) {
    return null;
  }

  return (
    <Wrapper as="section">
      <ForegroundContent>
        <PaddedComponent as="section">
          <MaxWidth width="page">
            <ForegroundContentLayout>
              {heading && <Text as="h1">{heading}</Text>}
              {subheading && <Text as="h1">{subheading}</Text>}
            </ForegroundContentLayout>
          </MaxWidth>
        </PaddedComponent>
      </ForegroundContent>

      {bkgImage && bkgMode === 'image' && (
        <JumbotronBkgImage
          alt={heading || ''}
          asset={bkgImage}
          mode="cover"
          maxWidth={2560}
        />
      )}
      {muxVideo && bkgMode === 'video' && (
        <JumbotronBkgVideo
          assetDocument={muxVideo}
          autoload
          autoplay
          mute
          loop
          showControls={false}
        />
      )}
    </Wrapper>
  );
};

export default LandingHero;