import { Footer } from '~/UI/navigation/Footer/Footer';
import { Header } from '~/UI/navigation/Header/Header';
import { FixedFooterLayout } from '~/UI/base/structure/FixedFooterLayout/FixedFooterLayout';
import { MainContentLayout } from '~/UI/base/structure/MainContentLayout/MainContentLayout';
import { NextMetadata } from '~/UI/base/app/Metadata/NextMetadata';
import {
  Organisation,
  Project as rawProjectProps,
} from '~/UI/types/sanity-schema';
import { ExampleSectionProps } from '~/UI/sections/ExampleSection/ExampleSection';
import { AppGlobalsProps } from '~/UI/base/settings/Globals';
import { Text } from '~/UI/base/typography/Text/Text';
import { ProjectText } from '~/UI/base/formatted-text/ProjectText/ProjectText';
import { MaxWidth } from '~/UI/base/structure/MaxWidth/MaxWidth';
import { Box } from '~/UI/base/structure/Box/Box';
import { Flex } from '~/UI/base/structure/Flex/Flex';
import { TextAlign } from '~/UI/base/structure/TextAlign/TextAlign';
import { Picture } from '~/UI/base/media/Picture/Picture';

import { styled } from '~/UI/styles/stitches.config';
import { Spacer } from '~/UI/sections/Spacer/Spacer';
import { ExternalLink } from '~/UI/base/links/ExternalLink/ExternalLink';
import { BsDot } from 'react-icons/bs';

export const ProjectLogo = styled(Picture, {
  borderRadius: '$circle',
  xySize: '100px',

  '& img': {
    borderRadius: '$circle',
    width: '100%',
    height: '100%',
  },
});

export interface ProjectProps extends rawProjectProps {
  sections: [ExampleSectionProps];
  clientOrg: Organisation;
  agencyOrg: Organisation;
}

export const Project = ({
  project,
  globals,
}: {
  project: ProjectProps;
  globals: AppGlobalsProps;
}) => {
  // Globals props
  const { header, footer, metadata } = globals;

  // Page props
  const {
    title,
    description,
    clientOrg,
    agencyOrg,
    projectText,
    projectUrlTitle,
    projectUrl,
    repoUrl,
    date,
    thumbnailImage,
  } = project;

  return (
    <>
      <NextMetadata
        title={project?.title}
        description={project?.description}
        image={project?.thumbnailImage}
        globalMetadata={metadata}
      />

      <FixedFooterLayout>
        {header && (
          <Header
            logo={header?.logo}
            navigationLeft={header?.navigationLeft}
            navigationRight={header?.navigationRight}
          />
        )}

        <MainContentLayout as="main">
          <Spacer height="x2" />

          <MaxWidth width="text">
            <TextAlign align="centre" css={{ marginBottom: '$x1' }}>
              {thumbnailImage && (
                <Flex justify="center" css={{ marginBottom: '$x1' }}>
                  <ProjectLogo
                    asset={thumbnailImage}
                    alt={title || ''}
                    mode="responsive"
                    maxWidth={200}
                    aspectRatio={1}
                  />
                </Flex>
              )}

              {title && (
                <Text typeSize="large" css={{ marginBottom: '$x1' }}>
                  {title}
                </Text>
              )}

              {description && (
                <Text css={{ marginBottom: '$x1' }}>{description}</Text>
              )}

              {(clientOrg || agencyOrg) && (
                <Flex justify="center" gap="x1">
                  {clientOrg && (
                    <Text>
                      <Box as="span" css={{ fontStyle: 'italic' }}>
                        Client:{' '}
                      </Box>
                      <ExternalLink href={clientOrg?.url}>
                        {clientOrg?.name}
                      </ExternalLink>
                    </Text>
                  )}
                  {agencyOrg && (
                    <Text>
                      <Box as="span" css={{ fontStyle: 'italic' }}>
                        Agency:{' '}
                      </Box>
                      <ExternalLink href={agencyOrg?.url}>
                        {agencyOrg?.name}
                      </ExternalLink>
                    </Text>
                  )}
                </Flex>
              )}
              <Spacer height="x1" />

              <BsDot />
            </TextAlign>

            {projectText && <ProjectText blocks={projectText as unknown} />}

            {(projectUrl || repoUrl || date) && (
              <TextAlign align="centre" css={{ marginTop: '$x1' }}>
                {projectUrl && (
                  <Text css={{ marginTop: '$x1' }}>
                    <ExternalLink href={projectUrl}>
                      {projectUrlTitle || projectUrl}
                    </ExternalLink>
                  </Text>
                )}
                {repoUrl && (
                  <Text css={{ marginTop: '$x1' }}>
                    <ExternalLink href={repoUrl}>{repoUrl}</ExternalLink>
                  </Text>
                )}
                {date && <Text css={{ marginTop: '$x1' }}>{date}</Text>}
              </TextAlign>
            )}
            <Spacer height="x2" />
          </MaxWidth>
        </MainContentLayout>

        <Footer copyrightText={footer?.copyrightText} />
      </FixedFooterLayout>
    </>
  );
};
