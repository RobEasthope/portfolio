import { DOT_QUERY } from '~/components/decoration/Dot/Dot.query';
import { GALLERY_QUERY } from '~/components/generic/Gallery/Gallery.query';
import { IMAGE_QUERY } from '~/components/generic/Image/Image.query';
import { LANDING_HERO_QUERY } from '~/components/decoration/LandingHero/LandingHero.query';
import { MUX_VIDEO_QUERY } from '~/components/generic/MuxVideo/MuxVideo.query';
import { ORGANISATIONS_QUERY } from '~/components/about/Organisation/Organisations.query';
import { PAGE_TITLE_QUERY } from '~/components/decoration/PageTitle/PageTitle.query';
import { PROJECT_INDEX_QUERY } from '~/components/project/ProjectIndex/ProjectIndex.query';
import { SPACER_QUERY } from '~/components/decoration/Spacer/Spacer.query';
import { TEXT_QUERY } from '~/components/generic/Text/Text.query';
import { VIMEO_VIDEO_QUERY } from '~/components/blocks/VimeoVideo/VimeoVideo.query';
import { YOUTUBE_VIDEO_QUERY } from '~/components/blocks/YoutubeVideo/YoutubeVideo.query';

export const SANITY_BLOCK_QUERIES = () => ({
  Dot: DOT_QUERY,
  Gallery: GALLERY_QUERY,
  Image: IMAGE_QUERY,
  LandingHero: LANDING_HERO_QUERY,
  MuxVideo: MUX_VIDEO_QUERY,
  Organisations: ORGANISATIONS_QUERY,
  PageTitle: PAGE_TITLE_QUERY,
  ProjectIndex: PROJECT_INDEX_QUERY,
  Spacer: SPACER_QUERY,
  Text: TEXT_QUERY,
  VimeoVideo: VIMEO_VIDEO_QUERY,
  YoutubeVideo: YOUTUBE_VIDEO_QUERY,
});
