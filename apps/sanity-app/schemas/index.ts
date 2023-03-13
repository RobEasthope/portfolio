//Links
import internalLink from 'ui-pkg/base/links/InternalLink/InternalLink.schema'
import internalLinkWithTitle from 'ui-pkg/base/links/InternalLink/InternalLinkWithTitle.schema'
import externalLink from 'ui-pkg/base/links/ExternalLink/ExternalLink.schema'
import externalLinkWithTitle from 'ui-pkg/base/links/ExternalLink/ExternalLinkWithTitle.schema'

// Navigation
import Header from 'ui-pkg/navigation/Header/Header.schema'
import Footer from 'ui-pkg/navigation/Footer/Footer.schema'

// Media
import altImage from 'ui-pkg/base/media/Picture/altImage.schema'

// Formatted text
import blockContent from 'ui-pkg/base/formatted-text/ExampleFormattedText/BlockContent.schema'
import ProjectText from 'ui-pkg/base/formatted-text/ProjectText/ProjectText.schema'
import BasicText from 'ui-pkg/base/formatted-text/BasicText/BasicText.schema'
import ExampleText from 'ui-pkg/base/formatted-text/ExampleFormattedText/ExampleFormattedText.schema'

// Settings
import details from 'ui-pkg/base/settings/Details.schema'
import Settings from 'ui-pkg/base/settings/Settings.schema'
import GlobalMetadata from 'ui-pkg/base/settings/GlobalMetadata.schema'

// Data
import tech from 'ui-pkg/blocks/Tech/schemas/Tech.schema'
import gig from 'ui-pkg/blocks/Gig/schemas/Gig.schema'
import project from 'ui-pkg/pages/Project/Project.schema'
import organisation from 'ui-pkg/blocks/Organisation/schemas/Organisation.schema'
import education from 'ui-pkg/blocks/EducationBlock/schemas/Education.schema'

// Content UI
import ExampleSection from 'ui-pkg/blocks/ExampleSection/ExampleSection.schema'
import GalleryImage from 'ui-pkg/blocks/Gallery/schemas/GalleryImage.schema'
import Gallery from 'ui-pkg/blocks/Gallery/Gallery.schema'
import Image from 'ui-pkg/blocks/Image/Image.schema'

import LandingHero from 'ui-pkg/blocks/LandingHero/LandingHero.schema'
import MuxVideo from 'ui-pkg/blocks/MuxVideo/MuxVideo.schema'
import PageTitle from 'ui-pkg/blocks/PageTitle/PageTitle.schema'
import ProjectIndex from 'ui-pkg/blocks/ProjectIndex/ProjectIndex.schema'
import Spacer from 'ui-pkg/blocks/Spacer/Spacer.schema'
import Text from 'ui-pkg/blocks/Text/Text.schema'
import VimeoVideo from 'ui-pkg/blocks/VimeoVideo/VimeoVideo.schema'
import YoutubeVideo from 'ui-pkg/blocks/YoutubeVideo/YoutubeVideo.schema'

// Pages
import page from 'ui-pkg/pages/Page/Page.schema'

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
]
