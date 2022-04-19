import { Footer as rawFooterProps } from '~/UI/types/sanity-schema';
import { styled } from '~/UI/styles/stitches.config';
import { PaddedComponent } from '~/UI/base/structure/PaddedComponent/PaddedComponent';
import { Box } from '~/UI/base/structure/Box/Box';
import { Flex } from '~/UI/base/structure/Flex/Flex';
import { Text } from '~/UI/base/typography/Text/Text';
import { romanize } from '~/UI/utils/romanize';

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
