import type { ProjectIndex as rawProjectIndexProps } from '~/components/types/sanity-schema';

import { Box } from '~/components/base/Box/Box';

import { ProjectIndexCard } from '~/components/blocks/ProjectIndex/components/ProjectIndexCard';

import type { ProjectProps } from '~/components/pages/Project/Project';

// TYPES
export interface ProjectIndexProps extends rawProjectIndexProps {
  projects: ProjectProps[];
}

// MARKUP
export const ProjectIndex = ({ projects }: ProjectIndexProps) => {
  if (!projects) {
    return null;
  }

  return (
    <Box as="section" className="px-1">
      {projects?.length > 0 && (
        <Box
          as="ul"
          className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
        >
          {projects?.map((project, i) => (
            <ProjectIndexCard key={`${project?._id}-${i}`} project={project} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ProjectIndex;
