import { Box } from '~/components/base/Box/Box';

// TYPES
export type GigIndexProps = {
  projects: GigProps[];
};

// MARKUP
export const GigIndex = ({ projects }: GigIndexProps) => {
  if (!allGigs?.length) {
    return null;
  }

  return (
    <Box as="section" blockSpacing>
      {projects?.length > 0 && (
        <Box
          as="ul"
          className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
        >
          {allGigs?.map((gig, i) => (
            <Gig
              key={`${gig?._id || ''}-${i}`}
              employer={gig.employer}
              location={gig.location}
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

export default ProjectIndex;
