import { Footer } from '@/UI/navigation/Footer/Footer';
import { Header } from '@/UI/navigation/Header/Header';
import { FixedFooterLayout } from '@/UI/base/layout/FixedFooterLayout/FixedFooterLayout';
import { MainContentLayout } from '@/UI/base/layout/MainContentLayout/MainContentLayout';
import { NextMetadata } from '@/UI/base/app/Metadata/NextMetadata';
import { RenderSections } from '@/UI/base/app/RenderSections/RenderSections';
import { Page as rawPageProps } from '@/UI/types/sanity-schema';
import { ExampleSectionProps } from 'sections/ExampleSection/ExampleSection';
import { AppGlobalsProps } from '@/UI/base/settings/Globals';

export interface PageProps extends rawPageProps {
  sections: [ExampleSectionProps];
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
  const { sections } = page;

  return (
    <>
      <NextMetadata
        title={page?.title}
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
          {sections && <RenderSections sections={sections} />}
        </MainContentLayout>

        <Footer
          navigation={footer?.navigation}
          copyrightText={footer?.copyrightText}
        />
      </FixedFooterLayout>
    </>
  );
};
