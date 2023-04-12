import { GALLERY_QUERY } from '~/components/blocks/Gallery/Gallery.query';
import { IMAGE_QUERY } from '~/components/blocks/Image/Image.query';
import { LANDING_HERO_QUERY } from '~/components/blocks/LandingHero/LandingHero.query';
import { MUX_VIDEO_QUERY } from '~/components/blocks/MuxVideo/MuxVideo.query';
import { SPACER_QUERY } from '~/components/blocks/Spacer/Spacer.query';
import { TEXT_QUERY } from '~/components/blocks/Text/Text.query';
import { VIMEO_VIDEO_QUERY } from '~/components/blocks/VimeoVideo/VimeoVideo.query';
import { YOUTUBE_VIDEO_QUERY } from '~/components/blocks/YoutubeVideo/YoutubeVideo.query';

export const SANITY_BLOCK_QUERIES = ({
  courseId,
}: {
  courseId: string | null;
}) => ({
  Gallery: GALLERY_QUERY,
  Image: IMAGE_QUERY,
  LandingHero: LANDING_HERO_QUERY,
  MuxVideo: MUX_VIDEO_QUERY,
  Spacer: SPACER_QUERY,
  Text: TEXT_QUERY,
  VimeoVideo: VIMEO_VIDEO_QUERY,
  YoutubeVideo: YOUTUBE_VIDEO_QUERY,
});
