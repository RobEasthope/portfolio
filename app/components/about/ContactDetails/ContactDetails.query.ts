import groq from 'groq';

export const CONTACT_DETAILS_QUERY = groq`{
  _type,
  _id,
  displayLogo,
  "details": *[_type== 'Details' && !(_id in path("drafts.**"))][0]{
    name,
    email,
    phoneNumber,
    twitterUrl,
    linkedinUrl,
    githubUrl,
    portfolioUrl,
  }}
`;