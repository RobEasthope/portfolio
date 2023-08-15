import type { LinksFunction } from '@vercel/remix';
import Headroom from 'react-headroom';
import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityReference,
} from 'sanity-codegen';
import { Box } from '~/components/_base/Box/Box';
import type { EmailLinkWithTitleSchemaProps } from '~/components/_base/EmailLink/EmailLink';
import type { ExternalLinkWithTitleSchemaProps } from '~/components/_base/ExternalLink/ExternalLink';
import type { InternalLinkWithTitleSchemaProps } from '~/components/_base/InternalLink/InternalLink';

import type { AppSettingsProps } from '~/components/settings/AppSettings/AppSettings';

import { HeaderLogo } from '~/components/navigation/Header/components/HeaderLogo/HeaderLogo';
import { NavListing } from '~/components/navigation/Header/components/NavListing/NavListing';
import { SmallNavigation } from '~/components/navigation/SmallNavigation/SmallNavigation';

import styles from './Header.css';

// TYPES
export type HeaderProps = {
  _type?: 'Header';
  logo?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
  };
  primaryNavigation: [
    | ExternalLinkWithTitleSchemaProps
    | InternalLinkWithTitleSchemaProps
    | EmailLinkWithTitleSchemaProps,
  ];
  secondaryNavigation: [
    | ExternalLinkWithTitleSchemaProps
    | InternalLinkWithTitleSchemaProps
    | EmailLinkWithTitleSchemaProps,
  ];
  appSettings: AppSettingsProps;
};

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

// MARKUP
export const Header = ({
  logo,
  primaryNavigation,
  secondaryNavigation,
  appSettings,
}: HeaderProps) => {
  if (!logo && !primaryNavigation) {
    return null;
  }

  return (
    <Headroom className="print:hidden">
      <Box as="header" className="bg-white px-1 md:px-2 py-0.5 sm:py-1">
        <Box
          as="nav"
          className="mx-auto flex w-full flex-row-reverse flex-wrap items-center justify-between leading-4 sm:flex-row"
        >
          <NavListing links={primaryNavigation} />

          <HeaderLogo logo={logo} homePageSlug={appSettings?.homePageSlug} />

          <NavListing links={secondaryNavigation} />

          <SmallNavigation
            logo={logo}
            primaryNavigation={primaryNavigation}
            secondaryNavigation={secondaryNavigation}
            appSettings={appSettings}
          />
        </Box>
      </Box>
    </Headroom>
  );
};
