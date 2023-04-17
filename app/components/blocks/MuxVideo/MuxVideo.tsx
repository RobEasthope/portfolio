import MuxPlayer from '@mux/mux-player-react';

import { Box } from '~/components/base/Box/Box';
import { Type } from '~/components/base/Type/Type';

// TYPES
export type MuxVideoProps = {
  _type: 'MuxVideo';
  muxVideo: Record<string, unknown>;
  caption?: string;
  maxWidth: 'small' | 'text' | 'medium' | 'large' | 'full';
};

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
    <Box as="section" breakout>
      <Box as="div" className="mx-auto" maxWidth={maxWidth}>
        {muxVideo && (
          <MuxPlayer
            playbackId={muxVideo?.playbackId}
            streamType="on-demand"
            metadata={{
              video_id: muxVideo?.assetId,
              video_title: muxVideo?.title || '',
              viewer_user_id: 'user-id-007',
            }}
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
