import { Footer } from '~/UI/navigation/Footer/Footer';
import { Header } from '~/UI/navigation/Header/Header';
import { FixedFooterLayout } from '~/UI/base/layout/FixedFooterLayout/FixedFooterLayout';
import { MainContentLayout } from '~/UI/base/layout/MainContentLayout/MainContentLayout';
import { NextMetadata } from '~/UI/base/app/Metadata/NextMetadata';
import {
  Organisation,
  Project as rawProjectProps,
} from '~/UI/types/sanity-schema';
import { ExampleSectionProps } from '~/UI/sections/ExampleSection/ExampleSection';
import { AppGlobalsProps } from '~/UI/base/settings/Globals';
import { Text } from '~/UI/base/typography/Text/Text';
import { ProjectText } from '~/UI/base/formatted-text/ProjectText/ProjectText';
import { MaxWidth } from '~/UI/base/layout/MaxWidth/MaxWidth';
import { Box } from '~/UI/base/layout/Box/Box';
import { Flex } from '~/UI/base/layout/Flex/Flex';
import { TextAlign } from '~/UI/base/layout/TextAlign/TextAlign';
import { Picture } from '~/UI/base/media/Picture/Picture';

import { styled } from '~/UI/styles/stitches.config';
import { Spacer } from '~/UI/sections/Spacer/Spacer';

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
          <MaxWidth width="small">
            <TextAlign align="centre">
              {thumbnailImage && (
                <>
                  <Flex justify="center">
                    <ProjectLogo
                      asset={thumbnailImage}
                      alt={title || ''}
                      mode="responsive"
                      maxWidth={200}
                      aspectRatio={1}
                    />
                  </Flex>
                  <Spacer height="x1" />
                </>
              )}

              {title && <Text typeSize="large">{title}</Text>}
              <Spacer height="half" />

              {description && <Text>{description}</Text>}
              <Spacer height="x1" />

              <Flex justify="center" gap="x1">
                {clientOrg && (
                  <Text>
                    <Box as="span" css={{ fontStyle: 'italic' }}>
                      Client:{' '}
                    </Box>
                    {clientOrg?.name}
                  </Text>
                )}
                {agencyOrg && (
                  <Text>
                    <Box as="span" css={{ fontStyle: 'italic' }}>
                      Agency:{' '}
                    </Box>
                    {agencyOrg?.name}
                  </Text>
                )}
              </Flex>

              <Spacer height="x2" />
            </TextAlign>

            {projectText && <ProjectText blocks={projectText as unknown} />}

            <TextAlign align="centre">
              {projectUrl && (
                <Text>
                  <a href={projectUrl}>{projectUrlTitle || projectUrl}</a>
                </Text>
              )}
              {repoUrl && (
                <Text>
                  <a href={repoUrl}>{repoUrl}</a>
                </Text>
              )}
              {date && (
                <>
                  <Spacer height="x1" /> <Text>{date}</Text>
                </>
              )}
            </TextAlign>
            <Spacer height="x2" />
          </MaxWidth>
        </MainContentLayout>

        <Footer
          navigation={footer?.navigation}
          copyrightText={footer?.copyrightText}
        />
      </FixedFooterLayout>
    </>
  );
};
