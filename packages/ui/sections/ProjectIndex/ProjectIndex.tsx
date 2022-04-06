import { ProjectIndex as rawProjectIndexProps } from '@/UI/types/sanity-schema';
import { MaxWidth } from '@/UI/base/layout/MaxWidth/MaxWidth';
import { Box } from '@/UI/base/layout/Box/Box';
import { Text } from '@/UI/base/typography/Text/Text';
import { ProjectProps } from '@/UI/layouts/Project/Project';

// TYPES
export interface ProjectIndexProps extends rawProjectIndexProps {
  projects: ProjectProps[];
}

// MARKUP
export const ProjectIndex = ({ projects }: ProjectIndexProps) => (
  <Box>
    <MaxWidth width="page">
      {projects?.length > 0 &&
        projects?.map((project) => (
          <li key={project?._id}>
            {project.title && <Text>{project.title}</Text>}
          </li>
        ))}
    </MaxWidth>
  </Box>
);

export default ProjectIndex;
