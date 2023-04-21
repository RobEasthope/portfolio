import type { Organisation } from '~/types/sanity-schema';

import { Box } from '~/components/base/Box/Box';
import { ExternalLink } from '~/components/base/ExternalLink/ExternalLink';

export type OrganisationsProps = {
  organisations: Organisation[];
};

export const Organisations = ({ organisations }: OrganisationsProps) => (
  <Box as="div" className="px-1">
    <Box as="ul" className="grid grid-cols-4 max-w-6xl mx-auto gap-0.5 gap-x-1">
      {organisations?.map((org) => (
        <Box key={org?._id} as="li">
          <ExternalLink href={org?.url || ''}>{org.name}</ExternalLink>
        </Box>
      ))}
    </Box>
  </Box>
);
