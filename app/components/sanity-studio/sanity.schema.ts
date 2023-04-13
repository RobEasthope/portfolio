// Links
import EmailLink from '~/components/base/EmailLink/EmailLink.schema';
import EmailLinkWithTitle from '~/components/base/EmailLink/EmailLinkWithTitle.schema';
import ExternalLink from '~/components/base/ExternalLink/ExternalLink.schema';
import ExternalLinkWithTitle from '~/components/base/ExternalLink/ExternalLinkWithTitle.schema';
import InternalLink from '~/components/base/InternalLink/InternalLink.schema';
import InternalLinkWithTitle from '~/components/base/InternalLink/InternalLinkWithTitle.schema';

// Navigation
import Header from '~/components/navigation/Header/Header.schema';
import Footer from '~/components/navigation/Footer/Footer.schema';

// Formatted text
import BasicText from '~/components/base/Prose/components/BasicText/BasicText.schema';
import FullText from '~/components/base/Prose/components/FullText/FullText.schema';
import ProjectText from '~/components/base/Prose/components/ProjectText/ProjectText.schema';

// Settings
import details from '~/components/settings/Details.schema';
import Settings from '~/components/settings/Settings.schema';
import GlobalMetadata from '~/components/settings/GlobalMetadata.schema';

// Data
import tech from '~/components/blocks/Tech/Tech.schema';
import gig from '~/components/blocks/Gig/Gig.schema';
import project from '~/components/pages/Project/Project.schema';
import organisation from '~/components/blocks/Organisation/Organisation.schema';
import education from '~/components/blocks/Education/Education.schema';

// Content UI
import GalleryImage from '~/components/blocks/Gallery/components/GalleryImage/GalleryImage.schema';
import Gallery from '~/components/blocks/Gallery/Gallery.schema';
import Image from '~/components/blocks/Image/Image.schema';

import LandingHero from '~/components/blocks/LandingHero/LandingHero.schema';
import MuxVideo from '~/components/blocks/MuxVideo/MuxVideo.schema';
import PageTitle from '~/components/blocks/PageTitle/PageTitle.schema';
import ProjectIndex from '~/components/blocks/ProjectIndex/ProjectIndex.schema';
import Spacer from '~/components/blocks/Spacer/Spacer.schema';
import Text from '~/components/blocks/Text/Text.schema';
import VimeoVideo from '~/components/blocks/VimeoVideo/VimeoVideo.schema';
import YoutubeVideo from '~/components/blocks/YoutubeVideo/YoutubeVideo.schema';

// Pages
import page from '~/components/pages/Page/Page.schema';

// Legacy schema types
import altImage from '~/legacy-schemas/altImage.schema';
import blockContentSchema from '~/legacy-schemas/blockContent.schema';

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
  details,
  Settings,
  GlobalMetadata,

  // Data
  tech,
  gig,
  organisation,
  education,

  // Content UI
  GalleryImage,
  Gallery,
  Image,
  LandingHero,
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
