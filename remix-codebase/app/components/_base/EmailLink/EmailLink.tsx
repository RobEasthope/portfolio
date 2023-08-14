import classNames from 'classnames';

// Schema props
export type EmailLinkWithTitleSchemaProps = {
  _type: 'EmailLinkWithTitle';
  _key: string;
  title: string;
  email: string;
};

export type EmailLinkSchemaProps = {
  _type: 'EmailLinkSansTitle';
  _key: string;
  newTab: boolean;
  email: string;
};

// Component props
export type EmailLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  email: string | null;
  className?: string;
  children: any;
};

export const EmailLink = ({
  email,
  children,
  className,
  ...rest
}: EmailLinkProps) => {
  if (!email && !children) {
    return null;
  }

  if (!email) {
    return <span className={className}>{children || null}</span>;
  }

  return (
    <a
      href={`mailto:${email}`}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(className, 'hover:text-saffron duration-300')}
      {...rest}
    >
      {children || null}
    </a>
  );
};
