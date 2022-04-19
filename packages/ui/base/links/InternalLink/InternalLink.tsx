import Link from 'next/link';
import { SanityReference, Page } from '~/UI/types/sanity-schema';
import { Anchor } from '~/UI/base/typography/Anchor/Anchor';

// Schema props
export type InternalLinkWithTitleSchemaProps = {
  _type: 'InternalLinkWithTitle';
  _key: string;
  internalUID: SanityReference<Page>;
  title: string;
  to: Page;
};

export type InternalLinkSchemaProps = {
  _type: 'InternalLinkSansTitle';
  _key: string;
  internalUID: SanityReference<Page>;
  to: Page;
};

// Component props
export type InternalLinkProps = {
  link: string;
  className?: string;
  children: any;
  onClick?: VoidFunction;
};

export const InternalLink = ({
  link,
  onClick,
  children,
  className,
}: InternalLinkProps) => (
  <Link href={link === 'home' ? '/' : `/${link}`} passHref>
    <Anchor
      className={className}
      onClick={onClick}
      onKeyDown={onClick}
      role="link"
      tabIndex={0}
    >
      {children || null}
    </Anchor>
  </Link>
);
