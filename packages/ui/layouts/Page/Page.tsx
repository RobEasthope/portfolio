import { Footer } from '@/UI/navigation/Footer/Footer';
import { Header } from '@/UI/navigation/Header/Header';
import { FixedFooterLayout } from '@/UI/base/layout/FixedFooterLayout/FixedFooterLayout';
import { MainContentLayout } from '@/UI/base/layout/MainContentLayout/MainContentLayout';
import { Spacer } from '@/UI/sections/Spacer/Spacer';
import { NextMetadata } from '@/UI/base/app/Metadata/NextMetadata';
import { RenderSections } from '@/UI/utils/RenderSections/RenderSections';
import { Page as rawPageProps } from '@/UI/types/sanity-schema';
import { ExampleSectionProps } from '@/UI/sections/ExampleSection/ExampleSection';
import { AppGlobalsProps } from '@/UI/base/settings/Globals';
import { ProjectProps } from '@/UI/layouts/Project/Project';

export interface PageProps extends rawPageProps {
  sections: [ExampleSectionProps];
  projects: ProjectProps[];
}

export const Page = ({
  page,
  globals,
}: {
  page: PageProps;
  globals: AppGlobalsProps;
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
          <Spacer height="x1" />

          {sections && (
            <RenderSections sections={sections} projects={projects} />
          )}

          <Spacer height="x1" />
        </MainContentLayout>

        <Footer
          navigation={footer?.navigation}
          copyrightText={footer?.copyrightText}
        />
      </FixedFooterLayout>
    </>
  );
};
