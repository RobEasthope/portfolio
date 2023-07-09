import { useParams } from '@remix-run/react';
import type { SanityDocument } from '@sanity/client';
import { useLiveQuery } from '@sanity/preview-kit';
import { Page } from '~/components/generic/Page/Page';
import { PAGE_BY_ID_QUERY } from '~/components/generic/Page/Page.query';

export function PagePreview({ page }: { page: SanityDocument }) {
  const params = useParams();
  const [data] = useLiveQuery(
    page,
    PAGE_BY_ID_QUERY({
      id: primer?.id,
      componentTypes: primer?.componentTypes,
    }),
    params,
  );

  return <Page page={data} />;
}
