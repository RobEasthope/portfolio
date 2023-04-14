import { Box } from '~/components/base/Box/Box';
import { SuperLink } from '~/components/base/SuperLink/SuperLink';
import { Type } from '~/components/base/Type/Type';
import type { ExternalLinkWithTitleSchemaProps } from '~/components/base/ExternalLink/ExternalLink';
import { ExternalLink } from '~/components/base/ExternalLink/ExternalLink';
import type { InternalLinkWithTitleSchemaProps } from '~/components/base/InternalLink/InternalLink';
import {
  SanityImageAsset,
  SanityImageCrop,
  SanityReference,
} from 'sanity-codegen';
import { SanityImage } from '~/components/base/SanityImage/SanityImage';

// TYPES
export type FooterProps = {
  footerNavigation:
    | [ExternalLinkWithTitleSchemaProps | InternalLinkWithTitleSchemaProps]
    | undefined;
  copyrightText: string | undefined;
};

// MARKUP
export const Footer = ({ footerNavigation, copyrightText }: FooterProps) => {
  if (!footerNavigation && !copyrightText) {
    return null;
  }
  const timeStamp = new Date();

  return (
    <Box as="footer">
      <Box as="div" className="mx-auto flex flex-col gap-1 px-1 py-3">
        <Box
          as="nav"
          className="flex flex-wrap justify-center"
          aria-label="Footer"
        >
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
