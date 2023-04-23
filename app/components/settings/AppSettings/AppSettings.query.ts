import groq from 'groq';

export const APP_SETTINGS_QUERY = groq`*[_type== 'AppSettings'][0]{
    "homePageSlug": rawHomePageRef->slug.current
  }
`;
