import groq from 'groq';

export const EDUCATION_QUERY = groq`{
  _key,
  _type,
  heading,
  "education": *[_type == "EduInstitution" && !(_id in path("drafts.**")) && defined(startDate)]{
    name,
    url,
    qualification,
    startDate,
    endDate,
    logo,
  } | order(startDate desc),
  
}`;
3;
