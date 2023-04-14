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
import SanityImageCSS from '~/components/base/SanityImage/SanityImage.css';
import ProseOverridesCSS from '~/components/base/Prose/prose-overrides.css';
import HeadroomCSS from '~/components/navigation/Header/headroom.css';
import YoutubeVideoCSS from '~/components/blocks/YoutubeVideo/YoutubeVideo.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: 'https://use.typekit.net/qjp7bat.css' },
  { rel: 'stylesheet', href: appCSS },
  { rel: 'stylesheet', href: SanityImageCSS },
  { rel: 'stylesheet', href: ProseOverridesCSS },
  { rel: 'stylesheet', href: HeadroomCSS },
  { rel: 'stylesheet', href: YoutubeVideoCSS },
];

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
