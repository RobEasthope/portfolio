import { ClientOnly } from 'remix-utils';
import { Studio } from 'sanity';
import config from 'sanity.config';

export function SanityStudio() {
  return <ClientOnly>{() => <Studio config={config} />}</ClientOnly>;
}

export default SanityStudio;
