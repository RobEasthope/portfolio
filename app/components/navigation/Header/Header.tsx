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
          <Box as="ul" className="hidden flex-row gap-1 md:flex">
            {primaryNavigation?.map((nav) => (
              <Type as="li" key={nav?._key} className="text-sm font-medium">
                <SuperLink
                  link={nav}
                  className="decoration-2 underline-offset-2 hover:underline"
                >
                  {nav.title}
                </SuperLink>
              </Type>
            ))}
          </Box>

          <Box
            as="div"
            className="absolute left-1/2 flex flex-1 -translate-x-1/2 items-center justify-center"
          >
            <InternalLink href={HOME_PAGE_SLUG}>
              <Box as="span" className="sr-only">
                {METADATA_HARD_CODED_FALLBACKS.TITLE}
              </Box>
              <SanityImage
                asset={logo}
                alt={METADATA_HARD_CODED_FALLBACKS.TITLE}
                mode="contain"
                maxWidth={200}
                className="h-1.25"
              />
            </InternalLink>
          </Box>

          <Box as="ul" className="hidden flex-row gap-1  md:flex">
            {secondaryNavigation?.map((nav) => (
              <Type as="li" key={nav?._key} className="text-sm font-medium">
                <SuperLink
                  link={nav}
                  className="decoration-2 underline-offset-2 hover:underline"
                >
                  {nav.title}
                </SuperLink>
              </Type>
            ))}
          </Box>
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
