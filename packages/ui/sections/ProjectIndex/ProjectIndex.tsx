import { ProjectIndex as rawProjectIndexProps } from '@/UI/types/sanity-schema';
import Link from 'next/link';
import { MaxWidth } from '@/UI/base/layout/MaxWidth/MaxWidth';
import { Flex } from '@/UI/base/layout/Flex/Flex';
import { Box } from '@/UI/base/layout/Box/Box';
import { Text } from '@/UI/base/typography/Text/Text';
import { ProjectProps } from '@/UI/layouts/Project/Project';
import { Picture } from '@/UI/base/media/Picture/Picture';
import { styled } from '@/UI/styles/stitches.config';

// STYLES
export const Index = styled(Box, {
  listStyle: 'none',
  marginY: 0,
  paddingX: 0,
});

export const Card = styled(Flex, {
  marginY: '$half',
});

export const Thumbnail = styled(Picture, {
  borderRadius: '50%',
  width: '40px',
  marginRight: '$half',

  '& img': {
    borderRadius: '50%',
  },
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
            <Card as="li" key={project?._id} align="center">
              {project?.thumbnailImage && (
                <Thumbnail
                  asset={project?.thumbnailImage}
                  alt={project?.title || ''}
                  mode="responsive"
                  maxWidth={200}
                />
              )}

              {project?.slug && (
                <ProjectTitle>
                  <Link href={project?.slug?.current}>
                    <a>{project?.title}</a>
                  </Link>
                </ProjectTitle>
              )}
            </Card>
          ))}
        </Index>
      )}
    </MaxWidth>
  </Box>
);

export default ProjectIndex;
