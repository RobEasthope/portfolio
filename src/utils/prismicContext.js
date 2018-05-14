import Prismic from 'prismic-javascript';

import PrismicConfig from '../prismic-config';

const refreshToolbar = () => {
  const maybeCurrentExperiment = this.api.currentExperiment();
  if (maybeCurrentExperiment) {
    window.PrismicToolbar.startExperiment(maybeCurrentExperiment.googleId());
  }
  window.PrismicToolbar.setup(PrismicConfig.apiEndpoint);
};

const buildContext = () => {
  const { accessToken } = PrismicConfig || process.env.PRISMIC_KEY;
  return Prismic.api(PrismicConfig.apiEndpoint, { accessToken }).then(api => ({
    api,
    endpoint: PrismicConfig.apiEndpoint,
    accessToken,
    linkResolver: PrismicConfig.linkResolver,
    toolbar: refreshToolbar,
  }));
};

export default buildContext;
