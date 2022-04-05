import { MaxWidth } from '@/UI/base/layout/MaxWidth/MaxWidth';
import { PaddedComponent } from '@/UI/base/layout/PaddedComponent/PaddedComponent';
import { Box } from '@/UI/base/layout/Box/Box';
import { Flex } from '@/UI/base/layout/Flex/Flex';
import { ExternalLinkWithTitleSchemaProps } from '@/UI/base/links/ExternalLink/ExternalLink';
import { InternalLinkWithTitleSchemaProps } from '@/UI/base/links/InternalLink/InternalLink';
import { SuperLink } from '@/UI/base/links/SuperLink/SuperLink';

// Types
export interface FooterProps extends rawFooterProps {
  navigation?: [
    ExternalLinkWithTitleSchemaProps,
    InternalLinkWithTitleSchemaProps
  ];
}

// Markup
export const Footer = ({ navigation }: Pick<FooterProps, 'navigation'>) => (
  <PaddedComponent as="footer">
    <MaxWidth width="page">
      <Flex>
        <Box as="nav">
          {navigation &&
            navigation?.length > 0 &&
            navigation.map((nav) => (
              <li key={nav?._key}>
                <SuperLink link={nav}>{nav.title}</SuperLink>
              </li>
            ))}
        </Box>
      </Flex>
    </MaxWidth>
  </PaddedComponent>
);
