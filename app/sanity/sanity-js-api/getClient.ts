import { sanityAPI } from '~/sanity/sanity-js-api/sanityAPI';
import { sanityPreviewAPI } from '~/sanity/sanity-js-api/sanityPreviewAPI';

export const getClient = (props: { preview: boolean }) => {
  const { preview } = props;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return preview ? sanityPreviewAPI : sanityAPI;
};
