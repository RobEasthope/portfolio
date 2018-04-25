import Prismic from 'prismic-javascript';
import PrismicConfig from './prismic-configuration';

const buildContext = () => {
  const accessToken = PrismicConfig.accessToken;
  const PrismicContext = Prismic.api(PrismicConfig.apiEndpoint, { accessToken }).then(api => ({
    api,
    endpoint: PrismicConfig.apiEndpoint,
    accessToken,
    linkResolver: PrismicConfig.linkResolver,
    toolbar: this.refreshToolbar,
  }));

  return PrismicContext;
};

export default buildContext;
