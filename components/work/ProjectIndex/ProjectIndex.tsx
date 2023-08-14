import type { ProjectProps } from '~/components/work/Project/Project';
import { ProjectIndexCard } from '~/components/work/ProjectIndex/components/ProjectIndexCard';

import { Box } from '~/components/_base/Box/Box';

// TYPES
export type ProjectIndexProps = {
  projects: ProjectProps['page'][];
};

// MARKUP
export const ProjectIndex = ({ projects }: ProjectIndexProps) => {
  if (!projects) {
    return null;
  }

  return (
    <Box as="section" blockSpacing>
      {projects?.length > 0 && (
        <Box
          as="ul"
          className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
        >
          {projects?.map((project, i) => (
            <ProjectIndexCard
              key={`${project?._id || ''}-${i}`}
              project={project}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ProjectIndex;
