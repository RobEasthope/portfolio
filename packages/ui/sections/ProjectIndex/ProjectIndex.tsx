import { ProjectIndex as rawProjectIndexProps } from '@/UI/types/sanity-schema';
import Link from 'next/link';
import { MaxWidth } from '@/UI/base/layout/MaxWidth/MaxWidth';
import { Box } from '@/UI/base/layout/Box/Box';
import { Text } from '@/UI/base/typography/Text/Text';
import { ProjectProps } from '@/UI/layouts/Project/Project';
import { styled } from '@/UI/styles/stitches.config';

// STYLES
export const Index = styled(Box, {
  listStyle: 'none',
  marginY: 0,
  paddingX: 0,
});

export const ProjectTitle = styled(Text, {
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
  },
});

// TYPES
export interface ProjectIndexProps extends rawProjectIndexProps {
  projects: ProjectProps[];
}

// MARKUP
export const ProjectIndex = ({ projects }: ProjectIndexProps) => (
  <Box>
    <MaxWidth width="page">
      {projects?.length > 0 && (
        <Index as="ul">
          {projects?.map((project) => (
            <li key={project?._id}>
              {project?.slug && (
                <ProjectTitle>
                  <Link href={project?.slug?.current}>
                    <a>{project.title}</a>
                  </Link>
                </ProjectTitle>
              )}
            </li>
          ))}
        </Index>
      )}
    </MaxWidth>
  </Box>
);

export default ProjectIndex;