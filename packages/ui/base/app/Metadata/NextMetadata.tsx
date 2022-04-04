import Head from 'next/head';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { createImageUrlBuilder } from 'next-sanity';
import { GlobalMetadata, Page } from '@/UI/types/sanity-schema';
import { METADATA } from '@/UI/constants/METADATA';
import { sanityConfig } from '@/UTILS/sanity-api/sanity-config';

type NextMetadataType = {
  title: string;
  description: string;
  image: Page['metadataImage'];
  globalMetadata: GlobalMetadata;
};

export const NextMetadata = ({
  title,
  description,
  image,
  globalMetadata,
}: NextMetadataType) => {
  const imageBuilder = createImageUrlBuilder(sanityConfig);
  const urlForImage = (source: SanityImageSource) =>
    imageBuilder.image(source).auto('format').fit('max');

  return (
    <Head>
      {/* Standard HTML */}
      {title && (
        <title>
          {`${title} ${globalMetadata?.globalTitleTemplate || ''}` ||
            METADATA.TITLE}
        </title>
      )}
      {description && <meta name="description" content={description} />}

      {/* Opengraph */}
      {title && (
        <meta
          property="og:title"
          content={`${title} ${globalMetadata?.globalTitleTemplate || ''}`}
        />
      )}
      {description && <meta property="og:description" content={description} />}
      {image && (
        <meta
          property="og:image"
          content={urlForImage(image).width(1200).height(630).url() || ''}
        />
      )}

      {/* Twitter */}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && (
        <meta
          name="twitter:image"
          content={urlForImage(image).width(1200).height(630).url() || ''}
        />
      )}
    </Head>
  );
};
