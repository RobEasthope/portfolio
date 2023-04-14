import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Suspense, lazy } from 'react';
import styles from '~/sanity/SanityStudio/SanityStudio.css';

export const meta: MetaFunction = () => ({
  title: 'Sanity Studio',
  robots: 'noindex',
});

export const links: LinksFunction = () => [
  { rel: 'preload', href: styles, as: 'style' },
  { rel: 'stylesheet', href: styles },
];

const SanityStudio = lazy(() => import('~/sanity/SanityStudio/SanityStudio'));
const Fallback = (
  <div className="flex h-screen w-screen items-center justify-center">
    Loading...
  </div>
);

export default function StudioPage() {
  return (
    <Suspense fallback={Fallback}>
      <SanityStudio />
    </Suspense>
  );
}
