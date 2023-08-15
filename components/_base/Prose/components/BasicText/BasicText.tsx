/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable react/prop-types */

/* eslint-disable @typescript-eslint/naming-convention */
import type { PortableTextComponents } from '@portabletext/react';
import type { SanityBlock, SanityKeyed } from 'sanity-codegen';
import { EmailLink } from '~/components/_base/EmailLink/EmailLink';
import { ExternalLink } from '~/components/_base/ExternalLink/ExternalLink';
import { InternalLink } from '~/components/_base/InternalLink/InternalLink';
import { twLinkStyles } from '~/components/_base/Prose/twLinkStyles';
import { Type } from '~/components/_base/Type/Type';

export type BasicTextProps = Array<SanityKeyed<SanityBlock>>;

// MARKUP
export const BasicTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <Type as="h2" className="mb-1 font-sans text-2xl font-bold">
        {children}
      </Type>
    ),
    h3: ({ children }) => (
      <Type as="h3" className="mb-1 font-sans text-xl font-bold">
        {children}
      </Type>
    ),
    h4: ({ children }) => (
      <Type as="h4" className="mb-1 font-sans text-lg font-bold">
        {children}
      </Type>
    ),
    normal: ({ children }) => <Type as="p">{children}</Type>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-medium text-inherit">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-inherit">{children}</em>,

    // Links
    ExternalLink: ({ children, value }) => (
      <ExternalLink href={value.url} className={twLinkStyles}>
        {children}
      </ExternalLink>
    ),
    InternalLink: ({ children, value }) => (
      <InternalLink
        href={value?.page?.slug?.current}
        className={twLinkStyles}
        homePageSlug={value?.appSettings?.homePageSlug}
      >
        {children}
      </InternalLink>
    ),
    EmailLink: ({ children, value }) => (
      <EmailLink email={value?.email} className={twLinkStyles}>
        {children}
      </EmailLink>
    ),
  },
};
