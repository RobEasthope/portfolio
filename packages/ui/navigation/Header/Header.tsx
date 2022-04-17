import Link from 'next/link';
import Headroom from 'react-headroom';
import { Header as rawHeaderProps } from '~/UI/types/sanity-schema';
import { styled } from '~/UI/styles/stitches.config';
import { Picture } from '~/UI/base/media/Picture/Picture';
import { SuperLink } from '~/UI/base/links/SuperLink/SuperLink';
import { SmallNavigation } from '~/UI/navigation/SmallNavigation/SmallNavigation';
import { ExternalLinkWithTitleSchemaProps } from '~/UI/base/links/ExternalLink/ExternalLink';
import { InternalLinkWithTitleSchemaProps } from '~/UI/base/links/InternalLink/InternalLink';
import { METADATA } from '~/UI/constants/METADATA';
import { PaddedComponent } from '~/UI/base/structure/PaddedComponent/PaddedComponent';
import { Box } from '~/UI/base/structure/Box/Box';
import { Flex } from '~/UI/base/structure/Flex/Flex';
import { Spacer } from '~/UI/sections/Spacer/Spacer';
import { NavLink } from '~/UI/base/typography/NavLink/NavLink';

// Styles
export const LargeNavigation = styled(Box, {
  display: 'flex',
  gap: '$x1',
  listStyle: 'none',
  width: '50%',
  marginY: 0,

  '& li': {
    display: 'inline-block',
  },
});

export const LeftNavigation = styled(LargeNavigation, {});

export const RightNavigation = styled(LargeNavigation, {
  justifyContent: 'flex-end',
});

// Types
export interface HeaderProps extends rawHeaderProps {
  navigationLeft?: [
    ExternalLinkWithTitleSchemaProps,
    InternalLinkWithTitleSchemaProps
  ];
  navigationRight?: [
    ExternalLinkWithTitleSchemaProps,
    InternalLinkWithTitleSchemaProps
  ];
}

// Markup
export const Header = ({
  logo,
  navigationLeft,
  navigationRight,
}: Pick<HeaderProps, 'logo' | 'navigationLeft' | 'navigationRight'>) => (
  <Headroom>
    <PaddedComponent
      as="header"
      content="nav"
      css={{ backgroundColor: 'white', zIndex: 1 }}
    >
      <Flex as="nav" align="center" justify="center" css={{ height: '$x3' }}>
        <LeftNavigation as="ul">
          {navigationLeft &&
            navigationLeft?.length > 0 &&
            navigationLeft.map((nav) => (
              <NavLink as="li" key={nav?._key}>
                <SuperLink link={nav}>{nav.title}</SuperLink>
              </NavLink>
            ))}
        </LeftNavigation>

        <Spacer />

        <Box css={{ size: { selector: 'minWidth', min: 32, max: 40 } }}>
          <Link href="/">
            <a>
              <Picture
                asset={logo}
                alt={METADATA?.TITLE || ''}
                mode="responsive"
                aspectRatio={1}
                maxWidth={40}
              />
            </a>
          </Link>
        </Box>

        <Spacer />

        <RightNavigation as="ul">
          {navigationRight &&
            navigationRight?.length > 0 &&
            navigationRight.map((nav) => (
              <NavLink as="li" key={nav?._key}>
                <SuperLink link={nav}>{nav.title}</SuperLink>
              </NavLink>
            ))}
        </RightNavigation>
      </Flex>
    </PaddedComponent>
  </Headroom>
);
