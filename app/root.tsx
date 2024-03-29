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
import type { LinksFunction, LoaderArgs, V2_MetaFunction } from '@vercel/remix';
import { json } from '@vercel/remix';
import { Suspense, lazy } from 'react';
import appCSS from '~/app.css';
import { links as proseLinks } from '~/components/_base/Prose/Prose';
import { links as sanityImageLinks } from '~/components/_base/SanityImage/SanityImage';
import { urlFor } from '~/components/_base/SanityImage/urlFor';
import { links as youtubeVideoLinks } from '~/components/generic/YoutubeVideo/YoutubeVideo';

import { METADATA_HARD_CODED_FALLBACKS } from '~/constants/METADATA_HARD_CODED_FALLBACKS';

import { sanityAPI } from '~/utils/sanity-js-api/sanityAPI';
import { getSession } from '~/utils/sessions';

import { Favicons } from '~/components/settings/Favicons/Favicons';
import type { MetadataFallbacksProps } from '~/components/settings/MetadataFallbacks/MetadataFallbacks';
import { METADATA_FALLBACKS_QUERY } from '~/components/settings/MetadataFallbacks/MetadataFallbacks.query';

import { links as headerLinks } from '~/components/navigation/Header/Header';

import { links as landingHeroLinks } from '~/components/decoration/LandingHero/LandingHero';

export const links: LinksFunction = () => [
  // Adobe Typekit
  { rel: 'stylesheet', href: 'https://use.typekit.net/jpv8zzo.css' },

  // Tailwind and app styles
  { rel: 'stylesheet', href: appCSS },

  // UI
  ...proseLinks(),
  ...sanityImageLinks(),
  ...headerLinks(),
  ...landingHeroLinks(),
  ...youtubeVideoLinks(),
];

const PreviewProvider = lazy(
  () => import('~/utils/sanity-js-api/PreviewProvider'),
);

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request.headers.get('Cookie'));
  const preview = session.get('preview');
  const url = `${process.env.VERCEL_URL || ''}`;

  const fallbacks: MetadataFallbacksProps = await sanityAPI({ preview }).fetch(
    METADATA_FALLBACKS_QUERY,
  );

  return json({
    preview,
    fallbacks: fallbacks || null,
    url,
  });
}

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => [
  {
    title: `${data?.fallbacks?.title}${METADATA_HARD_CODED_FALLBACKS?.SITE_TITLE}`,
  },
  {
    property: 'og:title',
    content: data?.fallbacks?.title,
  },
  {
    name: 'description',
    content: data?.fallbacks?.description,
  },
  {
    name: 'og:description',
    content: data?.fallbacks?.description,
  },
  {
    name: 'twitter:description',
    content: data?.fallbacks?.description,
  },
  {
    property: 'og:image',
    content:
      data?.fallbacks?.thumbnail &&
      urlFor(data?.fallbacks?.thumbnail).width(1200).height(630).url(),
  },
  {
    property: 'twitter:image',
    content:
      data?.fallbacks?.thumbnail &&
      urlFor(data?.fallbacks?.thumbnail).width(1200).height(630).url(),
  },
  {
    property: 'twitter:card',
    content: 'summary_large_image',
  },
  {
    property: 'og:url',
    content: data?.url,
  },
];

export default function App() {
  const { preview } = useLoaderData<typeof loader>();
  const children = <Outlet />;

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
        {preview?.token ? (
          <PreviewProvider token={preview.token}>
            <Suspense fallback={children}>{children}</Suspense>
          </PreviewProvider>
        ) : (
          children
        )}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
