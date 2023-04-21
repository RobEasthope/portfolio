import { Box } from '~/components/base/Box/Box';
import { ExternalLink } from '~/components/base/ExternalLink/ExternalLink';
import { Prose } from '~/components/base/Prose/Prose';
import { ProjectTextComponents } from '~/components/base/Prose/components/ProjectText/ProjectText';
import { SanityImage } from '~/components/base/SanityImage/SanityImage';
import { Type } from '~/components/base/Type/Type';

import { Dot } from '~/components/blocks/Dot/Dot';

import { BasicLayout } from '~/components/layouts/BasicLayout/BasicLayout';

import { TechList } from '~/components/pages/Project/components/TechList/TechList';

export type ProjectProps = {
  blocks: [];
};

export const Project = ({ page, header, footer }: { page: ProjectProps }) => {
  if (!page?.displayProject || page?.displayProject === false) return null;

  return (
    <BasicLayout header={header} footer={footer}>
      <Box as="div" className="px-1 md:px-2 py-2">
        <Box
          as="div"
          className="flex flex-col gap-1 justify-center text-center mb-1"
        >
          <SanityImage
            asset={page?.thumbnailImage}
            alt={page?.title || ''}
            mode={page?.containLogo ? 'contain' : 'responsive'}
            maxWidth={200}
            aspectRatio={page?.containLogo ? null : 1}
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
    </BasicLayout>
  );
};
