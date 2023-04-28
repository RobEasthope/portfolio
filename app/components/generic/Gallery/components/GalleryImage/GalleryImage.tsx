import * as Dialog from '@radix-ui/react-dialog';
import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from 'sanity-codegen';

import { Box } from '~/components/base/Box/Box';
import { SanityImage } from '~/components/base/SanityImage/SanityImage';
import { Type } from '~/components/base/Type/Type';

// TYPES
export type GalleryImageProps = {
  _type: 'GalleryImage';
  _key?: string;
  image?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
  galleryAspectRatio?: number;
  aspectRatio: number;
  maxWidth?: 'small' | 'text' | 'medium' | 'large' | 'full';
  caption?: string;
};

// MARKUP
export const GalleryImage = ({
  image,
  galleryAspectRatio,
  aspectRatio = 1,
  maxWidth = 'full',
  caption,
}: GalleryImageProps) => {
  if (!image) {
    return null;
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Box as="figure">
          <SanityImage
            asset={image}
            alt=""
            aspectRatio={galleryAspectRatio}
            mode="responsive"
            maxWidth={4000}
          />
        </Box>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed left-0 top-0 z-10 h-screen w-screen bg-white" />

        <Dialog.Content className="bg-whitefocus:outline-none fixed left-0 top-0 z-50 h-screen w-screen overflow-y-auto sm:px-1 sm:pb-1 lg:px-2 lg:pb-2 lg:pt-0">
          <Dialog.Title className="sr-only">{caption}</Dialog.Title>
          <Box
            as="div"
            className="flex w-full flex-nowrap items-center justify-end"
          >
            <Dialog.Close className="p-0.5">
              <Type as="span" className="text-sm font-medium leading-none">
                Close
              </Type>
            </Dialog.Close>
          </Box>
          <Box as="figure">
            <Box as="div" className="mx-auto">
              <SanityImage
                asset={image}
                alt={caption || ''}
                mode="contain"
                aspectRatio={aspectRatio}
                maxWidth={4000}
              />
              <Type
                as="figcaption"
                className="my-0.5 max-w-prose font-serif text-sm italic"
              >
                {caption}
              </Type>
            </Box>
          </Box>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default GalleryImage;
