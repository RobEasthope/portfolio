import type {
  Organisation,
  Project as rawProjectProps,
} from '~/components/types/sanity-schema';
import type { AppGlobalsProps } from '~/components/settings/Globals';
import { ProjectTextComponents } from '~/components/base/Prose/components/ProjectText/ProjectText';
import { Box } from '~/components/base/Box/Box';
import { Spacer } from '~/components/blocks/Spacer/Spacer';
import { ExternalLink } from '~/components/base/ExternalLink/ExternalLink';
import { BsDot } from 'react-icons/bs';
import { BasicLayout } from '~/components/layouts/BasicLayout/BasicLayout';
import { Type } from 'base/Type/Type';
import { SanityImage } from 'base/SanityImage/SanityImage';
import { Prose } from '~/components/base/Prose/Prose';

export interface ProjectProps extends rawProjectProps {
  blocks: [];
  clientOrg: Organisation;
  agencyOrg: Organisation;
}

export const Project = ({
  page,
  globals,
}: {
  page: ProjectProps;
  globals: AppGlobalsProps;
}) => (
  <BasicLayout header={globals?.header} footer={globals?.footer}>
    <Box as="div" className="py-2">
      <Box as="div" className="text-center mb-1">
        <SanityImage
          asset={page?.thumbnailImage}
          alt={page?.title || ''}
          mode="responsive"
          maxWidth={200}
          aspectRatio={1}
          className="mb-1"
        />

        <Type as="h1" className="text-2xl mb-1">
          {page?.title}
        </Type>

        <Type as="p" className="mb-1">
          {page?.description}
        </Type>

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
        <Spacer height="1" />

        <BsDot className="h-1" />
      </Box>

      {page?.projectText && (
        <ProjectText blocks={page?.projectText as unknown} />
      )}
      <Prose content={page?.projectText} components={ProjectTextComponents} />

      <Box as="div" className="mt-1 text-center">
        <BsDot className="h-1" />

        <Type as="p" className="mt-1">
          <ExternalLink href={page?.projectUrl || null}>
            {page?.projectUrlTitle || page?.projectUrl}
          </ExternalLink>
        </Type>
        <Type as="p" className="mt-1">
          <ExternalLink href={page?.repoUrl || null}>
            {page?.repoUrl}
          </ExternalLink>
        </Type>
        <Type as="p" className="mt-1">
          {page?.date}
        </Type>
      </Box>
    </Box>
  </BasicLayout>
);
