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
  href: string;
  className?: string;
  children: any;
  onClick?: VoidFunction;
};

export const InternalLink = ({
  href,
  onClick,
  children,
  className,
}: InternalLinkProps) => {
  if (!href) {
    return <span>{children || null}</span>;
  }

  return (
    <Link href={href === 'home' ? '/' : `/${href}`} passHref>
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
};
