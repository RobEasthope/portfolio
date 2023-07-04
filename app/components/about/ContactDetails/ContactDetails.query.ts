import groq from 'groq';

export const CONTACT_DETAILS_QUERY = groq`{
  _type,
  _id,
  "logo": *[_type== 'Header' ][0].logo,
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
