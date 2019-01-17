import React from "react";

import qs from "qs";
import prismicLinkResolver from "../../prismic-link-resolver";

export default class Preview extends React.Component {
  componentWillReceiveProps(props) {
    const params = qs.parse(props.location.search.slice(1));
    props.prismicCtx.api
      .previewSession(params.token, prismicLinkResolver.linkResolver, "/")
      .then(url => {
        props.history.push(url);
      });
  }

  render() {
    return <p>Loading previews...</p>;
  }
}
