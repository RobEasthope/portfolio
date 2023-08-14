import { useParams } from '@remix-run/react';
import { useLiveQuery } from '@sanity/preview-kit';

import type { CVProps } from '~/components/about/CV/CV';
import { CV } from '~/components/about/CV/CV';
import { CV_BY_SLUG_QUERY } from '~/components/about/CV/CV.query';

export function CVPreview({ page }: { page: CVProps['page'] }) {
  const params = useParams();

  const [data] = useLiveQuery(
    page,
    CV_BY_SLUG_QUERY({
      slug: params?.cv || '',
      componentTypes: [],
    }),
    params,
  );

  return <CV page={data} />;
}
