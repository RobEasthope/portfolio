import { LandingHero as rawLandingHeroProps } from '~/UI/types/sanity-schema';
import { MaxWidth } from '~/UI/base/layout/MaxWidth/MaxWidth';
import { PaddedComponent } from '~/UI/base/layout/PaddedComponent/PaddedComponent';
import { Text } from '~/UI/base/typography/Text/Text';
import SanityMuxPlayer from 'sanity-mux-player';
import { Picture } from '~/UI/base/media/Picture/Picture';
import { styled } from '~/UI/styles/stitches.config';
import { SPACING } from '~/UI/constants/SPACING';
import { Spacer } from '~/UI/sections/Spacer/Spacer';

// STYLES

const heroHeight = `calc(100vh - ${SPACING.x6})`;

export const Wrapper = styled('div', {
  position: 'relative',
  maxHeight: '100vh',
  backgroundColor: 'white',
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
  justifyItems: 'center',
  textAlign: 'center',
});

export const JumbotronBkgImage = styled(Picture, {
  width: '100%',
  height: heroHeight,
});

export const JumbotronBkgVideo = styled(SanityMuxPlayer, {
  width: '100% !important',
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
              {heading && (
                <Text
                  as="h1"
                  typeSize="jumbotron"
                  // typeWeight="bold"
                  css={{
                    color: '$highlight',
                    opacity: 0.8,
                  }}
                >
                  {heading}
                </Text>
              )}
              <Spacer height="half" />
              {subheading && (
                <Text
                  as="h2"
                  typeSize="medium"
                  css={{
                    color: 'white',
                    letterSpacing: '0.025em',
                    fontStyle: 'italic',
                  }}
                >
                  {subheading}
                </Text>
              )}
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
