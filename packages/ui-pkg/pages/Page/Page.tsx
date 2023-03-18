import { Footer } from "ui-pkg/navigation/Footer/Footer";
import { Header } from "ui-pkg/navigation/Header/Header";
import { FixedFooterLayout } from "ui-pkg/base/structure/FixedFooterLayout/FixedFooterLayout";
import { MainContentLayout } from "ui-pkg/base/structure/MainContentLayout/MainContentLayout";
import { NextMetadata } from "ui-pkg/base/app/Metadata/NextMetadata";
import { RenderSections } from "ui-pkg/utils/RenderSections/RenderSections";
import { Page as rawPageProps } from "ui-pkg/types/sanity-schema";
import { ExampleSectionProps } from "ui-pkg/blocks/ExampleSection/ExampleSection";
import { AppGlobalsProps } from "ui-pkg/base/settings/Globals";
import { ProjectProps } from "ui-pkg/pages/Project/Project";

export interface PageProps extends rawPageProps {
  blocks: [ExampleSectionProps];
  projects: ProjectProps[];
}

export const Page = ({
  page,
  globals,
  homePageSlug,
}: {
  page: PageProps;
  globals: AppGlobalsProps;
  homePageSlug?: string;
}) => {
  // Globals props
  const { header, footer, metadata } = globals;

  // Page props
  const { blocks, projects, slug } = page;

  return (
    <>
      <NextMetadata
        title={page?.metadataTitle || page?.title}
        description={page?.metadataDescription}
        image={page?.metadataImage}
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
          {blocks && (
            <RenderSections blocks={blocks} projects={projects} pageTitle={page?.title} />
          )}
        </MainContentLayout>

        {slug?.current !== homePageSlug && (
          <Footer copyrightText={footer?.copyrightText} />
        )}
      </FixedFooterLayout>
    </>
  );
};
