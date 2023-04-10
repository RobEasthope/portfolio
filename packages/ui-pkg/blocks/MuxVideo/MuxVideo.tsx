import SanityMuxPlayer from "sanity-mux-player";
import { Box } from "ui-pkg/base/Box/Box";
import { Type } from "ui-pkg/base/Type/Type";

// TYPES
export type MuxVideoProps = {
  _type: "MuxVideo";
  muxVideo: Record<string, unknown>;
  caption?: string;
  maxWidth: "small" | "text" | "medium" | "large" | "full";
};

// MARKUP
export const MuxVideo = ({ muxVideo, caption, maxWidth = "medium" }: MuxVideoProps) => {
  if (!muxVideo) {
    return null;
  }

  return (
    <Box as="section" breakout>
      <Box as="div" className="mx-auto" maxWidth={maxWidth}>
        {muxVideo && (
          <SanityMuxPlayer
            assetDocument={muxVideo}
            autoload={false}
            autoplay={false}
            loop={false}
            showControls
          />
        )}
        <Box as="div" className="mx-auto sm:max-w-lg lg:max-w-5xl">
          <Type as="figcaption" className="text-sm italic text-gray-600 ">
            {caption}
          </Type>
        </Box>
      </Box>
    </Box>
  );
};

export default MuxVideo;
