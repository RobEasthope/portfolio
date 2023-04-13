import { ClientOnly } from 'remix-utils';
import { Studio } from 'sanity';

import { config } from '~/sanity.config';

export function SanityStudioWrapper() {
  return (
    <ClientOnly>
      {() => <Studio config={config} unstable_noAuthBoundary />}
    </ClientOnly>
  );
}

export default SanityStudioWrapper;
