import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type { LinksFunction } from '@vercel/remix';
import appCSS from '~/app.css';
import YoutubeVideoCSS from '~/components/blocks/YoutubeVideo/YoutubeVideo.css';
import HeadroomCSS from '~/components/navigation/Header/headroom.css';

import ProseOverridesCSS from '~/components/base/Prose/prose-overrides.css';
import SanityImageCSS from '~/components/base/SanityImage/SanityImage.css';

export const links: LinksFunction = () => [
  // Adobe Typekit
  { rel: 'stylesheet', href: 'https://use.typekit.net/qjp7bat.css' },

  // Tailwind and app styles
  { rel: 'stylesheet', href: appCSS },

  // UI styles
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
      <body className="font-serif">
        <Outlet />
        <ScrollRestoration />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
