import groq from 'groq';

export const ORGANISATIONS_QUERY = groq`{
  _key,
  _type,
  "organisations": *[_type == "organisation" && !(_id in path("drafts.**")) && hiddenOrg == false]{
    _id,
    name,
    url
  } | order(name desc)
}`;