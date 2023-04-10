import { Box } from "ui-pkg/base/Box/Box";
import { Type } from "ui-pkg/base/Type/Type";
import { SmallNavigation } from "ui-pkg/navigation/SmallNavigation/SmallNavigation";
import { ExternalLinkWithTitleSchemaProps } from "ui-pkg/base/ExternalLink/ExternalLink";
import {
  InternalLink,
  InternalLinkWithTitleSchemaProps,
} from "ui-pkg/base/InternalLink/InternalLink";
import { SuperLink } from "ui-pkg/base/SuperLink/SuperLink";
import Headroom from "react-headroom";
import { METADATA_FALLBACK } from "ui-pkg/config/METADATA";
import { SanityImageAsset, SanityImageCrop, SanityReference } from "sanity-codegen";
import { HOME_PAGE_SLUG } from "ui-pkg/pages/Page/constants/HOME_PAGE_SLUG";
import { EmailLinkWithTitleSchemaProps } from "ui-pkg/base/EmailLink/EmailLink";
import { SanityImage } from "ui-pkg/base/SanityImage/SanityImage";

// TYPES
export type HeaderProps = {
  _type?: "Header";
  logo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    attribution?: string;
  };
  primaryNavigation:
    | [
        | ExternalLinkWithTitleSchemaProps
        | InternalLinkWithTitleSchemaProps
        | EmailLinkWithTitleSchemaProps
      ]
    | null;
  secondaryNavigation:
    | [
        | ExternalLinkWithTitleSchemaProps
        | InternalLinkWithTitleSchemaProps
        | EmailLinkWithTitleSchemaProps
      ]
    | null;
};

// MARKUP
export const Header = ({ logo, primaryNavigation, secondaryNavigation }: HeaderProps) => {
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
                {METADATA_FALLBACK.TITLE}
              </Box>
              <SanityImage
                asset={logo}
                alt={METADATA_FALLBACK.TITLE}
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
