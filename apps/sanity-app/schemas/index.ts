// Links
import InternalLink from "ui-pkg/base/InternalLink/InternalLink.schema";
import InternalLinkWithTitle from "ui-pkg/base/InternalLink/InternalLinkWithTitle.schema";
import ExternalLink from "ui-pkg/base/ExternalLink/ExternalLink.schema";
import ExternalLinkWithTitle from "ui-pkg/base/ExternalLink/ExternalLinkWithTitle.schema";

// Navigation
import Header from "ui-pkg/navigation/Header/Header.schema";
import Footer from "ui-pkg/navigation/Footer/Footer.schema";

// Formatted text
import ProjectText from "ui-pkg/base/Prose/components/ProjectText/ProjectText.schema";
import BasicText from "ui-pkg/base/Prose/components/BasicText/BasicText.schema";

// Settings
import details from "ui-pkg/settings/Details.schema";
import Settings from "ui-pkg/settings/Settings.schema";
import GlobalMetadata from "ui-pkg/settings/GlobalMetadata.schema";

// Data
import tech from "ui-pkg/blocks/Tech/Tech.schema";
import gig from "ui-pkg/blocks/Gig/Gig.schema";
import project from "ui-pkg/pages/Project/Project.schema";
import organisation from "ui-pkg/blocks/Organisation/Organisation.schema";
import education from "ui-pkg/blocks/Education/Education.schema";

// Content UI
import ExampleSection from "ui-pkg/blocks/ExampleSection/ExampleSection.schema";
import GalleryImage from "ui-pkg/blocks/Gallery/components/GalleryImage/GalleryImage.schema";
import Gallery from "ui-pkg/blocks/Gallery/Gallery.schema";
import Image from "ui-pkg/blocks/Image/Image.schema";

import LandingHero from "ui-pkg/blocks/LandingHero/LandingHero.schema";
import MuxVideo from "ui-pkg/blocks/MuxVideo/MuxVideo.schema";
import PageTitle from "ui-pkg/blocks/PageTitle/PageTitle.schema";
import ProjectIndex from "ui-pkg/blocks/ProjectIndex/ProjectIndex.schema";
import Spacer from "ui-pkg/blocks/Spacer/Spacer.schema";
import Text from "ui-pkg/blocks/Text/Text.schema";
import VimeoVideo from "ui-pkg/blocks/VimeoVideo/VimeoVideo.schema";
import YoutubeVideo from "ui-pkg/blocks/YoutubeVideo/YoutubeVideo.schema";

// Pages
import page from "ui-pkg/pages/Page/Page.schema";

// Legacy schema types
import altImage from "./altImage.schema";

export const schemaTypes = [
  // Legacy schema types
  altImage,

  // Links
  InternalLink,
  InternalLinkWithTitle,
  ExternalLink,
  ExternalLinkWithTitle,

  // Navigation
  Header,
  Footer,

  // Formatted text
  ProjectText,
  BasicText,

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
