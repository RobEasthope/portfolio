import { Page } from 'ui-pkg/types/sanity-schema';
import { Anchor } from 'ui-pkg/base/typography/Anchor/Anchor';

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
  href: string | null;
  className?: string;
  children: any;
  onClick?: VoidFunction;
};

export const ExternalLink = ({
  href,
  onClick,
  children,
  className,
}: ExternalLinkProps) => {
  if (!href) {
    return <span>{children || null}</span>;
  }

  return (
    <Anchor
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {children || null}
    </Anchor>
  );
};
