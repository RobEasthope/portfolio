import groq from 'groq';

export const PROJECT_INDEX_QUERY = groq`{
  _key,
  _type,
  "projects": *[_type == "project"  && defined(slug.current) && defined(endDate)]{
    title,
    slug,
    thumbnailImage,
    containLogo,
    endDate,
    displayProject
  } | order(endDate desc)
}`;
