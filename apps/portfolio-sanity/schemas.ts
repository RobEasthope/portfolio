// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

//Links
import internalLink from '../../packages/ui/base/links/InternalLink/InternalLink.schema.js';
import internalLinkWithTitle from '../../packages/ui/base/links/InternalLink/InternalLinkWithTitle.schema.js';
import externalLink from '../../packages/ui/base/links/ExternalLink/ExternalLink.schema.js';
import externalLinkWithTitle from '../../packages/ui/base/links/ExternalLink/ExternalLinkWithTitle.schema.js';

// Navigation
import Header from '../../packages/ui/navigation/Header/Header.schema.js';
import Footer from '../../packages/ui/navigation/Footer/Footer.schema.js';

// Media
import altImage from '../../packages/ui/base/media/Picture/altImage.schema';

// Formatted text
import blockContent from '../../packages/ui/base/formatted-text/ExampleFormattedText/BlockContent.schema';
import ProjectText from '../../packages/ui/base/formatted-text/ProjectText/ProjectText.schema';
import BasicText from '../../packages/ui/base/formatted-text/BasicText/BasicText.schema';
import ExampleText from '../../packages/ui/base/formatted-text/ExampleFormattedText/ExampleFormattedText.schema';

// Settings
import details from '../../packages/ui/base/settings/Details.schema';
import Settings from '../../packages/ui/base/settings/Settings.schema';
import GlobalMetadata from '../../packages/ui/base/settings/GlobalMetadata.schema';

// Data
import tech from '../../packages/ui/sections/Tech/schemas/Tech.schema';
import gig from '../../packages/ui/sections/Gig/schemas/Gig.schema';
import project from '../../packages/ui/layouts/Project/Project.schema';
import organisation from '../../packages/ui/sections/Organisation/schemas/Organisation.schema';
import education from '../../packages/ui/sections/EducationBlock/schemas/Education.schema';

// Content UI
import about from '../../packages/ui/sections/AboutBlock/About.schema';
import ExampleSection from '../../packages/ui/sections/ExampleSection/ExampleSection.schema';
import GalleryImage from '../../packages/ui/sections/Gallery/schemas/GalleryImage.schema';
import Gallery from '../../packages/ui/sections/Gallery/Gallery.schema';
import Image from '../../packages/ui/sections/Image/Image.schema';
import landing from '../../packages/ui/sections/LandingBlock/LandingBlock.schema';
import LandingHero from '../../packages/ui/sections/LandingHero/LandingHero.schema';
import MuxVideo from '../../packages/ui/sections/MuxVideo/MuxVideo.schema';
import portfolio from '../../packages/ui/sections/PortfolioBlock/PortfolioBlock.schema';
import ProjectIndex from '../../packages/ui/sections/ProjectIndex/ProjectIndex.schema';
import opensource from '../../packages/ui/sections/OpenSource/schemas/Opensource.schema';
import sandbox from '../../packages/ui/sections/SandboxBlock/SandboxBlock.schema';
import Text from '../../packages/ui/sections/Text/Text.schema';
import VimeoVideo from '../../packages/ui/sections/VimeoVideo/VimeoVideo.schema';
import YoutubeVideo from '../../packages/ui/sections/YoutubeVideo/YoutubeVideo.schema';

// Pages
import page from '../../packages/ui/layouts/Page/Page.schema';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
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
    about,
    ExampleSection,
    GalleryImage,
    Gallery,
    Image,
    landing,
    LandingHero,
    MuxVideo,
    portfolio,
    ProjectIndex,
    opensource,
    sandbox,
    Text,
    VimeoVideo,
    YoutubeVideo,

    // Pages
    page,
    project

  ]),
})
