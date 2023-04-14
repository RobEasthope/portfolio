import { BsDot } from 'react-icons/bs';
import { Dot } from '~/components/decoration/Dot';

import { Box } from '~/components/base/Box/Box';
import { ExternalLink } from '~/components/base/ExternalLink/ExternalLink';
import { Prose } from '~/components/base/Prose/Prose';
import { ProjectTextComponents } from '~/components/base/Prose/components/ProjectText/ProjectText';
import { SanityImage } from '~/components/base/SanityImage/SanityImage';
import { Type } from '~/components/base/Type/Type';

import type { AppGlobalsProps } from '~/components/settings/Globals';

import { Spacer } from '~/components/blocks/Spacer/Spacer';

import { BasicLayout } from '~/components/layouts/BasicLayout/BasicLayout';

export type ProjectProps = {
  blocks: [];
};

export const Project = ({
  page,
  header,
  footer,
}: {
  page: ProjectProps;
  globals: AppGlobalsProps;
}) => (
  <BasicLayout header={header} footer={footer}>
    <Box as="div" className="py-2">
      <Box
        as="div"
        className="flex flex-col gap-1 justify-center text-center mb-1"
      >
        <SanityImage
          asset={page?.thumbnailImage}
          alt={page?.title || ''}
          mode="responsive"
          maxWidth={200}
          aspectRatio={1}
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
        <Spacer height="1" />

        <Dot />
      </Box>

      <Prose
        as="div"
        content={page?.projectText}
        components={ProjectTextComponents}
        className="mx-auto"
      />

      <Box as="div" className="flex flex-col gap-1 text-center">
        <Dot />

        <Type as="p">
          <ExternalLink href={page?.projectUrl || null}>
            {page?.projectUrlTitle || page?.projectUrl}
          </ExternalLink>
        </Type>
        <Type as="p">
          <ExternalLink href={page?.repoUrl || null}>
            {page?.repoUrl}
          </ExternalLink>
        </Type>
        <Type as="p">{page?.date}</Type>
      </Box>
    </Box>
  </BasicLayout>
);
