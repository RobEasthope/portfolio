import { styled } from '@/UI/styles/stitches.config';
import { ExampleFormattedText } from '@/UI/base/formatted-text/ExampleFormattedText/ExampleFormattedText';
import { MaxPageWidth } from '@/UI/base/layout/MaxPageWidth/MaxPageWidth';
import { ExampleSection as rawExampleSectionProps } from '@/UI/types/sanity-schema';
import { PaddedComponent } from '@/UI/base/layout/PaddedComponent/PaddedComponent';
import { Picture } from '@/UI/base/media/Picture/Picture';
import { TYPE_SCALE } from '@/UI/styles/constants/TYPE_SCALE';

// Styles
export const Heading = styled('p', {
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
      <MaxPageWidth>
        {heading && <Heading as="h1">{heading}</Heading>}
        {text && <ExampleFormattedText blocks={text} />}
        {image && <Picture asset={image} mode="responsive" maxWidth={800} />}
      </MaxPageWidth>
    </PaddedComponent>
  );
};

export default ExampleSection;
