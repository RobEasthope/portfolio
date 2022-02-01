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

// Media
import altImage from '../../packages/ui/base/media/Picture/altImage.schema';

// Formatted text
import blockContent from '../../packages/ui/base/formatted-text/ExampleFormattedText/BlockContent.schema';
import ExampleText from '../../packages/ui/base/formatted-text/ExampleFormattedText/ExampleFormattedText.schema';

// Settings
import Settings from '../../packages/ui/base/settings/Settings.schema';
import GlobalMetadata from '../../packages/ui/base/settings/GlobalMetadata.schema';

// Data
import tech from '../../packages/ui/content/Tech/schemas/Tech.schema';
import gig from '../../packages/ui/content/Gig/schemas/Gig.schema';
import project from '../../packages/ui/pages/Project/Project.schema';
import organisation from '../../packages/ui/content/Organisation/schemas/Organisation.schema';
import education from '../../packages/ui/content/EducationBlock/schemas/Education.schema';

// Content UI
import ExampleSection from '../../packages/ui/content/ExampleSection/ExampleSection.schema';
import portfolio from '../../packages/ui/content/PortfolioBlock/PortfolioBlock.schema';
import sandbox from '../../packages/ui/content/SandboxBlock/SandboxBlock.schema';
import opensource from '../../packages/ui/content/OpenSource/schemas/Opensource.schema';
import landing from '../../packages/ui/content/LandingBlock/LandingBlock.schema';
import about from '../../packages/ui/content/AboutBlock/About.schema';

// Pages
import page from '../../packages/ui/pages/Page/Page.schema';

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

    // Media
    altImage,

    // Formatted text
    blockContent,
    ExampleText,

    // Settings
    Settings,
    GlobalMetadata,

    // Data
    tech,
    gig,
    organisation,
    education,

    // Content UI
    ExampleSection,
    portfolio,
    sandbox,
    opensource,
    landing,
    about,

    // Pages
    page,
    project

  ]),
})
