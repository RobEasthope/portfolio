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
  InPageLink,
  InPageLinkWithTitleSchemaProps,
} from "ui-pkg/base/InPageLink/InPageLink";
import {
  EmailLink,
  EmailLinkWithTitleSchemaProps,
} from "ui-pkg/base/EmailLink/EmailLink";
import {
  TelephoneLink,
  TelephoneLinkWithTitleSchemaProps,
} from "ui-pkg/base/TelephoneLink/TelephoneLink";

export type SuperLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  link:
    | ExternalLinkSchemaProps
    | InternalLinkSchemaProps
    | ExternalLinkWithTitleSchemaProps
    | InternalLinkWithTitleSchemaProps
    | EmailLinkWithTitleSchemaProps
    | TelephoneLinkWithTitleSchemaProps
    | InPageLinkWithTitleSchemaProps;
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

    case "InPageLinkWithTitle":
      return (
        <InPageLink blockID={link?.blockID} className={className} onClick={onClick}>
          {children}
        </InPageLink>
      );

    case "ExternalLinkWithTitle":
      return (
        <ExternalLink href={link?.url} className={className} onClick={onClick} {...rest}>
          {children}
        </ExternalLink>
      );

    case "EmailLinkWithTitle":
      return (
        <EmailLink email={link?.email} className={className} onClick={onClick} {...rest}>
          {children}
        </EmailLink>
      );

    case "TelephoneLinkWithTitle":
      return (
        <TelephoneLink
          phoneNumber={link?.phoneNumber}
          onClick={onClick}
          className={className}
          {...rest}
        >
          {children}
        </TelephoneLink>
      );

    default:
      return null;
  }
};
