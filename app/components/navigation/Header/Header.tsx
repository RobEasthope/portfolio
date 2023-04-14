import type { LoaderArgs } from '@vercel/remix';
import { Box } from '~/components/base/Box/Box';
import { Type } from '~/components/base/Type/Type';
import { SmallNavigation } from '~/components/navigation/SmallNavigation/SmallNavigation';
import type { ExternalLinkWithTitleSchemaProps } from '~/components/base/ExternalLink/ExternalLink';
import type { InternalLinkWithTitleSchemaProps } from '~/components/base/InternalLink/InternalLink';
import { InternalLink } from '~/components/base/InternalLink/InternalLink';
import { SuperLink } from '~/components/base/SuperLink/SuperLink';
import Headroom from 'react-headroom';
import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityReference,
} from 'sanity-codegen';
import { HOME_PAGE_SLUG } from '~/components/pages/Page/constants/HOME_PAGE_SLUG';
import type { EmailLinkWithTitleSchemaProps } from '~/components/base/EmailLink/EmailLink';
import { SanityImage } from '~/components/base/SanityImage/SanityImage';
import { METADATA_HARD_CODED_FALLBACKS } from '~/constants/METADATA_HARD_CODED_FALLBACKS';
import { HEADER_QUERY } from '~/components/navigation/Header/Header.query';
import { sanityAPI } from '~/sanity/sanity-js-api/sanityAPI';
import { useLoaderData } from '@remix-run/react';
import { NavListing } from '~/components/navigation/Header/components/NavListing/NavListing';
import { HeaderLogo } from '~/components/navigation/Header/components/HeaderLogo/HeaderLogo';

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
      <Box as="header" className="bg-white px-1 py-0.5">
        <Box
          as="nav"
          className="mx-auto flex w-full flex-row-reverse flex-wrap items-center justify-between leading-4 md:flex-row"
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
