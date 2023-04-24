import type { GigProps } from '~/components/about/GigIndex/components/Gig/Gig';
import { Gig } from '~/components/about/GigIndex/components/Gig/Gig';

import { Box } from '~/components/base/Box/Box';

// TYPES
export type GigIndexProps = {
  allGigs: GigProps[];
};

// MARKUP
export const GigIndex = ({ allGigs }: GigIndexProps) => {
  if (!allGigs?.length) {
    return null;
  }

  return (
    <Box as="section" blockSpacing>
      {allGigs?.length > 0 && (
        <Box as="ul" className="flex flex-col">
          {allGigs?.map((gig, i) => (
            <Gig
              key={`${gig?._id || ''}-${i}`}
              employer={gig.employer}
              jobTitle={gig.jobTitle}
              description={gig.description}
              startDate={gig.startDate}
              endDate={gig.endDate}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default GigIndex;
