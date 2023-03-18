// Links
import internalLink from "ui-pkg/base/links/InternalLink/InternalLink.schema";
import internalLinkWithTitle from "ui-pkg/base/links/InternalLink/InternalLinkWithTitle.schema";
import externalLink from "ui-pkg/base/links/ExternalLink/ExternalLink.schema";
import externalLinkWithTitle from "ui-pkg/base/links/ExternalLink/ExternalLinkWithTitle.schema";

// Navigation
import Header from "ui-pkg/navigation/Header/Header.schema";
import Footer from "ui-pkg/navigation/Footer/Footer.schema";

// Media
import altImage from "ui-pkg/base/media/Picture/altImage.schema";

// Formatted text
import blockContent from "ui-pkg/base/formatted-text/ExampleFormattedText/BlockContent.schema";
import ProjectText from "ui-pkg/base/formatted-text/ProjectText/ProjectText.schema";
import BasicText from "ui-pkg/base/formatted-text/BasicText/BasicText.schema";
import ExampleText from "ui-pkg/base/formatted-text/ExampleFormattedText/ExampleFormattedText.schema";

// Settings
import details from "ui-pkg/base/settings/Details.schema";
import Settings from "ui-pkg/base/settings/Settings.schema";
import GlobalMetadata from "ui-pkg/base/settings/GlobalMetadata.schema";

// Data
import tech from "ui-pkg/sections/Tech/schemas/Tech.schema";
import gig from "ui-pkg/sections/Gig/schemas/Gig.schema";
import project from "ui-pkg/pages/Project/Project.schema";
import organisation from "ui-pkg/sections/Organisation/schemas/Organisation.schema";
import education from "ui-pkg/sections/EducationBlock/schemas/Education.schema";

// Content UI
import ExampleSection from "ui-pkg/sections/ExampleSection/ExampleSection.schema";
import GalleryImage from "ui-pkg/sections/Gallery/schemas/GalleryImage.schema";
import Gallery from "ui-pkg/sections/Gallery/Gallery.schema";
import Image from "ui-pkg/sections/Image/Image.schema";

import LandingHero from "ui-pkg/sections/LandingHero/LandingHero.schema";
import MuxVideo from "ui-pkg/sections/MuxVideo/MuxVideo.schema";
import PageTitle from "ui-pkg/sections/PageTitle/PageTitle.schema";
import ProjectIndex from "ui-pkg/sections/ProjectIndex/ProjectIndex.schema";
import Spacer from "ui-pkg/sections/Spacer/Spacer.schema";
import Text from "ui-pkg/sections/Text/Text.schema";
import VimeoVideo from "ui-pkg/sections/VimeoVideo/VimeoVideo.schema";
import YoutubeVideo from "ui-pkg/sections/YoutubeVideo/YoutubeVideo.schema";

// Pages
import page from "ui-pkg/pages/Page/Page.schema";

export const schemaTypes = [
  // Links
  internalLink,
  internalLinkWithTitle,
  externalLink,
  externalLinkWithTitle,

  // Navigation
  Header,
  Footer,

  // Media
  altImage,

  // Formatted text
  blockContent,
  ProjectText,
  BasicText,
  ExampleText,

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
  ExampleSection,
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
