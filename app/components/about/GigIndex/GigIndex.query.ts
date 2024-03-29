import groq from 'groq';

export const GIG_INDEX_QUERY = groq`{
  _key,
  _type,
  heading,
  gigsDisplayed,
  "allGigs": *[_type == "gig" ]{
    "client": employer -> {
      name,
      url,
    },
    jobTitle,
    description,
    startDate,
    endDate,
  } | order(endDate desc),
  "recentGigs": *[_type == "gig"  && endDate > "2020-01-01"]{
    "client": employer -> {
      name,
      url,
    },
    jobTitle,
    jobType,
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
