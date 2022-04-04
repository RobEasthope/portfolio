import { MaxWidth } from '@/UI/base/layout/MaxWidth';
import { Text as rawTextProps } from '@/UI/types/sanity-schema';
import { PaddedComponent } from '@/UI/base/layout/PaddedComponent/PaddedComponent';
import { BasicText } from 'base/formatted-text/BasicText/BasicText';

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
