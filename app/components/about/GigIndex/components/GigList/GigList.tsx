import { Box } from '~/components/_base/Box/Box';

import type { GigProps } from '~/components/about/GigIndex/components/Gig/Gig';
import { Gig } from '~/components/about/GigIndex/components/Gig/Gig';

export type GigListProps = {
  gigs: GigProps[];
};

export const GigList = ({ gigs }: GigListProps) => {
  if (!gigs?.length) return null;

  return (
    <Box as="ul" className="flex flex-col gap-1.5 print:gap-0.5">
      {gigs?.map((gig, i) => (
        <Gig
          key={`${gig?._id || ''}-${i}`}
          client={gig.client}
          jobTitle={gig.jobTitle}
          description={gig.description}
          startDate={gig.startDate}
          endDate={gig.endDate}
        />
      ))}
    </Box>
  );
};
