import { Page } from '~/UI/types/sanity-schema';
import { Anchor } from '~/UI/base/typography/Anchor/Anchor';

// Schema props
export type ExternalLinkWithTitleSchemaProps = {
  _type: 'ExternalLinkWithTitle';
  _key: string;
  title: string;
  to?: Page;
  url: string;
};

export type ExternalLinkSchemaProps = {
  _type: 'ExternalLinkSansTitle';
  _key: string;
  newTab: boolean;
  to?: Page;
  url: string;
};

// Component props
export type ExternalLinkProps = {
  link?: string;
  href?: string;
  className?: string;
  children: any;
  onClick?: VoidFunction;
};

export const ExternalLink = ({
  link,
  href,
  onClick,
  children,
  className,
}: ExternalLinkProps) => {
  if (!link && !href) {
    return <span>{children || null}</span>;
  }

  return (
    <Anchor
      href={link || href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {children || null}
    </Anchor>
  );
};
