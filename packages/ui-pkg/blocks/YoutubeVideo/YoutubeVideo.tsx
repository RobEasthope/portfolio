import YouTube from "react-youtube";
import { YoutubeVideo as rawYoutubeVideoProps } from "ui-pkg/types/sanity-schema";

import { getYoutubeIdfromUrl } from "ui-pkg/utils/getYoutubeIdfromUrl";
import { MaxWidth } from "ui-pkg/base/structure/MaxWidth/MaxWidth";
import { IFrameAspectRatio } from "ui-pkg/base/structure/IFrameAspectRatio/IFrameAspectRatio";
import { PaddedComponent } from "ui-pkg/base/structure/PaddedComponent/PaddedComponent";
import { Caption } from "ui-pkg/base/typography/Caption/Caption";
import { Breakout } from "ui-pkg/base/structure/Breakout/Breakout";

// TYPES
export type YoutubeVideoProps = rawYoutubeVideoProps;

// MARKUP
export const YoutubeVideo = ({
  url,
  caption,
  maxWidth = "medium",
}: YoutubeVideoProps) => {
  if (!url) {
    return null;
  }

  return (
    <PaddedComponent as="section" content="media">
      <Breakout>
        <MaxWidth width={maxWidth}>
          <IFrameAspectRatio ratio={16 / 9}>
            <YouTube videoId={getYoutubeIdfromUrl(url)} containerClassName="video" />
          </IFrameAspectRatio>
          {caption && <Caption as="figcaption">{caption}</Caption>}
        </MaxWidth>
      </Breakout>
    </PaddedComponent>
  );
};

export default YoutubeVideo;
