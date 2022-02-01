import { LandingHero as rawLandingHeroProps } from '@/UI/types/sanity-schema';
import { MaxWidth } from '@/UI/base/layout/MaxWidth';
import { PaddedComponent } from '@/UI/base/layout/PaddedComponent';
import { Picture } from '@/UI/base/media/Picture/Picture';
import {
  Wrapper,
  ForegroundContent,
  ForegroundContentLayout,
  JumbotronBkgImage,
  JumbotronBkgVideo,
  LogoWrapper,
  Title,
} from './LandingHero.styles';

// TYPES
export interface LandingHeroProps extends rawLandingHeroProps {
  muxVideo: unknown;
}

// MARKUP
export const LandingHero = ({
  heading,
  logo,
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
              <LogoWrapper>
                <Picture asset={logo} mode="responsive" maxWidth={400} />
              </LogoWrapper>
              {heading && <Title as="h1">{heading}</Title>}
            </ForegroundContentLayout>
          </MaxWidth>
        </PaddedComponent>
      </ForegroundContent>

      {bkgImage && bkgMode === 'image' && (
        <JumbotronBkgImage asset={bkgImage} mode="cover" maxWidth={2560} />
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
