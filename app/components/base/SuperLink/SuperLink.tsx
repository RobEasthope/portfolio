/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { EmailLinkWithTitleSchemaProps } from '~/components/base/EmailLink/EmailLink';
import { EmailLink } from '~/components/base/EmailLink/EmailLink';
import type {
  ExternalLinkSchemaProps,
  ExternalLinkWithTitleSchemaProps,
} from '~/components/base/ExternalLink/ExternalLink';
import { ExternalLink } from '~/components/base/ExternalLink/ExternalLink';
import type {
  InternalLinkSchemaProps,
  InternalLinkWithTitleSchemaProps,
} from '~/components/base/InternalLink/InternalLink';
import { InternalLink } from '~/components/base/InternalLink/InternalLink';

export type SuperLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  link:
    | EmailLinkWithTitleSchemaProps
    | ExternalLinkSchemaProps
    | ExternalLinkWithTitleSchemaProps
    | InternalLinkSchemaProps
    | InternalLinkWithTitleSchemaProps
    | undefined;
  className?: string;
  children: unknown;
  onClick?: () => void;
};

export const SuperLink = ({
  link,
  className,
  children,
  onClick,
  ...rest
}: SuperLinkProps) => {
  if (!link && !children) {
    return null;
  }

  switch (link?._type) {
    case 'EmailLinkWithTitle':
      return (
        <EmailLink
          email={link?.email}
          className={className}
          onClick={onClick}
          {...rest}
        >
          {children}
        </EmailLink>
      );

    case 'InternalLinkWithTitle':
      return (
        <InternalLink
          href={link?.to?.slug?.current || null}
          className={className}
          onClick={onClick}
          {...rest}
        >
          {children}
        </InternalLink>
      );

    case 'ExternalLinkWithTitle':
      return (
        <ExternalLink
          href={link?.url}
          className={className}
          onClick={onClick}
          {...rest}
        >
          {children}
        </ExternalLink>
      );

    default:
      return null;
  }
};
