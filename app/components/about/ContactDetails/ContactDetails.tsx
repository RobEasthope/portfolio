import { METADATA_HARD_CODED_FALLBACKS } from '~/constants/METADATA_HARD_CODED_FALLBACKS';

import { Box } from '~/components/_base/Box/Box';
import { EmailLink } from '~/components/_base/EmailLink/EmailLink';
import { ExternalLink } from '~/components/_base/ExternalLink/ExternalLink';
import { SanityImage } from '~/components/_base/SanityImage/SanityImage';
import { Type } from '~/components/_base/Type/Type';

import type { HeaderProps } from '~/components/navigation/Header/Header';

export type ContactDetailsProps = {
  _id: 'ContactDetails';
  logo: HeaderProps['logo'];
  displayLogo: boolean;
  details: {
    name: string;
    email: string;
    phoneNumber: string;
    linkedinUrl: string;
    prettyLinkedinUrl: string;
    prettyGithubUrl: string;
    prettyPortfolioUrl: string;
  };
};

export const ContactDetails = ({
  logo,
  displayLogo,
  details,
}: ContactDetailsProps) => (
  <Box as="section" blockSpacing>
    <Box
      as="div"
      className="max-w-prose mx-auto flex flex-col items-center gap-0.5"
    >
      {displayLogo && (
        <SanityImage
          src={logo}
          alt={METADATA_HARD_CODED_FALLBACKS.TITLE}
          className="h-1.25 w-1.25 hidden print:block"
        />
      )}
      <Type as="h1" className="font-bold">
        {details?.name}
      </Type>
      <Box as="div" className="flex gap-0.25 flex-wrap justify-center">
        <EmailLink email={details?.email} className="inline-block">
          {details?.email}
        </EmailLink>
        /
        <ExternalLink
          href={`tel:${details?.phoneNumber}`}
          className="inline-block"
        >
          {details?.phoneNumber}
        </ExternalLink>
      </Box>

      <Box
        as="div"
        className="flex print:gap-0.25 italic flex-wrap justify-center"
      >
        <ExternalLink href={details?.linkedinUrl}>
          LinkedIn<span className="hidden print:inline">:</span>
          <span className="hidden print:inline">
            {details?.prettyLinkedinUrl}
          </span>
        </ExternalLink>
        <Type as="span" className="mx-0.125">
          /
        </Type>
        <ExternalLink href={details?.githubUrl}>
          Github<span className="hidden print:inline">:</span>
          <span className="hidden print:inline">
            {details?.prettyGithubUrl}
          </span>
        </ExternalLink>
        <Type as="span" className="print:hidden mx-0.125">
          /
        </Type>
        <ExternalLink href={details?.portfolioUrl}>
          Portfolio<span className="hidden print:inline">:</span>
          <span className="hidden print:inline">
            {details?.prettyPortfolioUrl}
          </span>
        </ExternalLink>
      </Box>
    </Box>
  </Box>
);

export default ContactDetails;
