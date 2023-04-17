import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type { LinksFunction } from '@vercel/remix';
import { json } from '@vercel/remix';
import appCSS from '~/app.css';

import { sanityAPI } from '~/sanity/sanity-js-api/sanityAPI';

import ProseOverridesCSS from '~/components/base/Prose/prose-overrides.css';
import SanityImageCSS from '~/components/base/SanityImage/SanityImage.css';

import HeadroomCSS from '~/components/navigation/Header/headroom.css';

import type { MetadataFallbacksProps } from '~/components/settings/MetadataFallbacks/MetadataFallbacks';
import { METADATA_FALLBACKS_QUERY } from '~/components/settings/MetadataFallbacks/MetadataFallbacks.query';

import LandingHeroCSS from '~/components/blocks/LandingHero/LandingHero.css';
import YoutubeVideoCSS from '~/components/blocks/YoutubeVideo/YoutubeVideo.css';

export const links: LinksFunction = () => [
  // Adobe Typekit
  { rel: 'stylesheet', href: 'https://use.typekit.net/jpv8zzo.css' },

  // Tailwind and app styles
  { rel: 'stylesheet', href: appCSS },

  // UI styles
  { rel: 'stylesheet', href: SanityImageCSS },
  { rel: 'stylesheet', href: ProseOverridesCSS },
  { rel: 'stylesheet', href: HeadroomCSS },
  { rel: 'stylesheet', href: LandingHeroCSS },
  { rel: 'stylesheet', href: YoutubeVideoCSS },
];

export async function loader() {
  const fallbacks: MetadataFallbacksProps = await sanityAPI.fetch(
    METADATA_FALLBACKS_QUERY,
  );

  return json({
    fallbacks: fallbacks || null,
  });
}

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  console.log(data);

  return [
    { title: data?.fallbacks?.title },
    {
      property: 'og:title',
      content: data?.fallbacks?.title,
    },
    {
      name: 'description',
      content: data?.fallbacks?.description,
    },
    {
      property: 'og:image',
      content: data?.fallbacks?.thumbnail,
    },
  ];
};

// export const meta = () => ({
//   charset: 'utf-8',
//   viewport: 'width=device-width,initial-scale=1',
//   title: 'Rob Easthope',
//   description: 'Portfolio website for Rob Easthope',
// });

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <Meta />
        <Links />
      </head>
      <body className="font-plantin text-ink">
        <Outlet />
        <ScrollRestoration />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
