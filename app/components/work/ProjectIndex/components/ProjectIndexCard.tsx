import type { ProjectProps } from '~/components/work/Project/Project';

import { Box } from '~/components/base/Box/Box';
import { InternalLink } from '~/components/base/InternalLink/InternalLink';
import { SanityImage } from '~/components/base/SanityImage/SanityImage';

export type ProjectIndexCardProps = {
  project: ProjectProps['page'];
};

export const ProjectIndexCard = ({ project }: ProjectIndexCardProps) => {
  if (!project?.displayProject) {
    return null;
  }

  return (
    <Box as="li">
      <InternalLink
        href={project?.slug?.current}
        className="flex h-full flex-row sm:flex-col items-center gap-0.5 sm:gap-0.25 text-left sm:text-center"
      >
        <SanityImage
          src={project?.thumbnailImage}
          alt={project?.title || ''}
          // mode={project?.containLogo ? 'contain' : 'responsive'}
          maxWidth={100}
          aspectRatio={project?.containLogo ? 0 : 1}
          className="rounded-full w-2 h-2 flex-shrink-0"
        />

        {project?.title}
      </InternalLink>
    </Box>
  );
};
