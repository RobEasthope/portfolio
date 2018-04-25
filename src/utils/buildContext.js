import Prismic from 'prismic-javascript';
import PrismicConfig from './prismic-configuration';

const refreshToolbar = () => {
  const maybeCurrentExperiment = this.api.currentExperiment();
  if (maybeCurrentExperiment) {
    window.PrismicToolbar.startExperiment(maybeCurrentExperiment.googleId());
  }
  window.PrismicToolbar.setup(PrismicConfig.apiEndpoint);
};

const buildContext = () => {
  const accessToken = PrismicConfig.accessToken;
  const PrismicContext = Prismic.api(PrismicConfig.apiEndpoint, { accessToken }).then(api => ({
    api,
    endpoint: PrismicConfig.apiEndpoint,
    accessToken,
    linkResolver: PrismicConfig.linkResolver,
    toolbar: refreshToolbar,
  }));

  return PrismicContext;
};

export default buildContext;
