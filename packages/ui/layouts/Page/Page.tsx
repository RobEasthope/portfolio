import { Footer } from '~/UI/navigation/Footer/Footer';
import { Header } from '~/UI/navigation/Header/Header';
import { FixedFooterLayout } from '~/UI/base/structure/FixedFooterLayout/FixedFooterLayout';
import { MainContentLayout } from '~/UI/base/structure/MainContentLayout/MainContentLayout';
import { NextMetadata } from '~/UI/base/app/Metadata/NextMetadata';
import { RenderSections } from '~/UI/utils/RenderSections/RenderSections';
import { Page as rawPageProps } from '~/UI/types/sanity-schema';
import { ExampleSectionProps } from '~/UI/sections/ExampleSection/ExampleSection';
import { AppGlobalsProps } from '~/UI/base/settings/Globals';
import { ProjectProps } from '~/UI/layouts/Project/Project';

export interface PageProps extends rawPageProps {
  sections: [ExampleSectionProps];
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
  const { sections, projects } = page;

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
          {sections && (
            <RenderSections sections={sections} projects={projects} />
          )}
        </MainContentLayout>

        {slug?.current !== homePageSlug && (
          <Footer copyrightText={footer?.copyrightText} />
        )}
      </FixedFooterLayout>
    </>
  );
};
