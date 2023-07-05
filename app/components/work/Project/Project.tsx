import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from 'sanity-codegen';
import type { TechProps } from '~/components/work/Project/components/TechList/TechList';
import { TechList } from '~/components/work/Project/components/TechList/TechList';

import { Box } from '~/components/base/Box/Box';
import { ExternalLink } from '~/components/base/ExternalLink/ExternalLink';
import { Prose } from '~/components/base/Prose/Prose';
import { ProjectTextComponents } from '~/components/base/Prose/components/ProjectText/ProjectText';
import { SanityImage } from '~/components/base/SanityImage/SanityImage';
import { Type } from '~/components/base/Type/Type';

import { Dot } from '~/components/decoration/Dot/Dot';

export type ProjectProps = {
  page?: {
    _id?: string;
    _type?: 'Project';
    title?: string;
    slug?: {
      _type?: 'slug';
      current?: string;
    };
    thumbnailImage?: {
      _type: 'image';
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    };
    containLogo?: boolean;
    description?: string;
    clientOrg?: {
      name?: string;
      url?: string;
    };
    agencyOrg?: {
      name?: string;
      url?: string;
    };
    projectText?: any[] | string;
    projectUrl?: string;
    projectUrlTitle?: string;
    repoUrl?: string;
    date?: string;
    technologies?: TechProps[];
    displayProject?: boolean;
  };
};

export const Project = ({ page }: ProjectProps) => {
  if (!page?.displayProject) return null;

  return (
    <Box as="div" className="px-1 md:px-2 py-2">
      <Box
        as="div"
        className="flex flex-col gap-1 justify-center text-center mb-1"
      >
        <SanityImage
          src={page?.thumbnailImage}
          alt={page?.title}
          // mode={page?.containLogo ? 'contain' : 'responsive'}
          aspectRatio={page?.containLogo ? 0 : 1}
          className="mx-auto rounded-full w-4 h-4"
        />

        <Type as="h1" className="text-2xl">
          {page?.title}
        </Type>

        <Type as="p">{page?.description}</Type>

        <Box as="section" className="flex gap-1 justify-center">
          {page?.clientOrg && (
            <Type as="p">
              <Box as="span">Client: </Box>
              <ExternalLink href={page?.clientOrg?.url || null}>
                {page?.clientOrg?.name}
              </ExternalLink>
            </Type>
          )}
          {page?.agencyOrg && (
            <Type as="p">
              <Box as="span">Agency: </Box>
              <ExternalLink href={page?.agencyOrg?.url || null}>
                {page?.agencyOrg?.name}
              </ExternalLink>
            </Type>
          )}
        </Box>

        <Dot />
      </Box>

      <Prose
        as="div"
        content={page?.projectText}
        components={ProjectTextComponents}
        className="mx-auto"
      />

      <Box as="div" className="flex flex-col gap-1 text-center">
        <Dot className="mt-1" />
        <ExternalLink href={page?.projectUrl || null}>
          {page?.projectUrlTitle || page?.projectUrl}
        </ExternalLink>

        <TechList technologies={page?.technologies} />

        <ExternalLink href={page?.repoUrl || null}>
          {page?.repoUrl}
        </ExternalLink>

        <Type as="p">{page?.date}</Type>
      </Box>
    </Box>
  );
};
