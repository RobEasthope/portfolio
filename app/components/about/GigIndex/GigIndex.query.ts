import groq from 'groq';

export const GIG_INDEX_QUERY = groq`{
  _key,
  _type,
  heading,
  "gigs": *[_type == "gig" && !(_id in path("drafts.**")) && defined(startDate)]{
    employer,
    jobTitle,
    description,
    startDate,
    endDate,
  } | order(endDate desc)
}`;
