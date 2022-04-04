import SanityMuxPlayer from 'sanity-mux-player';
import { MaxWidth } from '@/UI/base/layout/MaxWidth';
import { PaddedComponent } from '@/UI/base/layout/PaddedComponent/PaddedComponent';
import { MuxVideo as rawMuxVideoProps } from '@/UI/types/sanity-schema';
import { Caption } from '@/UI/base/typography/Caption/Caption';

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
    </PaddedComponent>
  );
};

export default MuxVideo;
