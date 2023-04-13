import { json } from '@vercel/remix';
import type { LoaderArgs } from '@vercel/remix';
import {
  useLoaderData,
  useRouteError,
  isRouteErrorResponse,
} from '@remix-run/react';
import { cacheHeader } from 'pretty-cache-header';
import type { HeaderProps } from '~/components/navigation/Header/Header';
import { Header } from '~/components/navigation/Header/Header';
import { sanityAPI } from '~/utils/sanity-js-api/sanityAPI';
import { HEADER_QUERY } from '~/components/navigation/Header/Header.query';

export const config = { runtime: 'edge' };

export async function loader({ request }: LoaderArgs) {
  const header: HeaderProps = await sanityAPI.fetch(HEADER_QUERY);

  return json({
    header,
  });
}

export function headers() {
  return {
    'Cache-Control': cacheHeader({
      maxAge: '30days',
      staleWhileRevalidate: '1day',
      staleIfError: '7days',
    }),
  };
}

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data.message}</p>
      </div>
    );
  }

  // Don't forget to typecheck with your own logic.
  // Any value can be thrown, not just errors!
  let errorMessage = 'Unknown error';
  if (isDefinitelyAnError(error)) {
    errorMessage = error.message;
  }

  return (
    <div>
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
      <pre>{errorMessage}</pre>
    </div>
  );
}

export default function Index() {
  const { header } = useLoaderData<typeof loader>();

  return (
    <main>
      <h1 className="text-red-400">foo</h1>
    </main>
  );
}
