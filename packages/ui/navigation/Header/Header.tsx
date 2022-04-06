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
import { TextAlign } from '@/UI/base/layout/TextAlign/TextAlign';

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

export const Spacer = styled(Box, {
  display: 'flex',
  width: '100%',
  height: '1em',
  flexGrow: 5,
});

export const LargeNavigation = styled('ul', {
  display: 'none',
  visibility: 'hidden',
  listStyle: 'none',
  width: '50%',

  '@media (min-width: 800px)': {
    display: 'flex',
    visibility: 'visible',
    gap: '1em',
  },

  '& li': {
    display: 'inline-block',
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
      <HeaderLayout as="div">
        <LargeNavigation as="ul">
          {navigationLeft &&
            navigationLeft?.length > 0 &&
            navigationLeft.map((nav) => (
              <li key={nav?._key}>
                <SuperLink link={nav}>{nav.title}</SuperLink>
              </li>
            ))}
        </LargeNavigation>

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

        <LargeNavigation as="ul">
          {navigationRight &&
            navigationRight?.length > 0 &&
            navigationRight.map((nav) => (
              <li key={nav?._key}>
                <SuperLink link={nav}>{nav.title}</SuperLink>
              </li>
            ))}
        </LargeNavigation>

        <SmallNavigation
          navigationLeft={navigationLeft}
          navigationRight={navigationRight}
        />
      </HeaderLayout>
    </MaxWidth>
  </PaddedComponent>
);
