import { MaxWidth } from '~/UI/base/structure/MaxWidth/MaxWidth';
import { PageTitle as rawPageTitleProps } from '~/UI/types/sanity-schema';
import { PaddedComponent } from '~/UI/base/structure/PaddedComponent/PaddedComponent';
import { Text } from '~/UI/base/typography/Text/Text';
import { TextAlign } from '~/UI/base/structure/TextAlign/TextAlign';
import { styled } from '~/UI/styles/stitches.config';
import { Spacer } from '~/UI/sections/Spacer/Spacer';

// STYLES
export const Break = styled('span', {
  display: 'block',
  width: '$x2',
  height: '2px',
  marginX: 'auto',
  backgroundColor: 'RGBA(250, 145, 46, 1)',
});

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
          <TextAlign align="centre">
            <Text typeSize="medium">{customPageTitle || pageTitle}</Text>

            <Spacer height="x1" />
            <Break />
            <Spacer height="x2" />
          </TextAlign>
        )}
      </MaxWidth>
    </PaddedComponent>
  );
};

export default PageTitle;
