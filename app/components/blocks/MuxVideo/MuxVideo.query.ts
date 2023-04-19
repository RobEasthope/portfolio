import groq from 'groq';

export const MUX_VIDEO_QUERY = groq`{
  _type,
  _key,
  "muxVideo": rawMuxVideo.asset->,
  autoPlay,
  loop,
  muted,
  caption,
  maxWidth
}`;
