import { Box } from '~/components/base/Box/Box';
import { InternalLink } from '~/components/base/InternalLink/InternalLink';
import { SanityImage } from '~/components/base/SanityImage/SanityImage';
import { Type } from '~/components/base/Type/Type';

import type { ProjectProps } from '~/components/pages/Project/Project';

export type ProjectIndexCardProps = {
  project: ProjectProps;
};

export const ProjectIndexCard = ({ project }: ProjectIndexCardProps) => (
  <Box as="li">
    <InternalLink
      href={project?.slug?.current}
      className="flex flex-row sm:flex-col items-center gap-0.25 text-center"
    >
      <SanityImage
        asset={project?.thumbnailImage}
        alt={project?.title || ''}
        mode="responsive"
        maxWidth={100}
        aspectRatio={1}
        className="rounded-full w-2 h-2"
      />

      {project?.title}
    </InternalLink>
  </Box>
);
