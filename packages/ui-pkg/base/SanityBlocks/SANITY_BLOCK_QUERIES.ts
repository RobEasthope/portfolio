import { CAREERS_QUERY } from "ui-pkg/blocks/Careers/Careers.query";
import { IMAGE_QUERY } from "ui-pkg/blocks/Image/Image.query";
import { LARGE_TITLE_HERO_QUERY } from "ui-pkg/blocks/LargeTitleHero/LargeTitleHero.query";
import { LARGE_TITLE_MULTIPLE_IMAGES_HERO_QUERY } from "ui-pkg/blocks/LargeTitleMultipleImages/LargeTitleMultipleImages.query";
import { LOGO_HERO_QUERY } from "ui-pkg/blocks/LogoHero/LogoHero.query";
import { MEDIA_CENTRE_QUERY } from "ui-pkg/blocks/MediaCentre/MediaCentre.query";
import { NEWS_ARTICLE_INDEX_QUERY } from "ui-pkg/blocks/NewsArticleIndex/NewsArticleIndex.query";
import { PAGE_HERO_QUERY } from "ui-pkg/blocks/PageHero/PageHero.query";
import { PROFILES_QUERY } from "ui-pkg/blocks/Profiles/Profiles.query";
import { SDG_HERO_QUERY } from "ui-pkg/blocks/SDGHero/SDGHero.query";
import { SDG_INDEX_QUERY } from "ui-pkg/blocks/SDGIndex/SDGIndex.query";
import { SDG_INDEX_LARGE_QUERY } from "ui-pkg/blocks/SDGIndexLarge/SDGIndexLarge.query";
import { SMALL_TITLE_AND_GLOBE_QUERY } from "ui-pkg/blocks/SmallTitleAndGlobe/SmallTitleAndGlobe.query";
import { SPACER_QUERY } from "ui-pkg/blocks/Spacer/Spacer.query";
import { TEXT_QUERY } from "ui-pkg/blocks/Text/Text.query";
import { TEXT_AND_IMAGE_QUERY } from "ui-pkg/blocks/TextAndImage/TextAndImage.query";
import { TIMELINE_QUERY } from "ui-pkg/blocks/Timeline/Timeline.query";
import { YOUTUBE_VIDEO_QUERY } from "ui-pkg/blocks/YoutubeVideo/YoutubeVideo.query";

export const SANITY_BLOCK_QUERIES: Record<string, string> = {
  Careers: CAREERS_QUERY,
  Image: IMAGE_QUERY,
  LargeTitleHero: LARGE_TITLE_HERO_QUERY,
  LargeTitleMultipleImages: LARGE_TITLE_MULTIPLE_IMAGES_HERO_QUERY,
  LogoHero: LOGO_HERO_QUERY,
  MediaCentre: MEDIA_CENTRE_QUERY,
  NewsArticleIndex: NEWS_ARTICLE_INDEX_QUERY,
  SDGHero: SDG_HERO_QUERY,
  SDGIndex: SDG_INDEX_QUERY,
  SDGIndexLarge: SDG_INDEX_LARGE_QUERY,
  PageHero: PAGE_HERO_QUERY,
  Profiles: PROFILES_QUERY,
  SmallTitleAndGlobe: SMALL_TITLE_AND_GLOBE_QUERY,
  Spacer: SPACER_QUERY,
  Text: TEXT_QUERY,
  TextAndImage: TEXT_AND_IMAGE_QUERY,
  Timeline: TIMELINE_QUERY,
  YoutubeVideo: YOUTUBE_VIDEO_QUERY,
};
