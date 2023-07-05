import groq from 'groq';

export const SANITY_IMAGE_QUERY = groq`
  {
    "id": asset._ref,
    "preview": asset->metadata.lqip,
    "dimensions": asset->metadata.dimensions,
    hotspot { x, y },
    crop {
      top,
      right,
      bottom,
      left,
    }
  }
`;
