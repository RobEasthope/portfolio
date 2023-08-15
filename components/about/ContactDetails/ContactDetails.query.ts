import groq from 'groq';
import { SANITY_IMAGE_QUERY } from 'components/_base/SanityImage/SanityImage.query';

export const CONTACT_DETAILS_QUERY = groq`{
  _type,
  _id,
  "logo": *[_type== 'Header' ][0]{"asset": logo{${SANITY_IMAGE_QUERY}}},
  displayLogo,
  "details": *[_type== 'Details' ][0]{
    name,
    email,
    phoneNumber,
    linkedinUrl,
    prettyLinkedinUrl,
    githubUrl,
    prettyGithubUrl,
    portfolioUrl,
    prettyPortfolioUrl,
  }}
`;
