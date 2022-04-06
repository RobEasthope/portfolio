import Link from 'next/link';
import { Header as rawHeaderProps } from '@/UI/types/sanity-schema';
import { styled } from '@/UI/styles/stitches.config';
import { MaxWidth } from '@/UI/base/layout/MaxWidth/MaxWidth';
import { Picture } from '@/UI/base/media/Picture/Picture';
import { SuperLink } from '@/UI/base/links/SuperLink/SuperLink';
import { SmallNavigation } from '@/UI/navigation/SmallNavigation/SmallNavigation';
import { ExternalLinkWithTitleSchemaProps } from '@/UI/base/links/ExternalLink/ExternalLink';
import { InternalLinkWithTitleSchemaProps } from '@/UI/base/links/InternalLink/InternalLink';
import { METADATA } from '@/UI/constants/METADATA';
import { PaddedComponent } from '@/UI/base/layout/PaddedComponent/PaddedComponent';
import { Box } from '@/UI/base/layout/Box/Box';
import { Spacer } from '@/UI/base/layout/Spacer/Spacer';

// Styles
export const HeaderLayout = styled('div', {
  display: 'flex',
  flex: '1 0 auto',
  alignItems: 'center',
  justifyContent: 'center',
});

export const StyledHomeLink = styled('span', {
  position: 'relative',
  display: 'inline-block',
  width: '32px',
  height: '32px',
});

export const Logo = styled(Picture, {
  width: '32px',
});

export const LargeNavigation = styled(Box, {
  display: 'none',
  visibility: 'hidden',
  listStyle: 'none',
  width: '50%',
  marginY: 0,

  '@media (min-width: 800px)': {
    display: 'flex',
    visibility: 'visible',
    gap: '1em',
  },

  '& li': {
    display: 'inline-block',
  },
});

export const LeftNavigation = styled(LargeNavigation, {});

export const RightNavigation = styled(LargeNavigation, {
  '@media (min-width: 800px)': {
    justifyContent: 'flex-end',
  },
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
  <PaddedComponent as="header">
    <MaxWidth as="nav" width="full">
      <Spacer height="half" />

      <HeaderLayout as="div">
        <LeftNavigation as="ul">
          {navigationLeft &&
            navigationLeft?.length > 0 &&
            navigationLeft.map((nav) => (
              <li key={nav?._key}>
                <SuperLink link={nav}>{nav.title}</SuperLink>
              </li>
            ))}
        </LeftNavigation>

        <Spacer />

        <StyledHomeLink>
          <Link href="/">
            <a>
              <Logo
                asset={logo}
                alt={METADATA?.TITLE || ''}
                mode="responsive"
                maxWidth={32}
              />
            </a>
          </Link>
        </StyledHomeLink>

        <Spacer />

        <RightNavigation as="ul">
          {navigationRight &&
            navigationRight?.length > 0 &&
            navigationRight.map((nav) => (
              <li key={nav?._key}>
                <SuperLink link={nav}>{nav.title}</SuperLink>
              </li>
            ))}
        </RightNavigation>

        <SmallNavigation
          navigationLeft={navigationLeft}
          navigationRight={navigationRight}
        />
      </HeaderLayout>

      <Spacer height="half" />
    </MaxWidth>
  </PaddedComponent>
);
