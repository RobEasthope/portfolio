import { Footer as rawFooterProps } from '~/UI/types/sanity-schema';
import { styled } from '~/UI/styles/stitches.config';
import { PaddedComponent } from '~/UI/base/structure/PaddedComponent/PaddedComponent';
import { Box } from '~/UI/base/structure/Box/Box';
import { Flex } from '~/UI/base/structure/Flex/Flex';
import { ExternalLinkWithTitleSchemaProps } from '~/UI/base/links/ExternalLink/ExternalLink';
import { InternalLinkWithTitleSchemaProps } from '~/UI/base/links/InternalLink/InternalLink';
import { SuperLink } from '~/UI/base/links/SuperLink/SuperLink';
import { Text } from '~/UI/base/typography/Text/Text';
import { NavLink } from '~/UI/base/typography/NavLink/NavLink';
import { Spacer } from '~/UI/sections/Spacer/Spacer';
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
      <Flex align="center" justify="between" css={{ height: '$x3' }}>
        <Navigation as="nav">
          <Flex as="ul" gap="x1">
            {navigation &&
              navigation?.length > 0 &&
              navigation.map((nav) => (
                <NavLink as="li" key={nav?._key}>
                  <SuperLink link={nav}>{nav.title}</SuperLink>
                </NavLink>
              ))}
          </Flex>
        </Navigation>
        <Box>
          {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            <Text typeSize="standard">{`© ${romanize(currentYear)} ${
              copyrightText || ''
            }`}</Text>
          }
        </Box>
      </Flex>
    </PaddedComponent>
  );
};
