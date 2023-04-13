import type { LinksFunction } from '@vercel/remix';

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import appCSS from '~/app.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: appCSS }];

export const meta = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
  title: 'Rob Easthope',
  description: 'Portfolio website for Rob Easthope',
});

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
