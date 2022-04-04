import { Footer } from '@/UI/navigation/Footer/Footer';
import { Header } from '@/UI/navigation/Header/Header';
import { FixedFooterLayout } from '@/UI/base/layout/FixedFooterLayout/FixedFooterLayout';
import { MainContentLayout } from '@/UI/base/layout/MainContentLayout/MainContentLayout';
import { NextMetadata } from '@/UI/base/app/Metadata/NextMetadata';
import { RenderSections } from '@/UI/base/app/RenderSections/RenderSections';
import { Page as rawPageProps } from '@/UI/types/sanity-schema';
import { ExampleSectionProps } from '@/UI/content/ExampleSection/ExampleSection';
import { AppGlobalsProps } from '@/UI/base/settings/Globals';

export interface ProjectProps extends rawPageProps {
  sections: [ExampleSectionProps];
}

export const Project = ({
  page,
  globals,
}: {
  page: ProjectProps;
  globals: AppGlobalsProps;
}) => {
  // Globals props
  const { header, metadata } = globals;

  // Page props
  const { title, sections } = page;

  return (
    <>
      <NextMetadata page={page} globalMetadata={metadata} />

      <FixedFooterLayout>
        {header && (
          <Header logo={header?.logo} navigation={header?.navigation} />
        )}

        <MainContentLayout as="main">
          {title && <h1>{title}</h1>}
          {sections && <RenderSections sections={sections} />}
        </MainContentLayout>

        <Footer />
      </FixedFooterLayout>
    </>
  );
};
