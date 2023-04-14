import YouTube from 'react-youtube';

import { Box } from '~/components/base/Box/Box';
import { Type } from '~/components/base/Type/Type';

import { getYoutubeIdfromUrl } from './getYoutubeIdfromUrl';

// TYPES
export type YoutubeVideoProps = {
  _type: 'YoutubeVideo';
  url?: string;
  caption?: string;
  maxWidth: 'small' | 'text' | 'medium' | 'large' | 'full';
};

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
    <Box as="section" breakout>
      <Box as="div" className="mx-auto" maxWidth={maxWidth}>
        <Box as="div">
          <YouTube
            videoId={getYoutubeIdfromUrl(url)}
            className="youtube-video relative aspect-video"
          />
        </Box>
        <Box as="div" className="mx-auto sm:max-w-lg lg:max-w-5xl">
          <Type as="figcaption" className="text-sm italic text-gray-600 ">
            {caption}
          </Type>
        </Box>
      </Box>
    </Box>
  );
};

export default YoutubeVideo;
