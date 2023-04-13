import { sanityAPI } from '~/utils/sanity-js-api/sanityAPI';
import { sanityPreviewAPI } from '~/utils/sanity-js-api/sanityPreviewAPI';

export const getClient = (props: { preview: boolean }) => {
  const { preview } = props;

  return preview ? sanityPreviewAPI : sanityAPI;
};
