import { Gallery as rawGalleryProps } from '~/UI/types/sanity-schema';
import { Breakout } from '~/UI/base/structure/Breakout/Breakout';
import { MaxWidth } from '~/UI/base/structure/MaxWidth/MaxWidth';
import { PaddedComponent } from '~/UI/base/structure/PaddedComponent/PaddedComponent';
import { Picture } from '~/UI/base/media/Picture/Picture';
import { Figure, GalleryCaption, Grid } from './Gallery.styles';

// TYPES
export interface GalleryProps extends rawGalleryProps {
  breakout?: boolean;
}

// MARKUP
export const Gallery = ({
  images,
  galleryCaption,
  columns,
  aspectRatio = 1 / 1,
  maxWidth = 'medium',
  breakout,
}: GalleryProps) => {
  if (!images) {
    return null;
  }

  return (
    <PaddedComponent as="section" content="media">
      <Breakout active={breakout}>
        <MaxWidth width={maxWidth}>
          {images && (
            <Grid columns={columns}>
              {images.map((card) => (
                <Figure key={card?._key}>
                  {card?.image && (
                    <Picture
                      asset={card?.image}
                      alt={card?.image?.caption || ''}
                      mode="responsive"
                      maxWidth={800}
                      aspectRatio={aspectRatio}
                    />
                  )}
                  {card?.image?.caption && (
                    <figcaption>{card?.image?.caption}</figcaption>
                  )}
                </Figure>
              ))}
            </Grid>
          )}
          {galleryCaption && <GalleryCaption blocks={galleryCaption} />}
        </MaxWidth>
      </Breakout>
    </PaddedComponent>
  );
};

export default Gallery;
