import { MaxWidth } from '@/UI/base/layout/MaxWidth';
import { Text as rawTextProps } from '@/UI/types/sanity-schema';
import { PaddedComponent } from '@/UI/base/layout/PaddedComponent';
import { ArticleText } from '@/UI/base/formatted-text/ArticleText/ArticleText';

// TYPES
export type TextProps = rawTextProps;

export const Text = ({ text }: TextProps) => {
  if (!text) {
    return null;
  }

  return (
    <PaddedComponent as="section">
      <MaxWidth width="page">
        {text && <ArticleText blocks={text as unknown} />}
      </MaxWidth>
    </PaddedComponent>
  );
};

export default Text;
