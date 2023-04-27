import { Box } from '~/components/base/Box/Box';
import { Type } from '~/components/base/Type/Type';

import type { GigProps } from '~/components/about/GigIndex/components/Gig/Gig';
import { Gig } from '~/components/about/GigIndex/components/Gig/Gig';
import { GigList } from '~/components/about/GigIndex/components/GigList/GigList';

// TYPES
export type GigIndexProps = {
  heading?: string;
  gigsDisplayed: 'all' | 'recent' | 'custom';
  allGigs: GigProps[];
  recentGigs: GigProps[];
  selectedGigs: GigProps[];
};

// MARKUP
export const GigIndex = ({
  heading,
  gigsDisplayed = 'recent',
  allGigs,
  recentGigs,
  selectedGigs,
}: GigIndexProps) => {
  if (!allGigs?.length) {
    return null;
  }

  return (
    <Box as="section" blockSpacing>
      <Box as="div" className="max-w-prose mx-auto print:max-w-full">
        <Type as="h2" className="text-lg mb-1 text-center">
          {heading}
        </Type>
        {gigsDisplayed === 'all' && <GigList gigs={allGigs} />}
        {gigsDisplayed === 'recent' && <GigList gigs={recentGigs} />}
        {gigsDisplayed === 'custom' && <GigList gigs={selectedGigs} />}
      </Box>
    </Box>
  );
};

export default GigIndex;
