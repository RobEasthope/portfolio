import Prismic from 'prismic-javascript';
import PrismicConfig from '../prismic-configuration';

export function refreshToolbar() {
  const maybeCurrentExperiment = this.api.currentExperiment();
  if (maybeCurrentExperiment) {
    window.PrismicToolbar.startExperiment(maybeCurrentExperiment.googleId());
  }
  window.PrismicToolbar.setup(PrismicConfig.apiEndpoint);
}

export function buildContext() {
  const { accessToken } = PrismicConfig;
  return Prismic.api(PrismicConfig.apiEndpoint, { accessToken }).then(api => ({
    api,
    endpoint: PrismicConfig.apiEndpoint,
    accessToken,
    linkResolver: PrismicConfig.linkResolver,
    // toolbar: refreshToolbar(),
  }));
}
