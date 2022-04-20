import { MaxWidth } from '~/UI/base/structure/MaxWidth/MaxWidth';
import { PageTitle as rawPageTitleProps } from '~/UI/types/sanity-schema';
import { PaddedComponent } from '~/UI/base/structure/PaddedComponent/PaddedComponent';
import { Text } from '~/UI/base/typography/Text/Text';

// TYPES
export interface PageTitleProps extends rawPageTitleProps {
  pageTitle: string;
}

export const PageTitle = ({ pageTitle, customPageTitle }: PageTitleProps) => {
  if (!pageTitle && !customPageTitle) {
    return null;
  }

  return (
    <PaddedComponent as="section" content="text">
      <MaxWidth width="page">
        {(pageTitle || customPageTitle) && (
          <Text typeSize="medium">{customPageTitle || pageTitle}</Text>
        )}
      </MaxWidth>
    </PaddedComponent>
  );
};

export default PageTitle;
