const fetchPage = (props, type, uid) => {
  if (props.prismicCtx) {
    return props.prismicCtx.api.getByUID(type, uid, {}, (err, doc) => {
      if (doc) {
        this.setState({ doc })
      } else {
        this.setState({ notFound: !doc })
      }
    })
  }
  return null
}

export default fetchPage
