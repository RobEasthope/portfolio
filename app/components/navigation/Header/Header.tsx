import Headroom from 'react-headroom';
import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityReference,
} from 'sanity-codegen';

import { Box } from '~/components/base/Box/Box';
import type { EmailLinkWithTitleSchemaProps } from '~/components/base/EmailLink/EmailLink';
import type { ExternalLinkWithTitleSchemaProps } from '~/components/base/ExternalLink/ExternalLink';
import type { InternalLinkWithTitleSchemaProps } from '~/components/base/InternalLink/InternalLink';

import { HeaderLogo } from '~/components/navigation/Header/components/HeaderLogo/HeaderLogo';
import { NavListing } from '~/components/navigation/Header/components/NavListing/NavListing';
import { SmallNavigation } from '~/components/navigation/SmallNavigation/SmallNavigation';

// TYPES
export type HeaderProps = {
  _type?: 'Header';
  logo?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    attribution?: string;
  };
  primaryNavigation:
    | [
        | ExternalLinkWithTitleSchemaProps
        | InternalLinkWithTitleSchemaProps
        | EmailLinkWithTitleSchemaProps,
      ]
    | null;
  secondaryNavigation:
    | [
        | ExternalLinkWithTitleSchemaProps
        | InternalLinkWithTitleSchemaProps
        | EmailLinkWithTitleSchemaProps,
      ]
    | null;
};

// MARKUP
export const Header = ({
  logo,
  primaryNavigation,
  secondaryNavigation,
}: HeaderProps) => {
  if (!logo && !primaryNavigation) {
    return null;
  }

  return (
    <Headroom>
      <Box as="header" className="bg-white px-1 md:px-2 py-0.75">
        <Box
          as="nav"
          className="mx-auto flex w-full flex-row-reverse flex-wrap items-center justify-between leading-4 sm:flex-row"
        >
          <NavListing links={primaryNavigation} />

          <HeaderLogo logo={logo} />

          <NavListing links={secondaryNavigation} />

          <SmallNavigation
            logo={logo}
            primaryNavigation={primaryNavigation}
            secondaryNavigation={secondaryNavigation}
          />
        </Box>
      </Box>
    </Headroom>
  );
};
