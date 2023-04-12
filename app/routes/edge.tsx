import type { LoaderArgs } from '@vercel/remix';
import { useLoaderData } from '@remix-run/react';

export const config = { runtime: 'edge' };

export async function loader({ request }: LoaderArgs) {
  return {
    date: new Date().toISOString(),
  };
}

export default function App() {
  const { date } = useLoaderData<typeof loader>();
  return (
    <main>
      <h1>foo</h1>
    </main>
  );
}
