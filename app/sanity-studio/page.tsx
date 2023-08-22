import { Suspense, lazy } from 'react';

const Fallback = (
  <div className="flex h-screen w-screen items-center justify-center">
    Loading...
  </div>
);

const SanityStudio = lazy(
  () => import('@/components/sanity/SanityStudio/SanityStudio'),
);

export default function SanityStudioPage() {
  return (
    <main>
      <Suspense fallback={Fallback}>
        <SanityStudio />
      </Suspense>
    </main>
  );
}
