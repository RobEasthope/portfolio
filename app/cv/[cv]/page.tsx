import { CV, CVProps } from '@/components/about/CV/CV';
import {
  CV_BY_SLUG_QUERY,
  CV_COMPONENT_TYPES_BY_SLUG_QUERY,
  CV_SLUGS_QUERY,
} from '@/components/about/CV/CV.query';
import { CVPreview } from '@/components/about/CV/CVPreview';
import { Error404Props } from '@/components/generic/Error404/Error404';
import { Page, PageProps } from '@/components/generic/Page/Page';
import {
  PAGE_BY_SLUG_QUERY,
  PAGE_COMPONENT_TYPES_BY_SLUG_QUERY,
  PAGE_SLUGS_QUERY,
  PageBySlugQueryProps,
} from '@/components/generic/Page/Page.query';
import { PagePreview } from '@/components/generic/Page/PagePreview';
import { AppSettingsProps } from '@/components/settings/AppSettings/AppSettings';
import { APP_SETTINGS_QUERY } from '@/components/settings/AppSettings/AppSettings.query';
import { sanityAPI } from '@/utils/sanity-js-api/sanityAPI';

type CVBySlugProps = CVProps;

export const dynamicParams = true;

export async function generateStaticParams() {
  const preview = process.env.SANITY_API_PREVIEW_DRAFTS === 'true';
  const slugs: string[] = await sanityAPI({ preview }).fetch(CV_SLUGS_QUERY);

  return slugs.map((slug) => ({
    paths: slug,
  }));
}

export async function getData(params) {
  const preview = process.env.SANITY_API_PREVIEW_DRAFTS === 'true';
  const url = `${process.env.VERCEL_URL || ''}/${params?.cv || ''}`;

  if (!params?.cv) {
    throw new Error('I guess all of the routing has collapsed? 🤷‍♂️');
  }

  const primer: PageBySlugQueryProps = await sanityAPI({ preview }).fetch(
    CV_COMPONENT_TYPES_BY_SLUG_QUERY({
      slug: params?.cv,
    }),
  );

  const payload: CVBySlugProps = await sanityAPI({ preview }).fetch(
    CV_BY_SLUG_QUERY({
      slug: params?.cv,
      componentTypes: primer?.componentTypes,
    }),
  );

  if (!payload) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('Not Found', {
      status: 404,
    });
  }

  return {
    preview: preview,
    primer: primer,
    page: payload,
  };
}

export default async function PageBySlug({ params }) {
  const { page, preview } = await getData(params);

  return <CV page={page} />;
}
