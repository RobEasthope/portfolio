// Legacy schema types
import Details from '~/components/about/Details/Details.schema';
import altImage from '~/legacy-schemas/altImage.schema';
import blockContentSchema from '~/legacy-schemas/blockContent.schema';

import EmailLink from '~/components/base/EmailLink/EmailLink.schema';
import EmailLinkWithTitle from '~/components/base/EmailLink/EmailLinkWithTitle.schema';
import ExternalLink from '~/components/base/ExternalLink/ExternalLink.schema';
import ExternalLinkWithTitle from '~/components/base/ExternalLink/ExternalLinkWithTitle.schema';
import InternalLink from '~/components/base/InternalLink/InternalLink.schema';
import InternalLinkWithTitle from '~/components/base/InternalLink/InternalLinkWithTitle.schema';
import BasicText from '~/components/base/Prose/components/BasicText/BasicText.schema';
import FullText from '~/components/base/Prose/components/FullText/FullText.schema';
import ProjectText from '~/components/base/Prose/components/ProjectText/ProjectText.schema';

import Footer from '~/components/navigation/Footer/Footer.schema';
import Header from '~/components/navigation/Header/Header.schema';

import AppSettings from '~/components/settings/AppSettings/AppSettings.schema';
import MetadataFallbacks from '~/components/settings/MetadataFallbacks/MetadataFallbacks.schema';

import Dot from '~/components/blocks/Dot/Dot.schema';
import education from '~/components/blocks/Education/Education.schema';
import Gallery from '~/components/blocks/Gallery/Gallery.schema';
import GalleryImage from '~/components/blocks/Gallery/components/GalleryImage/GalleryImage.schema';
import gig from '~/components/blocks/Gig/Gig.schema';
import Image from '~/components/blocks/Image/Image.schema';
import LandingHero from '~/components/blocks/LandingHero/LandingHero.schema';
import MuxVideo from '~/components/blocks/MuxVideo/MuxVideo.schema';
import organisation from '~/components/blocks/Organisation/Organisation.schema';
import Organisations from '~/components/blocks/Organisation/Organisations.schema';
import PageTitle from '~/components/blocks/PageTitle/PageTitle.schema';
import ProjectIndex from '~/components/blocks/ProjectIndex/ProjectIndex.schema';
import Spacer from '~/components/blocks/Spacer/Spacer.schema';
import Text from '~/components/blocks/Text/Text.schema';
import VimeoVideo from '~/components/blocks/VimeoVideo/VimeoVideo.schema';
import YoutubeVideo from '~/components/blocks/YoutubeVideo/YoutubeVideo.schema';

// Pages
import page from '~/components/pages/Page/Page.schema';
import project from '~/components/pages/Project/Project.schema';
// Data
import tech from '~/components/pages/Project/schemas/Tech.schema';

export const schemaTypes = [
  // Legacy schema types
  altImage,
  blockContentSchema,

  // Links
  EmailLink,
  EmailLinkWithTitle,
  ExternalLink,
  ExternalLinkWithTitle,
  InternalLink,
  InternalLinkWithTitle,

  // Navigation
  Header,
  Footer,

  // Formatted text
  BasicText,
  FullText,
  ProjectText,

  // Settings
  AppSettings,
  MetadataFallbacks,

  // About
  Details,

  // Data
  tech,
  gig,
  organisation,
  education,

  // Content UI
  Dot,
  GalleryImage,
  Gallery,
  Image,
  LandingHero,
  Organisations,
  MuxVideo,
  PageTitle,
  ProjectIndex,
  Spacer,
  Text,
  VimeoVideo,
  YoutubeVideo,

  // Pages
  page,
  project,
];
