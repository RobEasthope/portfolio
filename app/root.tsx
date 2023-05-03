/* eslint-disable camelcase */
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { Analytics } from '@vercel/analytics/react';
import type { LinksFunction, V2_MetaFunction } from '@vercel/remix';
import { json } from '@vercel/remix';
import appCSS from '~/app.css';
import YoutubeVideoCSS from '~/components/generic/YoutubeVideo/YoutubeVideo.css';

import { sanityAPI } from '~/utils/sanity-js-api/sanityAPI';

import { Favicons } from '~/components/settings/Favicons/Favicons';
import type { MetadataFallbacksProps } from '~/components/settings/MetadataFallbacks/MetadataFallbacks';
import { METADATA_FALLBACKS_QUERY } from '~/components/settings/MetadataFallbacks/MetadataFallbacks.query';

import ProseOverridesCSS from '~/components/base/Prose/prose-overrides.css';
import SanityImageCSS from '~/components/base/SanityImage/SanityImage.css';
import { urlFor } from '~/components/base/SanityImage/urlFor';

import HeadroomCSS from '~/components/navigation/Header/headroom.css';

import LandingHeroCSS from '~/components/decoration/LandingHero/LandingHero.css';

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

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => [
  { title: `${data?.fallbacks?.title} // Rob Easthope` },
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
    content:
      data?.fallbacks?.thumbnail &&
      urlFor(data?.fallbacks?.thumbnail).width(1200).height(630).url(),
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Favicons />
        <Meta />
        <Links />
      </head>
      <body className="font-plantin text-ink">
        <Analytics />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
