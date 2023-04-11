/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  ExternalLink,
  ExternalLinkSchemaProps,
  ExternalLinkWithTitleSchemaProps,
} from "ui-pkg/base/ExternalLink/ExternalLink";
import {
  InternalLink,
  InternalLinkSchemaProps,
  InternalLinkWithTitleSchemaProps,
} from "ui-pkg/base/InternalLink/InternalLink";

import {
  EmailLink,
  EmailLinkWithTitleSchemaProps,
} from "ui-pkg/base/EmailLink/EmailLink";

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
    case "EmailLinkWithTitle":
      return (
        <EmailLink email={link?.email} className={className} onClick={onClick} {...rest}>
          {children}
        </EmailLink>
      );

    case "InternalLinkWithTitle":
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

    case "ExternalLinkWithTitle":
      return (
        <ExternalLink href={link?.url} className={className} onClick={onClick} {...rest}>
          {children}
        </ExternalLink>
      );

    default:
      return null;
  }
};
