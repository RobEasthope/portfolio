import { NextMetadata } from "ui-pkg/base/app/Metadata/NextMetadata";
import { RenderSections } from "ui-pkg/utils/RenderSections/RenderSections";
import { Page as rawPageProps } from "ui-pkg/types/sanity-schema";
import { ExampleSectionProps } from "ui-pkg/blocks/ExampleSection/ExampleSection";
import { AppGlobalsProps } from "ui-pkg/settings/Globals";
import { ProjectProps } from "ui-pkg/pages/Project/Project";
import { BasicLayout } from "ui-pkg/layouts/BasicLayout/BasicLayout";

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
    <BasicLayout header={header} footer={footer}>
      {blocks && (
        <RenderSections blocks={blocks} projects={projects} pageTitle={page?.title} />
      )}
    </BasicLayout>
  );
};
