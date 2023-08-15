import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from 'sanity-codegen';

import { Box } from 'components/_base/Box/Box';
import { SanityImage } from 'components/_base/SanityImage/SanityImage';
import { Type } from 'components/_base/Type/Type';

// TYPES
export type ImageProps = {
  _type?: 'Image';
  image?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
  caption?: string;
  aspectRatio?: number;
  maxWidth: 'small' | 'text' | 'medium' | 'large' | 'full';
};

// MARKUP
export const Image = ({
  image,
  caption,
  maxWidth = 'medium',
  aspectRatio = 0,
}: ImageProps) => {
  if (!image) {
    return null;
  }

  return (
    <Box as="section" breakout blockSpacing>
      <Box as="figure" className="mx-auto" maxWidth={maxWidth}>
        <SanityImage src={image} alt={caption} aspectRatio={aspectRatio} />
        <Box as="div" className="mx-auto sm:max-w-lg lg:max-w-5xl">
          <Type as="figcaption" className="text-sm italic text-gray-600 ">
            {caption}
          </Type>
        </Box>
      </Box>
    </Box>
  );
};

export default Image;
