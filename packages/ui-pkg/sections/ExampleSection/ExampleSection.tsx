import { styled } from 'ui-pkg/styles/stitches.config';
import { ExampleFormattedText } from 'ui-pkg/base/formatted-text/ExampleFormattedText/ExampleFormattedText';
import { MaxWidth } from 'ui-pkg/base/structure/MaxWidth/MaxWidth';
import { ExampleSection as rawExampleSectionProps } from 'ui-pkg/types/sanity-schema';
import { Picture } from 'ui-pkg/base/media/Picture/Picture';
import { TYPE_SCALE } from 'ui-pkg/styles/constants/TYPE_SCALE';
import { PaddedComponent } from 'ui-pkg/base/structure/PaddedComponent/PaddedComponent';

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
