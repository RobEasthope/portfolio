import { useParams } from '@remix-run/react';
import { useLiveQuery } from '@sanity/preview-kit';
import type { PageProps } from '~/components/generic/Page/Page';
import { Page } from '~/components/generic/Page/Page';
import { PAGE_BY_SLUG_QUERY } from '~/components/generic/Page/Page.query';

export function PagePreview({
  page,
  slug,
}: {
  page: PageProps['page'];
  slug: string;
}) {
  const params = useParams();
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
