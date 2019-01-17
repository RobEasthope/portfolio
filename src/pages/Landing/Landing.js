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

  componentDidUpdate() {
    // this.props.prismicCtx.toolbar();
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      // We are using the function to get a document by its uid
      return props.prismicCtx.api.getByUID(
        "landing",
        "landing-page",
        {},
        (err, doc) => {
          if (doc) {
            // We put the retrieved content in the state as a doc variable
            this.setState({ doc });
          } else {
            // We changed the state to display error not found if no matched doc
            this.setState({ notFound: !doc });
          }
        }
      );
    }
    return null;
  }

  render() {
    if (this.state.doc) {
      const { doc } = this.state;
      return (
        <div data-wio-id={this.state.doc.id}>
          <MetaData
            metaTitle={doc.data.meta_title}
            metaDescription={doc.data.meta_title}
            metaImage={doc.data.meta_image.url}
            currentUrl={this.props.match.url}
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
    } else if (this.state.notFound) {
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
