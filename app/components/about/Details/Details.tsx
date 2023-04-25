import { Box } from '~/components/base/Box/Box';
import { EmailLink } from '~/components/base/EmailLink/EmailLink';
import { ExternalLink } from '~/components/base/ExternalLink/ExternalLink';
import { Type } from '~/components/base/Type/Type';

export type DetailsProps = {
  name: string;
  email: string;
  phoneNumber: string;
  twitterUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  portfolioUrl: string;
};

export const Details = ({
  name,
  email,
  phoneNumber,
  twitterUrl,
  linkedinUrl,
  githubUrl,
  portfolioUrl,
}: DetailsProps) => (
  <Box as="section" blockSpacing>
    <Box as="div" className="max-w-prose mx-auto">
      <Type as="h1">{name}</Type>
      <EmailLink email={email}>{email}</EmailLink>
      <Type as="p">{phoneNumber}</Type>
      <ExternalLink href={twitterUrl}>Twitter</ExternalLink>
      <ExternalLink href={linkedinUrl}>LinkedIn</ExternalLink>
      <ExternalLink href={githubUrl}>Github</ExternalLink>
      <ExternalLink href={portfolioUrl}>Portfolio</ExternalLink>
    </Box>
  </Box>
);

export default Details;
