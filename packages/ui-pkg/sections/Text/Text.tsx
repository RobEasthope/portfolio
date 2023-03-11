import { MaxWidth } from 'ui-pkg/base/structure/MaxWidth/MaxWidth';
import { Text as rawTextProps } from 'ui-pkg/types/sanity-schema';
import { PaddedComponent } from 'ui-pkg/base/structure/PaddedComponent/PaddedComponent';
import { BasicText } from 'ui-pkg/base/formatted-text/BasicText/BasicText';

// TYPES
export type TextProps = rawTextProps;

export const Text = ({ text }: TextProps) => {
  if (!text) {
    return null;
  }

  return (
    <PaddedComponent as="section">
      <MaxWidth width="page">
        {text && <BasicText blocks={text as unknown} />}
      </MaxWidth>
    </PaddedComponent>
  );
};

export default Text;
