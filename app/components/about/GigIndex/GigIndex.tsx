import { Box } from '~/components/base/Box/Box';
import { Type } from '~/components/base/Type/Type';

import type { GigProps } from '~/components/about/GigIndex/components/Gig/Gig';
import { Gig } from '~/components/about/GigIndex/components/Gig/Gig';

// TYPES
export type GigIndexProps = {
  heading?: string;
  allGigs: GigProps[];
};

// MARKUP
export const GigIndex = ({ heading, allGigs }: GigIndexProps) => {
  if (!allGigs?.length) {
    return null;
  }

  return (
    <Box as="section" blockSpacing>
      <Box as="div" className="max-w-prose mx-auto">
        <Type as="h2" className="text-lg mb-1 text-center">
          {heading}
        </Type>
        {allGigs?.length > 0 && (
          <Box as="ul" className=" flex flex-col gap-1.5">
            {allGigs?.map((gig, i) => (
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
        )}
      </Box>
    </Box>
  );
};

export default GigIndex;
