import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import MetaData from "../../components/MetaData/MetaData";
import Error404 from "../Error404/Error404";

import GeneralContentSlice from "../../slices/GeneralContentSlice/GeneralContentSlice";
import SlimImageGallery from "../../slices/SlimImageGallery/SlimImageGallery";
import WideImageGallery from "../../slices/WideImageGallery/WideImageGallery";

class About extends React.Component {
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
        "about",
        "about-page",
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

    if (doc) {
      return (
        <div data-wio-id={doc.id}>
          <MetaData
            metaTitle={doc.data.meta_title}
            metaDescription={doc.data.meta_title}
            metaImage={doc.data.meta_image.url}
            currentUrl={match.url}
          />

          {doc.data.body.map(slice => {
            switch (slice.slice_type) {
              case "general_content":
                return (
                  <GeneralContentSlice key={shortid.generate()} slice={slice} />
                );

              case "slim_image_gallery":
                return (
                  <SlimImageGallery key={shortid.generate()} slice={slice} />
                );

              case "wide_image_gallery":
                return (
                  <WideImageGallery key={shortid.generate()} slice={slice} />
                );

              default:
                return "Untemplated slice";
            }
          })}
        </div>
      );
    }
    if (notFound) {
      return <Error404 />;
    }
    return "";
  }
}

About.defaultProps = {
  prismicCtx: {},
  match: {}
};

About.propTypes = {
  prismicCtx: PropTypes.shape(PropTypes.shape),
  match: PropTypes.shape(PropTypes.shape)
};

export default About;
