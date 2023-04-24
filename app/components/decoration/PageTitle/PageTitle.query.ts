import groq from 'groq';

export const PAGE_TITLE_QUERY = groq`{
  _key,
  _type,
  "heading": ^.title,
}`;
