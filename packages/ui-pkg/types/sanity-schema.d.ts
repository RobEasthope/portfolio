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
   * Navigation (Left) — `array`
   *
   *
   */
  rawNavigationLeft: Array<
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

  /**
   * Navigation (Right) — `array`
   *
   *
   */
  rawNavigationRight: Array<
    SanityKeyed<InternalLinkWithTitle> | SanityKeyed<ExternalLinkWithTitle>
  >;
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
  copyrightText?: string;
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

  /**
   * Hide organisation — `boolean`
   *
   *
   */
  hiddenOrg?: boolean;
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
 * Project index
 *
 *
 */
export interface ProjectIndex extends SanityDocument {
  _type: "ProjectIndex";

  /**
   * Portfolio section title — `string`
   *
   *
   */
  title?: string;

  /**
   * Index — `array`
   *
   *
   */
  index?: Array<SanityKeyedReference<Project>>;
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
  rawSections?: Array<
    | SanityKeyed<ExampleSection>
    | SanityKeyed<Gallery>
    | SanityKeyed<Image>
    | SanityKeyed<LandingHero>
    | SanityKeyed<PageTitle>
    | SanityKeyed<ProjectIndex>
    | SanityKeyed<Spacer>
    | SanityKeyed<Text>
    | SanityKeyed<VimeoVideo>
    | SanityKeyed<YoutubeVideo>
  >;

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
   * Project slug — `slug`
   *
   *
   */
  pageSlug?: { _type: "pageSlug"; current: string };

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
   * Text — `ProjectText`
   *
   * I keep six honest serving-men; (They taught me all I knew); Their names are What and Why and When; And How and Where and Who. - Rudyard Kipling
   */
  projectText: ProjectText;

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
   * Date (Written form) — `string`
   *
   *
   */
  date?: string;

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
   *
   */
  maxWidth: "small" | "medium" | "large" | "full";
};

export type Image = {
  _type: "Image";
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
   * Foreground — `string`
   *
   *
   */
  headingforeground?: string;

  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Subheading — `string`
   *
   *
   */
  subheading?: string;

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
  rawMuxVideo?: MuxVideo;

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

export type PageTitle = {
  _type: "PageTitle";
  /**
   * Use page title? — `boolean`
   *
   *
   */
  usePageTitle: boolean;

  /**
   * Custom page title — `string`
   *
   *
   */
  customPageTitle?: string;
};

export type Spacer = {
  _type: "Spacer";
  /**
   * Height — `string`
   *
   * Defaults to single
   */
  height?:
    | "quarter"
    | "third"
    | "half"
    | "twoThirds"
    | "x1"
    | "x2"
    | "x3"
    | "x4"
    | "x5";
};

export type Text = {
  _type: "Text";
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
  | ProjectIndex
  | Page
  | Project;
