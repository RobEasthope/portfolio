import { Box } from "ui-pkg/base/Box/Box";
import { SuperLink } from "ui-pkg/base/SuperLink/SuperLink";
import { Type } from "ui-pkg/base/Type/Type";
import {
  ExternalLink,
  ExternalLinkWithTitleSchemaProps,
} from "ui-pkg/base/ExternalLink/ExternalLink";
import { InternalLinkWithTitleSchemaProps } from "ui-pkg/base/InternalLink/InternalLink";
import { SanityImageAsset, SanityImageCrop, SanityReference } from "sanity-codegen";
import { SanityImage } from "ui-pkg/base/SanityImage/SanityImage";

// TYPES
export type FooterProps = {
  footerNavigation:
    | [ExternalLinkWithTitleSchemaProps | InternalLinkWithTitleSchemaProps]
    | undefined;
  copyrightText: string | undefined;
};

// MARKUP
export const Footer = ({ footerNavigation, copyrightText }: FooterProps) => {
  if (!footerNavigation) {
    return null;
  }
  const timeStamp = new Date();

  return (
    <Box as="footer">
      <Box as="div" className="mx-auto flex flex-col gap-1 px-1 py-3">
        <Box as="nav" className="flex flex-wrap justify-center" aria-label="Footer">
          <Box as="ul" className="flex gap-1">
            {footerNavigation?.map((nav, i) => (
              <Type as="li" key={nav?._key} className="text-base font-medium">
                <SuperLink
                  link={nav}
                  className="decoration-2 underline-offset-2 hover:underline"
                >
                  {nav.title}
                </SuperLink>
              </Type>
            ))}
          </Box>
        </Box>

        <Type as="p" className="text-center text-sm">
          {copyrightText} {copyrightText && timeStamp.getFullYear()}
        </Type>
      </Box>
    </Box>
  );
};
