import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Header
 *
 *
 */
export interface Header extends SanityDocument {
  _type: "Header";

  /**
   * Header navigation — `array`
   *
   *
   */
  rawNavigation: Array<
    SanityKeyed<InternalLinkWithTitle> | SanityKeyed<ExternalLinkWithTitle>
  >;

  /**
   * Logo — `image`
   *
   *
   */
  logo: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Footer
 *
 *
 */
export interface Footer extends SanityDocument {
  _type: "Footer";

  /**
   * Footer navigation — `array`
   *
   *
   */
  rawNavigation: Array<
    SanityKeyed<InternalLinkWithTitle> | SanityKeyed<ExternalLinkWithTitle>
  >;

  /**
   * Copyright text — `string`
   *
   *
   */
  copyrightText: string;
}

/**
 * Details
 *
 *
 */
export interface Details extends SanityDocument {
  _type: "details";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Email address — `url`
   *
   *
   */
  email?: string;

  /**
   * Phone number — `url`
   *
   *
   */
  phoneNumber?: string;

  /**
   * Twitter profile — `url`
   *
   *
   */
  twitter?: string;

  /**
   * LinkedIn profile — `url`
   *
   *
   */
  linkedin?: string;

  /**
   * Github profile — `url`
   *
   *
   */
  github?: string;

  /**
   * Portfolio URL — `url`
   *
   *
   */
  portfolioUrl?: string;
}

/**
 * Site settings
 *
 *
 */
export interface Settings extends SanityDocument {
  _type: "Settings";

  /**
   * Home page — `reference`
   *
   * Select home page (Critical requirement)
   */
  rawHomePageRef: SanityReference<Page>;
}

/**
 * Global SEO metadata
 *
 *
 */
export interface GlobalMetadata extends SanityDocument {
  _type: "GlobalMetadata";

  /**
   * Sitename — `string`
   *
   * Used for SEO & descriptive purposes
   */
  globalSitename: string;

  /**
   * Page title — `string`
   *
   * Can be overridden on a page by page basis in the pages "Metadata" tab.
   */
  globalTitle: string;

  /**
   * Page title template — `string`
   *
   * Displayed after the page title e.g. PAGE TITLE | Ida
   */
  globalTitleTemplate: string;

  /**
   * Page description — `text`
   *
   * Can be overridden on a page by page basis in the pages "Metadata" tab.
   */
  globalDescription: string;

  /**
   * Page thumbnail — `image`
   *
   * Can be overridden on a page by page basis in the pages "Metadata" tab.
   */
  globalThumbnail: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Canonical URL — `url`
   *
   * The main site url. Used to create canonical url
   */
  canonicalUrl?: string;

  /**
   * Twitter site username — `string`
   *
   * https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started#attribution
   */
  globalTwitterSiteHandle?: string;
}

/**
 * Tech
 *
 *
 */
export interface Tech extends SanityDocument {
  _type: "tech";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * URL — `url`
   *
   *
   */
  url?: string;

  /**
   * Logo — `image`
   *
   *
   */
  logo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Gig
 *
 *
 */
export interface Gig extends SanityDocument {
  _type: "gig";

  /**
   * Employer — `reference`
   *
   *
   */
  employer?: SanityReference<Organisation>;

  /**
   * Job title — `string`
   *
   *
   */
  jobTitle?: string;

  /**
   * Description — `blockContent`
   *
   * I keep six honest serving-men; (They taught me all I knew); Their names are What and Why and When; And How and Where and Who. - Rudyard Kipling
   */
  description?: BlockContent;

  /**
   * Related projects — `array`
   *
   *
   */
  projects?: Array<SanityKeyedReference<Project>>;

  /**
   * Start date — `date`
   *
   *
   */
  startDate?: string;

  /**
   * End date — `date`
   *
   *
   */
  endDate?: string;
}

/**
 * Organisation
 *
 *
 */
export interface Organisation extends SanityDocument {
  _type: "organisation";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * URL — `url`
   *
   *
   */
  url?: string;

  /**
   * Logo — `image`
   *
   *
   */
  logo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Education
 *
 *
 */
export interface Education extends SanityDocument {
  _type: "education";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * URL — `url`
   *
   *
   */
  url?: string;

  /**
   * Qualification — `string`
   *
   *
   */
  qualification?: string;

  /**
   * When — `string`
   *
   *
   */
  when?: string;

  /**
   * Logo — `image`
   *
   *
   */
  logo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * About
 *
 *
 */
export interface About extends SanityDocument {
  _type: "about";

  /**
   * About section title — `string`
   *
   *
   */
  title?: string;

  /**
   * Profile — `blockContent`
   *
   *
   */
  profile?: BlockContent;

  /**
   * Portrait — `image`
   *
   *
   */
  portrait?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Employeers — `array`
   *
   *
   */
  employeers?: Array<SanityKeyedReference<Organisation>>;

  /**
   * Skills — `array`
   *
   *
   */
  skills?: Array<SanityKeyedReference<Tech>>;

  /**
   * Open source projects — `array`
   *
   *
   */
  opensource?: Array<SanityKeyedReference<Opensource>>;

  /**
   * Education — `array`
   *
   *
   */
  education?: Array<SanityKeyedReference<Education>>;

  /**
   * Clients — `array`
   *
   *
   */
  clients?: Array<SanityKeyedReference<Organisation>>;
}

/**
 * Landing
 *
 *
 */
export interface Landing extends SanityDocument {
  _type: "landing";

  /**
   * Tagline — `string`
   *
   *
   */
  tagline?: string;

  /**
   * Background image — `altImage`
   *
   *
   */
  image?: AltImage;

  /**
   * Landing video — `mux.video`
   *
   *
   */
  video?: MuxVideo;

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;
}

/**
 * Portfolio
 *
 *
 */
export interface Portfolio extends SanityDocument {
  _type: "portfolio";

  /**
   * Portfolio section title — `string`
   *
   *
   */
  title?: string;

  /**
   * Portfolio index — `array`
   *
   *
   */
  portfolioIndex?: Array<SanityKeyedReference<Project>>;
}

/**
 * Open source projects
 *
 *
 */
export interface Opensource extends SanityDocument {
  _type: "opensource";

  /**
   * Open source title — `string`
   *
   *
   */
  title?: string;

  /**
   * Open source projects — `array`
   *
   *
   */
  opensourceIndex?: Array<SanityKeyedReference<Project>>;
}

/**
 * Sandbox
 *
 *
 */
export interface Sandbox extends SanityDocument {
  _type: "sandbox";

  /**
   * Sandbox section title — `string`
   *
   *
   */
  title?: string;

  /**
   * Sandbox index — `array`
   *
   *
   */
  sandboxIndex?: Array<SanityKeyedReference<Project>>;
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "Page";

  /**
   * Page details — `string`
   *
   *
   */
  headingpagedetails?: string;

  /**
   * Page title — `string`
   *
   *
   */
  title: string;

  /**
   * Slug — `slug`
   *
   * Set the page URL
   */
  slug: { _type: "slug"; current: string };

  /**
   * Page content — `string`
   *
   *
   */
  headingpagecontent?: string;

  /**
   * Page sections — `array`
   *
   *
   */
  rawSections?: Array<SanityKeyed<ExampleSection>>;

  /**
   * Page metadata — `string`
   *
   *
   */
  headingpagemetadata?: string;

  /**
   * Metadata title — `string`
   *
   * Used in browser tab titles and social media
   */
  metadataTitle: string;

  /**
   * Metadata description — `text`
   *
   * Used in social media and search engine listings
   */
  metadataDescription: string;

  /**
   * Metadata image — `image`
   *
   * Used in social media and search engine listings.
   */
  metadataImage: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Project
 *
 *
 */
export interface Project extends SanityDocument {
  _type: "project";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Short title — `string`
   *
   *
   */
  shortTitle?: string;

  /**
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Body — `blockContent`
   *
   * I keep six honest serving-men; (They taught me all I knew); Their names are What and Why and When; And How and Where and Who. - Rudyard Kipling
   */
  body?: BlockContent;

  /**
   * Showreel — `mux.video`
   *
   *
   */
  showreel?: MuxVideo;

  /**
   * Image gallery — `array`
   *
   *
   */
  gallery?: Array<SanityKeyed<AltImage>>;

  /**
   * Client — `reference`
   *
   *
   */
  client?: SanityReference<Organisation>;

  /**
   * Agency — `reference`
   *
   *
   */
  agency?: SanityReference<Organisation>;

  /**
   * Date — `string`
   *
   *
   */
  date?: string;

  /**
   * Project url title — `string`
   *
   *
   */
  projectUrlTitle?: string;

  /**
   * Project url — `url`
   *
   *
   */
  projectUrl?: string;

  /**
   * Repo url — `url`
   *
   *
   */
  repoUrl?: string;

  /**
   * Technologies used — `array`
   *
   *
   */
  techUsed?: Array<SanityKeyedReference<Tech>>;

  /**
   * Thumbnail image — `image`
   *
   *
   */
  thumbnailImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

export type InternalLink = {
  _type: "InternalLink";
  /**
   * Page — `reference`
   *
   *
   */
  internalUID: SanityReference<Page>;
};

export type InternalLinkWithTitle = {
  _type: "InternalLinkWithTitle";
  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Page — `reference`
   *
   *
   */
  internalUID: SanityReference<Page>;
};

export type ExternalLink = {
  _type: "ExternalLink";
  /**
   * URL — `url`
   *
   *
   */
  url?: string;
};

export type ExternalLinkWithTitle = {
  _type: "ExternalLinkWithTitle";
  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * URL — `url`
   *
   *
   */
  url?: string;
};

export type AltImage = {
  _type: "altImage";
  /**
   * Asset — `image`
   *
   *
   */
  imageAsset?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Alt text — `string`
   *
   *
   */
  altText?: string;
};

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type ProjectText = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<Gallery>
  | SanityKeyed<Image>
  | SanityKeyed<MuxVideo>
  | SanityKeyed<VimeoVideo>
  | SanityKeyed<YoutubeVideo>
>;

export type BasicText = Array<SanityKeyed<SanityBlock>>;

export type ExampleFormattedText = Array<SanityKeyed<SanityBlock>>;

export type ExampleSection = {
  _type: "ExampleSection";
  /**
   * Heading — `string`
   *
   *
   */
  heading: string;

  /**
   * Text — `ExampleFormattedText`
   *
   *
   */
  text?: ExampleFormattedText;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Caption — `string`
     *
     *
     */
    caption?: string;

    /**
     * Attribution — `string`
     *
     *
     */
    attribution?: string;
  };
};

export type GalleryImage = {
  _type: "GalleryImage";
  /**
   * storybook — `note`
   *
   *
   */
  storybook?: Note;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Caption — `string`
     *
     *
     */
    caption?: string;

    /**
     * Attribution — `string`
     *
     *
     */
    attribution?: string;
  };
};

export type Gallery = {
  _type: "Gallery";
  /**
   * storybook — `note`
   *
   *
   */
  storybook?: Note;

  /**
   * Images — `array`
   *
   *
   */
  images: Array<SanityKeyed<GalleryImage>>;

  /**
   * Gallery caption — `text`
   *
   *
   */
  galleryCaption?: string;

  /**
   * Gallery layout — `string`
   *
   *
   */
  headinggallerylayout?: string;

  /**
   * Number of columns — `string`
   *
   * Number of columns at full size
   */
  columns: "1" | "2" | "3" | "4";

  /**
   * Gallery aspect ratio — `number`
   *
   *
   */
  aspectRatio: number;

  /**
   * Max width — `string`
   *
   * Defaults to large
   */
  maxWidth?: "small" | "medium" | "large" | "full";
};

export type Image = {
  _type: "Image";
  /**
   * storybook — `note`
   *
   *
   */
  storybook?: Note;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Caption — `string`
     *
     *
     */
    caption?: string;

    /**
     * Attribution — `string`
     *
     *
     */
    attribution?: string;
  };

  /**
   * Image aspect ratio — `number`
   *
   * Defaults to original image aspect ratio
   */
  aspectRatio?: number;

  /**
   * Max width — `string`
   *
   * Defaults to large
   */
  maxWidth?: "small" | "medium" | "large" | "full";
};

export type LandingHero = {
  _type: "LandingHero";
  /**
   * storybook — `note`
   *
   *
   */
  storybook?: Note;

  /**
   * Foreground — `string`
   *
   *
   */
  headingforeground?: string;

  /**
   * Logo — `image`
   *
   *
   */
  logo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Background — `string`
   *
   *
   */
  headingbackground?: string;

  /**
   * Background mode — `string`
   *
   *
   */
  bkgMode?: "image" | "video";

  /**
   * Background image — `image`
   *
   *
   */
  bkgImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Attribution — `string`
     *
     *
     */
    attribution?: string;
  };

  /**
   * Background video — `mux.video`
   *
   *
   */
  rawBackgroundVideo?: MuxVideo;

  /**
   * Background caption — `text`
   *
   *
   */
  caption?: string;
};

export type MuxVideo = {
  _type: "MuxVideo";
  /**
   * storybook — `note`
   *
   *
   */
  storybook?: Note;

  /**
   * Mux video — `mux.video`
   *
   *
   */
  rawMuxVideo?: MuxVideo;

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;

  /**
   * Max width — `string`
   *
   * Defaults to large
   */
  maxWidth?: "small" | "medium" | "large" | "full";
};

export type Text = {
  _type: "Text";
  /**
   * storybook — `note`
   *
   *
   */
  storybook?: Note;

  /**
   * Text — `BasicText`
   *
   *
   */
  text?: BasicText;
};

export type VimeoVideo = {
  _type: "VimeoVideo";
  /**
   * storybook — `note`
   *
   *
   */
  storybook?: Note;

  /**
   * Vimeo URL — `string`
   *
   *
   */
  url?: string;

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;

  /**
   * Max width — `string`
   *
   * Defaults to large
   */
  maxWidth?: "small" | "medium" | "large" | "full";
};

export type YoutubeVideo = {
  _type: "YoutubeVideo";
  /**
   * storybook — `note`
   *
   *
   */
  storybook?: Note;

  /**
   * Youtube URL — `string`
   *
   *
   */
  url?: string;

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;

  /**
   * Max width — `string`
   *
   * Defaults to large
   */
  maxWidth?: "small" | "medium" | "large" | "full";
};

export type Documents =
  | Header
  | Footer
  | Details
  | Settings
  | GlobalMetadata
  | Tech
  | Gig
  | Organisation
  | Education
  | About
  | Landing
  | Portfolio
  | Opensource
  | Sandbox
  | Page
  | Project;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Note = any;
