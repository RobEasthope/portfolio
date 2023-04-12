import type { MetaFunction, LinksFunction, LoaderArgs } from '@vercel/remix';

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import stylesheet from '~/tailwind.css';

export function loader({ request }: LoaderArgs) {
  return {
    host: request.headers.get('x-forwarded-host'),
  };
}

export const meta: MetaFunction<typeof loader> = ({ data: { host } }) => ({
  charset: 'utf-8',
  title: 'Rob Easthope',
  description: 'Portfolio website for Rob Easthope',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
