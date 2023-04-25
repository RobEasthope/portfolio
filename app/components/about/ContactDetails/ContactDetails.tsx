import { Box } from '~/components/base/Box/Box';
import { EmailLink } from '~/components/base/EmailLink/EmailLink';
import { ExternalLink } from '~/components/base/ExternalLink/ExternalLink';
import { Type } from '~/components/base/Type/Type';

export type ContactDetailsProps = {
  _id: 'ContactDetails';
  displayLogo: boolean;
  details: {
    name: string;
    email: string;
    phoneNumber: string;
    twitterUrl: string;
    linkedinUrl: string;
    githubUrl: string;
    portfolioUrl: string;
  };
};

export const ContactDetails = ({
  displayLogo,
  details,
}: ContactDetailsProps) => (
  <Box as="section" blockSpacing>
    <Box as="div" className="max-w-prose mx-auto">
      <Type as="h1">{details?.name}</Type>
      <Box as="div" className="flex gap-0.5">
        <EmailLink email={details?.email}>{details?.email}</EmailLink>
        <ExternalLink href={`tel:${details?.phoneNumber}`}>
          {details?.phoneNumber}
        </ExternalLink>
      </Box>

      <Box as="div" className="flex gap-0.5">
        <ExternalLink href={details?.linkedinUrl}>LinkedIn</ExternalLink>
        <ExternalLink href={details?.githubUrl}>Github</ExternalLink>
        <ExternalLink href={details?.portfolioUrl}>Portfolio</ExternalLink>
      </Box>
    </Box>
  </Box>
);

export default ContactDetails;
