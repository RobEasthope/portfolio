import groq from "groq";

export const SOCIAL_MEDIA_QUERY = groq`
  *[_type== 'SocialMedia' && !(_id in path("drafts.**"))][0]{...}
`;
