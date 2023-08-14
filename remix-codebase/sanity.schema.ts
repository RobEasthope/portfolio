import EmailLink from '~/components/_base/EmailLink/EmailLink.schema';
import EmailLinkWithTitle from '~/components/_base/EmailLink/EmailLinkWithTitle.schema';
import ExternalLink from '~/components/_base/ExternalLink/ExternalLink.schema';
import ExternalLinkWithTitle from '~/components/_base/ExternalLink/ExternalLinkWithTitle.schema';
import InternalLink from '~/components/_base/InternalLink/InternalLink.schema';
import InternalLinkWithTitle from '~/components/_base/InternalLink/InternalLinkWithTitle.schema';
import BasicText from '~/components/_base/Prose/components/BasicText/BasicText.schema';
import FullText from '~/components/_base/Prose/components/FullText/FullText.schema';
import ProjectText from '~/components/_base/Prose/components/ProjectText/ProjectText.schema';
import Gallery from '~/components/generic/Gallery/Gallery.schema';
import GalleryImage from '~/components/generic/Gallery/components/GalleryImage/GalleryImage.schema';
import Image from '~/components/generic/Image/Image.schema';
import MuxVideo from '~/components/generic/MuxVideo/MuxVideo.schema';
import page from '~/components/generic/Page/Page.schema';
import Text from '~/components/generic/Text/Text.schema';
import VimeoVideo from '~/components/generic/VimeoVideo/VimeoVideo.schema';
import YoutubeVideo from '~/components/generic/YoutubeVideo/YoutubeVideo.schema';
import project from '~/components/work/Project/Project.schema';
import tech from '~/components/work/Project/schemas/Tech.schema';
import ProjectIndex from '~/components/work/ProjectIndex/ProjectIndex.schema';

import AppSettings from '~/components/settings/AppSettings/AppSettings.schema';
import MetadataFallbacks from '~/components/settings/MetadataFallbacks/MetadataFallbacks.schema';

import Footer from '~/components/navigation/Footer/Footer.schema';
import Header from '~/components/navigation/Header/Header.schema';

import Dot from '~/components/decoration/Dot/Dot.schema';
import LandingHero from '~/components/decoration/LandingHero/LandingHero.schema';
import PageTitle from '~/components/decoration/PageTitle/PageTitle.schema';
import Spacer from '~/components/decoration/Spacer/Spacer.schema';

import CV from '~/components/about/CV/CV.schema';
import ContactDetails from '~/components/about/ContactDetails/ContactDetails.schema';
import Details from '~/components/about/ContactDetails/Details.schema';
import Education from '~/components/about/Education/Education.schema';
import EduInstitution from '~/components/about/Education/components/EduInstitution/EduInstitution.schema';
import GigIndex from '~/components/about/GigIndex/GigIndex.schema';
import gig from '~/components/about/GigIndex/components/Gig/Gig.schema';
import organisation from '~/components/about/Organisation/Organisation.schema';
import Organisations from '~/components/about/Organisation/Organisations.schema';

export const schemaTypes = [
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
  EduInstitution,

  // Content UI
  Dot,
  ContactDetails,
  Education,
  GalleryImage,
  Gallery,
  GigIndex,
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
  CV,
  page,
  project,
];
