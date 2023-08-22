'use client';

import Studio from './SanityStudioPkg';
import config from 'sanity.config';

export function SanityStudio() {
  return <Studio config={config} />;
}

export default SanityStudio;
