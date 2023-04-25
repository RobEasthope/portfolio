import { METADATA_HARD_CODED_FALLBACKS } from '~/constants/METADATA_HARD_CODED_FALLBACKS';

import { Box } from '~/components/base/Box/Box';
import { EmailLink } from '~/components/base/EmailLink/EmailLink';
import { ExternalLink } from '~/components/base/ExternalLink/ExternalLink';
import { SanityImage } from '~/components/base/SanityImage/SanityImage';
import { Type } from '~/components/base/Type/Type';

import type { HeaderProps } from '~/components/navigation/Header/Header';

export type ContactDetailsProps = {
  _id: 'ContactDetails';
  logo: HeaderProps['logo'];
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
  logo,
  displayLogo,
  details,
}: ContactDetailsProps) => (
  <Box as="section" blockSpacing>
    <Box as="div" className="max-w-prose mx-auto">
      <SanityImage
        asset={logo}
        alt={METADATA_HARD_CODED_FALLBACKS.TITLE}
        mode="contain"
        maxWidth={200}
        className="h-1.25 w-1.25"
      />
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
