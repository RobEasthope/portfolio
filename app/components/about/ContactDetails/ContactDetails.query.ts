import groq from 'groq';

export const CONTACT_DETAILS_QUERY = groq`{
  _type,
  _id,
  "logo": *[_type== 'Header' && !(_id in path("drafts.**"))][0].logo,
  displayLogo,
  "details": *[_type== 'Details' && !(_id in path("drafts.**"))][0]{
    name,
    email,
    phoneNumber,
    linkedinUrl,
    githubUrl,
    portfolioUrl,
  }}
`;
