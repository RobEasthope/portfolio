import Prismic from 'prismic-javascript';

import prismicLinkResolver from '../prismic-link-resolver';

const refreshToolbar = () => {
  const maybeCurrentExperiment = this.api.currentExperiment();
  if (maybeCurrentExperiment) {
    window.PrismicToolbar.startExperiment(maybeCurrentExperiment.googleId());
  }
  window.PrismicToolbar.setup(process.env.REACT_APP_PRISMIC_ENDPOINT);
};

const buildContext = () => {
  const accessToken = process.env.REACT_APP_PRISMIC_KEY;
  return Prismic.api(process.env.REACT_APP_PRISMIC_ENDPOINT, { accessToken }).then(api => ({
    api,
    endpoint: process.env.REACT_APP_PRISMIC_ENDPOINT,
    accessToken,
    linkResolver: prismicLinkResolver,
    toolbar: refreshToolbar,
  }));
};

export default buildContext;
