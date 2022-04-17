import { ProjectIndex as rawProjectIndexProps } from '~/UI/types/sanity-schema';
import Link from 'next/link';
import { MaxWidth } from '~/UI/base/layout/MaxWidth/MaxWidth';
import { Flex } from '~/UI/base/layout/Flex/Flex';
import { Grid } from '~/UI/base/layout/Grid/Grid';
import { ProjectProps } from '~/UI/layouts/Project/Project';
import { Picture } from '~/UI/base/media/Picture/Picture';
import { styled } from '~/UI/styles/stitches.config';
import { createGroups } from '~/UI/utils/createGroups';
import { PaddedComponent } from '~/UI/base/layout/PaddedComponent/PaddedComponent';
import { NavLink } from '~/UI/base/typography/NavLink/NavLink';

// STYLES
export const Index = styled(Grid, {
  listStyle: 'none',
  marginY: 0,
  paddingX: 0,
});

export const Thumbnail = styled(Picture, {
  borderRadius: '$circle',
  xySize: '48px',
  marginRight: '$twoThirds',
  flexShrink: 0,

  '& img': {
    borderRadius: '$circle',
    width: '100%',
    height: '100%',
  },
});

export const ProjectTitle = styled(NavLink, {
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
    numGroups: 4,
  });

  return (
    <MaxWidth width="xLarge">
      {splitProjects?.length > 0 && (
        <Index columns={4} gapX="x2" gapY="x1">
          {projects.map((project) => (
            <Flex as="li" key={project?._id} align="center" direction="row">
              {project?.thumbnailImage && project?.slug && (
                <Link href={project?.slug?.current}>
                  <a>
                    <Thumbnail
                      asset={project?.thumbnailImage}
                      alt={project?.title || ''}
                      mode="responsive"
                      maxWidth={48}
                      aspectRatio={1}
                    />
                  </a>
                </Link>
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
        </Index>
      )}
    </MaxWidth>
  );
};

export default ProjectIndex;
