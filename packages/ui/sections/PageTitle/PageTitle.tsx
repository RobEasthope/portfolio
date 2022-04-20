import { MaxWidth } from '~/UI/base/structure/MaxWidth/MaxWidth';
import { PageTitle as rawTextProps } from '~/UI/types/sanity-schema';
import { PaddedComponent } from '~/UI/base/structure/PaddedComponent/PaddedComponent';
import { Text } from '~/UI/base/typography/Text/Text';

// TYPES
export type PageTitleProps = rawTextProps;

export const PageTitle = ({ title }: PageTitleProps) => {
  if (!title) {
    return null;
  }

  return (
    <PaddedComponent as="section">
      <MaxWidth width="page">{title && <Text>{title}</Text>}</MaxWidth>
    </PaddedComponent>
  );
};

export default PageTitle;
