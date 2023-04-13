import { ClientOnly } from 'remix-utils';
import { Studio } from 'sanity';

import config from '~/components/sanity/SanityStudio/sanity.config';

export function SanityStudio() {
  return <ClientOnly>{() => <Studio config={config} />}</ClientOnly>;
}

export default SanityStudio;
