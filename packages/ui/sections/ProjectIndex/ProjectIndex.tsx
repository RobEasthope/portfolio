import { ProjectIndex as rawProjectIndexProps } from '@/UI/types/sanity-schema';
import Link from 'next/link';
import { MaxWidth } from '@/UI/base/layout/MaxWidth/MaxWidth';
import { Flex } from '@/UI/base/layout/Flex/Flex';
import { Grid } from '@/UI/base/layout/Grid/Grid';
import { Box } from '@/UI/base/layout/Box/Box';
import { Text } from '@/UI/base/typography/Text/Text';
import { ProjectProps } from '@/UI/layouts/Project/Project';
import { Picture } from '@/UI/base/media/Picture/Picture';
import { styled } from '@/UI/styles/stitches.config';
import { createGroups } from '@/UI/utils/createGroups';

// STYLES
export const Index = styled(Flex, {
  listStyle: 'none',
  marginY: 0,
  paddingX: 0,
});

export const Thumbnail = styled(Picture, {
  borderRadius: '$circle',
  width: '48px',
  height: '48px',
  marginRight: '$half',
  flexShrink: 0,

  '& img': {
    borderRadius: '$circle',
    width: '100%',
    height: '100%',
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
export const ProjectIndex = ({ projects }: ProjectIndexProps) => {
  const splitProjects: [ProjectProps[]] = createGroups({
    arr: projects,
    numGroups: 3,
  });

  return (
    <Box>
      <MaxWidth width="page">
        {splitProjects?.length > 0 && (
          <Index as="ul">
            {splitProjects?.map((grouping) => (
              <Box as="ul" css={{ width: 'calc(100% / 3)' }}>
                {grouping.map((project) => (
                  <Flex
                    as="li"
                    key={project?._id}
                    align="center"
                    css={{ marginY: '$twoThirds' }}
                    direction="row"
                  >
                    {project?.thumbnailImage && (
                      <Thumbnail
                        asset={project?.thumbnailImage}
                        alt={project?.title || ''}
                        mode="responsive"
                        maxWidth={48}
                        aspectRatio={1}
                      />
                    )}

                    {project?.slug && (
                      <ProjectTitle>
                        <Link href={project?.slug?.current}>
                          <a>{project?.title}</a>
                        </Link>
                      </ProjectTitle>
                    )}
                  </Flex>
                ))}
              </Box>
            ))}
          </Index>
        )}
      </MaxWidth>
    </Box>
  );
};

export default ProjectIndex;
