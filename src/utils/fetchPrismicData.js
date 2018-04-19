import Prismic from 'prismic-javascript';

const fetchPrismicData = () => {
  const prismicCall = Prismic.api('http://codex.prismic.io/api/v2', (error, api) => {
    const options = {};
    api.query('', options, (err, response) => {
      // An empty query will return all the documents
      if (err) {
        return err;
      }
      return response.documents;
    });
  });

  return prismicCall;
};

export default fetchPrismicData;
