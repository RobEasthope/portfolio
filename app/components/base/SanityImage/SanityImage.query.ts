import groq from 'groq';

export const SANITY_IMAGE_QUERY = groq`
  "id": asset._ref,
  "preview": asset->metadata.lqip,
  "dimensions": {
    "width": asset->metadata.dimensions.width,
    "height": asset->metadata.dimensions.height,
    "originalAspectRatio": asset->metadata.dimensions.aspectRatio,
  },
  hotspot { x, y },
  crop {
    top,
    right,
    bottom,
    left,
  }
`;
