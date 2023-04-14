import { Box } from '~/components/base/Box/Box';
import type { EmailLinkWithTitleSchemaProps } from '~/components/base/EmailLink/EmailLink';
import type { ExternalLinkWithTitleSchemaProps } from '~/components/base/ExternalLink/ExternalLink';
import type { InternalLinkWithTitleSchemaProps } from '~/components/base/InternalLink/InternalLink';
import { SuperLink } from '~/components/base/SuperLink/SuperLink';
import { Type } from '~/components/base/Type/Type';

export type NavListingProps = {
  links:
    | [
        | ExternalLinkWithTitleSchemaProps
        | InternalLinkWithTitleSchemaProps
        | EmailLinkWithTitleSchemaProps,
      ]
    | null;
};

export const Navlisting = ({ links }: NavListingProps) => (
  <Box as="ul" className="hidden flex-row gap-1  md:flex">
    {links?.map((link) => (
      <Type as="li" key={link?._key} className="text-sm font-medium">
        <SuperLink
          link={link}
          className="decoration-2 underline-offset-2 hover:underline"
        >
          {link.title}
        </SuperLink>
      </Type>
    ))}
  </Box>
);
