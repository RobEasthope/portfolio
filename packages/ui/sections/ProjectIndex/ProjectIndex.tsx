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
  width: '50%',
  marginY: 0,
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
        <Index>
          {projects?.map((project) => (
            <li key={project?._id}>
              {project?.slug && (
                <Text>
                  <Link href={project?.slug?.current}>
                    <a>{project.title}</a>
                  </Link>
                </Text>
              )}
            </li>
          ))}
        </Index>
      )}
    </MaxWidth>
  </Box>
);

export default ProjectIndex;
