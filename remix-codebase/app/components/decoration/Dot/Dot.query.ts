import groq from 'groq';

export const DOT_QUERY = groq`{
  _key,
  _type,
  displayDot,
  spacingTop,
  spacingBottom,
}`;
