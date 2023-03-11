import { Image as rawImageProps } from "ui-pkg/types/sanity-schema";
import { MaxWidth } from "ui-pkg/base/structure/MaxWidth/MaxWidth";
import { PaddedComponent } from "ui-pkg/base/structure/PaddedComponent/PaddedComponent";
import { Picture } from "ui-pkg/base/media/Picture/Picture";
import { Caption } from "ui-pkg/base/typography/Caption/Caption";
import { Breakout } from "ui-pkg/base/structure/Breakout/Breakout";

// TYPES
export type ImageProps = rawImageProps;

// MARKUP
export const Image = ({ image, maxWidth }: ImageProps) => {
  if (!image) {
    return null;
  }

  return (
    <PaddedComponent as="section" content="media">
      <Breakout>
        <MaxWidth as="figure" width={maxWidth}>
          <Picture
            asset={image}
            alt={image?.caption || ""}
            mode="responsive"
            maxWidth={4000}
          />
          {image?.caption && <Caption as="figcaption">{image?.caption}</Caption>}
        </MaxWidth>
      </Breakout>
    </PaddedComponent>
  );
};

export default Image;
