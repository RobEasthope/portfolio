import { Footer as rawFooterProps } from '@/UI/types/sanity-schema';
import { styled } from '@/UI/styles/stitches.config';
import { PaddedComponent } from '@/UI/base/layout/PaddedComponent/PaddedComponent';
import { Box } from '@/UI/base/layout/Box/Box';
import { Flex } from '@/UI/base/layout/Flex/Flex';
import { ExternalLinkWithTitleSchemaProps } from '@/UI/base/links/ExternalLink/ExternalLink';
import { InternalLinkWithTitleSchemaProps } from '@/UI/base/links/InternalLink/InternalLink';
import { SuperLink } from '@/UI/base/links/SuperLink/SuperLink';
import { Text } from '@/UI/base/typography/Text/Text';
import { Spacer } from '@/UI/sections/Spacer/Spacer';

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
export interface FooterProps extends rawFooterProps {
  navigation?: [
    ExternalLinkWithTitleSchemaProps,
    InternalLinkWithTitleSchemaProps
  ];
}

// MARKUP
export const Footer = ({
  navigation,
  copyrightText,
}: Pick<FooterProps, 'navigation' | 'copyrightText'>) => {
  const currentYear = new Date().getUTCFullYear();

  return (
    <PaddedComponent as="footer" content="nav">
      <Spacer height="half" />

      <Flex align="center" justify="between" css={{ height: '$x2' }}>
        <Navigation as="nav">
          <Flex as="ul" gap="half">
            {navigation &&
              navigation?.length > 0 &&
              navigation.map((nav) => (
                <li key={nav?._key}>
                  <SuperLink link={nav}>{nav.title}</SuperLink>
                </li>
              ))}
          </Flex>
        </Navigation>
        <Box>
          {copyrightText && (
            <Text typeSize="small">
              {`© 2013-${currentYear} ${copyrightText}`}
            </Text>
          )}
        </Box>
      </Flex>

      <Spacer height="half" />
    </PaddedComponent>
  );
};
