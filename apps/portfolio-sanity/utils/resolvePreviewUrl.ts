export default function resolvePreviewUrl(document) {
  if (!process.env.SANITY_STUDIO_PREVIEW_KEY) {
    console.log('No preview key provided');
  }

  if (!process.env.SANITY_STUDIO_PREVIEW_SITE) {
    console.log('No preview site url provided');
  }

  if (!document._id) {
    console.log('No page ID has been provided');
  }

  return `${
    process.env.SANITY_STUDIO_PREVIEW_SITE
  }/api/preview/preview-page?id=${document._id}&key=${
    process.env.SANITY_STUDIO_PREVIEW_KEY
  }`;
}
