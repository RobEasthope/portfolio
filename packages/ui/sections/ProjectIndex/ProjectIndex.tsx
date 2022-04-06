import { ProjectIndex as rawProjectIndexProps } from '@/UI/types/sanity-schema';
import { MaxWidth } from '@/UI/base/layout/MaxWidth/MaxWidth';
import { Box } from '@/UI/base/layout/Box/Box';

// TYPES
export interface ProjectIndexProps extends rawProjectIndexProps {
  muxVideo: unknown;
}

// MARKUP
export const ProjectIndex = ({ index }: ProjectIndexProps) => (
  <Box>
    <MaxWidth width="page">Project index</MaxWidth>
  </Box>
);

export default ProjectIndex;
