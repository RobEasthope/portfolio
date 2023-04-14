import { Box } from '~/components/base/Box/Box';
import { InternalLink } from '~/components/base/InternalLink/InternalLink';
import { SanityImage } from '~/components/base/SanityImage/SanityImage';
import { Type } from '~/components/base/Type/Type';

import type { ProjectProps } from '~/components/pages/Project/Project';

export type ProjectIndexCardProps = {
  project: ProjectProps;
};

export const ProjectIndexCard = ({ project }: ProjectIndexCardProps) => (
  <Box as="li" className="flex flex-row sm:flex-col items-center gap-0.25">
    <InternalLink href={project?.slug?.current}>
      <SanityImage
        asset={project?.thumbnailImage}
        alt={project?.title || ''}
        mode="responsive"
        maxWidth={100}
        aspectRatio={1}
        className="rounded-full w-2 h-2"
      />
    </InternalLink>

    <Type as="p" className="text-center">
      <InternalLink href={project?.slug?.current}>
        {project?.title}
      </InternalLink>
    </Type>
  </Box>
);
