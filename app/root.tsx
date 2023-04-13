import type { LinksFunction } from '@vercel/remix';
import { json } from '@vercel/remix';

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';

import appCSS from '~/app.css';
import SanityImageCSS from '~/components/base/SanityImage/SanityImage.css';
import ProseOverridesCSS from '~/components/base/Prose/prose-overrides.css';
import HeadroomCSS from '~/components/navigation/Header/headroom.css';
import YoutubeVideoCSS from '~/components/blocks/YoutubeVideo/YoutubeVideo.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: appCSS },
  { rel: 'stylesheet', href: SanityImageCSS },
  { rel: 'stylesheet', href: ProseOverridesCSS },
  { rel: 'stylesheet', href: HeadroomCSS },
  { rel: 'stylesheet', href: YoutubeVideoCSS },
];

export async function loader() {
  return json({
    ENV: {
      SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
      SANITY_PROJECT_DATASET: process.env.SANITY_PROJECT_DATASET,
    },
  });
}

export const meta = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
  title: 'Rob Easthope',
  description: 'Portfolio website for Rob Easthope',
});

export default function App() {
  const data = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
