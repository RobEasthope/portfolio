import groq from 'groq';

export const GIG_INDEX_QUERY = groq`{
  _key,
  _type,
  heading,
  "allGigs": *[_type == "gig" && !(_id in path("drafts.**")) && defined(startDate)]{
    "client": employer -> {
      name,
      url,
    },
    jobTitle,
    description,
    startDate,
    endDate,
  } | order(endDate desc),
  "selectedGigs": selectedGigs[]->{
    "client": employer -> {
      name,
      url,
    },
    jobTitle,
    description,
    startDate,
    endDate,
  }
}`;
