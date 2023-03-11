import Link from "next/link";
import { SanityReference } from "ui-pkg/types/sanity-schema";
import { HOME_PAGE_SLUG } from "ui-pkg/pages/Page/constants/HOME_PAGE_SLUG";
import { PageProps } from "ui-pkg/pages/Page/Page";
import { NewsArticleProps } from "ui-pkg/pages/NewsArticle/NewsArticle";

// Schema props
export type InternalLinkWithTitleSchemaProps = {
  _type: "InternalLinkWithTitle";
  _key: string;
  internalUID: SanityReference<PageProps["page"] | NewsArticleProps["page"]>;
  to?: PageProps["page"] | NewsArticleProps["page"];
  title: string;
};

export type InternalLinkSchemaProps = {
  _type: "InternalLinkSansTitle";
  _key: string;
  internalUID: SanityReference<PageProps["page"] | NewsArticleProps["page"]>;
  to?: PageProps["page"] | NewsArticleProps["page"];
};

// Component props
export type InternalLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string | null;
  className?: string;
  children: any;
};

export const InternalLink = ({
  href,
  children,
  className,
  onClick,
  ...rest
}: InternalLinkProps) => {
  if (!href && !children) {
    return null;
  }

  if (!href) {
    return <span className={className}>{children || null}</span>;
  }

  return (
    <Link
      href={href === HOME_PAGE_SLUG ? "/" : `/${href}`}
      className={className}
      role="link"
      tabIndex={0}
      onClick={onClick}
      {...rest}
    >
      {children || null}
    </Link>
  );
};
