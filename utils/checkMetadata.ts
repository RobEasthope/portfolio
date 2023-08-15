import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from 'sanity-codegen';
import { urlFor } from '~/components/_base/SanityImage/urlFor';

type CheckMetadataProps = {
  title?: string;
  description?: string;
  image?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
  url: string;
};

export function checkMetadata({
  title,
  description,
  image,
  url,
}: CheckMetadataProps) {
  const data = [];

  if (title) {
    data.push(
      { title },
      {
        property: 'og:title',
        content: title,
      },
      {
        name: 'twitter:title',
        content: title,
      },
    );
  }

  if (description) {
    data.push(
      {
        property: 'description',
        content: description,
      },
      {
        name: 'og:description',
        content: description,
      },
      {
        name: 'twitter:description',
        content: description,
      },
    );
  }

  if (image) {
    data.push(
      {
        property: 'og:image',
        content: urlFor(image).width(1200).height(630).url(),
      },
      {
        property: 'twitter:image',
        content: urlFor(image).width(1200).height(630).url(),
      },
    );
  }

  if (url) {
    data.push({
      property: 'og:url',
      content: url,
    });
  }

  return data;
}
