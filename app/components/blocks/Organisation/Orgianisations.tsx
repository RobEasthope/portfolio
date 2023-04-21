import type { Organisation } from '~/types/sanity-schema';

import { Box } from '~/components/base/Box/Box';
import { ExternalLink } from '~/components/base/ExternalLink/ExternalLink';

export type OrganisationsProps = {
  organisations: Organisation[];
};

export const Organisations = ({ organisations }: OrganisationsProps) => (
  <Box as="div">
    <Box as="ul" className="grid grid-columns-4">
      {organisations?.map((org) => (
        <Box key={org?._id} as="li">
          <ExternalLink href={org?.url || ''}>{org.name}</ExternalLink>
        </Box>
      ))}
    </Box>
  </Box>
);
