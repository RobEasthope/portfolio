import { useParams } from '@remix-run/react';
import { useLiveQuery } from '@sanity/preview-kit';
import type { PageProps } from '~/components/generic/Page/Page';
import { Page } from '~/components/generic/Page/Page';
import type { PageBySlugQueryProps } from '~/components/generic/Page/Page.query';
import {
  PAGE_BY_SLUG_QUERY,
  PAGE_COMPONENT_TYPES_BY_SLUG_QUERY,
} from '~/components/generic/Page/Page.query';

import { sanityAPI } from '~/utils/sanity-js-api/sanityAPI';

export async function PagePreview({
  page,
  slug,
}: {
  page: PageProps['page'];
  slug: string;
}) {
  const params = useParams();

  const primer: PageBySlugQueryProps = await sanityAPI({ preview }).fetch(
    PAGE_COMPONENT_TYPES_BY_SLUG_QUERY,
    {
      slug,
    },
  );

  const [data] = useLiveQuery(
    page,
    PAGE_BY_SLUG_QUERY({
      slug,
      componentTypes: primer?.componentTypes,
    }),
    params,
  );

  return <Page page={data} />;
}
