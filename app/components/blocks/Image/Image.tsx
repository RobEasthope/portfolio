import { Box } from "~/components/base/Box/Box";
import { SanityImage } from "~/components/base/SanityImage/SanityImage";
import { Type } from "~/components/base/Type/Type";
import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from "sanity-codegen";

// TYPES
export type ImageProps = {
  _type: "Image";
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
    caption?: string;
    attribution?: string;
  };
  aspectRatio?: number;
  maxWidth: "small" | "text" | "medium" | "large" | "full";
};

// MARKUP
export const Image = ({ image, maxWidth = "medium", aspectRatio }: ImageProps) => {
  if (!image) {
    return null;
  }

  return (
    <Box as="section" breakout>
      <Box as="figure" className="mx-auto" maxWidth={maxWidth}>
        <SanityImage
          asset={image}
          alt={image?.caption || ""}
          aspectRatio={aspectRatio}
          mode="responsive"
          maxWidth={4000}
        />
        <Box as="div" className="mx-auto sm:max-w-lg lg:max-w-5xl">
          <Type as="figcaption" className="text-sm italic text-gray-600 ">
            {image?.caption}
          </Type>
        </Box>
      </Box>
    </Box>
  );
};

export default Image;
