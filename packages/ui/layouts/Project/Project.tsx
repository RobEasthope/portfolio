import { Footer } from '@/UI/navigation/Footer/Footer';
import { Header } from '@/UI/navigation/Header/Header';
import { FixedFooterLayout } from '@/UI/base/layout/FixedFooterLayout/FixedFooterLayout';
import { MainContentLayout } from '@/UI/base/layout/MainContentLayout/MainContentLayout';
import { NextMetadata } from '@/UI/base/app/Metadata/NextMetadata';
import {
  Organisation,
  Project as rawProjectProps,
} from '@/UI/types/sanity-schema';
import { ExampleSectionProps } from 'sections/ExampleSection/ExampleSection';
import { AppGlobalsProps } from '@/UI/base/settings/Globals';
import { Text } from '@/UI/base/typography/Text/Text';
import { ProjectText } from '@/UI/base/formatted-text/ProjectText/ProjectText';
import { MaxWidth } from '@/UI/base/layout/MaxWidth/MaxWidth';
import { Flex } from '@/UI/base/layout/Flex/Flex';
import { TextAlign } from '@/UI/base/layout/TextAlign/TextAlign';

export interface ProjectProps extends rawProjectProps {
  sections: [ExampleSectionProps];
  client: Organisation;
  agency: Organisation;
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
    client,
    agency,
    projectText,
    projectUrlTitle,
    projectUrl,
    repoUrl,
    date,
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
          <MaxWidth width="small">
            <TextAlign align="centre">
              {description && <Text>{description}</Text>}
              {title && <Text>{title}</Text>}
              <Flex gap={3} justify="center">
                {client && <Text>{client?.name}</Text>}
                {agency && <Text>{agency?.name}</Text>}
              </Flex>
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
              {date && <Text>{date}</Text>}
            </TextAlign>
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
