import type { Organisation } from '~/types/sanity-schema';

import { Box } from '~/components/base/Box/Box';
import { ExternalLink } from '~/components/base/ExternalLink/ExternalLink';

export type OrganisationsProps = {
  organisations: Organisation[];
};

export const Organisations = ({ organisations }: OrganisationsProps) => {
  if (!organisations) return null;

  return (
    <Box as="section" blockSpacing>
      <Box as="div" className="max-w-6xl mx-auto">
        <Box
          as="ul"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 gap-x-1"
        >
          {organisations?.map((org) => (
            <Box key={org?._id} as="li">
              <ExternalLink href={org?.url || ''}>{org.name}</ExternalLink>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
