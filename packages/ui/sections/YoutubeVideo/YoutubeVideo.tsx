import YouTube from 'react-youtube';
import { YoutubeVideo as rawYoutubeVideoProps } from '~/UI/types/sanity-schema';

import { getYoutubeIdfromUrl } from '~/UI/utils/getYoutubeIdfromUrl';
import { MaxWidth } from '~/UI/base/structure/MaxWidth/MaxWidth';
import { IFrameAspectRatio } from '~/UI/base/structure/IFrameAspectRatio/IFrameAspectRatio';
import { PaddedComponent } from '~/UI/base/structure/PaddedComponent/PaddedComponent';
import { Caption } from '~/UI/base/typography/Caption/Caption';
import { Breakout } from '~/UI/base/structure/Breakout/Breakout';

// TYPES
export interface YoutubeVideoProps extends rawYoutubeVideoProps {
  breakout?: boolean;
}

// MARKUP
export const YoutubeVideo = ({
  url,
  caption,
  maxWidth = 'medium',
  breakout,
}: YoutubeVideoProps) => {
  if (!url) {
    return null;
  }

  return (
    <PaddedComponent as="section" content="media">
      <Breakout active={breakout}>
        <MaxWidth width={maxWidth}>
          <IFrameAspectRatio ratio={16 / 9}>
            <YouTube
              videoId={getYoutubeIdfromUrl(url)}
              containerClassName="video"
            />
          </IFrameAspectRatio>
          {caption && <Caption as="figcaption">{caption}</Caption>}
        </MaxWidth>
      </Breakout>
    </PaddedComponent>
  );
};

export default YoutubeVideo;
