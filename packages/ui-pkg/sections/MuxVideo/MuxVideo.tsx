import SanityMuxPlayer from 'sanity-mux-player';
import { MaxWidth } from 'ui-pkg/base/structure/MaxWidth/MaxWidth';
import { PaddedComponent } from 'ui-pkg/base/structure/PaddedComponent/PaddedComponent';
import { MuxVideo as rawMuxVideoProps } from 'ui-pkg/types/sanity-schema';
import { Caption } from 'ui-pkg/base/typography/Caption/Caption';
import { Breakout } from 'ui-pkg/base/structure/Breakout/Breakout';

// TYPES
export interface MuxVideoProps extends rawMuxVideoProps {
  muxVideo: Record<string, unknown>;
}

// MARKUP
export const MuxVideo = ({
  muxVideo,
  caption,
  maxWidth = 'medium',
}: MuxVideoProps) => {
  if (!muxVideo) {
    return null;
  }

  return (
    <PaddedComponent as="section" content="media">
      <Breakout>
        <MaxWidth width={maxWidth}>
          {muxVideo && (
            <SanityMuxPlayer
              assetDocument={muxVideo}
              autoload={false}
              autoplay={false}
              loop={false}
              showControls
            />
          )}
          {caption && <Caption as="figcaption">{caption}</Caption>}
        </MaxWidth>
      </Breakout>
    </PaddedComponent>
  );
};

export default MuxVideo;
