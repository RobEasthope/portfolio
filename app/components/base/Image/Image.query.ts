import groq from 'groq';

export const IMAGE_QUERY = groq`
  {
    "id": asset._ref,
    "preview": asset->metadata.lqip,
    hotspot { x, y },
    crop {
      bottom,
      left,
      right,
      top,
    }
  }
`;
