// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

//Links
import internalLink from "../../packages/ui-pkg/base/links/InternalLink/InternalLink.schema.js";
import internalLinkWithTitle from "../../packages/ui-pkg/base/links/InternalLink/InternalLinkWithTitle.schema.js";
import externalLink from "../../packages/ui-pkg/base/links/ExternalLink/ExternalLink.schema.js";
import externalLinkWithTitle from "../../packages/ui-pkg/base/links/ExternalLink/ExternalLinkWithTitle.schema.js";

// Navigation
import Header from "../../packages/ui-pkg/navigation/Header/Header.schema.js";
import Footer from "../../packages/ui-pkg/navigation/Footer/Footer.schema.js";

// Media
import altImage from "../../packages/ui-pkg/base/media/Picture/altImage.schema";

// Formatted text
import blockContent from "../../packages/ui-pkg/base/formatted-text/ExampleFormattedText/BlockContent.schema";
import ProjectText from "../../packages/ui-pkg/base/formatted-text/ProjectText/ProjectText.schema";
import BasicText from "../../packages/ui-pkg/base/formatted-text/BasicText/BasicText.schema";
import ExampleText from "../../packages/ui-pkg/base/formatted-text/ExampleFormattedText/ExampleFormattedText.schema";

// Settings
import details from "../../packages/ui-pkg/base/settings/Details.schema";
import Settings from "../../packages/ui-pkg/base/settings/Settings.schema";
import GlobalMetadata from "../../packages/ui-pkg/base/settings/GlobalMetadata.schema";

// Data
import tech from "../../packages/ui-pkg/sections/Tech/schemas/Tech.schema";
import gig from "../../packages/ui-pkg/sections/Gig/schemas/Gig.schema";
import project from "../../packages/ui-pkg/layouts/Project/Project.schema";
import organisation from "../../packages/ui-pkg/sections/Organisation/schemas/Organisation.schema";
import education from "../../packages/ui-pkg/sections/EducationBlock/schemas/Education.schema";

// Content UI
import ExampleSection from "../../packages/ui-pkg/sections/ExampleSection/ExampleSection.schema";
import GalleryImage from "../../packages/ui-pkg/sections/Gallery/schemas/GalleryImage.schema";
import Gallery from "../../packages/ui-pkg/sections/Gallery/Gallery.schema";
import Image from "../../packages/ui-pkg/sections/Image/Image.schema";

import LandingHero from "../../packages/ui-pkg/sections/LandingHero/LandingHero.schema";
import MuxVideo from "../../packages/ui-pkg/sections/MuxVideo/MuxVideo.schema";
import PageTitle from "../../packages/ui-pkg/sections/PageTitle/PageTitle.schema";
import ProjectIndex from "../../packages/ui-pkg/sections/ProjectIndex/ProjectIndex.schema";
import Spacer from "../../packages/ui-pkg/sections/Spacer/Spacer.schema";
import Text from "../../packages/ui-pkg/sections/Text/Text.schema";
import VimeoVideo from "../../packages/ui-pkg/sections/VimeoVideo/VimeoVideo.schema";
import YoutubeVideo from "../../packages/ui-pkg/sections/YoutubeVideo/YoutubeVideo.schema";

// Pages
import page from "../../packages/ui-pkg/layouts/Page/Page.schema";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
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
  ]),
});
