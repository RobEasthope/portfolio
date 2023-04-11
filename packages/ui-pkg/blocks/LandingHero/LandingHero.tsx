import { Box } from "ui-pkg/base/Box/Box";
import { SanityImage } from "ui-pkg/base/SanityImage/SanityImage";
import SanityMuxPlayer from "sanity-mux-player";
import { Type } from "ui-pkg/base/Type/Type";
import { METADATA_FALLBACK } from "ui-pkg/config/METADATA";
import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from "sanity-codegen";
import { ExternalLinkWithTitleSchemaProps } from "ui-pkg/base/ExternalLink/ExternalLink";
import { InternalLinkWithTitleSchemaProps } from "ui-pkg/base/InternalLink/InternalLink";

// TYPES
export type LandingHeroProps = {
  _type: "LandingHero";
  headingforeground?: string;
  heading?: string;
  subHeading?: string;
  headingbackground?: string;
  bkgMode?: "image" | "video";
  logo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
    attribution?: string;
  };
  bkgImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
    attribution?: string;
  };
  caption?: string;
  link: ExternalLinkWithTitleSchemaProps | InternalLinkWithTitleSchemaProps;
  muxVideo: unknown;
};

// MARKUP
export const LandingHero = ({
  heading,
  logo,
  bkgMode,
  bkgImage,
  caption,
  muxVideo,
}: LandingHeroProps) => {
  if (!bkgImage && !muxVideo) {
    return null;
  }

  return (
    <Box
      as="section"
      className="flex max-h-[calc(100vh_-_(45px_+_(50_-_45)_*_((100vw_-_320px)_/_(1400_-_320))))] flex-row"
    >
      {bkgMode === "image" && (
        <Box as="div" className="w-screen">
          <SanityImage
            asset={bkgImage}
            alt={caption || ""}
            mode="cover"
            maxWidth={2560}
            className="w-screen"
          />
        </Box>
      )}

      {bkgMode === "video" && (
        <Box as="div" className="w-screen">
          <SanityMuxPlayer
            assetDocument={muxVideo}
            autoload
            autoplay
            mute
            loop
            showControls={false}
            className="w-screen"
          />
        </Box>
      )}

      <Box as="div" className="w-screen -translate-x-full">
        <Box
          as="div"
          className="flex h-full w-screen flex-col items-center justify-center gap-1 text-white"
        >
          <Box as="div" className="mx-auto w-2/5 max-w-[1200px]">
            <Box as="div" className="mx-auto flex min-w-[120px] justify-center">
              <SanityImage
                asset={logo}
                alt={METADATA_FALLBACK.TITLE}
                mode="responsive"
                maxWidth={2000}
              />
            </Box>
          </Box>

          <Type as="h1" className="sr-only font-serif text-3xl uppercase">
            {heading}
          </Type>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingHero;
