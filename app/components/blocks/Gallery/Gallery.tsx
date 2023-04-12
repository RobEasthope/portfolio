import { Type } from '~/components/base/Type/Type';
import { Box } from '~/components/base/Box/Box';
import type { GalleryImageProps } from '~/components/blocks/Gallery/components/GalleryImage/GalleryImage';
import { GalleryImage } from '~/components/blocks/Gallery/components/GalleryImage/GalleryImage';

// TYPES
export type GalleryProps = {
  _type: 'Gallery';
  images: GalleryImageProps[];
  galleryCaption?: string;
  columns: 'null' | '1' | '2' | '3' | '4' | '5' | undefined;
  aspectRatio: number;
  maxWidth: 'small' | 'text' | 'medium' | 'large' | 'full';
};

// MARKUP
export const Gallery = ({
  images,
  galleryCaption,
  columns,
  aspectRatio = 1 / 1,
  maxWidth = 'large',
}: GalleryProps) => {
  if (!images) {
    return null;
  }

  return (
    <Box as="section" className="px-1 py-1">
      <Box
        as="div"
        className="mx-auto grid gap-0.75"
        maxWidth={maxWidth}
        columns={columns}
      >
        {images &&
          images?.map((card) => (
            <GalleryImage
              key={card?._key}
              _type={card?._type}
              image={card?.image}
              aspectRatio={aspectRatio}
            />
          ))}
        <Box as="div" className="mx-auto sm:max-w-lg lg:max-w-5xl">
          <Type as="figcaption" className="text-sm italic text-gray-600">
            {galleryCaption}
          </Type>
        </Box>
      </Box>
    </Box>
  );
};

export default Gallery;
