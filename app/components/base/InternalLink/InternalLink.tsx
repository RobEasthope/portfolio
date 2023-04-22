import { Link } from '@remix-run/react';
import classNames from 'classnames';
import type { SanityReference } from 'sanity-codegen';

import type { PageProps } from '~/components/pages/Page/Page';
import { HOME_PAGE_SLUG } from '~/components/pages/Page/constants/HOME_PAGE_SLUG';

// Schema props
export type InternalLinkWithTitleSchemaProps = {
  _type: 'InternalLinkWithTitle';
  _key: string;
  internalUID: SanityReference<PageProps['page']>;
  to?: PageProps['page'];
  title: string;
};

export type InternalLinkSchemaProps = {
  _type: 'InternalLinkSansTitle';
  _key: string;
  internalUID: SanityReference<PageProps['page']>;
  to?: PageProps['page'];
};

// Component props
export type InternalLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string | null;
  className?: string;
  children: any;
  homePageSlug: string;
};

export const InternalLink = ({
  href,
  children,
  className,
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
      to={href === HOME_PAGE_SLUG ? '/' : `/${href}`}
      role="link"
      tabIndex={0}
      className={classNames(className, 'hover:text-saffron duration-300')}
      {...rest}
    >
      {children || null}
    </Link>
  );
};
