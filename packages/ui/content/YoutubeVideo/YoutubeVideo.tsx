import YouTube from 'react-youtube';
import { YoutubeVideo as rawYoutubeVideoProps } from '@/UI/types/sanity-schema';

import { getYoutubeIdfromUrl } from '@/UI/utils/getYoutubeIdfromUrl';
import { MaxWidth } from '@/UI/base/layout/MaxWidth';
import { IFrameAspectRatio } from '@/UI/base/layout/IFrameAspectRatio';
import { PaddedComponent } from '@/UI/base/layout/PaddedComponent/PaddedComponent';
import { Caption } from '@/UI/base/typography/Caption/Caption';

// TYPES
export type YoutubeVideoProps = rawYoutubeVideoProps;

// MARKUP
export const YoutubeVideo = ({
  url,
  caption,
  maxWidth = 'medium',
}: YoutubeVideoProps) => {
  if (!url) {
    return null;
  }

  return (
    <PaddedComponent as="section" content="media">
      <MaxWidth width={maxWidth}>
        <IFrameAspectRatio ratio={16 / 9}>
          <YouTube
            videoId={getYoutubeIdfromUrl(url)}
            containerClassName="video"
          />
        </IFrameAspectRatio>
        {caption && <Caption as="figcaption">{caption}</Caption>}
      </MaxWidth>
    </PaddedComponent>
  );
};

export default YoutubeVideo;
