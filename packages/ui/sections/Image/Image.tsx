import { Image as rawImageProps } from '~/UI/types/sanity-schema';
import { MaxWidth } from '~/UI/base/structure/MaxWidth/MaxWidth';
import { PaddedComponent } from '~/UI/base/structure/PaddedComponent/PaddedComponent';
import { Picture } from '~/UI/base/media/Picture/Picture';
import { Caption } from '~/UI/base/typography/Caption/Caption';
import { Breakout } from '~/UI/base/structure/Breakout/Breakout';

// TYPES
export type ImageProps = rawImageProps;

// MARKUP
export const Image = ({ image, maxWidth }: ImageProps) => {
  if (!image) {
    return null;
  }

  return (
    <PaddedComponent as="section" content="media" css={{ marginY: '$x2' }}>
      <Breakout>
        <MaxWidth as="figure" width={maxWidth}>
          <Picture
            asset={image}
            alt={image?.caption || ''}
            mode="responsive"
            maxWidth={4000}
          />
          {image?.caption && (
            <Caption as="figcaption">{image?.caption}</Caption>
          )}
        </MaxWidth>
      </Breakout>
    </PaddedComponent>
  );
};

export default Image;
