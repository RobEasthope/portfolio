import { styled } from '~/UI/styles/stitches.config';
import { ExampleFormattedText } from '~/UI/base/formatted-text/ExampleFormattedText/ExampleFormattedText';
import { MaxWidth } from '~/UI/base/structure/MaxWidth/MaxWidth';
import { ExampleSection as rawExampleSectionProps } from '~/UI/types/sanity-schema';
import { Picture } from '~/UI/base/media/Picture/Picture';
import { TYPE_SCALE } from '~/UI/styles/constants/TYPE_SCALE';
import { PaddedComponent } from '~/UI/base/structure/PaddedComponent/PaddedComponent';

// Styles
export const Text = styled('p', {
  type: { fontSize: TYPE_SCALE.STANDARD },
  fontWeight: 'bold',
});

// Types
export interface ExampleSectionProps extends rawExampleSectionProps {
  _key?: string;
}

// Markup
export const ExampleSection = ({
  heading,
  text,
  image,
}: ExampleSectionProps) => {
  if (!heading && !text) {
    return null;
  }

  return (
    <PaddedComponent as="section">
      <MaxWidth width="page">
        {heading && <Text as="h1">{heading}</Text>}
        {text && <ExampleFormattedText blocks={text} />}
        {image && (
          <Picture asset={image} alt="" mode="responsive" maxWidth={800} />
        )}
      </MaxWidth>
    </PaddedComponent>
  );
};

export default ExampleSection;
