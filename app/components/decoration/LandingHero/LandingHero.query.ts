import groq from 'groq';

export const LANDING_HERO_QUERY = groq`{
  _type,
  _key,
  bkgMode,
  bkgImage,
  "bkgVideo": rawMuxVideo.asset->,
  caption
}`;
