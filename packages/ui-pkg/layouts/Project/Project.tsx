import { Footer } from "ui-pkg/navigation/Footer/Footer";
import { Header } from "ui-pkg/navigation/Header/Header";
import { FixedFooterLayout } from "ui-pkg/base/structure/FixedFooterLayout/FixedFooterLayout";
import { MainContentLayout } from "ui-pkg/base/structure/MainContentLayout/MainContentLayout";
import { NextMetadata } from "ui-pkg/base/app/Metadata/NextMetadata";
import { Organisation, Project as rawProjectProps } from "ui-pkg/types/sanity-schema";
import { ExampleSectionProps } from "ui-pkg/sections/ExampleSection/ExampleSection";
import { AppGlobalsProps } from "ui-pkg/base/settings/Globals";
import { Text } from "ui-pkg/base/typography/Text/Text";
import { ProjectText } from "ui-pkg/base/formatted-text/ProjectText/ProjectText";
import { MaxWidth } from "ui-pkg/base/structure/MaxWidth/MaxWidth";
import { Box } from "ui-pkg/base/structure/Box/Box";
import { Flex } from "ui-pkg/base/structure/Flex/Flex";
import { TextAlign } from "ui-pkg/base/structure/TextAlign/TextAlign";
import { Picture } from "ui-pkg/base/media/Picture/Picture";

import { styled } from "ui-pkg/styles/stitches.config";
import { Spacer } from "ui-pkg/sections/Spacer/Spacer";
import { ExternalLink } from "ui-pkg/base/links/ExternalLink/ExternalLink";
import { BsDot } from "react-icons/bs";

export const ProjectLogo = styled(Picture, {
  borderRadius: "$circle",
  xySize: "100px",

  "& img": {
    borderRadius: "$circle",
    width: "100%",
    height: "100%",
  },
});

export const Dot = styled(BsDot, {
  height: "$x1",
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
            <TextAlign align="centre" css={{ marginBottom: "$x1" }}>
              {thumbnailImage && (
                <Flex justify="center" css={{ marginBottom: "$x1" }}>
                  <ProjectLogo
                    asset={thumbnailImage}
                    alt={title || ""}
                    mode="responsive"
                    maxWidth={200}
                    aspectRatio={1}
                  />
                </Flex>
              )}

              {title && (
                <Text typeSize="large" css={{ marginBottom: "$x1" }}>
                  {title}
                </Text>
              )}

              {description && <Text css={{ marginBottom: "$x1" }}>{description}</Text>}

              {(clientOrg || agencyOrg) && (
                <Flex justify="center" gap="x1">
                  {clientOrg && (
                    <Text>
                      <Box as="span" css={{ fontStyle: "italic" }}>
                        Client:{" "}
                      </Box>
                      <ExternalLink href={clientOrg?.url || null}>
                        {clientOrg?.name}
                      </ExternalLink>
                    </Text>
                  )}
                  {agencyOrg && (
                    <Text>
                      <Box as="span" css={{ fontStyle: "italic" }}>
                        Agency:{" "}
                      </Box>
                      <ExternalLink href={agencyOrg?.url || null}>
                        {agencyOrg?.name}
                      </ExternalLink>
                    </Text>
                  )}
                </Flex>
              )}
              <Spacer height="x1" />

              <Dot />
            </TextAlign>

            {projectText && <ProjectText blocks={projectText as unknown} />}

            {(projectUrl || repoUrl || date) && (
              <TextAlign align="centre" css={{ marginTop: "$x1" }}>
                <Dot />

                {projectUrl && (
                  <Text css={{ marginTop: "$x1" }}>
                    <ExternalLink href={projectUrl}>
                      {projectUrlTitle || projectUrl}
                    </ExternalLink>
                  </Text>
                )}
                {repoUrl && (
                  <Text css={{ marginTop: "$x1" }}>
                    <ExternalLink href={repoUrl}>{repoUrl}</ExternalLink>
                  </Text>
                )}
                {date && <Text css={{ marginTop: "$x1" }}>{date}</Text>}
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
