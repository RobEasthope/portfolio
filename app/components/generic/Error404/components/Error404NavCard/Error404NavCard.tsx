import { ChevronRightIcon } from '@heroicons/react/20/solid';

import { Box } from '~/components/_base/Box/Box';
import type { InternalLinkWithTitleSchemaProps } from '~/components/_base/InternalLink/InternalLink';
import { InternalLink } from '~/components/_base/InternalLink/InternalLink';
import { Type } from '~/components/_base/Type/Type';

export type Error404NavCardProps = {
  _type?: 'Error404NavCard';
  heading: string;
  description?: string;
  link: InternalLinkWithTitleSchemaProps;
};

export const Error404NavCard = ({
  heading,
  description,
  link,
}: Error404NavCardProps) => (
  <Box as="li" className="relative flex items-start py-1 align-middle">
    <Box as="div" className="min-w-0 flex-1">
      <Type as="h3" className="text-base font-medium text-gray-900">
        <span className="rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
          <InternalLink
            href={link?.to?.slug?.current}
            className="focus:outline-none"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            {heading}
          </InternalLink>
        </span>
      </Type>
      <Type as="p" className="text-base">
        {description}
      </Type>
    </Box>
    <Box as="div" className="flex-shrink-0 self-center">
      <ChevronRightIcon className="h-1 w-1 text-gray-400" aria-hidden="true" />
    </Box>
  </Box>
);
