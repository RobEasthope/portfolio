import { Box } from '~/components/_base/Box/Box';
import type { EmailLinkWithTitleSchemaProps } from '~/components/_base/EmailLink/EmailLink';
import type { ExternalLinkWithTitleSchemaProps } from '~/components/_base/ExternalLink/ExternalLink';
import type { InternalLinkWithTitleSchemaProps } from '~/components/_base/InternalLink/InternalLink';
import { SuperLink } from '~/components/_base/SuperLink/SuperLink';
import { Type } from '~/components/_base/Type/Type';

export type NavListingProps = {
  links:
    | [
        | ExternalLinkWithTitleSchemaProps
        | InternalLinkWithTitleSchemaProps
        | EmailLinkWithTitleSchemaProps,
      ]
    | null;
};

export const NavListing = ({ links }: NavListingProps) => (
  <Box as="ul" className="hidden flex-row gap-1 sm:flex">
    {links?.map((link) => (
      <Type as="li" key={link?._key} className="text-base">
        <SuperLink link={link}>{link.title}</SuperLink>
      </Type>
    ))}
  </Box>
);
