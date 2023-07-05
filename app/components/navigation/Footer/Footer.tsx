import { Box } from '~/components/_base/Box/Box';
import type { ExternalLinkWithTitleSchemaProps } from '~/components/_base/ExternalLink/ExternalLink';
import type { InternalLinkWithTitleSchemaProps } from '~/components/_base/InternalLink/InternalLink';
import { SuperLink } from '~/components/_base/SuperLink/SuperLink';
import { Type } from '~/components/_base/Type/Type';

import { romanize } from '~/components/navigation/Footer/romanize';

// TYPES
export type FooterProps = {
  _type?: 'Footer';
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
    <Box as="footer" className="print:hidden">
      <Box as="div" className="mx-auto flex flex-col gap-1 px-1 py-1">
        <Box
          as="nav"
          className="flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <Box as="ul" className="flex gap-1">
            {footerNavigation?.map((nav) => (
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

        <Type
          as="p"
          className="text-center text-sm hover:text-ink hover:cursor-default"
        >
          {copyrightText} {copyrightText && romanize(timeStamp.getFullYear())}
        </Type>
      </Box>
    </Box>
  );
};
