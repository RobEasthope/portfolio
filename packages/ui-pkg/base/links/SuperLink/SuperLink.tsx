import {
  ExternalLink,
  ExternalLinkSchemaProps,
  ExternalLinkWithTitleSchemaProps,
} from "ui-pkg/base/links/ExternalLink/ExternalLink";
import {
  InternalLink,
  InternalLinkSchemaProps,
  InternalLinkWithTitleSchemaProps,
} from "ui-pkg/base/links/InternalLink/InternalLink";

export type SuperLinkProps = {
  link:
    | ExternalLinkSchemaProps
    | InternalLinkSchemaProps
    | ExternalLinkWithTitleSchemaProps
    | InternalLinkWithTitleSchemaProps;
  className?: string;
  children: unknown;
  onClick?: VoidFunction;
};

export const SuperLink = ({ link, className, children, onClick }: SuperLinkProps) => {
  switch (link._type) {
    case "InternalLinkWithTitle":
      return (
        <InternalLink
          href={link?.to?.slug?.current}
          className={className}
          onClick={onClick}
        >
          {children}
        </InternalLink>
      );

    case "ExternalLinkWithTitle":
      return (
        <ExternalLink href={link?.url} className={className} onClick={onClick}>
          {children}
        </ExternalLink>
      );

    default:
      return null;
  }
};
