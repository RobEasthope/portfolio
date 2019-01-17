import React from "react";
import PropTypes from "prop-types";
import PrismicReact from "prismic-reactjs";

import MetaData from "../../components/MetaData/MetaData";
import Error404 from "../Error404/Error404";

import LandingGreeting from "./LandingGreeting/LandingGreeting";
import LandingBkg from "./LandingBkg/LandingBkg";

class Landing extends React.Component {
  constructor() {
    super();

    this.state = {
      doc: null,
      notFound: false
    };
  }

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      return props.prismicCtx.api.getByUID(
        "landing",
        "landing-page",
        {},
        (err, doc) => {
          if (doc) {
            this.setState({ doc });
          } else {
            console.log(err);
            this.setState({ notFound: true });
          }
        }
      );
    }
    return null;
  }

  render() {
    const { doc, notFound } = this.state;
    const { match } = this.props;

    if (this.state.doc) {
      return (
        <div data-wio-id={doc.id}>
          <MetaData
            metaTitle={doc.data.meta_title}
            metaDescription={doc.data.meta_title}
            metaImage={doc.data.meta_image.url}
            currentUrl={match.url}
          />
          <LandingBkg src={doc.data.landing_image.url} type="bg" fluid>
            <LandingGreeting>
              {PrismicReact.RichText.asText(doc.data.greeting)}
            </LandingGreeting>
          </LandingBkg>

          {/* {PrismicReact.RichText.asText(doc.data.placeholder_tagline)} */}
          {/* This is how to insert a Rich Text field as plain text */}
          {/* This is how to insert a Rich Text field into your template as html */}
        </div>
      );
    }
    if (notFound) {
      return <Error404 />;
    }
    return "";
  }
}

Landing.propTypes = {
  prismicCtx: PropTypes.shape(PropTypes.shape),
  match: PropTypes.shape(PropTypes.shape)
};

export default Landing;
