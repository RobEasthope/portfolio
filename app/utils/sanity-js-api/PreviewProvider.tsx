import { LiveQueryProvider } from '@sanity/preview-kit';
import { useMemo } from 'react';

import { sanityAPI } from '~/utils/sanity-js-api/sanityAPI';

export default function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token: string;
}) {
  const client = useMemo(() => sanityAPI({ preview: { token } }), [token]);

  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}
