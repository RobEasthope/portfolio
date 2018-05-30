import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'styled-components-grid';

import PortfolioWrapper from './PortfolioWrapper';
import PortfolioCards from './PortfolioCards';
import MetaData from '../../components/MetaData';
import PortfolioTitle from './PortfolioTitle';

class Portfolio extends React.Component {
  constructor() {
    super();

    this.state = {
      doc: null,
      notFound: false,
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
      return props.prismicCtx.api.getByUID('portfolio', 'portfolio-page', {}, (err, doc) => {
        if (doc) {
          this.setState({ doc });
        } else {
          this.setState({ notFound: !doc });
        }
      });
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

          <PortfolioWrapper>
            <PortfolioTitle>Hello, I'm Rob, a front end developer based in London.</PortfolioTitle>
            <Grid>
              <PortfolioCards cards={doc.data.body} />
            </Grid>
          </PortfolioWrapper>
        </div>
      );
    } else if (this.state.notFound) {
      return 'No project found';
    }
    return '';
  }
}

Portfolio.propTypes = {
  prismicCtx: PropTypes.shape(PropTypes.shape),
  match: PropTypes.shape(PropTypes.shape),
};

export default Portfolio;
