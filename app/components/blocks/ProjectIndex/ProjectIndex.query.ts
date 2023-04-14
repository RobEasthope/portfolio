import groq from 'groq';

export const PROJECT_INDEX_QUERY = groq`{
  _key,
  _type,
  "projects": *[_type == "project" && defined(slug.current)]{
    title,
    slug,
    thumbnailImage,
  } | order(endDate desc)
}`;
