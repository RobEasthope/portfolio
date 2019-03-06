const fetchPage = (props, type, uid) => {
  const { prismicCtx } = props;

  if (prismicCtx) {
    return prismicCtx.api.getByUID(type, uid, {}, (err, doc) => {
      if (doc) {
        this.setState({ doc });
      } else {
        this.setState({ notFound: !doc });
      }
    });
  }
  return null;
};

export default fetchPage;
