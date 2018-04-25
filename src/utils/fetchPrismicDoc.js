const fetchPrismicDoc = (props, type, uid) => {
  if (props.prismicCtx) {
    // We are using the function to get a document by its uid
    return props.prismicCtx.api.getByUID(type, uid, {}, (err, doc) => {
      if (doc) {
        // We put the retrieved content in the state as a doc variable
        this.setState({ doc });
      } else {
        // We changed the state to display error not found if no matched doc
        this.setState({ notFound: !doc });
      }
    });
  }
  return null;
};

export default fetchPrismicDoc;
