import type { ProjectIndex as rawProjectIndexProps } from '~/components/types/sanity-schema';

import { Box } from '~/components/base/Box/Box';

import { ProjectIndexCard } from '~/components/blocks/ProjectIndex/components/ProjectIndexCard';

import type { ProjectProps } from '~/components/pages/Project/Project';

// TYPES
export interface ProjectIndexProps extends rawProjectIndexProps {
  projects: ProjectProps[];
}

// MARKUP
export const ProjectIndex = ({ projects }: ProjectIndexProps) => (
  <Box as="section" className="px-1">
    {projects?.length > 0 && (
      <Box
        as="ul"
        className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {projects?.map((project, i) => (
          <ProjectIndexCard key={`${project?._id}-${i}`} project={project} />
        ))}
      </Box>
    )}
  </Box>
);

export default ProjectIndex;
