import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from 'sanity-codegen';

import { Box } from '~/components/base/Box/Box';
import { Image } from '~/components/base/Image/Image';
import { Type } from '~/components/base/Type/Type';

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
        <Image
          asset={image}
          alt={caption}
          aspectRatio={aspectRatio}
          mode="responsive"
          maxWidth={4000}
        />
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
