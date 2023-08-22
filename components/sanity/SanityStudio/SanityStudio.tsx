'use client';

import StudioClientPkg from './StudioClientPkg';
import config from 'sanity.config';

export function SanityStudio() {
  return <StudioClientPkg config={config} />;
}

export default SanityStudio;
