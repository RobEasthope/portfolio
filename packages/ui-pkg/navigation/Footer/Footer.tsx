import { Footer as rawFooterProps } from 'ui-pkg/types/sanity-schema';
import { styled } from 'ui-pkg/styles/stitches.config';
import { PaddedComponent } from 'ui-pkg/base/structure/PaddedComponent/PaddedComponent';
import { Box } from 'ui-pkg/base/structure/Box/Box';
import { Flex } from 'ui-pkg/base/structure/Flex/Flex';
import { Text } from 'ui-pkg/base/typography/Text/Text';
import { romanize } from 'ui-pkg/utils/romanize';

// STYLES
export const Navigation = styled(Flex, {
  '& ul': {
    listStyle: 'none',
    margin: 0,
  },

  '& li': {
    display: 'inline-block',
  },
});

// TYPES
export type FooterProps = rawFooterProps;

// MARKUP
export const Footer = ({
  copyrightText,
}: Pick<FooterProps, 'copyrightText'>) => {
  const currentYear = new Date().getUTCFullYear();

  return (
    <PaddedComponent as="footer" content="nav">
      <Flex align="center" justify="center" css={{ height: '$x3' }}>
        <Box>
          {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            <Text typeSize="small">{`© ${romanize(currentYear)} ${
              copyrightText || ''
            }`}</Text>
          }
        </Box>
      </Flex>
    </PaddedComponent>
  );
};
