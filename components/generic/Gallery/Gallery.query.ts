import groq from 'groq';
import { GALLERY_IMAGE_QUERY } from 'components/generic/Gallery/components/GalleryImage/GalleryImage.query';

export const GALLERY_QUERY = groq`{
  _type,
  _key,
  "images": images[]{${GALLERY_IMAGE_QUERY}},
  galleryCaption,
  columns,
  aspectRatio,
  maxWidth,
}`;
