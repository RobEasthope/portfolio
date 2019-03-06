import React from "react";
import PropTypes from "prop-types";
import Grid from "styled-components-grid";

import PortfolioWrapper from "./PortfolioWrapper/PortfolioWrapper";
import PortfolioCards from "./PortfolioCards/PortfolioCards";
import MetaData from "../../components/MetaData/MetaData";
import PortfolioTitle from "./PortfolioTitle/PortfolioTitle";

class Portfolio extends React.Component {
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
        "portfolio",
        "portfolio-page",
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

          <PortfolioTitle>
            Hello, I'm Rob, a front end developer based in London.
          </PortfolioTitle>

          <PortfolioWrapper>
            <Grid>
              <PortfolioCards cards={doc.data.body} />
            </Grid>
          </PortfolioWrapper>
        </div>
      );
    }
    if (notFound) {
      return "No project found";
    }
    return "";
  }
}

Portfolio.propTypes = {
  prismicCtx: PropTypes.shape(PropTypes.shape),
  match: PropTypes.shape(PropTypes.shape)
};

export default Portfolio;
