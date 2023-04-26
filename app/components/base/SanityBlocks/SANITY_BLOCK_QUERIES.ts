import { GALLERY_QUERY } from '~/components/generic/Gallery/Gallery.query';
import { IMAGE_QUERY } from '~/components/generic/Image/Image.query';
import { MUX_VIDEO_QUERY } from '~/components/generic/MuxVideo/MuxVideo.query';
import { TEXT_QUERY } from '~/components/generic/Text/Text.query';
import { VIMEO_VIDEO_QUERY } from '~/components/generic/VimeoVideo/VimeoVideo.query';
import { YOUTUBE_VIDEO_QUERY } from '~/components/generic/YoutubeVideo/YoutubeVideo.query';
import { PROJECT_INDEX_QUERY } from '~/components/work/ProjectIndex/ProjectIndex.query';

import { DOT_QUERY } from '~/components/decoration/Dot/Dot.query';
import { LANDING_HERO_QUERY } from '~/components/decoration/LandingHero/LandingHero.query';
import { PAGE_TITLE_QUERY } from '~/components/decoration/PageTitle/PageTitle.query';
import { SPACER_QUERY } from '~/components/decoration/Spacer/Spacer.query';

import { CONTACT_DETAILS_QUERY } from '~/components/about/ContactDetails/ContactDetails.query';
import { EDUCATION_QUERY } from '~/components/about/Education/Education.query';
import { GIG_INDEX_QUERY } from '~/components/about/GigIndex/GigIndex.query';
import { ORGANISATIONS_QUERY } from '~/components/about/Organisation/Organisations.query';

export const SANITY_BLOCK_QUERIES = () => ({
  Dot: DOT_QUERY,
  ContactDetails: CONTACT_DETAILS_QUERY,
  Education: EDUCATION_QUERY,
  Gallery: GALLERY_QUERY,
  GigIndex: GIG_INDEX_QUERY,
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
