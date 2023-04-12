import { ProjectIndex as rawProjectIndexProps } from "~/components/types/sanity-schema";
import { ProjectProps } from "~/components/pages/Project/Project";
import { InternalLink } from "~/components/base/InternalLink/InternalLink";
import { Box } from "~/components/base/Box/Box";
import { SanityImage } from "~/components/base/SanityImage/SanityImage";
import { Type } from "~/components/base/Type/Type";

// TYPES
export interface ProjectIndexProps extends rawProjectIndexProps {
  projects: ProjectProps[];
}

// MARKUP
export const ProjectIndex = ({ projects }: ProjectIndexProps) => (
  <Box as="section" className="px-1">
    {projects?.length > 0 && (
      <Box
        as="ul"
        className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {projects.map((project, i) => (
          <Box as="li" key={`${project?._id}-${i}`} className="flex items-center">
            {project?.thumbnailImage && project?.slug && (
              <InternalLink href={project?.slug?.current}>
                <a>
                  <SanityImage
                    asset={project?.thumbnailImage}
                    alt={project?.title || ""}
                    mode="responsive"
                    maxWidth={48}
                    aspectRatio={1}
                    className="rounded-full w-[48px] h-[48px]"
                  />
                </a>
              </InternalLink>
            )}

            {project?.slug && (
              <Type as="p">
                <InternalLink href={project?.slug?.current}>
                  {project?.title}
                </InternalLink>
              </Type>
            )}
          </Box>
        ))}
      </Box>
    )}
  </Box>
);

export default ProjectIndex;